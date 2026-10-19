// Scripted data from the official shadcn example; used only by the Design System.
import type { UIDataTypes, UIMessage } from "ai";
import { createChat } from "@shadcn/helpers/ai-sdk";

export const reply = `Install Dialog, then open it from the gear button in \`site-header.tsx\`.

\`\`\`bash
npx shadcn@latest add dialog
\`\`\`

Wrap the button in a \`DialogTrigger\` and put the settings form in \`DialogContent\`. Focus moves into the dialog when it opens, and **Esc** closes it.`;

export const prompt =
  "How do I add a settings dialog? It should open from the gear icon in the header.";
