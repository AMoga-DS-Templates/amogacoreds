import type { UIMessage } from "ai";

/** Pass messages and status from useChat, or from your own API/state. */
export interface AiConversationProps<M extends UIMessage = UIMessage> {
  messages?: M[];
  status?: "ready" | "submitted" | "streaming" | "error";
  onReplay?: () => void;
}
export interface AiModelOption {
  id: string;
  name: string;
}
export interface AiModelProvider {
  name: string;
  models: AiModelOption[];
}
export interface AiComposerOptions {
  providers: AiModelProvider[];
  efforts: AiModelOption[];
  model?: string;
  effort?: string;
  onModelChange?: (id: string) => void;
  onEffortChange?: (id: string) => void;
}
export interface AiComposerSubmission {
  text: string;
  model: string;
  effort: string;
}
