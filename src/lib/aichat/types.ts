import type { ComponentType } from "react";
import type { ZodType } from "zod";

export type ChatAction = {
  type?: string;
  message?: string;
  url?: string;
  params?: Record<string, unknown>;
};

export type ChatNode = {
  type: string;
  props?: Record<string, unknown>;
  children?: ChatNode[];
};

export type ChatComponentProps = {
  props: Record<string, unknown>;
  children?: React.ReactNode;
  nodes?: ChatNode[];
};

export type ChatComponentDefinition = {
  schema: ZodType;
  component: ComponentType<ChatComponentProps>;
};

export type ChatActionHandler = (action: ChatAction, label: string) => void;


