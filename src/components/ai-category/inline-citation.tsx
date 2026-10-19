// Official example: https://ui.shadcn.com/docs/ai-elements/radix/inline-citation.md
"use client";

import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export type Source = {
  url: string;
  title: string;
  description: string;
};

function hostname(url: string) {
  return new URL(url).hostname.replace(/^www\./, "");
}

function Citation({ source }: { source: Source }) {
  const host = hostname(source.url);

  return (
    <HoverCard openDelay={10} closeDelay={100}>
      <HoverCardTrigger asChild>
        <Button variant="secondary" size="xs">
          {host}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="flex w-64 flex-col gap-1">
        <div className="font-medium">{source.title}</div>
        <p className="text-muted-foreground">{source.description}</p>
        <a
          href={source.url}
          target="_blank"
          rel="noreferrer"
          className="text-xs text-muted-foreground underline-offset-4 hover:underline"
        >
          {host}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </HoverCardContent>
    </HoverCard>
  );
}

export interface AiInlineCitationProps {
  paragraphs: Array<Array<string | Source>>;
}
export function AiInlineCitation({ paragraphs }: AiInlineCitationProps) {
  return (
    <div className="mx-auto flex max-w-sm flex-col gap-3 py-6 text-sm leading-relaxed">
      {paragraphs.map((parts, index) => (
        <p key={index}>
          {parts.map((part, partIndex) =>
            typeof part === "string" ? (
              <span key={partIndex}>{part}</span>
            ) : (
              <Citation key={partIndex} source={part} />
            ),
          )}
        </p>
      ))}
    </div>
  );
}
export { AiInlineCitation as InlineCitationDemo };
