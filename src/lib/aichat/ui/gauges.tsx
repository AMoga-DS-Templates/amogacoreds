'use client'

import { z } from 'zod'
import { defineComponent } from '../json-component'
import { GaugeChartLiveUpdates as TargetGaugeChartLiveUpdates, GaugeChartTwentyLevels as TargetGaugeChartTwentyLevels } from '@/components/base-charts'

const BaseGaugeSchema = z.object({
  percent: z.union([z.number(), z.string()]).optional(),
  _args: z.array(z.union([z.number(), z.string()])).optional(),
})

export const GaugeChartLiveUpdates = defineComponent({
  name: 'GaugeChartLiveUpdates',
  props: BaseGaugeSchema,
  description: 'Gauge chart matching the live-updates template style. percent can be 0-1, 0-100, or a percent string.',
  component: ({ props }) => <TargetGaugeChartLiveUpdates percent={props.percent} />,
})

export const GaugeChartTwentyLevels = defineComponent({
  name: 'GaugeChartTwentyLevels',
  props: BaseGaugeSchema,
  description: 'Gauge chart with 20 arc levels for a denser scale. percent must be between 0 and 1.',
  component: ({ props }) => <TargetGaugeChartTwentyLevels percent={props.percent} />,
})
