'use client'

import { Cell, Legend, Pie, PieChart as RechartsPieChart } from 'recharts'
import { ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { ChartFrame, chartColor } from './_chart-utils'
import type { PieChartProps, PieSlice } from './pie-chart-types'

export function PieChart({ data = [], className, height = 280, innerRadius = 0, showLegend = true }: PieChartProps) {
  const slices = data.map((slice, index) => ({ ...slice, color: slice.color ?? chartColor(index) }))
  const config = Object.fromEntries(slices.map((slice) => [slice.name, { label: slice.name, color: slice.color }]))
  return <ChartFrame config={config} className={className} height={height}>
    <RechartsPieChart>
      <Pie data={slices} dataKey="value" nameKey="name" innerRadius={innerRadius} outerRadius="75%" paddingAngle={2}>
        {slices.map((slice) => <Cell key={slice.name} fill={slice.color} />)}
      </Pie>
      <ChartTooltip content={<ChartTooltipContent />} />
      {showLegend && <Legend />}
    </RechartsPieChart>
  </ChartFrame>
}

export type { PieChartProps, PieSlice }
export const PieChartComponent = PieChart
export default PieChart
