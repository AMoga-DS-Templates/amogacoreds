'use client'

import { useState } from 'react'

import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { baseComponents, type BaseComponentName } from './base-components'
import { BaseComponentPreview } from './component-previews'

// Re-export these from the original module path used by the gallery registry.
export { baseComponents } from './base-components'
export { BaseComponentPreview } from './component-previews'

function componentImportName(name: BaseComponentName) {
  return name.replace(/\s+/g, '')
}

export default function BaseComponentsGallery({
  initialComponent,
}: { initialComponent?: BaseComponentName } = {}) {
  const [selected, setSelected] = useState<BaseComponentName>(
    initialComponent ?? baseComponents[0][0]
  )
  const component = baseComponents.find(([name]) => name === selected) ?? baseComponents[0]
  const [name, file] = component
  const importName = componentImportName(name)

  return (
    <div className='flex min-h-[620px] w-full flex-col gap-4 p-4 md:flex-row'>
      {/* Component navigation */}
      <aside className='w-full shrink-0 space-y-3 md:w-56'>
        <div className='font-semibold'>UI Components</div>

        <Select value={selected} onValueChange={(value) => setSelected(value as BaseComponentName)}>
          <SelectTrigger className='w-full md:hidden'>
            <SelectValue placeholder='Select component' />
          </SelectTrigger>
          <SelectContent>
            {baseComponents.map(([item]) => <SelectItem key={item} value={item}>{item}</SelectItem>)}
          </SelectContent>
        </Select>

        <div className='max-h-[520px] space-y-1 overflow-y-auto pr-1'>
          {baseComponents.map(([item]) => (
            <button
              key={item}
              type='button'
              onClick={() => setSelected(item)}
              className={`w-full rounded-md px-3 py-2 text-left text-sm transition ${selected === item ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}
            >
              {item}
            </button>
          ))}
        </div>
      </aside>

      {/* Component detail panel */}
      <section className='min-w-0 flex-1 rounded-xl border bg-card p-4 sm:p-6'>
        <div className='mb-5 flex items-center justify-between gap-3'>
          <div>
            <h2 className='text-lg font-semibold'>{name}</h2>
            <p className='text-xs text-muted-foreground'>components/ui/{file}</p>
          </div>
          <Badge variant='outline'>Base UI</Badge>
        </div>

        <Tabs defaultValue='ui'>
          <TabsList variant='line' className='mt-3 h-auto gap-6 rounded-none bg-transparent p-0'>
            <TabsTrigger value='ui' className='flex-none rounded-none px-0 pb-2 pt-1'>Radix UI</TabsTrigger>
            <TabsTrigger value='code' className='flex-none rounded-none px-0 pb-2 pt-1'>Code</TabsTrigger>
          </TabsList>
          <TabsContent value='ui' className='pt-6'><BaseComponentPreview name={name} /></TabsContent>
          <TabsContent value='code' className='pt-6'>
            <pre className='overflow-x-auto rounded-lg bg-muted p-4 text-xs'>
              <code>{`import { ${importName} } from '@/components/ui/${file.replace('.tsx', '')}'`}</code>
            </pre>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  )
}

