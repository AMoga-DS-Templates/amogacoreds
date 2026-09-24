'use client'

import { Bar, CartesianGrid, Legend, Line, XAxis, YAxis, ComposedChart } from 'recharts'
import { ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { ChartFrame, chartColor, getCategoryKey, getSeries, makeChartConfig, type ChartProps } from './_chart-utils'

export function BarChartMixed({ data = [], series, categoryKey, className, height = 280, showGrid = true, showLegend = false }: ChartProps) {
  const keys = getSeries(data, series)
  const xKey = getCategoryKey(data, categoryKey) ?? 'category'
  const first = keys[0]
  return <ChartFrame config={makeChartConfig(keys)} className={className} height={height}>
    <ComposedChart data={data} accessibilityLayer>
      {showGrid && <CartesianGrid vertical={false} />}
      <XAxis dataKey={xKey} tickLine={false} axisLine={false} />
      <YAxis tickLine={false} axisLine={false} />
      <ChartTooltip content={<ChartTooltipContent />} />
      {showLegend && <Legend />}
      {first && <Bar dataKey={first.dataKey} fill={first.color ?? chartColor(0)} radius={4} />}
      {keys.slice(1).map((item, index) => <Line key={item.dataKey} type="monotone" dataKey={item.dataKey} stroke={item.color ?? chartColor(index + 1)} strokeWidth={2} />)}
    </ComposedChart>
  </ChartFrame>
}

export const BarChartMixedComponent = BarChartMixed
export default BarChartMixed
