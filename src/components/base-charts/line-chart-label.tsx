'use client'

import LineChart from './line-chart'
import type { ChartProps } from './_chart-utils'

export function LineChartLabel(props: ChartProps) {
  return <LineChart {...props} showLegend={props.showLegend ?? true} />
}

export const LineChartLabelComponent = LineChartLabel
export default LineChartLabel
