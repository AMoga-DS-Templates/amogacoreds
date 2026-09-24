'use client'

import ZrimoViewer from './index'

export function MockZrimoViewer() {
  return <div className='h-[calc(100vh-120px)] min-h-[650px] w-full overflow-hidden bg-slate-100'><ZrimoViewer file={{ id: 'zrimo-gallery-purchase-order', name: 'Purchase-Order-Mock.pdf', url: '/zrimo-mock/purchase-order.pdf', directUrl: true, type: 'pdf' }} /></div>
}

export default MockZrimoViewer
