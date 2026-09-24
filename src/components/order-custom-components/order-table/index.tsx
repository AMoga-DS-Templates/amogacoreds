'use client'

import { useMemo, useState } from 'react'
import { OrderTableCards } from './cards'
import { mockOrderRecords } from './mock'
import { OrderTable } from './table'
import { OrderTableTopBar } from './top-bar'
import { OrderTableToolbar, type OrderTableView } from './toolbar'
import { columnLabels, type ColumnKey, type OrderRecord, type OrderRecordStatus } from './types'

export interface OrderRecordsProps {
  records?: OrderRecord[]
  title?: string
  description?: string
}

const defaultOrderRecords = mockOrderRecords.filter((record) => record.status !== 'approved')

export function OrderRecords({ records = defaultOrderRecords, title = 'Order', description = 'View and filter order records.' }: OrderRecordsProps) {
  const [view, setView] = useState<OrderTableView>('table')
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState<'all' | OrderRecordStatus>('all')
  const [financialYear, setFinancialYear] = useState('all')
  const [period, setPeriod] = useState('all')
  const [month, setMonth] = useState('all')
  const [visibleColumns, setVisibleColumns] = useState<Record<ColumnKey, boolean>>({ voucherNumber: true, documentDate: true, narration: true, totalAmount: true, dueDate: true, status: true })

  const filteredRecords = useMemo(() => records.filter((record) => {
    const normalizedQuery = query.trim().toLowerCase()
    const matchesQuery = !normalizedQuery || [record.voucherNumber, record.voucherType, record.voucherGroup, record.financialYear, record.periodName, record.monthName, record.narration, record.status].some((value) => String(value).toLowerCase().includes(normalizedQuery))
    return matchesQuery && (status === 'all' || record.status === status) && (financialYear === 'all' || record.financialYear === financialYear) && (period === 'all' || record.periodName === period) && (month === 'all' || record.monthName === month)
  }), [financialYear, month, period, query, records, status])

  const years = Array.from(new Set(records.map((record) => record.financialYear)))
  const periods = Array.from(new Set(records.map((record) => record.periodName)))
  const months = Array.from(new Set(records.map((record) => record.monthName)))

  return <section className='min-w-0 space-y-4 overflow-hidden bg-background p-4 sm:p-6'><OrderTableTopBar title={title} description={description} /><OrderTableToolbar query={query} onQueryChange={setQuery} status={status} onStatusChange={setStatus} financialYear={financialYear} onFinancialYearChange={setFinancialYear} period={period} onPeriodChange={setPeriod} month={month} onMonthChange={setMonth} years={years} periods={periods} months={months} view={view} onViewChange={setView} visibleColumns={visibleColumns} onColumnVisibilityChange={(key, visible) => setVisibleColumns((current) => ({ ...current, [key]: visible }))} /><div className='flex flex-col gap-1 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between'><span>Showing {filteredRecords.length} of {records.length} records</span><span>Records are mock data for this template</span></div>{view === 'table' ? <OrderTable records={filteredRecords} visibleColumns={visibleColumns} /> : <OrderTableCards records={filteredRecords} />}</section>
}

export { mockOrderRecords, columnLabels }
export type { ColumnKey, OrderRecord, OrderRecordStatus }


