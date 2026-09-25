"use client";

import { Label as ShadcnLabel } from "@/components/ui/label";
import { defineComponent } from "../json-component";
import { z } from "zod";

export const LabelSchema = z.object({
  text: z.string(),
  htmlFor: z.string().optional(),
});
export type LabelProps = z.infer<typeof LabelSchema>;
export function LabelView(props: LabelProps) { return <ShadcnLabel htmlFor={props.htmlFor}>{props.text}</ShadcnLabel>; }

export const Label = defineComponent({
  name: "Label",
  props: LabelSchema,
  description: "Form label. Optionally links to an input via htmlFor.",
  component: ({ props }) => <LabelView {...props} />,
});


