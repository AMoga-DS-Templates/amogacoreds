'use client'

import { Bar, CartesianGrid, Legend, XAxis, YAxis, BarChart as RechartsBarChart } from 'recharts'
import { ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { ChartFrame, chartColor, getCategoryKey, getSeries, makeChartConfig, type ChartProps } from './_chart-utils'

export function BarChart({ data = [], series, categoryKey, className, height = 280, showGrid = true, showLegend = false }: ChartProps) {
  const keys = getSeries(data, series)
  const xKey = getCategoryKey(data, categoryKey) ?? 'category'
  return <ChartFrame config={makeChartConfig(keys)} className={className} height={height}>
    <RechartsBarChart data={data} accessibilityLayer>
      {showGrid && <CartesianGrid vertical={false} />}
      <XAxis dataKey={xKey} tickLine={false} axisLine={false} />
      <YAxis tickLine={false} axisLine={false} />
      <ChartTooltip content={<ChartTooltipContent />} />
      {showLegend && <Legend />}
      {keys.map((item, index) => <Bar key={item.dataKey} dataKey={item.dataKey} fill={item.color ?? chartColor(index)} radius={4} />)}
    </RechartsBarChart>
  </ChartFrame>
}

export default BarChart
