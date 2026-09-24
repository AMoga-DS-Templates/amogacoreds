'use client'

import { useState, type ChangeEvent } from 'react'
import { OrderCard } from './card'
import { OrderCardActions } from './card-actions'
import { OrderTableCards } from './cards'
import { OrderTableRowMenu } from './row-menu'
import { OrderTableSearch } from './search'
import { OrderStatusBadge } from './status-badge'
import { OrderTable } from './table'
import { OrderTableToolbar, type OrderTableView } from './toolbar'
import { OrderTableTopBar } from './top-bar'
import { columnLabels, type ColumnKey, type OrderRecordStatus } from './types'
import { mockOrderRecords } from './mock'
import { OrderFileUpload } from '../order-file-upload'
import type { OrderTemplateAttachment } from '../order-types'
import { OrderPdfView } from '../order-pdf-view'
import { OrderView } from '../order-view'
import { mockPurchaseOrder } from '../order-mock'

const previewRecords = mockOrderRecords.filter((record) => record.status !== 'approved')
const previewColumns: Record<ColumnKey, boolean> = {
  voucherNumber: true,
  documentDate: true,
  narration: true,
  totalAmount: true,
  dueDate: true,
  status: true,
}

export function OrderTableTopBarPreview() {
  return <div className='mx-auto w-full max-w-2xl'><OrderTableTopBar title='Order' description='View and filter order records.' /></div>
}

export function OrderFileUploadPreview() {
  const [attachments, setAttachments] = useState<OrderTemplateAttachment[]>([])
  const onAddAttachments = (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files ?? [])
    setAttachments((current) => [...current, ...files.map((file) => ({ id: `${file.name}-${file.lastModified}`, name: file.name, size: file.size, type: file.type || 'File', url: URL.createObjectURL(file) }))])
    event.target.value = ''
  }
  const onRemoveAttachment = (attachment: OrderTemplateAttachment) => {
    URL.revokeObjectURL(attachment.url)
    setAttachments((current) => current.filter((item) => item.id !== attachment.id))
  }
  return <div className='mx-auto w-full max-w-xl rounded-2xl border p-5 shadow-sm'><h2 className='mb-5 font-semibold'>Attachments</h2><OrderFileUpload attachments={attachments} onAddAttachments={onAddAttachments} onRemoveAttachment={onRemoveAttachment} /></div>
}

export function OrderViewPreview() {
  const [items, setItems] = useState(mockPurchaseOrder.items)
  const total = items.reduce((sum, item) => sum + (Number(item.quantity) || 0) * (Number(item.price) || 0), 0)
  return <div className='mx-auto w-full max-w-6xl'><OrderView
    orderNumber={mockPurchaseOrder.orderNumber}
    documentDate={mockPurchaseOrder.documentDate}
    supplierDetails={mockPurchaseOrder.supplierDetails}
    buyer={mockPurchaseOrder.buyer}
    items={items}
    total={total}
    supplyTerms={mockPurchaseOrder.supplyTerms}
    deliveryTerms={mockPurchaseOrder.deliveryTerms}
    paymentTerms={mockPurchaseOrder.paymentTerms}
    preparedBy={mockPurchaseOrder.preparedBy}
    approvalUser={mockPurchaseOrder.approvalUser}
    onOrderNumberChange={() => {}}
    onDocumentDateChange={() => {}}
    onSupplierChange={() => {}}
    onBuyerChange={() => {}}
    onSupplierDetailsChange={() => {}}
    onItemsChange={setItems}
    onSupplyTermsChange={() => {}}
    onDeliveryTermsChange={() => {}}
    onPaymentTermsChange={() => {}}
    onPreparedByChange={() => {}}
    onApprovalUserChange={() => {}}
    onEdit={() => {}}
    onNext={() => {}}
  /></div>
}

export function OrderPdfViewPreview() {
  const total = mockPurchaseOrder.items.reduce((sum, item) => sum + (Number(item.quantity) || 0) * (Number(item.price) || 0), 0)
  return <div className='mx-auto w-full max-w-6xl'><OrderPdfView
    orderNumber={mockPurchaseOrder.orderNumber}
    documentDate={mockPurchaseOrder.documentDate}
    supplierDetails={mockPurchaseOrder.supplierDetails}
    buyer={mockPurchaseOrder.buyer}
    items={mockPurchaseOrder.items}
    total={total}
    supplyTerms={mockPurchaseOrder.supplyTerms}
    deliveryTerms={mockPurchaseOrder.deliveryTerms}
    paymentTerms={mockPurchaseOrder.paymentTerms}
    preparedBy={mockPurchaseOrder.preparedBy}
    approvalUser={mockPurchaseOrder.approvalUser}
  /></div>
}

export function OrderTableSearchPreview() {
  const [query, setQuery] = useState('')
  return <div className='mx-auto w-full max-w-md'><OrderTableSearch value={query} onChange={setQuery} /></div>
}

export function OrderTableToolbarPreview() {
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState<'all' | OrderRecordStatus>('all')
  const [financialYear, setFinancialYear] = useState('all')
  const [period, setPeriod] = useState('all')
  const [month, setMonth] = useState('all')
  const [view, setView] = useState<OrderTableView>('table')
  const [visibleColumns, setVisibleColumns] = useState(previewColumns)

  return <div className='mx-auto w-full max-w-6xl'><OrderTableToolbar
    query={query}
    onQueryChange={setQuery}
    status={status}
    onStatusChange={setStatus}
    financialYear={financialYear}
    onFinancialYearChange={setFinancialYear}
    period={period}
    onPeriodChange={setPeriod}
    month={month}
    onMonthChange={setMonth}
    years={['2026']}
    periods={['June', 'July', 'September']}
    months={['June', 'July', 'September']}
    view={view}
    onViewChange={setView}
    visibleColumns={visibleColumns}
    onColumnVisibilityChange={(key, visible) => setVisibleColumns((current) => ({ ...current, [key]: visible }))}
  /></div>
}

export function OrderTablePreview() {
  return <div className='mx-auto w-full max-w-6xl'><OrderTable records={previewRecords} visibleColumns={previewColumns} /></div>
}

export function OrderTableCardsPreview() {
  return <div className='mx-auto w-full max-w-5xl'><OrderTableCards records={previewRecords} /></div>
}

export function OrderCardPreview() {
  return <div className='mx-auto w-full max-w-md'><OrderCard record={previewRecords[0]} /></div>
}

export function OrderCardActionsPreview() {
  return <div className='mx-auto w-full max-w-md rounded-lg border p-4'><OrderCardActions /></div>
}

export function OrderTableRowMenuPreview() {
  return <div className='flex justify-center'><OrderTableRowMenu record={previewRecords[0]} /></div>
}

export function OrderStatusBadgePreview() {
  return <div className='flex flex-wrap justify-center gap-2'>{(['draft', 'active', 'posted', 'approved'] as OrderRecordStatus[]).map((status) => <OrderStatusBadge key={status} status={status} />)}</div>
}

export { columnLabels }


