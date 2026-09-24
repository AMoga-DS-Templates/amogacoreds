import type { PurchaseOrderMockItem } from './order-mock'

export type OrderTemplateItem = PurchaseOrderMockItem

export type OrderTemplateParty = {
  name: string
  company: string
  address: string
  phone: string
  email: string
  taxId: string
}

export type OrderTemplateAttachment = {
  id: string
  name: string
  size: number
  type: string
  url: string
}


