"use client";

import { defineComponent } from "../json-component";
import { z } from "zod";

export const ImageSchema = z.object({
  src: z.string(),
  alt: z.string().optional(),
});
export type ImageProps = z.infer<typeof ImageSchema>;
export function ImageView(props: ImageProps) {
  return <div className="overflow-hidden rounded-lg"><img src={props.src} alt={props.alt ?? ""} className="h-auto w-full rounded-lg object-cover" /></div>;
}

export const Image = defineComponent({
  name: "Image",
  props: ImageSchema,
  description: "Displays an image with optional alt text.",
  component: ({ props }) => <ImageView {...props} />,
});

export const ImageBlockSchema = z.object({
  src: z.string(),
  alt: z.string().optional(),
  caption: z.string().optional(),
});
export type ImageBlockProps = z.infer<typeof ImageBlockSchema>;
export function ImageBlockView(props: ImageBlockProps) {
  return <figure className="space-y-2"><ImageView src={props.src} alt={props.alt} />{props.caption ? <figcaption className="text-center text-sm text-muted-foreground">{props.caption}</figcaption> : null}</figure>;
}

export const ImageBlock = defineComponent({
  name: "ImageBlock",
  props: ImageBlockSchema,
  description: "Image with optional caption.",
  component: ({ props }) => <ImageBlockView {...props} />,
});


