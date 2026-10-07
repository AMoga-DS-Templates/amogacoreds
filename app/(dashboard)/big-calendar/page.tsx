import BigCalendarClient from './big-calendar-client'
import { CALENDAR_ITEMS_MOCK, USERS_MOCK } from '@/big-calendar/mocks'

export const metadata = {
  title: 'Big Calendar',
}

export default function BigCalendarPage() {
  return <BigCalendarClient users={USERS_MOCK} events={CALENDAR_ITEMS_MOCK} />
}
