'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Pencil } from 'lucide-react'
import type { OrderTemplateItem, OrderTemplateParty } from './order-types'

export interface OrderViewProps {
  orderNumber: string
  documentDate: string
  supplierDetails: OrderTemplateParty
  buyer: OrderTemplateParty
  items: OrderTemplateItem[]
  total: number
  supplyTerms: string
  deliveryTerms: string
  paymentTerms: string
  preparedBy: string
  approvalUser: string
  onOrderNumberChange: (value: string) => void
  onDocumentDateChange: (value: string) => void
  onSupplierChange: (value: string) => void
  onBuyerChange: (value: OrderTemplateParty) => void
  onSupplierDetailsChange: (value: OrderTemplateParty) => void
  onItemsChange: (value: OrderTemplateItem[]) => void
  onSupplyTermsChange: (value: string) => void
  onDeliveryTermsChange: (value: string) => void
  onPaymentTermsChange: (value: string) => void
  onPreparedByChange: (value: string) => void
  onApprovalUserChange: (value: string) => void
  onEdit: () => void
  onNext: () => void
}

function EditableInfo({ label, value, onChange, type = 'text' }: { label: string; value: string; onChange: (value: string) => void; type?: string }) {
  return <div className='grid gap-2'><Label className='text-[11px] font-medium text-muted-foreground'>{label}</Label><Input type={type} value={value} onChange={(event) => onChange(event.target.value)} className='h-9 border-input bg-background text-sm' /></div>
}

function Party({ title, details, onChange }: { title: string; details: OrderTemplateParty; onChange: (key: keyof OrderTemplateParty, value: string) => void }) {
  return <div><h2 className='mb-4 text-sm font-bold text-primary'>{title}</h2><div className='grid gap-3'><EditableInfo label='Name' value={details.name} onChange={(value) => onChange('name', value)} /><EditableInfo label='Company name' value={details.company} onChange={(value) => onChange('company', value)} /><EditableInfo label='Address' value={details.address} onChange={(value) => onChange('address', value)} /><EditableInfo label='Contact name / phone' value={details.phone} onChange={(value) => onChange('phone', value)} /><EditableInfo label='Email' value={details.email} onChange={(value) => onChange('email', value)} /><EditableInfo label='Tax / registration ID' value={details.taxId} onChange={(value) => onChange('taxId', value)} /></div></div>
}

