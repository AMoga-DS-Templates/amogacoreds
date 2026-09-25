import type { ReactNode } from 'react'
import { CardDescription, CardHeader as UiCardHeader, CardTitle } from '@/components/ui/card'

export function CardHeader({ title, description, children }: { title?: string; description?: string; children?: ReactNode }) {
  return <UiCardHeader>{title ? <CardTitle>{title}</CardTitle> : null}{description ? <CardDescription>{description}</CardDescription> : null}{children}</UiCardHeader>
}
