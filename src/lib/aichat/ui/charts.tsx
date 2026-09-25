"use client";

/* JSON definitions are rendered as isolated React components by ShadcnChatRenderer. */
 

import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { defineComponent } from "../json-component";
import { TrendingUp } from "lucide-react";
import {
  Area,
  Bar,
  CartesianGrid,
  Cell,
  Dot,
  Label,
  Line,
  LabelList,
  Pie,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadialBar,
  AreaChart as RechartsAreaChart,
  BarChart as RechartsBarChart,
  LineChart as RechartsLineChart,
  PieChart as RechartsPieChart,
  RadarChart as RechartsRadarChart,
  RadialBarChart as RechartsRadialBarChart,
  ScatterChart as RechartsScatterChart,
  Scatter,
  Sector,
  XAxis,
  YAxis,
} from "recharts";
import { useEffect, useId, useState, type CSSProperties } from "react";
import { z } from "zod";

import { buildChartData, buildSliceData, getJsonProps, hasAllProps } from "../helpers";

const COLORS = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
];

function buildConfig(keys: string[]): ChartConfig {
  const config: ChartConfig = {};
  keys.forEach((key, i) => {
    config[key] = { label: key, color: COLORS[i % COLORS.length] };
  });
  return config;
}

function getSeriesKeys(data: Record<string, string | number>[]): string[] {
  if (!data.length) return [];
  return Object.keys(data[0]).filter((k) => k !== "category");
}

