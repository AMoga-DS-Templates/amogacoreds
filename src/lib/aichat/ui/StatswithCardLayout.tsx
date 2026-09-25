"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { defineComponent } from "../json-component";
import { z } from "zod";

const StatswithCardLayoutItemSchema = z.object({
  name: z.string(),
  stat: z.string(),
  change: z.string().optional().default(""),
  changeType: z.enum(["positive", "negative", "neutral"]).default("neutral"),
});

const StatswithCardLayoutSchema = z.object({
  data: z.array(StatswithCardLayoutItemSchema).min(1),
});

const toDisplayString = (value: unknown, fallback = "") => {
  if (value === null || value === undefined) {
    return fallback;
  }

  return String(value);
};

export const StatswithCardLayout = defineComponent({
  name: "StatswithCardLayout",
  props: StatswithCardLayoutSchema,
  description:
    'Simple stat cards with values and optional change text. data item: { name, stat, change?, changeType: "positive" | "negative" | "neutral" }.',
  component: ({ props }) => (
    <div className="w-full">
      <dl className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {props.data.map((item, index) => {
          const name = toDisplayString(item.name, `Metric ${index + 1}`);
          const stat = toDisplayString(item.stat, "0");
          const change = toDisplayString(item.change).trim();

          return (
          <Card
            key={`${name}-${index}`}
            className="min-w-0 bg-card px-4 py-3 shadow-sm ring-1 ring-border/60 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg sm:px-5 sm:py-4"
          >
            <CardContent className="p-0">
              <dt className="break-words bg-gradient-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-sm font-extrabold tracking-tight text-transparent">
                {name}
              </dt>
              <dd className="mt-2 flex min-w-0 flex-col gap-y-2">
                <span className="block min-w-0 max-w-full overflow-hidden text-ellipsis whitespace-nowrap tabular-nums text-lg font-semibold leading-tight text-foreground sm:text-xl">
                  {stat}
                </span>
                {change && (
                  <span
                    className={cn(
                      item.changeType === "positive"
                        ? "text-green-800 dark:text-green-400"
                        : item.changeType === "negative"
                        ? "text-red-800 dark:text-red-400"
                          : "text-muted-foreground",
                      "block max-w-full break-words text-sm font-medium leading-snug",
                    )}
                  >
                    {change}
                  </span>
                )}
              </dd>
            </CardContent>
          </Card>
          );
        })}
      </dl>
    </div>
  ),
});

export default StatswithCardLayout;


