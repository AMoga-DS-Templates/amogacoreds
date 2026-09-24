'use client'

import { ArrowLeft, ArrowRight, Plus, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import type { OrderTemplateItem } from './order-types'

export interface AddItemsProps {
  supplier: string
  documentDate: string
  status: string
  orderNumber: string
  items: OrderTemplateItem[]
  products: string[]
  total: number
  onUpdateItem: (id: number, key: keyof OrderTemplateItem, value: string) => void
  onRemoveItem: (id: number) => void
  onAddItem: () => void
  onBack: () => void
  onSaveAndNext: () => void
}

export function AddItems({
  supplier,
  documentDate,
  status,
  orderNumber,
  items,
  products,
  total,
  onUpdateItem,
  onRemoveItem,
  onAddItem,
  onBack,
  onSaveAndNext,
}: AddItemsProps) {
  return (
    <section className='space-y-5 p-4 sm:p-7'>
      <Card className='rounded-2xl p-5 shadow-sm sm:p-7'><div className='grid gap-4 sm:grid-cols-4'><Summary label='Supplier' value={supplier || '-'} /><Summary label='Document Date' value={documentDate || '-'} /><Summary label='Status' value={status} /><Summary label='Order No.' value={orderNumber || '-'} /></div></Card>
      <Card className='rounded-2xl p-5 shadow-sm sm:p-7'>
        <h2 className='mb-5 font-semibold'>Add Items</h2>
        <div className='overflow-x-auto'>
          <Table className='min-w-[650px] text-left text-sm'><TableHeader><TableRow className='text-xs text-muted-foreground'><TableHead className='pb-3 pr-3'>Product</TableHead><TableHead className='pb-3 pr-3'>Qty</TableHead><TableHead className='pb-3 pr-3'>Price</TableHead><TableHead className='pb-3 pr-3'>Amount</TableHead><TableHead className='pb-3 text-right'>Action</TableHead></TableRow></TableHeader>
            <TableBody>{items.map((item) => <TableRow key={item.id}>
              <TableCell className='py-3 pr-3'><Select value={item.product || 'none'} onValueChange={(value) => onUpdateItem(item.id, 'product', value === 'none' ? '' : value)}><SelectTrigger aria-label='Select product' className='h-9 w-full text-xs'><SelectValue placeholder='Select product' /></SelectTrigger><SelectContent position='popper' className='w-[var(--radix-select-trigger-width)]'><SelectItem value='none'>Select product</SelectItem>{products.map((product) => <SelectItem key={product} value={product}>{product}</SelectItem>)}</SelectContent></Select></TableCell>
              <TableCell className='py-3 pr-3'><Input type='number' value={item.quantity} onChange={(event) => onUpdateItem(item.id, 'quantity', event.target.value)} placeholder='Enter qty' /></TableCell>
              <TableCell className='py-3 pr-3'><Input type='number' value={item.price} onChange={(event) => onUpdateItem(item.id, 'price', event.target.value)} placeholder='Enter price' /></TableCell>
              <TableCell className='py-3 pr-3'><Input value={((Number(item.quantity) || 0) * (Number(item.price) || 0)).toFixed(2)} readOnly /></TableCell>
              <TableCell className='py-3 text-right'><Button type='button' variant='ghost' size='icon' onClick={() => onRemoveItem(item.id)}><Trash2 className='size-4' /></Button></TableCell>
            </TableRow>)}</TableBody>
          </Table>
        </div>
        <Button type='button' variant='outline' className='mt-5 gap-2' onClick={onAddItem}><Plus className='size-4' />Add New</Button>
        <div className='mt-6 flex justify-end border-t pt-5 text-sm'><div className='flex w-[300px] max-w-full justify-between rounded-lg bg-muted/40 p-3'><span className='text-muted-foreground'>Total Amount</span><strong>{total.toFixed(2)}</strong></div></div>
        <div className='mt-5 flex items-center justify-between gap-3'><Button type='button' variant='ghost' className='gap-2 text-sm text-muted-foreground' onClick={onBack}><ArrowLeft className='size-4' />Back to New</Button><Button type='button' className='gap-2' onClick={onSaveAndNext}>Save and Next<ArrowRight className='size-4' /></Button></div>
      </Card>
    </section>
  )
}

function Summary({ label, value }: { label: string; value: string }) {
  return <div><p className='text-xs text-muted-foreground'>{label}</p><p className='mt-1 font-semibold capitalize'>{value}</p></div>
}
