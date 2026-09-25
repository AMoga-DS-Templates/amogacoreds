'use client'

import { z } from 'zod'
import { defineComponent } from '../json-component'
import { VerticalTimeline as TargetVerticalTimeline } from '@/components/base-ui/verticleTimeline'

const TimelineItemSchema = z.object({
  id: z.string(),
  dateTime: z.string(),
  date: z.string(),
  title: z.string(),
  description: z.string(),
})

const VerticalTimelineSchema = z.object({
  items: z.array(TimelineItemSchema).min(1),
  activeIndex: z.number().min(0).optional().default(0),
  height: z.number().min(220).max(800).optional().default(800),
})

export const VerticalTimeline = defineComponent({
  name: 'VerticalTimeline',
  props: VerticalTimelineSchema,
  description: 'Responsive vertical timeline. items item: { id, dateTime, date, title, description }. Optional height supports 220-800px.',
  component: ({ props }) => <TargetVerticalTimeline {...props} />,
})

export default VerticalTimeline
