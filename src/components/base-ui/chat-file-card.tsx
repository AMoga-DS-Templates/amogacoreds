'use client'

import type { ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { Eye, FileSignature, FileText, List, MessageCircleMore, Share2 } from 'lucide-react'

export function ChatFileCardAction({ label = 'Open', href, onClick, icon = 'preview' }: { label?: string; href?: string; onClick?: () => void; icon?: 'list' | 'share' | 'preview' | 'signin' | 'comment' }) {
  const Icon = { list: List, share: Share2, preview: Eye, signin: FileSignature, comment: MessageCircleMore }[icon]
  return <Button type='button' variant='ghost' size='icon' className='h-8 w-8 rounded-full' onClick={onClick} asChild={Boolean(href)} aria-label={label} title={label}>{href ? <a href={href}><Icon className='h-4 w-4' /></a> : <Icon className='h-4 w-4' />}</Button>
}

export function ChatFileCard({ title, subtitle, name, fileName, size, type, actions, children }: { title?: string; subtitle?: string; name?: string; fileName?: string; size?: string | number; type?: string; actions?: ReactNode; children?: ReactNode }) {
  const displayTitle = title ?? name ?? fileName ?? 'Attached file'
  const displaySubtitle = subtitle ?? [type, size].filter(Boolean).join(' · ')
  return <div className='w-full py-1'><div className='flex items-center gap-3'><div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm'><FileText className='h-5 w-5' strokeWidth={2} /></div><div className='min-w-0 flex-1'><p className='truncate text-[15px] font-semibold leading-5 text-foreground'>{displayTitle}</p>{displaySubtitle ? <p className='truncate pt-0.5 text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground'>{displaySubtitle}</p> : null}</div><div className='flex shrink-0 items-center gap-1 text-muted-foreground'>{actions}{children}</div></div></div>
}
