// Scripted data from the official shadcn example; used only by the Design System.
import type { UIDataTypes, UIMessage } from "ai";
import { createChat } from "@shadcn/helpers/ai-sdk";

export type ChatMessage = UIMessage<
  unknown,
  {
    terminal: { output: string };
  },
  {
    runCommand: {
      input: { command: string };
      output: { exitCode: number };
    };
  }
>;

export type ToolPart = Extract<
  ChatMessage["parts"][number],
  { type: "tool-runCommand" }
>;

export const COMMANDS = [
  {
    id: "lint",
    command: "pnpm lint",
    output: ["> acme-chat@0.1.0 lint", "> eslint ."],
  },
  {
    id: "test",
    command: "pnpm test",
    output: [
      "> acme-chat@0.1.0 test",
      "> vitest run",
      "",
      " ✓ lib/ai.test.ts (6 tests) 41ms",
      " ✓ components/chat.test.tsx (9 tests) 212ms",
      "",
      " Test Files  2 passed (2)",
      "      Tests  15 passed (15)",
    ],
  },
  {
    id: "build",
    command: "pnpm build",
    output: [
      "> acme-chat@0.1.0 build",
      "> next build",
      "",
      "   ▲ Next.js 16.3.0",
      "   Creating an optimized production build ...",
      " ✓ Compiled successfully in 4.2s",
      " ✓ Generating static pages (12/12)",
      "",
      "Route (app)                Size  First Load JS",
      "┌ ○ /                     1.9 kB       112 kB",
      "└ ƒ /api/chat              141 B       102 kB",
    ],
  },
];

export const chat = createChat<ChatMessage>()
  .user("Run the checks, then build the app.")
  .assistant(({ writer }) => {
    for (const { id, command, output } of COMMANDS) {
      const tool = writer.tool("runCommand", {
        toolCallId: id,
        input: { command },
      });

      // The tool streams its output as a data part with the tool call's id.
      output.forEach((_, index) => {
        writer
          .data({
            type: "data-terminal",
            id,
            data: { output: output.slice(0, index + 1).join("\n") },
          })
          .sleep(200);
      });

      tool.output({ exitCode: 0 });
    }

    writer.text("Lint and tests pass, and the build compiled both routes.");
  });

export const transcript = chat.get();

export const [question] = chat.get(1);

export const transport = chat.transport({ delayMs: 20 });