function formatTemplateCategoryTick(value: unknown) {
  const label = String(value ?? "");
  if (!label) return label;

  // Keep ids, years, and numeric/date-like labels readable.
  if (/[0-9#]/.test(label)) {
    return label;
  }

  return label.length > 3 ? label.slice(0, 3) : label;
}

function formatMobileBarChartTick(value: unknown) {
  const label = String(value ?? "");
  if (!label) return label;

  const normalized = label.startsWith("#") ? label.slice(1) : label;
  if (/^\d+$/.test(normalized) && normalized.length >= 4) {
    return `#${normalized.slice(-4)}`;
  }

  return label.length > 6 ? label.slice(0, 6) : label;
}

function getTemplateChartColor(index: number) {
  return `var(--chart-${(index % 5) + 1})`;
}

function getAreaTemplateSeriesColor(index: number) {
  if (index === 0) return "var(--chart-2)";
  if (index === 1) return "var(--color-desktop)";
  return getTemplateChartColor(index);
}

function getAreaTemplateGradientTopColor(index: number) {
  if (index === 0) return "var(--chart-2)";
  if (index === 1) return "var(--chart-1)";
  return getTemplateChartColor(index);
}

function getAreaTemplateGradientBottomColor(index: number) {
  if (index === 0) return "var(--chart-2)";
  if (index === 1) return "var(--chart-2)";
  return getTemplateChartColor(Math.min(index + 1, 4));
}

function getNodeProps(input: unknown): Record<string, unknown> | null {
  return getJsonProps(input);
}

function buildChartDataSafe(labels: unknown, series: unknown): Record<string, string | number>[] {
  const built = buildChartData(labels, series);
  if (built.some((row) => Object.keys(row).length > 1)) return built;

  const labelValues = Array.isArray(labels) ? labels.map((label) => String(label)) : [];
  const seriesValues = Array.isArray(series) ? series : [];

  return labelValues.map((label, i) => {
    const point: Record<string, string | number> = { category: label };
    seriesValues.forEach((item) => {
      const props = getNodeProps(item);
      const category = props?.category;
      const values = props?.values;
      if (typeof category === "string" && Array.isArray(values) && i < values.length) {
        point[category] = Number(values[i] ?? 0);
      }
    });
    return point;
  });
}

function buildSliceDataSafe(slices: unknown): Record<string, string | number>[] {
  const built = buildSliceData(slices);
  if (built.length) return built;

  const sliceValues = Array.isArray(slices) ? slices : [];
  const result: Record<string, string | number>[] = [];

  sliceValues.forEach((item) => {
    const props = getNodeProps(item);
    const category = props?.category;
    const value = props?.value;
    if (typeof category !== "string") return;

    result.push({
      category,
      value: Number(value ?? 0),
    });
  });

  return result;
}

// â”€â”€ Virtual sub-components â”€â”€

const SeriesSchema = z.object({
  category: z.string(),
  values: z.array(z.coerce.number()),
});

export const Series = defineComponent({
  name: "Series",
  props: SeriesSchema,
  description: "One named data series with values matching labels.",
  component: () => null,
});

const SliceSchema = z.object({
  category: z.string(),
  value: z.coerce.number(),
});

export const Slice = defineComponent({
  name: "Slice",
  props: SliceSchema,
  description: "A single slice in a PieChart or RadialChart.",
  component: () => null,
});

const PointSchema = z.object({
  x: z.coerce.number(),
  y: z.coerce.number(),
  label: z.string().optional(),
});

export const Point = defineComponent({
  name: "Point",
  props: PointSchema,
  description: "A single data point in a ScatterChart series.",
  component: () => null,
});

const ScatterSeriesSchema = z.object({
  category: z.string(),
  points: z.array(Point.ref),
});

export const ScatterSeries = defineComponent({
  name: "ScatterSeries",
  props: ScatterSeriesSchema,
  description: "Named scatter series with Point references.",
  component: () => null,
});

const SeriesInputSchema = z.union([SeriesSchema, Series.ref]);
const SliceInputSchema = z.union([SliceSchema, Slice.ref]);
const ScatterSeriesInputSchema = z.union([ScatterSeriesSchema, ScatterSeries.ref]);

// â”€â”€ BarChart â”€â”€

export const BarChartCondensed = defineComponent({
  name: "BarChart",
  props: z.object({
    labels: z.array(z.string()),
    series: z.array(SeriesInputSchema),
    variant: z.enum(["grouped", "stacked"]).optional(),
    xLabel: z.string().optional(),
    yLabel: z.string().optional(),
  }),
  description: "Vertical bar chart. Use for comparing values across categories.",
  component: function BarChartRenderer({ props }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const mediaQuery = window.matchMedia("(max-width: 767px)");
      const sync = () => setIsMobile(mediaQuery.matches);

      sync();
      mediaQuery.addEventListener("change", sync);
      return () => mediaQuery.removeEventListener("change", sync);
    }, []);

    if (!hasAllProps(props as Record<string, unknown>, "labels", "series")) return null;
    const data = buildChartDataSafe(props.labels, props.series);
    if (!data.length) return null;
    const keys = getSeriesKeys(data);
    const config = buildConfig(keys);
    const isSingleSeries = keys.length === 1;
    const stacked = props.variant === "stacked";
    const hasDenseCategories = isMobile && data.length > 6;
    const chartMobileWidth = hasDenseCategories ? `${Math.max(data.length * 56, 420)}px` : "100%";
    const mobileBarSize = hasDenseCategories ? 16 : 28;

    return (
      <div className="w-full overflow-x-auto pb-1 md:overflow-visible">
        <ChartContainer
          config={config}
          className="min-h-[200px] w-[var(--chart-mobile-width)] min-w-full justify-start md:w-full md:justify-center"
          style={{ "--chart-mobile-width": chartMobileWidth } as CSSProperties}
        >
          <RechartsBarChart
            data={data}
            margin={{ left: isMobile ? 0 : 8, right: isMobile ? 8 : 0, top: 8 }}
            barCategoryGap={hasDenseCategories ? 12 : 12}
            barGap={hasDenseCategories ? 4 : 4}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="category"
              tickLine={false}
              axisLine={false}
              interval={0}
              tickMargin={12}
              height={38}
              tickFormatter={hasDenseCategories ? formatMobileBarChartTick : undefined}
              tick={{ fontSize: isMobile ? 9 : 10 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              width={isMobile ? 34 : 40}
              tickMargin={isMobile ? 6 : 8}
              tick={{ fontSize: isMobile ? 10 : 12 }}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            {keys.map((key, i) => (
              <Bar
                key={key}
                dataKey={key}
                fill={COLORS[i % COLORS.length]}
                radius={4}
                barSize={isMobile ? mobileBarSize : undefined}
                stackId={stacked ? "stack" : undefined}
                isAnimationActive={false}
              >
                {isSingleSeries
                  ? data.map((_, index) => (
                      <Cell
                        key={`${key}-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))
                  : null}
              </Bar>
            ))}
          </RechartsBarChart>
        </ChartContainer>
      </div>
    );
  },
});

// â”€â”€ LineChart â”€â”€

export const LineChartCondensed = defineComponent({
  name: "LineChart",
  props: z.object({
    labels: z.array(z.string()),
    series: z.array(SeriesInputSchema),
    xLabel: z.string().optional(),
    yLabel: z.string().optional(),
  }),
  description: "Line chart for trends over categories.",
  component: ({ props }) => {
    if (!hasAllProps(props as Record<string, unknown>, "labels", "series")) return null;
    const data = buildChartDataSafe(props.labels, props.series);
    if (!data.length) return null;
    const keys = getSeriesKeys(data);
    const config = buildConfig(keys);

    return (
      <ChartContainer config={config} className="min-h-[200px] w-full">
        <RechartsLineChart data={data}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="category" tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} />
          <ChartTooltip content={<ChartTooltipContent />} />
          {keys.map((key, i) => (
            <Line
              key={key}
              type="monotone"
              dataKey={key}
              stroke={COLORS[i % COLORS.length]}
              strokeWidth={2}
              dot={false}
              isAnimationActive={false}
            />
          ))}
        </RechartsLineChart>
      </ChartContainer>
    );
  },
});

// â”€â”€ AreaChart â”€â”€

export const AreaChartCondensed = defineComponent({
  name: "AreaChart",
  props: z.object({
    labels: z.array(z.string()),
    series: z.array(SeriesInputSchema),
    xLabel: z.string().optional(),
    yLabel: z.string().optional(),
  }),
  description: "Area chart for showing volume over categories.",
  component: ({ props }) => {
    if (!hasAllProps(props as Record<string, unknown>, "labels", "series")) return null;
    const data = buildChartDataSafe(props.labels, props.series);
    if (!data.length) return null;
    const keys = getSeriesKeys(data);
    const config = buildConfig(keys);

    return (
      <ChartContainer config={config} className="min-h-[200px] w-full">
        <RechartsAreaChart data={data}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="category" tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} />
          <ChartTooltip content={<ChartTooltipContent />} />
          {keys.map((key, i) => (
            <Area
              key={key}
              type="monotone"
              dataKey={key}
              fill={COLORS[i % COLORS.length]}
              stroke={COLORS[i % COLORS.length]}
              fillOpacity={0.2}
              isAnimationActive={false}
            />
          ))}
        </RechartsAreaChart>
      </ChartContainer>
    );
  },
});

const AreaChartTemplateProps = z.object({
  labels: z.array(z.string()),
  series: z.array(SeriesInputSchema),
  title: z.string().optional(),
  subtitle: z.string().optional(),
  trendText: z.string().optional(),
  rangeText: z.string().optional(),
});

export const AreaChartAxesComponent = defineComponent({
  name: "AreaChartAxes",
  props: AreaChartTemplateProps,
  description: "Full card area chart with axes, subtitle, and footer trend text.",
  component: ({ props }) => {
    if (!hasAllProps(props as Record<string, unknown>, "labels", "series")) return null;
    const data = buildChartDataSafe(props.labels, props.series);
    if (!data.length) return null;
    const keys = getSeriesKeys(data);
    const config = buildConfig(keys);

    return (
      <Card>
        <CardContent className="px-0 sm:px-6">
          <ChartContainer config={config} className="w-full aspect-auto" style={{ height: 280 }}>
            <RechartsAreaChart
              data={data}
              margin={{
                left: -20,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="category"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={formatTemplateCategoryTick}
              />
              <YAxis tickLine={false} axisLine={false} tickMargin={8} tickCount={3} />
              <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
              {keys.map((key, i) => (
                <Area
                  key={key}
                  dataKey={key}
                  type="natural"
                  fill={getAreaTemplateSeriesColor(i)}
                  fillOpacity={0.55}
                  stroke={getAreaTemplateSeriesColor(i)}
                  stackId="a"
                  isAnimationActive={false}
                />
              ))}
            </RechartsAreaChart>
          </ChartContainer>
        </CardContent>
        <CardFooter>
          <div className="flex w-full items-start gap-2 text-sm">
            <div className="grid gap-2">
              <div className="flex items-center gap-2 leading-none font-medium">
                {props.trendText ?? "Trending up by 5.2% this month"}
                <TrendingUp className="h-4 w-4" />
              </div>
              <div className="flex items-center gap-2 leading-none text-muted-foreground">
                {props.rangeText ?? "January - June 2024"}
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    );
  },
});

export const AreaChartGradientComponent = defineComponent({
  name: "AreaChartGradient",
  props: AreaChartTemplateProps,
  description: "Full card area chart with gradient fill, subtitle, and footer trend text.",
  component: function AreaChartGradientRenderer({ props }) {
    const gradientBaseId = useId().replace(/:/g, "");
    if (!hasAllProps(props as Record<string, unknown>, "labels", "series")) return null;
    const data = buildChartDataSafe(props.labels, props.series);
    if (!data.length) return null;
    const keys = getSeriesKeys(data);
    const config = buildConfig(keys);

    return (
      <Card>
        <CardContent className="px-0 sm:px-6">
          <ChartContainer config={config} className="w-full aspect-auto" style={{ height: 280 }}>
            <RechartsAreaChart
              data={data}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="category"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={formatTemplateCategoryTick}
              />
              <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
              <defs>
                {keys.map((key, i) => {
                  const color = getAreaTemplateGradientTopColor(i);
                  const gradientId = `${gradientBaseId}-${key}`;
                  const bottomColor = getAreaTemplateGradientBottomColor(i);

                  return (
                    <linearGradient key={gradientId} id={gradientId} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={color} stopOpacity={0.92} />
                      <stop offset="95%" stopColor={bottomColor} stopOpacity={0.22} />
                    </linearGradient>
                  );
                })}
              </defs>
              {keys.map((key, i) => {
                const color = getAreaTemplateGradientTopColor(i);
                const gradientId = `${gradientBaseId}-${key}`;

                return (
                  <Area
                    key={key}
                    dataKey={key}
                    type="natural"
                    fill={`url(#${gradientId})`}
                    fillOpacity={0.55}
                    stroke={color}
                    stackId="a"
                    isAnimationActive={false}
                  />
                );
              })}
            </RechartsAreaChart>
          </ChartContainer>
        </CardContent>
        <CardFooter>
          <div className="flex w-full items-start gap-2 text-sm">
            <div className="grid gap-2">
              <div className="flex items-center gap-2 leading-none font-medium">
                {props.trendText ?? "Trending up by 5.2% this month"}
                <TrendingUp className="h-4 w-4" />
              </div>
              <div className="flex items-center gap-2 leading-none text-muted-foreground">
                {props.rangeText ?? "January - June 2024"}
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    );
  },
});

const BarChartMixedProps = z.object({
  labels: z.array(z.string()),
  values: z.array(z.number()),
  title: z.string().optional(),
  subtitle: z.string().optional(),
  trendText: z.string().optional(),
  rangeText: z.string().optional(),
});

export const BarChartMixedComponent = defineComponent({
  name: "BarChartMixed",
  props: BarChartMixedProps,
  description: "Full card mixed horizontal bar chart with colored rows and footer text.",
  component: ({ props }) => {
    if (!hasAllProps(props as Record<string, unknown>, "labels", "values")) return null;
    if (props.labels.length !== props.values.length || props.labels.length === 0) return null;

    const data = props.labels.map((label, i) => ({
      category: label,
      value: props.values[i],
      fill: COLORS[i % COLORS.length],
    }));
    const config = buildConfig(["value"]);
    const chartHeight = Math.max(180, Math.min(320, data.length * 56));

    return (
      <Card>
        <CardContent className="px-0 sm:px-6">
          <ChartContainer config={config} className="w-full aspect-auto" style={{ height: chartHeight }}>
            <RechartsBarChart accessibilityLayer data={data} layout="vertical" margin={{ left: 0 }}>
              <YAxis
                dataKey="category"
                type="category"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
              />
              <XAxis dataKey="value" type="number" hide />
              <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
              <Bar dataKey="value" radius={5} barSize={38} maxBarSize={38} isAnimationActive={false}>
                {data.map((entry, i) => (
                  <Cell key={i} fill={entry.fill} />
                ))}
              </Bar>
            </RechartsBarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 leading-none font-medium">
            {props.trendText ?? "Trending up by 5.2% this month"} <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            {props.rangeText ?? "Showing total visitors for the last 6 months"}
          </div>
        </CardFooter>
      </Card>
    );
  },
});

const MultiSeriesTemplateProps = z.object({
  labels: z.array(z.string()),
    series: z.array(SeriesInputSchema),
  title: z.string().optional(),
  subtitle: z.string().optional(),
  trendText: z.string().optional(),
  rangeText: z.string().optional(),
});

export const BarChartMultipleComponent = defineComponent({
  name: "BarChartMultiple",
  props: MultiSeriesTemplateProps,
  description: "Full card grouped bar chart with footer trend text.",
  component: ({ props }) => {
    if (!hasAllProps(props as Record<string, unknown>, "labels", "series")) return null;
    const data = buildChartDataSafe(props.labels, props.series);
    if (!data.length) return null;
    const keys = getSeriesKeys(data);
    const config = buildConfig(keys);
    return (
      <Card>
        <CardContent className="px-0 sm:px-6">
          <ChartContainer config={config}>
            <RechartsBarChart accessibilityLayer data={data}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="category"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={formatTemplateCategoryTick}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dashed" />} />
              {keys.map((key, i) => (
                <Bar
                  key={key}
                  dataKey={key}
                  fill={COLORS[i % COLORS.length]}
                  radius={4}
                  isAnimationActive={false}
                />
              ))}
            </RechartsBarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 leading-none font-medium">
            {props.trendText ?? "Trending up by 5.2% this month"} <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            {props.rangeText ?? "Showing total visitors for the last 6 months"}
          </div>
        </CardFooter>
      </Card>
    );
  },
});

const LineChartSingleSeriesProps = z.object({
  labels: z.array(z.string()),
  values: z.array(z.coerce.number()),
  title: z.string().optional(),
  subtitle: z.string().optional(),
  trendText: z.string().optional(),
  rangeText: z.string().optional(),
});

export const LineChartDotsColorsComponent = defineComponent({
  name: "LineChartDotsColors",
  props: LineChartSingleSeriesProps,
  description: "Full card line chart with custom colored dots and footer text.",
  component: ({ props }) => {
    if (!hasAllProps(props as Record<string, unknown>, "labels", "values")) return null;
    if (props.labels.length !== props.values.length || props.labels.length === 0) return null;

    const data = props.labels.map((label, i) => ({
      category: label,
      value: props.values[i],
      fill: `var(--color-dot-${i + 1})`,
    }));
    const config: ChartConfig = {
      value: {
        label: "Value",
        color: "var(--chart-2)",
      },
    };
    data.forEach((item, i) => {
      config[`dot-${i + 1}`] = {
        label: item.category,
        color: COLORS[i % COLORS.length],
      };
    });

    return (
      <Card>
        <CardContent className="px-0 sm:px-6">
          <ChartContainer config={config} className="w-full aspect-auto" style={{ height: 260 }}>
            <RechartsLineChart
              accessibilityLayer
              data={data}
              margin={{ top: 24, left: 24, right: 24 }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="category"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={formatTemplateCategoryTick}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" nameKey="value" hideLabel />}
              />
              <Line
                dataKey="value"
                type="natural"
                stroke="var(--color-value)"
                strokeWidth={2}
                dot={(dotProps) => {
                  const payload = dotProps?.payload as { category?: string; fill?: string } | undefined;
                  if (!payload || typeof dotProps?.cx !== "number" || typeof dotProps?.cy !== "number") {
                    return <Dot cx={0} cy={0} r={0} fill="transparent" stroke="transparent" />;
                  }

                  const fill = payload.fill ?? "var(--color-value)";
                  return (
                    <Dot
                      key={payload.category ?? `${dotProps.cx}-${dotProps.cy}`}
                      r={5}
                      cx={dotProps.cx}
                      cy={dotProps.cy}
                      fill={fill}
                      stroke={fill}
                    />
                  );
                }}
                isAnimationActive={false}
              />
            </RechartsLineChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 leading-none font-medium">
            {props.trendText ?? "Trending up by 5.2% this month"} <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            {props.rangeText ?? "Showing total visitors for the last 6 months"}
          </div>
        </CardFooter>
      </Card>
    );
  },
});

export const LineChartLabelComponent = defineComponent({
  name: "LineChartLabel",
  props: LineChartSingleSeriesProps,
  description: "Full card line chart with top labels and footer text.",
  component: ({ props }) => {
    if (!hasAllProps(props as Record<string, unknown>, "labels", "values")) return null;
    if (props.labels.length !== props.values.length || props.labels.length === 0) return null;

    const data = props.labels.map((label, i) => ({
      category: label,
      desktop: props.values[i],
    }));
    const config: ChartConfig = {
      desktop: {
        label: "Value",
        color: "var(--chart-1)",
      },
    };
    return (
      <Card>
        <CardContent className="px-0 sm:px-6">
          <ChartContainer config={config} className="w-full aspect-auto overflow-visible" style={{ height: 280 }}>
            <RechartsLineChart
              accessibilityLayer
              data={data}
              margin={{ top: 36, left: 12, right: 12 }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="category"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={formatTemplateCategoryTick}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" nameKey="desktop" />}
              />
              <Line
                dataKey="desktop"
                type="natural"
                stroke="var(--color-desktop)"
                strokeWidth={2}
                dot={{ fill: "var(--color-desktop)" }}
                activeDot={{ r: 6 }}
                isAnimationActive={false}
              >
                <LabelList position="top" offset={12} className="fill-foreground" fontSize={12} />
              </Line>
            </RechartsLineChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 leading-none font-medium">
            {props.trendText ?? "Trending up by 5.2% this month"} <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            {props.rangeText ?? "Showing total visitors for the last 6 months"}
          </div>
        </CardFooter>
      </Card>
    );
  },
});

export const PieChartDonutComponent = defineComponent({
  name: "PieChartDonut",
  props: z.object({
    slices: z.array(SliceInputSchema),
    title: z.string().optional(),
    subtitle: z.string().optional(),
    trendText: z.string().optional(),
    rangeText: z.string().optional(),
  }),
  description: "Full card donut chart with footer text.",
  component: ({ props }) => {
    const data = buildSliceDataSafe(props.slices);
    if (!data.length) return null;
    const config = buildConfig(data.map((d) => d.category as string));

    return (
      <Card className="flex flex-col">
        <CardContent className="flex-1 px-0 pb-0 sm:px-6">
          <ChartContainer config={config} className="mx-auto aspect-square max-h-[250px]">
            <RechartsPieChart>
              <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
              <Pie data={data} dataKey="value" nameKey="category" innerRadius={60} isAnimationActive={false}>
                {data.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
            </RechartsPieChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 leading-none font-medium">
            {props.trendText ?? "Trending up by 5.2% this month"} <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            {props.rangeText ?? "Showing total visitors for the last 6 months"}
          </div>
        </CardFooter>
      </Card>
    );
  },
});

export const PieChartDonutActiveComponent = defineComponent({
  name: "PieChartDonutActive",
  props: z.object({
    slices: z.array(SliceInputSchema),
    title: z.string().optional(),
    subtitle: z.string().optional(),
    trendText: z.string().optional(),
    rangeText: z.string().optional(),
  }),
  description: "Full card donut chart with an active sector and footer text.",
  component: ({ props }) => {
    const data = buildSliceDataSafe(props.slices);
    if (!data.length) return null;
    const config = buildConfig(data.map((d) => d.category as string));

    return (
      <Card className="flex flex-col">
        <CardContent className="flex-1 px-0 pb-0 sm:px-6">
          <ChartContainer config={config} className="mx-auto aspect-square max-h-[250px]">
            <RechartsPieChart>
              <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
              <Pie
                data={data}
                dataKey="value"
                nameKey="category"
                innerRadius={60}
                strokeWidth={5}
                activeShape={({ outerRadius = 0, ...shapeProps }) => (
                  <Sector {...shapeProps} outerRadius={Number(outerRadius) + 10} />
                )}
                isAnimationActive={false}
              >
                {data.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
            </RechartsPieChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 leading-none font-medium">
            {props.trendText ?? "Trending up by 5.2% this month"} <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            {props.rangeText ?? "Showing total visitors for the last 6 months"}
          </div>
        </CardFooter>
      </Card>
    );
  },
});

export const RadialChartStackedComponent = defineComponent({
  name: "RadialChartStacked",
  props: z.object({
    slices: z.array(SliceInputSchema),
    centerLabel: z.string().optional(),
    title: z.string().optional(),
    subtitle: z.string().optional(),
    trendText: z.string().optional(),
    rangeText: z.string().optional(),
  }),
  description: "Full card stacked radial chart with center text and footer text.",
  component: ({ props }) => {
    const data = buildSliceDataSafe(props.slices).map((item, i) => ({
      category: String(item.category ?? ""),
      value: Number(item.value ?? 0),
      fill: COLORS[i % COLORS.length],
    }));
    if (!data.length) return null;
    const total = data.reduce((sum, item) => sum + Number(item.value), 0);
    const config = buildConfig(data.map((d) => d.category as string));

    return (
      <Card className="flex flex-col">
        <CardContent className="flex flex-1 items-center justify-center overflow-visible px-0 pb-2 sm:px-6">
          <ChartContainer
            config={config}
            className="mx-auto w-full max-w-[250px] aspect-auto overflow-visible"
            style={{ height: 270 }}
          >
            <RechartsRadialBarChart
              data={[Object.fromEntries(data.map((item) => [item.category, item.value]))]}
              cx="50%"
              cy="61%"
              endAngle={180}
              innerRadius={80}
              outerRadius={130}
            >
              <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
              <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) - 16}
                            className="fill-foreground text-2xl font-bold"
                          >
                            {total.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 4}
                            className="fill-muted-foreground"
                          >
                            {props.centerLabel ?? "Visitors"}
                          </tspan>
                        </text>
                      );
                    }
                    return null;
                  }}
                />
              </PolarRadiusAxis>
              {data.map((item) => (
                <RadialBar
                  key={item.category}
                  dataKey={item.category}
                  stackId="a"
                  cornerRadius={5}
                  fill={item.fill}
                  className="stroke-transparent stroke-2"
                />
              ))}
            </RechartsRadialBarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 leading-none font-medium">
            {props.trendText ?? "Trending up by 5.2% this month"} <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            {props.rangeText ?? "Showing total visitors for the last 6 months"}
          </div>
        </CardFooter>
      </Card>
    );
  },
});

export const RadialChartTextComponent = defineComponent({
  name: "RadialChartText",
  props: z.object({
    value: z.number(),
    centerLabel: z.string().optional(),
    title: z.string().optional(),
    subtitle: z.string().optional(),
    trendText: z.string().optional(),
    rangeText: z.string().optional(),
  }),
  description: "Full card radial chart with centered text and footer text.",
  component: ({ props }) => {
    const data: Array<{ category: string; value: number; fill: string }> = [
      { category: props.centerLabel ?? "Visitors", value: props.value, fill: COLORS[1] },
    ];
    const config = buildConfig(data.map((d) => d.category));

    return (
      <Card className="flex flex-col">
        <CardContent className="flex-1 px-0 pb-0 sm:px-6">
          <ChartContainer config={config} className="mx-auto aspect-square max-h-[250px]">
            <RechartsRadialBarChart data={data} startAngle={0} endAngle={250} innerRadius={80} outerRadius={110}>
              <PolarGrid
                gridType="circle"
                radialLines={false}
                stroke="none"
                className="first:fill-muted last:fill-background"
                polarRadius={[86, 74]}
              />
              <RadialBar dataKey="value" background cornerRadius={10} fill={COLORS[1]} />
              <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-4xl font-bold">
                            {props.value.toLocaleString()}
                          </tspan>
                          <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-muted-foreground">
                            {props.centerLabel ?? "Visitors"}
                          </tspan>
                        </text>
                      );
                    }
                    return null;
                  }}
                />
              </PolarRadiusAxis>
            </RechartsRadialBarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 leading-none font-medium">
            {props.trendText ?? "Trending up by 5.2% this month"} <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            {props.rangeText ?? "Showing total visitors for the last 6 months"}
          </div>
        </CardFooter>
      </Card>
    );
  },
});

