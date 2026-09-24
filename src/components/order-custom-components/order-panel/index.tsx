"use client";

import * as React from "react";
import {
  Bell,
  BookOpen,
  CheckSquare,
  ClipboardCheck,
  Copy,
  Flag,
  ListTodo,
  Mail,
  MoreHorizontal,
  Plus,
  ThumbsDown,
  ThumbsUp,
  Volume2,
  ChevronDown,
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
import { cn } from "@/lib/utils";
import type { OrderPanelProps, OrderPanelRecord, OrderPanelSection } from "./types";

function OrderPanelCard({
  record,
  section,
  onSelect,
}: {
  record: OrderPanelRecord;
  section: OrderPanelSection;
  onSelect?: (record: OrderPanelRecord, section: OrderPanelSection) => void;
}) {
  return (
    <div className="mx-3 my-0.5 space-y-1.5">
      <Card
        className="cursor-pointer rounded-xl border border-primary/20 p-3 shadow-[0_1px_2px_rgba(15,23,42,0.05)] transition hover:bg-muted/50 hover:shadow-sm sm:p-4"
        onClick={() => onSelect?.(record, section)}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1 space-y-1">
            <p className="text-sm font-semibold text-foreground">{record.name}</p>
            <p className="text-sm text-muted-foreground">Year Code: {record.yearCode}</p>
            <p className="text-xs leading-relaxed text-muted-foreground/70">{record.description}</p>
            <p className="text-xs leading-relaxed text-muted-foreground/70">Number of Periods: {record.periods}</p>
            <Badge className="mt-2 h-6 rounded-full px-2.5 py-0 text-[11px]">{record.status}</Badge>
          </div>
          <div className="flex shrink-0 flex-col items-end gap-0.5 text-[10px] text-muted-foreground">
            <span>{record.endDate}</span>
            <span>{record.yearCode}</span>
          </div>
        </div>
      </Card>
      <div className="flex items-center justify-between px-2 py-1 text-xs text-muted-foreground sm:px-3">
        <div className="flex items-center gap-3">
          <button type="button" title="Copy" className="hover:text-foreground"><Copy size={14} /></button>
          <button type="button" title="Flag" className="hover:text-foreground"><Flag size={14} /></button>
          <button type="button" title="Like" className="hover:text-foreground"><ThumbsUp size={14} /></button>
          <button type="button" title="Dislike" className="hover:text-foreground"><ThumbsDown size={14} /></button>
          <button type="button" title="Mute" className="hover:text-foreground"><Volume2 size={14} /></button>
        </div>
        <div className="flex items-center gap-3">
          <button type="button" title="View order" className="hover:text-foreground"><BookOpen size={14} /></button>
          <button type="button" title="Checklist" className="hover:text-foreground"><CheckSquare size={14} /></button>
          <button type="button" title="Financial periods" className="hover:text-foreground"><ListTodo size={14} /></button>
          <button type="button" title="More actions" className="hover:text-foreground"><MoreHorizontal size={16} /></button>
        </div>
      </div>
    </div>
  );
}

export function OrderPanel({
  records = [],
  approvedRecords = [],
  defaultSection = "purchase-order",
  onNewOrder,
  onSelectRecord,
  className,
}: OrderPanelProps) {
  const [section, setSection] = React.useState<OrderPanelSection>(defaultSection);
  const [query, setQuery] = React.useState("");
  const [filter, setFilter] = React.useState<"all" | "action">("all");
  const sourceRecords = section === "approved" ? approvedRecords : records;
  const visibleRecords = sourceRecords.filter((record) => {
    const search = query.trim().toLowerCase();
    return (!search || `${record.name} ${record.yearCode} ${record.description}`.toLowerCase().includes(search)) && (filter === "all" || section === "approved");
  });

  return (
    <section className={cn("flex h-full min-h-0 w-full min-w-0 flex-col overflow-hidden bg-background", className)}>
      <div className="sticky top-0 z-20 shrink-0 bg-background">
        <div className="flex h-10 items-center gap-4 border-b border-border px-3">
          {([['purchase-order', 'Purchase Order'], ['approved', 'Approved']] as const).map(([value, label]) => (
            <button key={value} type="button" onClick={() => { setSection(value); setFilter("all"); }} className={cn("inline-flex h-10 items-center border-b-[3px] border-transparent text-sm font-semibold text-muted-foreground", section === value && "border-primary text-primary")}>
              {label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 p-3">
          <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search PurchaseOrder..." className="h-9 min-w-0 flex-1 rounded-md bg-muted/20 text-xs" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild><Button type="button" variant="outline" size="sm" className="h-9 gap-1 text-xs"><Plus className="size-3.5" /> New <ChevronDown className="size-3.5" /></Button></DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52"><DropdownMenuItem onClick={onNewOrder}>Purchase Order</DropdownMenuItem></DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center gap-4 border-b border-border px-3">
          <button type="button" onClick={() => setFilter("all")} className={cn("inline-flex h-8 items-center gap-1.5 border-b-2 border-transparent text-xs font-medium text-muted-foreground", filter === "all" && "border-primary text-primary")}><Mail className="size-[15px]" /> All {sourceRecords.length}</button>
          <button type="button" onClick={() => setFilter("action")} className={cn("inline-flex h-8 items-center gap-1.5 border-b-2 border-transparent text-xs font-medium text-muted-foreground", filter === "action" && "border-primary text-primary")}><Bell className="size-[15px]" /> Action 0</button>
          <MoreHorizontal className="size-4 text-muted-foreground" />
        </div>
      </div>
      <div className="no-scrollbar min-h-0 flex-1 overflow-y-auto py-2 [scrollbar-gutter:stable_both-edges]">
        {visibleRecords.length ? visibleRecords.map((record) => <OrderPanelCard key={record.id} record={record} section={section} onSelect={onSelectRecord} />) : <div className="rounded-lg border border-dashed p-8 text-center text-sm text-muted-foreground">No records found.</div>}
      </div>
    </section>
  );
}

export type { OrderPanelProps, OrderPanelRecord, OrderPanelSection } from "./types";
