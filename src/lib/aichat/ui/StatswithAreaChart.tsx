"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import { cn } from "@/lib/utils";
import { defineComponent } from "../json-component";
import { Area, AreaChart, XAxis } from "recharts";
import { z } from "zod";

const displayValueSchema = z.union([z.string(), z.number(), z.boolean()]);

const StatswithAreaChartItemSchema = z.object({
  name: displayValueSchema,
  tickerSymbol: displayValueSchema.optional().default(""),
  value: displayValueSchema,
  change: displayValueSchema,
  percentageChange: displayValueSchema,
  changeType: z.enum(["positive", "negative"]).default("positive"),
  labels: z.array(displayValueSchema).min(1),
  values: z.array(z.coerce.number()).min(1),
});

const StatswithAreaChartSchema = z.object({
  summary: z.array(StatswithAreaChartItemSchema).min(1),
});

const toDisplayString = (value: unknown, fallback = "") => {
  if (value === null || value === undefined) {
    return fallback;
  }

  return String(value);
};

const sanitizeName = (name: unknown, fallback: string) => {
  return toDisplayString(name, fallback)
    .replace(/\s+/g, "-")
    .replace(/[^a-zA-Z0-9-]/g, "_")
    .toLowerCase();
};

export const StatswithAreaChart = defineComponent({
  name: "StatswithAreaChart",
  props: StatswithAreaChartSchema,
  description:
    'Stat cards with mini area charts. summary item: { name, tickerSymbol, value, change, percentageChange, changeType: "positive" | "negative", labels, values }.',
  component: ({ props }) => (
    <div className="w-full">
      <dl className="grid w-full grid-cols-[repeat(auto-fit,minmax(min(100%,14rem),1fr))] gap-4 sm:gap-6">
        {props.summary.map((item, index) => {
          const name = toDisplayString(item.name, `Metric ${index + 1}`);
          const tickerSymbol = toDisplayString(item.tickerSymbol);
          const value = toDisplayString(item.value, "0");
          const change = toDisplayString(item.change, "0");
          const percentageChange = toDisplayString(item.percentageChange, "0%");
          const labels = Array.isArray(item.labels) && item.labels.length > 0 ? item.labels : [""];
          const values = Array.isArray(item.values) && item.values.length > 0 ? item.values : [0];
          const sanitizedName = sanitizeName(name, `metric-${index + 1}`);
          const gradientId = `gradient-${sanitizedName}-${index}`;

          const color =
            item.changeType === "positive" ? "hsl(142.1 76.2% 36.3%)" : "hsl(0 72.2% 50.6%)";
          const chartData = labels.map((label, labelIndex) => ({
            date: toDisplayString(label, `Point ${labelIndex + 1}`),
            value: Number(values[labelIndex] ?? 0),
          }));

          return (
            <Card key={`${name}-${index}`} className="min-w-0 p-0 shadow-2xs">
              <CardContent className="px-4 py-3 pb-0 sm:px-5 sm:py-4">
                <div className="min-w-0">
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
                      {value}
                    </dd>
                    <dd className="flex items-center space-x-1 text-sm">
                      <span className="font-medium text-foreground">{change}</span>
                      <span
                        className={cn(
                          item.changeType === "positive"
                            ? "text-green-600 dark:text-green-500"
                            : "text-red-600 dark:text-red-500",
                        )}
                      >
                        ({percentageChange})
                      </span>
                    </dd>
                  </div>
                </div>

                <div className="mt-2 h-16 overflow-hidden">
                  <ChartContainer
                    className="w-full h-full"
                    config={{
                      [name]: {
                        label: name,
                        color: color,
                      },
                    }}
                  >
                    <AreaChart data={chartData}>
                      <defs>
                        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor={color} stopOpacity={0.3} />
                          <stop offset="95%" stopColor={color} stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="date" hide={true} />
                      <Area
                        dataKey="value"
                        stroke={color}
                        fill={`url(#${gradientId})`}
                        fillOpacity={0.4}
                        strokeWidth={1.5}
                        type="monotone"
                      />
                    </AreaChart>
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

export default StatswithAreaChart;


