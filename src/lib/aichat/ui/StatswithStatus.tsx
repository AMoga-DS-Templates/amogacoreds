"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { defineComponent } from "../json-component";
import { AlertTriangle, Check, ChevronRight, Eye } from "lucide-react";
import Link from "next/link";
import { z } from "zod";

const displayValueSchema = z.union([z.string(), z.number(), z.boolean()]);

const StatswithStatusItemSchema = z.object({
  name: displayValueSchema,
  stat: displayValueSchema,
  goalsAchieved: z.coerce.number().min(0),
  goalsTotal: z.coerce.number().min(1).optional().default(5),
  status: z.enum(["within", "observe", "critical"]),
  href: z.string().optional().default("#"),
});

const StatswithStatusSchema = z.object({
  data: z.array(StatswithStatusItemSchema).min(1),
});

export const StatswithStatus = defineComponent({
  name: "StatswithStatus",
  props: StatswithStatusSchema,
  description:
    'Responsive stat cards with status callouts. data item: { name, stat, goalsAchieved, goalsTotal, status: "within" | "observe" | "critical", href }.',
  component: ({ props }) => (
    <div className="w-full max-w-[800px]">
      <dl className="grid w-full grid-cols-[repeat(auto-fit,minmax(min(100%,14rem),1fr))] gap-4 sm:gap-6">
        {props.data.map((item, index) => (
          <Card key={`${item.name}-${index}`} className="relative min-w-0 px-4 py-3 shadow-2xs sm:px-5 sm:py-4">
            <CardContent className="p-0">
              <dt className="break-words bg-gradient-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-sm font-extrabold tracking-tight text-transparent">
                {item.name}
              </dt>
              <dd className="break-words text-3xl font-semibold tabular-nums text-foreground">{item.stat}</dd>
              <div className="group relative mt-6 flex items-center space-x-4 rounded-md bg-muted/60 p-2 hover:bg-muted">
                <div className="flex w-full min-w-0 items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center space-x-3">
                    <span
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded text-white",
                        item.status === "within"
                          ? "bg-emerald-500"
                          : item.status === "observe"
                            ? "bg-yellow-500"
                            : "bg-red-500",
                      )}
                    >
                      {item.status === "within" ? (
                        <Check className="size-4 shrink-0" aria-hidden={true} />
                      ) : item.status === "observe" ? (
                        <Eye className="size-4 shrink-0" aria-hidden={true} />
                      ) : (
                        <AlertTriangle className="size-4 shrink-0" aria-hidden={true} />
                      )}
                    </span>
                    <dd className="min-w-0">
                      <p className="text-pretty text-sm text-muted-foreground">
                        <Link href={item.href} className="focus:outline-none">
                          <span className="absolute inset-0" aria-hidden={true} />
                          {item.goalsAchieved}/{item.goalsTotal} goals
                        </Link>
                      </p>
                      <p
                        className={cn(
                          "text-sm font-medium capitalize",
                          item.status === "within"
                            ? "text-emerald-800 dark:text-emerald-500"
                            : item.status === "observe"
                              ? "text-yellow-800 dark:text-yellow-500"
                              : "text-red-800 dark:text-red-500",
                        )}
                      >
                        {item.status}
                      </p>
                    </dd>
                  </div>
                  <ChevronRight className="size-5 shrink-0 text-muted-foreground/60 group-hover:text-muted-foreground" aria-hidden={true} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </dl>
    </div>
  ),
});

export default StatswithStatus;


