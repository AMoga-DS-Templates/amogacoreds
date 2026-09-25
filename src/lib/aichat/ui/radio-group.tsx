"use client";

/* JSON definitions are rendered as isolated React components by ShadcnChatRenderer. */
/* eslint-disable react-hooks/rules-of-hooks */

import { Label as ShadcnLabel } from "@/components/ui/label";
import { RadioGroupItem, RadioGroup as ShadcnRadioGroup } from "@/components/ui/radio-group";
import {
  defineComponent,
  useFormName,
  useGetFieldValue,
  useIsStreaming,
  useSetFieldValue,
} from "../json-component";
import { z } from "zod";
import { getJsonProps } from "../helpers";

const RadioItemSchema = z.object({
  value: z.string(),
  label: z.string(),
});

export const RadioItem = defineComponent({
  name: "RadioItem",
  props: RadioItemSchema,
  description: "Option in a RadioGroup.",
  component: () => null,
});

const RadioGroupSchema = z.object({
  name: z.string(),
  items: z.array(RadioItem.ref),
});

export const RadioGroup = defineComponent({
  name: "RadioGroup",
  props: RadioGroupSchema,
  description: "Radio selection group. items: RadioItem[].",
  component: ({ props }) => {
    const formName = useFormName();
    const getFieldValue = useGetFieldValue();
    const setFieldValue = useSetFieldValue();
    const isStreaming = useIsStreaming();

    const fieldName = props.name as string;
    const value = (getFieldValue(formName, fieldName) as string | undefined) ?? "";
     
    const items = ((props.items ?? []) as unknown[])
      .map(getJsonProps)
      .filter((item): item is Record<string, unknown> => Boolean(item?.value));

    return (
      <ShadcnRadioGroup
        value={value}
        onValueChange={(val) => {
          setFieldValue(formName, "RadioGroup", fieldName, val, true);
        }}
        disabled={isStreaming}
      >
        {items.map((item, i) => {
          const val = item.value as string;
          return (
            <div key={i} className="flex items-center space-x-2">
              <RadioGroupItem value={val} id={`${fieldName}-${val}`} />
              <ShadcnLabel htmlFor={`${fieldName}-${val}`}>{String(item.label || val)}</ShadcnLabel>
            </div>
          );
        })}
      </ShadcnRadioGroup>
    );
  },
});