// â”€â”€ PieChart â”€â”€

export const PieChartComponent = defineComponent({
  name: "PieChart",
  props: z.object({
    slices: z.array(SliceInputSchema),
    donut: z.boolean().optional(),
  }),
  description: "Pie or donut chart. slices: Slice[], donut: boolean for ring chart.",
  component: ({ props }) => {
    const data = buildSliceDataSafe(props.slices);
    if (!data.length) return null;
    const config = buildConfig(data.map((d) => d.category as string));

    return (
      <ChartContainer
        config={config}
        className="min-h-[200px] w-full mx-auto aspect-square max-h-[250px]"
      >
        <RechartsPieChart>
          <ChartTooltip content={<ChartTooltipContent nameKey="category" />} />
          <Pie
            data={data}
            dataKey="value"
            nameKey="category"
            innerRadius={props.donut ? "50%" : 0}
            isAnimationActive={false}
          >
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
        </RechartsPieChart>
      </ChartContainer>
    );
  },
});

// â”€â”€ RadarChart â”€â”€

export const RadarChartComponent = defineComponent({
  name: "RadarChart",
  props: z.object({
    labels: z.array(z.string()),
    series: z.array(SeriesInputSchema),
  }),
  description: "Radar/spider chart for multi-dimensional comparison.",
  component: ({ props }) => {
    if (!hasAllProps(props as Record<string, unknown>, "labels", "series")) return null;
    const data = buildChartDataSafe(props.labels, props.series);
    if (!data.length) return null;
    const keys = getSeriesKeys(data);
    const config = buildConfig(keys);

    return (
      <ChartContainer
        config={config}
        className="min-h-[200px] w-full mx-auto aspect-square max-h-[250px]"
      >
        <RechartsRadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="category" />
          <ChartTooltip content={<ChartTooltipContent />} />
          {keys.map((key, i) => (
            <Radar
              key={key}
              dataKey={key}
              fill={COLORS[i % COLORS.length]}
              fillOpacity={0.3}
              stroke={COLORS[i % COLORS.length]}
              isAnimationActive={false}
            />
          ))}
        </RechartsRadarChart>
      </ChartContainer>
    );
  },
});

