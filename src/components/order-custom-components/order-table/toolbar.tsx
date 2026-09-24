'use client'

import { CalendarDays, Columns3, Grid3x3, Layers2, ListFilter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { OrderTableSearch } from './search'
import { columnLabels, type ColumnKey, type OrderRecordStatus } from './types'

export type OrderTableView = 'table' | 'card'

export interface OrderTableToolbarProps {
  query: string
  onQueryChange: (value: string) => void
  status: 'all' | OrderRecordStatus
  onStatusChange: (value: 'all' | OrderRecordStatus) => void
  financialYear: string
  onFinancialYearChange: (value: string) => void
  period: string
  onPeriodChange: (value: string) => void
  month: string
  onMonthChange: (value: string) => void
  years: string[]
  periods: string[]
  months: string[]
  view: OrderTableView
  onViewChange: (value: OrderTableView) => void
  visibleColumns: Record<ColumnKey, boolean>
  onColumnVisibilityChange: (key: ColumnKey, visible: boolean) => void
}

export function OrderTableToolbar(props: OrderTableToolbarProps) {
  return <>
    <div className='flex w-full min-w-0 flex-col gap-3 xl:flex-row xl:items-center xl:justify-between'><OrderTableSearch value={props.query} onChange={props.onQueryChange} /><div className='grid w-full grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center xl:w-auto'>
      <Select value={props.status} onValueChange={(value) => props.onStatusChange(value as 'all' | OrderRecordStatus)}><SelectTrigger className='h-9 w-full sm:w-[140px]'><ListFilter className='mr-2 size-4' /><SelectValue placeholder='Status' /></SelectTrigger><SelectContent><SelectItem value='all'>All statuses</SelectItem><SelectItem value='draft'>Draft</SelectItem><SelectItem value='active'>Active</SelectItem><SelectItem value='posted'>Posted</SelectItem></SelectContent></Select>
      <DropdownMenu><DropdownMenuTrigger asChild><Button type='button' variant='outline' size='sm' className='h-9 w-full shrink-0 gap-2 sm:w-auto'><CalendarDays className='size-4' />Filters</Button></DropdownMenuTrigger><DropdownMenuContent align='end' className='w-64 max-w-[calc(100vw-2rem)] p-3'><DropdownMenuLabel>Filter records</DropdownMenuLabel><div className='grid gap-2 pt-2'><Select value={props.financialYear} onValueChange={props.onFinancialYearChange}><SelectTrigger className='h-9'><SelectValue placeholder='Financial year' /></SelectTrigger><SelectContent><SelectItem value='all'>All financial years</SelectItem>{props.years.map((value) => <SelectItem key={value} value={value}>{value}</SelectItem>)}</SelectContent></Select><Select value={props.period} onValueChange={props.onPeriodChange}><SelectTrigger className='h-9'><SelectValue placeholder='Period' /></SelectTrigger><SelectContent><SelectItem value='all'>All periods</SelectItem>{props.periods.map((value) => <SelectItem key={value} value={value}>{value}</SelectItem>)}</SelectContent></Select><Select value={props.month} onValueChange={props.onMonthChange}><SelectTrigger className='h-9'><SelectValue placeholder='Month' /></SelectTrigger><SelectContent><SelectItem value='all'>All months</SelectItem>{props.months.map((value) => <SelectItem key={value} value={value}>{value}</SelectItem>)}</SelectContent></Select></div></DropdownMenuContent></DropdownMenu>
      <DropdownMenu><DropdownMenuTrigger asChild><Button type='button' variant='outline' size='sm' className='h-9 w-full shrink-0 gap-2 sm:w-auto'><Columns3 className='size-4' />Columns</Button></DropdownMenuTrigger><DropdownMenuContent align='end' className='max-w-[calc(100vw-2rem)]'><DropdownMenuLabel>Show columns</DropdownMenuLabel><DropdownMenuSeparator />{(Object.keys(columnLabels) as ColumnKey[]).map((key) => <DropdownMenuCheckboxItem key={key} checked={props.visibleColumns[key]} onCheckedChange={(checked) => props.onColumnVisibilityChange(key, Boolean(checked))}>{columnLabels[key]}</DropdownMenuCheckboxItem>)}</DropdownMenuContent></DropdownMenu>
      <div className='col-span-2 flex w-fit items-center rounded-md border p-0.5 sm:col-span-1'><Button type='button' variant={props.view === 'table' ? 'secondary' : 'ghost'} size='icon' className='size-8' onClick={() => props.onViewChange('table')} aria-label='Table view' title='Table view'><Grid3x3 className='size-4' /></Button><Button type='button' variant={props.view === 'card' ? 'secondary' : 'ghost'} size='icon' className='size-8' onClick={() => props.onViewChange('card')} aria-label='Card view' title='Card view'><Layers2 className='size-4' /></Button></div>
    </div></div>
  </>
}


