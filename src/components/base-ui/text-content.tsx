import type { ReactNode } from 'react'

export function TextContent({ text, size = 'default', children }: { text?: string; size?: 'small' | 'default' | 'large' | 'small-heavy' | 'large-heavy'; children?: ReactNode }) {
  const value = text ?? children
  const clean = typeof value === 'string' ? value.replace(/\*\*(.*?)\*\*/g, '$1').replace(/__(.*?)__/g, '$1').replace(/\*(.*?)\*/g, '$1').replace(/_(.*?)_/g, '$1') : value
  const sizeClass = { small: 'text-sm text-muted-foreground', default: 'text-base', large: 'text-lg', 'small-heavy': 'text-sm font-semibold', 'large-heavy': 'text-lg font-semibold' }[size]
  return <p className={sizeClass}>{clean}</p>
}
