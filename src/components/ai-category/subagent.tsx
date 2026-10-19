// Official example: https://ui.shadcn.com/docs/ai-elements/radix/subagent.md
"use client";

import type { AiConversationProps } from "./support/types";

import * as React from "react";
import type { UIDataTypes, UIMessage } from "ai";
import {
  CircleAlertIcon,
  CircleCheckIcon,
  LoaderCircleIcon,
} from "lucide-react";

import { getMessageText } from "./support/helpers";
import {
  Bubble,
  BubbleContent,
} from "@/components/ai-category/primitives/bubble";
import { Button } from "@/components/ui/button";
import {
  CodeBlock,
  CodeBlockContent,
} from "@/components/ai-category/primitives/code-block";
import {
  Message,
  MessageContent,
} from "@/components/ai-category/primitives/message";
import {
  Trace,
  TraceCollapsible,
  TraceCollapsibleContent,
  TraceCollapsibleTrigger,
  TraceIcon,
  TraceLine,
  TraceTitle,
} from "@/components/ai-category/primitives/trace";

type SubagentMessage = UIMessage<
  unknown,
  UIDataTypes,
  {
    runCommand: {
      input: { command: string };
      output: { stdout: string };
    };
  }
>;

type SubagentPart = SubagentMessage["parts"][number];

type ChatMessage = UIMessage<
  unknown,
  UIDataTypes,
  {
    researchAgent: {
      input: { task: string };
      output: SubagentMessage;
    };
  }
>;

type Part = ChatMessage["parts"][number];

function StepRow({
  part,
  running,
}: {
  part: Extract<SubagentPart, { type: "tool-runCommand" }>;
  running: boolean;
}) {
  const command = part.input?.command;

  if (part.state === "output-available") {
    return (
      <TraceCollapsible>
        <TraceCollapsibleTrigger>
          <TraceLine>
            <TraceIcon>
              <CircleCheckIcon />
            </TraceIcon>
            <TraceTitle>Ran {command}</TraceTitle>
          </TraceLine>
        </TraceCollapsibleTrigger>
        <TraceCollapsibleContent>
          <CodeBlock size="sm">
            <CodeBlockContent wrap className="max-h-64">
              {part.output.stdout}
            </CodeBlockContent>
          </CodeBlock>
        </TraceCollapsibleContent>
      </TraceCollapsible>
    );
  }

  return (
    <TraceLine status={running ? "running" : "error"}>
      <TraceIcon>
        {running ? (
          <LoaderCircleIcon className="animate-spin" />
        ) : (
          <CircleAlertIcon />
        )}
      </TraceIcon>
      <TraceTitle>
        {running ? "Running" : "Failed to run"} {command}
      </TraceTitle>
    </TraceLine>
  );
}

function SubagentRow({
  part,
  streaming,
}: {
  part: Extract<Part, { type: "tool-researchAgent" }>;
  streaming: boolean;
}) {
  const done = part.state === "output-available" && !part.preliminary;
  const running = !done && part.state !== "output-error" && streaming;
  const parts = part.state === "output-available" ? part.output.parts : [];
  const report = parts
    .map((agentPart) => (agentPart.type === "text" ? agentPart.text : ""))
    .join("");

  const line = (
    <TraceLine status={done ? undefined : running ? "running" : "error"}>
      <TraceIcon>
        {done ? (
          <CircleCheckIcon />
        ) : running ? (
          <LoaderCircleIcon className="animate-spin" />
        ) : (
          <CircleAlertIcon />
        )}
      </TraceIcon>
      <TraceTitle>
        {done ? "Ran" : running ? "Running" : "Failed to run"} the research
        subagent
      </TraceTitle>
    </TraceLine>
  );

  if (parts.length === 0) {
    return line;
  }

  return (
    <TraceCollapsible defaultOpen>
      <TraceCollapsibleTrigger>{line}</TraceCollapsibleTrigger>
      <TraceCollapsibleContent className="flex flex-col gap-3">
        <Trace>
          {parts.map((agentPart) =>
            agentPart.type === "tool-runCommand" ? (
              <StepRow
                key={agentPart.toolCallId}
                part={agentPart}
                running={running}
              />
            ) : null,
          )}
        </Trace>
        {report && <p>{report}</p>}
      </TraceCollapsibleContent>
    </TraceCollapsible>
  );
}

export type AiSubagentProps = AiConversationProps<ChatMessage>;

export function AiSubagent(props: AiSubagentProps) {
  const { messages = [], status = "ready", onReplay } = props;
  const busy = status === "submitted" || status === "streaming";

  return (
    <div className="flex min-h-72 w-full max-w-sm flex-col gap-4 py-6 text-sm">
      {messages.map((message) => {
        if (message.role === "user") {
          return (
            <Message key={message.id} align="end">
              <MessageContent>
                <Bubble align="end" variant="muted">
                  <BubbleContent>{getMessageText(message)}</BubbleContent>
                </Bubble>
              </MessageContent>
            </Message>
          );
        }

        const streaming = busy && message === messages.slice(-1)[0];
        const agents = message.parts.filter(
          (part) => part.type === "tool-researchAgent",
        );
        const text = getMessageText(message);

        return (
          <Message key={message.id}>
            <MessageContent className="gap-4">
              {agents.length > 0 && (
                <Trace>
                  {agents.map((part) => (
                    <SubagentRow
                      key={part.toolCallId}
                      part={part}
                      streaming={streaming}
                    />
                  ))}
                </Trace>
              )}
              {text && <p>{text}</p>}
            </MessageContent>
          </Message>
        );
      })}
      {!busy && onReplay && (
        <Button
          variant="outline"
          size="sm"
          className="mt-auto self-start"
          onClick={onReplay}
        >
          Replay
        </Button>
      )}
    </div>
  );
}

export { AiSubagent as SubagentDemo };
