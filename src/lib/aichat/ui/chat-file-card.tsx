"use client";

/* JSON definitions are rendered as isolated React components by ShadcnChatRenderer. */
/* eslint-disable react-hooks/rules-of-hooks */

import { Button } from "@/components/ui/button";
import {
  BuiltinActionType,
  defineComponent,
  useTriggerAction,
} from "../json-component";
import {
  Eye,
  FileSignature,
  FileText,
  List,
  MessageCircleMore,
  Share2,
} from "lucide-react";
import { z } from "zod";
import { actionSchema, type ActionSchema } from "../action";
import { getJsonProps } from "../helpers";

const ChatFileCardActionSchema = z.object({
  icon: z.enum(["list", "share", "preview", "signin", "comment"]),
  action: actionSchema,
  label: z.string().optional(),
});

export const ChatFileCardAction = defineComponent({
  name: "ChatFileCardAction",
  props: ChatFileCardActionSchema,
  description:
    "Icon action used inside ChatFileCard. Supported icons: list, share, preview, signin, comment.",
  component: () => null,
});

const ChatFileCardSchema = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  actions: z.array(ChatFileCardAction.ref).optional(),
});

const actionIcons = {
  list: List,
  share: Share2,
  preview: Eye,
  signin: FileSignature,
  comment: MessageCircleMore,
} as const;

export const ChatFileCard = defineComponent({
  name: "ChatFileCard",
  props: ChatFileCardSchema,
  description:
    "Compact file card for chat file lists with a file icon, title, subtitle, and trailing actions.",
  component: ({ props }) => {
    const triggerAction = useTriggerAction();
    const actions = props.actions ?? [];

    return (
      <div className="w-full py-1">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm">
            <FileText className="h-5 w-5" strokeWidth={2} />
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-[15px] font-semibold leading-5 text-foreground">
              {props.title}
            </p>
            {props.subtitle ? (
              <p className="truncate pt-0.5 text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                {props.subtitle}
              </p>
            ) : null}
          </div>

          <div className="flex shrink-0 items-center gap-1 text-muted-foreground">
            {actions.map((item, index) => {
              const itemProps = getJsonProps(item) ?? {};
              const iconName = typeof itemProps.icon === "string" ? itemProps.icon : "preview";
              const Icon = actionIcons[iconName as keyof typeof actionIcons] ?? Eye;
              const label = typeof itemProps.label === "string" ? itemProps.label : iconName;
              const action = itemProps.action as ActionSchema;

              return (
                <Button
                  key={`${label}-${index}`}
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full text-muted-foreground hover:bg-muted hover:text-foreground"
                  onClick={() => {
                    if (action) {
                      const isPreviewOpenUrlAction =
                        iconName === "preview" &&
                        action.type === BuiltinActionType.OpenUrl &&
                        typeof (action as { url?: string }).url === "string";
                      const isSignOpenUrlAction =
                        iconName === "signin" &&
                        action.type === BuiltinActionType.OpenUrl &&
                        typeof (action as { url?: string }).url === "string";
                      const actionType = isPreviewOpenUrlAction
                        ? "preview_file"
                        : isSignOpenUrlAction
                          ? "sign_file"
                        : (action.type ?? BuiltinActionType.ContinueConversation);
                      const actionParams = isPreviewOpenUrlAction || isSignOpenUrlAction
                        ? {
                            url: (action as { url: string }).url,
                            title: props.title,
                            subtitle: props.subtitle,
                          }
                        : action.type === BuiltinActionType.OpenUrl
                          ? { url: (action as { url: string }).url }
                          : (action as { params?: Record<string, unknown> })?.params;

                      triggerAction(label, undefined, {
                        type: actionType,
                        params: actionParams,
                      });
                    }
                  }}
                  aria-label={label}
                  title={label}
                >
                  <Icon className="h-4 w-4" strokeWidth={1.8} />
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    );
  },
});


