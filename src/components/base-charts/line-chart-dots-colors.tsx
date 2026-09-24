'use client'

import LineChart from './line-chart'
import type { ChartProps } from './_chart-utils'

export function LineChartDotsColors(props: ChartProps) {
  return <LineChart {...props} />
}

export const LineChartDotsColorsComponent = LineChartDotsColors
export default LineChartDotsColors
