// Scripted data from the official shadcn example; used only by the Design System.
import type { UIDataTypes, UIMessage } from "ai";
import { createChat } from "@shadcn/helpers/ai-sdk";

export type SubagentMessage = UIMessage<
  unknown,
  UIDataTypes,
  {
    runCommand: {
      input: { command: string };
      output: { stdout: string };
    };
  }
>;

export type SubagentPart = SubagentMessage["parts"][number];

export type ChatMessage = UIMessage<
  unknown,
  UIDataTypes,
  {
    researchAgent: {
      input: { task: string };
      output: SubagentMessage;
    };
  }
>;

export type Part = ChatMessage["parts"][number];

export const steps = [
  {
    command: "grep -rn cacheKey scripts",
    stdout:
      "scripts/optimize-images.ts:14:  const cacheKey = process.env.COMMIT_SHA",
  },
  {
    command: "sed -n 13,15p scripts/optimize-images.ts",
    stdout:
      'const cacheDir = ".next/cache/images"\nconst cacheKey = process.env.COMMIT_SHA\nconst cached = await restoreCache(cacheDir, cacheKey)',
  },
  {
    command: "ls public/images | wc -l",
    stdout: "1240",
  },
];

function getSubagentMessage(done: number, report?: string): SubagentMessage {
  const parts = steps.slice(0, done).map((step, index): SubagentPart => ({
    type: "tool-runCommand",
    toolCallId: `step-${index}`,
    state: "output-available",
    input: { command: step.command },
    output: { stdout: step.stdout },
  }));

  if (done < steps.length) {
    parts.push({
      type: "tool-runCommand",
      toolCallId: `step-${done}`,
      state: "input-available",
      input: { command: steps[done].command },
    });
  }

  if (report) {
    parts.push({ type: "text", text: report });
  }

  return { id: "research-agent", role: "assistant", parts };
}

export const chat = createChat<ChatMessage>()
  .user("Why does image optimization rerun on every deploy?")
  .assistant(({ writer }) => {
    const subagent = writer
      .tool("researchAgent", {
        input: {
          task: "Find out why image optimization reruns on every deploy.",
        },
      })
      .sleep(600);
    steps.forEach((_, index) => {
      subagent
        .output(getSubagentMessage(index), { preliminary: true })
        .sleep(1000);
    });
    subagent
      .output(
        getSubagentMessage(
          steps.length,
          "The cache is keyed on the commit SHA, so every deploy misses it and optimizes all 1,240 images again.",
        ),
      )
      .sleep(400);
    writer.text(
      "Image optimization reruns because its cache is keyed on the commit SHA, which changes on every deploy. Key the cache on a hash of public/images instead, and unchanged images will be skipped.",
    );
  });

export const transcript = chat.get();

export const [question] = chat.get(1);

export const transport = chat.transport({ delayMs: 20 });
