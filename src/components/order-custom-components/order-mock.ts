/**
 * Purchase Order mock data for the Design System gallery.
 * This preview never reads or writes a database table.
 */

export type PurchaseOrderMockItem = {
  id: number
  product: string
  quantity: string
  price: string
  description: string
  deliveryDate?: string
  unit?: string
  discount?: string
}

export type PurchaseOrderMock = {
  orderNumber: string
  documentDate: string
  supplier: string
  supplyTerms: string
  description: string
  status: 'draft' | 'active' | 'inactive'
  approvalUser: string
  deliveryTerms: string
  paymentTerms: string
  preparedBy: string
  buyer: { name: string; company: string; address: string; phone: string; email: string; taxId: string }
  supplierDetails: { name: string; company: string; address: string; phone: string; email: string; taxId: string }
  items: PurchaseOrderMockItem[]
}

export const mockPurchaseOrderProducts = [
  'Office Laptop Pro',
  'Wireless Keyboard',
  'USB-C Docking Station',
]

export const mockPurchaseOrderSuppliers = [
  'Northwind Supplies â€” Jordan Lee',
  'Contoso Office Goods â€” Asha Rao',
  'Apex Industrial â€” Ravi Kumar',
]

export const mockPurchaseOrder: PurchaseOrderMock = {
  orderNumber: 'PO-2026-004',
  documentDate: '2026-09-23',
  supplier: 'Northwind Supplies â€” Jordan Lee',
  supplyTerms: 'Net 30 days. Delivery before 15 October 2026.',
  description: 'Please confirm delivery date before dispatch.',
  status: 'draft',
  approvalUser: 'finance@amoga.demo',
  deliveryTerms: 'Deliver to Amoga Business, Hyderabad before 15 October 2026.',
  paymentTerms: 'Net 30 days by bank transfer.',
  preparedBy: 'krishna raju',
  buyer: {
    name: 'Raju krishna',
    company: 'Amoga Business',
    address: 'Hyderabad, Telangana, India',
    phone: '+91 98765 43210',
    email: 'n.rajukrishna@example.com',
    taxId: 'GSTIN 36AAACA1234A1Z5',
  },
  supplierDetails: {
    name: 'Jordan Lee',
    company: 'Northwind Supplies',
    address: '42 Market Street, Bengaluru, India',
    phone: '+91 91234 56789',
    email: 'jordan@northwind.example',
    taxId: 'GSTIN 29NWSUP1234B1Z2',
  },
  items: [
    {
      id: 1,
      product: 'Office Laptop Pro',
      quantity: '2',
      price: '1250',
      description: 'Business laptops with standard configuration.',
      deliveryDate: '2026-10-15',
      unit: 'Each',
      discount: '0.00',
    },
  ],
}

