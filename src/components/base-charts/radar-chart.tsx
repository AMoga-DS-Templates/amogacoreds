'use client'

import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart as RechartsRadarChart } from 'recharts'
import { ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { ChartFrame, chartColor, getCategoryKey, getSeries, makeChartConfig, type ChartProps } from './_chart-utils'

export function RadarChart({ data = [], series, categoryKey, className, height = 280 }: ChartProps) {
  const keys = getSeries(data, series)
  const key = getCategoryKey(data, categoryKey) ?? 'category'
  return <ChartFrame config={makeChartConfig(keys)} className={className} height={height}>
    <RechartsRadarChart data={data} outerRadius="70%">
      <PolarGrid /><PolarAngleAxis dataKey={key} /><PolarRadiusAxis />
      <ChartTooltip content={<ChartTooltipContent />} />
      {keys.map((item, index) => <Radar key={item.dataKey} name={item.label ?? item.dataKey} dataKey={item.dataKey} stroke={item.color ?? chartColor(index)} fill={item.color ?? chartColor(index)} fillOpacity={0.2} />)}
    </RechartsRadarChart>
  </ChartFrame>
}

export const RadarChartComponent = RadarChart
export default RadarChart
