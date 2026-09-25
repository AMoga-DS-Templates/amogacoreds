"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import { cn } from "@/lib/utils";
import { defineComponent } from "../json-component";
import { Line, LineChart, XAxis } from "recharts";
import { z } from "zod";

const displayValueSchema = z.union([z.string(), z.number(), z.boolean()]);

const StatswithLineChartItemSchema = z.object({
  name: displayValueSchema,
  tickerSymbol: displayValueSchema.optional().default(""),
  value: displayValueSchema,
  change: displayValueSchema,
  percentageChange: displayValueSchema,
  changeType: z.enum(["positive", "negative"]).default("positive"),
  labels: z.array(displayValueSchema).min(1),
  values: z.array(z.coerce.number()).min(1),
});

const StatswithLineChartSchema = z.object({
  summary: z.array(StatswithLineChartItemSchema).min(1),
});

const toDisplayString = (value: unknown, fallback = "") =>
  value === null || value === undefined ? fallback : String(value);

export const StatswithLineChart = defineComponent({
  name: "StatswithLineChart",
  props: StatswithLineChartSchema,
  description:
    'Responsive stat cards with mini line charts. summary item: { name, tickerSymbol, value, change, percentageChange, changeType: "positive" | "negative", labels, values }.',
  component: ({ props }) => (
    <div className="w-full max-w-[800px]">
      <dl className="grid w-full grid-cols-[repeat(auto-fit,minmax(min(100%,14rem),1fr))] gap-4 sm:gap-6">
        {props.summary.map((item, index) => {
          const name = toDisplayString(item.name, `Metric ${index + 1}`);
          const tickerSymbol = toDisplayString(item.tickerSymbol);
          const color =
            item.changeType === "positive" ? "hsl(142.1 76.2% 36.3%)" : "hsl(0 72.2% 50.6%)";
          const chartData = item.labels.map((label, labelIndex) => ({
            date: toDisplayString(label, `Point ${labelIndex + 1}`),
            value: Number(item.values[labelIndex] ?? 0),
          }));

          return (
            <Card key={`${name}-${index}`} className="min-w-0 p-0 shadow-2xs">
              <CardContent className="px-4 py-3 pb-0 sm:px-5 sm:py-4">
                <dt className="break-words bg-gradient-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-sm font-extrabold tracking-tight text-transparent">
                  {name}{" "}
                  {tickerSymbol ? (
                    <span className="font-semibold text-muted-foreground/80">({tickerSymbol})</span>
                  ) : null}
                </dt>
                <div className="flex min-w-0 flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <dd
                    className={cn(
                      item.changeType === "positive"
                        ? "text-green-600 dark:text-green-500"
                        : "text-red-600 dark:text-red-500",
                      "break-words text-lg font-semibold",
                    )}
                  >
                    {toDisplayString(item.value, "0")}
                  </dd>
                  <dd className="flex items-center space-x-1 text-sm">
                    <span className="font-medium text-foreground">
                      {toDisplayString(item.change, "0")}
                    </span>
                    <span
                      className={cn(
                        item.changeType === "positive"
                          ? "text-green-600 dark:text-green-500"
                          : "text-red-600 dark:text-red-500",
                      )}
                    >
                      ({toDisplayString(item.percentageChange, "0%")})
                    </span>
                  </dd>
                </div>

                <div className="mt-2 h-20 overflow-hidden">
                  <ChartContainer className="h-full w-full" config={{ value: { label: name, color } }}>
                    <LineChart data={chartData}>
                      <XAxis dataKey="date" hide={true} />
                      <Line dataKey="value" dot={false} stroke={color} strokeWidth={1.5} type="monotone" />
                    </LineChart>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </dl>
    </div>
  ),
});

export default StatswithLineChart;


