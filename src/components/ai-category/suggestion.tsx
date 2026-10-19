// Official example: https://ui.shadcn.com/docs/ai-elements/radix/suggestion.md
"use client";

import * as React from "react";
import { ArrowUpIcon, PlusIcon } from "lucide-react";

import {
  Bubble,
  BubbleContent,
} from "@/components/ai-category/primitives/bubble";
import { Button } from "@/components/ui/button";
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

export interface AiSuggestionProps {
  suggestions: string[];
  turn?: { prompt: string; reply: string } | null;
  onSend?: (prompt: string) => void;
  onAttach?: () => void;
}
export function AiSuggestion({
  suggestions,
  turn,
  onSend,
  onAttach,
}: AiSuggestionProps) {
  const [text, setText] = React.useState("");
  const formRef = React.useRef<HTMLFormElement>(null);
  const canSend = text.trim().length > 0 && !!onSend;

  function send(prompt: string) {
    onSend?.(prompt);
    setText("");
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canSend) {
      return;
    }

    send(text.trim());
  }

  return (
    <div className="mx-auto flex w-full max-w-lg flex-col gap-6 py-6 text-sm">
      {turn && (
        <div className="flex flex-col gap-4">
          <Message align="end">
            <MessageContent>
              <Bubble align="end" variant="muted">
                <BubbleContent>{turn.prompt}</BubbleContent>
              </Bubble>
            </MessageContent>
          </Message>
          <Message>
            <MessageContent>
              <p>{turn.reply}</p>
            </MessageContent>
          </Message>
        </div>
      )}
      <div className="flex flex-col gap-2">
        <div className="flex scroll-fade-x scrollbar-none gap-2 overflow-x-auto overscroll-x-contain">
          {suggestions.map((suggestion) => (
            <Button
              key={suggestion}
              variant="outline"
              size="sm"
              className="shrink-0"
              onClick={() => send(suggestion)}
              disabled={!onSend}
            >
              {suggestion}
            </Button>
          ))}
        </div>
        <form ref={formRef} onSubmit={onSubmit}>
          <InputGroup>
            <InputGroupTextarea
              value={text}
              onChange={(event) => setText(event.target.value)}
              placeholder="Ask the agent to change your code..."
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  formRef.current?.requestSubmit();
                }
              }}
              className="p-3"
            />
            <InputGroupAddon align="block-end">
              <InputGroupButton
                size="icon-sm"
                variant="outline"
                className="rounded-full"
                aria-label="Attach files"
                onClick={onAttach}
                disabled={!onAttach}
              >
                <PlusIcon />
              </InputGroupButton>
              <InputGroupButton
                type="submit"
                size="icon-sm"
                variant="default"
                className="ml-auto rounded-full"
                disabled={!canSend}
                aria-label="Send"
              >
                <ArrowUpIcon />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </form>
      </div>
    </div>
  );
}

export { AiSuggestion as SuggestionDemo };
