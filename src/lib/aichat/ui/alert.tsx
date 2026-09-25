"use client";

import { AlertDescription, AlertTitle, Alert as ShadcnAlert } from "@/components/ui/alert";
import { defineComponent } from "../json-component";
import { AlertCircle, CheckCircle2, Info, TriangleAlert } from "lucide-react";
import { z } from "zod";

export const AlertSchema = z.object({
  title: z.string(),
  description: z.string(),
  variant: z.enum(["default", "destructive", "info", "success", "warning"]).optional(),
});
export type AlertProps = z.infer<typeof AlertSchema>;

const variantStyles: Record<string, string> = {
  info: "border-primary/25 bg-primary/10 text-foreground [&>svg]:text-primary",
  success:
    "border-[hsl(var(--chart-2)/0.3)] bg-[hsl(var(--chart-2)/0.12)] text-foreground [&>svg]:text-[hsl(var(--chart-2))]",
  warning:
    "border-[hsl(var(--chart-4)/0.3)] bg-[hsl(var(--chart-4)/0.12)] text-foreground [&>svg]:text-[hsl(var(--chart-4))]",
};

const iconMap = {
  default: null,
  destructive: AlertCircle,
  info: Info,
  success: CheckCircle2,
  warning: TriangleAlert,
};

export function AlertView(props: AlertProps) {
  const variant = props.variant ?? "default";
  const Icon = iconMap[variant];
  return <ShadcnAlert variant={variant === "destructive" ? "destructive" : "default"} className={variantStyles[variant] ?? ""}>{Icon ? <Icon className="size-4" /> : null}<AlertTitle>{props.title}</AlertTitle><AlertDescription>{props.description}</AlertDescription></ShadcnAlert>;
}

export const Alert = defineComponent({
  name: "Alert",
  props: AlertSchema,
  description:
    'Alert banner with icon, title, and description. variant: "default" | "destructive" | "info" | "success" | "warning".',
  component: ({ props }) => <AlertView {...props} />,
});


