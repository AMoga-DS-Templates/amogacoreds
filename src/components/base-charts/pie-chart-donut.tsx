'use client'

import PieChart from './pie-chart'
import type { PieChartProps, PieSlice } from './pie-chart-types'

export function PieChartDonut(props: PieChartProps) {
  return <PieChart {...props} innerRadius={props.innerRadius ?? '55%'} />
}

export type { PieChartProps, PieSlice }
export const PieChartDonutComponent = PieChartDonut
export default PieChartDonut
