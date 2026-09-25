'use client'

import { useState, type ReactNode } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function DialogBlock({ title = 'Details', trigger, triggerLabel, description, children, content }: { title?: string; trigger?: string; triggerLabel?: string; description?: string; children?: ReactNode; content?: ReactNode }) {
  const [open, setOpen] = useState(false)
  return <><Button variant="outline" onClick={() => setOpen(true)}>{triggerLabel ?? trigger ?? 'Open'}</Button>{open && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"><div className="w-full max-w-lg rounded-lg bg-background p-6 shadow-xl"><div className="mb-4 flex items-center justify-between"><div><h2 className="font-semibold">{title}</h2>{description && <p className="text-sm text-muted-foreground">{description}</p>}</div><Button variant="ghost" size="icon" onClick={() => setOpen(false)}><X className="h-4 w-4" /></Button></div>{content ?? children}</div></div>}</>
}
