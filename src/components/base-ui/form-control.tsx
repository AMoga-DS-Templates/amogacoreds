import type { ReactNode } from 'react'
import { Label } from '@/components/ui/label'

export function FormControl({ label, required, error, children, field }: { label?: string; required?: boolean; error?: string; children?: ReactNode; field?: ReactNode }) {
  return <div className="space-y-2">{label && <Label>{label}{required && <span className="text-destructive"> *</span>}</Label>}{field ?? children}{error && <p className="text-sm text-destructive">{error}</p>}</div>
}
