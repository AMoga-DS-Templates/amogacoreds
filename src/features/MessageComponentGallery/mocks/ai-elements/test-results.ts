// Scripted data from the official shadcn example; used only by the Design System.
import type { UIDataTypes, UIMessage } from "ai";
import { createChat } from "@shadcn/helpers/ai-sdk";

export type Test = {
  name: string;
  status: "passed" | "failed" | "skipped";
  error?: string;
};

export type ChatMessage = UIMessage<
  unknown,
  UIDataTypes,
  {
    runTests: {
      input: { command: string };
      output: { suites: { name: string; tests: Test[] }[] };
    };
  }
>;

export type ToolPart = Extract<
  ChatMessage["parts"][number],
  { type: "tool-runTests" }
>;

export const chat = createChat<ChatMessage>()
  .user("Run the checkout tests.")
  .assistant(({ writer }) => {
    writer
      .tool("runTests", { input: { command: "pnpm test checkout" } })
      .sleep(1500)
      .output({
        suites: [
          {
            name: "cart.test.ts",
            tests: [
              { name: "adds an item", status: "passed" },
              { name: "removes an item", status: "passed" },
              { name: "applies a discount code", status: "passed" },
            ],
          },
          {
            name: "payment.test.ts",
            tests: [
              { name: "charges the saved card", status: "passed" },
              {
                name: "retries a declined card",
                status: "failed",
                error: `Expected 2 charge attempts, received 1

  at Object.<anonymous> (src/payment.test.ts:58:22)`,
              },
            ],
          },
        ],
      });
    writer.text(
      "One test failed. The payment client does not retry a declined card, so the second charge attempt never happens.",
    );
  });

export const transcript = chat.get();

export const [question] = chat.get(1);

export const transport = chat.transport({ delayMs: 20 });
