'use client'

import { Area, AreaChart, XAxis } from 'recharts'
import { ChartContainer } from '@/components/ui/chart'
import { StatCard, StatsGrid, statColors, type StatsChartProps, type StatChartItem } from './_stats-utils'

export function StatswithAreaChart({ summary = [], className }: StatsChartProps) {
  return <StatsGrid summary={summary} className={className}>{(item, index) => <StatCard key={`${item.name}-${index}`} item={item} chart={<ChartContainer config={{ value: { label: item.name, color: statColors[index % statColors.length] } }} className="h-16 w-full"><AreaChart data={item.labels.map((label, i) => ({ label, value: item.values[i] ?? 0 }))}><XAxis dataKey="label" hide /><Area dataKey="value" type="monotone" stroke={statColors[index % statColors.length]} fill={statColors[index % statColors.length]} fillOpacity={0.18} strokeWidth={2} /></AreaChart></ChartContainer>} />}</StatsGrid>
}

export type { StatsChartProps, StatChartItem }
export default StatswithAreaChart
