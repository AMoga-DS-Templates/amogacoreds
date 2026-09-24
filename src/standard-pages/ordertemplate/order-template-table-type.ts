export type VoucherListEntry = {
  general_ledger_id?: string | number | null;
  ledger_id?: string | number | null;
  voucher_id?: string | number | null;
  voucher_number?: string | null;
  voucher_group?: string | null;
  voucher_type?: string | null;
  account_uuid?: string | null;
  account_code?: string | null;
  account_name?: string | null;
  transaction_date?: string | Date | null;
  document_date?: string | Date | null;
  posting_date?: string | Date | null;
  debit_amount?: number | string | null;
  credit_amount?: number | string | null;
  transaction_amount?: number | string | null;
  due_date?: string | Date | null;
  financial_year?: string | null;
  period_name?: string | null;
  month_name?: string | null;
  currency_code?: string | null;
  narration?: string | null;
  description?: string | null;
  supply_terms?: string | null;
  delivery_terms?: string | null;
  payment_terms?: string | null;
  remarks?: string | null;
  status?: string | null;
  financial_id?: string | number | null;
  financial_year_uuid?: string | null;
  period_id?: string | number | null;
  period_uuid?: string | null;
  month_id?: string | number | null;
  month_uuid?: string | null;
  debit_amount_total?: number | string | null;
  credit_amount_total?: number | string | null;
  files_json?: unknown;
};

export const voucherListStatuses = [
  "active",
  "inactive",
  "draft",
  "posted",
] as const;

export type VoucherListStatus = (typeof voucherListStatuses)[number];

