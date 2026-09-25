"use client";

import { createContext, useContext } from "react";
import type { ChatActionHandler } from "./types";

type ChatUiContextValue = {
  actionsLocked: boolean;
  onAction: ChatActionHandler;
};

const ChatUiContext = createContext<ChatUiContextValue | null>(null);

export const ChatUiProvider = ChatUiContext.Provider;

export function useChatUi() {
  const context = useContext(ChatUiContext);
  if (!context) throw new Error("Chat UI components must be rendered inside ChatUiProvider");
  return context;
}


