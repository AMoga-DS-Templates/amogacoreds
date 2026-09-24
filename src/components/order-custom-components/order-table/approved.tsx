'use client'

import { OrderRecords } from './index'
import { mockOrderRecords } from './mock'

const approvedOrderRecords = mockOrderRecords.filter((record) => record.status === 'approved')

export function OrderApprovedRecords() {
  return <OrderRecords records={approvedOrderRecords} title='Order Approved' description='View and filter approved order records.' />
}


