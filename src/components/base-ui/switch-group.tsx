'use client'

import { useState } from 'react'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

export type SwitchItemProps = { label?: string; value?: string; checked?: boolean; disabled?: boolean }

export function SwitchItem({ label, value, checked, disabled }: SwitchItemProps) { return <label className='flex items-center justify-between gap-4 text-sm'><span>{label ?? value}</span><Switch checked={checked} disabled={disabled} /></label> }

export function SwitchGroup({ items = [], values = [], onChange }: { items?: SwitchItemProps[]; values?: string[]; onChange?: (values: string[]) => void }) {
  const [selected, setSelected] = useState(values)
  const toggle = (value: string) => { const next = selected.includes(value) ? selected.filter((item) => item !== value) : [...selected, value]; setSelected(next); onChange?.(next) }
  return <div className='space-y-3'>{items.map((item, index) => { const value = item.value ?? item.label ?? String(index); return <div key={value} className='flex items-center justify-between gap-4'><Label>{item.label ?? value}</Label><Switch checked={selected.includes(value)} disabled={item.disabled} onCheckedChange={() => toggle(value)} /></div> })}</div>
}
