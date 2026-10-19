// Official example: https://ui.shadcn.com/docs/ai-elements/radix/checkpoint.md
"use client";

import type { AiConversationProps } from "./support/types";

import * as React from "react";
import type { UIMessage } from "ai";

import { getMessageText } from "./support/helpers";
import {
  Bubble,
  BubbleContent,
} from "@/components/ai-category/primitives/bubble";
import { Button } from "@/components/ui/button";
import {
  Marker,
  MarkerContent,
} from "@/components/ai-category/primitives/marker";
import {
  Message,
  MessageContent,
} from "@/components/ai-category/primitives/message";

type ChatMessage = UIMessage<
  unknown,
  {
    checkpoint: {
      label: string;
    };
  }
>;

type CheckpointPart = Extract<
  ChatMessage["parts"][number],
  { type: "data-checkpoint" }
>;

export type AiCheckpointProps = AiConversationProps<ChatMessage> & {
  onRestore?: (messageId: string) => void;
  onContinue?: () => void;
};

export function AiCheckpoint(props: AiCheckpointProps) {
  const { messages = [], status = "ready", onReplay } = props;
  const { onRestore, onContinue } = props;
  const busy = status === "submitted" || status === "streaming";

  function restore(messageId: string) {
    const index = messages.findIndex((message) => message.id === messageId);

    if (index === -1) {
      return;
    }

    onRestore?.(messageId);
  }

  return (
    <div className="flex min-h-72 w-full max-w-sm flex-col gap-4 py-6 text-sm">
      {messages.map((message) => {
        const checkpoint = message.parts.find(
          (part): part is CheckpointPart => part.type === "data-checkpoint",
        );
        const index = messages.findIndex((item) => item.id === message.id);
        const canRestore = index < messages.length - 1 && !!onRestore;

        return (
          <React.Fragment key={message.id}>
            {message.role === "user" ? (
              <Message align="end">
                <MessageContent>
                  <Bubble align="end" variant="muted">
                    <BubbleContent>{getMessageText(message)}</BubbleContent>
                  </Bubble>
                </MessageContent>
              </Message>
            ) : (
              <Message>
                <MessageContent>
                  <p>{getMessageText(message)}</p>
                </MessageContent>
              </Message>
            )}
            {checkpoint && (
              <Marker variant="separator">
                <MarkerContent className="inline-flex items-center gap-2">
                  {checkpoint.data.label}
                  {canRestore && (
                    <Button
                      size="xs"
                      variant="outline"
                      aria-label={`Restore to ${checkpoint.data.label}`}
                      onClick={() => restore(message.id)}
                    >
                      Restore
                    </Button>
                  )}
                </MarkerContent>
              </Marker>
            )}
          </React.Fragment>
        );
      })}
      {!busy && onContinue && (
        <Button
          variant="outline"
          size="sm"
          className="mt-auto self-start"
          onClick={onContinue}
        >
          Continue
        </Button>
      )}
    </div>
  );
}

export { AiCheckpoint as CheckpointDemo };
