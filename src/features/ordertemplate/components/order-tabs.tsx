'use client'

import { Button } from '@/components/ui/button'

export type OrderTemplateStep = 'order' | 'items' | 'view' | 'pdf'

const STEP_ITEMS: Array<[OrderTemplateStep, string]> = [
  ['order', 'Order'],
  ['items', 'Add Items'],
  ['view', 'View'],
  ['pdf', 'PDF View'],
]

interface OrderTabsProps {
  step: OrderTemplateStep
  onStepChange: (step: OrderTemplateStep) => void
}

function OrderTemplateTab({
  step,
  value,
  label,
  index,
  onStepChange,
}: {
  step: OrderTemplateStep
  value: OrderTemplateStep
  label: string
  index: number
  onStepChange: (step: OrderTemplateStep) => void
}) {
  const isActive = step === value

  return (
    <Button
      type='button'
      variant='ghost'
      onClick={() => onStepChange(value)}
      className={`relative h-auto min-h-[58px] min-w-0 flex-1 rounded-none border-b-2 px-2 text-sm font-semibold transition hover:bg-transparent ${isActive ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
    >
      <span className={`flex size-6 items-center justify-center rounded-full text-xs ${isActive ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
        {index + 1}
      </span>
      <span className='truncate'>{label}</span>
    </Button>
  )
}

export function OrderTabs({ step, onStepChange }: OrderTabsProps) {
  return (
    <nav className='sticky top-0 z-30 flex shrink-0 border-b bg-background px-5 shadow-sm' aria-label='Order steps'>
      {STEP_ITEMS.map(([value, label], index) => (
        <OrderTemplateTab
          key={value}
          step={step}
          value={value}
          label={label}
          index={index}
          onStepChange={onStepChange}
        />
      ))}
    </nav>
  )
}
