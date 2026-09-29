import { useState } from 'react'
import { ChevronDown, ChevronRight, Folder, FolderOpen } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface FileExplorerFolder {
  id: string
  name: string
  path?: string
  category?: string
  fileCount: number
  parentId?: string | null
  level: number
}

export interface FileExplorerProps<T extends FileExplorerFolder> {
  folders: T[]
  selectedFolderId?: string | null
  expandedFolderIds?: Set<string>
  defaultExpandedFolderIds?: Iterable<string>
  showHeader?: boolean
  isSearching?: boolean
  searchQuery?: string
  onToggleExpand?: (folderId: string, event?: React.MouseEvent) => void
  onSelectFolder: (folder: T) => void
  className?: string
}

/** Compact, nested storage-folder tree used by file tabs and custom message layouts. */
export function FileExplorer<T extends FileExplorerFolder>({
  folders,
  selectedFolderId,
  expandedFolderIds: controlledExpandedFolderIds,
  defaultExpandedFolderIds = [],
  showHeader = true,
  isSearching = false,
  searchQuery = '',
  onToggleExpand,
  onSelectFolder,
  className,
}: FileExplorerProps<T>) {
  const [internalExpandedFolderIds, setInternalExpandedFolderIds] = useState(
    () => new Set(defaultExpandedFolderIds)
  )
  const expandedFolderIds = controlledExpandedFolderIds ?? internalExpandedFolderIds
  const isControlled = controlledExpandedFolderIds !== undefined

  const handleToggleExpand = (folderId: string, event?: React.MouseEvent) => {
    if (!isControlled) {
      setInternalExpandedFolderIds((previous) => {
        const next = new Set(previous)
        if (next.has(folderId)) next.delete(folderId)
        else next.add(folderId)
        return next
      })
    }
    onToggleExpand?.(folderId, event)
  }

  const visibleFolders = folders.filter((folder) => {
    if (isSearching) return true
    if (folder.level === 0) return true
    if (folder.level === 1) return expandedFolderIds.has(folder.parentId || '')
    return (
      expandedFolderIds.has(folder.parentId || '') &&
      folders.some(
        (parent) => parent.id === folder.parentId && expandedFolderIds.has(parent.parentId || parent.id)
      )
    )
  })

  return (
    <section aria-label="File Explorer" className={cn('w-full', className)}>
      {showHeader && (
        <div className="flex items-center justify-between px-3 pt-2 pb-0.5">
          <div className="flex items-center gap-1.5">
            <FolderOpen className="h-3 w-3 shrink-0 text-indigo-500" aria-hidden="true" />
            <span className="text-[10px] font-semibold tracking-wide text-muted-foreground/60 uppercase">
              File Explorer
            </span>
          </div>
          <span className="text-[10px] text-muted-foreground/50">{folders.length}</span>
        </div>
      )}

      {visibleFolders.length === 0 && isSearching ? (
        <div className="px-3 py-4 text-center text-xs text-muted-foreground">
          No folders matching &quot;{searchQuery}&quot;
        </div>
      ) : (
        <div className="flex flex-col gap-0.5 px-2 py-1">
          {visibleFolders.map((folder) => {
            const hasChildren = folder.level < 2
            const isExpanded = expandedFolderIds.has(folder.id)
            const isActive = selectedFolderId === folder.id
            const isRoot = folder.level === 0
            const isUserFolder = folder.level === 1

            return (
              <div
                key={folder.id}
                id={`file-explorer-folder-${folder.id}`}
                role="button"
                tabIndex={0}
                onClick={() => {
                  if (hasChildren) {
                    handleToggleExpand(folder.id)
                  }
                  onSelectFolder(folder)
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    if (hasChildren) handleToggleExpand(folder.id)
                    onSelectFolder(folder)
                  }
                }}
                className={cn(
                  'group relative flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-2 py-1.5 transition-all duration-200 select-none',
                  isRoot && 'my-1 border-border/50 bg-muted/20 font-bold',
                  isUserFolder && 'my-0.5 ml-3 border-border/40',
                  !isRoot && !isUserFolder && 'my-0.5 ml-6 border-transparent',
                  'bg-card hover:border-indigo-200/40 hover:bg-indigo-500/5',
                  isActive && 'border-indigo-300 bg-indigo-500/15 text-indigo-600 shadow-2xs dark:border-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-400'
                )}
              >
                {isActive && <div className="absolute top-1 bottom-1 left-0 w-1 rounded-l-full bg-indigo-600" />}

                <div className="flex min-w-0 flex-1 items-center gap-1.5">
                  {hasChildren && (
                    <button
                      type="button"
                      aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${folder.name}`}
                      onClick={(event) => {
                        event.stopPropagation()
                        handleToggleExpand(folder.id, event)
                      }}
                      className="flex h-4 w-4 shrink-0 items-center justify-center rounded text-muted-foreground hover:bg-muted hover:text-foreground"
                    >
                      {isExpanded ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
                    </button>
                  )}
                  <span className={cn(
                    'flex shrink-0 items-center justify-center rounded-lg text-indigo-600 transition-colors dark:text-indigo-400',
                    isRoot && 'h-6 w-6 border border-indigo-200/40 bg-indigo-500/10',
                    isUserFolder && 'h-5.5 w-5.5 border border-indigo-200/30 bg-indigo-500/5',
                    !isRoot && !isUserFolder && 'h-5 w-5'
                  )}>
                    {isExpanded ? <FolderOpen className="h-3.5 w-3.5" /> : <Folder className="h-3.5 w-3.5" />}
                  </span>
                  <span className={cn(
                    'truncate text-foreground',
                    isRoot ? 'text-xs font-bold' : isUserFolder ? 'text-[11px] font-semibold' : 'text-[11px] font-medium',
                    isActive && 'text-indigo-600 dark:text-indigo-400'
                  )}>
                    {folder.name}
                  </span>
                </div>

                <span className={cn(
                  'flex h-4 min-w-4 items-center justify-center rounded-full px-1.5 font-mono text-[10px]',
                  isActive ? 'bg-indigo-600 text-white' : 'bg-muted text-muted-foreground group-hover:bg-indigo-500/10 group-hover:text-indigo-600'
                )}>
                  {folder.fileCount}
                </span>
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}
