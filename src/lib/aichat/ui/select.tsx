"use client";

/* JSON definitions are rendered as isolated React components by ShadcnChatRenderer. */
/* eslint-disable react-hooks/rules-of-hooks */

import {
  SelectContent,
  SelectTrigger,
  SelectValue,
  Select as ShadcnSelect,
  SelectItem as ShadcnSelectItem,
} from "@/components/ui/select";
import {
  defineComponent,
  parseStructuredRules,
  useFormName,
  useFormValidation,
  useGetFieldValue,
  useIsStreaming,
  useSetFieldValue,
} from "../json-component";
import React from "react";
import { z } from "zod";
import { rulesSchema } from "../rules";
import { getJsonProps } from "../helpers";

const SelectItemSchema = z.object({
  value: z.string(),
  label: z.string(),
});

export const SelectItem = defineComponent({
  name: "SelectItem",
  props: SelectItemSchema,
  description: "Option for Select dropdown.",
  component: () => null,
});

const SelectSchema = z.object({
  name: z.string(),
  items: z.array(SelectItem.ref),
  placeholder: z.string().optional(),
  rules: rulesSchema,
});

export const Select = defineComponent({
  name: "Select",
  props: SelectSchema,
  description: "Dropdown select. items: SelectItem[], placeholder, rules for validation.",
  component: ({ props }) => {
    const formName = useFormName();
    const getFieldValue = useGetFieldValue();
    const setFieldValue = useSetFieldValue();
    const isStreaming = useIsStreaming();
    const formValidation = useFormValidation();

    const fieldName = props.name as string;
    const rules = React.useMemo(() => parseStructuredRules(props.rules), [props.rules]);
    const value = getFieldValue(formName, fieldName) as string | undefined;

    React.useEffect(() => {
      if (!isStreaming && rules.length > 0 && formValidation) {
        formValidation.registerField(fieldName, rules, () => getFieldValue(formName, fieldName));
        return () => formValidation.unregisterField(fieldName);
      }
      return undefined;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isStreaming, rules.length > 0]);

     
    const items = ((props.items ?? []) as unknown[])
      .map(getJsonProps)
      .filter((item): item is Record<string, unknown> => Boolean(item?.value));

    return (
      <ShadcnSelect
        value={value ?? ""}
        onValueChange={(val) => {
          setFieldValue(formName, "Select", fieldName, val, true);
          if (rules.length > 0 && formValidation)
            formValidation.validateField(fieldName, val, rules);
        }}
        disabled={isStreaming}
      >
        <SelectTrigger>
          <SelectValue placeholder={props.placeholder ?? "Select..."} />
        </SelectTrigger>
        <SelectContent>
          {items.map((item, i) => (
            <ShadcnSelectItem key={i} value={String(item.value)}>
              {String(item.label || item.value)}
            </ShadcnSelectItem>
          ))}
        </SelectContent>
      </ShadcnSelect>
    );
  },
});


