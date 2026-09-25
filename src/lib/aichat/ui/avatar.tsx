"use client";

import { AvatarFallback, AvatarImage, Avatar as ShadcnAvatar } from "@/components/ui/avatar";
import { defineComponent } from "../json-component";
import { z } from "zod";

export const AvatarSchema = z.object({
  src: z.string().optional(),
  alt: z.string().optional(),
  fallback: z.string(),
});
export type AvatarProps = z.infer<typeof AvatarSchema>;
export function AvatarView(props: AvatarProps) {
  return <ShadcnAvatar>{props.src ? <AvatarImage src={props.src} alt={props.alt ?? ""} /> : null}<AvatarFallback>{props.fallback}</AvatarFallback></ShadcnAvatar>;
}

export const Avatar = defineComponent({
  name: "Avatar",
  props: AvatarSchema,
  description: "Circular avatar with image and fallback text.",
  component: ({ props }) => <AvatarView {...props} />,
});


