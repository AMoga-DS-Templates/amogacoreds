'use client'

import BarChart from './bar-chart'
import type { ChartProps } from './_chart-utils'

export function BarChartMultiple(props: ChartProps) {
  return <BarChart {...props} showLegend={props.showLegend ?? true} />
}

export const BarChartMultipleComponent = BarChartMultiple
export default BarChartMultiple
