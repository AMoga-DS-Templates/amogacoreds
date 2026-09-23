'use client'

import { useEffect, useState } from 'react'
import { Document, Page, Text, View, StyleSheet, pdf } from '@react-pdf/renderer'
import { ZrimoViewer } from '@/features/zrimo-viewer'
import type { OrderTemplateItem, OrderTemplateParty } from './order-types'

export interface OrderPdfViewProps {
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
}

const pdfStyles = StyleSheet.create({
  page: { padding: 42, fontSize: 10, color: '#193244' },
  title: { fontSize: 22, fontFamily: 'Helvetica-Bold', borderBottom: 2, borderBottomColor: '#193244', paddingBottom: 12 },
  row: { flexDirection: 'row', justifyContent: 'space-between', borderBottom: 1, borderBottomColor: '#cbd5e1', paddingVertical: 8 },
  heading: { fontSize: 11, fontFamily: 'Helvetica-Bold', color: '#2d6877', marginBottom: 8, marginTop: 18 },
  muted: { color: '#4d6472', fontSize: 8, marginBottom: 4 },
})

function PurchaseOrderPdfDocument({ orderNumber, documentDate, supplierDetails, buyer, items, total, supplyTerms, deliveryTerms, paymentTerms, preparedBy, approvalUser }: OrderPdfViewProps) {
  return <Document title='Order'><Page size='A4' style={pdfStyles.page}>
    <Text style={pdfStyles.title}>order</Text>
    <View style={{ marginTop: 20 }}><Text style={pdfStyles.muted}>ORDER NUMBER</Text><Text>{orderNumber || '-'}</Text><Text style={[pdfStyles.muted, { marginTop: 12 }]}>ORDER DATE</Text><Text>{documentDate || '-'}</Text></View>
    <View style={{ flexDirection: 'row', gap: 30 }}><View style={{ flex: 1 }}><Text style={pdfStyles.heading}>BUYER / BILL TO</Text><Text>{buyer.name}</Text><Text>{buyer.company}</Text><Text>{buyer.address}</Text><Text>{buyer.phone}</Text><Text>{buyer.email}</Text><Text>{buyer.taxId}</Text></View><View style={{ flex: 1 }}><Text style={pdfStyles.heading}>SUPPLIER</Text><Text>{supplierDetails.name}</Text><Text>{supplierDetails.company}</Text><Text>{supplierDetails.address}</Text><Text>{supplierDetails.phone}</Text><Text>{supplierDetails.email}</Text><Text>{supplierDetails.taxId}</Text></View></View>
    <Text style={pdfStyles.heading}>ITEMS</Text><View style={{ borderTop: 1, borderTopColor: '#193244', borderBottom: 1, borderBottomColor: '#cbd5e1' }}><View style={[pdfStyles.row, { backgroundColor: '#193244' }]}><Text style={{ color: '#ffffff', width: '28%' }}>Description / item code</Text><Text style={{ color: '#ffffff', width: '14%' }}>Delivery</Text><Text style={{ color: '#ffffff', width: '9%' }}>Qty</Text><Text style={{ color: '#ffffff', width: '10%' }}>Unit</Text><Text style={{ color: '#ffffff', width: '14%' }}>Unit price</Text><Text style={{ color: '#ffffff', width: '12%' }}>Discount</Text><Text style={{ color: '#ffffff', width: '13%', textAlign: 'right' }}>Amount</Text></View>{items.map((item) => <View key={item.id} style={pdfStyles.row}><Text style={{ width: '28%' }}>{item.description || item.product || '-'}</Text><Text style={{ width: '14%' }}>{item.deliveryDate || '-'}</Text><Text style={{ width: '9%' }}>{item.quantity || '-'}</Text><Text style={{ width: '10%' }}>{item.unit || '-'}</Text><Text style={{ width: '14%' }}>{item.price || '-'}</Text><Text style={{ width: '12%' }}>{item.discount || '0.00'}</Text><Text style={{ width: '13%', textAlign: 'right' }}>{((Number(item.quantity) || 0) * (Number(item.price) || 0)).toFixed(2)}</Text></View>)}</View>
    <View style={{ flexDirection: 'row', gap: 30 }}><View style={{ flex: 1 }}><Text style={pdfStyles.heading}>SUPPLY TERMS</Text><Text>{supplyTerms}</Text><Text style={pdfStyles.muted}>Delivery terms / ship-to address</Text><Text>{deliveryTerms}</Text><Text style={pdfStyles.muted}>Payment terms / method</Text><Text>{paymentTerms}</Text></View><View style={{ width: '35%', marginTop: 18 }}><View style={pdfStyles.row}><Text>Subtotal</Text><Text>{total.toFixed(2)}</Text></View><View style={pdfStyles.row}><Text>Tax</Text><Text>-</Text></View><View style={pdfStyles.row}><Text>Freight / other</Text><Text>-</Text></View><View style={[pdfStyles.row, { backgroundColor: '#eaf0f2' }]}><Text style={{ fontFamily: 'Helvetica-Bold' }}>TOTAL</Text><Text style={{ fontFamily: 'Helvetica-Bold' }}>{total.toFixed(2)}</Text></View></View></View>
    <View style={{ marginTop: 24 }}><Text style={pdfStyles.heading}>PREPARED BY</Text><Text>Name: {preparedBy}</Text><Text>Signature: ____________________    Date: ______________</Text><Text style={pdfStyles.heading}>APPROVAL</Text><Text>Approver: {approvalUser}</Text></View>
  </Page></Document>
}

function PdfPreview(props: OrderPdfViewProps) {
  const [blobUrl, setBlobUrl] = useState<string | null>(null)
  const dataKey = JSON.stringify(props)

  useEffect(() => {
    let cancelled = false
    let nextUrl: string | null = null
    setBlobUrl(null)
    void pdf(<PurchaseOrderPdfDocument {...props} />).toBlob().then((blob) => {
      if (cancelled) return
      nextUrl = URL.createObjectURL(blob)
      setBlobUrl(nextUrl)
    })
    return () => {
      cancelled = true
      if (nextUrl) URL.revokeObjectURL(nextUrl)
    }
  }, [dataKey])

  if (!blobUrl) return <div className='flex min-h-[650px] items-center justify-center text-sm text-muted-foreground'>Preparing PDF preview…</div>
  return <ZrimoViewer file={{ id: `order-${dataKey}`, name: `Order-${props.orderNumber || 'preview'}.pdf`, url: blobUrl, directUrl: true, type: 'pdf' }} />
}

export function OrderPdfView(props: OrderPdfViewProps) {
  return <section className='flex h-[calc(100vh-120px)] min-h-[650px] flex-col overflow-hidden bg-slate-100'><div className='min-h-0 flex-1 overflow-hidden'><PdfPreview {...props} /></div></section>
}
