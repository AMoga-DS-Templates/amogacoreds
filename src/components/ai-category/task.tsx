// Official example: https://ui.shadcn.com/docs/ai-elements/radix/task.md
"use client";

import type { AiConversationProps } from "./support/types";

import * as React from "react";
import type { UIMessage } from "ai";
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
    task: {
      title: string;
      steps: { title: string; status: "done" | "running" | "error" }[];
    };
  }
>;

type TaskPart = Extract<ChatMessage["parts"][number], { type: "data-task" }>;

type Status = "running" | "error" | undefined;

function getStepStatus(
  status: TaskPart["data"]["steps"][number]["status"],
  streaming: boolean,
): Status {
  if (status === "done") {
    return undefined;
  }

  return status === "running" && streaming ? "running" : "error";
}

function StatusIcon({ status }: { status: Status }) {
  if (status === "running") {
    return <LoaderCircleIcon className="animate-spin" />;
  }

  return status === "error" ? <CircleAlertIcon /> : <CircleCheckIcon />;
}

function TaskRow({
  task,
  streaming,
}: {
  task: TaskPart["data"];
  streaming: boolean;
}) {
  const [open, setOpen] = React.useState<boolean>();
  const steps = task.steps.map((step) => ({
    title: step.title,
    status: getStepStatus(step.status, streaming),
  }));
  const status = steps.some((step) => step.status === "error")
    ? "error"
    : steps.some((step) => step.status === "running")
      ? "running"
      : undefined;

  return (
    <TraceCollapsible
      open={open ?? status === "running"}
      onOpenChange={setOpen}
    >
      <TraceCollapsibleTrigger>
        <TraceLine status={status}>
          <TraceIcon>
            <StatusIcon status={status} />
          </TraceIcon>
          <TraceTitle>{task.title}</TraceTitle>
        </TraceLine>
      </TraceCollapsibleTrigger>
      <TraceCollapsibleContent>
        <Trace>
          {steps.map((step) => (
            <TraceLine key={step.title} status={step.status}>
              <TraceTitle>{step.title}</TraceTitle>
            </TraceLine>
          ))}
        </Trace>
      </TraceCollapsibleContent>
    </TraceCollapsible>
  );
}

export type AiTaskProps = AiConversationProps<ChatMessage>;

export function AiTask(props: AiTaskProps) {
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
        const tasks = message.parts.filter((part) => part.type === "data-task");
        const text = getMessageText(message);

        return (
          <Message key={message.id}>
            <MessageContent className="gap-4">
              {tasks.length > 0 && (
                <Trace>
                  {tasks.map((part) => (
                    <TaskRow
                      key={part.id}
                      task={part.data}
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

export { AiTask as TaskDemo };
