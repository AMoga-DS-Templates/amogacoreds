import { z } from "zod";
import { BuiltinActionType } from "./json-component";

const continueConversationAction = z.object({
  type: z.literal(BuiltinActionType.ContinueConversation),
  context: z.string().optional(),
});
const openUrlAction = z.object({ type: z.literal(BuiltinActionType.OpenUrl), url: z.string() });
const customAction = z.object({ type: z.string(), params: z.record(z.string(), z.unknown()).optional() });
export const actionSchema = z.union([openUrlAction, continueConversationAction, customAction]).optional();
export type ActionSchema = z.infer<typeof actionSchema>;


