'use client'

import { OrderRecords } from './index'
import type { OrderRecord } from './types'

export function OrderApprovedRecords({ records = [] }: { records?: OrderRecord[] }) {
  return <OrderRecords records={records} title='Order Approved' description='View and filter approved order records.' />
}

