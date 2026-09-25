"use client";

/* JSON definitions are rendered as isolated React components by ShadcnChatRenderer. */
 

import {
  Table as ShadcnTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { defineComponent } from "../json-component";
import { useEffect, useMemo, useState } from "react";
import { z } from "zod";

const ColSchema = z.object({
  header: z.string(),
  type: z.enum(["string", "number", "boolean", "date"]).optional(),
});

export const Col = defineComponent({
  name: "Col",
  props: ColSchema,
  description: "Column definition for Table â€” header label and optional type.",
  component: () => null,
});

const TableSchema = z.object({
  columns: z.array(z.union([Col.ref, ColSchema])),
  rows: z.array(z.array(z.any())).default([]),
  pageSize: z.number().int().positive().optional(),
});

export const Table = defineComponent({
  name: "Table",
  props: TableSchema,
  description:
    "Data table. columns: Col[] with header/type, rows: 2D array of values, optional pageSize enables local pagination.",
  component: function TableRenderer({ props }) {
    const [currentPage, setCurrentPage] = useState(1);

    const columns = useMemo(
      () =>
        ((props.columns ?? []) as unknown as Array<{
          header?: unknown;
          type?: "string" | "number" | "boolean" | "date";
          props?: { header?: unknown; type?: "string" | "number" | "boolean" | "date" };
        }>).map((c) => ({
          header: String(c?.props?.header ?? c?.header ?? "").trim(),
          type: c?.props?.type ?? c?.type ?? "string",
        })),
      [props.columns],
    );
    const rows = useMemo(() => (props.rows ?? []) as unknown[][], [props.rows]);
    const pageSize = props.pageSize ?? 6;
    const totalPages = Math.max(1, Math.ceil(rows.length / pageSize));
    const startIndex = (currentPage - 1) * pageSize;
    const visibleRows = totalPages > 1 ? rows.slice(startIndex, startIndex + pageSize) : rows;

    useEffect(() => {
      setCurrentPage(1);
    }, [rows, pageSize]);

    useEffect(() => {
      if (currentPage > totalPages) {
        setCurrentPage(totalPages);
      }
    }, [currentPage, totalPages]);

    const pages: (number | "ellipsis")[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("ellipsis");
      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 1);
        i++
      ) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) pages.push("ellipsis");
      pages.push(totalPages);
    }

    return (
      <div className="space-y-4">
        <div className="overflow-x-auto rounded-md border">
          <ShadcnTable className="w-full min-w-[720px] [&_th:first-child]:pl-2 [&_th:last-child]:pr-2 [&_td:first-child]:pl-2 [&_td:last-child]:pr-2">
            <TableHeader>
              <TableRow>
                {columns.map((col, i) => (
                  <TableHead key={i} className={col.type === "number" ? "text-right" : ""}>
                    {col.header || `Column ${i + 1}`}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {visibleRows.length === 0 ? (
                <TableRow key="empty-state">
                  <TableCell colSpan={Math.max(columns.length, 1)} className="h-24 text-center text-sm text-muted-foreground">
                    No records found.
                  </TableCell>
                </TableRow>
              ) : visibleRows.map((row, ri) => (
                <TableRow key={`${currentPage}-${ri}`}>
                  {columns.map((col, ci) => (
                    <TableCell
                      key={ci}
                      className={col.type === "number" ? "text-right tabular-nums" : ""}
                    >
                      {String(row[ci] ?? "-")}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </ShadcnTable>
        </div>
        {totalPages > 1 ? (
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Page {currentPage} of {totalPages} | Showing up to {pageSize} items per page
            </p>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) setCurrentPage(currentPage - 1);
                    }}
                  />
                </PaginationItem>
                {pages.map((page, i) =>
                  page === "ellipsis" ? (
                    <PaginationItem key={`e-${i}`}>
                      <PaginationEllipsis />
                    </PaginationItem>
                  ) : (
                    <PaginationItem key={page}>
                      <PaginationLink
                        href="#"
                        isActive={page === currentPage}
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage(page);
                        }}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ),
                )}
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                    }}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        ) : null}
      </div>
    );
  },
});


