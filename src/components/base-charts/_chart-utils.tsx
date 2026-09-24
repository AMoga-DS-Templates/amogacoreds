'use client'

import type { ReactNode } from 'react'
import { ChartContainer, type ChartConfig } from '@/components/ui/chart'

export type ChartValue = string | number
export type ChartDatum = Record<string, ChartValue>
export type ChartSeries = { dataKey: string; label?: string; color?: string }
export type ChartProps = {
  data?: ChartDatum[]
  series?: ChartSeries[]
  categoryKey?: string
  className?: string
  height?: number
  showGrid?: boolean
  showLegend?: boolean
}

export const chartColor = (index: number) => `var(--chart-${(index % 5) + 1})`

export function getCategoryKey(data: ChartDatum[], categoryKey?: string) {
  if (categoryKey) return categoryKey
  const first = data[0]
  return first && ('category' in first ? 'category' : 'name' in first ? 'name' : 'label' in first ? 'label' : undefined)
}

export function getSeries(data: ChartDatum[], series?: ChartSeries[]) {
  if (series?.length) return series
  const categoryKey = getCategoryKey(data)
  return Object.keys(data[0] ?? {})
    .filter((key) => key !== categoryKey)
    .map((dataKey, index) => ({ dataKey, label: dataKey, color: chartColor(index) }))
}

export function makeChartConfig(series: ChartSeries[]): ChartConfig {
  return Object.fromEntries(series.map((item, index) => [item.dataKey, { label: item.label ?? item.dataKey, color: item.color ?? chartColor(index) }]))
}

export function ChartFrame({ config, children, className, height }: { config: ChartConfig; children: ReactNode; className?: string; height: number }) {
  return <ChartContainer config={config} className={className ?? 'w-full'} style={{ height }}>{children}</ChartContainer>
}
