import type { ReactNode } from 'react'
import { Button } from '@/components/ui/button'

export function Buttons({ buttons = [], direction = 'row', children }: { buttons?: Array<{ label?: string; text?: string; onClick?: () => void }>; direction?: 'row' | 'column'; children?: ReactNode }) {
  return <div className={`flex gap-2 ${direction === 'column' ? 'flex-col' : 'flex-row flex-wrap'}`}>{buttons.length ? buttons.map((item, index) => <Button key={index} onClick={item.onClick}>{item.label ?? item.text}</Button>) : children}</div>
}
