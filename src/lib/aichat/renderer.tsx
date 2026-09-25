'use client'

import { Fragment, type ReactNode } from 'react'
import { ChatUiProvider } from './context'
import { JsonComponentProvider, type JsonComponentDefinition } from './json-component'
import { chatRegistry } from './registry'
import type { ChatActionHandler, ChatNode } from './types'

type RendererProps = {
  node: ChatNode
  actionsLocked?: boolean
  onAction: ChatActionHandler
}

type ComponentNodeProps = RendererProps & { depth?: number }

function isChatNode(value: unknown): value is ChatNode {
  return Boolean(value && typeof value === 'object' && typeof (value as { type?: unknown }).type === 'string')
}

function ComponentNode({ node, actionsLocked = false, onAction, depth = 0 }: ComponentNodeProps) {
  const definition = chatRegistry[node.type] as JsonComponentDefinition | undefined
  if (!definition) {
    return <div className='rounded-md border border-dashed p-3 text-sm text-muted-foreground'>Unsupported UI component: {node.type}</div>
  }

  const nestedChildren = node.children ?? []
  const childProps: Record<string, unknown> = {}
  if (nestedChildren.length) {
    if (node.type === 'Tabs') childProps.items = nestedChildren.map((child) => ({ ...child, props: { ...(child.props ?? {}), trigger: child.props?.trigger ?? child.props?.label, content: child.props?.content ?? child.children ?? [] } }))
    else if (node.type === 'Accordion') childProps.items = nestedChildren.map((child) => ({ ...child, props: { ...(child.props ?? {}), trigger: child.props?.trigger ?? child.props?.title, content: child.props?.content ?? child.children ?? [] } }))
    else if (node.type === 'Buttons') childProps.buttons = nestedChildren
    else if (node.type === 'FollowUpBlock') childProps.items = nestedChildren
    else if (node.type === 'Carousel') childProps.slides = nestedChildren.map((child) => child.children ?? [child])
    else if (node.type === 'DialogBlock' || node.type === 'DrawerBlock') childProps.content = nestedChildren
    else if (node.type === 'TagBlock') childProps.tags = nestedChildren
    else if (node.type === 'FormControl') childProps.field = nestedChildren[0]
    else if (node.type === 'ChatFileCard') childProps.actions = nestedChildren
    else if (node.type === 'Map') childProps.markers = nestedChildren
    else if (['Select', 'CheckBoxGroup', 'RadioGroup', 'SwitchGroup'].includes(node.type)) childProps.items = nestedChildren
    else if (['BarChart', 'BarChartMultiple', 'LineChart', 'AreaChart', 'AreaChartAxes', 'AreaChartGradient', 'RadarChart'].includes(node.type)) childProps.series = nestedChildren
    else if (['PieChart', 'PieChartDonut', 'PieChartDonutActive', 'RadialChart', 'RadialChartStacked'].includes(node.type)) childProps.slices = nestedChildren
    else if (node.type === 'Form') {
      childProps.fields = nestedChildren.filter((child) => child.type === 'FormControl')
      childProps.buttons = nestedChildren.find((child) => child.type === 'Buttons')
    }
  }

  const candidateProps = {
    ...(node.props ?? {}),
    ...childProps,
    ...(nestedChildren.length ? { children: nestedChildren } : {}),
    ...(node.type === 'AccordionItem' ? { trigger: node.props?.trigger ?? node.props?.title, content: node.props?.content ?? nestedChildren } : {}),
    ...(node.type === 'TabItem' ? { trigger: node.props?.trigger ?? node.props?.label, content: node.props?.content ?? nestedChildren } : {}),
  }
  const parsed = definition.schema.safeParse(candidateProps)
  if (!parsed.success) {
    return <div className='rounded-md border border-dashed p-3 text-sm text-muted-foreground'>Invalid props for {node.type}</div>
  }

  const renderNode = (value: unknown): ReactNode => {
    if (Array.isArray(value)) return value.map((child, index) => <Fragment key={index}>{renderNode(child)}</Fragment>)
    if (value == null || typeof value === 'string' || typeof value === 'number') return value
    if (typeof value === 'boolean') return String(value)
    if (!isChatNode(value)) return null
    return <ComponentNode node={value} actionsLocked={actionsLocked} onAction={onAction} depth={depth + 1} />
  }

  const DefinitionComponent = definition.component
  const rendered = <DefinitionComponent props={parsed.data} renderNode={renderNode} />
  return depth === 1 ? <div className='animate-in fade-in slide-in-from-bottom-1 duration-300'>{rendered}</div> : rendered
}

export function ShadcnChatRenderer({ node, actionsLocked = false, onAction }: RendererProps) {
  return <ChatUiProvider value={{ actionsLocked, onAction }}><JsonComponentProvider><ComponentNode node={node} actionsLocked={actionsLocked} onAction={onAction} /></JsonComponentProvider></ChatUiProvider>
}

export const AichatRenderer = ShadcnChatRenderer
