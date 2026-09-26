import type { ReactNode } from 'react'
import { Button } from '@/components/ui/button'

export function FollowUpItem({ label, text, onClick }: { label?: string; text?: string; onClick?: () => void }) { return <Button variant="outline" size="sm" className="h-7 w-fit max-w-full min-w-0 whitespace-normal px-2.5 py-1 text-xs" onClick={onClick}>{label ?? text}</Button> }
export function FollowUpBlock({ items = [], children }: { items?: Array<{ label?: string; text?: string; onClick?: () => void }>; children?: ReactNode }) { return <div className="flex w-full flex-row flex-wrap items-center gap-2">{items.length ? items.map((item, index) => <FollowUpItem key={index} {...item} />) : children}</div> }
