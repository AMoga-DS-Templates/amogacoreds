"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { pdf } from "@react-pdf/renderer";
import { z } from "zod";
import {
  ArrowLeft,
  ArrowRight,
  Download,
  Eye,
  FileText,
  Loader2,
  Pencil,
  Plus,
  Trash2,
  UploadCloud,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { OrderTemplatePdfDocument } from "./order-template-pdf-preview";

const OrderTemplatePdfPreview = dynamic(
  () => import("./order-template-pdf-preview").then((module) => module.OrderTemplatePdfPreview),
  { ssr: false }
);

const voucherSchema = z.object({
  voucher_number: z.string().trim().min(1, "Voucher number is required."),
  voucher_type: z.string().trim().min(1, "Voucher type is required."),
  document_date: z.string().trim().min(1, "Document date is required."),
  description: z.string().trim().optional(),
  status: z.string().trim().min(1, "Status is required."),
});

const DEFAULT_VOUCHER_TYPE = "Purchase Order";

const voucherDetailSchema = z
  .object({
    ledger: z.string().trim().min(1, "Select a product for this row."),
    credit: z.string(),
    debit: z.string(),
    remarks: z.string(),
  })
  .superRefine((row, context) => {
    const quantity = Number(row.credit);
    const price = Number(row.debit);
    if (!Number.isFinite(quantity) || quantity <= 0) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["credit"],
        message: "Enter a quantity greater than 0.",
      });
    }
    if (!Number.isFinite(price) || price <= 0) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["debit"],
        message: "Enter a price greater than 0.",
      });
    }
  });

type NewTab = "new" | "invoice" | "voucher" | "json";
type VoucherAttachment = {
  file_upload_id?: number | null;
  file_name: string;
  file_url: string;
  file_size?: number;
  content_type?: string;
};
type VoucherAccount = { id: string; name: string };
type VoucherProduct = { id: string; name: string };
type VoucherContact = {
  id: string;
  name: string;
  companyName: string;
  contactName?: string;
  mobile?: string;
  address?: string;
};
type VoucherApprovalUser = {
  userCatalogId?: string | number | null;
  userUuid?: string | null;
  email: string;
  username?: string | null;
  businessNumber?: string | number | null;
  businessName?: string | null;
  phone?: string | null;
  address?: string | null;
};
type VoucherUser = {
  businessName: string;
  name: string;
  email: string;
  mobile: string;
  address: string;
  user_uuid?: string | null;
  user_catalog_id?: string | number | null;
  financial_id?: string | number | null;
  financial_year_uuid?: string | null;
  financial_year?: string | null;
  period_id?: string | number | null;
  period_uuid?: string | null;
  period_name?: string | null;
  month_id?: string | number | null;
  month_uuid?: string | null;
  month_name?: string | null;
};
type DetailRow = {
  id: number;
  ledger: string;
  product_uuid?: string;
  description: string;
  credit: string;
  debit: string;
  remarks: string;
};

const stringValue = (value: unknown) => {
  if (value == null) return "";
  if (typeof value === "string") return value;
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  return JSON.stringify(value);
};

const approvalEmailFromWorkflow = (value: unknown) => {
  let workflow = value;
  if (typeof workflow === "string") {
    try { workflow = JSON.parse(workflow); } catch { return ""; }
  }
  if (!workflow || typeof workflow !== "object" || Array.isArray(workflow)) return "";
  const approvalUser = (workflow as Record<string, unknown>).approval_user;
  if (approvalUser && typeof approvalUser === "object" && !Array.isArray(approvalUser)) {
    return stringValue((approvalUser as Record<string, unknown>).email);
  }
  return stringValue(approvalUser);
};

const saveVoucherReviewJson = (value: Record<string, unknown>) => {
  const key = "voucher-list-new-review-json";
  const json = JSON.stringify(value, null, 2);
  window.localStorage.setItem(key, json);
  console.log("[Authenticated VoucherList] localStorage:", { key, value, json });
};

const clearVoucherReviewJson = () => {
  window.localStorage.removeItem("voucher-list-new-review-json");
};

