"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { defineComponent } from "../json-component";
import { TrendingDown, TrendingUp } from "lucide-react";
import { z } from "zod";

const displayValueSchema = z.union([z.string(), z.number(), z.boolean()]);

const StatswithBadgesItemSchema = z.object({
  name: displayValueSchema,
  stat: displayValueSchema,
  change: displayValueSchema.optional().default(""),
  changeType: z.enum(["positive", "negative", "neutral"]).default("neutral"),
});

const StatswithBadgesSchema = z.object({
  data: z.array(StatswithBadgesItemSchema).min(1),
});

const toDisplayString = (value: unknown, fallback = "") => {
  if (value === null || value === undefined) {
    return fallback;
  }

  return String(value);
};

const formatStatValue = (value: unknown, fallback = "0") => {
  if (value === null || value === undefined || value === "") {
    return fallback;
  }

  const numericValue =
    typeof value === "number"
      ? value
      : typeof value === "string"
        ? Number(value)
        : Number.NaN;

  if (Number.isFinite(numericValue) && String(value).trim() !== "") {
    return new Intl.NumberFormat("en-US", {
      maximumFractionDigits: 2,
    }).format(numericValue);
  }

  return String(value);
};

export const StatswithBadges = defineComponent({
  name: "StatswithBadges",
  props: StatswithBadgesSchema,
  description:
    'Stat cards with dynamic state or trend badges. Supply non-empty change text from response data. data item: { name, stat, change, changeType: "positive" | "negative" | "neutral" }.',
  component: ({ props }) => (
    <div className="w-full">
      <dl className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {props.data.map((item, index) => {
          const name = toDisplayString(item.name, `Metric ${index + 1}`);
          const stat = formatStatValue(item.stat, "0");
          const change = toDisplayString(item.change).trim();
          const showChange = change.length > 0;

          return (
            <Card
              key={`${name}-${index}`}
              className="min-w-0 bg-card px-2 py-3 shadow-sm ring-1 ring-border/60 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg sm:px-5 sm:py-4"
            >
              <CardContent className="flex h-full min-h-[7.25rem] flex-col p-0">
                <div className="grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                  <dt className="min-w-0 break-words bg-gradient-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-sm font-extrabold leading-snug text-transparent">
                    {name}
                  </dt>
                  {showChange ? (
                    <Badge
                      variant="outline"
                      className={cn(
                        "mt-0.5 grid max-w-[8.5rem] shrink-0 grid-cols-[auto_minmax(0,1fr)] items-center rounded-md px-2 py-0.5 text-xs font-medium leading-none",
                        item.changeType === "positive"
                          ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                          : item.changeType === "negative"
                            ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                            : "bg-muted text-muted-foreground",
                      )}
                    >
                      {item.changeType === "positive" && (
                        <TrendingUp className="mr-1 h-3.5 w-3.5 shrink-0 text-green-500" />
                      )}
                      {item.changeType === "negative" && (
                        <TrendingDown className="mr-1 h-3.5 w-3.5 shrink-0 text-red-500" />
                      )}
                      <span className="sr-only">
                        {item.changeType === "positive"
                          ? "Increased by "
                          : item.changeType === "negative"
                            ? "Decreased by "
                            : "Change: "}
                      </span>
                      <span className="min-w-0 truncate text-right" title={change}>
                        {change}
                      </span>
                    </Badge>
                  ) : null}
                </div>
                <dd className="mt-2 flex min-w-0 flex-1 flex-col gap-y-3">
                  <span className="block min-w-0 max-w-full overflow-hidden text-ellipsis whitespace-nowrap tabular-nums text-lg font-semibold leading-tight text-foreground sm:text-xl">
                    {stat}
                  </span>
                </dd>
              </CardContent>
            </Card>
          );
        })}
      </dl>
    </div>
  ),
});

export default StatswithBadges;


