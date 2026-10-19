// Scripted data from the official shadcn example; used only by the Design System.
import type { UIDataTypes, UIMessage } from "ai";
import { createChat } from "@shadcn/helpers/ai-sdk";

export type ChatMessage = UIMessage<
  unknown,
  {
    plan: {
      title: string;
      steps: { title: string; status: "done" | "running" | "pending" }[];
    };
  }
>;

export type PlanPart = Extract<
  ChatMessage["parts"][number],
  { type: "data-plan" }
>;

export const STEPS = [
  "Install @base-ui/react",
  "Replace the Radix imports",
  "Rename asChild to render",
  "Run the type checker",
];

function planAt(current: number) {
  return {
    title: "Plan: migrate to Base UI",
    steps: STEPS.map((title, index) => ({
      title,
      status:
        index < current ? "done" : index === current ? "running" : "pending",
    })),
  } satisfies PlanPart["data"];
}

export const chat = createChat<ChatMessage>()
  .user("Migrate the dialog components to Base UI.")
  .assistant(({ writer }) => {
    STEPS.forEach((_, index) => {
      writer
        .data({ type: "data-plan", id: "plan", data: planAt(index) })
        .sleep(1200);
    });
    writer.data({ type: "data-plan", id: "plan", data: planAt(STEPS.length) });
    writer.text("Migrated Dialog and AlertDialog. The type checker passes.");
  });

export const transcript = chat.get();

export const [question] = chat.get(1);

export const transport = chat.transport({ delayMs: 20 });
