'use client'

import { Cell, Pie, PieChart } from 'recharts'
import { ChartContainer } from '@/components/ui/chart'
import { StatCard, StatsGrid, statColors, type StatsChartProps, type StatChartItem } from './_stats-utils'

export function StatsUsageDashboard({ summary = [], className }: StatsChartProps) {
  return <StatsGrid summary={summary} className={className}>{(item, index) => { const data = item.labels.map((label, i) => ({ name: String(label), value: item.values[i] ?? 0 })); return <StatCard key={`${item.name}-${index}`} item={item} chart={<ChartContainer config={{ value: { label: item.name, color: statColors[index % statColors.length] } }} className="h-16 w-full"><PieChart><Pie data={data} dataKey="value" innerRadius="45%" outerRadius="80%">{data.map((slice, sliceIndex) => <Cell key={slice.name} fill={statColors[(sliceIndex + index) % statColors.length]} />)}</Pie></PieChart></ChartContainer>} /> }}</StatsGrid>
}

export type { StatsChartProps, StatChartItem }
export default StatsUsageDashboard
