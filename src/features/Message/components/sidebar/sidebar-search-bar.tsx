import React from 'react'
import { Search, X, Mail, Upload, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CategoryFilterType, SectionMode } from '../../types/message.types'

interface SidebarSearchBarProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  isCollapsed?: boolean
  categoryFilter: CategoryFilterType
  sectionMode: SectionMode
  onComposeChange?: (composing: boolean) => void
  onUploadFileClick?: () => void
}

export function SidebarSearchBar({
  searchQuery,
  setSearchQuery,
  isCollapsed = false,
  categoryFilter,
  sectionMode,
  onComposeChange,
  onUploadFileClick,
}: SidebarSearchBarProps) {
  if (isCollapsed) {
    return (
      <div className='flex justify-center w-full'>
        {(categoryFilter === 'mail' || (!categoryFilter && sectionMode === 'mail')) && (
          <Button
            type='button'
            variant='default'
            size='icon'
            onClick={() => onComposeChange?.(true)}
            className='size-8 rounded-lg shadow-md shadow-primary/20'
            title='Compose New Email'
          >
            <Mail className='h-3.5 w-3.5' />
          </Button>
        )}
        {categoryFilter === 'vouchers' && (
          <Button
            type='button'
            variant='default'
            size='icon'
            onClick={() => onUploadFileClick?.()}
            className='size-8 rounded-lg shadow-md shadow-primary/20'
            title='Upload New File'
          >
            <Upload className='h-3.5 w-3.5' />
          </Button>
        )}
      </div>
    )
  }

  return (
    <div className='flex items-center gap-1.5 w-full'>
      <div className='relative min-w-0 flex-1'>
        <Search className='absolute top-1/2 left-2.5 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground/60' />
        <Input
          placeholder='Search...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='h-8 w-full rounded-md border-border bg-muted/10 pr-7 pl-8 text-xs focus-visible:ring-1 focus-visible:ring-ring'
        />
        {searchQuery && (
          <Button
            type='button'
            variant='ghost'
            size='icon'
            onClick={() => setSearchQuery('')}
            className='absolute top-1/2 right-1 size-6 -translate-y-1/2 rounded-full p-0 text-muted-foreground hover:bg-muted hover:text-foreground'
            aria-label='Clear search'
          >
            <X className='h-3 w-3' />
          </Button>
        )}
      </div>

      {/* Mail Section: New Compose Email Button */}
      {(categoryFilter === 'mail' || (!categoryFilter && sectionMode === 'mail')) && (
        <Button
          type='button'
          variant='default'
          size='sm'
          onClick={() => onComposeChange?.(true)}
          className='shrink-0 rounded-lg text-xs font-semibold shadow-md shadow-primary/20'
          title='Compose New Email'
        >
          <Mail className='h-3.5 w-3.5' />
          <span>New</span>
          <Plus className='h-3 w-3' />
        </Button>
      )}

      {/* File Section: Upload File Button */}
      {categoryFilter === 'vouchers' && (
        <Button
          type='button'
          variant='default'
          size='sm'
          onClick={() => onUploadFileClick?.()}
          className='shrink-0 rounded-lg text-xs font-semibold shadow-md shadow-primary/20'
          title='Upload New File'
        >
          <Upload className='h-3.5 w-3.5' />
          <span>Upload</span>
          <Plus className='h-3 w-3' />
        </Button>
      )}
    </div>
  )
}
