"use client";

/* JSON definitions are rendered as isolated React components by ShadcnChatRenderer. */
 

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import { defineComponent } from "../json-component";
import { Cell, Pie, PieChart } from "recharts";
import { z } from "zod";

const UsageItemSchema = z.object({
  name: z.string(),
  current: z.string(),
  limit: z.string(),
  percentage: z.number(),
});

const StatsUsageDashboardSchema = z.object({
  title: z.string().default("Last 30 days"),
  subtitle: z.string().default("Updated just now"),
  buttonLabel: z.string().optional(),
  usageData: z.array(UsageItemSchema).min(1),
});

const chartConfig = {
  used: {
    label: "Used",
    color: "hsl(var(--primary))",
  },
  remaining: {
    label: "Remaining",
    color: "hsl(var(--muted))",
  },
} satisfies ChartConfig;

const toDisplayString = (value: unknown, fallback = "") => {
  if (value === null || value === undefined) {
    return fallback;
  }

  return String(value);
};

const toFiniteNumber = (value: unknown, fallback = 0) => {
  const numericValue = Number(value);
  return Number.isFinite(numericValue) ? numericValue : fallback;
};

function DonutChart({ percentage }: { percentage: number }) {
  const backgroundData = [{ name: "background", value: 100, fill: "#E5E7EB" }];
  const foregroundData = [
    {
      name: "used",
      value: Math.max(0, Math.min(100, Number(percentage))),
      fill: "#3B82F6",
    },
    {
      name: "empty",
      value: 100 - Math.max(0, Math.min(100, Number(percentage))),
      fill: "transparent",
    },
  ];

  return (
    <ChartContainer config={chartConfig} className="w-6 h-6 shrink-0 aspect-square">
      <PieChart>
        <Pie
          data={backgroundData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={6}
          outerRadius={10}
          isAnimationActive={false}
        >
          {backgroundData.map((entry, index) => (
            <Cell key={`bg-cell-${index}`} fill={entry.fill} />
          ))}
        </Pie>
        <Pie
          data={foregroundData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={6}
          outerRadius={10}
          startAngle={90}
          endAngle={-270}
        >
          {foregroundData.map((entry, index) => (
            <Cell key={`fg-cell-${index}`} fill={entry.fill} />
          ))}
        </Pie>
      </PieChart>
    </ChartContainer>
  );
}

export const StatsUsageDashboard = defineComponent({
  name: "StatsUsageDashboard",
  props: StatsUsageDashboardSchema,
  description:
    "Usage dashboard card with donut progress rows. Arguments: title, subtitle, buttonLabel?, usageData.",
  component: ({ props }) => (
    <Card className="w-full gap-3 px-0 py-4 shadow-2xs sm:py-5">
      <CardHeader className="px-4 py-0 sm:px-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex min-w-0 flex-col">
            <h3 className="text-balance text-sm font-medium">{props.title}</h3>
            <p className="text-pretty text-xs text-muted-foreground font-medium">
              {props.subtitle}
            </p>
          </div>
          {props.buttonLabel ? (
            <Button size="sm" className="h-6 text-xs font-medium">
              {props.buttonLabel}
            </Button>
          ) : null}
        </div>
      </CardHeader>

      <CardContent className="px-2 py-2 pt-0 sm:px-5 sm:py-3">
        <div className="space-y-0">
          {props.usageData.map((item, index) => (
            <div
              key={`${toDisplayString(item.name, `Usage ${index + 1}`)}-${index}`}
              className={`flex min-w-0 flex-wrap items-center gap-2 rounded-sm px-2 py-1.5 transition-colors hover:bg-muted/50 sm:gap-3 sm:p-2 ${
                index % 2 === 1 ? "bg-muted/20" : ""
              }`}
            >
              <DonutChart percentage={toFiniteNumber(item.percentage)} />
              <span className="min-w-[8rem] flex-1 break-words text-sm leading-4">
                {toDisplayString(item.name, `Usage ${index + 1}`)}
              </span>
              <span className="text-xs font-medium tabular-nums tracking-tighter text-muted-foreground sm:whitespace-nowrap">
                {toDisplayString(item.current, "0")} /{" "}
                <span className="text-foreground">{toDisplayString(item.limit, "0")}</span>
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  ),
});

export default StatsUsageDashboard;


