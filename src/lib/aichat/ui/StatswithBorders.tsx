import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { defineComponent } from "../json-component";
import { TrendingDown, TrendingUp } from "lucide-react";
import { z } from "zod";

const displayValueSchema = z.union([z.string(), z.number(), z.boolean()]);

const StatswithBordersItemSchema = z.object({
  metric: displayValueSchema,
  current: displayValueSchema,
  previous: displayValueSchema,
  difference: displayValueSchema,
  trend: z.enum(["up", "down"]).default("up"),
});

const StatswithBordersSchema = z.object({
  stats: z.array(StatswithBordersItemSchema).min(1),
});

const toDisplayString = (value: unknown, fallback = "") => {
  if (value === null || value === undefined) {
    return fallback;
  }

  return String(value);
};

export const StatswithBorders = defineComponent({
  name: "StatswithBorders",
  props: StatswithBordersSchema,
  description:
    'Border-separated stat cards with current/previous values and trend badge. stats item: { metric, current, previous, difference, trend: "up" | "down" }.',
  component: ({ props }) => (
    <div className="w-full">
      <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(min(100%,13rem),1fr))] gap-px overflow-hidden rounded-lg">
        {props.stats.map((item, index) => {
          const metric = toDisplayString(item.metric, `Metric ${index + 1}`);
          const current = toDisplayString(item.current, "0");
          const previous = toDisplayString(item.previous, "0");
          const difference = toDisplayString(item.difference, "0%");

          return (
          <Card
            key={`${metric}-${index}`}
            className="rounded-none border-0 px-0 py-0 shadow-sm"
          >
            <CardContent className="min-w-0 w-full px-4 py-3 sm:px-5 sm:py-4">
              <CardTitle className="break-words bg-gradient-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-sm font-extrabold tracking-tight text-transparent">
                {metric}
              </CardTitle>
              <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-2">
                <div className="tabular-nums flex min-w-0 flex-wrap items-baseline gap-x-2 break-words text-2xl font-semibold text-primary">
                  {current}
                  <span className="tabular-nums text-sm font-medium text-muted-foreground">
                    from {previous}
                  </span>
                </div>

                <Badge
                  variant="outline"
                  className={cn(
                    "tabular-nums inline-flex items-center px-1.5 ps-2.5 py-0.5 text-xs font-medium",
                    item.trend === "up"
                      ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                      : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                  )}
                >
                  {item.trend === "up" ? (
                    <TrendingUp className="mr-0.5 -ml-1 h-5 w-5 shrink-0 self-center text-green-500" />
                  ) : (
                    <TrendingDown className="mr-0.5 -ml-1 h-5 w-5 shrink-0 self-center text-red-500" />
                  )}

                  <span className="sr-only">
                    {" "}
                    {item.trend === "up" ? "Increased" : "Decreased"} by{" "}
                  </span>
                  {difference}
                </Badge>
              </div>
            </CardContent>
          </Card>
          );
        })}
      </div>
    </div>
  ),
});

export default StatswithBorders;


