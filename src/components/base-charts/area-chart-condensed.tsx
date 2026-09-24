'use client'

import AreaChart from './area-chart'
import type { ChartProps } from './_chart-utils'

export function AreaChartCondensed(props: ChartProps) {
  return <AreaChart {...props} height={props.height ?? 180} showAxes={false} showGrid={props.showGrid ?? false} />
}

export default AreaChartCondensed