export function OrderView({
  orderNumber,
  documentDate,
  supplierDetails,
  buyer,
  items,
  total,
  supplyTerms,
  deliveryTerms,
  paymentTerms,
  preparedBy,
  approvalUser,
  onOrderNumberChange,
  onDocumentDateChange,
  onSupplierChange,
  onBuyerChange,
  onSupplierDetailsChange,
  onItemsChange,
  onSupplyTermsChange,
  onDeliveryTermsChange,
  onPaymentTermsChange,
  onPreparedByChange,
  onApprovalUserChange,
  onEdit,
  onNext,
}: OrderViewProps) {
  const updateItem = (id: number, key: keyof OrderTemplateItem, value: string) => onItemsChange(items.map((item) => item.id === id ? { ...item, [key]: value } : item))

  return <section className='bg-muted/40 p-4 sm:p-8'><Card className='mx-auto max-w-5xl gap-0 rounded-none bg-background p-5 text-foreground shadow-xl sm:p-12'>
    <div className='border-b-2 border-border pb-4'><h1 className='text-2xl font-extrabold'>Order</h1></div>
    <div className='grid gap-8 pt-7 sm:grid-cols-2'><EditableInfo label='ORDER NUMBER' value={orderNumber} onChange={onOrderNumberChange} /><EditableInfo label='ORDER DATE' value={documentDate} onChange={onDocumentDateChange} type='date' /></div>
    <div className='grid gap-8 pt-8 sm:grid-cols-2'><Party title='BUYER / BILL TO' details={buyer} onChange={(key, value) => onBuyerChange({ ...buyer, [key]: value })} /><Party title='SUPPLIER' details={supplierDetails} onChange={(key, value) => { const next = { ...supplierDetails, [key]: value }; onSupplierDetailsChange(next); if (key === 'name') onSupplierChange(value) }} /></div>
    <div className='mt-8 overflow-x-auto border'><Table className='w-full min-w-[1120px] text-left text-xs'><TableHeader className='bg-primary text-primary-foreground'><TableRow><TableHead className='px-2 py-3'>No.</TableHead><TableHead className='px-2 py-3'>Description / item code</TableHead><TableHead className='px-2 py-3'>Delivery date</TableHead><TableHead className='px-2 py-3'>Qty</TableHead><TableHead className='px-2 py-3'>Unit</TableHead><TableHead className='px-2 py-3'>Unit price</TableHead><TableHead className='px-2 py-3'>Discount</TableHead><TableHead className='px-2 py-3 text-right'>Amount</TableHead><TableHead className='px-2 py-3 text-center'>Edit</TableHead></TableRow></TableHeader><TableBody>{items.map((item, index) => <TableRow key={item.id}><TableCell className='px-2 py-3 text-center'>{index + 1}</TableCell><TableCell className='p-1'><Input value={item.description || item.product} onChange={(event) => updateItem(item.id, 'description', event.target.value)} className='h-9 min-w-48 border-input bg-background text-xs' /></TableCell><TableCell className='p-1'><Input type='date' value={item.deliveryDate || ''} onChange={(event) => updateItem(item.id, 'deliveryDate', event.target.value)} className='h-9 border-input bg-background text-xs' /></TableCell><TableCell className='p-1'><Input type='number' value={item.quantity} onChange={(event) => updateItem(item.id, 'quantity', event.target.value)} className='h-9 w-20 border-input bg-background text-xs' /></TableCell><TableCell className='p-1'><Input value={item.unit || ''} onChange={(event) => updateItem(item.id, 'unit', event.target.value)} className='h-9 w-24 border-input bg-background text-xs' /></TableCell><TableCell className='p-1'><Input type='number' value={item.price} onChange={(event) => updateItem(item.id, 'price', event.target.value)} className='h-9 w-24 border-input bg-background text-xs' /></TableCell><TableCell className='p-1'><Input value={item.discount || ''} onChange={(event) => updateItem(item.id, 'discount', event.target.value)} className='h-9 w-24 border-input bg-background text-xs' /></TableCell><TableCell className='bg-muted/40 px-2 py-3 text-right'>{((Number(item.quantity) || 0) * (Number(item.price) || 0)).toFixed(2)}</TableCell><TableCell className='px-2 py-3 text-center'><Pencil className='mx-auto size-3.5 text-muted-foreground' /></TableCell></TableRow>)}</TableBody></Table></div>
    <div className='grid gap-8 pt-8 sm:grid-cols-[1.3fr_.7fr]'><div><h2 className='font-bold text-primary'>SUPPLY TERMS</h2><Textarea value={supplyTerms} onChange={(event) => onSupplyTermsChange(event.target.value)} className='mt-2 min-h-32 border-input bg-background text-sm' rows={3} /><div className='mb-1 mt-3 grid gap-1'><Label className='text-[11px] text-muted-foreground'>Delivery terms / ship-to address</Label><Input value={deliveryTerms} onChange={(event) => onDeliveryTermsChange(event.target.value)} className='h-9 border-input bg-background text-sm' /></div><div className='mb-1 mt-3 grid gap-1'><Label className='text-[11px] text-muted-foreground'>Payment terms / method</Label><Input value={paymentTerms} onChange={(event) => onPaymentTermsChange(event.target.value)} className='h-9 border-input bg-background text-sm' /></div></div><div className='text-sm'><div className='flex justify-between border-b py-2'><span>Subtotal</span><span>{total.toFixed(2)}</span></div><div className='flex justify-between border-b py-2'><span>Tax</span><span>-</span></div><div className='flex justify-between border-b py-2'><span>Freight / other</span><span>-</span></div><div className='mt-2 flex justify-between bg-muted/40 px-3 py-4 font-bold'><span>TOTAL</span><span>{total.toFixed(2)}</span></div></div></div>
    <div className='grid gap-8 pt-8 text-xs'><div><h2 className='mb-4 text-sm font-bold text-primary'>PREPARED BY</h2><EditableInfo label='Name' value={preparedBy} onChange={onPreparedByChange} /><div className='mt-4 grid grid-cols-[1fr_.3fr] gap-5'><div><p className='text-muted-foreground'>Signature</p><div className='h-7 border-b bg-muted/40' /></div><div><p className='text-muted-foreground'>Date</p><div className='h-7 border-b bg-muted/40' /></div></div></div><div><h2 className='mb-4 text-sm font-bold text-primary'>SELECT APPROVER</h2><Input value={approvalUser} onChange={(event) => onApprovalUserChange(event.target.value)} className='h-9 max-w-xl border-input bg-background text-sm' /></div></div>
    <div className='mt-8 flex justify-end gap-2'><Button type='button' variant='outline' onClick={onEdit}>Edit Items</Button><Button type='button' onClick={onNext}>Continue to PDF</Button></div>
  </Card></section>
}