// â”€â”€ RadialChart â”€â”€

export const RadialChartComponent = defineComponent({
  name: "RadialChart",
  props: z.object({
    slices: z.array(SliceInputSchema),
  }),
  description: "Radial bar chart for displaying categorized values in rings.",
  component: ({ props }) => {
    const data = buildSliceDataSafe(props.slices);
    if (!data.length) return null;
    const colored = data.map((d, i) => ({ ...d, fill: COLORS[i % COLORS.length] }));
    const config = buildConfig(data.map((d) => d.category as string));

    return (
      <ChartContainer
        config={config}
        className="min-h-[200px] w-full mx-auto aspect-square max-h-[250px]"
      >
        <RechartsRadialBarChart data={colored} innerRadius={30} outerRadius={110}>
          <ChartTooltip content={<ChartTooltipContent nameKey="category" />} />
          <RadialBar dataKey="value" isAnimationActive={false} />
        </RechartsRadialBarChart>
      </ChartContainer>
    );
  },
});

// â”€â”€ ScatterChart â”€â”€

export const ScatterChartComponent = defineComponent({
  name: "ScatterChart",
  props: z.object({
    series: z.array(ScatterSeriesInputSchema),
    xLabel: z.string().optional(),
    yLabel: z.string().optional(),
  }),
  description: "Scatter plot with named series of Point references.",
  component: ({ props }) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const seriesArr = ((props.series ?? []) as any[]).map((series) => {
      const seriesProps = getNodeProps(series) ?? {};
      return {
        category: String(seriesProps.category ?? ""),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        points: ((seriesProps.points ?? []) as any[]).map((point: any) => {
          const pointProps = getNodeProps(point) ?? {};
          return { x: Number(pointProps.x ?? 0), y: Number(pointProps.y ?? 0) };
        }),
      };
    });
    const config = buildConfig(seriesArr.map((s) => s.category));

    return (
      <ChartContainer config={config} className="min-h-[200px] w-full">
        <RechartsScatterChart>
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name={props.xLabel ?? "x"} />
          <YAxis type="number" dataKey="y" name={props.yLabel ?? "y"} />
          <ChartTooltip content={<ChartTooltipContent />} />
          {seriesArr.map((s, i) => (
            <Scatter
              key={s.category}
              name={s.category}
              data={s.points}
              fill={COLORS[i % COLORS.length]}
              isAnimationActive={false}
            />
          ))}
        </RechartsScatterChart>
      </ChartContainer>
    );
  },
});


