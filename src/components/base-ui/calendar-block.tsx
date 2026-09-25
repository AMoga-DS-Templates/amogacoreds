import type { ComponentProps } from 'react'
import { Calendar } from '@/components/ui/calendar'

export function CalendarBlock(props: ComponentProps<typeof Calendar>) {
  return <div className="rounded-lg border bg-card p-3"><Calendar {...props} /></div>
}
