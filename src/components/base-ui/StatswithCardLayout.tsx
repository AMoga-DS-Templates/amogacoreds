import { Card, CardContent } from '@/components/ui/card'

type Item = { name?: string; label?: string; stat?: string; value?: string | number; change?: string; changeType?: 'positive' | 'negative' | 'neutral'; description?: string }
export function StatswithCardLayout({ data, summary = [] }: { data?: Item[]; summary?: Item[] }) {
  const items = data ?? summary

  return <dl className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4'>
    {items.map((item, index) => {
      const name = item.name ?? item.label ?? `Metric ${index + 1}`
      const stat = String(item.stat ?? item.value ?? 0)
      const change = String(item.change ?? item.description ?? '').trim()

      return <Card key={index} className='min-w-0 bg-card px-4 py-3 shadow-sm ring-1 ring-border/60 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg sm:px-5 sm:py-4'>
        <CardContent className='p-0'>
          <dt className='break-words bg-gradient-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-sm font-extrabold tracking-tight text-transparent'>{name}</dt>
          <dd className='mt-2 flex min-w-0 flex-col gap-y-2'>
            <span className='block min-w-0 max-w-full overflow-hidden text-ellipsis whitespace-nowrap tabular-nums text-lg font-semibold leading-tight text-foreground sm:text-xl'>{stat}</span>
            {change ? <span className={item.changeType === 'positive' ? 'block max-w-full break-words text-sm font-medium leading-snug text-green-800 dark:text-green-400' : item.changeType === 'negative' ? 'block max-w-full break-words text-sm font-medium leading-snug text-red-800 dark:text-red-400' : 'block max-w-full break-words text-sm font-medium leading-snug text-muted-foreground'}>{change}</span> : null}
          </dd>
        </CardContent>
      </Card>
    })}
  </dl>
}
export default StatswithCardLayout
