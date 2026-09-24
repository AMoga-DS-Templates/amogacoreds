export type OrderRecordStatus = 'draft' | 'active' | 'posted' | 'approved'

export type OrderRecord = {
  id: string
  voucherNumber: string
  voucherGroup: string
  voucherType: string
  financialYear: string
  periodName: string
  monthName: string
  documentDate: string
  transactionDate: string
  postingDate: string
  narration: string
  totalAmount: number
  dueDate: string
  status: OrderRecordStatus
}

export type ColumnKey = 'voucherNumber' | 'documentDate' | 'narration' | 'totalAmount' | 'dueDate' | 'status'

export const columnLabels: Record<ColumnKey, string> = {
  voucherNumber: 'Order No.',
  documentDate: 'Document Date',
  narration: 'Narration',
  totalAmount: 'Total Amount',
  dueDate: 'Due Date',
  status: 'Status',
}

export const formatDate = (value: string) => new Intl.DateTimeFormat('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(`${value}T00:00:00`))
export const formatAmount = (value: number) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 }).format(value)
export const displayValue = (value: string | number | null | undefined) => value === null || value === undefined || value === '' ? '-' : String(value)


