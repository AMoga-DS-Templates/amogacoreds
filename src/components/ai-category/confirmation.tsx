// Official example: https://ui.shadcn.com/docs/ai-elements/radix/confirmation.md
"use client";

import type { AiConversationProps } from "./support/types";

import * as React from "react";
import type { UIDataTypes, UIMessage } from "ai";
import { CircleCheckIcon, LoaderCircleIcon, TerminalIcon } from "lucide-react";

import { getMessageText } from "./support/helpers";
import {
  Bubble,
  BubbleContent,
} from "@/components/ai-category/primitives/bubble";
import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
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

export type AiConfirmationProps = AiConversationProps<ChatMessage> & {
  onApprovalResponse?: (response: { id: string; approved: boolean }) => void;
  onContinue?: () => void;
  onReset?: () => void;
};

export function AiConfirmation(props: AiConfirmationProps) {
  const { messages = [], status = "ready", onReplay } = props;
  const { onApprovalResponse, onContinue, onReset } = props;
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

        return (
          <Message key={message.id}>
            <MessageContent className="gap-4">
              {message.parts.map((part, index) => {
                if (part.type === "text") {
                  return <p key={index}>{part.text}</p>;
                }

                if (part.type === "reasoning") {
                  return (
                    <Trace key={index}>
                      <ReasoningRow
                        text={part.text}
                        running={part.state === "streaming"}
                      />
                    </Trace>
                  );
                }

                if (part.type !== "tool-runCommand") {
                  return null;
                }

                // A pending approval is a prompt, not activity, so it sits outside Trace.
                if (part.state === "approval-requested") {
                  return (
                    <Item key={part.toolCallId} variant="outline" size="sm">
                      <ItemMedia variant="icon">
                        <TerminalIcon />
                      </ItemMedia>
                      <ItemContent>
                        <ItemTitle>Run {part.input.command}?</ItemTitle>
                        <ItemDescription>
                          The command runs in this project.
                        </ItemDescription>
                      </ItemContent>
                      <ItemActions>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            onApprovalResponse?.({
                              id: part.approval.id,
                              approved: false,
                            })
                          }
                        >
                          Deny
                        </Button>
                        <Button
                          size="sm"
                          onClick={() =>
                            onApprovalResponse?.({
                              id: part.approval.id,
                              approved: true,
                            })
                          }
                        >
                          Approve
                        </Button>
                      </ItemActions>
                    </Item>
                  );
                }

                const denied =
                  part.state === "output-denied" ||
                  (part.state === "approval-responded" &&
                    !part.approval.approved);

                return (
                  <Trace key={part.toolCallId}>
                    <TraceLine
                      status={
                        !denied && part.state !== "output-available"
                          ? "running"
                          : undefined
                      }
                    >
                      <TraceIcon>
                        <TerminalIcon />
                      </TraceIcon>
                      <TraceTitle>
                        {denied
                          ? "Denied"
                          : part.state === "output-available"
                            ? "Ran"
                            : "Running"}{" "}
                        {part.input?.command}
                      </TraceTitle>
                    </TraceLine>
                  </Trace>
                );
              })}
            </MessageContent>
          </Message>
        );
      })}
      {!busy && (onContinue || onReset) && (
        <Button
          variant="outline"
          size="sm"
          className="mt-auto self-start"
          onClick={onContinue ?? onReset}
        >
          {onContinue ? "Send message" : "Reset"}
        </Button>
      )}
    </div>
  );
}

function ReasoningRow({ text, running }: { text: string; running: boolean }) {
  const [open, setOpen] = React.useState<boolean>();

  return (
    <TraceCollapsible open={open ?? running} onOpenChange={setOpen}>
      <TraceCollapsibleTrigger>
        <TraceLine status={running ? "running" : undefined}>
          <TraceIcon>
            {running ? (
              <LoaderCircleIcon className="animate-spin" />
            ) : (
              <CircleCheckIcon />
            )}
          </TraceIcon>
          <TraceTitle>{running ? "Thinking" : "Thought"}</TraceTitle>
        </TraceLine>
      </TraceCollapsibleTrigger>
      <TraceCollapsibleContent className="whitespace-pre-wrap">
        {text}
      </TraceCollapsibleContent>
    </TraceCollapsible>
  );
}

export { AiConfirmation as ConfirmationDemo };
