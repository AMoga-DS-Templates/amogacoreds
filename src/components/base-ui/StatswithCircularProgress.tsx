import { ExternalLink } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { ChartContainer, type ChartConfig } from '@/components/ui/chart'
import { PolarAngleAxis, RadialBar, RadialBarChart } from 'recharts'

type Item = { name?: string; label?: string; capacity?: number; current?: string | number; allowed?: string | number; value?: string | number; percentage?: number }

const chartConfig = {
  capacity: {
    label: 'Capacity',
    color: 'var(--primary)',
  },
} satisfies ChartConfig

export function StatswithCircularProgress({ title = 'Plan overview', description = 'You are currently on the starter plan.', linkLabel, linkUrl, data, summary = [] }: { title?: string; description?: string; linkLabel?: string; linkUrl?: string; data?: Item[]; summary?: Item[] }) {
  const items = data ?? summary

  return <div className='w-full'>
    <h2 className='text-xl font-medium'>{title}</h2>
    <p className='mt-1 text-sm leading-6 text-muted-foreground'>
      {description} {linkLabel && linkUrl ? <a href={linkUrl} className='inline-flex items-center gap-1 text-primary hover:underline'>{linkLabel}<ExternalLink className='size-4' /></a> : null}
    </p>
    <dl className='mt-6 grid grid-cols-[repeat(auto-fit,minmax(min(100%,14rem),1fr))] gap-4'>
      {items.map((item, index) => {
        const capacity = Math.max(0, Math.min(100, Number(item.capacity ?? item.percentage ?? 0)))
        const name = item.name ?? item.label ?? `Metric ${index + 1}`

        return <Card key={index} className='min-w-0 gap-0 px-0 py-0 shadow-2xs'>
          <CardContent className='flex items-center space-x-4 px-4 py-3 sm:px-5 sm:py-4'>
            <div className='relative flex items-center justify-center'>
              <ChartContainer config={chartConfig} className='h-[80px] w-[80px]'>
                <RadialBarChart data={[{ capacity }]} innerRadius={30} outerRadius={36} barSize={6} startAngle={90} endAngle={-270}>
                  <PolarAngleAxis type='number' domain={[0, 100]} angleAxisId={0} tick={false} axisLine={false} />
                  <RadialBar dataKey='capacity' background cornerRadius={10} fill='var(--primary)' angleAxisId={0} />
                </RadialBarChart>
              </ChartContainer>
              <div className='absolute inset-0 flex items-center justify-center'>
                <span className='text-base font-medium text-foreground'>{capacity}%</span>
              </div>
            </div>
            <div className='min-w-0'>
              <dt className='break-words bg-gradient-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-sm font-extrabold tracking-tight text-transparent'>{name}</dt>
              <dd className='text-sm text-muted-foreground'>{String(item.current ?? item.value ?? 0)} of {String(item.allowed ?? 100)} used</dd>
            </div>
          </CardContent>
        </Card>
      })}
    </dl>
  </div>
}

export default StatswithCircularProgress
