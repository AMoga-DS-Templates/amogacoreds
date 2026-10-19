// Scripted data from the official shadcn example; used only by the Design System.
import type { UIDataTypes, UIMessage } from "ai";
import { createChat } from "@shadcn/helpers/ai-sdk";

export const chat = createChat()
  .user("Why is the checkout deploy so slow?")
  .assistant(({ writer }) => {
    writer.reasoning(
      "The deploy log has three phases. Install takes 38s and next build takes 52s, both normal for this repo.\n\nImage optimization takes 3m 50s. It reruns on every deploy because its cache key includes the commit hash, so the cache never hits.",
      { delayMs: 40 },
    );
    writer.sleep(400);
    writer.text(
      "Image optimization is the bottleneck. Key its cache on the lockfile and the image directory instead of the commit hash, and the deploy should take under two minutes.",
    );
  });

export const transcript = chat.get();

export const [question] = chat.get(1);

export const transport = chat.transport({ delayMs: 20 });
