import orderTemplateMock from "./order-template.mock.json";

export type VoucherList = {
  financial_year_uuid?: string | null;
  financial_id?: number | null;
  financial_year?: string | null;
  year_code?: string | null;
  start_date?: string | null;
  end_date?: string | null;
  number_of_periods?: number | null;
  plan_id?: string | number | null;
  plan_name?: string | null;
  plan_group?: string | null;
  plan_description?: string | null;
  plan_start_date?: string | null;
  plan_end_date?: string | null;
  project_uuid?: string | null;
  status?: string | null;
  is_archive?: boolean | null;
  is_important?: boolean | null;
  is_favourite?: boolean | null;
  is_flag?: boolean | null;
  is_actionitem?: boolean | null;
  is_pin?: boolean | null;
  is_like?: boolean | null;
  is_dislike?: boolean | null;
};

export type VoucherListEntryFilter = "all" | "period" | "month";
export type VoucherListActionField =
  | "is_archive"
  | "is_important"
  | "is_favourite"
  | "is_flag"
  | "is_actionitem"
  | "is_pin"
  | "is_like"
  | "is_dislike";

type ActionResult<T> = { success: true; data: T } | { success: false; error: string };

const mockFinancialYears: VoucherList[] = orderTemplateMock.financialYears as VoucherList[];
const mockVoucherEntries = orderTemplateMock.voucherEntries;

const actionFields = (record: Record<string, unknown>, field: VoucherListActionField, value: boolean) => ({
  ...record,
  [field]: value,
  ...(field === "is_like" && value ? { is_dislike: false } : {}),
  ...(field === "is_dislike" && value ? { is_like: false } : {}),
});

export async function getVoucherListReferenceValues(
  financialYearUuid: string,
  entryFilter: Exclude<VoucherListEntryFilter, "all">,
) {
  const entries = mockVoucherEntries.filter((entry) => entry.financial_year_uuid === financialYearUuid);
  return Array.from(new Set(entries.map((entry) => entry[entryFilter === "period" ? "period_name" : "month_name"]).filter(Boolean)));
}

export async function getVoucherListEntries(
  financialYearUuid?: string | null,
  entryFilter: VoucherListEntryFilter = "all",
) {
  return mockVoucherEntries.filter((entry) => {
    if (financialYearUuid && entry.financial_year_uuid !== financialYearUuid) return false;
    if (entryFilter === "period") return Boolean(entry.period_name);
    if (entryFilter === "month") return Boolean(entry.month_name);
    return true;
  });
}

export async function getVoucherLists(): Promise<ActionResult<VoucherList[]>> {
  return { success: true, data: mockFinancialYears };
}

export async function getApprovedPurchaseOrders(): Promise<ActionResult<Record<string, unknown>[]>> {
  return {
    success: true,
    data: mockVoucherEntries
      .filter((entry) => entry.status === "approved")
      .map((entry) => ({ ...entry, ledger_details: [] })),
  };
}

export async function toggleApprovedPurchaseOrderAction(
  voucherId: number,
  field: VoucherListActionField,
  value: boolean,
): Promise<ActionResult<Record<string, unknown>>> {
  const index = mockVoucherEntries.findIndex((entry) => Number(entry.voucher_id) === voucherId);
  if (index < 0) return { success: false, error: "Mock purchase order not found" };
  mockVoucherEntries[index] = actionFields(mockVoucherEntries[index], field, value) as typeof mockVoucherEntries[number];
  return { success: true, data: { ...mockVoucherEntries[index] } };
}

export async function toggleVoucherListAction(
  planId: string,
  field: VoucherListActionField,
  value: boolean,
): Promise<ActionResult<VoucherList>> {
  const index = mockFinancialYears.findIndex((year) => String(year.plan_id) === String(planId));
  if (index < 0) return { success: false, error: "Mock financial year not found" };
  mockFinancialYears[index] = actionFields(mockFinancialYears[index], field, value) as VoucherList;
  return { success: true, data: { ...mockFinancialYears[index] } };
}
