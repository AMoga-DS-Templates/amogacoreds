"use client";

import * as React from "react";
import { toast } from "sonner";
import {
  Bell,
  ClipboardCheck,
  AlarmClockCheck,
  Archive,
  BookOpen,
  Copy,
  ChevronDown,
  Eye,
  FileText,
  Flag,
  Mail,
  ListTodo,
  MoreHorizontal,
  Pin,
  Plus,
  Star,
  ThumbsDown,
  ThumbsUp,
  Volume2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import { getApprovedPurchaseOrders, getVoucherListEntries, getVoucherListReferenceValues, getVoucherLists, toggleApprovedPurchaseOrderAction, toggleVoucherListAction, type VoucherListActionField, type VoucherList, type VoucherListEntryFilter } from "../order-template-actions";
import type { VoucherListEntry } from "../order-template-table-type";
import { OrderTemplateForm } from "./order-template-form";
import { OrderHeader } from "@/components/order-custom-components/order-header";
import { OrderPanel } from "@/components/order-custom-components/order-panel";
import { OrderRecords } from "@/components/order-custom-components/order-table";
import type { OrderRecord, OrderRecordStatus } from "@/components/order-custom-components/order-table/types";

const MessageCircleMore = ({ size }: { size?: number }) => null;
const Share2 = ({ size }: { size?: number }) => null;

type Template = {
  id: string;
  name: string;
  subject: string;
  preview: string;
  body: string;
  date: string;
  relativeDate: string;
  group: string;
  is_like?: boolean | null;
  is_dislike?: boolean | null;
  is_flag?: boolean | null;
  is_important?: boolean | null;
  is_favourite?: boolean | null;
  is_archive?: boolean | null;
  is_actionitem?: boolean | null;
  is_pin?: boolean | null;
  project: VoucherList;
};

type OrderTemplateUser = {
  businessName: string;
  name: string;
  email: string;
  mobile: string;
  address: string;
  [key: string]: string | number | null;
};

type OrderTemplateWorkspaceProps = {
  accounts: Array<{ id: string; name: string }>;
  products: Array<{ id: string; name: string }>;
  contacts: Array<{ id: string; name: string; companyName: string }>;
  approvalUsers: Array<{
    email: string;
    userCatalogId?: string | number | null;
    userUuid?: string | null;
    username?: string | null;
    businessNumber?: string | number | null;
    businessName?: string | null;
    phone?: string | null;
    address?: string | null;
  }>;
  user: OrderTemplateUser;
};

type CreationMode = "manual";
type ApprovedPurchaseOrder = Record<string, any>;

export function OrderTemplateWorkspace({
  accounts,
  products,
  contacts,
  approvalUsers,
  user,
}: OrderTemplateWorkspaceProps) {
  const [query, setQuery] = React.useState("");
  const [projectsPage, setProjectsPage] = React.useState(1);
  const projectsPerPage = 12;
  const [isProjectsPageChanging, setIsProjectsPageChanging] = React.useState(false);
  const collapsed = false;
  const [templates, setTemplates] = React.useState<Template[]>([]);
  const [creatingVoucher, setCreatingVoucher] = React.useState(false);
  const [creationInstance, setCreationInstance] = React.useState(0);
  const [creationMode, setCreationMode] = React.useState<CreationMode>("manual");
  const [ledgerTableVoucherList, setLedgerTableVoucherList] = React.useState<VoucherList | null>(null);
  const [voucherListHeaderMode, setVoucherListHeaderMode] = React.useState<VoucherListEntryFilter>("all");
  const [voucherListHeaderValues, setVoucherListHeaderValues] = React.useState<string[]>([]);
  const [voucherListEntries, setVoucherListEntries] = React.useState<VoucherListEntry[]>([]);
  const [filterMode, setFilterMode] = React.useState<"action" | "all" | "important" | "favourite" | "archive" | "flag" | "pin">("all");
  const [activeSection, setActiveSection] = React.useState<"purchase-order" | "approved">("purchase-order");
  const [approvedPurchaseOrders, setApprovedPurchaseOrders] = React.useState<ApprovedPurchaseOrder[]>([]);
  const [selectedApprovedPurchaseOrder, setSelectedApprovedPurchaseOrder] = React.useState<ApprovedPurchaseOrder | null>(null);

  const runAction = async (template: Template, field: VoucherListActionField) => {
    const current = Boolean(template[field]);
    setTemplates((items) => items.map((item) => item.id === template.id ? {
      ...item,
      [field]: !current,
      project: { ...item.project, [field]: !current },
      ...(field === "is_like" && !current ? { is_dislike: false } : {}),
      ...(field === "is_dislike" && !current ? { is_like: false } : {}),
    } : item));
    const result = await toggleVoucherListAction(template.id, field, !current);
    if (!result.success) {
      setTemplates((items) => items.map((item) => item.id === template.id ? { ...item, [field]: current, project: { ...item.project, [field]: current } } : item));
      toast.error(result.error);
      return;
    }
    setTemplates((items) => items.map((item) => String(item.id) === String(template.id) ? { ...item, ...result.data, project: result.data } : item));
    toast.success(`${field.replace("is_", "").replace(/_/g, " ")} updated`);
  };

  const loadProjects = React.useCallback(() => {
    return getVoucherLists().then((result) => {
      if (!result.success) return;
      setTemplates(result.data.map((project) => ({
        id: String(project.plan_id ?? project.project_uuid ?? ""),
        name: project.plan_name || "Untitled Project",
        subject: project.status || "PurchaseOrder",
        preview: project.plan_description || "No project description.",
        body: project.plan_description || "No project description.",
        date: project.plan_end_date || project.plan_start_date || "-",
        relativeDate: project.plan_group || "PurchaseOrder",
        group: project.plan_group || "PurchaseOrder",
        is_like: project.is_like,
        is_dislike: project.is_dislike,
        is_flag: project.is_flag,
        is_important: project.is_important,
        is_favourite: project.is_favourite,
        is_archive: project.is_archive,
        is_actionitem: project.is_actionitem,
        is_pin: project.is_pin,
        project,
      })));
    });
  }, []);

  React.useEffect(() => {
    void loadProjects();
  }, [loadProjects]);

  const loadApprovedPurchaseOrders = React.useCallback(() => {
    return getApprovedPurchaseOrders().then((result) => {
      if (result.success) setApprovedPurchaseOrders(result.data);
    });
  }, []);

  React.useEffect(() => {
    void loadApprovedPurchaseOrders();
  }, [loadApprovedPurchaseOrders]);

  const visibleTemplates = templates.filter((template) => {
    const matchesFilter = filterMode === "all" ? true : filterMode === "action" ? Boolean(template.is_actionitem) : filterMode === "important" ? Boolean(template.is_important) : filterMode === "favourite" ? Boolean(template.is_favourite) : filterMode === "archive" ? Boolean(template.is_archive) : filterMode === "flag" ? Boolean(template.is_flag) : Boolean(template.is_pin);
    return matchesFilter && `${template.name} ${template.subject} ${template.preview}`.toLowerCase().includes(query.toLowerCase());
  });
  const visibleApprovedPurchaseOrders = approvedPurchaseOrders.filter((order) =>
    `${order.voucher_number ?? ""} ${order.description ?? ""} ${order.to_json?.company_name ?? ""}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );
  const selectSection = (section: "purchase-order" | "approved") => {
    setActiveSection(section);
    setCreatingVoucher(false);
    setLedgerTableVoucherList(null);
    setSelectedApprovedPurchaseOrder(null);
    setVoucherListEntries([]);
  };

  const runApprovedAction = async (order: ApprovedPurchaseOrder, field: VoucherListActionField) => {
    const current = Boolean(order[field]);
    setApprovedPurchaseOrders((items) => items.map((item) => String(item.voucher_id) === String(order.voucher_id)
      ? { ...item, [field]: !current, ...(field === "is_like" && !current ? { is_dislike: false } : {}), ...(field === "is_dislike" && !current ? { is_like: false } : {}) }
      : item));
    const result = await toggleApprovedPurchaseOrderAction(Number(order.voucher_id), field, !current);
    if (!result.success) {
      setApprovedPurchaseOrders((items) => items.map((item) => String(item.voucher_id) === String(order.voucher_id) ? { ...item, [field]: current } : item));
      toast.error(result.error);
      return;
    }
    toast.success(`${field.replace("is_", "").replace(/_/g, " ")} updated`);
  };
  const projectsPageCount = Math.max(1, Math.ceil((activeSection === "approved" ? visibleApprovedPurchaseOrders.length : visibleTemplates.length) / projectsPerPage));
  const projectsPaginationItems = React.useMemo<(number | "ellipsis")[]>(() => {
    if (projectsPageCount <= 5) {
      return Array.from({ length: projectsPageCount }, (_, index) => index + 1);
    }

    const pages = Array.from(new Set([1, projectsPageCount, projectsPage, projectsPage - 1, projectsPage + 1]))
      .filter((page) => page >= 1 && page <= projectsPageCount)
      .sort((left, right) => left - right);
    const items: (number | "ellipsis")[] = [];
    pages.forEach((page, index) => {
      if (index > 0 && page - pages[index - 1] > 1) items.push("ellipsis");
      items.push(page);
    });
    return items;
  }, [projectsPage, projectsPageCount]);
  const paginatedTemplates = visibleTemplates.slice(
    (projectsPage - 1) * projectsPerPage,
    projectsPage * projectsPerPage,
  );
  const paginatedApprovedPurchaseOrders = visibleApprovedPurchaseOrders.slice(
    (projectsPage - 1) * projectsPerPage,
    projectsPage * projectsPerPage,
  );
  const panelRecords = visibleTemplates.map((template) => {
    const project = template.project as VoucherList & Record<string, unknown>;
    return {
      id: template.id,
      name: template.name,
      yearCode: String(project.year_code ?? "-"),
      description: String(project.plan_description ?? "No description."),
      periods: Number(project.number_of_periods ?? 0),
      endDate: template.date,
      status: String(project.status ?? "Active"),
    };
  });
  const panelApprovedRecords = visibleApprovedPurchaseOrders.map((order) => ({
    id: String(order.voucher_uuid ?? order.voucher_id ?? order.voucher_number ?? "approved-order"),
    name: String(order.voucher_number ?? order.voucher_id ?? "Approved order"),
    yearCode: String(order.financial_year ?? "-"),
    description: String(order.description ?? order.narration ?? "Approved purchase order"),
    periods: 0,
    endDate: String(order.document_date ?? order.transaction_date ?? "-"),
    status: "Approved",
  }));
  const orderTableRecords: OrderRecord[] = voucherListEntries.map((entry, index) => {
    const rawStatus = String(entry.status ?? "draft").toLowerCase();
    const status = (["draft", "active", "posted", "approved"] as const).includes(rawStatus as OrderRecordStatus)
      ? rawStatus as OrderRecordStatus
      : "draft";
    return {
      id: String(entry.voucher_id ?? entry.voucher_number ?? `voucher-${index}`),
      voucherNumber: String(entry.voucher_number ?? "-"),
      voucherGroup: String(entry.voucher_group ?? "Purchase Order"),
      voucherType: String(entry.voucher_type ?? "Purchase Order"),
      financialYear: String(entry.financial_year ?? "-"),
      periodName: String(entry.period_name ?? "-"),
      monthName: String(entry.month_name ?? "-"),
      documentDate: String(entry.document_date ?? ""),
      transactionDate: String(entry.transaction_date ?? ""),
      postingDate: String(entry.posting_date ?? ""),
      narration: String(entry.narration ?? entry.description ?? "-"),
      totalAmount: Number(entry.transaction_amount ?? entry.debit_amount_total ?? 0),
      dueDate: String(entry.due_date ?? ""),
      status,
    };
  });
  React.useEffect(() => {
    setProjectsPage((page) => Math.min(page, projectsPageCount));
  }, [projectsPageCount]);
  React.useEffect(() => {
    setProjectsPage(1);
  }, [filterMode, query, activeSection]);
  React.useEffect(() => {
    if (isProjectsPageChanging) setIsProjectsPageChanging(false);
  }, [projectsPage]);
  React.useEffect(() => {
    window.dispatchEvent(new CustomEvent("authenticated-detail-view", { detail: Boolean(creatingVoucher || ledgerTableVoucherList || selectedApprovedPurchaseOrder) }));
    return () => { window.dispatchEvent(new CustomEvent("authenticated-detail-view", { detail: false })); };
  }, [creatingVoucher, ledgerTableVoucherList, selectedApprovedPurchaseOrder]);
  const startVoucherCreation = (mode: CreationMode) => {
    setLedgerTableVoucherList(null);
    setVoucherListHeaderMode("all");
    setVoucherListHeaderValues([]);
    setVoucherListEntries([]);
    setCreationMode(mode);
    setCreationInstance((instance) => instance + 1);
    setCreatingVoucher(true);
  };
  const openVoucherTable = (template: Template, entryFilter: VoucherListEntryFilter = "all") => {
    setCreatingVoucher(false);
    setLedgerTableVoucherList(template.project);
    setVoucherListHeaderMode(entryFilter);
    setVoucherListHeaderValues([]);
    const financialYearUuid = String(template.project.plan_id ?? "");
    if (entryFilter === "all") {
      void getVoucherListEntries(financialYearUuid, entryFilter).then(setVoucherListEntries);
    } else {
      void Promise.all([
        getVoucherListEntries(financialYearUuid, entryFilter),
        getVoucherListReferenceValues(financialYearUuid, entryFilter),
      ]).then(([entries, values]) => {
        setVoucherListEntries(entries);
        setVoucherListHeaderValues(values);
      });
    }
  };
  const didDefaultOpen = React.useRef(false);
  React.useEffect(() => {
    if (window.matchMedia("(max-width: 767px)").matches) return;
    if (didDefaultOpen.current || ledgerTableVoucherList || creatingVoucher || visibleTemplates.length === 0) return;
    didDefaultOpen.current = true;
    openVoucherTable(visibleTemplates[0], "all");
  }, [creatingVoucher, ledgerTableVoucherList, visibleTemplates]);
  return (
    <main className="project-workspace relative -mx-2 flex h-svh max-h-svh min-h-0 min-w-0 flex-1 flex-col overflow-hidden bg-background px-0 pb-0 pt-0 sm:pb-0 sm:pt-0">
      <style>{`.project-workspace button:empty{display:none!important}.project-workspace .mx-2.flex.items-center.justify-between{position:relative;justify-content:flex-start!important;min-height:1.5rem}.project-workspace button[title="PurchaseOrder"]{right:4.75rem!important}.project-workspace button[title="View financial months"]{right:3.25rem!important}.project-workspace button[title="View financial periods"]{right:1.75rem!important}.project-workspace .mx-2.flex.items-center.justify-between button:has(.lucide-more-horizontal),.project-workspace .mx-2.flex.items-center.justify-between button:has(.lucide-ellipsis){position:absolute;right:.25rem;display:inline-flex!important}`}</style>
      <div className="flex min-h-0 flex-1 overflow-visible border-y border-border bg-background md:overflow-hidden sm:rounded-xl sm:border-y sm:border-border sm:shadow-xs">
        <aside className={cn("h-full min-w-0 shrink-0 border-r border-border", creatingVoucher && "hidden md:block", "w-full md:w-[350px] lg:w-[400px]")}>
          <OrderPanel
            records={panelRecords}
            approvedRecords={panelApprovedRecords}
            onNewOrder={() => startVoucherCreation("manual")}
            onSelectRecord={(record, section) => {
              if (section === "purchase-order") {
                const template = visibleTemplates.find((item) => item.id === record.id);
                if (template) openVoucherTable(template, "all");
                return;
              }
              const order = visibleApprovedPurchaseOrders.find((item) => String(item.voucher_uuid ?? item.voucher_id ?? item.voucher_number ?? "approved-order") === record.id);
              if (order) {
                setSelectedApprovedPurchaseOrder(order);
                setCreatingVoucher(false);
                setLedgerTableVoucherList(null);
              }
            }}
          />
        </aside>
        <aside
          className={cn(
            "hidden h-full min-h-0 min-w-0 shrink-0 overflow-hidden border-r border-border transition-all duration-300",
            "w-full md:w-[350px] lg:w-[400px]",
          )}
        >
          <div className="flex h-full w-full shrink-0 flex-col overflow-hidden bg-background">
            <div className={cn("sticky top-0 z-30 flex h-10 shrink-0 items-center gap-4 overflow-hidden border-b border-border bg-background px-2.5 py-0 sm:px-3", creatingVoucher && "hidden md:flex")}>
              {([["purchase-order", "Purchase Order"], ["approved", "Approved"]] as const).map(([section, label]) => (
                <button
                  key={section}
                  type="button"
                  onClick={() => selectSection(section)}
                  className={cn("inline-flex h-10 items-center border-b-[3px] border-transparent px-0 text-sm font-semibold text-muted-foreground", activeSection === section && "border-primary text-primary")}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="flex shrink-0 items-center gap-2 bg-background p-2.5 sm:p-3">
              {!collapsed ? (
                <>
                <div className="relative min-w-0 flex-1">
                  <Input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search PurchaseOrder..."
                    className="h-9 w-full rounded-md bg-muted/20 pl-3 pr-3 text-xs"
                  />
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button type="button" variant="outline" size="sm" className="h-9 gap-1 text-xs">
                      <Plus className="size-3.5" /> New <ChevronDown className="size-3.5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-52 rounded-lg border border-border bg-background p-1 shadow-md">
                    <DropdownMenuItem className="gap-2 text-xs" onClick={() => startVoucherCreation("manual")}>
                      <FileText className="size-3.5" /> Purchase Order
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                </>
              ) : null}
            </div>

            {!collapsed && activeSection === "purchase-order" ? (
              <div className="no-scrollbar shrink-0 overflow-x-auto bg-background px-2 sm:px-3">
                <div className="flex min-w-max items-center gap-2.5 sm:gap-4">
                  <button type="button" onClick={() => setFilterMode("all")} className={cn("inline-flex h-8 items-center gap-1.5 border-b-2 border-transparent px-0.5 text-xs font-medium text-muted-foreground", filterMode === "all" && "border-primary text-primary")}><Mail className="h-[15px] w-[15px]" /> All {templates.length}</button>
                  <button type="button" onClick={() => setFilterMode("action")} className={cn("inline-flex h-8 items-center gap-1.5 border-b-2 border-transparent px-0.5 text-xs font-medium text-muted-foreground", filterMode === "action" && "border-primary text-primary")}><Bell className="h-[15px] w-[15px]" /> Action {templates.filter((item) => item.is_actionitem).length}</button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild><Button type="button" variant="ghost" size="icon" className={cn("h-8 w-7 rounded-none border-b-2 border-transparent", filterMode !== "all" && filterMode !== "action" && "border-primary text-primary")}><MoreHorizontal className="h-[15px] w-[15px]" /></Button></DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-44">
                      <DropdownMenuItem onClick={() => setFilterMode("important")} className={cn("flex items-center justify-between text-xs", filterMode === "important" && "bg-accent")}><span className="flex items-center gap-2"><AlarmClockCheck className="h-[14px] w-[14px] text-primary" />Important</span><span>{templates.filter((item) => item.is_important).length}</span></DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setFilterMode("favourite")} className={cn("flex items-center justify-between text-xs", filterMode === "favourite" && "bg-accent")}><span className="flex items-center gap-2"><Star className="h-[14px] w-[14px] text-primary" />Favorites</span><span>{templates.filter((item) => item.is_favourite).length}</span></DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setFilterMode("archive")} className={cn("flex items-center justify-between text-xs", filterMode === "archive" && "bg-accent")}><span className="flex items-center gap-2"><Archive className="h-[14px] w-[14px] text-primary" />Archived</span><span>{templates.filter((item) => item.is_archive).length}</span></DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setFilterMode("flag")} className={cn("flex items-center justify-between text-xs", filterMode === "flag" && "bg-accent")}><span className="flex items-center gap-2"><Flag className="h-[14px] w-[14px] text-destructive" />Flag</span><span>{templates.filter((item) => item.is_flag).length}</span></DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setFilterMode("action")} className={cn("flex items-center justify-between text-xs", filterMode === "action" && "bg-accent")}><span className="flex items-center gap-2"><Bell className="h-[14px] w-[14px] text-primary" />Action This</span><span>{templates.filter((item) => item.is_actionitem).length}</span></DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setFilterMode("pin")} className={cn("flex items-center justify-between text-xs", filterMode === "pin" && "bg-accent")}><span className="flex items-center gap-2"><Pin className="h-[14px] w-[14px] text-primary" />Pin Message</span><span>{templates.filter((item) => item.is_pin).length}</span></DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ) : null}

            <div className="min-h-0 flex-1 overflow-y-auto scrollbar-thin bg-background">
              {isProjectsPageChanging ? <div className="space-y-2 px-2 py-2" aria-label="Loading purchase orders">{Array.from({ length: 6 }, (_, index) => <div key={index} className="space-y-3 rounded-xl border border-border/60 p-4"><div className="h-4 w-3/4 animate-pulse rounded bg-muted" /><div className="h-3 w-1/2 animate-pulse rounded bg-muted" /><div className="h-3 w-1/3 animate-pulse rounded bg-muted" /></div>)}</div> : null}
              <div className={cn("flex flex-col gap-1 px-2 py-2", isProjectsPageChanging && "hidden")}>
                {activeSection === "approved" ? (
                  visibleApprovedPurchaseOrders.length === 0 ? (
                    <div className="rounded-lg border border-dashed p-8 text-center text-sm text-muted-foreground">
                      No approved purchase orders found.
                    </div>
                  ) : paginatedApprovedPurchaseOrders.map((order) => (
                    <div key={String(order.voucher_uuid ?? order.voucher_id)} className="space-y-1.5">
                    <Card
                      onClick={() => {
                        setSelectedApprovedPurchaseOrder(order);
                        setCreatingVoucher(false);
                        setLedgerTableVoucherList(null);
                      }}
                      className={cn("group relative my-1 flex cursor-pointer select-none flex-col gap-2 rounded-xl border p-3 shadow-[0_1px_2px_rgba(15,23,42,0.05)] transition-all duration-200 hover:bg-muted/50 hover:shadow-sm sm:p-4", selectedApprovedPurchaseOrder?.voucher_id === order.voucher_id ? "border-primary/30" : "border-border")}
                    >
                      {selectedApprovedPurchaseOrder?.voucher_id === order.voucher_id ? <div className="absolute bottom-0 left-0 top-0 w-1 rounded-l-xl bg-primary" /> : null}
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0 flex-1 space-y-1">
                          <p className="text-sm font-semibold text-foreground">Voucher No: {String(order.voucher_number ?? order.voucher_id ?? "-")}</p>
                          <p className="text-xs text-muted-foreground">Date: {String(order.transaction_date ?? order.document_date ?? "-")}</p>
                          <p className="text-xs text-muted-foreground">Amount: {String(order.transaction_amount ?? order.amount ?? "-")}</p>
                          <p className="text-xs text-muted-foreground">Created By: {String(order.created_user_name ?? order.created_user_email ?? "-")}</p>
                          <p className="text-xs text-muted-foreground">Voucher Group: {String(order.voucher_group ?? "Purchase Order")}</p>
                          <Badge className="mt-2 h-6 rounded-full px-2.5 py-0 text-[11px]">Approved</Badge>
                        </div>
                      </div>
                    </Card>
                    <div className="flex items-center justify-between px-2 py-1 text-xs text-muted-foreground sm:px-3">
                        <div className="flex items-center gap-3">
                        <button type="button" title="Copy" className="hover:text-foreground" onClick={(event) => { event.stopPropagation(); void navigator.clipboard?.writeText(String(order.voucher_number ?? "")); }}><Copy size={14} /></button>
                        <button type="button" title="Flag" className="hover:text-foreground" onClick={(event) => { event.stopPropagation(); void runApprovedAction(order, "is_flag"); }}><Flag size={14} className={order.is_flag ? "fill-current text-primary" : undefined} /></button>
                        <button type="button" title="Like" className="hover:text-foreground" onClick={(event) => { event.stopPropagation(); void runApprovedAction(order, "is_like"); }}><ThumbsUp size={14} className={order.is_like ? "fill-current text-primary" : undefined} /></button>
                        <button type="button" title="Dislike" className="hover:text-foreground" onClick={(event) => { event.stopPropagation(); void runApprovedAction(order, "is_dislike"); }}><ThumbsDown size={14} className={order.is_dislike ? "fill-current text-primary" : undefined} /></button>
                        <button type="button" title="Mute" className="hover:text-foreground" onClick={(event) => event.stopPropagation()}><Volume2 size={14} /></button>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3">
                          <button type="button" title="View Purchase Order" aria-label="View Purchase Order" className="text-muted-foreground hover:text-foreground" onClick={(event) => { event.stopPropagation(); setSelectedApprovedPurchaseOrder(order); }}><Eye size={14} /></button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild><button type="button" title="More actions" className="text-muted-foreground hover:text-foreground" onClick={(event) => event.stopPropagation()}><MoreHorizontal size={16} /></button></DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-44">
                              <DropdownMenuItem onClick={() => void runApprovedAction(order, "is_important")}><AlarmClockCheck size={14} />{order.is_important ? "Remove Important" : "Important"}</DropdownMenuItem>
                              <DropdownMenuItem onClick={() => void runApprovedAction(order, "is_favourite")}><Star size={14} />{order.is_favourite ? "Unfavorite" : "Favorites"}</DropdownMenuItem>
                              <DropdownMenuItem onClick={() => void runApprovedAction(order, "is_archive")}><Archive size={14} />{order.is_archive ? "Unarchive" : "Archive"}</DropdownMenuItem>
                              <DropdownMenuItem onClick={() => void runApprovedAction(order, "is_actionitem")}><Bell size={14} />{order.is_actionitem ? "Remove Action This" : "Action This"}</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    </div>
                  ))
                ) : visibleTemplates.length === 0 ? (
                  <div className="rounded-lg border border-dashed p-8 text-center text-sm text-muted-foreground">
                    No projects found.
                  </div>
                ) : paginatedTemplates.map((template) => {
                  return (
                    <div key={template.id} className="space-y-1.5">
                      <Card
                        onClick={() => openVoucherTable(template, "all")}
                        className={cn(
                          "group relative flex cursor-pointer select-none border border-transparent transition-all duration-200",
                          collapsed
                            ? "mx-1 my-1 justify-center rounded-lg border-0 p-1 shadow-none hover:bg-accent"
                            : "my-1 flex-col gap-2 rounded-xl border border-border/60 p-3 shadow-[0_1px_2px_rgba(15,23,42,0.05)] sm:p-4 hover:bg-muted/50 hover:shadow-sm",
                          !collapsed && "border-primary/20",
                        )}
                      >
                        {collapsed ? (
                          <span title={template.name} className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-xs font-bold text-primary">{template.name.slice(0, 2).toUpperCase()}</span>
                        ) : (
                          <>
                            <div className="flex items-start justify-between gap-3">
                              <div className="min-w-0 flex-1">
                                <div className="mb-1 flex items-center gap-2">
                                  <span className="truncate text-sm font-semibold text-foreground">{template.name}</span>
                                </div>
                                <p className="truncate text-sm text-muted-foreground">Year Code: {template.project.year_code || "-"}</p>
                                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground/70">{template.project.plan_description || "No description."}</p>
                                <p className="text-xs leading-relaxed text-muted-foreground/70">Number of Periods: {template.project.number_of_periods ?? 0}</p>
                                <div className="mt-2"><Badge className="h-6 rounded-full px-2.5 py-0 text-[11px]">{template.project.status || "Active"}</Badge></div>
                              </div>
                              <div className="flex shrink-0 flex-col items-end gap-0.5 pt-0.5 text-[10px] text-muted-foreground"><span>{template.date}</span><span>{template.relativeDate}</span></div>
                            </div>
                          </>
                        )}
                      <button type="button" className="absolute -bottom-7 right-28 z-10 inline-flex h-6 w-6 translate-y-0 items-center justify-center text-muted-foreground hover:text-foreground" onClick={(event) => { event.stopPropagation(); openVoucherTable(template, "all"); }} title="PurchaseOrder" aria-label="PurchaseOrder"><BookOpen className="h-3.5 w-3.5" /></button><button type="button" className="absolute -bottom-7 right-36 z-10 inline-flex h-6 w-6 translate-y-0 items-center justify-center text-muted-foreground hover:text-foreground" onClick={(event) => { event.stopPropagation(); openVoucherTable(template, "month"); }} title="View financial months" aria-label="View financial months"><ClipboardCheck className="h-3.5 w-3.5" /></button><button type="button" className="absolute -bottom-7 right-28 z-10 inline-flex h-6 w-6 translate-y-0 items-center justify-center text-muted-foreground hover:text-foreground" onClick={(event) => { event.stopPropagation(); openVoucherTable(template, "period"); }} title="View financial periods" aria-label="View financial periods"><ListTodo className="h-3.5 w-3.5" /></button>
                      </Card>
                      {!collapsed ? <div className="flex items-center justify-between px-2 py-1 text-xs text-muted-foreground sm:px-3"><div className="flex items-center gap-2 sm:gap-3"><button type="button" className="flex items-center text-muted-foreground transition-colors hover:text-foreground" onClick={() => void navigator.clipboard?.writeText(template.name)} title="Copy"><Copy size={14} /></button><button type="button" className="flex items-center text-muted-foreground transition-colors hover:text-foreground" onClick={() => void runAction(template, "is_flag")}><Flag size={14} className={template.is_flag ? "fill-current text-primary" : undefined} /></button><button type="button" className="flex items-center text-muted-foreground transition-colors hover:text-foreground" onClick={() => void runAction(template, "is_like")}><ThumbsUp size={14} className={template.is_like ? "fill-current text-primary" : undefined} /></button><button type="button" className="flex items-center text-muted-foreground transition-colors hover:text-foreground" onClick={() => void runAction(template, "is_dislike")}><ThumbsDown size={14} className={template.is_dislike ? "fill-current text-primary" : undefined} /></button><button type="button" className="flex items-center text-muted-foreground transition-colors hover:text-foreground"><Volume2 size={14} /></button></div><div className="flex items-center gap-2 sm:gap-3"><button type="button" className="flex items-center text-muted-foreground transition-colors hover:text-foreground"><MessageCircleMore size={15} /></button><button type="button" className="flex items-center text-muted-foreground transition-colors hover:text-foreground"><Share2 size={15} /></button><DropdownMenu><DropdownMenuTrigger asChild><button type="button" className="flex items-center text-muted-foreground transition-colors hover:text-foreground"><MoreHorizontal size={16} /></button></DropdownMenuTrigger><DropdownMenuContent align="end" className="w-44 bg-background border border-border p-1 shadow-md rounded-lg"><DropdownMenuItem className="cursor-pointer text-xs gap-2 py-1.5" onClick={() => void runAction(template, "is_important")}><AlarmClockCheck size={14} className={template.is_important ? "fill-current text-primary" : "text-primary"} />{template.is_important ? "Remove Important" : "Important"}</DropdownMenuItem><DropdownMenuItem className="cursor-pointer text-xs gap-2 py-1.5" onClick={() => void runAction(template, "is_favourite")}><Star size={14} className={template.is_favourite ? "fill-current text-primary" : "text-primary"} />{template.is_favourite ? "Unfavorite" : "Favorite"}</DropdownMenuItem><DropdownMenuItem className="cursor-pointer text-xs gap-2 py-1.5" onClick={() => void runAction(template, "is_archive")}><Archive size={14} className={template.is_archive ? "fill-current text-primary" : "text-primary"} />{template.is_archive ? "Unarchive" : "Archive"}</DropdownMenuItem><DropdownMenuItem className="cursor-pointer text-xs gap-2 py-1.5" onClick={() => void runAction(template, "is_flag")}><Flag size={14} className="text-destructive" />{template.is_flag ? "Remove Flag" : "Flag"}</DropdownMenuItem><DropdownMenuItem className="cursor-pointer text-xs gap-2 py-1.5" onClick={() => void runAction(template, "is_actionitem")}><Bell size={14} className={template.is_actionitem ? "fill-current text-primary" : "text-primary"} />{template.is_actionitem ? "Remove Action This" : "Action This"}</DropdownMenuItem><DropdownMenuItem className="cursor-pointer text-xs gap-2 py-1.5" onClick={() => void runAction(template, "is_pin")}><Pin size={14} className={template.is_pin ? "fill-current text-primary" : "text-primary"} />{template.is_pin ? "Unpin" : "Pin"}</DropdownMenuItem></DropdownMenuContent></DropdownMenu></div></div> : null}
                    </div>
                  );
                })}
              </div>
            </div>
            {projectsPageCount > 1 ? (
              <div className="flex shrink-0 flex-col items-center gap-1 border-t border-border bg-muted/20 px-3 py-2">
                <p className="w-full whitespace-nowrap text-left text-xs text-muted-foreground">Page <span className="font-medium text-foreground">{projectsPage}</span> of {projectsPageCount}</p>
                <Pagination className="mx-0 w-full justify-center">
                  <PaginationContent className="flex-nowrap justify-center gap-1">
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={(event) => {
                        event.preventDefault();
                        setIsProjectsPageChanging(true);
                        setProjectsPage((page) => Math.max(1, page - 1));
                      }}
                      aria-disabled={projectsPage === 1 || isProjectsPageChanging}
                      className={cn(
                        "size-8 gap-0 p-0 [&>span]:hidden [&>svg]:size-4",
                        (projectsPage === 1 || isProjectsPageChanging) && "pointer-events-none opacity-50",
                      )}
                    />
                  </PaginationItem>
                  {projectsPaginationItems.map((item, index) => (
                    <PaginationItem key={`${item}-${index}`}>
                      {item === "ellipsis" ? <PaginationEllipsis className="size-7" /> : (
                        <PaginationLink size="icon" isActive={projectsPage === item} onClick={() => { setIsProjectsPageChanging(true); setProjectsPage(item); }} className="size-10 text-sm font-medium">
                          {item}
                        </PaginationLink>
                      )}
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationNext
                      onClick={(event) => {
                        event.preventDefault();
                        setIsProjectsPageChanging(true);
                        setProjectsPage((page) => Math.min(projectsPageCount, page + 1));
                      }}
                      aria-disabled={projectsPage === projectsPageCount || isProjectsPageChanging}
                      className={cn(
                        "size-8 gap-0 p-0 [&>span]:hidden [&>svg]:size-4",
                        (projectsPage === projectsPageCount || isProjectsPageChanging) && "pointer-events-none opacity-50",
                      )}
                    />
                  </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            ) : null}
          </div>
        </aside>

        <section className={cn("flex h-full min-h-0 min-w-0 flex-1 flex-col overflow-hidden bg-background", !creatingVoucher && !ledgerTableVoucherList && !selectedApprovedPurchaseOrder && "hidden md:block")}>
          {selectedApprovedPurchaseOrder ? (
            <div className="flex h-full min-h-0 flex-col overflow-hidden">
              <OrderHeader
                label="Approved Purchase Order"
                value={String(selectedApprovedPurchaseOrder.voucher_number ?? "-")}
                description="Approved order"
                avatarText="AP"
                onClose={() => setSelectedApprovedPurchaseOrder(null)}
              />
              <div className="min-h-0 flex-1 overflow-y-auto">
                <OrderTemplateForm
                  accounts={accounts}
                  products={products}
                  contacts={contacts}
                  approvalUsers={approvalUsers}
                  user={user}
                  initialVoucher={selectedApprovedPurchaseOrder}
                  viewOnly
                  approvedViewOnly
                  onCancel={() => setSelectedApprovedPurchaseOrder(null)}
                />
              </div>
            </div>
          ) : ledgerTableVoucherList ? (
            <OrderRecords
              title={ledgerTableVoucherList.plan_name ?? "PurchaseOrder"}
              description={voucherListHeaderMode === "period" ? `Financial Year: ${ledgerTableVoucherList.plan_name ?? "-"}` : voucherListHeaderMode === "month" ? `Financial Year: ${ledgerTableVoucherList.plan_name ?? "-"}` : "Voucher records for this financial year"}
              headerLabel={voucherListHeaderMode === "period" ? "Period" : voucherListHeaderMode === "month" ? "Month" : "Financial Year"}
              headerValue={ledgerTableVoucherList.plan_name ?? "-"}
              headerAvatar="YE"
              onClose={() => { setLedgerTableVoucherList(null); setVoucherListHeaderMode("all"); setVoucherListHeaderValues([]); setVoucherListEntries([]); }}
              records={orderTableRecords}
            />
          ) : creatingVoucher ? (
            <div className="flex h-full min-h-0 flex-col overflow-hidden">
              <OrderHeader label="Purchase Order" description="Create Purchase Order" avatarText="VC" onClose={() => setCreatingVoucher(false)} />
              <div className="min-h-0 flex-1 overflow-y-auto">
                <OrderTemplateForm key={`new-purchase-order-${creationInstance}`} accounts={accounts} products={products} contacts={contacts} approvalUsers={approvalUsers} user={user} onSaved={() => { void loadProjects(); void loadApprovedPurchaseOrders(); }} onCancel={() => setCreatingVoucher(false)} />
              </div>
            </div>
          ) : (
            <div className="flex h-full min-h-[320px] flex-col items-center justify-center gap-2 p-8 text-center text-muted-foreground"><Mail className="size-10" /><p className="text-sm font-medium text-foreground">Select a financial year</p><p className="text-xs">Click a card or book icon to view voucher records.</p></div>
          )}
        </section>
      </div>
    </main>
  );
}
