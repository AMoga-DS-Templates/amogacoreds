export type OrderTemplateItem = {
  id: number
  product: string
  quantity: string
  price: string
  description: string
  deliveryDate?: string
  unit?: string
  discount?: string
}

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

