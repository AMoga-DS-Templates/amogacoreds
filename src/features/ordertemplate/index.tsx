'use client'

import { useEffect, useMemo, useState, type ChangeEvent, type ReactNode } from 'react'
import { Document, Page, Text, View, StyleSheet, pdf } from '@react-pdf/renderer'
import { ArrowLeft, ArrowRight, CalendarDays, Download, Eye, FileText, Pencil, Plus, Trash2, UploadCloud, X } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { mockPurchaseOrder, mockPurchaseOrderProducts, mockPurchaseOrderSuppliers, type PurchaseOrderMockItem } from '@/features/MessageComponentGallery/mocks'
import { ZrimoViewer } from '@/features/zrimo-viewer'

type Step = 'purchase' | 'items' | 'view' | 'pdf'
type Item = PurchaseOrderMockItem
type PartyDetails = { name: string; company: string; address: string; phone: string; email: string; taxId: string }
type Attachment = { id: string; name: string; size: number; type: string; url: string }

export default function PurchaseOrderTemplate() {
  const [step, setStep] = useState<Step>('purchase')
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
  const [buyer, setBuyer] = useState<PartyDetails>(mockPurchaseOrder.buyer)
  const [supplierDetails, setSupplierDetails] = useState<PartyDetails>({ ...mockPurchaseOrder.supplierDetails, name: mockPurchaseOrder.supplier })
  const [description, setDescription] = useState(mockPurchaseOrder.description)
  const [status, setStatus] = useState(mockPurchaseOrder.status)
  const [items, setItems] = useState<Item[]>(mockPurchaseOrder.items)
  const [attachments, setAttachments] = useState<Attachment[]>([])

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

  const removeAttachment = (attachment: Attachment) => {
    URL.revokeObjectURL(attachment.url)
    setAttachments((current) => current.filter((item) => item.id !== attachment.id))
  }

  const stepItems: Array<[Step, string]> = [['purchase', 'Order'], ['items', 'Add Items'], ['view', 'View'], ['pdf', 'PDF View']]

  return (
    <div className='flex min-h-[720px] w-full flex-col overflow-visible bg-background'>
      <nav className='sticky top-0 z-30 flex shrink-0 border-b bg-background px-5 shadow-sm' aria-label='Order steps'>
        {stepItems.map(([value, label], index) => <button key={value} type='button' onClick={() => goTo(value)} className={`relative flex min-h-[58px] min-w-0 flex-1 items-center justify-center gap-2 border-b-2 px-2 text-sm font-semibold transition ${step === value ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'}`}><span className={`flex size-6 items-center justify-center rounded-full text-xs ${step === value ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>{index + 1}</span><span className='truncate'>{label}</span></button>)}
      </nav>
      <main className='min-h-0 flex-1 overflow-visible'>
        {step === 'purchase' && <section className='space-y-5 p-4 sm:p-7'>
          <div className='rounded-2xl border bg-card p-5 shadow-sm sm:p-7'><h2 className='mb-6 font-semibold'>Order information</h2><div className='grid gap-5'>
            <Field label='Select'><Select value={supplier} onValueChange={(value) => { setSupplier(value); setSupplierDetails((current) => ({ ...current, name: value })) }}><SelectTrigger aria-label='Select supplier' className='h-12 w-full'><SelectValue placeholder='Select supplier' /></SelectTrigger><SelectContent>{mockPurchaseOrderSuppliers.map((supplierOption) => <SelectItem key={supplierOption} value={supplierOption}>{supplierOption}</SelectItem>)}</SelectContent></Select></Field>
            <Field label={<>Order No. <span className='text-destructive'>*</span></>}><Input value={orderNumber} onChange={(event) => setOrderNumber(event.target.value)} className='h-12' /></Field>
            <Field label={<>Document Date <span className='text-destructive'>*</span></>}><div className='relative'><Input type='date' value={documentDate} onChange={(event) => setDocumentDate(event.target.value)} className='h-12 pr-10' /><CalendarDays className='pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2' /></div></Field>
            <Field label='Supply Terms'><Textarea value={supplyTerms} onChange={(event) => setSupplyTerms(event.target.value)} rows={3} /></Field>
            <Field label='Description'><Textarea value={description} onChange={(event) => setDescription(event.target.value)} rows={4} /></Field>
            <Field label={<>Status <span className='text-destructive'>*</span></>}><Select value={status} onValueChange={(value) => setStatus(value as typeof status)}><SelectTrigger className='h-10 w-full'><SelectValue placeholder='Select status' /></SelectTrigger><SelectContent><SelectItem value='active'>Active</SelectItem><SelectItem value='inactive'>Inactive</SelectItem><SelectItem value='draft'>Draft</SelectItem></SelectContent></Select></Field>
          </div></div>
          <div className='rounded-2xl border bg-card p-5 shadow-sm sm:p-7'>
            <h2 className='mb-5 font-semibold'>Attachments</h2>
            <label className='flex min-h-36 cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-primary text-sm text-muted-foreground transition hover:text-primary'>
              <UploadCloud className='size-6' /><span>Upload attachment</span><span className='text-xs'>Select one or more files</span>
              <input type='file' multiple className='hidden' onChange={addAttachments} />
            </label>
            {attachments.length > 0 && <div className='mt-4 overflow-hidden rounded-lg border bg-background'>
              {attachments.map((attachment) => <div key={attachment.id} className='flex items-center justify-between gap-3 border-b p-3 last:border-b-0'>
                <div className='flex min-w-0 items-center gap-3'><div className='flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary'><FileText className='size-4' /></div><div className='min-w-0'><p className='truncate text-xs font-semibold'>{attachment.name}</p><p className='text-[10px] text-muted-foreground'>{attachment.type} · {(attachment.size / 1024).toFixed(1)} KB</p></div></div>
                <div className='flex shrink-0 items-center gap-1'><Button type='button' variant='ghost' size='icon' className='size-8' title='View attachment' onClick={() => window.open(attachment.url, '_blank', 'noopener,noreferrer')}><Eye className='size-4' /></Button><a href={attachment.url} download={attachment.name} className='inline-flex size-8 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground' title='Download attachment'><Download className='size-4' /></a><Button type='button' variant='ghost' size='icon' className='size-8 text-muted-foreground hover:text-destructive' title='Remove attachment' onClick={() => removeAttachment(attachment)}><X className='size-4' /></Button></div>
              </div>)}
            </div>}
            <div className='mt-6 flex justify-end'><Button type='button' onClick={() => { setSavedStepOne(true); setStep('items') }}>Save and Review</Button></div>
          </div>
        </section>}
        {step === 'items' && <section className='space-y-5 p-4 sm:p-7'>
          <div className='rounded-2xl border bg-card p-5 shadow-sm sm:p-7'><div className='grid gap-4 sm:grid-cols-4'><Summary label='Supplier' value={supplier || '-'} /><Summary label='Document Date' value={documentDate || '-'} /><Summary label='Status' value={status} /><Summary label='Order No.' value={orderNumber || '-'} /></div></div>
          <div className='rounded-2xl border bg-card p-5 shadow-sm sm:p-7'><h2 className='mb-5 font-semibold'>Add Items</h2><div className='overflow-x-auto'><table className='w-full min-w-[650px] text-left text-sm'><thead><tr className='border-b text-xs text-muted-foreground'><th className='pb-3 pr-3'>Product</th><th className='pb-3 pr-3'>Qty</th><th className='pb-3 pr-3'>Price</th><th className='pb-3 pr-3'>Amount</th><th className='pb-3 text-right'>Action</th></tr></thead><tbody>{items.map((item) => <tr key={item.id} className='border-b'><td className='py-3 pr-3'><Select value={item.product || 'none'} onValueChange={(value) => updateItem(item.id, 'product', value === 'none' ? '' : value)}><SelectTrigger className='h-9 w-full text-xs'><SelectValue placeholder='Select product' /></SelectTrigger><SelectContent><SelectItem value='none'>Select product</SelectItem>{mockPurchaseOrderProducts.map((product) => <SelectItem key={product} value={product}>{product}</SelectItem>)}</SelectContent></Select></td><td className='py-3 pr-3'><Input type='number' value={item.quantity} onChange={(event) => updateItem(item.id, 'quantity', event.target.value)} placeholder='Enter qty' /></td><td className='py-3 pr-3'><Input type='number' value={item.price} onChange={(event) => updateItem(item.id, 'price', event.target.value)} placeholder='Enter price' /></td><td className='py-3 pr-3'><Input value={((Number(item.quantity) || 0) * (Number(item.price) || 0)).toFixed(2)} readOnly /></td><td className='py-3 text-right'><Button type='button' variant='ghost' size='icon' onClick={() => setItems((current) => current.filter((entry) => entry.id !== item.id))}><Trash2 className='size-4' /></Button></td></tr>)}</tbody></table></div><Button type='button' variant='outline' className='mt-5 gap-2' onClick={() => setItems((current) => [...current, { id: Date.now(), product: '', quantity: '', price: '', description: '' }])}><Plus className='size-4' />Add New</Button><div className='mt-6 flex justify-end border-t pt-5 text-sm'><div className='flex w-[300px] max-w-full justify-between rounded-lg bg-muted/40 p-3'><span className='text-muted-foreground'>Total Amount</span><strong>{total.toFixed(2)}</strong></div></div><div className='mt-5 flex items-center justify-between gap-3'><Button type='button' variant='ghost' className='gap-2 text-sm text-muted-foreground' onClick={() => setStep('purchase')}><ArrowLeft className='size-4' />Back to New</Button><Button type='button' className='gap-2' onClick={() => { setSavedStepTwo(true); setStep('view') }}>Save and Next<ArrowRight className='size-4' /></Button></div></div>
        </section>}
        {step === 'view' && <ViewStep orderNumber={orderNumber} documentDate={documentDate} supplierDetails={supplierDetails} buyer={buyer} items={items} total={total} supplyTerms={supplyTerms} deliveryTerms={deliveryTerms} paymentTerms={paymentTerms} preparedBy={preparedBy} approvalUser={approvalUser} onOrderNumberChange={setOrderNumber} onDocumentDateChange={setDocumentDate} onSupplierChange={(value) => { setSupplier(value); setSupplierDetails((current) => ({ ...current, name: value })) }} onBuyerChange={setBuyer} onSupplierDetailsChange={setSupplierDetails} onItemsChange={setItems} onSupplyTermsChange={setSupplyTerms} onDeliveryTermsChange={setDeliveryTerms} onPaymentTermsChange={setPaymentTerms} onPreparedByChange={setPreparedBy} onApprovalUserChange={setApprovalUser} onEdit={() => setStep('items')} onNext={() => setStep('pdf')} />}
        {step === 'pdf' && <PdfStep orderNumber={orderNumber} documentDate={documentDate} supplierDetails={supplierDetails} buyer={buyer} items={items} total={total} supplyTerms={supplyTerms} deliveryTerms={deliveryTerms} paymentTerms={paymentTerms} preparedBy={preparedBy} approvalUser={approvalUser} />}
      </main>
    </div>
  )
}

function Field({ label, children }: { label: ReactNode; children: ReactNode }) { return <div className='grid gap-2'><Label>{label}</Label>{children}</div> }
function Summary({ label, value }: { label: string; value: string }) { return <div><p className='text-xs text-muted-foreground'>{label}</p><p className='mt-1 font-semibold capitalize'>{value}</p></div> }
function EditableInfo({ label, value, onChange, type = 'text' }: { label: string; value: string; onChange: (value: string) => void; type?: string }) {
  return <label className='grid gap-2'><span className='text-[11px] font-medium text-muted-foreground'>{label}</span><Input type={type} value={value} onChange={(event) => onChange(event.target.value)} className='h-9 border-input bg-background text-sm' /></label>
}
function Party({ title, details, onChange }: { title: string; details: PartyDetails; onChange: (key: keyof PartyDetails, value: string) => void }) {
  return <div>
    <h2 className='mb-4 text-sm font-bold text-primary'>{title}</h2>
    <div className='grid gap-3'><EditableInfo label='Name' value={details.name} onChange={(value) => onChange('name', value)} /><EditableInfo label='Company name' value={details.company} onChange={(value) => onChange('company', value)} /><EditableInfo label='Address' value={details.address} onChange={(value) => onChange('address', value)} /><EditableInfo label='Contact name / phone' value={details.phone} onChange={(value) => onChange('phone', value)} /><EditableInfo label='Email' value={details.email} onChange={(value) => onChange('email', value)} /><EditableInfo label='Tax / registration ID' value={details.taxId} onChange={(value) => onChange('taxId', value)} /></div>
  </div>
}

function ViewStep({ orderNumber, documentDate, supplierDetails, buyer, items, total, supplyTerms, deliveryTerms, paymentTerms, preparedBy, approvalUser, onOrderNumberChange, onDocumentDateChange, onSupplierChange, onBuyerChange, onSupplierDetailsChange, onItemsChange, onSupplyTermsChange, onDeliveryTermsChange, onPaymentTermsChange, onPreparedByChange, onApprovalUserChange, onEdit, onNext }: { orderNumber: string; documentDate: string; supplierDetails: PartyDetails; buyer: PartyDetails; items: Item[]; total: number; supplyTerms: string; deliveryTerms: string; paymentTerms: string; preparedBy: string; approvalUser: string; onOrderNumberChange: (value: string) => void; onDocumentDateChange: (value: string) => void; onSupplierChange: (value: string) => void; onBuyerChange: (value: PartyDetails) => void; onSupplierDetailsChange: (value: PartyDetails) => void; onItemsChange: (value: Item[]) => void; onSupplyTermsChange: (value: string) => void; onDeliveryTermsChange: (value: string) => void; onPaymentTermsChange: (value: string) => void; onPreparedByChange: (value: string) => void; onApprovalUserChange: (value: string) => void; onEdit: () => void; onNext: () => void }) {
  const subtotal = total
  const updateItem = (id: number, key: keyof Item, value: string) => onItemsChange(items.map((item) => item.id === id ? { ...item, [key]: value } : item))
  return <section className='bg-muted/40 p-4 sm:p-8'><article className='mx-auto max-w-5xl border bg-background p-5 text-foreground shadow-xl sm:p-12'>
    <div className='border-b-2 border-border pb-4'><h1 className='text-2xl font-extrabold'>Order</h1></div>
    <div className='grid gap-8 pt-7 sm:grid-cols-2'><EditableInfo label='ORDER NUMBER' value={orderNumber} onChange={onOrderNumberChange} /><EditableInfo label='ORDER DATE' value={documentDate} onChange={onDocumentDateChange} type='date' /></div>
    <div className='grid gap-8 pt-8 sm:grid-cols-2'><Party title='BUYER / BILL TO' details={buyer} onChange={(key, value) => onBuyerChange({ ...buyer, [key]: value })} /><Party title='SUPPLIER' details={supplierDetails} onChange={(key, value) => { const next = { ...supplierDetails, [key]: value }; onSupplierDetailsChange(next); if (key === 'name') onSupplierChange(value) }} /></div>
    <div className='mt-8 overflow-x-auto border'><table className='w-full min-w-[1120px] text-left text-xs'><thead className='bg-primary text-primary-foreground'><tr><th className='px-2 py-3'>No.</th><th className='px-2 py-3'>Description / item code</th><th className='px-2 py-3'>Delivery date</th><th className='px-2 py-3'>Qty</th><th className='px-2 py-3'>Unit</th><th className='px-2 py-3'>Unit price</th><th className='px-2 py-3'>Discount</th><th className='px-2 py-3 text-right'>Amount</th><th className='px-2 py-3 text-center'>Edit</th></tr></thead><tbody>{items.map((item, index) => <tr key={item.id} className='border-b'><td className='px-2 py-3 text-center'>{index + 1}</td><td className='p-1'><Input value={item.description || item.product} onChange={(event) => updateItem(item.id, 'description', event.target.value)} className='h-9 min-w-48 border-input bg-background text-xs' /></td><td className='p-1'><Input type='date' value={item.deliveryDate || ''} onChange={(event) => updateItem(item.id, 'deliveryDate', event.target.value)} className='h-9 border-input bg-background text-xs' /></td><td className='p-1'><Input type='number' value={item.quantity} onChange={(event) => updateItem(item.id, 'quantity', event.target.value)} className='h-9 w-20 border-input bg-background text-xs' /></td><td className='p-1'><Input value={item.unit || ''} onChange={(event) => updateItem(item.id, 'unit', event.target.value)} className='h-9 w-24 border-input bg-background text-xs' /></td><td className='p-1'><Input type='number' value={item.price} onChange={(event) => updateItem(item.id, 'price', event.target.value)} className='h-9 w-24 border-input bg-background text-xs' /></td><td className='p-1'><Input value={item.discount || ''} onChange={(event) => updateItem(item.id, 'discount', event.target.value)} className='h-9 w-24 border-input bg-background text-xs' /></td><td className='bg-muted/40 px-2 py-3 text-right'>{((Number(item.quantity) || 0) * (Number(item.price) || 0)).toFixed(2)}</td><td className='px-2 py-3 text-center'><Pencil className='mx-auto size-3.5 text-muted-foreground' /></td></tr>)}</tbody></table></div>
    <div className='grid gap-8 pt-8 sm:grid-cols-[1.3fr_.7fr]'><div><h2 className='font-bold text-primary'>SUPPLY TERMS</h2><Textarea value={supplyTerms} onChange={(event) => onSupplyTermsChange(event.target.value)} className='mt-2 border-input bg-background text-sm' rows={3} /><label className='mb-1 mt-3 grid gap-1 text-[11px] text-muted-foreground'>Delivery terms / ship-to address<Input value={deliveryTerms} onChange={(event) => onDeliveryTermsChange(event.target.value)} className='h-9 border-input bg-background text-sm' /></label><label className='mb-1 mt-3 grid gap-1 text-[11px] text-muted-foreground'>Payment terms / method<Input value={paymentTerms} onChange={(event) => onPaymentTermsChange(event.target.value)} className='h-9 border-input bg-background text-sm' /></label></div><div className='text-sm'><div className='flex justify-between border-b py-2'><span>Subtotal</span><span>{subtotal.toFixed(2)}</span></div><div className='flex justify-between border-b py-2'><span>Tax</span><span>-</span></div><div className='flex justify-between border-b py-2'><span>Freight / other</span><span>-</span></div><div className='mt-2 flex justify-between bg-muted/40 px-3 py-4 font-bold'><span>TOTAL</span><span>{total.toFixed(2)}</span></div></div></div>
    <div className='grid gap-8 pt-8 text-xs'><div><h2 className='mb-4 text-sm font-bold text-primary'>PREPARED BY</h2><EditableInfo label='Name' value={preparedBy} onChange={onPreparedByChange} /><div className='mt-4 grid grid-cols-[1fr_.3fr] gap-5'><div><p className='text-muted-foreground'>Signature</p><div className='h-7 border-b bg-muted/40' /></div><div><p className='text-muted-foreground'>Date</p><div className='h-7 border-b bg-muted/40' /></div></div></div><div><h2 className='mb-4 text-sm font-bold text-primary'>SELECT APPROVER</h2><Input value={approvalUser} onChange={(event) => onApprovalUserChange(event.target.value)} className='h-9 max-w-xl border-input bg-background text-sm' /></div></div>
    <div className='mt-8 flex justify-end gap-2'><Button type='button' variant='outline' onClick={onEdit}>Edit Items</Button><Button type='button' onClick={onNext}>Continue to PDF</Button></div>
  </article></section>
}

function PdfStep({ orderNumber, documentDate, supplierDetails, buyer, items, total, supplyTerms, deliveryTerms, paymentTerms, preparedBy, approvalUser }: { orderNumber: string; documentDate: string; supplierDetails: PartyDetails; buyer: PartyDetails; items: Item[]; total: number; supplyTerms: string; deliveryTerms: string; paymentTerms: string; preparedBy: string; approvalUser: string }) {
  return <section className='flex h-[calc(100vh-120px)] min-h-[650px] flex-col overflow-hidden bg-slate-100'><div className='min-h-0 flex-1 overflow-hidden'><PurchaseOrderPdfPreview orderNumber={orderNumber} documentDate={documentDate} supplierDetails={supplierDetails} buyer={buyer} items={items} total={total} supplyTerms={supplyTerms} deliveryTerms={deliveryTerms} paymentTerms={paymentTerms} preparedBy={preparedBy} approvalUser={approvalUser} /></div></section>
}

const pdfStyles = StyleSheet.create({
  page: { padding: 42, fontSize: 10, color: '#193244' },
  title: { fontSize: 22, fontFamily: 'Helvetica-Bold', borderBottom: 2, borderBottomColor: '#193244', paddingBottom: 12 },
  row: { flexDirection: 'row', justifyContent: 'space-between', borderBottom: 1, borderBottomColor: '#cbd5e1', paddingVertical: 8 },
  heading: { fontSize: 11, fontFamily: 'Helvetica-Bold', color: '#2d6877', marginBottom: 8, marginTop: 18 },
  muted: { color: '#4d6472', fontSize: 8, marginBottom: 4 },
})

function PurchaseOrderPdfDocument({ orderNumber, documentDate, supplierDetails, buyer, items, total, supplyTerms, deliveryTerms, paymentTerms, preparedBy, approvalUser }: { orderNumber: string; documentDate: string; supplierDetails: PartyDetails; buyer: PartyDetails; items: Item[]; total: number; supplyTerms: string; deliveryTerms: string; paymentTerms: string; preparedBy: string; approvalUser: string }) {
  return <Document title='Order'><Page size='A4' style={pdfStyles.page}>
    <Text style={pdfStyles.title}>order</Text>
    <View style={{ marginTop: 20 }}><Text style={pdfStyles.muted}>ORDER NUMBER</Text><Text>{orderNumber || '-'}</Text><Text style={[pdfStyles.muted, { marginTop: 12 }]}>ORDER DATE</Text><Text>{documentDate || '-'}</Text></View>
    <View style={{ flexDirection: 'row', gap: 30 }}><View style={{ flex: 1 }}><Text style={pdfStyles.heading}>BUYER / BILL TO</Text><Text>{buyer.name}</Text><Text>{buyer.company}</Text><Text>{buyer.address}</Text><Text>{buyer.phone}</Text><Text>{buyer.email}</Text><Text>{buyer.taxId}</Text></View><View style={{ flex: 1 }}><Text style={pdfStyles.heading}>SUPPLIER</Text><Text>{supplierDetails.name}</Text><Text>{supplierDetails.company}</Text><Text>{supplierDetails.address}</Text><Text>{supplierDetails.phone}</Text><Text>{supplierDetails.email}</Text><Text>{supplierDetails.taxId}</Text></View></View>
    <Text style={pdfStyles.heading}>ITEMS</Text><View style={{ borderTop: 1, borderTopColor: '#193244', borderBottom: 1, borderBottomColor: '#cbd5e1' }}><View style={[pdfStyles.row, { backgroundColor: '#193244' }]}><Text style={{ color: '#ffffff', width: '28%' }}>Description / item code</Text><Text style={{ color: '#ffffff', width: '14%' }}>Delivery</Text><Text style={{ color: '#ffffff', width: '9%' }}>Qty</Text><Text style={{ color: '#ffffff', width: '10%' }}>Unit</Text><Text style={{ color: '#ffffff', width: '14%' }}>Unit price</Text><Text style={{ color: '#ffffff', width: '12%' }}>Discount</Text><Text style={{ color: '#ffffff', width: '13%', textAlign: 'right' }}>Amount</Text></View>{items.map((item) => <View key={item.id} style={pdfStyles.row}><Text style={{ width: '28%' }}>{item.description || item.product || '-'}</Text><Text style={{ width: '14%' }}>{item.deliveryDate || '-'}</Text><Text style={{ width: '9%' }}>{item.quantity || '-'}</Text><Text style={{ width: '10%' }}>{item.unit || '-'}</Text><Text style={{ width: '14%' }}>{item.price || '-'}</Text><Text style={{ width: '12%' }}>{item.discount || '0.00'}</Text><Text style={{ width: '13%', textAlign: 'right' }}>{((Number(item.quantity) || 0) * (Number(item.price) || 0)).toFixed(2)}</Text></View>)}</View>
    <View style={{ flexDirection: 'row', gap: 30 }}><View style={{ flex: 1 }}><Text style={pdfStyles.heading}>SUPPLY TERMS</Text><Text>{supplyTerms}</Text><Text style={pdfStyles.muted}>Delivery terms / ship-to address</Text><Text>{deliveryTerms}</Text><Text style={pdfStyles.muted}>Payment terms / method</Text><Text>{paymentTerms}</Text></View><View style={{ width: '35%', marginTop: 18 }}><View style={pdfStyles.row}><Text>Subtotal</Text><Text>{total.toFixed(2)}</Text></View><View style={pdfStyles.row}><Text>Tax</Text><Text>-</Text></View><View style={pdfStyles.row}><Text>Freight / other</Text><Text>-</Text></View><View style={[pdfStyles.row, { backgroundColor: '#eaf0f2' }]}><Text style={{ fontFamily: 'Helvetica-Bold' }}>TOTAL</Text><Text style={{ fontFamily: 'Helvetica-Bold' }}>{total.toFixed(2)}</Text></View></View></View>
    <View style={{ marginTop: 24 }}><Text style={pdfStyles.heading}>PREPARED BY</Text><Text>Name: {preparedBy}</Text><Text>Signature: ____________________    Date: ______________</Text><Text style={pdfStyles.heading}>APPROVAL</Text><Text>Approver: {approvalUser}</Text></View>
  </Page></Document>
}

function PurchaseOrderPdfPreview({ orderNumber, documentDate, supplierDetails, buyer, items, total, supplyTerms, deliveryTerms, paymentTerms, preparedBy, approvalUser }: { orderNumber: string; documentDate: string; supplierDetails: PartyDetails; buyer: PartyDetails; items: Item[]; total: number; supplyTerms: string; deliveryTerms: string; paymentTerms: string; preparedBy: string; approvalUser: string }) {
  const [blobUrl, setBlobUrl] = useState<string | null>(null)
  const dataKey = JSON.stringify({ orderNumber, documentDate, supplierDetails, buyer, items, total, supplyTerms, deliveryTerms, paymentTerms, preparedBy, approvalUser })

  useEffect(() => {
    let cancelled = false
    let nextUrl: string | null = null
    setBlobUrl(null)
    void pdf(<PurchaseOrderPdfDocument orderNumber={orderNumber} documentDate={documentDate} supplierDetails={supplierDetails} buyer={buyer} items={items} total={total} supplyTerms={supplyTerms} deliveryTerms={deliveryTerms} paymentTerms={paymentTerms} preparedBy={preparedBy} approvalUser={approvalUser} />).toBlob().then((blob) => {
      if (cancelled) return
      nextUrl = URL.createObjectURL(blob)
      setBlobUrl(nextUrl)
    })
    return () => {
      cancelled = true
      if (nextUrl) URL.revokeObjectURL(nextUrl)
    }
  }, [dataKey, orderNumber, documentDate, supplierDetails, buyer, items, total, supplyTerms, deliveryTerms, paymentTerms, preparedBy, approvalUser])

  if (!blobUrl) return <div className='flex min-h-[650px] items-center justify-center text-sm text-muted-foreground'>Preparing PDF preview…</div>
  return <ZrimoViewer file={{ id: `order-${dataKey}`, name: `Order-${orderNumber || 'preview'}.pdf`, url: blobUrl, directUrl: true, type: 'pdf' }} />
}
