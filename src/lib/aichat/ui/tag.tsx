"use client";

/* JSON definitions are rendered as isolated React components by ShadcnChatRenderer. */
 

import { Badge } from "@/components/ui/badge";
import { defineComponent } from "../json-component";
import { z } from "zod";
import { getJsonProps } from "../helpers";

export const TagSchema = z.object({
  text: z.string(),
  variant: z.enum(["default", "secondary", "destructive", "outline", "ghost"]).optional(),
});
export type TagProps = z.infer<typeof TagSchema>;
export function TagView(props: TagProps) { return <Badge variant={props.variant ?? "secondary"}>{props.text}</Badge>; }
export function TagBlockView({ tags }: { tags: Array<string | TagProps> }) {
  return <div className="flex flex-wrap gap-1.5">{tags.map((tag, index) => typeof tag === "string" ? <Badge key={index} variant="secondary">{tag}</Badge> : <TagView key={index} {...tag} />)}</div>;
}

export const Tag = defineComponent({
  name: "Tag",
  props: TagSchema,
  description: "Styled tag/badge. Used inside TagBlock.",
  component: ({ props }) => <TagView {...props} />,
});

export const TagBlock = defineComponent({
  name: "TagBlock",
  props: z.object({
    tags: z.array(z.union([z.string(), Tag.ref])),
  }),
  description: "Group of tags. Accepts string array or Tag references.",
  component: ({ props }) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const tags = (props.tags ?? []) as any[];
    return (
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag, i) => {
          if (typeof tag === "string") {
            return (
              <Badge key={i} variant="secondary">
                {tag}
              </Badge>
            );
          }
          const tagProps = getJsonProps(tag) ?? {};
          const text = String(tagProps.text ?? "");
          const parsedTag = TagSchema.safeParse(tagProps);
          const variant = parsedTag.success ? parsedTag.data.variant ?? "secondary" : "secondary";
          return (
            <Badge key={i} variant={variant}>
              {text}
            </Badge>
          );
        })}
      </div>
    );
  },
});


