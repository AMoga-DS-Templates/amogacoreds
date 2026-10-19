// Scripted data from the official shadcn example; used only by the Design System.
import type { UIDataTypes, UIMessage } from "ai";
import { createChat } from "@shadcn/helpers/ai-sdk";

export type FileNode =
  | { type: "file"; name: string; path: string }
  | { type: "folder"; name: string; path: string; children: FileNode[] };

export const files: FileNode[] = [
  {
    type: "folder",
    name: "app",
    path: "app",
    children: [
      { type: "file", name: "layout.tsx", path: "app/layout.tsx" },
      { type: "file", name: "page.tsx", path: "app/page.tsx" },
    ],
  },
  {
    type: "folder",
    name: "components",
    path: "components",
    children: [
      {
        type: "folder",
        name: "ui",
        path: "components/ui",
        children: [
          {
            type: "file",
            name: "button.tsx",
            path: "components/ui/button.tsx",
          },
        ],
      },
      {
        type: "file",
        name: "login-form.tsx",
        path: "components/login-form.tsx",
      },
    ],
  },
];
