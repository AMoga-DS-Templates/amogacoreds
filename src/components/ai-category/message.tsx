// Official example: https://ui.shadcn.com/docs/ai-elements/radix/message.md
"use client";

import * as React from "react";
import {
  CheckIcon,
  CopyIcon,
  PencilIcon,
  RefreshCcwIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
} from "lucide-react";

import { Markdown } from "./support/markdown";
import {
  Bubble,
  BubbleContent,
} from "@/components/ai-category/primitives/bubble";
import { Button } from "@/components/ui/button";
import {
  Message,
  MessageContent,
  MessageFooter,
} from "@/components/ai-category/primitives/message";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export interface AiMessageProps {
  prompt: string;
  reply: string;
  onEdit?: () => void;
  onRetry?: () => void;
  onFeedback?: (value: "like" | "dislike" | null) => void;
}
export function AiMessage({
  prompt,
  reply,
  onEdit,
  onRetry,
  onFeedback,
}: AiMessageProps) {
  const [copied, setCopied] = React.useState(false);
  const [feedback, setFeedback] = React.useState<"like" | "dislike" | null>(
    null,
  );

  React.useEffect(() => {
    if (!copied) {
      return;
    }

    const timeout = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timeout);
  }, [copied]);

  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-8 py-6 text-sm">
      <Message align="end">
        <MessageContent className="gap-2">
          <Bubble align="end" variant="muted">
            <BubbleContent>{prompt}</BubbleContent>
          </Bubble>
          <MessageFooter>
            <MessageAction
              label="Copy"
              onClick={() => {
                void navigator.clipboard.writeText(prompt);
              }}
            >
              <CopyIcon />
            </MessageAction>
            <MessageAction label="Edit" onClick={onEdit} disabled={!onEdit}>
              <PencilIcon />
            </MessageAction>
          </MessageFooter>
        </MessageContent>
      </Message>
      <Message>
        <MessageContent className="gap-2">
          <Markdown>{reply}</Markdown>
          <MessageFooter className="px-0">
            <MessageAction
              label={copied ? "Copied" : "Copy"}
              onClick={() => {
                navigator.clipboard.writeText(reply);
                setCopied(true);
              }}
            >
              {copied ? <CheckIcon /> : <CopyIcon />}
            </MessageAction>
            <MessageAction
              label="Good response"
              aria-pressed={feedback === "like"}
              onClick={() => {
                const next = feedback === "like" ? null : "like";
                setFeedback(next);
                onFeedback?.(next);
              }}
            >
              <ThumbsUpIcon
                className={feedback === "like" ? "fill-current" : undefined}
              />
            </MessageAction>
            <MessageAction
              label="Bad response"
              aria-pressed={feedback === "dislike"}
              onClick={() =>
                (() => {
                  const next = feedback === "dislike" ? null : "dislike";
                  setFeedback(next);
                  onFeedback?.(next);
                })()
              }
            >
              <ThumbsDownIcon
                className={feedback === "dislike" ? "fill-current" : undefined}
              />
            </MessageAction>
            <MessageAction label="Retry" onClick={onRetry} disabled={!onRetry}>
              <RefreshCcwIcon />
            </MessageAction>
          </MessageFooter>
        </MessageContent>
      </Message>
    </div>
  );
}

function MessageAction({
  label,
  children,
  ...props
}: React.ComponentProps<typeof Button> & { label: string }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="icon-sm" aria-label={label} {...props}>
          {children}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  );
}

export { AiMessage as MessagePattern };
