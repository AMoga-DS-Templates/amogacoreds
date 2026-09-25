'use client'

import { useState, type ReactNode } from 'react'
import { Button } from '@/components/ui/button'

export function DrawerBlock({ title = 'Panel', trigger, triggerLabel, description, children, content }: { title?: string; trigger?: string; triggerLabel?: string; description?: string; children?: ReactNode; content?: ReactNode }) {
  const [open, setOpen] = useState(false)
  return <><Button variant="outline" onClick={() => setOpen(true)}>{triggerLabel ?? trigger ?? 'Open'}</Button>{open && <div className="fixed inset-0 z-50 bg-black/40"><div className="fixed inset-x-0 bottom-0 rounded-t-xl bg-background p-6 shadow-xl"><div className="mb-4 flex items-center justify-between"><div><h2 className="font-semibold">{title}</h2>{description && <p className="text-sm text-muted-foreground">{description}</p>}</div><Button variant="ghost" onClick={() => setOpen(false)}>Close</Button></div>{content ?? children}</div></div>}</>
}
