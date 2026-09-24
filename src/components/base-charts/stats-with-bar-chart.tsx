'use client'

import { Bar, BarChart, XAxis } from 'recharts'
import { ChartContainer } from '@/components/ui/chart'
import { StatCard, StatsGrid, statColors, type StatsChartProps, type StatChartItem } from './_stats-utils'

export function StatswithBarChart({ summary = [], className }: StatsChartProps) {
  return <StatsGrid summary={summary} className={className}>{(item, index) => <StatCard key={`${item.name}-${index}`} item={item} chart={<ChartContainer config={{ value: { label: item.name, color: statColors[index % statColors.length] } }} className="h-16 w-full"><BarChart data={item.labels.map((label, i) => ({ label, value: item.values[i] ?? 0 }))}><XAxis dataKey="label" hide /><Bar dataKey="value" fill={statColors[index % statColors.length]} radius={2} /></BarChart></ChartContainer>} />}</StatsGrid>
}

export type { StatsChartProps, StatChartItem }
export default StatswithBarChart
