"use client";

import { defineComponent } from "../json-component";
import { z } from "zod";

export const TextContentSchema = z.object({
  text: z.string(),
  size: z.enum(["small", "default", "large", "small-heavy", "large-heavy"]).optional(),
});

export type TextContentProps = z.infer<typeof TextContentSchema>;

const sizeClasses: Record<string, string> = {
  small: "text-sm text-muted-foreground",
  default: "text-base",
  large: "text-lg",
  "small-heavy": "text-sm font-semibold",
  "large-heavy": "text-lg font-semibold",
};

function stripMarkdownEmphasis(text: string) {
  return text
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/__(.*?)__/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/_(.*?)_/g, "$1");
}

export function TextContentView(props: TextContentProps) {
  const text = stripMarkdownEmphasis(props.text == null ? "" : String(props.text));
  const cls = sizeClasses[props.size ?? "default"] ?? sizeClasses.default;
  return <p className={cls}>{text}</p>;
}

export const TextContent = defineComponent({
  name: "TextContent",
  props: TextContentSchema,
  description:
    'Text block with optional size. size: "small" | "default" | "large" | "small-heavy" | "large-heavy".',
  component: ({ props }) => <TextContentView {...props} />,
});


