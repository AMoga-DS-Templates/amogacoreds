'use client'

import { useState, type ReactNode } from 'react'
import { Button } from '@/components/ui/button'

export function AlertDialogBlock({ title = 'Confirm action', trigger, triggerLabel, description, confirmLabel = 'Confirm', cancelLabel = 'Cancel', children }: { title?: string; trigger?: string; triggerLabel?: string; description?: string; confirmLabel?: string; cancelLabel?: string; children?: ReactNode }) {
  const [open, setOpen] = useState(false)
  return <><Button variant="outline" onClick={() => setOpen(true)}>{triggerLabel ?? trigger ?? 'Open'}</Button>{open && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"><div className="w-full max-w-md rounded-lg bg-background p-6 shadow-xl"><h2 className="font-semibold">{title}</h2>{description && <p className="mt-2 text-sm text-muted-foreground">{description}</p>}<div className="py-4">{children}</div><div className="flex justify-end gap-2"><Button variant="outline" onClick={() => setOpen(false)}>{cancelLabel}</Button><Button onClick={() => setOpen(false)}>{confirmLabel}</Button></div></div></div>}</>
}
