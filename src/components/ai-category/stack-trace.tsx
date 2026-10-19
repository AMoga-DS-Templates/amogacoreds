// Official example: https://ui.shadcn.com/docs/ai-elements/radix/stack-trace.md
"use client";

import type { AiConversationProps } from "./support/types";

import type { UIDataTypes, UIMessage } from "ai";
import { FileCodeIcon, LayersIcon, TerminalIcon } from "lucide-react";

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

type ChatMessage = UIMessage<
  unknown,
  UIDataTypes,
  {
    runCommand: {
      input: { command: string };
      output: { stdout: string };
    };
  }
>;

type ToolPart = Extract<
  ChatMessage["parts"][number],
  { type: "tool-runCommand" }
>;

function parseFrame(line: string) {
  const match = line.match(/^at (.+) \((.+):(\d+):(\d+)\)$/);

  return {
    line,
    name: match?.[1],
    file: match?.[2],
    lineNumber: match?.[3],
    internal: line.includes("node_modules") || line.includes("node:"),
  };
}

function StackTrace({ stack }: { stack: string }) {
  const [error, ...lines] = stack.split("\n").map((line) => line.trim());
  const frames = lines.map(parseFrame);
  const appFrames = frames.filter((frame) => !frame.internal);
  const internalFrames = frames.filter((frame) => frame.internal);

  return (
    <TraceCollapsible defaultOpen>
      <TraceCollapsibleTrigger>
        <TraceLine status="error">
          <TraceIcon>
            <TerminalIcon />
          </TraceIcon>
          <TraceTitle>Failed: {error}</TraceTitle>
        </TraceLine>
      </TraceCollapsibleTrigger>
      <TraceCollapsibleContent className="flex flex-col gap-2">
        <p className="font-mono text-xs text-destructive">{error}</p>
        <Trace>
          {appFrames.map((frame) => (
            <a key={frame.line} href={`#${frame.file}:${frame.lineNumber}`}>
              <TraceLine>
                <TraceIcon>
                  <FileCodeIcon />
                </TraceIcon>
                <TraceTitle>
                  {frame.name} in {frame.file}:{frame.lineNumber}
                </TraceTitle>
              </TraceLine>
            </a>
          ))}
          <TraceCollapsible>
            <TraceCollapsibleTrigger>
              <TraceLine>
                <TraceIcon>
                  <LayersIcon />
                </TraceIcon>
                <TraceTitle>
                  {internalFrames.length} framework frames
                </TraceTitle>
              </TraceLine>
            </TraceCollapsibleTrigger>
            <TraceCollapsibleContent>
              <ol className="flex flex-col gap-1 overflow-x-auto rounded-md bg-muted p-3 font-mono text-xs">
                {internalFrames.map((frame) => (
                  <li key={frame.line} className="whitespace-nowrap">
                    {frame.line}
                  </li>
                ))}
              </ol>
            </TraceCollapsibleContent>
          </TraceCollapsible>
        </Trace>
      </TraceCollapsibleContent>
    </TraceCollapsible>
  );
}

function CommandRow({
  part,
  streaming,
}: {
  part: ToolPart;
  streaming: boolean;
}) {
  const command = part.input?.command;

  if (part.state === "output-error") {
    return <StackTrace stack={part.errorText} />;
  }

  if (part.state === "output-available") {
    return (
      <TraceCollapsible>
        <TraceCollapsibleTrigger>
          <TraceLine>
            <TraceIcon>
              <TerminalIcon />
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
    <TraceLine status={streaming ? "running" : "error"}>
      <TraceIcon>
        <TerminalIcon />
      </TraceIcon>
      <TraceTitle>
        {streaming ? "Running" : "Failed to run"} {command}
      </TraceTitle>
    </TraceLine>
  );
}

export type AiStackTraceProps = AiConversationProps<ChatMessage>;

export function AiStackTrace(props: AiStackTraceProps) {
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
        const tools = message.parts.filter(
          (part) => part.type === "tool-runCommand",
        );
        const text = getMessageText(message);

        return (
          <Message key={message.id}>
            <MessageContent className="gap-4">
              {tools.length > 0 && (
                <Trace>
                  {tools.map((part) => (
                    <CommandRow
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

export { AiStackTrace as StackTraceDemo };
