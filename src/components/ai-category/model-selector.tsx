// Official example: https://ui.shadcn.com/docs/ai-elements/radix/model-selector.md
"use client";

import type { AiComposerOptions, AiComposerSubmission } from "./support/types";

import * as React from "react";
import { ArrowUpIcon, ChevronDownIcon, PlusIcon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/components/ui/input-group";

export interface AiModelSelectorProps extends AiComposerOptions {
  onSend?: (submission: AiComposerSubmission) => void;
}
export function AiModelSelector({
  providers,
  efforts,
  model: controlledModel,
  effort: controlledEffort,
  onModelChange,
  onEffortChange,
  onSend,
}: AiModelSelectorProps) {
  const models = providers.flatMap((provider) => provider.models);

  const [text, setText] = React.useState("");
  const [localModel, setLocalModel] = React.useState("");
  const model =
    controlledModel ??
    (models.some((item) => item.id === localModel)
      ? localModel
      : (models[0]?.id ?? ""));
  function setModel(value: string) {
    setLocalModel(value);
    onModelChange?.(value);
  }
  const [localEffort, setLocalEffort] = React.useState("");
  const effort =
    controlledEffort ??
    (efforts.some((item) => item.id === localEffort)
      ? localEffort
      : (efforts[0]?.id ?? ""));
  function setEffort(value: string) {
    setLocalEffort(value);
    onEffortChange?.(value);
  }
  const formRef = React.useRef<HTMLFormElement>(null);
  const currentModel = models.find((item) => item.id === model) ?? models[0];
  const currentEffort =
    efforts.find((item) => item.id === effort) ?? efforts[0];
  const canSend = text.trim().length > 0 && !!onSend;

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canSend) {
      return;
    }

    onSend?.({ text: text.trim(), model, effort });
    setText("");
  }

  return (
    <div className="mx-auto w-full max-w-lg py-6">
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
              type="submit"
              size="icon-sm"
              variant="outline"
              className="rounded-full"
              disabled={canSend}
              aria-label="Attach"
            >
              <PlusIcon />
            </InputGroupButton>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <InputGroupButton
                  size="sm"
                  variant="outline"
                  aria-label={`Model: ${currentModel?.name ?? "Select model"}`}
                  className="ml-auto"
                >
                  {currentModel?.name ?? "Select model"}
                  <ChevronDownIcon />
                </InputGroupButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuRadioGroup value={model} onValueChange={setModel}>
                  {providers.map((provider, index) => (
                    <React.Fragment key={provider.name}>
                      {index > 0 && <DropdownMenuSeparator />}
                      <DropdownMenuGroup>
                        <DropdownMenuLabel>{provider.name}</DropdownMenuLabel>
                        {provider.models.map((item) => (
                          <DropdownMenuRadioItem key={item.id} value={item.id}>
                            {item.name}
                          </DropdownMenuRadioItem>
                        ))}
                      </DropdownMenuGroup>
                    </React.Fragment>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <InputGroupButton
                  size="sm"
                  variant="outline"
                  aria-label={`Effort: ${currentEffort?.name ?? "Select effort"}`}
                >
                  <span className="text-muted-foreground">Effort</span>
                  {currentEffort?.name ?? "Select effort"}
                  <ChevronDownIcon />
                </InputGroupButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-36">
                <DropdownMenuGroup>
                  <DropdownMenuLabel>Effort</DropdownMenuLabel>
                  <DropdownMenuRadioGroup
                    value={effort}
                    onValueChange={setEffort}
                  >
                    {efforts.map((item) => (
                      <DropdownMenuRadioItem key={item.id} value={item.id}>
                        {item.name}
                      </DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuRadioGroup>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <InputGroupButton
              type="submit"
              size="icon-sm"
              variant="default"
              className="rounded-full"
              disabled={!canSend}
              aria-label="Send"
            >
              <ArrowUpIcon />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </form>
    </div>
  );
}

export { AiModelSelector as ModelSelectorDemo };
