// Scripted data from the official shadcn example; used only by the Design System.
import type { UIDataTypes, UIMessage } from "ai";
import { createChat } from "@shadcn/helpers/ai-sdk";

export type ChatMessage = UIMessage<
  unknown,
  {
    checkpoint: {
      label: string;
    };
  }
>;

export type CheckpointPart = Extract<
  ChatMessage["parts"][number],
  { type: "data-checkpoint" }
>;

export const chat = createChat<ChatMessage>()
  .user("Rename the button component to action.")
  .assistant(({ writer }) => {
    writer.text("Renamed Button to Action in components/ui/button.tsx.");
    writer.data({
      type: "data-checkpoint",
      id: "rename",
      data: { label: "Button renamed" },
    });
  })
  .user("Update the docs to match.")
  .assistant(({ writer }) => {
    writer.text("Updated the Button page to say Action.");
  });

export const transcript = chat.get();

export const transport = chat.transport({ delayMs: 20 });
