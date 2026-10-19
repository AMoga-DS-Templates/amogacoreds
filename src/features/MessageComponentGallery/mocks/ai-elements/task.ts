// Scripted data from the official shadcn example; used only by the Design System.
import type { UIDataTypes, UIMessage } from "ai";
import { createChat } from "@shadcn/helpers/ai-sdk";

export type ChatMessage = UIMessage<
  unknown,
  {
    task: {
      title: string;
      steps: { title: string; status: "done" | "running" | "error" }[];
    };
  }
>;

export type TaskPart = Extract<
  ChatMessage["parts"][number],
  { type: "data-task" }
>;

export type Status = "running" | "error" | undefined;

export const TASKS = [
  {
    id: "find",
    title: ["Finding the project files", "Found the project files"],
    steps: [
      ["Searching for generateMetadata", "Searched for generateMetadata"],
      ["Reading app/layout.tsx", "Read app/layout.tsx"],
      ["Reading app/page.tsx", "Read app/page.tsx"],
    ],
  },
  {
    id: "update",
    title: ["Updating the page metadata", "Updated the page metadata"],
    steps: [
      ["Editing app/layout.tsx", "Edited app/layout.tsx"],
      ["Editing app/page.tsx", "Edited app/page.tsx"],
    ],
  },
];

function taskAt(task: (typeof TASKS)[number], done: number) {
  return {
    title: task.title[done < task.steps.length ? 0 : 1],
    steps: task.steps.slice(0, done + 1).map(([running, finished], index) => ({
      title: index < done ? finished : running,
      status: index < done ? "done" : "running",
    })),
  } satisfies TaskPart["data"];
}

export const chat = createChat<ChatMessage>()
  .user("Add Open Graph metadata to the home page.")
  .assistant(({ writer }) => {
    TASKS.forEach((task) => {
      for (let done = 0; done <= task.steps.length; done++) {
        writer
          .data({ type: "data-task", id: task.id, data: taskAt(task, done) })
          .sleep(900);
      }
    });
    writer.text(
      "Added Open Graph defaults to app/layout.tsx and a title, description and image for the home page in app/page.tsx.",
    );
  });

export const transcript = chat.get();

export const [question] = chat.get(1);

export const transport = chat.transport({ delayMs: 20 });
