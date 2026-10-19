// Scripted data from the official shadcn example; used only by the Design System.
import type { UIDataTypes, UIMessage } from "ai";
import { createChat } from "@shadcn/helpers/ai-sdk";

export type SourcePart = Extract<
  UIMessage["parts"][number],
  { type: "source-url" }
>;

export const chat = createChat()
  .user("How do I start an Astro project with pnpm?")
  .assistant(({ writer }) => {
    writer.text(
      "Run pnpm create astro@latest and follow the prompts. It scaffolds the project and installs the dependencies.",
    );
    writer.sourceUrl({
      url: "https://docs.astro.build/en/install-and-setup/",
      title: "Install Astro | docs.astro.build",
    });
    writer.sourceUrl({
      url: "https://www.npmjs.com/package/create-astro",
      title: "create-astro | npmjs.com",
    });
    writer.sourceUrl({
      url: "https://docs.astro.build/en/install-and-setup/",
      title: "Install Astro | docs.astro.build",
    });
    writer.sourceUrl({
      url: "https://pnpm.io/cli/create",
      title: "pnpm create | pnpm.io",
    });
  });

export const transcript = chat.get();

export const [question] = chat.get(1);

export const transport = chat.transport({ delayMs: 20 });
