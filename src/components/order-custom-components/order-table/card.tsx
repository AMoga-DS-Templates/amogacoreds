'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { OrderStatusBadge } from './status-badge'
import { OrderTableRowMenu } from './row-menu'
import { OrderCardActions } from './card-actions'
import { displayValue, formatAmount, formatDate, type OrderRecord } from './types'

export function OrderCard({ record }: { record: OrderRecord }) {
  return <Card className='min-w-0 rounded-xl'>
    <CardHeader className='flex-row items-start justify-between gap-3 space-y-0 pb-3'><div className='min-w-0'><CardTitle className='break-words text-base'>{record.voucherNumber}</CardTitle><p className='mt-1 text-xs text-muted-foreground'>Order Ã‚Â· FY {record.financialYear}</p></div><OrderTableRowMenu record={record} /></CardHeader>
    <CardContent className='grid grid-cols-1 gap-x-4 gap-y-3 text-xs sm:grid-cols-2'><span><span className='text-muted-foreground'>Document Date</span><br />{formatDate(record.documentDate)}</span><span><span className='text-muted-foreground'>Due Date</span><br />{formatDate(record.dueDate)}</span><span><span className='text-muted-foreground'>Total Amount</span><br />{formatAmount(record.totalAmount)}</span><span><span className='text-muted-foreground'>Status</span><br /><OrderStatusBadge status={record.status} /></span><span className='col-span-1 break-words sm:col-span-2'><span className='text-muted-foreground'>Narration</span><br />{displayValue(record.narration)}</span><span className='col-span-1 sm:col-span-2'><OrderCardActions /></span></CardContent>
  </Card>
}


