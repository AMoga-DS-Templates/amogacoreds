'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export type GanttTask = {
  id: string
  name: string
  start: number | string | Date
  end: number | string | Date
  color?: string
  group?: string
}

export type GanttTaskChartProps = {
  tasks?: GanttTask[]
  title?: string
  className?: string
}

function toTime(value: number | string | Date) {
  const time = value instanceof Date ? value.getTime() : typeof value === 'number' ? value : Date.parse(value)
  return Number.isFinite(time) ? time : 0
}

export function GanttTaskChart({ tasks = [], title = 'Task timeline', className }: GanttTaskChartProps) {
  const start = Math.min(...tasks.map((task) => toTime(task.start)), Date.now())
  const end = Math.max(...tasks.map((task) => toTime(task.end)), start + 1)
  const span = Math.max(end - start, 1)

  return (
    <Card className={className}>
      <CardHeader className="pb-3">
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 overflow-x-auto">
        {tasks.map((task, index) => {
          const left = Math.max(0, ((toTime(task.start) - start) / span) * 100)
          const width = Math.max(2, ((toTime(task.end) - toTime(task.start)) / span) * 100)
          return (
            <div key={task.id} className="grid min-w-[520px] grid-cols-[10rem_1fr] items-center gap-3">
              <span className="truncate text-sm text-muted-foreground">{task.name}</span>
              <div className="relative h-7 rounded-md bg-muted/60">
                <div
                  className="absolute inset-y-1 rounded bg-[var(--chart-1)] px-2 text-xs leading-5 text-primary-foreground"
                  style={{ left: `${left}%`, width: `${width}%`, backgroundColor: task.color ?? `var(--chart-${(index % 5) + 1})` }}
                  title={`${task.name}: ${String(task.start)} - ${String(task.end)}`}
                />
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}

export const GanttTaskChartComponent = GanttTaskChart
