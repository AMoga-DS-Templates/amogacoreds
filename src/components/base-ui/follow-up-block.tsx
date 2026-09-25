import type { ReactNode } from 'react'
import { Button } from '@/components/ui/button'

export function FollowUpItem({ label, text, onClick }: { label?: string; text?: string; onClick?: () => void }) { return <Button variant="outline" size="sm" className="h-auto px-3 py-1.5 text-xs" onClick={onClick}>{label ?? text}</Button> }
export function FollowUpBlock({ items = [], children }: { items?: Array<{ label?: string; text?: string; onClick?: () => void }>; children?: ReactNode }) { return <div className="flex flex-wrap gap-2">{items.length ? items.map((item, index) => <FollowUpItem key={index} {...item} />) : children}</div> }
