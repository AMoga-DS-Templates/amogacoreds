'use client'

import AreaChart from './area-chart'
import type { ChartProps } from './_chart-utils'

export function AreaChartGradient(props: ChartProps) {
  return <AreaChart {...props} gradientFill fillOpacity={1} showGrid={props.showGrid ?? false} />
}

export const AreaChartGradientComponent = AreaChartGradient
export default AreaChartGradient
