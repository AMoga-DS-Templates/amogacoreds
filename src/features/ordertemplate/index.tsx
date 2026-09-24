'use client'

import { useMemo, useState, type ChangeEvent } from 'react'
import { toast } from 'sonner'
import { mockPurchaseOrder, type PurchaseOrderMockItem } from '@/components/order-custom-components/order-mock'
import { AddItems } from '@/components/order-custom-components/add-items'
import { OrderForm } from '@/components/order-custom-components/order-form'
import { OrderTabs, type OrderTemplateStep } from '@/components/order-custom-components/order-tabs'
import { OrderPdfView } from '@/components/order-custom-components/order-pdf-view'
import { OrderView } from '@/components/order-custom-components/order-view'
import type { OrderTemplateAttachment, OrderTemplateParty } from '@/components/order-custom-components/order-types'

type Step = OrderTemplateStep
type Item = PurchaseOrderMockItem

export default function PurchaseOrderTemplate() {
  const [step, setStep] = useState<Step>('order')
  const [savedStepOne, setSavedStepOne] = useState(false)
  const [savedStepTwo, setSavedStepTwo] = useState(false)
  const [orderNumber, setOrderNumber] = useState(mockPurchaseOrder.orderNumber)
  const [documentDate, setDocumentDate] = useState(mockPurchaseOrder.documentDate)
  const [supplier, setSupplier] = useState(mockPurchaseOrder.supplier)
  const [supplyTerms, setSupplyTerms] = useState(mockPurchaseOrder.supplyTerms)
  const [deliveryTerms, setDeliveryTerms] = useState(mockPurchaseOrder.deliveryTerms)
  const [paymentTerms, setPaymentTerms] = useState(mockPurchaseOrder.paymentTerms)
  const [preparedBy, setPreparedBy] = useState(mockPurchaseOrder.preparedBy)
  const [approvalUser, setApprovalUser] = useState(mockPurchaseOrder.approvalUser)
  const [buyer, setBuyer] = useState<OrderTemplateParty>(mockPurchaseOrder.buyer)
  const [supplierDetails, setSupplierDetails] = useState<OrderTemplateParty>({ ...mockPurchaseOrder.supplierDetails, name: mockPurchaseOrder.supplier })
  const [description, setDescription] = useState(mockPurchaseOrder.description)
  const [status, setStatus] = useState(mockPurchaseOrder.status)
  const [items, setItems] = useState<Item[]>(mockPurchaseOrder.items)
  const [attachments, setAttachments] = useState<OrderTemplateAttachment[]>([])

  const total = useMemo(() => items.reduce((sum, item) => sum + (Number(item.quantity) || 0) * (Number(item.price) || 0), 0), [items])

  const goTo = (next: Step) => {
    if (next === 'items' && !savedStepOne) return void toast.error('Please save Step 1 before going to Step 2.')
    if ((next === 'view' || next === 'pdf') && !savedStepTwo) return void toast.error('Please save Step 2 before continuing.')
    setStep(next)
  }

  const updateItem = (id: number, key: keyof Item, value: string) => {
    setItems((current) => current.map((item) => (item.id === id ? { ...item, [key]: value } : item)))
    setSavedStepTwo(false)
  }

  const addAttachments = (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files ?? [])
    if (!files.length) return
    setAttachments((current) => [...current, ...files.map((file) => ({
      id: `${file.name}-${file.lastModified}-${Math.random()}`,
      name: file.name,
      size: file.size,
      type: file.type || 'File',
      url: URL.createObjectURL(file),
    }))])
    event.target.value = ''
  }

  const removeAttachment = (attachment: OrderTemplateAttachment) => {
    URL.revokeObjectURL(attachment.url)
    setAttachments((current) => current.filter((item) => item.id !== attachment.id))
  }

  return (
    <div className='flex min-h-[720px] w-full flex-col overflow-visible bg-background'>
      <OrderTabs step={step} onStepChange={goTo} />
      <main className='min-h-0 flex-1 overflow-visible'>
        {step === 'order' && <OrderForm
          supplier={supplier}
          onSupplierChange={(value) => { setSupplier(value); setSupplierDetails((current) => ({ ...current, name: value })) }}
          onSupplierDetailsChange={setSupplierDetails}
          supplierDetails={supplierDetails}
          orderNumber={orderNumber}
          onOrderNumberChange={setOrderNumber}
          documentDate={documentDate}
          onDocumentDateChange={setDocumentDate}
          supplyTerms={supplyTerms}
          onSupplyTermsChange={setSupplyTerms}
          description={description}
          onDescriptionChange={setDescription}
          status={status}
          onStatusChange={(value) => setStatus(value as typeof status)}
          attachments={attachments}
          onAddAttachments={addAttachments}
          onRemoveAttachment={removeAttachment}
          onSaveAndReview={() => { setSavedStepOne(true); setStep('items') }}
        />}
        {step === 'items' && <AddItems
          supplier={supplier}
          documentDate={documentDate}
          status={status}
          orderNumber={orderNumber}
          items={items}
          total={total}
          onUpdateItem={updateItem}
          onRemoveItem={(id) => setItems((current) => current.filter((entry) => entry.id !== id))}
          onAddItem={() => setItems((current) => [...current, { id: Date.now(), product: '', quantity: '', price: '', description: '' }])}
          onBack={() => setStep('order')}
          onSaveAndNext={() => { setSavedStepTwo(true); setStep('view') }}
        />}
        {step === 'view' && <OrderView
          orderNumber={orderNumber}
          documentDate={documentDate}
          supplierDetails={supplierDetails}
          buyer={buyer}
          items={items}
          total={total}
          supplyTerms={supplyTerms}
          deliveryTerms={deliveryTerms}
          paymentTerms={paymentTerms}
          preparedBy={preparedBy}
          approvalUser={approvalUser}
          onOrderNumberChange={setOrderNumber}
          onDocumentDateChange={setDocumentDate}
          onSupplierChange={(value) => { setSupplier(value); setSupplierDetails((current) => ({ ...current, name: value })) }}
          onBuyerChange={setBuyer}
          onSupplierDetailsChange={setSupplierDetails}
          onItemsChange={setItems}
          onSupplyTermsChange={setSupplyTerms}
          onDeliveryTermsChange={setDeliveryTerms}
          onPaymentTermsChange={setPaymentTerms}
          onPreparedByChange={setPreparedBy}
          onApprovalUserChange={setApprovalUser}
          onEdit={() => setStep('items')}
          onNext={() => setStep('pdf')}
        />}
        {step === 'pdf' && <OrderPdfView
          orderNumber={orderNumber}
          documentDate={documentDate}
          supplierDetails={supplierDetails}
          buyer={buyer}
          items={items}
          total={total}
          supplyTerms={supplyTerms}
          deliveryTerms={deliveryTerms}
          paymentTerms={paymentTerms}
          preparedBy={preparedBy}
          approvalUser={approvalUser}
        />}
      </main>
    </div>
  )
}
