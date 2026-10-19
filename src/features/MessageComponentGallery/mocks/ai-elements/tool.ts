// Scripted data from the official shadcn example; used only by the Design System.
import type { UIDataTypes, UIMessage } from "ai";
import { createChat } from "@shadcn/helpers/ai-sdk";

export type ChatMessage = UIMessage<
  unknown,
  UIDataTypes,
  {
    runCommand: {
      input: { command: string };
      output: { stdout: string };
    };
  }
>;

export type ToolPart = Extract<
  ChatMessage["parts"][number],
  { type: "tool-runCommand" }
>;

export const chat = createChat<ChatMessage>()
  .user("Which package managers are installed?")
  .assistant(({ writer }) => {
    writer
      .tool("runCommand", { input: { command: "node --version" } })
      .sleep(900)
      .output({ stdout: "v24.18.0" });
    writer
      .tool("runCommand", { input: { command: "npm --version" } })
      .sleep(900)
      .output({ stdout: "11.6.2" });
    writer
      .tool("runCommand", { input: { command: "pnpm --version" } })
      .sleep(900)
      .error("command not found: pnpm");
    writer.text("Node 24 and npm 11 are installed. pnpm is not.");
  });

export const transcript = chat.get();

export const [question] = chat.get(1);

export const transport = chat.transport({ delayMs: 20 });
