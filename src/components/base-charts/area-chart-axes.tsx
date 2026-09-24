'use client'

import AreaChart from './area-chart'
import type { ChartProps } from './_chart-utils'

export function AreaChartAxes(props: ChartProps) {
  return <AreaChart {...props} height={props.height ?? 300} showAxes showGrid={props.showGrid ?? true} />
}

export const AreaChartAxesComponent = AreaChartAxes
export default AreaChartAxes
