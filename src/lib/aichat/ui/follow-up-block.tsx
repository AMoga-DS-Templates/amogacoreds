"use client";

/* JSON definitions are rendered as isolated React components by ShadcnChatRenderer. */
/* eslint-disable react-hooks/rules-of-hooks */

import { Button as ShadcnButton } from "@/components/ui/button";
import { defineComponent, useTriggerAction } from "../json-component";
import { z } from "zod";
import { getJsonProps } from "../helpers";

export const FollowUpItemSchema = z.object({
  text: z.string(),
  action: z.object({
    type: z.string().optional(),
    message: z.string().optional(),
    url: z.string().optional(),
    params: z.record(z.string(), z.unknown()).optional(),
  }).optional(),
});

export type FollowUpItemProps = z.infer<typeof FollowUpItemSchema>;

export const FollowUpItem = defineComponent({
  name: "FollowUpItem",
  props: FollowUpItemSchema,
  description: "Clickable follow-up suggestion â€” sends text as user message when clicked.",
  component: () => null,
});

export const FollowUpBlockSchema = z.object({
  items: z.array(FollowUpItem.ref),
});

export function FollowUpBlockView({
  items,
  disabled = false,
  onSelect,
}: {
  items: FollowUpItemProps[];
  disabled?: boolean;
  onSelect?: (item: FollowUpItemProps) => void;
}) {
  return (
    <div className="mb-2 flex flex-wrap gap-2">
      {items.map((item, index) => (
        <ShadcnButton
          key={`${item.text}-${index}`}
          variant="outline"
          size="sm"
          className="h-auto px-3 py-1.5 text-xs"
          disabled={disabled}
          onClick={() => onSelect?.(item)}
        >
          {item.text}
        </ShadcnButton>
      ))}
    </div>
  );
}

export const FollowUpBlock = defineComponent({
  name: "FollowUpBlock",
  props: FollowUpBlockSchema,
  description: "List of follow-up suggestion chips at the end of a response.",
  component: ({ props }) => {
    
    const triggerAction = useTriggerAction();
    const items = (props.items ?? [])
      .map(getJsonProps)
      .filter((item): item is FollowUpItemProps => FollowUpItemSchema.safeParse(item).success);
    return <FollowUpBlockView items={items} onSelect={(item) => triggerAction(item.text)} />;
  },
});


