'use client'

import type { ReactNode } from 'react'
import { Card, CardContent } from '@/components/ui/card'

export type StatChartItem = { name: string; tickerSymbol?: string; value: string | number; change?: string | number; percentageChange?: string | number; changeType?: 'positive' | 'negative'; labels: Array<string | number>; values: number[] }
export type StatsChartProps = { summary?: StatChartItem[]; className?: string }
export const statColors = ['var(--chart-1)', 'var(--chart-2)', 'var(--chart-3)', 'var(--chart-4)', 'var(--chart-5)']

export function StatsGrid({ summary = [], children, className }: { summary?: StatChartItem[]; children: (item: StatChartItem, index: number) => ReactNode; className?: string }) {
  return <div className={`grid w-full grid-cols-[repeat(auto-fit,minmax(min(100%,14rem),1fr))] gap-4 ${className ?? ''}`}>{summary.map((item, index) => children(item, index))}</div>
}

export function StatCard({ item, chart }: { item: StatChartItem; chart: ReactNode }) {
  const positive = item.changeType !== 'negative'
  return <Card className="min-w-0"><CardContent className="space-y-2 p-4"><p className="truncate text-sm font-medium text-muted-foreground">{item.name}{item.tickerSymbol ? ` (${item.tickerSymbol})` : ''}</p><div className="flex items-baseline justify-between gap-2"><p className="text-lg font-semibold">{item.value}</p><p className={positive ? 'text-sm text-primary' : 'text-sm text-destructive'}>{item.percentageChange ?? item.change ?? ''}</p></div>{chart}</CardContent></Card>
}
