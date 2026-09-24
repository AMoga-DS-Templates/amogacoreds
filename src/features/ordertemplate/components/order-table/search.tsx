import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

export function OrderTableSearch({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return <div className='relative w-full min-w-0 shrink-0 xl:max-w-md xl:flex-1'><Search className='pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground' /><Input value={value} onChange={(event) => onChange(event.target.value)} placeholder='Search orders...' className='h-10 w-full pl-9' aria-label='Search orders' /></div>
}
