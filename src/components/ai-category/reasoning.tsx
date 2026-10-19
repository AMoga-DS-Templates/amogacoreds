// Official example: https://ui.shadcn.com/docs/ai-elements/radix/reasoning.md
"use client";

import type { UIMessage } from "ai";
import type { AiConversationProps } from "./support/types";

import * as React from "react";
import { getMessageText } from "./support/helpers";
import {
  Bubble,
  BubbleContent,
} from "@/components/ai-category/primitives/bubble";
import { Button } from "@/components/ui/button";
import {
  Message,
  MessageContent,
} from "@/components/ai-category/primitives/message";
import {
  Trace,
  TraceCollapsible,
  TraceCollapsibleContent,
  TraceCollapsibleTrigger,
  TraceLine,
  TraceTitle,
} from "@/components/ai-category/primitives/trace";

function ReasoningRow({
  text,
  running,
  defaultOpen,
}: {
  text: string;
  running: boolean;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = React.useState(defaultOpen);

  const line = (
    <TraceLine status={running ? "running" : undefined}>
      <TraceTitle>{running ? "Thinking" : "Thought for 5s"}</TraceTitle>
    </TraceLine>
  );

  if (text.length === 0) {
    return line;
  }

  return (
    <TraceCollapsible open={open ?? running} onOpenChange={setOpen}>
      <TraceCollapsibleTrigger>{line}</TraceCollapsibleTrigger>
      <TraceCollapsibleContent className="whitespace-pre-wrap">
        {text}
      </TraceCollapsibleContent>
    </TraceCollapsible>
  );
}

export type AiReasoningProps = AiConversationProps<UIMessage>;

export function AiReasoning(props: AiReasoningProps) {
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
        const reasoning = message.parts.filter(
          (part) => part.type === "reasoning",
        );
        const text = getMessageText(message);

        return (
          <Message key={message.id}>
            <MessageContent className="gap-4">
              {reasoning.length > 0 && (
                <Trace>
                  {reasoning.map((part, index) => (
                    <ReasoningRow
                      key={index}
                      text={part.text}
                      running={streaming && part.state === "streaming"}
                      defaultOpen={busy ? undefined : true}
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

export { AiReasoning as ReasoningDemo };
