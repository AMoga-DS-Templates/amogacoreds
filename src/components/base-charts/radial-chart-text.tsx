'use client'

import RadialChart, { type RadialChartProps } from './radial-chart'
import type { PieSlice } from './pie-chart-types'

export function RadialChartText(props: RadialChartProps) {
  return <RadialChart {...props} />
}

export type { RadialChartProps, PieSlice }
export const RadialChartTextComponent = RadialChartText
export default RadialChartText
