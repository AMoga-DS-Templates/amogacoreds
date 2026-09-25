import type { ReactNode } from 'react'
import { Badge } from '@/components/ui/badge'

export type TagProps = { text?: string; label?: string; variant?: 'default' | 'secondary' | 'destructive' | 'outline' }
export function Tag({ text, label, children }: TagProps & { children?: ReactNode }) { return <Badge variant='secondary'>{text ?? label ?? children}</Badge> }
export function TagBlock({ tags = [], children }: { tags?: Array<string | TagProps>; children?: ReactNode }) { return <div className='flex flex-wrap gap-1.5'>{tags.length ? tags.map((tag, index) => typeof tag === 'string' ? <Badge key={index} variant='secondary'>{tag}</Badge> : <Tag key={index} {...tag} />) : children}</div> }
