// Official example: https://ui.shadcn.com/docs/ai-elements/radix/queue.md
"use client";

import type { AiConversationProps } from "./support/types";

import type { UIDataTypes, UIMessage } from "ai";
import {
  CircleCheckIcon,
  CircleDotIcon,
  CircleIcon,
  ListChecksIcon,
  ListTodoIcon,
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
  UIDataTypes,
  {
    writeTodos: {
      input: {
        todos: {
          content: string;
          status: "pending" | "in_progress" | "completed";
        }[];
      };
      output: string;
    };
  }
>;

type Todo = Extract<
  ChatMessage["parts"][number],
  { type: "tool-writeTodos"; state: "input-available" }
>["input"]["todos"][number];

function TodoLine({ todo, streaming }: { todo: Todo; streaming: boolean }) {
  return (
    <TraceLine
      status={
        streaming && todo.status === "in_progress" ? "running" : undefined
      }
    >
      <TraceIcon>
        {todo.status === "completed" ? (
          <CircleCheckIcon />
        ) : todo.status === "in_progress" ? (
          <CircleDotIcon />
        ) : (
          <CircleIcon />
        )}
      </TraceIcon>
      <TraceTitle>{todo.content}</TraceTitle>
    </TraceLine>
  );
}

function TodoQueue({
  todos,
  streaming,
}: {
  todos: Todo[];
  streaming: boolean;
}) {
  const pending = todos.filter((todo) => todo.status !== "completed");
  const completed = todos.filter((todo) => todo.status === "completed");

  return (
    <Trace>
      {pending.length > 0 && (
        <TraceCollapsible defaultOpen>
          <TraceCollapsibleTrigger>
            <TraceLine>
              <TraceIcon>
                <ListTodoIcon />
              </TraceIcon>
              <TraceTitle>{pending.length} to do</TraceTitle>
            </TraceLine>
          </TraceCollapsibleTrigger>
          <TraceCollapsibleContent>
            <Trace>
              {pending.map((todo) => (
                <TodoLine
                  key={todo.content}
                  todo={todo}
                  streaming={streaming}
                />
              ))}
            </Trace>
          </TraceCollapsibleContent>
        </TraceCollapsible>
      )}
      {completed.length > 0 && (
        <TraceCollapsible defaultOpen>
          <TraceCollapsibleTrigger>
            <TraceLine>
              <TraceIcon>
                <ListChecksIcon />
              </TraceIcon>
              <TraceTitle>{completed.length} completed</TraceTitle>
            </TraceLine>
          </TraceCollapsibleTrigger>
          <TraceCollapsibleContent>
            <Trace>
              {completed.map((todo) => (
                <TodoLine
                  key={todo.content}
                  todo={todo}
                  streaming={streaming}
                />
              ))}
            </Trace>
          </TraceCollapsibleContent>
        </TraceCollapsible>
      )}
    </Trace>
  );
}

export type AiQueueProps = AiConversationProps<ChatMessage>;

export function AiQueue(props: AiQueueProps) {
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
        const todos = message.parts
          .filter((part) => part.type === "tool-writeTodos")
          .filter((part) => part.state !== "input-streaming")
          .slice(-1)[0]?.input?.todos;
        const text = getMessageText(message);

        return (
          <Message key={message.id}>
            <MessageContent className="gap-4">
              {todos && <TodoQueue todos={todos} streaming={streaming} />}
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

export { AiQueue as QueueDemo };
