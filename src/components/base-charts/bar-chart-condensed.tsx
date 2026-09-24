'use client'

import BarChart from './bar-chart'
import type { ChartProps } from './_chart-utils'

export function BarChartCondensed(props: ChartProps) {
  return <BarChart {...props} height={props.height ?? 220} showGrid={props.showGrid ?? false} />
}

export default BarChartCondensed
