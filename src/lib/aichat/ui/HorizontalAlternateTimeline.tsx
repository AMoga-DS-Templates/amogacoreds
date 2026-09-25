'use client'

import { z } from 'zod'
import { defineComponent } from '../json-component'
import { HorizontalAlternateTimeline as TargetHorizontalAlternateTimeline } from '@/components/base-ui/HorizontalAlternateTimeline'

const TimelineItemSchema = z.object({
  id: z.string(),
  dateTime: z.string(),
  date: z.string(),
  title: z.string(),
  description: z.string(),
})

const HorizontalAlternateTimelineSchema = z.object({
  items: z.array(TimelineItemSchema).min(1),
  activeIndex: z.number().min(0).optional().default(0),
  height: z.number().min(180).max(800).optional().default(260),
})

export const HorizontalAlternateTimeline = defineComponent({
  name: 'HorizontalAlternateTimeline',
  props: HorizontalAlternateTimelineSchema,
  description: 'Responsive horizontal alternate timeline. items item: { id, dateTime, date, title, description }. Optional height supports 180-800px.',
  component: ({ props }) => <TargetHorizontalAlternateTimeline {...props} />,
})

export default HorizontalAlternateTimeline
