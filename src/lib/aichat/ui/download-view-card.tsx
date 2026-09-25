"use client";

/* JSON definitions are rendered as isolated React components by ShadcnChatRenderer. */
/* eslint-disable react-hooks/rules-of-hooks */

import { Button } from "@/components/ui/button";
import {
  BuiltinActionType,
  defineComponent,
  useTriggerAction,
} from "../json-component";
import { Download, Eye, FileSpreadsheet, FileText, FileType2 } from "lucide-react";
import { z } from "zod";
import { actionSchema, type ActionSchema } from "../action";

const DownloadViewCardSchema = z.object({
  fileName: z.string(),
  fileType: z.string(),
  viewAction: actionSchema,
  downloadAction: actionSchema,
});

type DownloadViewCardProps = {
  fileName: string;
  fileType: string;
  onView: () => void;
  onDownload: () => void;
};

function getIcon(fileType: string) {
  switch (fileType) {
    case "csv":
    case "xlsx":
      return FileSpreadsheet;
    case "docx":
      return FileType2;
    default:
      return FileText;
  }
}

function triggerCardAction(
  triggerAction: ReturnType<typeof useTriggerAction>,
  action: ActionSchema,
  fallbackLabel: string,
  extraParams?: Record<string, unknown>,
) {
  if (!action) return;

  if (
    action.type === BuiltinActionType.OpenUrl &&
    typeof (action as { url?: string }).url === "string"
  ) {
    triggerAction(fallbackLabel, undefined, {
      type: action.type,
      params: {
        url: (action as { url: string }).url,
        ...extraParams,
      },
    });
    return;
  }

  triggerAction(fallbackLabel, undefined, {
    type: action.type ?? BuiltinActionType.ContinueConversation,
    params: (action as { params?: Record<string, unknown> })?.params,
  });
}

export function DownloadViewCard({
  fileName,
  fileType,
  onView,
  onDownload,
}: DownloadViewCardProps) {
  const Icon = getIcon(fileType);

  return (
    <div className="mt-3 rounded-2xl border bg-card px-4 py-4 shadow-sm transition-all duration-300 ease-out motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-2">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-background">
          <Icon className="h-5 w-5 text-foreground" />
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-foreground">{fileName}</p>
          <p className="pt-0.5 text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
            {fileType}
          </p>
        </div>

        <div className="flex items-center gap-1">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full"
            onClick={onView}
            aria-label="View file"
            title="View"
          >
            <Eye className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full"
            onClick={onDownload}
            aria-label="Download file"
            title="Download"
          >
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export const DownloadViewCardBlock = defineComponent({
  name: "DownloadViewCard",
  props: DownloadViewCardSchema,
  description:
    "Compact generated-file card with a file icon, name, type, and dedicated view/download actions.",
  component: ({ props }) => {
    const triggerAction = useTriggerAction();

    return (
      <DownloadViewCard
        fileName={props.fileName}
        fileType={props.fileType}
        onView={() =>
          triggerCardAction(triggerAction, props.viewAction, "View file", {
            title: props.fileName,
            subtitle: props.fileType,
          })
        }
        onDownload={() =>
          triggerCardAction(triggerAction, props.downloadAction, "Download file")
        }
      />
    );
  },
});


