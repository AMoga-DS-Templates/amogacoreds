"use client";

/* JSON definitions are rendered as isolated React components by ShadcnChatRenderer. */
/* eslint-disable react-hooks/rules-of-hooks */

import { defineComponent } from "../json-component";
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { z } from "zod";
import { ContentChildUnion } from "../unions";
import { getJsonProps } from "../helpers";

const TabItemSchema = z.object({
  value: z.string(),
  trigger: z.string(),
  content: z.array(ContentChildUnion),
});

export const TabItem = defineComponent({
  name: "TabItem",
  props: TabItemSchema,
  description: "Tab panel. value: unique id, trigger: tab label, content: children.",
  component: () => null,
});

const TabsSchema = z.object({
  items: z.array(TabItem.ref),
  defaultValue: z.string().optional(),
});

export const Tabs = defineComponent({
  name: "Tabs",
  props: TabsSchema,
  description: "Tabbed content. items: TabItem[]. defaultValue: initially active tab.",
  component: ({ props, renderNode }) => {
    const rawItems = ((props.items ?? []) as unknown[])
      .map(getJsonProps)
      .filter((item): item is Record<string, unknown> => item !== null);

    const items = rawItems.filter(
      (item) => item.value != null && item.trigger != null,
    );

    const [userSelected, setUserSelected] = React.useState<string | null>(null);

    const firstValue = items[0]?.value as string | undefined;
    const preferredDefault = props.defaultValue ?? firstValue;

    const userSelectionValid =
      userSelected != null && items.some((item) => String(item.value) === userSelected);
    const activeTab = userSelectionValid ? userSelected : (preferredDefault ?? "");

    if (items.length === 0) return null;

    const tabTriggerClass =
      "inline-flex h-10 shrink-0 items-center border-b-2 border-transparent px-2 text-sm font-medium transition-colors data-[state=active]:border-primary data-[state=active]:text-primary data-[state=inactive]:text-muted-foreground hover:text-foreground";

    return (
      <TabsPrimitive.Root value={activeTab} onValueChange={setUserSelected} className="w-full min-w-0">
        <div className="no-scrollbar mb-4 flex w-full min-w-0 justify-start overflow-x-auto border-b">
          <TabsPrimitive.List className="flex min-w-max items-center gap-4">
            {items.map((item) => {
              const val = String(item.value);
              return (
                <TabsPrimitive.Trigger
                  key={val}
                  value={val}
                  className={tabTriggerClass}
                >
                  <span className="whitespace-nowrap">{String(item.trigger)}</span>
                </TabsPrimitive.Trigger>
              );
            })}
          </TabsPrimitive.List>
        </div>
        {items.map((item) => {
          const val = String(item.value);
          return (
            <TabsPrimitive.Content key={val} value={val} className="space-y-3 overflow-y-hidden outline-none">
              {renderNode(item.content)}
            </TabsPrimitive.Content>
          );
        })}
      </TabsPrimitive.Root>
    );
  },
});


