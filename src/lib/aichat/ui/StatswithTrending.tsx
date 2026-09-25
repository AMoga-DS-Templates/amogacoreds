"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { defineComponent } from "../json-component";
import { z } from "zod";

const displayValueSchema = z.union([z.string(), z.number(), z.boolean()]);

const StatswithTrendingItemSchema = z.object({
  name: displayValueSchema,
  value: displayValueSchema,
  change: displayValueSchema.optional().default(""),
  changeType: z.enum(["positive", "negative", "neutral"]).default("neutral"),
});

const StatswithTrendingSchema = z.object({
  data: z.array(StatswithTrendingItemSchema).min(1),
});

const toDisplayString = (value: unknown, fallback = "") => {
  if (value === null || value === undefined) {
    return fallback;
  }

  return String(value);
};

export const StatswithTrending = defineComponent({
  name: "StatswithTrending",
  props: StatswithTrendingSchema,
  description:
    'Stats cards with values and optional trend changes. data item: { name, value, change?, changeType: "positive" | "negative" | "neutral" }.',
  component: ({ props }) => {
    const data = props.data;

    return (
      <div className="w-full">
        <div className="grid w-full grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-transparent sm:grid-cols-2 sm:rounded-xl lg:grid-cols-4">
          {data.map((stat, index) => {
            const name = toDisplayString(stat.name, `Metric ${index + 1}`);
            const value = toDisplayString(stat.value, "0");
            const change = toDisplayString(stat.change).trim();

            return (
            <Card
              key={`${name}-${index}`}
              className={cn(
                  "rounded-none border-0 border-r border-b border-border px-0 py-0 shadow-none",
                index === 0 && "rounded-t-lg sm:rounded-l-xl sm:rounded-tr-none",
                index === data.length - 1 &&
                  "rounded-b-lg sm:rounded-r-xl sm:rounded-bl-none",
              )}
            >
              <CardContent className="flex min-w-0 flex-wrap items-baseline justify-between gap-x-4 gap-y-2 px-4 py-3 sm:px-5 sm:py-4">
                <div className="min-w-0 break-words bg-gradient-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-xs font-semibold tracking-tight text-transparent sm:text-sm">
                  {name}
                </div>
                {change && (
                  <div
                    className={cn(
                      "tabular-nums text-[11px] font-medium",
                      stat.changeType === "positive"
                        ? "text-primary"
                        : stat.changeType === "negative"
                          ? "text-destructive"
                          : "text-muted-foreground",
                    )}
                  >
                    {change}
                  </div>
                )}
                <div className="w-full min-w-0 flex-none break-words text-lg font-medium tracking-tight text-foreground sm:text-xl">
                  {value}
                </div>
              </CardContent>
            </Card>
            );
          })}
        </div>
      </div>
    );
  },
});

export default StatswithTrending;


