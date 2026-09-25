"use client";

import { defineComponent } from "../json-component";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { z } from "zod";

const MarkDownRendererSchema = z.object({
  text: z.string(),
});

export const MarkDownRenderer = defineComponent({
  name: "MarkDownRenderer",
  props: MarkDownRendererSchema,
  description: "Renders markdown text with GFM support.",
  component: ({ props }) => {
    const text = props.text == null ? "" : String(props.text);
    return (
      <div
        className="
          max-w-none text-sm text-foreground
          [&_a]:font-medium [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4
          [&_blockquote]:mt-4 [&_blockquote]:border-l-2 [&_blockquote]:border-border [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground
          [&_code]:rounded-sm [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.85em]
          [&_h1]:mt-6 [&_h1]:scroll-m-20 [&_h1]:text-3xl [&_h1]:font-semibold [&_h1]:tracking-tight
          [&_h2]:mt-6 [&_h2]:scroll-m-20 [&_h2]:border-b [&_h2]:pb-2 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight
          [&_h3]:mt-6 [&_h3]:scroll-m-20 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight
          [&_h4]:mt-4 [&_h4]:scroll-m-20 [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:tracking-tight
          [&_hr]:my-6 [&_hr]:border-border
          [&_img]:rounded-lg [&_img]:border
          [&_li]:ml-6 [&_li]:mt-1
          [&_ol]:my-4 [&_ol]:list-decimal
          [&_p]:leading-7 [&_p:not(:first-child)]:mt-4
          [&_pre]:mt-4 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:border [&_pre]:bg-muted [&_pre]:p-4
          [&_pre_code]:bg-transparent [&_pre_code]:p-0
          [&_strong]:font-semibold
          [&_table]:my-6 [&_table]:w-full [&_table]:border-collapse [&_table]:overflow-hidden [&_table]:rounded-lg [&_table]:border
          [&_tbody_tr]:border-b [&_tbody_tr]:border-border
          [&_td]:p-3 [&_td]:align-middle
          [&_th]:bg-muted/50 [&_th]:p-3 [&_th]:text-left [&_th]:font-medium
          [&_thead]:border-b [&_thead]:border-border
          [&_ul]:my-4 [&_ul]:list-disc
        "
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
      </div>
    );
  },
});


