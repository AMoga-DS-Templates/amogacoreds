import { Download, Eye, FileSpreadsheet, FileText, FileType2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

function getIcon(fileType = '') { if (fileType === 'csv' || fileType === 'xlsx') return FileSpreadsheet; if (fileType === 'docx') return FileType2; return FileText }

export function DownloadViewCard({ fileName, fileType, url, title = 'Generated file', onView, onDownload }: { fileName?: string; fileType?: string; url?: string; title?: string; onView?: () => void; onDownload?: () => void }) {
  const Icon = getIcon(fileType)
  const name = fileName ?? title
  return <Card className='mt-3 rounded-2xl shadow-sm'><CardContent className='flex items-center gap-3 px-4 py-4'><div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-background'><Icon className='h-5 w-5 text-foreground' /></div><div className='min-w-0 flex-1'><p className='truncate text-sm font-semibold text-foreground'>{name}</p><p className='pt-0.5 text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground'>{fileType ?? 'FILE'}</p></div><div className='flex items-center gap-1'><Button type='button' variant='ghost' size='icon' className='h-8 w-8 rounded-full' onClick={onView} aria-label='View file' title='View'><Eye className='h-4 w-4' /></Button>{url ? <Button type='button' variant='ghost' size='icon' className='h-8 w-8 rounded-full' asChild><a href={url} download={name} aria-label='Download file' title='Download'><Download className='h-4 w-4' /></a></Button> : <Button type='button' variant='ghost' size='icon' className='h-8 w-8 rounded-full' onClick={onDownload} aria-label='Download file' title='Download'><Download className='h-4 w-4' /></Button>}</div></CardContent></Card>
}

export const DownloadViewCardBlock = DownloadViewCard
