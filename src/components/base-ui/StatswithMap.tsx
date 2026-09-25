'use client'

import dynamic from 'next/dynamic'
import { Card, CardContent } from '@/components/ui/card'

const DynamicMap = dynamic(() => import('@/components/ui/leaflet-map'), {
  ssr: false,
  loading: () => <div className='flex h-full items-center justify-center rounded-md border border-dashed text-xs text-muted-foreground'>Loading map...</div>,
})

type Item = { name?: string; tickerSymbol?: string; value?: string | number; change?: string | number; percentageChange?: string | number; latitude?: number; longitude?: number; description?: string; label?: string }

export function StatswithMap({ title = 'Map', markers = [], summary }: { title?: string; markers?: Array<{ label?: string; value?: string | number }>; summary?: Item[] }) {
  if (!summary) return <Card><CardContent className='space-y-3 p-4'><p className='font-semibold'>{title}</p><div className='rounded-lg border border-dashed p-6 text-center text-sm text-muted-foreground'>{markers.length ? `${markers.length} mapped locations` : 'No mapped locations'}</div></CardContent></Card>

  return <div className='w-full max-w-[800px]'><dl className='grid w-full grid-cols-[repeat(auto-fit,minmax(min(100%,14rem),1fr))] gap-4 sm:gap-6'>{summary.map((item, index) => { const name = item.name ?? item.label ?? `Location ${index + 1}`; const latitude = Number(item.latitude); const longitude = Number(item.longitude); const validCoordinates = Number.isFinite(latitude) && Number.isFinite(longitude); return <Card key={`${name}-${index}`} className='min-w-0 p-0 shadow-sm'><CardContent className='p-4'><dt className='bg-gradient-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-sm font-extrabold text-transparent'>{name}{item.tickerSymbol ? <span className='font-semibold text-muted-foreground/80'> ({item.tickerSymbol})</span> : null}</dt><div className='flex min-w-0 flex-wrap items-baseline justify-between gap-x-3 gap-y-1'><dd className='text-lg font-semibold'>{item.value ?? 0}</dd><dd className='text-sm text-muted-foreground'>{item.change ?? 0} ({item.percentageChange ?? '0%'})</dd></div><div className='mt-3 h-36 overflow-hidden rounded-md'>{validCoordinates ? <DynamicMap latitude={latitude} longitude={longitude} address={item.description ?? String(item.value ?? '')} /> : <div className='flex h-full items-center justify-center rounded-md border border-dashed text-xs text-muted-foreground'>Invalid map coordinates</div>}</div></CardContent></Card> })}</dl></div>
}

export default StatswithMap
