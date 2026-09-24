'use client'

import PieChart from './pie-chart'
import type { PieChartProps, PieSlice } from './pie-chart-types'

export type RadialChartProps = PieChartProps & { centerLabel?: string }

export function RadialChart({ centerLabel, ...props }: RadialChartProps) {
  return <div className="relative"><PieChart {...props} innerRadius={props.innerRadius ?? '55%'} />{centerLabel && <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-sm font-medium">{centerLabel}</span>}</div>
}

export type { PieSlice }
export const RadialChartComponent = RadialChart
export default RadialChart
