// Official example: https://ui.shadcn.com/docs/ai-elements/radix/chat.md
"use client";

import type { AiConversationProps } from "./support/types";

import * as React from "react";
import type { UIDataTypes, UIMessage } from "ai";
import {
  ArrowUpIcon,
  CircleCheckIcon,
  GlobeIcon,
  LoaderCircleIcon,
  MessageCircleDashedIcon,
  PaperclipIcon,
  PlusIcon,
  RotateCwIcon,
  TelescopeIcon,
  TerminalIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { getMessageText } from "./support/helpers";
import { MESSAGE_ANIMATIONS } from "./support/message-animations";
import { Markdown } from "./support/markdown";
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import {
  Message,
  MessageContent,
} from "@/components/ai-category/primitives/message";
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ai-category/primitives/message-scroller";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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

type ChatPart = ChatMessage["parts"][number];

type ToolPart = Extract<ChatPart, { type: "tool-runCommand" }>;

const MotionMessageScrollerItem = motion.create(MessageScrollerItem);

export type AiChatProps = AiConversationProps<ChatMessage> & {
  nextPrompt?: string;
  onSend?: (text: string) => void;
  onReset?: () => void;
};

export function AiChat(props: AiChatProps) {
  const { messages = [], status = "ready", onReplay } = props;
  const { nextPrompt = "", onSend, onReset } = props;
  const [draft, setDraft] = React.useState<string | null>(null);
  const formRef = React.useRef<HTMLFormElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const busy = status === "submitted" || status === "streaming";
  const text = draft ?? nextPrompt;
  const canSend = text.trim().length > 0 && !busy && !!onSend;

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canSend) {
      return;
    }

    onSend?.(text.trim());
    setDraft(null);
  }

  return (
    <MessageScrollerProvider>
      <div className="relative flex w-full flex-col gap-4 [[data-slot=preview]:has(&)]:bg-background [[data-slot=preview]:has(&)>div]:p-0!">
        <div className="flex h-200 w-full flex-col gap-4">
          <div className="flex items-start justify-between gap-4 p-8 pb-4">
            <div className="flex flex-col gap-1">
              <div className="font-medium">New Thread</div>
              <div className="text-sm text-muted-foreground">
                Ask the agent to change your code.
              </div>
            </div>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Reset conversation"
                  onClick={() => {
                    onReset?.();
                    setDraft(null);
                  }}
                  disabled={busy}
                >
                  <RotateCwIcon />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Reset</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="min-h-0 flex-1">
            {messages.length === 0 ? (
              <Empty className="h-full">
                <EmptyHeader>
                  <EmptyMedia variant="icon">
                    <MessageCircleDashedIcon />
                  </EmptyMedia>
                  <EmptyTitle>What should we build?</EmptyTitle>
                  <EmptyDescription>
                    The agent can read your code, run commands and make changes.
                    Press send to start.
                  </EmptyDescription>
                </EmptyHeader>
              </Empty>
            ) : (
              <MessageScroller>
                <MessageScrollerViewport>
                  <MessageScrollerContent
                    aria-busy={busy}
                    className="gap-6 px-8 py-0"
                  >
                    {messages.map((message) => {
                      if (message.role === "user") {
                        return (
                          <MotionMessageScrollerItem
                            key={message.id}
                            messageId={message.id}
                            scrollAnchor
                            variants={MESSAGE_ANIMATIONS["slide-up"].variants}
                            initial={shouldReduceMotion ? false : "initial"}
                            animate="animate"
                          >
                            <Message align="end">
                              <MessageContent>
                                <Bubble align="end" variant="muted">
                                  <BubbleContent>
                                    {getMessageText(message)}
                                  </BubbleContent>
                                </Bubble>
                              </MessageContent>
                            </Message>
                          </MotionMessageScrollerItem>
                        );
                      }

                      const streaming =
                        busy && message === messages.slice(-1)[0];
                      const steps = message.parts.filter(
                        (part) =>
                          part.type === "reasoning" ||
                          part.type === "tool-runCommand",
                      );
                      const reply = getMessageText(message);

                      return (
                        <MessageScrollerItem
                          key={message.id}
                          messageId={message.id}
                        >
                          <Message>
                            <MessageContent className="gap-3">
                              {steps.length > 0 && (
                                <Trace>
                                  {steps.map((part, index) => (
                                    <StepRow
                                      key={index}
                                      part={part}
                                      streaming={streaming}
                                    />
                                  ))}
                                </Trace>
                              )}
                              {reply && <Markdown>{reply}</Markdown>}
                            </MessageContent>
                          </Message>
                        </MessageScrollerItem>
                      );
                    })}
                  </MessageScrollerContent>
                </MessageScrollerViewport>
                <MessageScrollerButton />
              </MessageScroller>
            )}
          </div>
          <div className="p-8 pt-0">
            <form ref={formRef} onSubmit={onSubmit} className="w-full">
              <InputGroup>
                <InputGroupTextarea
                  value={text}
                  onChange={(event) => setDraft(event.target.value)}
                  placeholder="Ask the agent..."
                  aria-label="Message"
                  className="min-h-14"
                  onKeyDown={(event) => {
                    if (event.key === "Enter" && !event.shiftKey) {
                      event.preventDefault();
                      formRef.current?.requestSubmit();
                    }
                  }}
                />
                <InputGroupAddon align="block-end" className="pt-1">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <InputGroupButton
                        aria-label="Add context"
                        type="button"
                        size="icon-sm"
                        variant="outline"
                      >
                        <PlusIcon />
                      </InputGroupButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      side="top"
                      className="w-44"
                    >
                      <DropdownMenuItem>
                        <PaperclipIcon />
                        Add Photos & Files
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <TelescopeIcon />
                        Deep Research
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <GlobeIcon />
                        Web Search
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <InputGroupButton
                    type="submit"
                    variant="default"
                    size="icon-sm"
                    disabled={!canSend}
                    className="ml-auto"
                  >
                    <ArrowUpIcon />
                    <span className="sr-only">Send</span>
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
            </form>
          </div>
        </div>
      </div>
    </MessageScrollerProvider>
  );
}

function StepRow({ part, streaming }: { part: ChatPart; streaming: boolean }) {
  if (part.type === "reasoning") {
    return (
      <ReasoningRow text={part.text} running={part.state === "streaming"} />
    );
  }

  if (part.type === "tool-runCommand") {
    return <ToolRow part={part} streaming={streaming} />;
  }

  return null;
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

function ToolRow({ part, streaming }: { part: ToolPart; streaming: boolean }) {
  const command = part.input?.command;

  if (part.state === "output-available" || part.state === "output-error") {
    const failed = part.state === "output-error";

    return (
      <TraceCollapsible>
        <TraceCollapsibleTrigger>
          <TraceLine status={failed ? "error" : undefined}>
            <TraceIcon>
              <TerminalIcon />
            </TraceIcon>
            <TraceTitle>
              {failed ? "Failed to run" : "Ran"} {command}
            </TraceTitle>
          </TraceLine>
        </TraceCollapsibleTrigger>
        <TraceCollapsibleContent>
          <CodeBlock size="sm">
            <CodeBlockContent wrap className="max-h-64">
              {failed ? part.errorText : part.output.stdout}
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

export { AiChat as ChatDemo };
