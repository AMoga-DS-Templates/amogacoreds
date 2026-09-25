"use client";

/* JSON definitions are rendered as isolated React components by ShadcnChatRenderer. */
 

import { Card, CardContent } from "@/components/ui/card";
import { type ChartConfig, ChartContainer } from "@/components/ui/chart";
import { defineComponent } from "../json-component";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { PolarAngleAxis, RadialBar, RadialBarChart } from "recharts";
import { z } from "zod";

const displayValueSchema = z.union([z.string(), z.number(), z.boolean()]);

const StatswithCircularProgressItemSchema = z.object({
  name: displayValueSchema,
  capacity: z.coerce.number(),
  current: displayValueSchema,
  allowed: displayValueSchema,
});

const chartConfig = {
  capacity: {
    label: "Capacity",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

const StatswithCircularProgressSchema = z.object({
  title: displayValueSchema.default("Plan overview"),
  description: displayValueSchema.default("You are currently on the starter plan."),
  linkLabel: displayValueSchema.optional(),
  linkUrl: z.string().optional(),
  data: z.array(StatswithCircularProgressItemSchema).min(1),
});

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

export const StatswithCircularProgress = defineComponent({
  name: "StatswithCircularProgress",
  props: StatswithCircularProgressSchema,
  description:
    "Plan overview stat cards with circular radial progress. Arguments: title, description, linkLabel?, linkUrl?, data.",
  component: ({ props }) => (
    <div className="w-full">
      <div className="w-full">
        <h2 className="text-balance text-xl font-medium text-foreground">{props.title}</h2>
        <p className="text-pretty mt-1 text-sm leading-6 text-muted-foreground">
          {props.description}{" "}
          {props.linkLabel && props.linkUrl ? (
            <Link
              href={props.linkUrl}
              className="inline-flex items-center gap-1 text-primary hover:underline hover:underline-offset-4"
            >
              {props.linkLabel}
              <ExternalLink className="size-4" aria-hidden={true} />
            </Link>
          ) : null}
        </p>
        <dl className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(min(100%,14rem),1fr))] gap-4 sm:gap-6">
          {props.data.map((item, index) => {
            const name = toDisplayString(item.name, `Metric ${index + 1}`);
            const capacity = Math.max(0, Math.min(100, toFiniteNumber(item.capacity)));
            const current = toDisplayString(item.current, "0");
            const allowed = toDisplayString(item.allowed, "0");

            return (
              <Card key={`${name}-${index}`} className="min-w-0 gap-0 px-0 py-0 shadow-2xs">
                <CardContent className="flex items-center space-x-4 px-4 py-3 sm:px-5 sm:py-4">
                  <div className="relative flex items-center justify-center">
                    <ChartContainer config={chartConfig} className="h-[80px] w-[80px]">
                      <RadialBarChart
                        data={[{ capacity }]}
                        innerRadius={30}
                        outerRadius={60}
                        barSize={6}
                        startAngle={90}
                        endAngle={-270}
                      >
                        <PolarAngleAxis
                          type="number"
                          domain={[0, 100]}
                          angleAxisId={0}
                          tick={false}
                          axisLine={false}
                        />
                        <RadialBar
                          dataKey="capacity"
                          background
                          cornerRadius={10}
                          fill="var(--primary)"
                          angleAxisId={0}
                        />
                      </RadialBarChart>
                    </ChartContainer>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-base font-medium text-foreground">{capacity}%</span>
                    </div>
                  </div>
                  <div className="min-w-0">
                    <dt className="break-words bg-gradient-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-sm font-extrabold tracking-tight text-transparent">
                      {name}
                    </dt>
                    <dd className="text-sm text-muted-foreground">
                      {current} of {allowed} used
                    </dd>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </dl>
      </div>
    </div>
  ),
});

export default StatswithCircularProgress;


