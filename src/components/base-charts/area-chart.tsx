'use client'

import { useId } from 'react'
import { Area, CartesianGrid, Legend, XAxis, YAxis, AreaChart as RechartsAreaChart } from 'recharts'
import { ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { ChartFrame, chartColor, getCategoryKey, getSeries, makeChartConfig, type ChartProps } from './_chart-utils'

export type AreaChartProps = ChartProps & {
  showAxes?: boolean
  gradientFill?: boolean
  fillOpacity?: number
}

export function AreaChart({ data = [], series, categoryKey, className, height = 280, showGrid = true, showLegend = false, showAxes = false, gradientFill = false, fillOpacity = 0.18 }: AreaChartProps) {
  const keys = getSeries(data, series)
  const xKey = getCategoryKey(data, categoryKey) ?? 'category'
  const gradientId = useId().replace(/:/g, '')

  return <ChartFrame config={makeChartConfig(keys)} className={className} height={height}>
    <RechartsAreaChart data={data} accessibilityLayer>
      {gradientFill && <defs>{keys.map((item, index) => {
        const color = item.color ?? chartColor(index)
        return <linearGradient key={item.dataKey} id={`${gradientId}-${item.dataKey}`} x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor={color} stopOpacity={0.65} /><stop offset="95%" stopColor={color} stopOpacity={0.04} /></linearGradient>
      })}</defs>}
      {showGrid && <CartesianGrid vertical={false} />}
      <XAxis dataKey={xKey} tickLine={showAxes} axisLine={showAxes} />
      <YAxis tickLine={showAxes} axisLine={showAxes} />
      <ChartTooltip content={<ChartTooltipContent />} />
      {showLegend && <Legend />}
      {keys.map((item, index) => {
        const color = item.color ?? chartColor(index)
        return <Area key={item.dataKey} type="monotone" dataKey={item.dataKey} stroke={color} fill={gradientFill ? `url(#${gradientId}-${item.dataKey})` : color} fillOpacity={gradientFill ? 1 : fillOpacity} strokeWidth={2} />
      })}
    </RechartsAreaChart>
  </ChartFrame>
}

export default AreaChart
