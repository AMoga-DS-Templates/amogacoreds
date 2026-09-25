'use client'

import { Map, MapMarker, MarkerContent, MarkerPopup } from '@/components/ui/map'

type MarkerData = {
  title: string
  latitude: number
  longitude: number
  subtitle?: string
  description?: string
}

export function MapClient({ markers, centerLatitude, centerLongitude, zoom, height = 320 }: {
  markers: MarkerData[]
  centerLatitude?: number
  centerLongitude?: number
  zoom?: number
  height?: number
}) {
  const latitude = centerLatitude ?? markers.reduce((sum, marker) => sum + marker.latitude, 0) / Math.max(markers.length, 1)
  const longitude = centerLongitude ?? markers.reduce((sum, marker) => sum + marker.longitude, 0) / Math.max(markers.length, 1)
  if (!markers.length) return <div className='flex h-[320px] items-center justify-center rounded-lg border border-dashed text-sm text-muted-foreground'>No map locations available.</div>
  return <div className='overflow-hidden rounded-lg border' style={{ height }}><Map center={[longitude, latitude]} zoom={zoom ?? (markers.length === 1 ? 10 : 3)} className='h-full w-full'>{markers.map((marker) => <MapMarker key={`${marker.title}-${marker.latitude}-${marker.longitude}`} longitude={marker.longitude} latitude={marker.latitude}><MarkerContent /><MarkerPopup><div className='space-y-1'><div className='font-medium'>{marker.title}</div>{marker.subtitle ? <div className='text-sm text-muted-foreground'>{marker.subtitle}</div> : null}{marker.description ? <div className='text-sm'>{marker.description}</div> : null}</div></MarkerPopup></MapMarker>)}</Map></div>
}
