import React from 'react'
import { Calendar, Mail, MessageSquare, Sparkles, Bot, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { cn } from '@/lib/utils'
import { CategoryFilterType } from '../../types/message.types'

interface CategoryToolbarProps {
  categoryFilter: CategoryFilterType
  onSelectTasks: () => void
  onSelectMail: () => void
  onSelectChat: () => void
  onSelectAi: () => void
  onSelectAiAssistant: () => void
  onSelectVouchers: () => void
}

type ToolbarCategory = Exclude<CategoryFilterType, 'notification'>

const buttonClass = 'flex min-w-[34px] flex-1 cursor-pointer rounded-lg border-0 px-0 py-1.5 transition-all duration-200 hover:bg-accent hover:text-accent-foreground active:scale-95'

export function CategoryToolbar({
  categoryFilter,
  onSelectTasks,
  onSelectMail,
  onSelectChat,
  onSelectAi,
  onSelectAiAssistant,
  onSelectVouchers,
}: CategoryToolbarProps) {
  const handlers: Record<ToolbarCategory, () => void> = {
    tasks: onSelectTasks,
    mail: onSelectMail,
    chat: onSelectChat,
    ai: onSelectAi,
    'ai-assistant': onSelectAiAssistant,
    vouchers: onSelectVouchers,
  }

  return (
    <ToggleGroup
      type='single'
      value={categoryFilter}
      onValueChange={(value) => {
        if (value && value in handlers) handlers[value as ToolbarCategory]()
      }}
      aria-label='Message categories'
      className='flex w-full min-w-0 max-w-full select-none justify-between gap-0.5 overflow-x-auto rounded-xl border-0 bg-muted/20 p-1 scrollbar-none sm:gap-1'
    >
      <ToggleGroupItem value='tasks' asChild className={cn('flex min-w-[34px] flex-1 rounded-lg px-0', categoryFilter === 'tasks' && 'bg-accent text-accent-foreground font-semibold shadow-2xs')}>
        <Button type='button' variant='ghost' size='icon' aria-label='Tasks / Kanban Board' title='Tasks / Kanban Board' className={buttonClass}>
          <Calendar className='h-4 w-4' />
        </Button>
      </ToggleGroupItem>

      <ToggleGroupItem value='mail' asChild className={cn('flex min-w-[34px] flex-1 rounded-lg px-0', categoryFilter === 'mail' && 'bg-accent text-accent-foreground font-semibold shadow-2xs')}>
        <Button type='button' variant='ghost' size='icon' aria-label='Mail Items' title='Mail Items' className={buttonClass}>
          <Mail className='h-4 w-4' />
        </Button>
      </ToggleGroupItem>

      <ToggleGroupItem value='chat' asChild className={cn('flex min-w-[34px] flex-1 rounded-lg px-0', categoryFilter === 'chat' && 'bg-accent text-accent-foreground font-semibold shadow-2xs')}>
        <Button type='button' variant='ghost' size='icon' aria-label='Chats & Direct Messages' title='Chats & Direct Messages' className={buttonClass}>
          <MessageSquare className='h-4 w-4' />
        </Button>
      </ToggleGroupItem>

      <ToggleGroupItem value='ai' asChild className={cn('flex min-w-[34px] flex-1 rounded-lg px-0', categoryFilter === 'ai' && 'bg-accent text-accent-foreground font-semibold shadow-2xs')}>
        <Button type='button' variant='ghost' size='icon' aria-label='AI Chat' title='AI Chat' className={buttonClass}>
          <Sparkles className='h-4 w-4' />
        </Button>
      </ToggleGroupItem>

      <ToggleGroupItem value='ai-assistant' asChild className={cn('flex min-w-[34px] flex-1 rounded-lg px-0', categoryFilter === 'ai-assistant' && 'bg-accent text-accent-foreground font-semibold shadow-2xs')}>
        <Button type='button' variant='ghost' size='icon' aria-label='AI Assistant' title='AI Assistant' className={buttonClass}>
          <Bot className='h-4 w-4' />
        </Button>
      </ToggleGroupItem>

      <ToggleGroupItem value='vouchers' asChild className={cn('flex min-w-[34px] flex-1 rounded-lg px-0', categoryFilter === 'vouchers' && 'bg-accent text-accent-foreground font-semibold shadow-2xs')}>
        <Button type='button' variant='ghost' size='icon' aria-label='Vouchers' title='Vouchers' className={buttonClass}>
          <FileText className='h-4 w-4' />
        </Button>
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
