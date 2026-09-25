'use client'

import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export type AccordionTableRow = { id?: string; name?: string; title?: string; category?: string; value?: string; total?: string; status?: string; date?: string; children?: AccordionTableRow[]; [key: string]: unknown }

function Row({ row, defaultOpen = false }: { row: AccordionTableRow; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  const children = row.children ?? []
  const name = String(row.name ?? row.title ?? 'Row')
  return <>
    <TableRow className={open ? 'border-b-0 bg-muted/50' : 'bg-muted/50'}>
      <TableCell className='w-10 p-0'><Button size='icon' variant='ghost' className='h-full w-full rounded-none p-3' disabled={!children.length} onClick={() => setOpen((value) => !value)}>{children.length ? (open ? <ChevronDown className='h-4 w-4' /> : <ChevronRight className='h-4 w-4' />) : <span className='h-4 w-4' />}</Button></TableCell>
      <TableCell className='font-mono text-sm text-muted-foreground'>{String(row.id ?? '—')}</TableCell>
      <TableCell className='font-medium'>{name}</TableCell>
      <TableCell className='text-muted-foreground'>{String(row.category ?? row.status ?? '—')}</TableCell>
      <TableCell className='whitespace-pre-wrap'>{String(row.value ?? row.total ?? '—')}</TableCell>
      <TableCell className='text-muted-foreground'>{String(row.date ?? '—')}</TableCell>
    </TableRow>
    {open && children.length ? <TableRow><TableCell colSpan={6} className='p-0'><div className='bg-muted/20 px-8 py-2'>{children.map((child, index) => <div key={`${child.id ?? child.name ?? index}`} className='grid grid-cols-5 gap-3 border-b py-2 text-xs last:border-0'><span className='font-mono text-muted-foreground'>{String(child.id ?? '—')}</span><span className='font-medium'>{String(child.name ?? child.title ?? 'Row')}</span><span className='text-muted-foreground'>{String(child.category ?? child.status ?? '—')}</span><span>{String(child.value ?? child.total ?? '—')}</span><span className='text-muted-foreground'>{String(child.date ?? '—')}</span></div>)}</div></TableCell></TableRow> : null}
  </>
}

export function TablewithAccordion({ rows = [], height = 800 }: { rows?: AccordionTableRow[]; height?: number }) {
  return <div className='w-full overflow-hidden rounded-lg border border-border bg-card shadow-sm'><div className='overflow-auto' style={{ maxHeight: height }}><Table className='min-w-[770px]'><TableHeader className='sticky top-0 z-10 bg-muted/50'><TableRow className='bg-muted/50'><TableHead /><TableHead>ID</TableHead><TableHead>Name</TableHead><TableHead>Category</TableHead><TableHead>Value</TableHead><TableHead>Date</TableHead></TableRow></TableHeader><TableBody>{rows.map((row, index) => <Row key={`${row.id ?? row.name ?? index}`} row={row} defaultOpen={index === 0} />)}</TableBody></Table></div></div>
}

export default TablewithAccordion
