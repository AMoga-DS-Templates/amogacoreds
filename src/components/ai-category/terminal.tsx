// Official example: https://ui.shadcn.com/docs/ai-elements/radix/terminal.md
"use client";

import type { AiConversationProps } from "./support/types";

import * as React from "react";
import type { UIMessage } from "ai";
import { TerminalIcon } from "lucide-react";

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
  {
    terminal: { output: string };
  },
  {
    runCommand: {
      input: { command: string };
      output: { exitCode: number };
    };
  }
>;

type ToolPart = Extract<
  ChatMessage["parts"][number],
  { type: "tool-runCommand" }
>;

function getTitle(part: ToolPart, running: boolean) {
  const command = part.input?.command;

  if (part.state === "output-available") {
    return part.output.exitCode === 0
      ? `Ran ${command}`
      : `${command} exited with code ${part.output.exitCode}`;
  }

  return running ? `Running ${command}` : `Failed to run ${command}`;
}

function getOutput(message: ChatMessage, toolCallId: string) {
  for (const part of message.parts) {
    if (part.type === "data-terminal" && part.id === toolCallId) {
      return part.data.output;
    }
  }

  return "";
}

function CommandRow({
  part,
  output,
  streaming,
  defaultOpen,
}: {
  part: ToolPart;
  output: string;
  streaming: boolean;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  const running =
    streaming &&
    (part.state === "input-streaming" || part.state === "input-available");
  const failed =
    !running &&
    (part.state !== "output-available" || part.output.exitCode !== 0);

  return (
    <TraceCollapsible
      open={open ?? (running && output.length > 0)}
      onOpenChange={setOpen}
    >
      <TraceCollapsibleTrigger>
        <TraceLine status={running ? "running" : failed ? "error" : undefined}>
          <TraceIcon>
            <TerminalIcon />
          </TraceIcon>
          <TraceTitle>{getTitle(part, running)}</TraceTitle>
        </TraceLine>
      </TraceCollapsibleTrigger>
      <TraceCollapsibleContent>
        <CodeBlock size="sm">
          <CodeBlockContent wrap className="max-h-64">
            {part.state === "output-error" ? part.errorText : output}
          </CodeBlockContent>
        </CodeBlock>
      </TraceCollapsibleContent>
    </TraceCollapsible>
  );
}

export type AiTerminalProps = AiConversationProps<ChatMessage>;

export function AiTerminal(props: AiTerminalProps) {
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
                      output={getOutput(message, part.toolCallId)}
                      streaming={streaming}
                      defaultOpen={
                        busy ? undefined : part === tools.slice(-1)[0]
                      }
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

export { AiTerminal as TerminalDemo };
