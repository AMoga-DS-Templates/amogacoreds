// Official example: https://ui.shadcn.com/docs/ai-elements/radix/context.md
"use client";

import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";

function formatTokens(value: number) {
  if (value < 1000) {
    return String(value);
  }

  return `${(value / 1000).toFixed(1).replace(/\.0$/, "")}k`;
}

export interface AiContextUsage {
  input: number;
  output: number;
  reasoning: number;
  limit: number;
}
export interface AiContextProps {
  usage: AiContextUsage;
}
export function AiContext({ usage }: AiContextProps) {
  const used = usage.input + usage.output + usage.reasoning;
  const percent =
    usage.limit > 0
      ? Math.min(100, Math.max(0, Math.round((used / usage.limit) * 100)))
      : 0;
  const rows = [
    { label: "Input", value: usage.input },
    { label: "Output", value: usage.output },
    { label: "Reasoning", value: usage.reasoning },
  ];

  return (
    <div className="flex justify-center py-12">
      <HoverCard openDelay={10} closeDelay={100}>
        <HoverCardTrigger asChild>
          <Button variant="outline" size="sm">
            {percent}% context
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="flex w-64 flex-col gap-3">
          <div className="flex items-center justify-between gap-3 text-sm">
            <span className="font-medium">Context</span>
            <span className="text-muted-foreground">
              {formatTokens(used)} / {formatTokens(usage.limit)}
            </span>
          </div>
          <Progress value={percent} aria-label="Context used" />
          <div className="flex flex-col gap-1 text-sm">
            {rows.map((row) => (
              <div key={row.label} className="flex justify-between gap-3">
                <span className="text-muted-foreground">{row.label}</span>
                <span>{formatTokens(row.value)}</span>
              </div>
            ))}
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}

export { AiContext as ContextDemo };
