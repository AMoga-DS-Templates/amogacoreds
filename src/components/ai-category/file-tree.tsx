// Official example: https://ui.shadcn.com/docs/ai-elements/radix/file-tree.md
"use client";

import * as React from "react";
import { ChevronRightIcon, FileIcon, FolderIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export type FileNode =
  | { type: "file"; name: string; path: string }
  | { type: "folder"; name: string; path: string; children: FileNode[] };

function FileTreeNode({
  node,
  selected,
  onSelect,
}: {
  node: FileNode;
  selected: string;
  onSelect: (path: string) => void;
}) {
  switch (node.type) {
    case "folder":
      return (
        <Collapsible defaultOpen className="group/folder">
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start font-normal aria-expanded:bg-transparent aria-expanded:hover:bg-muted dark:aria-expanded:hover:bg-muted/50"
            >
              <ChevronRightIcon className="transition-transform group-data-[state=open]/folder:rotate-90" />
              <FolderIcon />
              {node.name}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="ml-4 flex flex-col">
              {node.children.map((child) => (
                <FileTreeNode
                  key={child.path}
                  node={child}
                  selected={selected}
                  onSelect={onSelect}
                />
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      );
    case "file":
      return (
        <Button
          variant="ghost"
          size="sm"
          className={`w-full justify-start font-normal ${
            selected === node.path ? "bg-accent text-accent-foreground" : ""
          }`}
          aria-current={selected === node.path ? "true" : undefined}
          onClick={() => onSelect(node.path)}
        >
          <FileIcon />
          {node.name}
        </Button>
      );
    default: {
      const unreachable: never = node;
      return unreachable;
    }
  }
}

export interface AiFileTreeProps {
  files: FileNode[];
  selected?: string;
  onSelect?: (path: string) => void;
}
export function AiFileTree({
  files,
  selected: controlledSelected,
  onSelect,
}: AiFileTreeProps) {
  const [localSelected, setLocalSelected] = React.useState("");
  const selected = controlledSelected ?? localSelected;
  function setSelected(path: string) {
    setLocalSelected(path);
    onSelect?.(path);
  }

  return (
    <div className="flex w-full max-w-xs flex-col py-6 text-sm">
      {files.map((node) => (
        <FileTreeNode
          key={node.path}
          node={node}
          selected={selected}
          onSelect={setSelected}
        />
      ))}
    </div>
  );
}

export { AiFileTree as FileTreeDemo };
