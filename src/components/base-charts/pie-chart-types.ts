export type PieSlice = { name: string; value: number; color?: string }
export type PieChartProps = { data?: PieSlice[]; className?: string; height?: number; innerRadius?: number | string; showLegend?: boolean }
