'use client'

export type GaugeChartProps = { percent?: number | string; className?: string; label?: string }

function normalize(value: number | string | undefined) {
  const parsed = typeof value === 'string' ? Number(value.replace('%', '').trim()) : Number(value ?? 0)
  const normalized = parsed > 1 && parsed <= 100 ? parsed / 100 : parsed
  return Number.isFinite(normalized) ? Math.max(0, Math.min(1, normalized)) : 0
}

export function GaugeChartLiveUpdates({ percent = 0, className, label }: GaugeChartProps) {
  const value = normalize(percent)
  const display = `${Math.round(value * 100)}%`
  const angle = Math.PI * (1 - value)
  const needleX = 100 + Math.cos(angle) * 58
  const needleY = 90 - Math.sin(angle) * 58

  return <div className={`relative mx-auto w-full max-w-[420px] ${className ?? ''}`}><svg viewBox="0 0 200 110" className="h-auto w-full" role="img" aria-label={label ?? `${display} gauge`}><path d="M 20 90 A 80 80 0 0 1 180 90" fill="none" stroke="var(--muted)" strokeWidth="16" strokeLinecap="round" /><path d="M 20 90 A 80 80 0 0 1 180 90" fill="none" stroke="var(--chart-1)" strokeWidth="16" strokeLinecap="round" strokeDasharray={`${251.2 * value} 251.2`} /><line x1="100" y1="90" x2={needleX} y2={needleY} stroke="var(--foreground)" strokeWidth="3" strokeLinecap="round" /><circle cx="100" cy="90" r="6" fill="var(--foreground)" /><circle cx="100" cy="90" r="2.5" fill="var(--background)" /></svg><div className="pointer-events-none absolute inset-x-0 bottom-3 text-center text-xl font-semibold">{display}</div></div>
}

export default GaugeChartLiveUpdates
