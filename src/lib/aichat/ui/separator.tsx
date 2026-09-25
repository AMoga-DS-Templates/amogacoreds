"use client";

import { Separator as ShadcnSeparator } from "@/components/ui/separator";
import { defineComponent } from "../json-component";
import { z } from "zod";

export const SeparatorSchema = z.object({
  orientation: z.enum(["horizontal", "vertical"]).optional(),
});
export type SeparatorProps = z.infer<typeof SeparatorSchema>;
export function SeparatorView(props: SeparatorProps) {
  return <ShadcnSeparator orientation={props.orientation ?? "horizontal"} />;
}

export const Separator = defineComponent({
  name: "Separator",
  props: SeparatorSchema,
  description: 'Horizontal or vertical rule. orientation: "horizontal" | "vertical".',
  component: ({ props }) => <SeparatorView {...props} />,
});


