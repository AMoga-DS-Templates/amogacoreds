import type { ReactNode } from 'react'

export function CodeBlock({ code, language, title, children }: { code?: string; language?: string; title?: string; children?: ReactNode }) {
  return <div className='rounded-lg border bg-muted'>{title ? <div className='border-b px-4 py-2 text-xs font-medium text-muted-foreground'>{title}{language ? <span className='ml-2 opacity-60'>{language}</span> : null}</div> : null}<pre className='overflow-x-auto p-4'><code className='font-mono text-sm'>{code ?? children}</code></pre></div>
}
