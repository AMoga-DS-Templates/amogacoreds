'use client'

import { useEffect, useRef, useState } from 'react'
import { RotateCw } from 'lucide-react'
import { ViewerClient } from '@zrimo/viewer'
import '@zrimo/viewer/styles.css'

export interface DocumentFile {
  id: string
  name: string
  type: 'pdf' | 'text' | 'doc' | 'ppt' | 'csv' | 'excel' | 'image' | 'video' | 'code' | 'unsupported'
  sourceId?: number
  url?: string
  directUrl?: boolean
  path?: string
  content?: string
  cacheKey?: string
  fileApiBase?: string
}

const getFileSrc = (file: DocumentFile) => {
  if (file.path) return `${file.fileApiBase ?? '/api/myfiles'}?path=${encodeURIComponent(file.path)}`
  if (file.url) return file.directUrl ? file.url : `${file.fileApiBase ?? '/api/myfiles'}?url=${encodeURIComponent(file.url)}`
  return null
}

export function ZrimoViewer({ file }: { file: DocumentFile }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const sourceUrl = getFileSrc(file)
    if (!sourceUrl) {
      setLoading(false)
      return
    }

    let cancelled = false
    let client: ReturnType<typeof ViewerClient.create> | undefined
    let viewer: Awaited<ReturnType<NonNullable<typeof client>['createViewer']>> | undefined
    let loadPromise: Promise<void> | undefined

    const load = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await fetch(sourceUrl, { cache: 'no-store' })
        if (!response.ok) throw new Error(`Unable to load file (${response.status})`)
        const blob = await response.blob()
        if (cancelled || !containerRef.current) return
        const documentFile = new File([blob], file.name, { type: blob.type || 'application/pdf' })
        client = ViewerClient.create({ assetBaseUrl: new URL('/zrimo/', window.location.href) })
        viewer = client.createViewer({ container: containerRef.current, ui: true, fit: 'width' })
        await viewer.load(documentFile, { fileName: documentFile.name })
      } catch (reason) {
        if (!cancelled) setError(reason instanceof Error ? reason.message : 'Unable to preview file.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    loadPromise = load()
    return () => {
      cancelled = true
      void (async () => {
        try { await loadPromise } catch { /* viewer load error is shown above */ }
        try { await viewer?.destroy() } catch { /* viewer already disposed */ }
        try { await client?.destroy() } catch { /* client already disposed */ }
      })()
    }
  }, [file.id, file.name, file.path, file.url, file.sourceId, file.cacheKey, file.type])

  const rotate = () => {
    setRotation((current) => {
      const next = (current + 90) % 360
      const viewport = containerRef.current?.querySelector<HTMLElement>('.zrimo-ui__viewport')
      if (viewport) {
        viewport.style.transform = `rotate(${next}deg)`
        viewport.style.transformOrigin = 'center center'
      }
      return next
    })
  }

  if (!getFileSrc(file)) return <div className='flex h-full items-center justify-center text-sm text-destructive'>Unable to access this file.</div>
  if (error) return <div className='flex h-full items-center justify-center p-6 text-sm text-destructive'>{error}</div>

  return <div className='relative h-full min-h-[600px] w-full overflow-hidden'>
    <div ref={containerRef} className='h-full min-h-[600px] w-full' />
    <button type='button' onClick={rotate} disabled={loading} aria-label='Rotate document' title={`Rotate document (${rotation}°)`} className='absolute right-3 top-14 z-20 flex size-9 items-center justify-center rounded-md border bg-background text-foreground shadow-sm hover:bg-accent disabled:opacity-50'><RotateCw className='size-4' /></button>
    {loading ? <div className='absolute inset-0 z-10 flex items-center justify-center bg-background text-sm text-muted-foreground'>Loading document…</div> : null}
  </div>
}

export default ZrimoViewer
