'use client'

import { OrderCard } from './card'
import type { OrderRecord } from './types'

export function OrderTableCards({ records }: { records: OrderRecord[] }) {
  if (!records.length) return <div className='rounded-lg border border-dashed p-10 text-center text-sm text-muted-foreground'>No purchase orders match the selected filters.</div>
  return <div className='grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3 xl:gap-4'>{records.map((record) => <OrderCard key={record.id} record={record} />)}</div>
}


