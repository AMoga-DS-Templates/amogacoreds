"use client";

/* JSON definitions are rendered as isolated React components by ShadcnChatRenderer. */
/* eslint-disable react-hooks/rules-of-hooks */

import { Label as ShadcnLabel } from "@/components/ui/label";
import { defineComponent, useFormValidation } from "../json-component";
import { z } from "zod";
import { getJsonProps } from "../helpers";

const FormControlSchema = z.object({
  label: z.string(),
  field: z.any(),
});

export const FormControl = defineComponent({
  name: "FormControl",
  props: FormControlSchema,
  description: "Wraps a form field with a label and error display.",
  component: ({ props, renderNode }) => {
    const formValidation = useFormValidation();
     
    const fieldName = getJsonProps(props.field)?.name as string | undefined;
    const error = fieldName ? formValidation?.errors?.[fieldName] : undefined;

    return (
      <div className="space-y-2">
        <ShadcnLabel>{props.label}</ShadcnLabel>
        {renderNode(props.field)}
        {error && <p className="text-sm text-destructive">{error}</p>}
      </div>
    );
  },
});


