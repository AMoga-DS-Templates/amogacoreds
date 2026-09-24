'use client'

import { Button } from '@/components/ui/button'

export type OrderTemplateStep = 'order' | 'items' | 'view' | 'pdf'

export const ORDER_STEP_ITEMS: Array<[OrderTemplateStep, string]> = [
  ['order', 'Purchase Order'],
  ['items', 'Add Items'],
  ['view', 'View'],
  ['pdf', 'PDF View'],
]

interface OrderTabsProps {
  step: OrderTemplateStep
  onStepChange: (step: OrderTemplateStep) => void
  items?: Array<[OrderTemplateStep, string]>
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
      className={`relative h-auto min-h-[58px] w-28 flex-none rounded-none border-b-2 px-2 text-sm font-semibold transition hover:bg-transparent sm:w-auto sm:min-w-0 sm:flex-1 ${isActive ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
    >
      <span className={`flex size-6 items-center justify-center rounded-full text-xs ${isActive ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
        {index + 1}
      </span>
      <span className='truncate'>{label}</span>
    </Button>
  )
}

export function OrderTabs({ step, onStepChange, items = ORDER_STEP_ITEMS }: OrderTabsProps) {
  return (
    <nav className='sticky top-0 z-30 flex shrink-0 overflow-x-auto border-b bg-background px-5 shadow-sm' aria-label='Order steps'>
      {items.map(([value, label], index) => (
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
