// Official example: https://ui.shadcn.com/docs/ai-elements/radix/chain-of-thought.md
"use client";

import type { AiConversationProps } from "./support/types";

import * as React from "react";
import type { UIDataTypes, UIMessage } from "ai";
import {
  ArrowUpRightIcon,
  CircleAlertIcon,
  CircleCheckIcon,
  GlobeIcon,
  LoaderCircleIcon,
} from "lucide-react";

import { getMessageText } from "./support/helpers";
import { Badge } from "@/components/ui/badge";
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
    searchWeb: {
      input: { query: string };
      output: { results: { title: string; url: string }[] };
    };
    readBuildLog: {
      input: { deployment: string };
      output: { log: string };
    };
    searchCode: {
      input: { query: string };
      output: { files: string[] };
    };
  }
>;

type StepPart = Extract<
  ChatMessage["parts"][number],
  { type: "tool-searchWeb" | "tool-readBuildLog" | "tool-searchCode" }
>;

function StatusIcon({ status }: { status?: "running" | "error" }) {
  if (status === "running") {
    return <LoaderCircleIcon className="animate-spin" />;
  }

  return status === "error" ? <CircleAlertIcon /> : <CircleCheckIcon />;
}

function Step({
  title,
  status,
  defaultOpen,
  children,
}: {
  title: string;
  status?: "running" | "error";
  defaultOpen?: boolean;
  children?: React.ReactNode;
}) {
  const line = (
    <TraceLine status={status}>
      <TraceIcon>
        <StatusIcon status={status} />
      </TraceIcon>
      <TraceTitle>{title}</TraceTitle>
    </TraceLine>
  );

  if (!children) {
    return line;
  }

  return (
    <TraceCollapsible defaultOpen={defaultOpen}>
      <TraceCollapsibleTrigger>{line}</TraceCollapsibleTrigger>
      <TraceCollapsibleContent>{children}</TraceCollapsibleContent>
    </TraceCollapsible>
  );
}

function StepRow({ part, streaming }: { part: StepPart; streaming: boolean }) {
  const status =
    part.state === "output-available"
      ? undefined
      : part.state === "output-error" || !streaming
        ? "error"
        : "running";
  const verb = (running: string, done: string, failed: string) =>
    status === "running" ? running : status === "error" ? failed : done;
  const error = part.state === "output-error" && (
    <CodeBlock size="sm" variant="destructive">
      <CodeBlockContent wrap className="max-h-64">
        {part.errorText}
      </CodeBlockContent>
    </CodeBlock>
  );

  if (part.type === "tool-searchWeb") {
    return (
      <Step
        status={status}
        title={`${verb("Searching", "Searched", "Failed to search")} the web for ${part.input?.query}`}
      >
        {error ||
          (part.state === "output-available" && (
            <Trace>
              {part.output.results.map((result) => (
                <a
                  key={result.url}
                  href={result.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <TraceLine>
                    <TraceIcon>
                      <GlobeIcon />
                    </TraceIcon>
                    <TraceTitle>
                      {result.title}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </TraceTitle>
                    <TraceIcon>
                      <ArrowUpRightIcon />
                    </TraceIcon>
                  </TraceLine>
                </a>
              ))}
            </Trace>
          ))}
      </Step>
    );
  }

  if (part.type === "tool-readBuildLog") {
    return (
      <Step
        status={status}
        defaultOpen
        title={`${verb("Reading", "Read", "Failed to read")} the build log for ${part.input?.deployment}`}
      >
        {error ||
          (part.state === "output-available" && (
            <CodeBlock size="sm">
              <CodeBlockContent wrap className="max-h-64">
                {part.output.log}
              </CodeBlockContent>
            </CodeBlock>
          ))}
      </Step>
    );
  }

  return (
    <Step
      status={status}
      title={`${verb("Searching", "Searched", "Failed to search")} the code for ${part.input?.query}`}
    >
      {error ||
        (part.state === "output-available" && (
          <div className="flex flex-wrap gap-1.5">
            {part.output.files.map((file) => (
              <Badge key={file} variant="secondary" className="font-mono">
                {file}
              </Badge>
            ))}
          </div>
        ))}
    </Step>
  );
}

function ChainOfThought({
  steps,
  streaming,
  answering,
}: {
  steps: StepPart[];
  streaming: boolean;
  answering: boolean;
}) {
  const [open, setOpen] = React.useState<boolean>();
  const running = streaming && !answering;
  const failed = steps.filter((part) => part.state === "output-error").length;
  const status = running ? "running" : failed > 0 ? "error" : undefined;

  return (
    <Trace>
      <TraceCollapsible open={open ?? running} onOpenChange={setOpen}>
        <TraceCollapsibleTrigger>
          <TraceLine status={status}>
            <TraceIcon>
              <StatusIcon status={status} />
            </TraceIcon>
            <TraceTitle>
              {running
                ? "Researching"
                : `Researched in ${steps.length} steps${failed > 0 ? `, ${failed} failed` : ""}`}
            </TraceTitle>
          </TraceLine>
        </TraceCollapsibleTrigger>
        <TraceCollapsibleContent>
          <Trace>
            {steps.map((part) => (
              <StepRow
                key={part.toolCallId}
                part={part}
                streaming={streaming}
              />
            ))}
          </Trace>
        </TraceCollapsibleContent>
      </TraceCollapsible>
    </Trace>
  );
}

export type AiChainOfThoughtProps = AiConversationProps<ChatMessage>;

export function AiChainOfThought(props: AiChainOfThoughtProps) {
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
        const steps = message.parts.filter(
          (part) =>
            part.type === "tool-searchWeb" ||
            part.type === "tool-readBuildLog" ||
            part.type === "tool-searchCode",
        );
        const text = getMessageText(message);

        return (
          <Message key={message.id}>
            <MessageContent className="gap-4">
              {steps.length > 0 && (
                <ChainOfThought
                  steps={steps}
                  streaming={streaming}
                  answering={text.length > 0}
                />
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

export { AiChainOfThought as ChainOfThoughtDemo };
