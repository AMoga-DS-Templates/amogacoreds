"use client";

import { Progress as ShadcnProgress } from "@/components/ui/progress";
import { defineComponent } from "../json-component";
import { z } from "zod";

export const ProgressSchema = z.object({
  value: z.number(),
  label: z.string().optional(),
});
export type ProgressProps = z.infer<typeof ProgressSchema>;

export function ProgressView(props: ProgressProps) {
  return <div className="space-y-1">{props.label ? <div className="flex justify-between text-sm"><span>{props.label}</span><span className="text-muted-foreground">{props.value}%</span></div> : null}<ShadcnProgress value={props.value} /></div>;
}

export const Progress = defineComponent({
  name: "Progress",
  props: ProgressSchema,
  description: "Progress bar showing completion percentage (0-100). Optional label.",
  component: ({ props }) => <ProgressView {...props} />,
});


