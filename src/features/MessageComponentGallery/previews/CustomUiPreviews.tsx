'use client'

import {
  AlertDialogBlock,
} from '@/components/base-ui/alert-dialog-block'
import { Buttons } from '@/components/base-ui/buttons'
import { CalendarBlock } from '@/components/base-ui/calendar-block'
import { CardHeader } from '@/components/base-ui/card-header'
import { CheckBoxGroup } from '@/components/base-ui/checkbox-group'
import { ChatFileCard } from '@/components/base-ui/chat-file-card'
import { CodeBlock } from '@/components/base-ui/code-block'
import { DialogBlock } from '@/components/base-ui/dialog-block'
import { DownloadViewCard } from '@/components/base-ui/download-view-card'
import { DrawerBlock } from '@/components/base-ui/drawer-block'
import { FollowUpBlock } from '@/components/base-ui/follow-up-block'
import { FormControl } from '@/components/base-ui/form-control'
import { HorizontalAlternateTimeline } from '@/components/base-ui/HorizontalAlternateTimeline'
import { Image } from '@/components/base-ui/image'
import { MarkDownRenderer } from '@/components/base-ui/markdown-renderer'
import { PaginationBlock } from '@/components/base-ui/pagination-block'
import { ProductCard } from '@/components/base-ui/product-card'
import { StatswithBadges } from '@/components/base-ui/StatswithBadges'
import { StatswithBorders } from '@/components/base-ui/StatswithBorders'
import { StatswithCardLayout } from '@/components/base-ui/StatswithCardLayout'
import { StatswithCircularProgress } from '@/components/base-ui/StatswithCircularProgress'
import { StatswithLinks } from '@/components/base-ui/StatswithLinks'
import { StatswithMap } from '@/components/base-ui/StatswithMap'
import { StatswithStatus } from '@/components/base-ui/StatswithStatus'
import { StatswithTrending } from '@/components/base-ui/StatswithTrending'
import { SwitchGroup } from '@/components/base-ui/switch-group'
import { TablewithAccordion } from '@/components/base-ui/TablewithAccordion'
import { TagBlock } from '@/components/base-ui/tag'
import { TextContent } from '@/components/base-ui/text-content'
import { Blockquote, Heading, InlineCode } from '@/components/base-ui/typography'
import { VerticalTimeline } from '@/components/base-ui/verticleTimeline'
import { Input } from '@/components/ui/input'

const summary = [
  { name: 'Revenue', value: '$24,800', change: '+12%' },
  { name: 'Orders', value: '1,248', change: '+8%' },
  { name: 'Customers', value: '892', change: '+5%' },
  { name: 'Returns', value: '24', change: '-2%' },
]

const statusSummary = summary.map((item, index) => ({
  ...item,
  status: index === 3 ? 'Review' : 'Healthy',
}))

const badgeSummary = summary.map((item) => ({ ...item, badge: 'Live' }))

const progressSummary = summary.map((item, index) => ({
  ...item,
  percentage: [78, 64, 91, 32][index],
}))

const cardSummary = summary.map((item) => ({
  ...item,
  description: 'Compared with the previous period',
}))

const imageSrc =
  'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22480%22 height=%22240%22 viewBox=%220 0 480 240%22%3E%3Crect width=%22480%22 height=%22240%22 rx=%2224%22 fill=%22%23e2e8f0%22/%3E%3Ccircle cx=%22120%22 cy=%22120%22 r=%2252%22 fill=%22%2364758b%22/%3E%3Cpath d=%22M180 176 270 82l70 58 48-38 64 74H180Z%22 fill=%22%2394a3b8%22/%3E%3C/svg%3E'

export type CustomUiComponentName =
  | 'AlertDialogBlock'
  | 'Buttons'
  | 'CalendarBlock'
  | 'CardHeader'
  | 'CheckBoxGroup'
  | 'ChatFileCard'
  | 'CodeBlock'
  | 'DialogBlock'
  | 'DownloadViewCard'
  | 'DrawerBlock'
  | 'FollowUpBlock'
  | 'FormControl'
  | 'HorizontalAlternateTimeline'
  | 'Image'
  | 'MarkDownRenderer'
  | 'PaginationBlock'
  | 'ProductCard'
  | 'StatswithBadges'
  | 'StatswithBorders'
  | 'StatswithCardLayout'
  | 'StatswithCircularProgress'
  | 'StatswithLinks'
  | 'StatswithMap'
  | 'StatswithStatus'
  | 'StatswithTrending'
  | 'SwitchGroup'
  | 'TablewithAccordion'
  | 'TagBlock'
  | 'TextContent'
  | 'Typography'
  | 'VerticalTimeline'

