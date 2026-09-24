'use client'

import { X } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

export interface OrderHeaderProps {
  label: string
  value?: string
  description?: string
  avatarText?: string
  onClose?: () => void
  className?: string
}

export function OrderHeader({
  label,
  value,
  description,
  avatarText = 'YE',
  onClose,
  className,
}: OrderHeaderProps) {
  return (
    <header className={`sticky top-0 z-40 flex min-h-[60px] shrink-0 items-center justify-between gap-3 border-b border-border bg-background px-3 py-3 sm:px-4 ${className ?? ''}`}>
      <div className='flex min-w-0 items-center gap-3'>
        <Avatar className='size-9 shrink-0 border shadow-xs'>
          <AvatarFallback className='bg-primary/10 text-xs font-bold text-primary'>{avatarText}</AvatarFallback>
        </Avatar>
        <div className='min-w-0'>
          <p className='truncate text-sm font-semibold'>
            {label}{value ? <><span className='font-normal'>: {value}</span></> : null}
          </p>
          {description ? <p className='truncate text-xs text-muted-foreground'>{description}</p> : null}
        </div>
      </div>
      {onClose ? (
        <Button type='button' variant='ghost' size='icon' onClick={onClose} aria-label='Close order panel' className='shrink-0'>
          <X className='size-4' />
        </Button>
      ) : null}
    </header>
  )
}
