"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { defineComponent } from "../json-component";
import dynamic from "next/dynamic";
import { z } from "zod";

const displayValueSchema = z.union([z.string(), z.number(), z.boolean()]);

const DynamicMapClient = dynamic(
  () => import("./map-client").then((mod) => mod.MapClient),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-36 items-center justify-center rounded-md border border-dashed text-xs text-muted-foreground">
        Loading map...
      </div>
    ),
  },
);

const StatswithMapItemSchema = z.object({
  name: displayValueSchema,
  tickerSymbol: displayValueSchema.optional().default(""),
  value: displayValueSchema,
  change: displayValueSchema,
  percentageChange: displayValueSchema,
  changeType: z.enum(["positive", "negative"]).default("positive"),
  latitude: z.coerce.number(),
  longitude: z.coerce.number(),
  description: displayValueSchema.optional().default(""),
});

const StatswithMapSchema = z.object({
  summary: z.array(StatswithMapItemSchema).min(1),
  height: z.coerce.number().min(96).max(800).optional().default(160),
  zoom: z.coerce.number().min(1).max(18).optional().default(9),
});

const toDisplayString = (value: unknown, fallback = "") =>
  value === null || value === undefined ? fallback : String(value);

export const StatswithMap = defineComponent({
  name: "StatswithMap",
  props: StatswithMapSchema,
  description:
    'Responsive stat cards with map thumbnails. summary item: { name, tickerSymbol, value, change, percentageChange, changeType: "positive" | "negative", latitude, longitude, description }. Optional height supports 96-800px.',
  component: ({ props }) => {
    const mapHeight = Math.min(Math.max(Number(props.height ?? 160), 96), 800);

    return (
      <div className="w-full max-w-[800px]">
        <dl className="grid w-full grid-cols-[repeat(auto-fit,minmax(min(100%,14rem),1fr))] gap-4 sm:gap-6">
          {props.summary.map((item, index) => {
            const name = toDisplayString(item.name, `Location ${index + 1}`);
            const tickerSymbol = toDisplayString(item.tickerSymbol);
            const color =
              item.changeType === "positive" ? "hsl(142.1 76.2% 36.3%)" : "hsl(0 72.2% 50.6%)";
            const mapKey = `${name}-${item.latitude}-${item.longitude}-${mapHeight}-${props.zoom}`;

            return (
              <Card key={`${name}-${index}`} className="min-w-0 p-0 shadow-2xs">
                <CardContent className="px-4 py-3 sm:px-5 sm:py-4">
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
                      <span className="font-medium text-foreground">{toDisplayString(item.change, "0")}</span>
                      <span className={cn(item.changeType === "positive" ? "text-green-600 dark:text-green-500" : "text-red-600 dark:text-red-500")}>
                        ({toDisplayString(item.percentageChange, "0%")})
                      </span>
                    </dd>
                  </div>

                  <div
                    key={mapKey}
                    className="mt-3 overflow-hidden rounded-md [&_.leaflet-control-container]:hidden"
                    style={{ height: `${mapHeight}px` }}
                  >
                    <DynamicMapClient
                      key={mapKey}
                      markers={[
                        {
                          title: name,
                          latitude: item.latitude,
                          longitude: item.longitude,
                          subtitle: tickerSymbol,
                          description: toDisplayString(item.description, String(item.value ?? "")),
                        },
                      ]}
                      centerLatitude={item.latitude}
                      centerLongitude={item.longitude}
                      zoom={props.zoom}
                      height={mapHeight}
                    />
                    <div
                      className="pointer-events-none border-l-4"
                      style={{ borderColor: color, height: `${mapHeight}px`, marginTop: `-${mapHeight}px` }}
                    />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </dl>
      </div>
    );
  },
});

export default StatswithMap;


