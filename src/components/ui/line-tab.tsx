'use client'

import { TabsList, TabsTrigger } from '@/components/ui/tabs'

const TABS = [
  { value: 'profile', label: 'Profile' },
  { value: 'files', label: 'Files' },
  { value: 'chat', label: 'Chat' },
  { value: 'ai', label: 'AI API' },
  { value: 'links', label: 'Email' },
  { value: 'email-files', label: 'Email Files' },
  { value: 'auth', label: 'Auth' },
  { value: 'theme', label: 'Theme' },
] as const

const TAB_TRIGGER_CLASS =
  'h-auto rounded-none border-0 border-b-2 border-transparent bg-transparent mx-1 px-0 pt-0 pb-2 shadow-none after:hidden hover:bg-transparent data-[state=active]:border-primary data-[state=active]:font-semibold data-[state=active]:shadow-none dark:data-[state=active]:border-x-transparent dark:data-[state=active]:border-t-transparent dark:data-[state=active]:border-b-primary dark:data-[state=active]:shadow-none text-xs whitespace-nowrap'

export function LineTab() {
  return (
    <div className='w-full overflow-x-auto pb-2 mb-2 lg:mb-4 shrink-0 no-scrollbar'>
      <TabsList variant='line' className='h-auto gap-4 sm:gap-6 bg-transparent p-0 shadow-none justify-start flex w-max min-w-full rounded-none'>
        {TABS.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value} className={TAB_TRIGGER_CLASS}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </div>
  )
}
