'use client'

import type { ChangeEvent, ReactNode } from 'react'
import { CalendarDays } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { mockPurchaseOrderSuppliers } from './order-mock'
import { OrderFileUpload } from './order-file-upload'
import type { OrderTemplateAttachment, OrderTemplateParty } from './order-types'

function Field({ label, children }: { label: ReactNode; children: ReactNode }) {
  return <div className='grid gap-2'><Label>{label}</Label>{children}</div>
}

export interface OrderFormProps {
  supplier: string
  onSupplierChange: (value: string) => void
  onSupplierDetailsChange: (value: OrderTemplateParty) => void
  supplierDetails: OrderTemplateParty
  orderNumber: string
  onOrderNumberChange: (value: string) => void
  documentDate: string
  onDocumentDateChange: (value: string) => void
  supplyTerms: string
  onSupplyTermsChange: (value: string) => void
  description: string
  onDescriptionChange: (value: string) => void
  status: string
  onStatusChange: (value: string) => void
  attachments: OrderTemplateAttachment[]
  onAddAttachments: (event: ChangeEvent<HTMLInputElement>) => void
  onRemoveAttachment: (attachment: OrderTemplateAttachment) => void
  onSaveAndReview: () => void
}

export function OrderForm({
  supplier,
  onSupplierChange,
  onSupplierDetailsChange,
  supplierDetails,
  orderNumber,
  onOrderNumberChange,
  documentDate,
  onDocumentDateChange,
  supplyTerms,
  onSupplyTermsChange,
  description,
  onDescriptionChange,
  status,
  onStatusChange,
  attachments,
  onAddAttachments,
  onRemoveAttachment,
  onSaveAndReview,
}: OrderFormProps) {
  return (
    <section className='space-y-5 p-4 sm:p-7'>
      <Card className='rounded-2xl p-5 shadow-sm sm:p-7'>
        <h2 className='mb-6 font-semibold'>Order information</h2>
        <div className='grid gap-5'>
          <Field label='Select'>
            <Select value={supplier} onValueChange={(value) => { onSupplierChange(value); onSupplierDetailsChange({ ...supplierDetails, name: value }) }}>
              <SelectTrigger aria-label='Select supplier' className='h-12 w-full'><SelectValue placeholder='Select supplier' /></SelectTrigger>
              <SelectContent>{mockPurchaseOrderSuppliers.map((supplierOption) => <SelectItem key={supplierOption} value={supplierOption}>{supplierOption}</SelectItem>)}</SelectContent>
            </Select>
          </Field>
          <Field label={<>Order No. <span className='text-destructive'>*</span></>}><Input value={orderNumber} onChange={(event) => onOrderNumberChange(event.target.value)} className='h-12' /></Field>
          <Field label={<>Document Date <span className='text-destructive'>*</span></>}>
            <div className='relative'><Input type='date' value={documentDate} onChange={(event) => onDocumentDateChange(event.target.value)} className='h-12 pr-10' /><CalendarDays className='pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2' /></div>
          </Field>
          <Field label='Supply Terms'><Textarea value={supplyTerms} onChange={(event) => onSupplyTermsChange(event.target.value)} rows={3} className='min-h-32' /></Field>
          <Field label='Description'><Textarea value={description} onChange={(event) => onDescriptionChange(event.target.value)} rows={4} className='min-h-32' /></Field>
          <Field label={<>Status <span className='text-destructive'>*</span></>}>
            <Select value={status} onValueChange={onStatusChange}><SelectTrigger className='h-10 w-full'><SelectValue placeholder='Select status' /></SelectTrigger><SelectContent><SelectItem value='active'>Active</SelectItem><SelectItem value='inactive'>Inactive</SelectItem><SelectItem value='draft'>Draft</SelectItem></SelectContent></Select>
          </Field>
        </div>
      </Card>

      <Card className='rounded-2xl p-5 shadow-sm sm:p-7'>
        <h2 className='mb-5 font-semibold'>Attachments</h2>
        <OrderFileUpload attachments={attachments} onAddAttachments={onAddAttachments} onRemoveAttachment={onRemoveAttachment} />
        <div className='mt-6 flex justify-end'><Button type='button' onClick={onSaveAndReview}>Save and Review</Button></div>
      </Card>
    </section>
  )
}


