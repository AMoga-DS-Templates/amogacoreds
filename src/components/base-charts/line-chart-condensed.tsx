'use client'

import LineChart from './line-chart'
import type { ChartProps } from './_chart-utils'

export function LineChartCondensed(props: ChartProps) {
  return <LineChart {...props} height={props.height ?? 220} showGrid={props.showGrid ?? false} />
}

export default LineChartCondensed
