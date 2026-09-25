"use client"

import { useEffect, useMemo, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { defineComponent } from "../json-component"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Item {
  id: string
  name: string
  startDate: Date
  endDate: Date
  progress: number
  level: number
  isPhase?: boolean
  status: string
}

const itemSchema = z.object({
  id: z.string(),
  name: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  progress: z.coerce.number(),
  level: z.coerce.number(),
  isPhase: z.boolean().optional(),
  status: z.string(),
})

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const statusPalette = {
  success: { bar: "#22b357", overlay: "#9fe0b5" },
  warning: { bar: "#ff7a1a", overlay: "#ffc18d" },
  danger: { bar: "#e62e2e", overlay: "#ee8e8e" },
  info: { bar: "#2f6fec", overlay: "#afc8ff" },
  neutral: { bar: "#7f8693", overlay: "#c4cad3" },
} as const

function normalizeStatus(status: unknown) {
  if (typeof status !== "string") {
    return ""
  }

  return status.trim().toLowerCase().replace(/_/g, " ")
}

function getStatusLabel(status: unknown) {
  const normalized = normalizeStatus(status)

  if (!normalized) {
    return "Unknown"
  }

  return normalized
    .split(" ")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")
}

function getProgressFromStatus(status: unknown) {
  const normalizedStatus = normalizeStatus(status)

  if (["paid", "fulfilled", "completed", "done", "closed", "success", "refunded", "voided"].includes(normalizedStatus)) return 100
  if (["partially refunded", "partially fulfilled", "in progress", "pending fulfillment", "processing", "active", "on track", "running"].includes(normalizedStatus)) return 70
  if (["partially paid"].includes(normalizedStatus)) return 55
  if (["payment pending", "pending", "authorized", "on hold", "scheduled", "unfulfilled", "request declined", "expired", "draft", "planned"].includes(normalizedStatus)) return 35
  if (["open", "restocked"].includes(normalizedStatus)) return 20

  return 50
}

function getStatusTone(status: unknown) {
  const normalizedStatus = normalizeStatus(status)

  if (/(paid|fulfilled|complete|completed|done|success|closed)/.test(normalizedStatus)) {
    return statusPalette.success
  }

  if (/(refund|void|cancel|failed|blocked|overdue)/.test(normalizedStatus)) {
    return statusPalette.danger
  }

  if (/(pending|authorized|draft|hold|scheduled|planned|unfulfilled|expired)/.test(normalizedStatus)) {
    return statusPalette.warning
  }

  if (/(progress|processing|active|track|running|started)/.test(normalizedStatus)) {
    return statusPalette.info
  }

  return statusPalette.neutral
}

function getTaskColor(status: Item["status"]) {
  return getStatusTone(status).bar
}

function getProgressOverlayColor(status: Item["status"]) {
  return getStatusTone(status).overlay
}

function normalizeDate(value: string | Date) {
  return value instanceof Date ? value : new Date(value)
}

function GanttTaskChartView({
  title,
  year,
  items,
}: {
  title?: string
  year?: number
  items: Array<z.infer<typeof itemSchema>>
}) {
  const normalizedItems = useMemo<Item[]>(
    () =>
      items.map((item) => ({
        ...item,
        startDate: normalizeDate(item.startDate),
        endDate: normalizeDate(item.endDate),
        status: normalizeStatus(item.status),
        progress:
          Number.isFinite(item.progress) && item.progress >= 0
            ? Math.max(0, Math.min(100, item.progress))
            : getProgressFromStatus(item.status),
      })),
    [items]
  )

  const fallbackYear = normalizedItems[0]?.startDate.getFullYear() ?? 2025
  const [currentYear, setCurrentYear] = useState(year ?? fallbackYear)

  useEffect(() => {
    setCurrentYear(year ?? fallbackYear)
  }, [year, fallbackYear])

  const visibleItems = useMemo(() => {
    const yearStart = new Date(currentYear, 0, 1)
    const yearEnd = new Date(currentYear, 11, 31, 23, 59, 59, 999)

    return normalizedItems.filter(
      (item) => item.startDate <= yearEnd && item.endDate >= yearStart
    )
  }, [currentYear, normalizedItems])

  const legendItems = useMemo(() => {
    const statusEntries = new Map<string, { label: string; color: string }>()

    for (const item of normalizedItems) {
      const normalizedStatus = normalizeStatus(item.status)
      if (!normalizedStatus || statusEntries.has(normalizedStatus)) {
        continue
      }

      statusEntries.set(normalizedStatus, {
        label: getStatusLabel(normalizedStatus),
        color: getTaskColor(normalizedStatus),
      })
    }

    return [...statusEntries.values()]
  }, [normalizedItems])

  const getBarPosition = (item: Item, monthIdx: number) => {
    const monthStart = new Date(currentYear, monthIdx, 1)
    const monthEnd = new Date(currentYear, monthIdx + 1, 0)

    if (item.startDate > monthEnd || item.endDate < monthStart) {
      return null
    }

    const barStart = Math.max(item.startDate.getTime(), monthStart.getTime())
    const barEnd = Math.min(item.endDate.getTime(), monthEnd.getTime())
    const monthDays = monthEnd.getDate()
    const startDay = Math.max(
      1,
      Math.ceil((barStart - monthStart.getTime()) / (1000 * 60 * 60 * 24))
    )
    const endDay = Math.min(
      monthDays,
      Math.floor((barEnd - monthStart.getTime()) / (1000 * 60 * 60 * 24)) + 1
    )

    const left = ((startDay - 1) / monthDays) * 100
    const width = ((endDay - startDay + 1) / monthDays) * 100

    return {
      left: `${left}%`,
      width: `${width}%`,
      spanDays: endDay - startDay + 1,
    }
  }

  return (
    <div className="min-h-full w-full bg-white p-0">
      <div className="w-full max-w-none">
        <Card className="w-full max-w-full overflow-hidden rounded-2xl border-0 bg-white shadow-none">
          <CardHeader className="sr-only">
            <CardTitle>{title || "Gantt Task Chart"}</CardTitle>
          </CardHeader>

          <CardContent className="space-y-5 p-0">
            <div className="w-full overflow-x-auto overflow-y-hidden pb-2 touch-pan-x overscroll-x-contain [-webkit-overflow-scrolling:touch]">
              <div className="w-max rounded-xl border border-[#e3e9f1]">
                <div className="border-b border-[#e6ebf2]">
                  <div className="flex">
                    <div className="w-36 shrink-0 border-r border-[#e3e9f1] px-1 py-4 sm:w-80 sm:px-4">
                      <div className="mx-auto flex w-fit items-center justify-center gap-2 sm:gap-4">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 shrink-0 rounded-lg border border-[#e6ebf2] text-[#4b5563] hover:bg-[#f9fafb] sm:h-8 sm:w-8"
                          onClick={() => setCurrentYear((prev) => prev - 1)}
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </Button>

                        <span className="min-w-[72px] text-center text-[28px] font-semibold leading-none tracking-[-0.03em] text-[#111827] sm:min-w-[96px] sm:text-[32px]">
                          {currentYear}
                        </span>

                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 shrink-0 rounded-lg border border-[#e6ebf2] text-[#4b5563] hover:bg-[#f9fafb] sm:h-8 sm:w-8"
                          onClick={() => setCurrentYear((prev) => prev + 1)}
                        >
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="flex shrink-0">
                      {[0, 1, 2, 3].map((quarter) => (
                        <div
                          key={quarter}
                          className="w-48 shrink-0 border-r border-[#e3e9f1] py-3 text-center text-sm font-semibold text-[#465468]"
                        >
                          Q{quarter + 1}/{currentYear.toString().slice(-2)}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex border-t border-[#e6ebf2]">
                    <div className="w-36 shrink-0 border-r border-[#e3e9f1] px-1 py-3 text-sm font-semibold text-[#425267] sm:w-80 sm:px-4">
                      Project / Phase / Task
                    </div>

                    <div className="flex shrink-0">
                      {months.map((month) => (
                        <div
                          key={month}
                          className="w-16 shrink-0 border-r border-[#e3e9f1] py-3 text-center text-xs font-medium text-[#607086]"
                        >
                          {month}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  {visibleItems.map((row) => (
                    <div key={row.id} className="flex border-b border-[#edf2f7] last:border-b-0">
                      <div className="w-36 shrink-0 border-r border-[#e3e9f1] bg-white px-1 py-3.5 text-sm sm:w-80 sm:px-4">
                        <div style={{ paddingLeft: `${row.level * 8}px` }}>
                          <span className={row.isPhase ? "font-bold text-[#111827]" : "font-medium text-[#374151]"}>
                            {row.name}
                          </span>
                          <span className="ml-1 text-[#6b7280]">({getStatusLabel(row.status)})</span>
                        </div>
                      </div>

                      <div className="flex shrink-0">
                        {months.map((month, monthIdx) => {
                          const barPos = getBarPosition(row, monthIdx)

                          return (
                            <div
                              key={month}
                              className="relative flex w-16 shrink-0 items-center border-r border-[#e3e9f1] px-1 py-3.5"
                              style={{
                                backgroundColor: "white",
                              }}
                            >
                              {barPos && (
                                <div
                                  className="absolute h-6 overflow-hidden rounded-full shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
                                  style={{
                                    left: barPos.left,
                                    width: barPos.width,
                                    minWidth: barPos.spanDays <= 2 ? "12px" : "unset",
                                    backgroundColor: getTaskColor(row.status),
                                  }}
                                >
                                  {row.progress < 100 && row.progress > 0 && barPos.spanDays > 2 && (
                                    <div
                                      className="h-full rounded-l-full"
                                      style={{
                                        width: `${Math.max(100 - row.progress, 16)}%`,
                                        backgroundColor: getProgressOverlayColor(row.status),
                                      }}
                                    />
                                  )}
                                </div>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  ))}

                  {visibleItems.length === 0 && (
                    <div className="flex">
                      <div className="w-36 shrink-0 border-r border-[#e3e9f1] bg-white px-1 py-8 text-sm text-[#6b7280] sm:w-80 sm:px-4">
                        No tasks for {currentYear}
                      </div>
                      <div className="flex flex-1 items-center justify-center px-4 py-8 text-sm text-[#6b7280]">
                        No timeline data available for the selected year.
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {legendItems.length > 0 && (
              <div className="flex flex-wrap gap-6">
                {legendItems.map((legendItem) => (
                  <div key={legendItem.label} className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: legendItem.color }} />
                    <span className="text-sm text-[#374151]">{legendItem.label}</span>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export const GanttTaskChartComponent = defineComponent({
  name: "GanttTaskChart",
  props: z.object({
    title: z.string().optional(),
    year: z.coerce.number().optional(),
    items: z.array(itemSchema),
  }),
  description: "Task-based gantt chart with yearly timeline, phases, and status legend. Requires dynamic items input.",
  component: ({ props }) => (
    <GanttTaskChartView
      title={props.title}
      year={props.year}
      items={props.items}
    />
  ),
})

export default GanttTaskChartView


