import { Copy, Flag, ThumbsDown, ThumbsUp, Volume2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function OrderCardActions() {
  return <div className='flex items-center gap-1 border-t pt-2 text-muted-foreground'>
    {[['Copy order', Copy], ['Flag order', Flag], ['Like order', ThumbsUp], ['Dislike order', ThumbsDown], ['Mute order', Volume2]].map(([label, Icon]) => <Button key={String(label)} type='button' variant='ghost' size='icon' className='size-7' title={String(label)} aria-label={String(label)}><Icon className='size-3.5' /></Button>)}
  </div>
}
