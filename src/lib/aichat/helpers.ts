export function hasAllProps(obj: Record<string, unknown>, ...keys: string[]): boolean {
  return keys.every((k) => obj[k] != null);
}

export function asArray(v: unknown): unknown[] {
  if (Array.isArray(v)) return v;
  if (v == null) return [];
  return [v];
}

export function getJsonProps(value: unknown): Record<string, unknown> | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const record = value as Record<string, unknown>;
  return record.props && typeof record.props === "object" && !Array.isArray(record.props)
    ? record.props as Record<string, unknown>
    : record;
}

function asComponentProps(value: unknown): Record<string, unknown>[] {
  return asArray(value)
    .map(getJsonProps)
    .filter((item): item is Record<string, unknown> => item !== null);
}

export function buildChartData(
  labels: unknown,
  series: unknown,
): Record<string, string | number>[] {
  const lbls = asArray(labels) as string[];

  const rows = asArray(series);
  if (rows.length > 0 && Array.isArray(rows[0])) {
    const seriesNames = lbls.slice(1);
    return rows.map((row) => {
      const cells = row as unknown[];
      const point: Record<string, string | number> = { category: String(cells[0] ?? "") };
      seriesNames.forEach((name, si) => {
        const val = cells[si + 1];
        point[name] = typeof val === "number" ? val : Number(val) || 0;
      });
      return point;
    });
  }

  const seriesNodes = asComponentProps(series);
  return lbls.map((label, i) => {
    const point: Record<string, string | number> = { category: label };
    seriesNodes.forEach((s) => {
      const cat = s["category"];
      const vals = s["values"];
      if (typeof cat === "string" && Array.isArray(vals) && i < vals.length) {
        point[cat] = vals[i]!;
      }
    });
    return point;
  });
}

export function buildSliceData(slices: unknown): Record<string, string | number>[] {
  return asComponentProps(slices).map((slice) => ({
    category: slice["category"] as string,
    value: slice["value"] as number,
  }));
}


