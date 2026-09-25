"use client";

import { defineComponent } from "../json-component";
import { z } from "zod";

export const CodeBlockSchema = z.object({
  code: z.string(),
  language: z.string().optional(),
  title: z.string().optional(),
});
export type CodeBlockProps = z.infer<typeof CodeBlockSchema>;
export function CodeBlockView(props: CodeBlockProps) {
  return <div className="rounded-lg border bg-muted">{props.title ? <div className="border-b px-4 py-2 text-xs font-medium text-muted-foreground">{props.title}{props.language ? <span className="ml-2 text-xs opacity-60">{props.language}</span> : null}</div> : null}<pre className="overflow-x-auto p-4"><code className="font-mono text-sm">{String(props.code ?? "")}</code></pre></div>;
}

export const CodeBlock = defineComponent({
  name: "CodeBlock",
  props: CodeBlockSchema,
  description: "Syntax-highlighted code block with optional language and title.",
  component: ({ props }) => <CodeBlockView {...props} />,
});


