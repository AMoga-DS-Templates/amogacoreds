import { FileText, MoreHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import type { OrderRecord } from './types'

export function OrderTableRowMenu({ record }: { record: OrderRecord }) {
  return <DropdownMenu>
    <DropdownMenuTrigger asChild><Button type='button' variant='ghost' size='icon' className='size-8' aria-label={`Actions for ${record.voucherNumber}`}><MoreHorizontal className='size-4' /></Button></DropdownMenuTrigger>
    <DropdownMenuContent align='end' className='w-44'><DropdownMenuItem><FileText className='size-4' />Open order</DropdownMenuItem><DropdownMenuItem>Duplicate order</DropdownMenuItem><DropdownMenuSeparator /><DropdownMenuItem>Archive order</DropdownMenuItem></DropdownMenuContent>
  </DropdownMenu>
}
