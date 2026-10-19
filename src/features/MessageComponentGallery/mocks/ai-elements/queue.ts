// Scripted data from the official shadcn example; used only by the Design System.
import type { UIDataTypes, UIMessage } from "ai";
import { createChat } from "@shadcn/helpers/ai-sdk";

export type ChatMessage = UIMessage<
  unknown,
  UIDataTypes,
  {
    writeTodos: {
      input: {
        todos: {
          content: string;
          status: "pending" | "in_progress" | "completed";
        }[];
      };
      output: string;
    };
  }
>;

export type Todo = Extract<
  ChatMessage["parts"][number],
  { type: "tool-writeTodos"; state: "input-available" }
>["input"]["todos"][number];

export const TODOS = [
  "Add a dark variant to the theme tokens",
  "Read the theme from a cookie",
  "Add a toggle to the settings page",
  "Check contrast on the charts",
];

function todosAt(current: number) {
  return TODOS.map(
    (content, index) =>
      ({
        content,
        status:
          index < current
            ? "completed"
            : index === current
              ? "in_progress"
              : "pending",
      }) satisfies Todo,
  );
}

export const chat = createChat<ChatMessage>()
  .user("Add dark mode to the settings page.")
  .assistant(({ writer }) => {
    TODOS.forEach((_, index) => {
      writer
        .tool("writeTodos", { input: { todos: todosAt(index) } })
        .output("Updated the todo list.");
      writer.sleep(1400);
    });
    writer
      .tool("writeTodos", { input: { todos: todosAt(TODOS.length) } })
      .output("Updated the todo list.");
    writer.text("Dark mode is in. The toggle is under Settings, Appearance.");
  });

export const transcript = chat.get();

export const [question] = chat.get(1);

export const transport = chat.transport({ delayMs: 20 });
