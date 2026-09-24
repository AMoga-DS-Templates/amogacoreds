'use client'

import PieChartDonut from './pie-chart-donut'
import type { PieChartProps, PieSlice } from './pie-chart-types'

export function PieChartDonutActive(props: PieChartProps) {
  return <PieChartDonut {...props} />
}

export type { PieChartProps, PieSlice }
export const PieChartDonutActiveComponent = PieChartDonutActive
export default PieChartDonutActive
