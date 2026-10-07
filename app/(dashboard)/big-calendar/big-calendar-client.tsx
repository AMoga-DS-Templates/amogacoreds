'use client'

import { Settings } from 'lucide-react'

import { CalendarProvider, useCalendar } from '@/big-calendar/contexts/calendar-context'
import { ClientContainer } from '@/big-calendar/components/client-container'
import { ChangeBadgeVariantInput } from '@/big-calendar/components/change-badge-variant-input'
import { ChangeVisibleHoursInput } from '@/big-calendar/components/change-visible-hours-input'
import { ChangeWorkingHoursInput } from '@/big-calendar/components/change-working-hours-input'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import type { IEvent, IUser } from '@/big-calendar/interfaces'
import styles from './big-calendar.module.css'

function BigCalendarWorkspace() {
  const { view } = useCalendar()

  return (
    <div className={styles.calendarApp}>
      <main className='mx-auto flex min-h-screen w-full max-w-screen-2xl flex-col gap-4 px-4 py-4 sm:px-8'>
        <ClientContainer view={view} />

        <Accordion type='single' collapsible>
          <AccordionItem value='calendar-settings' className='border-none'>
            <AccordionTrigger className='flex-none gap-2 py-0 hover:no-underline'>
              <span className='flex items-center gap-2'>
                <Settings className='size-4' />
                <span className='text-base font-semibold'>Calendar settings</span>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className='mt-4 flex flex-col gap-6'>
                <ChangeBadgeVariantInput />
                <ChangeVisibleHoursInput />
                <ChangeWorkingHoursInput />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>
    </div>
  )
}

export default function BigCalendarPage({ events, users }: { events: IEvent[]; users: IUser[] }) {
  return (
    <CalendarProvider users={users} events={events}>
      <BigCalendarWorkspace />
    </CalendarProvider>
  )
}

