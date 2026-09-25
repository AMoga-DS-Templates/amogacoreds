import { Button } from '@/components/ui/button'

export function PaginationBlock({ currentPage = 1, totalPages = 1, onPageChange }: { currentPage?: number; totalPages?: number; onPageChange?: (page: number) => void }) {
  const pages: Array<number | 'ellipsis'> = []
  if (totalPages <= 7) for (let page = 1; page <= totalPages; page += 1) pages.push(page)
  else { pages.push(1); if (currentPage > 3) pages.push('ellipsis'); for (let page = Math.max(2, currentPage - 1); page <= Math.min(totalPages - 1, currentPage + 1); page += 1) pages.push(page); if (currentPage < totalPages - 2) pages.push('ellipsis'); pages.push(totalPages) }
  return <div className='flex flex-wrap items-center justify-center gap-1'><Button variant='outline' size='sm' disabled={currentPage <= 1} onClick={() => onPageChange?.(currentPage - 1)}>Previous</Button>{pages.map((page, index) => page === 'ellipsis' ? <span key={`ellipsis-${index}`} className='px-2 text-muted-foreground'>…</span> : <Button key={page} variant={page === currentPage ? 'default' : 'outline'} size='sm' onClick={() => onPageChange?.(page)}>{page}</Button>)}<Button variant='outline' size='sm' disabled={currentPage >= totalPages} onClick={() => onPageChange?.(currentPage + 1)}>Next</Button></div>
}