export function CustomUiPreview({ component }: { component: CustomUiComponentName }) {
  switch (component) {
    case 'AlertDialogBlock':
      return <AlertDialogBlock title='Delete project' trigger='Open alert'>This action cannot be undone.</AlertDialogBlock>
    case 'Buttons':
      return <Buttons buttons={[{ label: 'Save' }, { label: 'Cancel' }]} />
    case 'CalendarBlock':
      return <CalendarBlock mode='single' selected={new Date(2026, 8, 25)} />
    case 'CardHeader':
      return <div className='w-full max-w-md rounded-lg border bg-card'><CardHeader title='Project overview' description='Track the latest project activity.' /></div>
    case 'CheckBoxGroup':
      return <CheckBoxGroup items={[{ label: 'Email alerts', value: 'email' }, { label: 'Weekly digest', value: 'weekly' }]} values={['email']} />
    case 'ChatFileCard':
      return <ChatFileCard title='Quarterly-report.pdf' subtitle='PDF · 2.4 MB' />
    case 'CodeBlock':
      return <CodeBlock language='tsx' code="<CustomUiPreview component='CodeBlock' />" />
    case 'DialogBlock':
      return <DialogBlock title='Component details' trigger='Open dialog'>This is a reusable dialog block.</DialogBlock>
    case 'DownloadViewCard':
      return <DownloadViewCard fileName='Quarterly-report.pdf' fileType='pdf' url='data:application/pdf;base64,' />
    case 'DrawerBlock':
      return <DrawerBlock title='Filters' trigger='Open drawer'>Drawer content goes here.</DrawerBlock>
    case 'FollowUpBlock':
      return <FollowUpBlock items={[{ label: 'Show details' }, { label: 'Ask another question' }]} />
    case 'FormControl':
      return <FormControl label='Workspace name' required><Input placeholder='My workspace' /></FormControl>
    case 'HorizontalAlternateTimeline':
      return <HorizontalAlternateTimeline items={[{ title: 'Created', description: 'Project created', date: 'Today' }, { title: 'Review', description: 'Team review', date: 'Tomorrow' }, { title: 'Launch', description: 'Release planned', date: 'Friday' }]} />
    case 'Image':
      return <Image src={imageSrc} alt='Sample illustration' />
    case 'MarkDownRenderer':
      return <MarkDownRenderer text={'## Custom UI\n\nMarkdown with **bold** text and a [link](https://example.com).'} />
    case 'PaginationBlock':
      return <PaginationBlock currentPage={2} totalPages={8} />
    case 'ProductCard':
      return <ProductCard name='Design system kit' price='$49' regularPrice='$69' stockQuantity='24 in stock' stockStatus='Available' description='A reusable UI component collection.' imageSrc={imageSrc} />
    case 'StatswithBadges':
      return <StatswithBadges data={badgeSummary.map((item) => ({ name: item.name, stat: item.value, change: item.badge, changeType: 'positive' as const }))} />
    case 'StatswithBorders':
      return <StatswithBorders stats={summary.map((item) => ({ metric: item.name, current: item.value, previous: 'Previous', difference: item.change, trend: 'up' as const }))} />
    case 'StatswithCardLayout':
      return <StatswithCardLayout data={cardSummary.map((item) => ({ name: item.name, stat: String(item.value), change: item.description, changeType: 'positive' as const }))} />
    case 'StatswithCircularProgress':
      return <StatswithCircularProgress data={progressSummary.map((item) => ({ name: item.name, capacity: item.percentage, current: item.value, allowed: 100 }))} />
    case 'StatswithLinks':
      return <StatswithLinks data={summary.map((item) => ({ name: item.name, value: item.value, change: item.change, changeType: 'positive' as const, href: '#' }))} />
    case 'StatswithMap':
      return <StatswithMap summary={summary.slice(0, 3).map((item, index) => ({ name: item.name, value: item.value, change: item.change, percentageChange: '4%', latitude: 40 + index, longitude: -74 - index }))} />
    case 'StatswithStatus':
      return <StatswithStatus data={statusSummary.map((item, index) => ({ name: item.name, stat: item.value, goalsAchieved: index + 2, goalsTotal: 5, status: index === 3 ? 'critical' : 'within' as const }))} />
    case 'StatswithTrending':
      return <StatswithTrending data={summary.map((item) => ({ name: item.name, value: item.value, change: item.change, changeType: 'positive' as const }))} />
    case 'SwitchGroup':
      return <SwitchGroup items={[{ label: 'Public profile', value: 'profile' }, { label: 'Notifications', value: 'notifications' }]} values={['profile']} />
    case 'TablewithAccordion':
      return <TablewithAccordion rows={[{ id: '1042', name: 'Order #1042', category: 'Processing', value: '$240', date: 'Today', children: [{ id: '1042-1', name: 'Design system kit', category: 'Item', value: '$240', date: 'Today' }] }, { id: '1041', name: 'Order #1041', category: 'Shipped', value: '$180', date: 'Yesterday' }]} />
    case 'TagBlock':
      return <TagBlock tags={['Design', 'Components', 'Ready']} />
    case 'TextContent':
      return <TextContent text='Reusable text content with readable spacing and wrapping.' />
    case 'Typography':
      return <div className='space-y-4'><Heading level='2'>Custom UI typography</Heading><Blockquote cite='Design System'>Small primitives can compose into useful patterns.</Blockquote><InlineCode>base-ui/typography</InlineCode></div>
    case 'VerticalTimeline':
      return <VerticalTimeline items={[{ title: 'Created', description: 'Initial component added', date: 'Today' }, { title: 'Reviewed', description: 'Design review completed', date: 'Tomorrow' }, { title: 'Published', description: 'Ready for use', date: 'Friday' }]} />
  }
}
