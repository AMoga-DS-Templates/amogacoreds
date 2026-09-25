"use client";

import { Badge as ShadcnBadge } from "@/components/ui/badge";
import { defineComponent } from "../json-component";
import { z } from "zod";

export const BadgeSchema = z.object({
  text: z.string(),
  variant: z.enum(["default", "secondary", "destructive", "outline", "ghost", "link"]).optional(),
});
export type BadgeProps = z.infer<typeof BadgeSchema>;
export function BadgeView(props: BadgeProps) {
  return <ShadcnBadge variant={props.variant ?? "default"}>{props.text}</ShadcnBadge>;
}

export const ShadcnBadgeComponent = defineComponent({
  name: "Badge",
  props: BadgeSchema,
  description:
    'Inline label/badge. variant: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link".',
  component: ({ props }) => <BadgeView {...props} />,
});


