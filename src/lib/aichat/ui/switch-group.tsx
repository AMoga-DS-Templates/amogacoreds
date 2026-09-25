"use client";

/* JSON definitions are rendered as isolated React components by ShadcnChatRenderer. */
/* eslint-disable react-hooks/rules-of-hooks */

import { Label as ShadcnLabel } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  defineComponent,
  useFormName,
  useGetFieldValue,
  useIsStreaming,
  useSetFieldValue,
} from "../json-component";
import { z } from "zod";
import { getJsonProps } from "../helpers";

const SwitchItemSchema = z.object({
  value: z.string(),
  label: z.string(),
});

export const SwitchItem = defineComponent({
  name: "SwitchItem",
  props: SwitchItemSchema,
  description: "Toggle option in a SwitchGroup.",
  component: () => null,
});

const SwitchGroupSchema = z.object({
  name: z.string(),
  items: z.array(SwitchItem.ref),
});

export const SwitchGroup = defineComponent({
  name: "SwitchGroup",
  props: SwitchGroupSchema,
  description: "Group of toggle switches. items: SwitchItem[].",
  component: ({ props }) => {
    const formName = useFormName();
    const getFieldValue = useGetFieldValue();
    const setFieldValue = useSetFieldValue();
    const isStreaming = useIsStreaming();

    const fieldName = props.name as string;
    const current = (getFieldValue(formName, fieldName) as string[] | undefined) ?? [];
     
    const items = ((props.items ?? []) as unknown[])
      .map(getJsonProps)
      .filter((item): item is Record<string, unknown> => Boolean(item?.value));

    return (
      <div className="space-y-3">
        {items.map((item, i) => {
          const val = item.value as string;
          const checked = current.includes(val);
          return (
            <div key={i} className="flex items-center justify-between">
              <ShadcnLabel htmlFor={`${fieldName}-${val}`}>{String(item.label || val)}</ShadcnLabel>
              <Switch
                id={`${fieldName}-${val}`}
                checked={checked}
                onCheckedChange={(c) => {
                  const next = c ? [...current, val] : current.filter((v: string) => v !== val);
                  setFieldValue(formName, "SwitchGroup", fieldName, next, true);
                }}
                disabled={isStreaming}
              />
            </div>
          );
        })}
      </div>
    );
  },
});


