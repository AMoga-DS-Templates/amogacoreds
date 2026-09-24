'use client'

import { CartesianGrid, Legend, Line, XAxis, YAxis, LineChart as RechartsLineChart } from 'recharts'
import { ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { ChartFrame, chartColor, getCategoryKey, getSeries, makeChartConfig, type ChartProps } from './_chart-utils'

export function LineChart({ data = [], series, categoryKey, className, height = 280, showGrid = true, showLegend = false }: ChartProps) {
  const keys = getSeries(data, series)
  const xKey = getCategoryKey(data, categoryKey) ?? 'category'
  return <ChartFrame config={makeChartConfig(keys)} className={className} height={height}>
    <RechartsLineChart data={data} accessibilityLayer>
      {showGrid && <CartesianGrid vertical={false} />}
      <XAxis dataKey={xKey} tickLine={false} axisLine={false} />
      <YAxis tickLine={false} axisLine={false} />
      <ChartTooltip content={<ChartTooltipContent />} />
      {showLegend && <Legend />}
      {keys.map((item, index) => <Line key={item.dataKey} type="monotone" dataKey={item.dataKey} stroke={item.color ?? chartColor(index)} strokeWidth={2} dot={false} />)}
    </RechartsLineChart>
  </ChartFrame>
}

export default LineChart
