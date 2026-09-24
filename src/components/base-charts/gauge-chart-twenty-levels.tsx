'use client'

import GaugeChartLiveUpdates, { type GaugeChartProps } from './gauge-chart-live-updates'

export function GaugeChartTwentyLevels(props: GaugeChartProps) {
  return <GaugeChartLiveUpdates {...props} />
}

export type { GaugeChartProps }
export default GaugeChartTwentyLevels
