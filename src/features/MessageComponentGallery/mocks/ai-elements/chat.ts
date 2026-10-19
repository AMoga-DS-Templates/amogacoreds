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

export type ChatPart = ChatMessage["parts"][number];

export type ToolPart = Extract<ChatPart, { type: "tool-runCommand" }>;

export const chat = createChat<ChatMessage>()
  .user("Add a dark mode toggle to the settings page.")
  .sleep(600)
  .assistant(({ writer }) => {
    writer.reasoning(
      "I need to know how themes are set up before I add a toggle. If next-themes is already in the layout, the toggle only has to call setTheme.",
    );
    writer.sleep(400);
    writer
      .tool("runCommand", { input: { command: "rg -l ThemeProvider app" } })
      .sleep(800)
      .output({ stdout: "app/layout.tsx" });
    writer.sleep(500);
    writer.text(`next-themes is already set up in \`app/layout.tsx\`, so the toggle only has to call \`setTheme\`.

**Changes**

- Added \`components/mode-toggle.tsx\` with a Light and Dark option.
- Put \`<ModeToggle />\` next to the Appearance heading in \`app/settings/page.tsx\`.

\`\`\`tsx
const { setTheme } = useTheme()
\`\`\`
`);
  })
  .user("Make it follow the system setting by default.")
  .sleep(600)
  .assistant(({ writer }) => {
    writer.reasoning(
      "The default theme lives on the ThemeProvider. I should check what it is set to now.",
    );
    writer.sleep(400);
    writer
      .tool("runCommand", {
        input: { command: "rg -n defaultTheme app/layout.tsx" },
      })
      .sleep(800)
      .output({
        stdout: '12:  <ThemeProvider attribute="class" defaultTheme="light">',
      });
    writer.sleep(500);
    writer.text(`It was set to \`light\`. I updated the \`ThemeProvider\` in \`app/layout.tsx\`:

\`\`\`tsx
<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
\`\`\`

New visitors now get the theme from their OS. The toggle also has a **System** option, so anyone who picked Light or Dark can switch back.
`);
  })
  .user("Run the build before I ship it.")
  .sleep(600)
  .assistant(({ writer }) => {
    writer
      .tool("runCommand", { input: { command: "pnpm build" } })
      .sleep(1600)
      .output({
        stdout:
          "▲ Next.js 16.0.0\n\n✓ Compiled successfully in 4.2s\n✓ Linting and checking validity of types\n✓ Generating static pages (12/12)",
      });
    writer.sleep(500);
    writer.text(`The build passes, so it is ready to ship.

- Compiled in **4.2s**.
- No lint or type errors.
- Generated all **12** static pages.
`);
  });

export const initialMessages = chat.get(0);

export const transport = chat.transport({
  delayMs: 16,
  fallback:
    "This demo only knows the scripted turns. Press reset to start over.",
});
