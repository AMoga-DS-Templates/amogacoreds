'use client'

export function OrderTableTopBar({ title = 'Order', description = 'View and filter order records.' }: { title?: string; description?: string }) {
  return <div className='min-w-0 border-b pb-4'><h1 className='break-words text-xl font-semibold sm:text-2xl'>{title}</h1><p className='break-words text-sm text-muted-foreground'>{description}</p></div>
}


