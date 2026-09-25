"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { defineComponent } from "../json-component";
import { z } from "zod";

const displayValueSchema = z.union([z.string(), z.number(), z.boolean()]);

const StatswithLinksItemSchema = z.object({
  name: displayValueSchema,
  value: displayValueSchema,
  change: displayValueSchema,
  changeType: z.enum(["positive", "negative"]).default("positive"),
  href: z.string().optional().default("#"),
  linkLabel: displayValueSchema.optional().default("View more"),
});

const StatswithLinksSchema = z.object({
  data: z.array(StatswithLinksItemSchema).min(1),
});

export const StatswithLinks = defineComponent({
  name: "StatswithLinks",
  props: StatswithLinksSchema,
  description:
    'Responsive stat cards with footer links. data item: { name, value, change, changeType: "positive" | "negative", href, linkLabel }.',
  component: ({ props }) => (
    <div className="w-full max-w-[800px]">
      <dl className="grid w-full grid-cols-[repeat(auto-fit,minmax(min(100%,14rem),1fr))] gap-4 sm:gap-6">
        {props.data.map((item, index) => (
          <Card key={`${item.name}-${index}`} className="min-w-0 gap-0 p-0 shadow-2xs">
            <CardContent className="px-4 py-3 sm:px-5 sm:py-4">
              <dd className="flex min-w-0 items-start justify-between gap-3">
                <span className="min-w-0 break-words bg-gradient-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-sm font-extrabold tracking-tight text-transparent">
                  {item.name}
                </span>
                <span
                  className={cn(
                    "shrink-0 text-sm font-medium",
                    item.changeType === "positive"
                      ? "text-emerald-700 dark:text-emerald-500"
                      : "text-red-700 dark:text-red-500",
                  )}
                >
                  {item.change}
                </span>
              </dd>
              <dd className="mt-1 break-words text-3xl font-semibold tabular-nums text-foreground">
                {item.value}
              </dd>
            </CardContent>
            <CardFooter className="flex justify-end border-t border-border p-0!">
              <a href={item.href} className="px-4 py-3 text-sm font-medium text-primary hover:text-primary/90 sm:px-5">
                {item.linkLabel} &rarr;
              </a>
            </CardFooter>
          </Card>
        ))}
      </dl>
    </div>
  ),
});

export default StatswithLinks;


