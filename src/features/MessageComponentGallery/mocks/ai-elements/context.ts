// Scripted data from the official shadcn example; used only by the Design System.
import type { UIDataTypes, UIMessage } from "ai";
import { createChat } from "@shadcn/helpers/ai-sdk";

export const usage = {
  input: 8420,
  output: 1260,
  reasoning: 980,
  limit: 128000,
};

export const used = usage.input + usage.output + usage.reasoning;

export const percent = Math.round((used / usage.limit) * 100);

export const rows = [
  { label: "Input", value: usage.input },
  { label: "Output", value: usage.output },
  { label: "Reasoning", value: usage.reasoning },
];
