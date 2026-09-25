"use client";

import { CardDescription, CardTitle, CardHeader as ShadcnCardHeader } from "@/components/ui/card";
import { defineComponent } from "../json-component";
import { z } from "zod";

export const CardHeaderSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
});

export type CardHeaderProps = z.infer<typeof CardHeaderSchema>;

export function CardHeaderView(props: CardHeaderProps) {
  return (
    <ShadcnCardHeader className="gap-1 p-0">
      <CardTitle>{props.title}</CardTitle>
      {props.description ? <CardDescription>{props.description}</CardDescription> : null}
    </ShadcnCardHeader>
  );
}

export const CardHeader = defineComponent({
  name: "CardHeader",
  props: CardHeaderSchema,
  description: "Title/description header block for a Card.",
  component: ({ props }) => <CardHeaderView {...props} />,
});


