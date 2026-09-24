import type { OrderPanelRecord } from '@/components/order-custom-components/order-panel/types'

export const mockOrderPanelRecords: OrderPanelRecord[] = [
  { id: 'fy-2026', name: 'year 2026', yearCode: 'YR-2026', description: 'This is financial year 2026', periods: 12, endDate: '2027-03-31', status: 'Active' },
  { id: 'fy-2025', name: 'year 2025', yearCode: 'YR-2025', description: 'This is financial year 2025', periods: 12, endDate: '2026-03-31', status: 'Active' },
]

export const mockApprovedOrderPanelRecords: OrderPanelRecord[] = [
  { id: 'fy-approved-2026', name: 'Approved orders 2026', yearCode: 'YR-2026', description: 'Approved purchase orders for financial year 2026', periods: 12, endDate: '2027-03-31', status: 'Approved' },
]