const parseRows = (value: unknown): unknown[] => {
  if (Array.isArray(value)) return value;
  if (typeof value !== "string" || !value.trim()) return [];
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const initialDetailRows = (value: unknown): DetailRow[] => {
  const rows = parseRows(value);
  if (!rows.length) {
    return [{ id: Date.now(), ledger: "", product_uuid: "", description: "", credit: "", debit: "", remarks: "" }];
  }
  return rows.map((item, index) => {
    const row = item as Record<string, unknown>;
    return {
      id: Date.now() + index,
      ledger: stringValue(row.ledger ?? row.product_name ?? row.account_name),
      product_uuid: stringValue(row.product_uuid),
      description: stringValue(row.description),
      credit: stringValue(row.credit_amount ?? row.credit ?? row.qty),
      debit: stringValue(row.debit_amount ?? row.debit ?? row.price),
      remarks: stringValue(row.remarks ?? row.amount),
    };
  });
};

export function OrderTemplateForm({
  accounts,
  products,
  contacts,
  approvalUsers,
  user,
  onCancel,
  onCreated,
  onSaved,
  editingVoucherId,
  initialVoucher,
  viewOnly = false,
  approvalMode = false,
  approvalApproved = false,
  approvalLoading = false,
  onApprove,
  approvalAmount = "",
  approvalRemarks = "",
  onApprovalAmountChange,
  onApprovalRemarksChange,
  approvedViewOnly = false,
}: {
  accounts: VoucherAccount[];
  products: VoucherProduct[];
  contacts: VoucherContact[];
  approvalUsers: VoucherApprovalUser[];
  user: VoucherUser;
  onCancel: () => void;
  onCreated?: () => void;
  onSaved?: (
    values: Record<string, string>,
    voucherId?: number,
    document?: Record<string, unknown>
  ) => void;
  editingVoucherId?: number;
  initialVoucher?: Record<string, unknown>;
  viewOnly?: boolean;
  approvalMode?: boolean;
  approvalApproved?: boolean;
  approvalLoading?: boolean;
  onApprove?: () => void;
  approvalAmount?: string;
  approvalRemarks?: string;
  onApprovalAmountChange?: (value: string) => void;
  onApprovalRemarksChange?: (value: string) => void;
  approvedViewOnly?: boolean;
}) {
  const isEditing = editingVoucherId !== undefined;
  const [activeTab, setActiveTab] = React.useState<NewTab>(approvalMode || approvedViewOnly ? "voucher" : "new");
  const [selectedContactId, setSelectedContactId] = React.useState(
    () => stringValue(initialVoucher?.contact_user_catalog_id)
  );
  const [selectedApprover, setSelectedApprover] = React.useState(
    () => stringValue(initialVoucher?.approval_user_email ?? initialVoucher?.to_email) || approvalEmailFromWorkflow(initialVoucher?.work_flow_json)
  );
  const [stepOneSaved, setStepOneSaved] = React.useState(isEditing || viewOnly);
  const [stepTwoSaved, setStepTwoSaved] = React.useState(isEditing || viewOnly);
  const [saving, setSaving] = React.useState(false);
  const saveInFlightRef = React.useRef(false);
  const [error, setError] = React.useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = React.useState<Record<string, string>>(
    {}
  );
  const [detailErrors, setDetailErrors] = React.useState<Record<number, string>>({});
  const [attachments, setAttachments] = React.useState<VoucherAttachment[]>([]);
  const [uploading, setUploading] = React.useState(false);
  const [uploadError, setUploadError] = React.useState<string | null>(null);
  const [reviewData, setReviewData] = React.useState<Record<string, string> | null>(
    () =>
      initialVoucher
        ? {
            ...Object.fromEntries(
              Object.entries(initialVoucher).map(([key, value]) => [
                key,
                stringValue(value),
              ])
            ),
            session_details: JSON.stringify(user),
          }
        : null
  );
  const [statusValue, setStatusValue] = React.useState(() => stringValue(initialVoucher?.status) || "draft");
  React.useEffect(() => {
    if (reviewData?.status) setStatusValue(reviewData.status);
  }, [reviewData?.status]);
  const [viewEdits, setViewEdits] = React.useState<Record<string, string>>({});
  const [savedPdfData, setSavedPdfData] = React.useState<Record<string, unknown> | null>(null);
  const [sentForApproval, setSentForApproval] = React.useState(false);
  const [details, setDetails] = React.useState<DetailRow[]>(() =>
    initialDetailRows(initialVoucher?.ledger_details ?? initialVoucher?.details)
  );
  const buildWorkflowJson = (voucherUuid = "", approvalStatus = "draft", approver = selectedApprover, approvalShareUrl = "") => JSON.stringify({
    page_name: "PurchaseOrder",
    voucher_uuid: voucherUuid || reviewData?.voucher_uuid || "",
    from_user: {
      name: partyValue("from", "name", fromParty, user.name || ""),
      company_name: partyValue("from", "company_name", fromParty, user.businessName || ""),
      address: partyValue("from", "address", fromParty, user.address || ""),
      phone: partyValue("from", "phone", fromParty, user.mobile || ""),
      email: partyValue("from", "email", fromParty, user.email || ""),
      tax_id: partyValue("from", "tax_id", fromParty, ""),
      user_uuid: user.user_uuid ?? null,
      user_catalog_id: user.user_catalog_id ?? null,
    },
    to_user: {
      name: partyValue("to", "name", toParty, selectedContact?.contactName || selectedContact?.name || ""),
      company_name: partyValue("to", "company_name", toParty, selectedContact?.companyName || ""),
      address: partyValue("to", "address", toParty, selectedContact?.address || ""),
      phone: partyValue("to", "phone", toParty, selectedContact?.mobile || ""),
      email: partyValue("to", "email", toParty, selectedContact?.name || ""),
      tax_id: partyValue("to", "tax_id", toParty, ""),
      user_catalog_id: selectedContact?.id || null,
    },
    approval_user: approvalUsers.find((approvalUser) => approvalUser.email === approver) ?? { email: approver },
    approval_sequence: 1,
    approval_status: approvalStatus,
    view_fields: {
      voucher_number: reviewData?.voucher_number || "",
      document_date: reviewData?.document_date || "",
      status: reviewData?.status || "",
      description: reviewData?.description || "",
      supply_terms: reviewData?.supply_terms || "",
      delivery_terms: reviewData?.delivery_terms || "",
      payment_terms: reviewData?.payment_terms || "",
      details: details.map(({ id, ...row }) => row),
    },
    ...(approvalShareUrl ? { approval_share_url: approvalShareUrl } : {}),
  });
  React.useEffect(() => {
    if (isEditing || initialVoucher) return;
    const storedJson = window.localStorage.getItem("voucher-list-new-review-json");
    if (!storedJson) return;
    try {
      const stored = JSON.parse(storedJson) as Record<string, unknown>;
      if (!stored || typeof stored !== "object" || Array.isArray(stored)) return;
      setReviewData(Object.fromEntries(Object.entries(stored).map(([key, value]) => [key, stringValue(value)])));
      setDetails(initialDetailRows(stored.ledger_details ?? stored.details));
      setSelectedContactId(stringValue(stored.contact_user_catalog_id));
      setSelectedApprover(stringValue(stored.approval_user_email ?? stored.to_email) || approvalEmailFromWorkflow(stored.work_flow_json));
      setStepOneSaved(true);
      setStepTwoSaved(true);
    } catch {
      window.localStorage.removeItem("voucher-list-new-review-json");
    }
  }, [initialVoucher, isEditing]);

  async function uploadAttachment(event: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? []);
    if (!files.length) return;
    setUploading(true);
    setUploadError(null);
    try {
      const uploaded: VoucherAttachment[] = [];
      for (const file of files) {
        const body = new FormData();
        body.append("file", file);
        const response = await fetch("/api/PurchaseOrder/upload-file", {
          method: "POST",
          body,
        });
        const result = await response.json();
        if (!response.ok || !result.success || !result.publicUrl)
          throw new Error(result.error || "Attachment upload failed.");
        uploaded.push({
          file_upload_id: result.fileUploadId ?? null,
          file_name: result.fileName || file.name,
          file_url: result.publicUrl,
          file_size: file.size,
          content_type: file.type,
        });
      }
      setAttachments((current) => [...current, ...uploaded]);
    } catch (err) {
      setUploadError(
        err instanceof Error ? err.message : "Attachment upload failed."
      );
    } finally {
      setUploading(false);
      event.target.value = "";
    }
  }

  function downloadAttachment(attachment: VoucherAttachment) {
    const link = document.createElement("a");
    link.href = attachment.file_url;
    link.download = attachment.file_name;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.click();
  }

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.set("files_json", JSON.stringify(attachments));
    const validation = voucherSchema.safeParse(Object.fromEntries(formData));
    if (!validation.success) {
      const next: Record<string, string> = {};
      validation.error.issues.forEach((issue) => {
        const field = String(issue.path[0] ?? "form");
        if (!next[field]) next[field] = issue.message;
      });
      setFieldErrors(next);
      setActiveTab("new");
      return;
    }
    setSaving(true);
    setError(null);
    setFieldErrors({});
    try {
      setSavedPdfData(null);
      const data = Object.fromEntries(formData) as Record<string, string>;
      data.details = JSON.stringify(details);
      data.debit_amount_total = String(
        details.reduce((total, row) => total + (Number(row.debit) || 0), 0)
      );
      data.credit_amount_total = String(
        details.reduce((total, row) => total + (Number(row.credit) || 0), 0)
      );
      data.qty = String(details.reduce((total, row) => total + (Number(row.credit) || 0), 0));
      data.price = String(details.reduce((total, row) => total + (Number(row.debit) || 0), 0));
      data.amount = String(details.reduce((total, row) => total + (Number(row.remarks) || 0), 0));
      data.product_name = Array.from(
        new Set(details.map((row) => row.ledger).filter(Boolean))
      ).join(", ");
      data.business_name = user.businessName || "";
      data.business_address = user.address || "";
      data.business_email = user.email || "";
      data.business_mobile = user.mobile || "";
      data.to_email = selectedApprover;
      data.approval_user_email = selectedApprover;
      data.approval_user = JSON.stringify(selectedApprovalUser ?? { email: selectedApprover });
      data.work_flow_json = buildWorkflowJson("", "draft");
      data.contact_name = selectedContact?.contactName || selectedContact?.name || "";
      data.contact_company_name = selectedContact?.companyName || "";
      data.financial_id = String(user.financial_id ?? "");
      data.financial_year_uuid = String(user.financial_year_uuid ?? "");
      data.financial_year = String(user.financial_year ?? "");
      data.period_id = String(user.period_id ?? "");
      data.period_uuid = String(user.period_uuid ?? "");
      data.period_name = String(user.period_name ?? "");
      data.month_id = String(user.month_id ?? "");
      data.month_uuid = String(user.month_uuid ?? "");
      data.month_name = String(user.month_name ?? "");
      data.session_details = JSON.stringify(user);
      saveVoucherReviewJson(data);
      setReviewData(data);
      setStepOneSaved(true);
      setStepTwoSaved(false);
      onCreated?.();
      setActiveTab("invoice");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to save voucher for review"
      );
    } finally {
      setSaving(false);
    }
  }

  async function saveFinalVoucher(options?: { sendForApproval?: boolean }) {
    if (!reviewData || saveInFlightRef.current) return;
    if (options?.sendForApproval && !selectedApprover.trim()) {
      setError("Select an approver before sending for approval.");
      return;
    }
    saveInFlightRef.current = true;
    const reviewForSave = {
      ...reviewData,
      ...viewEdits,
      from_json: partyJson("from", fromParty),
      to_json: partyJson("to", toParty),
      approval_user: JSON.stringify(selectedApprovalUser ?? { email: selectedApprover }),
      work_flow_json: buildWorkflowJson("", options?.sendForApproval ? "sent for approval" : "draft"),
    };
    saveVoucherReviewJson(reviewForSave);
    setSaving(true);
    setError(null);
    try {
      const formData = new FormData();
      Object.entries(reviewForSave).forEach(([key, value]) =>
        formData.set(key, typeof value === "string" ? value : JSON.stringify(value))
      );
      let savedVoucherId = editingVoucherId;
      let savedDocument: Record<string, unknown> | undefined;
      let savedValues: Record<string, string> = Object.fromEntries(
        Object.entries(reviewForSave).map(([key, value]) => [
          key,
          value == null ? "" : typeof value === "string" ? value : JSON.stringify(value),
        ])
      );
      let savedPdfPayload: Record<string, unknown> | undefined;
      if (isEditing) {
        const inputData = {
          ...reviewForSave,
          details: details.map(({ id, ...row }) => row),
          credit_amount_total: detailTotals.credit,
          debit_amount_total: detailTotals.debit,
          difference: detailTotals.credit - detailTotals.debit,
        };
        const saveRequest = new FormData();
        saveRequest.set("voucher_id", String(editingVoucherId));
        saveRequest.set("payload", JSON.stringify(inputData));
        saveRequest.set("save_mode", options?.sendForApproval ? "approval" : "draft");
        const saveResponse = await fetch("/api/PurchaseOrder", {
          method: "PUT",
          body: saveRequest,
        });
        const result = (await saveResponse.json()) as {
          error?: string;
          data?: Record<string, unknown>;
          document?: Record<string, unknown>;
          approvalShareUrl?: string | null;
        };
        if (!saveResponse.ok) throw new Error(result.error || "Failed to update voucher");
        const dbPdfData = result.data ?? inputData;
        savedPdfPayload = dbPdfData;
        saveVoucherReviewJson({
          ...reviewForSave,
          approval_user: JSON.stringify(selectedApprovalUser ?? { email: selectedApprover }),
          work_flow_json: buildWorkflowJson(
          String((dbPdfData as { voucher_uuid?: unknown }).voucher_uuid ?? reviewData?.voucher_uuid ?? ""),
          options?.sendForApproval ? "sent for approval" : "draft",
          selectedApprover,
          result.approvalShareUrl ?? ""
          ),
        });
        savedValues = Object.fromEntries(Object.entries(dbPdfData).map(([key, value]) => [
          key, value == null ? "" : typeof value === "string" ? value : JSON.stringify(value),
        ]));
        const pdfBlob = await pdf(<OrderTemplatePdfDocument data={dbPdfData} />).toBlob();
        const documentRequest = new FormData();
        documentRequest.set("voucher_id", String(editingVoucherId));
        documentRequest.set("payload", JSON.stringify(dbPdfData));
        documentRequest.set("save_mode", options?.sendForApproval ? "approval" : "draft");
        documentRequest.set("document", new File([pdfBlob], `Voucher-${reviewData?.voucher_number || editingVoucherId}.pdf`, { type: "application/pdf" }));
        const documentResponse = await fetch("/api/PurchaseOrder", { method: "PUT", body: documentRequest });
        const documentResult = (await documentResponse.json()) as { error?: string; document?: Record<string, unknown> };
        if (!documentResponse.ok) throw new Error(documentResult.error || "Failed to save voucher document");
        savedDocument = documentResult.document;
      } else {
        const inputData = {
          ...reviewForSave,
          details: details.map(({ id, ...row }) => row),
          credit_amount_total: detailTotals.credit,
          debit_amount_total: detailTotals.debit,
          difference: detailTotals.credit - detailTotals.debit,
        };
        const saveRequest = new FormData();
        saveRequest.set("payload", JSON.stringify(inputData));
        saveRequest.set("save_mode", options?.sendForApproval ? "approval" : "draft");
        const saveResponse = await fetch("/api/PurchaseOrder", {
          method: "POST",
          body: saveRequest,
        });
        const result = (await saveResponse.json()) as {
          voucherId?: number;
          voucherUuid?: string;
          approvalShareUrl?: string | null;
          error?: string;
          data?: Record<string, unknown>;
          document?: Record<string, unknown>;
        };
        if (!saveResponse.ok || !result.voucherId) {
          throw new Error(result.error || "Failed to post voucher");
        }
        savedVoucherId = result.voucherId;
        const dbPdfData = result.data ?? inputData;
        savedPdfPayload = dbPdfData;
        saveVoucherReviewJson({
          ...reviewForSave,
          approval_user: JSON.stringify(selectedApprovalUser ?? { email: selectedApprover }),
          work_flow_json: buildWorkflowJson(
          String(result.voucherUuid ?? (dbPdfData as { voucher_uuid?: unknown }).voucher_uuid ?? reviewData?.voucher_uuid ?? ""),
          options?.sendForApproval ? "sent for approval" : "draft",
          selectedApprover,
          result.approvalShareUrl ?? ""
          ),
        });
        savedValues = Object.fromEntries(Object.entries(dbPdfData).map(([key, value]) => [
          key, value == null ? "" : typeof value === "string" ? value : JSON.stringify(value),
        ]));
        const pdfBlob = await pdf(<OrderTemplatePdfDocument data={dbPdfData} />).toBlob();
        const documentRequest = new FormData();
        documentRequest.set("voucher_id", String(result.voucherId));
        documentRequest.set("payload", JSON.stringify(dbPdfData));
        documentRequest.set("save_mode", options?.sendForApproval ? "approval" : "draft");
        documentRequest.set("document", new File([pdfBlob], `Voucher-${reviewData?.voucher_number || "document"}.pdf`, { type: "application/pdf" }));
        const documentResponse = await fetch("/api/PurchaseOrder", { method: "PUT", body: documentRequest });
        const documentResult = (await documentResponse.json()) as { error?: string; document?: Record<string, unknown> };
        if (!documentResponse.ok) throw new Error(documentResult.error || "Failed to save voucher document");
        savedDocument = documentResult.document;
      }
      if (savedPdfPayload) {
        setDetails(initialDetailRows(savedPdfPayload.details ?? savedPdfPayload.ledger_details));
        setSelectedContactId(stringValue(savedPdfPayload.contact_user_catalog_id));
        setSelectedApprover(stringValue(savedPdfPayload.approval_user_email ?? savedPdfPayload.to_email) || approvalEmailFromWorkflow(savedPdfPayload.work_flow_json));
      }
      if (savedPdfPayload) setSavedPdfData(savedPdfPayload);
      setReviewData(savedValues);
      setStepOneSaved(true);
      setStepTwoSaved(true);
      setSentForApproval(Boolean(options?.sendForApproval));
      setActiveTab("json");
      setSaving(false);
      toast.success(options?.sendForApproval
        ? "Order sent for approval and saved successfully."
        : "Order draft saved successfully.");
      clearVoucherReviewJson();
      onSaved?.(savedValues, savedVoucherId, savedDocument);
      saveInFlightRef.current = Boolean(options?.sendForApproval);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save voucher");
      setSaving(false);
      saveInFlightRef.current = false;
    }
  }

  function updateDetail(id: number, key: keyof DetailRow, value: string) {
    setStepTwoSaved(false);
    setDetailErrors((current) => {
      const next = { ...current };
      delete next[id];
      return next;
    });
    setDetails((current) => current.map((item) => {
      if (item.id !== id) return item;
      const next = { ...item, [key]: value } as DetailRow;
      if (key === "credit" || key === "debit") {
        const quantity = Number(key === "credit" ? value : item.credit);
        const price = Number(key === "debit" ? value : item.debit);
        next.remarks = quantity > 0 && price > 0
          ? (quantity * price).toFixed(2)
          : "";
      }
      return next;
    }));
  }

  function saveDetails() {
    const rowValidation = z.array(voucherDetailSchema).safeParse(details);
    if (!rowValidation.success) {
      const nextErrors: Record<number, string> = {};
      rowValidation.error.issues.forEach((issue) => {
        const index = Number(issue.path[0]);
        const row = details[index];
        if (row && !nextErrors[row.id]) nextErrors[row.id] = issue.message;
      });
      setDetailErrors(nextErrors);
      return;
    }
    setDetailErrors({});
    setSavedPdfData(null);
    const data = {
      ...(reviewData ?? {}),
      business_name: user.businessName || "",
      business_address: user.address || "",
      business_email: user.email || "",
      business_mobile: user.mobile || "",
      to_email: selectedApprover,
      approval_user_email: selectedApprover,
      approval_user: JSON.stringify(selectedApprovalUser ?? { email: selectedApprover }),
      work_flow_json: buildWorkflowJson("", "draft"),
      contact_name: selectedContact?.contactName || selectedContact?.name || "",
      contact_company_name: selectedContact?.companyName || "",
      financial_id: String(user.financial_id ?? ""),
      financial_year_uuid: String(user.financial_year_uuid ?? ""),
      financial_year: String(user.financial_year ?? ""),
      period_id: String(user.period_id ?? ""),
      period_uuid: String(user.period_uuid ?? ""),
      period_name: String(user.period_name ?? ""),
      month_id: String(user.month_id ?? ""),
      month_uuid: String(user.month_uuid ?? ""),
      month_name: String(user.month_name ?? ""),
      from_json: JSON.stringify({
        name: user.name || "",
        company_name: user.businessName || "",
        address: user.address || "",
        phone: user.mobile || "",
        email: user.email || "",
        tax_id: reviewData?.tax_code || "",
      }),
      to_json: JSON.stringify({
        name: selectedContact?.contactName || selectedContact?.name || "",
        company_name: selectedContact?.companyName || "",
        address: selectedContact?.address || "",
        phone: selectedContact?.mobile || "",
        email: selectedContact?.name || "",
        tax_id: reviewData?.tax_code || "",
      }),
      details: JSON.stringify(
        details.map((row) => ({
          ...row,
          account_uuid:
            accounts.find((account) => account.name === row.ledger)?.id ?? null,
          product_uuid:
            row.product_uuid ??
            products.find((product) => product.name === row.ledger)?.id ??
            null,
          product_name: row.ledger || null,
          description: row.description || null,
        }))
      ),
      session_details: reviewData?.session_details ?? JSON.stringify(user),
      debit_amount_total: String(detailTotals.debit),
      credit_amount_total: String(detailTotals.credit),
      qty: String(detailTotals.credit),
      price: String(detailTotals.debit),
      amount: String(detailTotals.amount),
      product_name: Array.from(
        new Set(details.map((row) => row.ledger).filter(Boolean))
      ).join(", "),
    };
    saveVoucherReviewJson(data);
    setReviewData(data);
    setStepTwoSaved(true);
    setActiveTab("voucher");
  }

  function addDetail() {
    setStepTwoSaved(false);
      setDetails((current) => [
      ...current,
      { id: Date.now(), ledger: "", product_uuid: "", description: "", credit: "", debit: "", remarks: "" },
    ]);
  }

  function removeDetail(id: number) {
    setStepTwoSaved(false);
    setDetails((current) => current.filter((row) => row.id !== id));
  }

  function changeTab(tab: NewTab) {
    if (tab === "invoice" && !stepOneSaved) {
      toast.error("Please save Step 1 before going to Step 2.");
      return;
    }
    if (tab === "voucher" && !stepOneSaved) {
      toast.error("Please save Step 1 before going to Step 3.");
      return;
    }
    if (tab === "voucher" && !stepTwoSaved) {
      toast.error("Please save Step 2 before going to Step 3.");
      return;
    }
    setActiveTab(tab);
  }

  const detailTotals = React.useMemo(
    () => ({
      credit: details.reduce((total, row) => total + (Number(row.credit) || 0), 0),
      debit: details.reduce((total, row) => total + (Number(row.debit) || 0), 0),
      amount: details.reduce((total, row) => total + (Number(row.remarks) || 0), 0),
    }),
    [details]
  );
  const selectedContact = contacts.find((contact) => contact.id === selectedContactId);
  const selectedApprovalUser = approvalUsers.find((approvalUser) => approvalUser.email === selectedApprover);
  const reviewValue = (key: string) => reviewData?.[key] || "-";
  const reviewValueFallback = (...keys: string[]) => {
    for (const key of keys) {
      const value = reviewValue(key);
      if (value !== "-") return value;
    }
    return "-";
  };
  const partyFromJson = (key: "from_json" | "to_json") => {
    try {
      const parsed = JSON.parse(reviewData?.[key] ?? "{}");
      return parsed && typeof parsed === "object" ? parsed as Record<string, string> : {};
    } catch {
      return {};
    }
  };
  const fromParty = partyFromJson("from_json");
  const toParty = partyFromJson("to_json");
  const partyValue = (prefix: "from" | "to", field: string, party: Record<string, string>, fallback = "") =>
    Object.prototype.hasOwnProperty.call(viewEdits, `${prefix}_${field}`)
      ? viewEdits[`${prefix}_${field}`]
      : party[field] ?? fallback;
  const partyJson = (prefix: "from" | "to", party: Record<string, string>) => JSON.stringify({
    name: partyValue(prefix, "name", party),
    company_name: partyValue(prefix, "company_name", party),
    address: partyValue(prefix, "address", party),
    phone: partyValue(prefix, "phone", party),
    email: partyValue(prefix, "email", party),
    tax_id: partyValue(prefix, "tax_id", party),
  });
  const viewEditValue = (key: string) =>
    Object.prototype.hasOwnProperty.call(viewEdits, key)
      ? viewEdits[key]
      : reviewValue(key) === "-" ? "" : reviewValue(key);
  const updateViewField = (key: string, value: string) => {
    const nextEdits = { ...viewEdits, [key]: value };
    const partyFields = (prefix: "from" | "to", party: Record<string, string>) =>
      JSON.stringify({
        name: nextEdits[`${prefix}_name`] ?? party.name ?? "",
        company_name: nextEdits[`${prefix}_company_name`] ?? party.company_name ?? "",
        address: nextEdits[`${prefix}_address`] ?? party.address ?? "",
        phone: nextEdits[`${prefix}_phone`] ?? party.phone ?? "",
        email: nextEdits[`${prefix}_email`] ?? party.email ?? "",
        tax_id: nextEdits[`${prefix}_tax_id`] ?? party.tax_id ?? "",
      });
    const nextReviewData = {
      ...(reviewData ?? {}),
      ...nextEdits,
      from_json: partyFields("from", fromParty),
      to_json: partyFields("to", toParty),
    };
    setViewEdits(nextEdits);
    setReviewData(nextReviewData);
    setSavedPdfData(null);
    saveVoucherReviewJson(nextReviewData);
  };
  const updateApprover = (value: string) => {
    const nextReviewData = {
      ...(reviewData ?? {}),
      approval_user: JSON.stringify(approvalUsers.find((approvalUser) => approvalUser.email === value) ?? { email: value }),
      approval_user_email: value,
      to_email: value,
      work_flow_json: buildWorkflowJson("", "draft", value),
    };
    setSelectedApprover(value);
    setReviewData(nextReviewData);
    setSavedPdfData(null);
    saveVoucherReviewJson(nextReviewData);
  };
  const headerUser = React.useMemo(() => {
    try {
      return {
        ...user,
        ...JSON.parse(reviewData?.session_details ?? "{}"),
      } as VoucherUser;
    } catch {
      return user;
    }
  }, [reviewData?.session_details, user]);
  const formJson = React.useMemo(
    () => ({
      ...(reviewData ?? {}),
      details: details.map(({ id, ...row }) => row),
      credit_amount_total: detailTotals.credit,
      debit_amount_total: detailTotals.debit,
      difference: detailTotals.credit - detailTotals.debit,
    }),
    [reviewData, details, detailTotals]
  );
  const pdfPreviewData = savedPdfData ?? formJson;

  const tabs: Array<[NewTab, string]> = approvedViewOnly
      ? [["voucher", "Order"], ["json", "PDF View"]]
    : [
        ...(approvalMode ? [] : [["new", "Order"] as [NewTab, string], ["invoice", "Add Items"] as [NewTab, string]]),
        ["voucher", approvalMode ? "Order" : "View"],
        ["json", "PDF View"],
      ];
  return (
    <form
      noValidate
      className="flex min-h-full flex-col bg-background"
      onSubmit={submit}
      onChange={() => {
        if (activeTab === "new") setStepOneSaved(false);
      }}
    >
      <div
        className="sticky top-0 z-30 flex shrink-0 border-b border-border bg-background px-4 shadow-sm sm:px-6"
        role="tablist"
        aria-label="New voucher tabs"
      >
        {tabs.map(([tab, label], index) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={activeTab === tab}
            onClick={() => changeTab(tab)}
            className={`relative flex min-h-[64px] min-w-0 flex-1 flex-col items-center justify-center gap-1 border-b-2 px-1 py-2 text-center text-xs font-semibold leading-tight transition sm:min-h-0 sm:flex-row sm:gap-2 sm:px-2 sm:py-3 sm:text-sm ${
              activeTab === tab
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
            }`}
          >
            <span
              className={`flex size-5 items-center justify-center rounded-full text-[10px] ${
                activeTab === tab
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {index + 1}
            </span>
            {label}
          </button>
        ))}
      </div>
      {activeTab === "new" ? (
        <div className={`space-y-5 p-0 sm:p-6 ${sentForApproval ? "pointer-events-none opacity-80" : ""}`}>
          <input
            type="hidden"
            name="voucher_type"
            value={reviewData?.voucher_type || DEFAULT_VOUCHER_TYPE}
            readOnly
          />
          <input type="hidden" name="contact_user_catalog_id" value={selectedContact?.id ?? ""} readOnly />
          <input type="hidden" name="contact_name" value={selectedContact?.contactName || selectedContact?.name || ""} readOnly />
          <input type="hidden" name="contact_company_name" value={selectedContact?.companyName ?? ""} readOnly />
          <input type="hidden" name="status" value={statusValue} readOnly />
          {error ? <p className="text-sm text-destructive">{error}</p> : null}
          <section className="rounded-none border-0 bg-transparent p-4 shadow-none sm:rounded-2xl sm:border sm:border-border sm:bg-card sm:p-6 sm:shadow-sm [&>div>div]:content-start">
            <h2 className="mb-5 font-semibold">Order information</h2>
            <div className="grid gap-1 grid-cols-1">
              <div className="grid gap-1">
                <Label>Select</Label>
                <Select value={selectedContactId || "none"} onValueChange={(value) => setSelectedContactId(value === "none" ? "" : value)}>
                  <SelectTrigger aria-label="Select contact" className="min-h-10 w-full border border-input bg-background">
                    <SelectValue placeholder="Search contacts" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Search contacts</SelectItem>
                    {contacts.map((contact) => <SelectItem key={contact.id} value={contact.id}>{contact.name}</SelectItem>)}
                  </SelectContent>
                </Select>
                {selectedContact ? (
                  <p className="text-sm font-medium text-foreground">
                    Company: {selectedContact.companyName || "-"}
                  </p>
                ) : null}
              </div>
              <div className="grid gap-2 pt-2">
                <Label>Order No. <span className="text-destructive">*</span></Label>
                <Input
                  name="voucher_number"
                  defaultValue={reviewData?.voucher_number ?? ""}
                />
                {fieldErrors.voucher_number ? (
                  <p className="text-right text-xs text-destructive">
                    {fieldErrors.voucher_number}
                  </p>
                ) : null}
              </div>
            </div>
            <div className="mt-4 grid gap-4 grid-cols-1">
              <div className="grid gap-2">
                <Label>Document Date <span className="text-destructive">*</span></Label>
                <Input
                  name="document_date"
                  type="date"
                  defaultValue={reviewData?.document_date ?? ""}
                />
                {fieldErrors.document_date ? (
                  <p className="text-right text-xs text-destructive">
                    {fieldErrors.document_date}
                  </p>
                ) : null}
              </div>
            </div>
            <div className="mt-4 grid gap-4 grid-cols-1">
            </div>
            <div className="mt-5 grid gap-4 grid-cols-1">
              <div className="grid gap-2 md:col-span-2">
                <Label>Supply Terms</Label>
                <Textarea
                  name="supply_terms"
                  rows={3}
                  defaultValue={reviewData?.supply_terms ?? ""}
                />
              </div>
              <div className="grid gap-2 md:col-span-2">
                <Label>Description</Label>
                <Textarea
                  name="description"
                  rows={4}
                  defaultValue={reviewData?.description ?? ""}
                />
              </div>
            </div>
            <div className="mt-4 grid gap-4 grid-cols-1">
              <div className="grid gap-2">
                <Label htmlFor="status">Status <span className="text-destructive">*</span></Label>
                <Select value={statusValue} onValueChange={setStatusValue}>
                  <SelectTrigger id="status" className="h-10"><SelectValue placeholder="Select status" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                  </SelectContent>
                </Select>
                {fieldErrors.status ? (
                  <p className="text-right text-xs text-destructive">
                    {fieldErrors.status}
                  </p>
                ) : null}
              </div>
            </div>
          </section>
          <section className="rounded-none border-0 bg-transparent p-4 shadow-none sm:rounded-2xl sm:border sm:border-border sm:bg-card sm:p-6 sm:shadow-sm">
            <h2 className="mb-5 font-semibold">Attachments</h2>
            <label className="flex min-h-40 cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-primary text-sm text-muted-foreground transition hover:text-primary">
              <UploadCloud className="size-6" />
              {uploading ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Uploading...
                </>
              ) : (
                "Upload attachment"
              )}
              <input
                type="file"
                multiple
                className="hidden"
                onChange={uploadAttachment}
                disabled={uploading}
              />
            </label>
            {fieldErrors.files_json ? (
              <p className="text-xs text-destructive">
                {fieldErrors.files_json}
              </p>
            ) : null}
            {uploadError ? (
              <p className="mt-3 text-xs text-destructive">{uploadError}</p>
            ) : null}
            {attachments.length ? (
              <div className="mt-4 min-w-0 overflow-hidden rounded-lg border border-border bg-background">
                {attachments.map((attachment, index) => (
                  <div
                    key={
                      String(attachment.file_upload_id ?? attachment.file_url) +
                      "-" +
                      index
                    }
                    className="flex min-w-0 items-center justify-between gap-2 border-b border-border p-3 last:border-b-0"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                        <FileText className="size-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="break-all text-xs font-semibold">
                          {attachment.file_name}
                        </p>
                        <p className="text-[10px] text-muted-foreground">
                          {attachment.content_type || "File"}
                          {attachment.file_size
                            ? ` · ${(attachment.file_size / 1024).toFixed(
                                1
                              )} KB`
                            : ""}
                        </p>
                      </div>
                    </div>
                    <div className="flex shrink-0 items-center gap-0.5">
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="size-7 text-muted-foreground hover:text-foreground"
                        title="View attachment"
                        onClick={() =>
                          window.open(
                            attachment.file_url,
                            "_blank",
                            "noopener,noreferrer"
                          )
                        }
                      >
                        <Eye className="size-3.5" />
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="size-7 text-muted-foreground hover:text-foreground"
                        title="Download attachment"
                        onClick={() => downloadAttachment(attachment)}
                      >
                        <Download className="size-3.5" />
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="size-7 text-muted-foreground hover:text-destructive"
                        title="Remove attachment"
                        onClick={() =>
                          setAttachments((current) =>
                            current.filter(
                              (_, itemIndex) => itemIndex !== index
                            )
                          )
                        }
                      >
                        <X className="size-3.5" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
            <div className="mt-6 flex justify-end">
              <Button type="submit" disabled={saving}>
                {saving ? "Creating..." : "Save and Review"}
              </Button>
            </div>
          </section>
        </div>
      ) : activeTab === "invoice" ? (
        <section className={`flex-1 p-2 sm:p-6 ${sentForApproval ? "pointer-events-none opacity-80" : ""}`}>
          <div className="mx-auto w-full max-w-5xl text-[13px]">
            <div className="mb-5 rounded-2xl border border-border bg-card p-3 shadow-sm sm:p-6">
              <div className="grid gap-4 py-3 sm:grid-cols-4">
                <div>
                  <p className="text-xs text-muted-foreground">Supplier</p>
                  <p className="mt-1 font-semibold">
                    {reviewValue("contact_company_name")}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Document Date</p>
                  <p className="mt-1">{reviewValue("document_date")}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">
                    Status
                  </p>
                  <p className="mt-1 capitalize">{reviewValue("status")}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">
                    Order No.
                  </p>
                  <p className="mt-1 font-semibold">
                    {reviewValue("voucher_number")}
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-none border-0 bg-transparent p-0 shadow-none sm:rounded-2xl sm:border sm:border-border sm:bg-card sm:p-6 sm:shadow-sm">
              <h2 className="mb-5 text-base font-semibold">Add Items</h2>
              <div className="hidden overflow-x-auto md:block">
                <table className="w-full min-w-0 table-fixed text-left text-[13px]">
                  <thead>
                    <tr className="border-b border-border text-xs text-muted-foreground">
                      <th className="pb-3 pr-3">Product</th>
                      <th className="pb-3 pr-3">Qty</th>
                      <th className="pb-3 pr-3">Price</th>
                      <th className="pb-3 pr-3">Amount</th>
                      <th className="pb-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {details.map((row) => (
                      <React.Fragment key={row.id}>
                      <tr className="border-b border-border/70">
                        <td className="py-3 pr-3">
                          <Select
                            value={row.product_uuid || products.find((product) => product.name === row.ledger)?.id || ""}
                            onValueChange={(value) => {
                              const product = products.find((item) => item.id === value);
                              updateDetail(row.id, "ledger", product?.name ?? "");
                              updateDetail(row.id, "product_uuid", value);
                              updateDetail(row.id, "description", "");
                            }}
                          >
                            <SelectTrigger
                              aria-label="Select Product"
                              className="h-9 w-full rounded-lg border-input bg-background px-2 text-xs"
                            >
                              <SelectValue placeholder="Select product" />
                            </SelectTrigger>
                            <SelectContent>
                              {products.map((product) => (
                                <SelectItem
                                  key={product.id}
                                  value={product.id}
                                >
                                  {product.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </td>
                        <td className="py-3 pr-3">
                            <Input
                              type="number"
                              value={row.credit}
                              placeholder="Enter qty"
                            onChange={(event) =>
                              updateDetail(row.id, "credit", event.target.value)
                            }
                          />
                        </td>
                        <td className="py-3 pr-3">
                            <Input
                              type="number"
                              value={row.debit}
                              placeholder="Enter price"
                            onChange={(event) =>
                              updateDetail(row.id, "debit", event.target.value)
                            }
                          />
                        </td>
                        <td className="py-3 pr-3">
                          <Input
                            value={row.remarks}
                            placeholder="Enter amount"
                            readOnly
                          />
                        </td>
                        <td className="py-3 text-right">
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            aria-label="Delete row"
                            onClick={() => removeDetail(row.id)}
                          >
                            <Trash2 className="size-4" />
                          </Button>
                        </td>
                      </tr>
                      <tr className="border-b border-border/70">
                        <td colSpan={5} className="py-3">
                          {row.product_uuid ? (
                            <Textarea
                              value={row.description}
                              onChange={(event) =>
                                updateDetail(row.id, "description", event.target.value)
                              }
                              placeholder="Product description"
                              rows={2}
                              className="box-border min-h-14 w-full max-w-full resize-none break-words text-xs"
                            />
                          ) : null}
                        </td>
                      </tr>
                      {detailErrors[row.id] ? (
                        <tr>
                          <td colSpan={5} className="pb-2 text-right text-xs text-destructive">
                            {detailErrors[row.id]}
                          </td>
                        </tr>
                      ) : null}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="space-y-4 md:hidden">
                {details.map((row, index) => (
                  <div key={row.id} className="rounded-xl border border-border bg-background p-3 shadow-sm">
                    <div className="mb-4 flex items-center justify-between">
                      <p className="text-sm font-semibold">Item {index + 1}</p>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        aria-label="Delete row"
                        className="text-muted-foreground hover:text-destructive"
                        onClick={() => removeDetail(row.id)}
                      >
                        <Trash2 className="size-4" />
                      </Button>
                    </div>
                    <div className="grid gap-4">
                      <div className="grid gap-1.5">
                        <label className="text-xs font-medium text-muted-foreground">Product</label>
                        <Select
                          value={row.product_uuid || products.find((product) => product.name === row.ledger)?.id || ""}
                          onValueChange={(value) => {
                            const product = products.find((item) => item.id === value);
                            updateDetail(row.id, "ledger", product?.name ?? "");
                            updateDetail(row.id, "product_uuid", value);
                            updateDetail(row.id, "description", "");
                          }}
                        >
                          <SelectTrigger aria-label="Select Product" className="h-10 w-full rounded-lg border-input bg-background text-sm">
                            <SelectValue placeholder="Select product" />
                          </SelectTrigger>
                          <SelectContent>
                            {products.map((product) => (
                              <SelectItem key={product.id} value={product.id}>{product.name}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      {row.product_uuid ? <div className="grid gap-1.5">
                        <label className="text-xs font-medium text-muted-foreground">Description</label>
                        <Textarea value={row.description} onChange={(event) => updateDetail(row.id, "description", event.target.value)} placeholder="Product description" rows={3} className="resize-none text-sm" />
                      </div> : null}
                      <div className="grid grid-cols-1 gap-3">
                        <div className="grid gap-1.5">
                          <label className="text-xs font-medium text-muted-foreground">Qty</label>
                          <Input type="number" value={row.credit} placeholder="Enter qty" onChange={(event) => updateDetail(row.id, "credit", event.target.value)} />
                        </div>
                        <div className="grid gap-1.5">
                          <label className="text-xs font-medium text-muted-foreground">Price</label>
                          <Input type="number" value={row.debit} placeholder="Enter price" onChange={(event) => updateDetail(row.id, "debit", event.target.value)} />
                        </div>
                      </div>
                      <div className="grid gap-1.5">
                        <label className="text-xs font-medium text-muted-foreground">Amount</label>
                        <Input value={row.remarks} placeholder="Amount" readOnly />
                      </div>
                      {detailErrors[row.id] ? <p className="text-xs text-destructive">{detailErrors[row.id]}</p> : null}
                    </div>
                  </div>
                ))}
              </div>
              <Button
                type="button"
                variant="outline"
                className="mt-5 gap-2"
                onClick={addDetail}
              >
                <Plus className="size-4" />
                Add New
              </Button>
              <div className="mt-6 flex justify-end border-t border-border pt-5 text-sm">
                <div className="ml-auto flex w-[300px] max-w-full items-center justify-between gap-4 rounded-lg bg-muted/40 p-3">
                  <span className="whitespace-nowrap text-muted-foreground">Total Amount</span>
                  <p className="whitespace-nowrap font-semibold">
                    {detailTotals.amount.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between gap-3">
              <Button
                type="button"
                variant="ghost"
                className="gap-2 text-sm text-muted-foreground"
                onClick={() => setActiveTab("new")}
              >
                <ArrowLeft className="size-4" />
                Back to New
              </Button>
              <Button type="button" className="gap-2" onClick={saveDetails}>
                Save and Next <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
        </section>
      ) : activeTab === "json" ? (
        <section className="flex min-h-0 flex-1 p-0">
          <div className="h-[calc(100vh-120px)] min-h-[650px] w-full overflow-hidden bg-slate-100">
            <OrderTemplatePdfPreview data={pdfPreviewData} />
          </div>
        </section>
      ) : (
        <section className="flex-1 overflow-x-auto bg-[#e5e7eb] p-4 sm:p-8">
          <div className="mx-auto w-full max-w-[1120px]">
            <article className="bg-white px-4 py-8 text-[#193244] shadow-xl sm:px-14 sm:py-12">
              <fieldset disabled={viewOnly || sentForApproval} className="contents">
              <div className="border-b-2 border-[#193244] pb-4">
                <h1 className="text-2xl font-extrabold tracking-tight">Order</h1>
              </div>

              <div className="grid grid-cols-1 gap-5 pt-5 sm:grid-cols-2">
                <div className="space-y-5">
                  {[
                    ["ORDER NUMBER", reviewValue("voucher_number")],
                    ["ORDER DATE", reviewValue("document_date")],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <p className="mb-2 text-[11px] font-medium text-[#4d6472]">{label}</p>
                      <div className="h-8 border-b border-[#cbd5e1] bg-[#f1f4fc] px-2 py-1 text-sm">{value === "-" ? "" : value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 pt-8 sm:grid-cols-2 sm:gap-10">
                {([
                  ["BUYER / BILL TO", "from", fromParty],
                  ["SUPPLIER", "to", toParty],
                ] as Array<[string, "from" | "to", Record<string, string>]>).map(([title, prefix, party]) => {
                  const side = prefix as "from" | "to";
                  const values = party;
                  return (
                    <div key={title}>
                      <h2 className="mb-4 text-sm font-bold text-[#2d6877]">{title}</h2>
                      <p className="mb-1 text-[11px] text-[#4d6472]">{side === "to" ? "Supplier name" : "Buyer name"}</p>
                      <input value={partyValue(side, "name", values)} onChange={(event) => updateViewField(`${side}_name`, event.target.value)} className="h-7 w-full border-b border-[#cbd5e1] bg-[#f1f4fc] px-2 py-1 text-sm outline-none" />
                      <p className="mb-1 text-[11px] text-[#4d6472]">Company name &amp; address</p>
                      <input value={partyValue(side, "company_name", values)} onChange={(event) => updateViewField(`${side}_company_name`, event.target.value)} className="h-7 w-full border-0 bg-[#f1f4fc] px-2 py-1 text-sm outline-none" />
                      <input value={partyValue(side, "address", values)} onChange={(event) => updateViewField(`${side}_address`, event.target.value)} className="h-7 w-full border-b border-[#cbd5e1] bg-[#f1f4fc] px-2 py-1 text-sm outline-none" />
                      <p className="mb-1 mt-2 text-[11px] text-[#4d6472]">Contact name / phone</p>
                      <input value={partyValue(side, "phone", values)} onChange={(event) => updateViewField(`${side}_phone`, event.target.value)} className="h-7 w-full border-b border-[#cbd5e1] bg-[#f1f4fc] px-2 py-1 text-sm outline-none" />
                      <p className="mb-1 mt-2 text-[11px] text-[#4d6472]">Email</p>
                      <input value={partyValue(side, "email", values)} onChange={(event) => updateViewField(`${side}_email`, event.target.value)} className="h-7 w-full border-b border-[#cbd5e1] bg-[#f1f4fc] px-2 py-1 text-sm outline-none" />
                      <p className="mb-1 mt-2 text-[11px] text-[#4d6472]">Tax / registration ID</p>
                      <input value={partyValue(side, "tax_id", values)} onChange={(event) => updateViewField(`${side}_tax_id`, event.target.value)} className="h-7 w-full border-b border-[#cbd5e1] bg-[#f1f4fc] px-2 py-1 text-sm outline-none" />
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 overflow-x-auto border border-[#cbd5e1]">
                <table className="w-full min-w-[780px] table-fixed text-left text-xs">
                  <thead className="bg-[#193244] font-bold text-white">
                    <tr>
                      <th className="w-[5%] px-2 py-3">No.</th><th className="w-[27%] px-2 py-3">Description / item code</th><th className="w-[13%] px-2 py-3">Delivery date</th><th className="w-[7%] px-2 py-3">Qty</th><th className="w-[7%] px-2 py-3">Unit</th><th className="w-[13%] px-2 py-3">Unit price</th><th className="w-[11%] px-2 py-3">Discount</th><th className="w-[11%] px-2 py-3 text-right">Amount</th><th className="w-[6%] px-2 py-3 text-center">Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {details.map((row, index) => (
                      <tr key={row.id} className="border-b border-[#cbd5e1]">
                        <td className="px-2 py-3 text-center text-[#4d6472]">{index + 1}</td><td className="bg-[#f1f4fc] px-2 py-3">{row.description || row.ledger || ""}</td><td className="bg-[#f1f4fc] px-2 py-3"></td><td className="bg-[#f1f4fc] px-2 py-3">{(Number(row.credit) || 0).toFixed(2)}</td><td className="bg-[#f1f4fc] px-2 py-3">-</td><td className="bg-[#f1f4fc] px-2 py-3">{(Number(row.debit) || 0).toFixed(2)}</td><td className="bg-[#f1f4fc] px-2 py-3">-</td><td className="bg-[#f1f4fc] px-2 py-3 text-right">{row.remarks || ""}</td><td className="bg-[#f1f4fc] px-2 py-3 text-center"><button type="button" onClick={() => setActiveTab("invoice")} className="inline-flex size-7 items-center justify-center rounded-md text-[#193244] hover:bg-[#dbe5ef]" aria-label={`Edit item ${index + 1}`} title="Edit item"><Pencil className="size-3.5" /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-1 gap-8 pt-8 sm:grid-cols-[1.3fr_.7fr] sm:gap-10">
                <div>
                  <h2 className="mb-2 text-sm font-bold text-[#2d6877]">SUPPLY TERMS</h2>
                  <textarea value={viewEditValue("supply_terms")} onChange={(event) => updateViewField("supply_terms", event.target.value)} rows={2} className="w-full resize-none border-b border-[#cbd5e1] bg-[#f1f4fc] px-2 py-2 text-sm outline-none" />
                  <p className="mb-1 mt-3 text-[11px] text-[#4d6472]">Delivery terms / ship-to address</p>
                  <input value={viewEditValue("delivery_terms")} onChange={(event) => updateViewField("delivery_terms", event.target.value)} className="h-7 w-full border-b border-[#cbd5e1] bg-[#f1f4fc] px-2 py-1 text-sm outline-none" />
                  <p className="mb-1 mt-3 text-[11px] text-[#4d6472]">Payment terms / method</p>
                  <input value={viewEditValue("payment_terms")} onChange={(event) => updateViewField("payment_terms", event.target.value)} className="h-7 w-full border-b border-[#cbd5e1] bg-[#f1f4fc] px-2 py-1 text-sm outline-none" />
                </div>
                <div className="pt-5 text-sm">
                  <div className="flex justify-between border-b border-[#cbd5e1] py-2"><span>Subtotal</span><span>{detailTotals.amount.toFixed(2)}</span></div>
                  <div className="flex justify-between border-b border-[#cbd5e1] py-2"><span>Tax</span><span>-</span></div>
                  <div className="flex justify-between border-b border-[#cbd5e1] py-2"><span>Freight / other</span><span>-</span></div>
                  <div className="mt-2 flex justify-between bg-[#eaf0f2] px-3 py-4 font-bold"><span>TOTAL</span><span>{detailTotals.amount.toFixed(2)}</span></div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 pt-8 text-xs sm:grid-cols-2 sm:gap-10">
                <div><h2 className="mb-4 text-sm font-bold text-[#2d6877]">PREPARED BY</h2><p className="mb-1 text-[#4d6472]">Name</p><div className="h-7 border-b border-[#cbd5e1] bg-[#f1f4fc]">{headerUser.name}</div><div className="mt-4 grid grid-cols-[1fr_.3fr] gap-5"><div><p className="mb-1 text-[#4d6472]">Signature</p><div className="h-7 border-b border-[#cbd5e1] bg-[#f1f4fc]" /></div><div><p className="mb-1 text-[#4d6472]">Date</p><div className="h-7 border-b border-[#cbd5e1] bg-[#f1f4fc]" /></div></div></div>
              </div>
              <div className="mt-8 max-w-md">
                <Label htmlFor="purchase-order-approver">Select Approver</Label>
                <Select value={selectedApprover || "none"} onValueChange={(value) => updateApprover(value === "none" ? "" : value)}>
                  <SelectTrigger id="purchase-order-approver" aria-label="Select approver" className="mt-2 min-h-10 w-full border border-input bg-background">
                    <SelectValue placeholder="Select approver" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Select approver</SelectItem>
                    {approvalUsers.map((approvalUser) => <SelectItem key={approvalUser.email} value={approvalUser.email}>{approvalUser.username || approvalUser.email}{approvalUser.username ? ` (${approvalUser.email})` : ""}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              </fieldset>
              {approvalMode ? (
                <div className="mt-6 grid max-w-md gap-4">
                  <div>
                    <Label htmlFor="purchase-order-approval-amount">Approved amount</Label>
                    <Input
                      id="purchase-order-approval-amount"
                      name="approved_amount"
                      type="number"
                      min="0"
                      step="0.01"
                      value={approvalAmount}
                      onChange={(event) => onApprovalAmountChange?.(event.target.value)}
                      disabled={approvalApproved || approvalLoading}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="purchase-order-approval-remarks">Approval remarks</Label>
                    <textarea
                      id="purchase-order-approval-remarks"
                      name="approval_remarks"
                      value={approvalRemarks}
                      onChange={(event) => onApprovalRemarksChange?.(event.target.value)}
                      disabled={approvalApproved || approvalLoading}
                      rows={3}
                      className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>
              ) : null}
              {error ? (
                <p className="mt-4 text-sm text-destructive">{error}</p>
              ) : null}
              {!approvedViewOnly && !sentForApproval ? <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                {!approvalMode ? (
                  <Button
                    type="button"
                    variant="ghost"
                    className="w-fit gap-2 text-sm text-muted-foreground"
                    onClick={() => setActiveTab("invoice")}
                  >
                    <ArrowLeft className="size-4" />
                    Back to Details
                  </Button>
                ) : <span />}
                <div className="flex w-full flex-wrap gap-2 sm:w-auto sm:justify-end">
                  {approvalMode ? (
                    <Button type="button" disabled={approvalApproved || approvalLoading} onClick={onApprove}>
                      {approvalLoading ? "Approving..." : approvalApproved ? "Approved" : "Approve Order"}
                    </Button>
                  ) : (
                    <>
                      <Button type="button" className="flex-1 sm:flex-none" disabled={!reviewData || saving} onClick={() => saveFinalVoucher()}>
                        {isEditing ? "Update Voucher" : "Draft"}
                      </Button>
                      <Button type="button" className="flex-1 whitespace-nowrap sm:flex-none" disabled={!reviewData || saving} onClick={() => saveFinalVoucher({ sendForApproval: true })}>
                        Sent for Approval
                      </Button>
                    </>
                  )}
                </div>
              </div> : null}
            </article>
          </div>
        </section>
      )}
    </form>
  );
}
