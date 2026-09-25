"use client";

/* JSON definitions are rendered as isolated React components by ShadcnChatRenderer. */
 

import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { defineComponent } from "../json-component";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

type TableRowData = {
  id: string;
  name: string;
  category: string;
  value: string;
  date: string;
  children?: TableRowData[];
};

const TableRowDataSchema: z.ZodType<TableRowData> = z.lazy(() =>
  z.object({
    id: z.string(),
    name: z.string(),
    category: z.string(),
    value: z.string(),
    date: z.string(),
    children: z.array(TableRowDataSchema).optional(),
  }),
);

const TablewithAccordionSchema = z.object({
  rows: z.array(TableRowDataSchema).min(1),
  height: z.number().min(240).max(800).optional().default(800),
});

interface AccordionRowProps {
  row: TableRowData;
  defaultOpen?: boolean;
}

function AccordionRow({ row, defaultOpen = false }: AccordionRowProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const hasChildren = row.children && row.children.length > 0;

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <TableBody className="[&_tr:last-child]:border-b-0">
        <TableRow
          className={cn(
            "bg-muted/50 hover:bg-muted/50",
            isOpen && "border-b-0",
          )}
        >
          <TableCell className="w-10 p-0 align-top">
            <Button
              aria-label={isOpen ? "Collapse row" : "Expand row"}
              className={cn(
                "h-full w-full rounded-none p-3 text-muted-foreground transition-colors",
                hasChildren && "hover:bg-transparent hover:text-foreground",
                !hasChildren && "cursor-default opacity-30",
              )}
              disabled={!hasChildren}
              onClick={() => setIsOpen(!isOpen)}
              size="icon"
              variant="ghost"
            >
              {hasChildren ? (
                isOpen ? (
                  <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                ) : (
                  <ChevronRight className="h-4 w-4 transition-transform duration-200" />
                )
              ) : (
                <div className="h-4 w-4" />
              )}
            </Button>
          </TableCell>
          <TableCell className="w-20 p-3 font-mono text-sm font-medium text-muted-foreground align-top">
            {row.id}
          </TableCell>
          <TableCell className="min-w-[180px] p-3 align-top text-sm font-medium">
            {row.name}
          </TableCell>
          <TableCell className="w-28 p-3 align-top text-sm text-muted-foreground">
            {row.category}
          </TableCell>
          <TableCell className="min-w-[220px] p-3 align-top text-sm whitespace-pre-wrap break-words">
            {row.value}
          </TableCell>
          <TableCell className="w-36 p-3 align-top text-sm text-muted-foreground whitespace-nowrap">
            {row.date}
          </TableCell>
        </TableRow>

        {hasChildren && (
          <TableRow className="border-b-0 hover:bg-transparent">
            <TableCell className="p-0" colSpan={6}>
              <CollapsibleContent>
                <div className="w-full border-border border-b bg-muted/20">
                  <Table className="min-w-[770px]">
                    <colgroup>
                      <col style={{ width: "40px" }} />
                      <col style={{ width: "80px" }} />
                      <col style={{ width: "180px" }} />
                      <col style={{ width: "110px" }} />
                      <col style={{ width: "220px" }} />
                      <col style={{ width: "140px" }} />
                    </colgroup>
                    <TableHeader className="sticky top-0 z-10 bg-muted/30">
                      <TableRow className="border-b-0 bg-muted/30 hover:bg-muted/30">
                        <TableHead className="h-7 border-y px-3 py-1.5" />
                        <TableHead className="h-7 border-y px-3 py-1.5 text-xs">
                          ID
                        </TableHead>
                        <TableHead className="h-7 border-y px-3 py-1.5 text-xs">
                          Name
                        </TableHead>
                        <TableHead className="h-7 border-y px-3 py-1.5 text-xs">
                          Category
                        </TableHead>
                        <TableHead className="h-7 border-y px-3 py-1.5 text-xs">
                          Value
                        </TableHead>
                        <TableHead className="h-7 border-y px-3 py-1.5 text-xs">
                          Date
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {row.children?.map((childRow, index) => (
                        <TableRow key={`${childRow.id}-${childRow.name}-${index}`}>
                          <TableCell className="w-10 px-3 py-2 align-top" />
                          <TableCell className="w-20 px-3 py-2 align-top font-mono text-xs tabular-nums text-muted-foreground">
                            {childRow.id}
                          </TableCell>
                          <TableCell className="min-w-[180px] px-3 py-2 align-top text-xs font-medium">
                            {childRow.name}
                          </TableCell>
                          <TableCell className="w-28 px-3 py-2 align-top text-xs text-muted-foreground">
                            {childRow.category}
                          </TableCell>
                          <TableCell className="min-w-[220px] px-3 py-2 align-top text-xs whitespace-pre-wrap break-words">
                            {childRow.value}
                          </TableCell>
                          <TableCell className="w-36 px-3 py-2 align-top text-xs text-muted-foreground whitespace-nowrap">
                            {childRow.date}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CollapsibleContent>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Collapsible>
  );
}

export const TablewithAccordion = defineComponent({
  name: "TablewithAccordion",
  props: TablewithAccordionSchema,
  description:
    "Responsive accordion table. rows item: { id, name, category, value, date, children? }. Optional height supports 240-800px.",
  component: ({ props }) => (
    <div className="w-full overflow-hidden rounded-lg border border-border bg-card shadow-sm">
      <div className="overflow-x-auto overflow-y-auto" style={{ maxHeight: `${props.height}px` }}>
        <Table className="min-w-[770px] table-fixed">
          <colgroup>
            <col style={{ width: "40px" }} />
            <col style={{ width: "80px" }} />
            <col style={{ width: "180px" }} />
            <col style={{ width: "110px" }} />
            <col style={{ width: "220px" }} />
            <col style={{ width: "140px" }} />
          </colgroup>
          <TableHeader className="sticky top-0 z-10 bg-muted/50">
            <TableRow className="bg-muted/50 hover:bg-muted/50">
              <TableHead className="p-3" />
              <TableHead className="p-3 text-sm font-semibold text-foreground">
                ID
              </TableHead>
              <TableHead className="p-3 text-sm font-semibold text-foreground">
                Name
              </TableHead>
              <TableHead className="p-3 text-sm font-semibold text-foreground">
                Category
              </TableHead>
              <TableHead className="p-3 text-sm font-semibold text-foreground">
                Value
              </TableHead>
              <TableHead className="p-3 text-sm font-semibold text-foreground">
                Date
              </TableHead>
            </TableRow>
          </TableHeader>
          {props.rows.map((row, index) => (
            <AccordionRow defaultOpen={index === 0} key={`${row.id}-${row.name}-${index}`} row={row} />
          ))}
        </Table>
      </div>
    </div>
  ),
});

export default TablewithAccordion;


