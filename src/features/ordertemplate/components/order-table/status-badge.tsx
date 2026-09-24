import { Badge } from '@/components/ui/badge'
import type { OrderRecordStatus } from './types'

export function OrderStatusBadge({ status }: { status: OrderRecordStatus }) {
  return <Badge variant={status === 'approved' || status === 'active' ? 'default' : 'secondary'} className='capitalize'>{status}</Badge>
}
