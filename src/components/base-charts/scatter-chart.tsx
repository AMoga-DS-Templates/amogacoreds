'use client'

import { CartesianGrid, Scatter, XAxis, YAxis, ScatterChart as RechartsScatterChart } from 'recharts'
import { ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { ChartFrame, chartColor } from './_chart-utils'

export type ScatterPoint = { x: number; y: number; z?: number; name?: string }
export type ScatterChartProps = { data?: ScatterPoint[]; className?: string; height?: number }

export function ScatterChart({ data = [], className, height = 280 }: ScatterChartProps) {
  return <ChartFrame config={{ value: { label: 'Value', color: chartColor(0) } }} className={className} height={height}>
    <RechartsScatterChart><CartesianGrid /><XAxis type="number" dataKey="x" name="X" /><YAxis type="number" dataKey="y" name="Y" /><ChartTooltip content={<ChartTooltipContent />} /><Scatter name="Data" data={data} fill={chartColor(0)} /></RechartsScatterChart>
  </ChartFrame>
}

export const ScatterChartComponent = ScatterChart
export const ScatterSeries = ScatterChart
export default ScatterChart
