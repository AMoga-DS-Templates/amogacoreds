'use client'

import { useState } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

export type CheckBoxItemProps = { label?: string; value?: string; checked?: boolean; disabled?: boolean }

export function CheckBoxItem({ label, value, checked, disabled }: CheckBoxItemProps) {
  return <label className='flex items-center gap-2 text-sm'><Checkbox value={value} checked={checked} disabled={disabled} /><span>{label ?? value}</span></label>
}

export function CheckBoxGroup({ items = [], values = [], onChange }: { items?: CheckBoxItemProps[]; values?: string[]; onChange?: (values: string[]) => void }) {
  const [selected, setSelected] = useState(values)
  const toggle = (value: string) => { const next = selected.includes(value) ? selected.filter((item) => item !== value) : [...selected, value]; setSelected(next); onChange?.(next) }
  return <div className='space-y-2'>{items.map((item, index) => { const value = item.value ?? item.label ?? String(index); return <label key={value} className='flex items-center gap-2 text-sm'><Checkbox checked={selected.includes(value)} disabled={item.disabled} onCheckedChange={() => toggle(value)} /><Label>{item.label ?? value}</Label></label> })}</div>
}
