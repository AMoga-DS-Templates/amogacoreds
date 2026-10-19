// Scripted data from the official shadcn example; used only by the Design System.
import type { UIDataTypes, UIMessage } from "ai";
import { createChat } from "@shadcn/helpers/ai-sdk";

export type ChatMessage = UIMessage<
  unknown,
  UIDataTypes,
  {
    searchWeb: {
      input: { query: string };
      output: { results: { title: string; url: string }[] };
    };
    readBuildLog: {
      input: { deployment: string };
      output: { log: string };
    };
    searchCode: {
      input: { query: string };
      output: { files: string[] };
    };
  }
>;

export type StepPart = Extract<
  ChatMessage["parts"][number],
  { type: "tool-searchWeb" | "tool-readBuildLog" | "tool-searchCode" }
>;

export const chat = createChat<ChatMessage>()
  .user("Why is the checkout deploy so slow?")
  .assistant(({ writer }) => {
    writer
      .tool("readBuildLog", { input: { deployment: "dpl_8Kx2" } })
      .sleep(900)
      .output({
        log: "install    41s\ncompile    38s\nimages   3m 52s",
      });
    writer
      .tool("searchWeb", { input: { query: "next.js image cache key" } })
      .sleep(900)
      .output({
        results: [
          {
            title: "Image component | nextjs.org",
            url: "https://nextjs.org/docs/app/api-reference/components/image",
          },
          {
            title: "Build cache | vercel.com",
            url: "https://vercel.com/docs/deployments/troubleshoot-a-build",
          },
        ],
      });
    writer
      .tool("searchCode", { input: { query: "cacheKey" } })
      .sleep(900)
      .output({ files: ["next.config.ts", "scripts/optimize-images.ts"] });
    writer.text(
      "Image optimization takes almost four minutes because its cache key includes the commit hash. Key it on the image directory instead.",
    );
  });

export const transcript = chat.get();

export const [question] = chat.get(1);

export const transport = chat.transport({ delayMs: 20 });
