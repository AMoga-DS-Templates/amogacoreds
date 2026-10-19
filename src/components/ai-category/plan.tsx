// Official example: https://ui.shadcn.com/docs/ai-elements/radix/plan.md
"use client";

import type { AiConversationProps } from "./support/types";

import type { UIMessage } from "ai";
import {
  CircleCheckIcon,
  CircleDotIcon,
  CircleIcon,
  RouteIcon,
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
  TraceDescription,
  TraceIcon,
  TraceLine,
  TraceTitle,
} from "@/components/ai-category/primitives/trace";

type ChatMessage = UIMessage<
  unknown,
  {
    plan: {
      title: string;
      steps: { title: string; status: "done" | "running" | "pending" }[];
    };
  }
>;

type PlanPart = Extract<ChatMessage["parts"][number], { type: "data-plan" }>;

function PlanRow({
  plan,
  streaming,
}: {
  plan: PlanPart["data"];
  streaming: boolean;
}) {
  const done = plan.steps.filter((step) => step.status === "done").length;
  const running = streaming && done < plan.steps.length;

  return (
    <TraceCollapsible defaultOpen>
      <TraceCollapsibleTrigger>
        <TraceLine status={running ? "running" : undefined}>
          <TraceIcon>
            <RouteIcon />
          </TraceIcon>
          <TraceTitle>{plan.title}</TraceTitle>
          <TraceDescription>
            {done} of {plan.steps.length} done
          </TraceDescription>
        </TraceLine>
      </TraceCollapsibleTrigger>
      <TraceCollapsibleContent>
        <Trace>
          {plan.steps.map((step) => (
            <TraceLine
              key={step.title}
              status={
                step.status === "pending"
                  ? "pending"
                  : streaming && step.status === "running"
                    ? "running"
                    : undefined
              }
            >
              <TraceIcon>
                {step.status === "done" ? (
                  <CircleCheckIcon />
                ) : step.status === "running" ? (
                  <CircleDotIcon />
                ) : (
                  <CircleIcon />
                )}
              </TraceIcon>
              <TraceTitle>{step.title}</TraceTitle>
            </TraceLine>
          ))}
        </Trace>
      </TraceCollapsibleContent>
    </TraceCollapsible>
  );
}

export type AiPlanProps = AiConversationProps<ChatMessage>;

export function AiPlan(props: AiPlanProps) {
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
        const plan = message.parts.find((part) => part.type === "data-plan");
        const text = getMessageText(message);

        return (
          <Message key={message.id}>
            <MessageContent className="gap-4">
              {plan && (
                <Trace>
                  <PlanRow plan={plan.data} streaming={streaming} />
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

export { AiPlan as PlanDemo };
