'use client'

import type { ChangeEvent } from 'react'
import { Download, Eye, FileText, UploadCloud, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { OrderTemplateAttachment } from './order-types'

export interface OrderFileUploadProps {
  attachments: OrderTemplateAttachment[]
  onAddAttachments: (event: ChangeEvent<HTMLInputElement>) => void
  onRemoveAttachment: (attachment: OrderTemplateAttachment) => void
}

export function OrderFileUpload({ attachments, onAddAttachments, onRemoveAttachment }: OrderFileUploadProps) {
  return <div>
    <Button asChild variant='outline' className='h-auto min-h-36 w-full cursor-pointer flex-col gap-2 rounded-xl border-dashed border-primary text-sm text-muted-foreground transition hover:text-primary'>
      <label><UploadCloud className='size-6' /><span>Upload attachment</span><span className='text-xs'>Select one or more files</span><input type='file' multiple className='hidden' onChange={onAddAttachments} /></label>
    </Button>
    {attachments.length > 0 && <div className='mt-4 overflow-hidden rounded-lg border bg-background'>
      {attachments.map((attachment) => <div key={attachment.id} className='flex items-center justify-between gap-3 border-b p-3 last:border-b-0'>
        <div className='flex min-w-0 items-center gap-3'><div className='flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary'><FileText className='size-4' /></div><div className='min-w-0'><p className='truncate text-xs font-semibold'>{attachment.name}</p><p className='text-[10px] text-muted-foreground'>{attachment.type} Ã‚Â· {(attachment.size / 1024).toFixed(1)} KB</p></div></div>
        <div className='flex shrink-0 items-center gap-1'><Button type='button' variant='ghost' size='icon' className='size-8' title='View attachment' onClick={() => window.open(attachment.url, '_blank', 'noopener,noreferrer')}><Eye className='size-4' /></Button><Button asChild type='button' variant='ghost' size='icon' className='size-8 text-muted-foreground' title='Download attachment'><a href={attachment.url} download={attachment.name}><Download className='size-4' /></a></Button><Button type='button' variant='ghost' size='icon' className='size-8 text-muted-foreground hover:text-destructive' title='Remove attachment' onClick={() => onRemoveAttachment(attachment)}><X className='size-4' /></Button></div>
      </div>)}
    </div>}
  </div>
}


