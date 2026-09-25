import type { ReactNode } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Archive, ChartColumn, MapPin, MessageCircle, MoreVertical, Pencil, Plus, ShoppingCart, Trash2 } from 'lucide-react'
import { cn } from '@/lib/utils'

type ProductCardProps = {
  name?: string; title?: string; imageSrc?: string; image?: string; price?: string | number
  regularPrice?: string; description?: string; stockQuantity?: string; stockStatus?: string
  addLabel?: string; children?: ReactNode
}

export function ProductCard({ name, title, imageSrc, image, price = '', regularPrice, description, stockQuantity, stockStatus, addLabel = 'Add', children }: ProductCardProps) {
  const productName = name ?? title ?? 'Product'
  const imageUrl = imageSrc ?? image
  const cleanDescription = description?.replace(/<[^>]*>/g, '').trim()
  return <Card className='w-full max-w-[800px] rounded-2xl border p-0 shadow-none'>
    <CardContent className='flex min-h-[140px] flex-col gap-4 p-4 sm:flex-row sm:items-start'>
      <div className='flex h-32 w-full shrink-0 items-center justify-center overflow-hidden rounded-lg bg-muted/30 sm:w-32'>{imageUrl ? <img src={imageUrl} alt={productName} className='h-full w-full object-contain' /> : <span className='text-xs text-muted-foreground'>No Image</span>}</div>
      <div className='flex min-w-0 flex-1 flex-col justify-between gap-4'>
        <div className='min-w-0'><div className='truncate text-base font-medium text-foreground' title={productName}>{productName}</div><div className='mt-2 flex flex-wrap items-center gap-2'>{regularPrice ? <span className='text-sm text-muted-foreground line-through'>{regularPrice}</span> : null}<span className='text-lg font-bold text-foreground'>{price}</span></div>{cleanDescription ? <p className='mt-1 line-clamp-2 text-sm text-muted-foreground'>{cleanDescription}</p> : null}{stockQuantity || stockStatus ? <div className='mt-3 flex flex-wrap items-center gap-2'>{stockQuantity ? <span className='rounded border bg-muted px-3 py-1 text-xs font-medium'>{stockQuantity}</span> : null}{stockStatus ? <span className={cn('rounded border px-3 py-1 text-xs capitalize', stockStatus.toLowerCase().includes('out') ? 'border-red-200 text-red-700 dark:border-red-900 dark:text-red-400' : 'text-muted-foreground')}>{stockStatus}</span> : null}</div> : null}</div>
        <div className='flex items-center justify-end gap-2'><Button aria-label={addLabel} className='rounded-lg' size='icon'><Plus className='h-4 w-4' /></Button><Button aria-label='View location' className='rounded-lg' size='icon' variant='ghost'><MapPin className='h-4 w-4' /></Button><DropdownMenu><DropdownMenuTrigger asChild><Button aria-label='More product actions' className='rounded-lg' size='icon' variant='ghost'><MoreVertical className='h-4 w-4' /></Button></DropdownMenuTrigger><DropdownMenuContent align='end'><DropdownMenuItem><MessageCircle className='mr-2 h-4 w-4' />Chat</DropdownMenuItem><DropdownMenuItem><ChartColumn className='mr-2 h-4 w-4' />Chart</DropdownMenuItem><DropdownMenuItem><ShoppingCart className='mr-2 h-4 w-4' />Orders</DropdownMenuItem><DropdownMenuItem><Pencil className='mr-2 h-4 w-4' />Edit</DropdownMenuItem><DropdownMenuItem><Archive className='mr-2 h-4 w-4' />Archive</DropdownMenuItem><DropdownMenuItem className='text-red-500'><Trash2 className='mr-2 h-4 w-4' />Delete</DropdownMenuItem></DropdownMenuContent></DropdownMenu></div>
        {children}
      </div>
    </CardContent>
  </Card>
}
