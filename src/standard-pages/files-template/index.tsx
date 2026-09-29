'use client'

import { OrderPanel } from '@/components/order-custom-components/order-panel'
import { FileExplorer, type FileExplorerFolder } from '@/components/base-ui/file-explorer'
import { UserFileCardsView } from '@/design-system'
import type { FileItemData } from '@/design-system/components/files/file-card-item'
import { useState } from 'react'

export interface FilesTemplateData {
  defaultExpandedFolderIds: string[]
  chat: FileExplorerFolder[]
  email: FileExplorerFolder[]
  files: FileItemData[]
}

export interface FilesTemplatePageProps {
  data: FilesTemplateData
}

/** Empty Files page scaffold with the shared custom order panel on the left. */
export function FilesTemplatePage({ data }: FilesTemplatePageProps) {
  const sourceFolders = [...data.chat, ...data.email]
  const foldersById = new Map(sourceFolders.map((folder) => [folder.id, folder]))
  const getRootId = (folder: FileExplorerFolder) => {
    let current = folder
    while (current.parentId) {
      const parent = foldersById.get(current.parentId)
      if (!parent) break
      current = parent
    }
    return current.id
  }
  const getFolderPath = (folder: FileExplorerFolder) => {
    const path: string[] = []
    let current: FileExplorerFolder | undefined = folder
    while (current) {
      path.unshift(current.name)
      current = current.parentId ? foldersById.get(current.parentId) : undefined
    }
    return path.join('/')
  }
  const getFilesForFolder = (folder: FileExplorerFolder) => {
    const rootId = getRootId(folder)
    return data.files.filter((file) => {
      const sameSection = !file.section || file.section === rootId
      const sameCategory = folder.level < 2 || file.category.toLowerCase() === folder.name.toLowerCase()
      return sameSection && sameCategory
    })
  }
  const folders = sourceFolders.map((folder) => {
    const matchingFiles = getFilesForFolder(folder)
    return { ...folder, fileCount: matchingFiles.length }
  })
  const [selectedFolder, setSelectedFolder] = useState<FileExplorerFolder | null>(folders[0] ?? null)
  return (
    <main className="relative flex h-svh max-h-svh min-h-0 w-full overflow-hidden bg-background">
      <aside className="flex h-full min-h-0 w-full max-w-md shrink-0 flex-col overflow-hidden border-r border-border bg-background">
        <div className="sticky top-0 z-30 shrink-0 bg-background">
          <OrderPanel
            className="h-auto"
            records={[]}
            approvedRecords={[]}
            counts={{
              all: data.files.length,
              action: data.files.filter((file) => file.requiresAction).length,
            }}
          tabs={[{ value: 'purchase-order', label: 'App Files' }]}
            showEmptyState={false}
            labels={{
              searchPlaceholder: 'Search App Files...',
            }}
          />
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto">
          <FileExplorer
            folders={folders}
            defaultExpandedFolderIds={data.defaultExpandedFolderIds}
            onSelectFolder={(folder) => setSelectedFolder(folder)}
          />
        </div>
      </aside>
      <section aria-label="Files workspace" className="min-w-0 flex-1 overflow-hidden bg-muted/10">
        {selectedFolder ? (
          <UserFileCardsView
            key={selectedFolder.id}
            className="h-full"
            folder={{
              ...selectedFolder,
              path: selectedFolder.path ?? getFolderPath(selectedFolder),
            } as any}
            files={getFilesForFolder(selectedFolder)}
            showCategoryFilters
            initialCategory={selectedFolder.level >= 2 ? selectedFolder.name : 'all'}
            onCategoryChange={(category) => {
              const rootId = getRootId(selectedFolder)
              const nextFolder = category === 'all'
                ? folders.find((folder) => folder.id === rootId)
                : folders.find(
                    (folder) =>
                      getRootId(folder) === rootId &&
                      folder.level >= 2 &&
                      folder.name.toLowerCase() === category.toLowerCase()
                  )
              if (nextFolder) setSelectedFolder(nextFolder)
            }}
          />
        ) : null}
      </section>
    </main>
  )
}

export default FilesTemplatePage
