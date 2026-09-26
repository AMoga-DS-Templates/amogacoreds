"use client";

import { useState } from "react";
import {
  defineRegistry,
  useBoundProp,
  useStateBinding,
  useFieldValidation,
} from "@json-render/react";
import { toast } from "sonner";

import { playgroundCatalog } from "./catalog";

// shadcn components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import {
  Dialog as DialogPrimitive,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Accordion as AccordionPrimitive,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Carousel as CarouselPrimitive,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Table as TablePrimitive,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Drawer as DrawerPrimitive,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import {
  DropdownMenu as DropdownMenuPrimitive,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Pagination as PaginationPrimitive,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Popover as PopoverPrimitive,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Skeleton } from "@/components/ui/skeleton";
import { Slider } from "@/components/ui/slider";
import {
  Tabs as TabsPrimitive,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Tooltip as TooltipPrimitive,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { icons as lucideIcons } from "lucide-react";
import {
  AreaChart,
  AreaChartAxes,
  AreaChartCondensed,
  AreaChartGradient,
  BarChart,
  BarChartCondensed,
  BarChartMixed,
  BarChartMultiple,
  GanttTaskChart,
  GaugeChartLiveUpdates,
  GaugeChartTwentyLevels,
  LineChart,
  LineChartCondensed,
  LineChartDotsColors,
  LineChartLabel,
  PieChart,
  PieChartDonut,
  PieChartDonutActive,
  RadarChart,
  RadialChart,
  RadialChartStacked,
  RadialChartText,
  ScatterChart,
  StatsUsageDashboard,
  StatswithAreaChart,
  StatswithBarChart,
  StatswithLineChart,
  StatswithPieChart,
} from "@/components/base-charts";
import { AlertDialogBlock } from "@/components/base-ui/alert-dialog-block";
import { Buttons } from "@/components/base-ui/buttons";
import { CalendarBlock } from "@/components/base-ui/calendar-block";
import { CardHeader as BaseCardHeader } from "@/components/base-ui/card-header";
import { ChatFileCard, ChatFileCardAction } from "@/components/base-ui/chat-file-card";
import { CheckBoxGroup, CheckBoxItem } from "@/components/base-ui/checkbox-group";
import { CodeBlock } from "@/components/base-ui/code-block";
import { DialogBlock } from "@/components/base-ui/dialog-block";
import { DownloadViewCard, DownloadViewCardBlock } from "@/components/base-ui/download-view-card";
import { DrawerBlock } from "@/components/base-ui/drawer-block";
import { FollowUpBlock, FollowUpItem } from "@/components/base-ui/follow-up-block";
import { FormControl } from "@/components/base-ui/form-control";
import { HorizontalAlternateTimeline } from "@/components/base-ui/HorizontalAlternateTimeline";
import { Image as BaseImage, ImageBlock } from "@/components/base-ui/image";
import { MarkDownRenderer } from "@/components/base-ui/markdown-renderer";
import { PaginationBlock } from "@/components/base-ui/pagination-block";
import { ProductCard } from "@/components/base-ui/product-card";
import { StatswithBadges } from "@/components/base-ui/StatswithBadges";
import { StatswithBorders } from "@/components/base-ui/StatswithBorders";
import { StatswithCardLayout } from "@/components/base-ui/StatswithCardLayout";
import { StatswithCircularProgress } from "@/components/base-ui/StatswithCircularProgress";
import { StatswithLinks } from "@/components/base-ui/StatswithLinks";
import { StatswithMap } from "@/components/base-ui/StatswithMap";
import { StatswithStatus } from "@/components/base-ui/StatswithStatus";
import { StatswithTrending } from "@/components/base-ui/StatswithTrending";
import { SwitchGroup, SwitchItem } from "@/components/base-ui/switch-group";
import { TablewithAccordion } from "@/components/base-ui/TablewithAccordion";
import { Tag, TagBlock } from "@/components/base-ui/tag";
import { TextContent } from "@/components/base-ui/text-content";
import { Blockquote, Heading as BaseHeading, InlineCode } from "@/components/base-ui/typography";
import { VerticalTimeline } from "@/components/base-ui/verticleTimeline";

// =============================================================================
// Registry — components + actions, types inferred from catalog
// =============================================================================

export const { registry, executeAction } = defineRegistry(playgroundCatalog, {
  components: {
    // ── Layout ────────────────────────────────────────────────────────

    Card: ({ props, children }) => {
      const maxWidthClass =
        props.maxWidth === "sm"
          ? "max-w-xs sm:min-w-[280px]"
          : props.maxWidth === "md"
            ? "max-w-sm sm:min-w-[320px]"
          : props.maxWidth === "lg"
              ? "max-w-lg sm:min-w-[440px]"
              : "w-full";
      const centeredClass = props.centered ? "mx-auto" : "";

      return (
        <div
          className={`border border-border rounded-xl p-5 bg-card text-card-foreground shadow-sm overflow-hidden h-full flex flex-col ${maxWidthClass} ${centeredClass}`}
        >
          {(props.title || props.description) && (
            <div className="mb-4">
              {props.title && (
                <h3 className="font-semibold text-lg tracking-tight">
                  {props.title}
                </h3>
              )}
              {props.description && (
                <p className="text-sm text-muted-foreground mt-1">
                  {props.description}
                </p>
              )}
            </div>
          )}
          <div className="flex-1 flex flex-col gap-4 [&>:last-child]:mt-auto">
            {children}
          </div>
        </div>
      );
    },

    Stack: ({ props, children }) => {
      const isHorizontal = props.direction === "horizontal";
      const gapClass =
        props.gap === "lg"
          ? "gap-4"
          : props.gap === "md"
            ? "gap-3"
            : props.gap === "sm"
              ? "gap-2"
              : props.gap === "none"
                ? "gap-0"
                : "gap-3";

      let alignClass: string;
      if (isHorizontal) {
        alignClass =
          props.align === "center"
            ? "items-center"
            : props.align === "end"
              ? "items-end"
              : props.align === "stretch"
                ? "items-stretch"
                : "items-start";
      } else {
        // Vertical: items-center/end lets inline elements (Avatar, Badge, Button)
        // center/align naturally. Block containers (Grid, Accordion, Table) add
        // their own w-full to stretch regardless.
        alignClass =
          props.align === "center"
            ? "items-center"
            : props.align === "end"
              ? "items-end"
              : props.align === "start"
                ? "items-start"
                : "items-stretch";
      }

      const justifyClass =
        props.justify === "center"
          ? "justify-center"
          : props.justify === "end"
            ? "justify-end"
            : props.justify === "between"
              ? "justify-between"
              : props.justify === "around"
                ? "justify-around"
                : "";

      return (
        <div
          className={`flex ${isHorizontal ? "flex-row flex-wrap" : "flex-col w-full"} ${gapClass} ${alignClass} ${justifyClass}`}
        >
          {children}
        </div>
      );
    },

    Form: ({ props, children, emit }) => (
      <form
        className={`w-full space-y-4 ${props.className ?? ""}`}
        onSubmit={(event) => {
          event.preventDefault();
          emit("submit");
        }}
      >
        {children}
      </form>
    ),

    Grid: ({ props, children }) => {
      const childCount = Array.isArray(children)
        ? children.length
        : children
          ? 1
          : 0;
      const n = Math.min(props.columns ?? 1, childCount || 1);
      const cols =
        n >= 6
          ? "grid-cols-6"
          : n >= 5
            ? "grid-cols-5"
            : n >= 4
              ? "grid-cols-4"
              : n >= 3
                ? "grid-cols-3"
                : n >= 2
                  ? "grid-cols-2"
                  : "grid-cols-1";
      const gridGap =
        props.gap === "lg" ? "gap-4" : props.gap === "sm" ? "gap-2" : "gap-3";

      return <div className={`grid w-full ${cols} ${gridGap}`}>{children}</div>;
    },

    Separator: ({ props }) => (
      <Separator
        orientation={props.orientation ?? "horizontal"}
        className={
          props.orientation === "vertical" ? "h-full mx-3" : "my-4 opacity-50"
        }
      />
    ),

    Tabs: ({ props, bindings, emit, children }) => {
      const tabs = props.tabs ?? [];
      const [boundValue, setBoundValue] = useBoundProp<string>(
        props.value as string | undefined,
        bindings?.value,
      );
      const [localValue, setLocalValue] = useState(
        props.defaultValue ?? tabs[0]?.value ?? "",
      );
      const isBound = !!bindings?.value;
      const value = isBound ? (boundValue ?? tabs[0]?.value ?? "") : localValue;
      const setValue = isBound ? setBoundValue : setLocalValue;

      return (
        <TabsPrimitive
          value={value}
          onValueChange={(v) => {
            setValue(v);
            emit("change");
          }}
        >
          <TabsList>
            {tabs.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mt-4 w-full space-y-4">{children}</div>
        </TabsPrimitive>
      );
    },

    Accordion: ({ props }) => {
      const items = props.items ?? [];
      const accordionType = props.type ?? "single";

      if (accordionType === "multiple") {
        return (
          <AccordionPrimitive type="multiple" className="w-full">
            {items.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </AccordionPrimitive>
        );
      }
      return (
        <AccordionPrimitive type="single" collapsible className="w-full">
          {items.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </AccordionPrimitive>
      );
    },

    Collapsible: ({ props, children }) => {
      const [open, setOpen] = useState(props.defaultOpen ?? false);
      return (
        <Collapsible open={open} onOpenChange={setOpen} className="w-full">
          <CollapsibleTrigger asChild>
            <button className="flex w-full items-center justify-between rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-muted transition-colors">
              {props.title}
              <svg
                className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-2">{children}</CollapsibleContent>
        </Collapsible>
      );
    },

    Dialog: ({ props, children }) => {
      const [open, setOpen] = useStateBinding<boolean>(props.openPath);
      return (
        <DialogPrimitive open={open ?? false} onOpenChange={(v) => setOpen(v)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{props.title}</DialogTitle>
              {props.description && (
                <DialogDescription>{props.description}</DialogDescription>
              )}
            </DialogHeader>
            {children}
          </DialogContent>
        </DialogPrimitive>
      );
    },

    Drawer: ({ props, children }) => {
      const [open, setOpen] = useStateBinding<boolean>(props.openPath);
      return (
        <DrawerPrimitive open={open ?? false} onOpenChange={(v) => setOpen(v)}>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>{props.title}</DrawerTitle>
              {props.description && (
                <DrawerDescription>{props.description}</DrawerDescription>
              )}
            </DrawerHeader>
            <div className="p-4">{children}</div>
          </DrawerContent>
        </DrawerPrimitive>
      );
    },

    Carousel: ({ props }) => {
      const items = props.items ?? [];
      return (
        <CarouselPrimitive className="w-full">
          <CarouselContent>
            {items.map((item, i) => (
              <CarouselItem
                key={i}
                className="basis-3/4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="border border-border rounded-lg p-4 bg-card h-full">
                  {item.title && (
                    <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                  )}
                  {item.description && (
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </CarouselPrimitive>
      );
    },

    // ── Data Display ──────────────────────────────────────────────────

    Table: ({ props }) => {
      const columns = props.columns ?? [];
      const rawRows: unknown[] = Array.isArray(props.rows) ? props.rows : [];

      const rows = rawRows.map((row) => {
        if (Array.isArray(row)) return row.map(String);
        if (row && typeof row === "object") {
          const obj = row as Record<string, unknown>;
          return columns.map((col) =>
            String(obj[col] ?? obj[col.toLowerCase()] ?? ""),
          );
        }
        return columns.map(() => "");
      });

      return (
        <div className="w-full max-w-full overflow-x-auto rounded-md border border-border">
          <TablePrimitive className="min-w-max">
            {props.caption && <TableCaption>{props.caption}</TableCaption>}
            <TableHeader>
              <TableRow>
                {columns.map((col) => (
                  <TableHead key={col}>{col}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row, i) => (
                <TableRow key={i}>
                  {row.map((cell, j) => (
                    <TableCell key={j}>{cell}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </TablePrimitive>
        </div>
      );
    },

    Heading: ({ props, children }) => <BaseHeading {...(props as any)}>{children}</BaseHeading>,

    Text: ({ props }) => {
      const textClass =
        props.variant === "caption"
          ? "text-xs"
          : props.variant === "muted"
            ? "text-sm text-muted-foreground"
            : props.variant === "lead"
              ? "text-xl text-muted-foreground"
              : props.variant === "code"
                ? "font-mono text-sm bg-muted px-1.5 py-0.5 rounded"
                : "text-sm";

      if (props.variant === "code") {
        return <code className={textClass}>{props.text}</code>;
      }
      return <p className={textClass}>{props.text}</p>;
    },

    Image: ({ props }) => (
      <div
        className="w-full bg-muted/50 border border-dashed border-border rounded-lg flex flex-col items-center justify-center gap-2 text-muted-foreground/60 px-4"
        style={{
          maxWidth: props.width ?? undefined,
          height: props.height ?? 120,
          minHeight: 80,
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-50"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        </svg>
        {props.alt && <span className="text-xs">{props.alt}</span>}
      </div>
    ),

    Icon: ({ props }) => {
      const IconComponent = lucideIcons[props.name as keyof typeof lucideIcons];
      if (!IconComponent) return null;
      const sizeMap = { sm: 16, md: 20, lg: 24 } as const;
      const px = sizeMap[props.size ?? "md"] ?? 20;
      const colorClass =
        props.color === "muted"
          ? "text-muted-foreground"
          : props.color === "primary"
            ? "text-primary"
            : props.color === "success"
              ? "text-green-600 dark:text-green-400"
              : props.color === "warning"
                ? "text-yellow-600 dark:text-yellow-400"
                : props.color === "danger"
                  ? "text-red-600 dark:text-red-400"
                  : "";
      return <IconComponent size={px} className={`shrink-0 ${colorClass}`} />;
    },

    Avatar: ({ props }) => {
      const name = props.name || "?";
      const initials = name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();
      const sizeStyles =
        props.size === "lg"
          ? { outer: "w-[72px] h-[72px]", text: "text-xl", ring: "ring-[3px]" }
          : props.size === "sm"
            ? { outer: "w-8 h-8", text: "text-xs", ring: "ring-2" }
            : { outer: "w-10 h-10", text: "text-sm", ring: "ring-2" };

      return (
        <div
          className={`${sizeStyles.outer} ${sizeStyles.text} rounded-full bg-gradient-to-br from-muted-foreground/20 to-muted flex items-center justify-center font-semibold tracking-wide ${sizeStyles.ring} ring-background shadow-sm`}
        >
          {initials}
        </div>
      );
    },

    Badge: ({ props }) => {
      const variant =
        props.variant === "success" || props.variant === "warning"
          ? "secondary"
          : props.variant === "danger"
            ? "destructive"
            : "default";
      const customClass =
        props.variant === "success"
          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
          : props.variant === "warning"
            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
            : "";
      const dotColor =
        props.variant === "success"
          ? "bg-green-500"
          : props.variant === "warning"
            ? "bg-yellow-500"
            : props.variant === "danger"
              ? "bg-red-500"
              : "";

      return (
        <Badge variant={variant} className={`${customClass} gap-1.5`}>
          {dotColor && (
            <span className={`w-1.5 h-1.5 rounded-full ${dotColor} shrink-0`} />
          )}
          {props.text}
        </Badge>
      );
    },

    Alert: ({ props }) => {
      const variant = props.type === "error" ? "destructive" : "default";
      const customClass =
        props.type === "success"
          ? "border-green-200 bg-green-50 text-green-900 dark:border-green-800 dark:bg-green-950 dark:text-green-100"
          : props.type === "warning"
            ? "border-yellow-200 bg-yellow-50 text-yellow-900 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-100"
            : props.type === "info"
              ? "border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-100"
              : "";

      const iconProps = {
        width: 16,
        height: 16,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round" as const,
        strokeLinejoin: "round" as const,
        className: "shrink-0",
      };

      const icon =
        props.type === "success" ? (
          <svg {...iconProps}>
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        ) : props.type === "warning" ? (
          <svg {...iconProps}>
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        ) : props.type === "error" ? (
          <svg {...iconProps}>
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
        ) : (
          <svg {...iconProps}>
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        );

      return (
        <Alert variant={variant} className={customClass}>
          {icon}
          <AlertTitle>{props.title}</AlertTitle>
          {props.message && (
            <AlertDescription>{props.message}</AlertDescription>
          )}
        </Alert>
      );
    },

    Progress: ({ props }) => {
      const value = Math.min(100, Math.max(0, props.value || 0));
      return (
        <div className="w-full space-y-2">
          {props.label && (
            <Label className="text-sm text-muted-foreground">
              {props.label}
            </Label>
          )}
          <Progress value={value} />
        </div>
      );
    },

    Skeleton: ({ props }) => (
      <Skeleton
        className={props.rounded ? "rounded-full" : "rounded-md"}
        style={{
          width: props.width ?? "100%",
          height: props.height ?? "1.25rem",
        }}
      />
    ),

    Spinner: ({ props }) => {
      const sizeClass =
        props.size === "lg"
          ? "h-8 w-8"
          : props.size === "sm"
            ? "h-4 w-4"
            : "h-6 w-6";
      return (
        <div className="flex items-center gap-2">
          <svg
            className={`${sizeClass} animate-spin text-muted-foreground`}
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
          {props.label && (
            <span className="text-sm text-muted-foreground">{props.label}</span>
          )}
        </div>
      );
    },

    Tooltip: ({ props }) => (
      <TooltipProvider>
        <TooltipPrimitive>
          <TooltipTrigger asChild>
            <span className="text-sm underline decoration-dotted cursor-help">
              {props.text}
            </span>
          </TooltipTrigger>
          <TooltipContent>
            <p>{props.content}</p>
          </TooltipContent>
        </TooltipPrimitive>
      </TooltipProvider>
    ),

    Popover: ({ props }) => (
      <PopoverPrimitive>
        <PopoverTrigger asChild>
          <Button variant="outline" className="text-sm">
            {props.trigger}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64">
          <p className="text-sm">{props.content}</p>
        </PopoverContent>
      </PopoverPrimitive>
    ),

    Rating: ({ props, bindings, emit }) => {
      const [boundValue, setBoundValue] = useBoundProp<number>(
        props.value as number | undefined,
        bindings?.value,
      );
      const [localValue, setLocalValue] = useState(props.value || 0);
      const isBound = !!bindings?.value;
      const ratingValue = isBound ? (boundValue ?? 0) : localValue;
      const setValue = isBound ? setBoundValue : setLocalValue;
      const maxRating = props.max ?? 5;
      const interactive = props.interactive !== false;
      const [hoverIndex, setHoverIndex] = useState(-1);

      return (
        <div className="space-y-2">
          {props.label && (
            <Label className="text-sm text-muted-foreground">
              {props.label}
            </Label>
          )}
          <div
            className="flex gap-0.5"
            onMouseLeave={() => interactive && setHoverIndex(-1)}
          >
            {Array.from({ length: maxRating }).map((_, i) => {
              const filled =
                hoverIndex >= 0 ? i <= hoverIndex : i < ratingValue;
              return (
                <button
                  key={i}
                  type="button"
                  className={`p-0.5 transition-colors ${interactive ? "cursor-pointer hover:scale-110" : "cursor-default"}`}
                  onMouseEnter={() => interactive && setHoverIndex(i)}
                  onClick={() => {
                    if (!interactive) return;
                    const newVal = i + 1 === ratingValue ? 0 : i + 1;
                    setValue(newVal);
                    emit("change");
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill={filled ? "currentColor" : "none"}
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={
                      filled ? "text-yellow-400" : "text-muted-foreground/40"
                    }
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </button>
              );
            })}
          </div>
        </div>
      );
    },

    Metric: ({ props }) => {
      const changeColor =
        props.changeType === "positive"
          ? "text-green-600 dark:text-green-400"
          : props.changeType === "negative"
            ? "text-red-600 dark:text-red-400"
            : "text-muted-foreground";
      const changeIcon =
        props.changeType === "positive"
          ? "\u2191"
          : props.changeType === "negative"
            ? "\u2193"
            : "";

      return (
        <div className="space-y-1">
          <div className="text-sm text-muted-foreground">{props.label}</div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl font-semibold tracking-tight tabular-nums">
              {props.prefix}
              {props.value}
              {props.suffix}
            </span>
            {props.change && (
              <span className={`text-sm font-medium ${changeColor}`}>
                {changeIcon}
                {props.change}
              </span>
            )}
          </div>
        </div>
      );
    },

    // ── Charts ────────────────────────────────────────────────────────

    BarChart: ({ props }) => <BarChart {...(props as any)} />,
    BarChartCondensed: ({ props }) => <BarChartCondensed {...(props as any)} />,
    BarChartMixed: ({ props }) => <BarChartMixed {...(props as any)} />,
    BarChartMultiple: ({ props }) => <BarChartMultiple {...(props as any)} />,
    LineChart: ({ props }) => <LineChart {...(props as any)} />,
    LineChartCondensed: ({ props }) => <LineChartCondensed {...(props as any)} />,
    LineChartDotsColors: ({ props }) => <LineChartDotsColors {...(props as any)} />,
    LineChartLabel: ({ props }) => <LineChartLabel {...(props as any)} />,
    AreaChart: ({ props }) => <AreaChart {...(props as any)} />,
    AreaChartCondensed: ({ props }) => <AreaChartCondensed {...(props as any)} />,
    AreaChartAxes: ({ props }) => <AreaChartAxes {...(props as any)} />,
    AreaChartGradient: ({ props }) => <AreaChartGradient {...(props as any)} />,
    RadarChart: ({ props }) => <RadarChart {...(props as any)} />,
    PieChart: ({ props }) => <PieChart {...(props as any)} />,
    PieChartDonut: ({ props }) => <PieChartDonut {...(props as any)} />,
    PieChartDonutActive: ({ props }) => <PieChartDonutActive {...(props as any)} />,
    RadialChart: ({ props }) => <RadialChart {...(props as any)} />,
    RadialChartStacked: ({ props }) => <RadialChartStacked {...(props as any)} />,
    RadialChartText: ({ props }) => <RadialChartText {...(props as any)} />,
    ScatterChart: ({ props }) => <ScatterChart {...(props as any)} />,
    GaugeChartLiveUpdates: ({ props }) => <GaugeChartLiveUpdates {...(props as any)} />,
    GaugeChartTwentyLevels: ({ props }) => <GaugeChartTwentyLevels {...(props as any)} />,
    GanttTaskChart: ({ props }) => <GanttTaskChart {...(props as any)} />,
    StatsUsageDashboard: ({ props }) => <StatsUsageDashboard {...(props as any)} />,
    StatswithAreaChart: ({ props }) => <StatswithAreaChart {...(props as any)} />,
    StatswithBarChart: ({ props }) => <StatswithBarChart {...(props as any)} />,
    StatswithLineChart: ({ props }) => <StatswithLineChart {...(props as any)} />,
    StatswithPieChart: ({ props }) => <StatswithPieChart {...(props as any)} />,

    AlertDialogBlock: ({ props, children }) => <AlertDialogBlock {...(props as any)}>{children}</AlertDialogBlock>,
    Buttons: ({ props, children }) => <Buttons {...(props as any)}>{children}</Buttons>,
    CalendarBlock: ({ props }) => <CalendarBlock {...(props as any)} />,
    CardHeader: ({ props, children }) => <BaseCardHeader {...(props as any)}>{children}</BaseCardHeader>,
    ChatFileCard: ({ props, children }) => <ChatFileCard {...(props as any)}>{children}</ChatFileCard>,
    ChatFileCardAction: ({ props }) => <ChatFileCardAction {...(props as any)} />,
    CheckBoxItem: ({ props }) => <CheckBoxItem {...(props as any)} />,
    CheckBoxGroup: ({ props }) => <CheckBoxGroup {...(props as any)} />,
    CodeBlock: ({ props, children }) => <CodeBlock {...(props as any)}>{children}</CodeBlock>,
    DialogBlock: ({ props, children }) => <DialogBlock {...(props as any)}>{children}</DialogBlock>,
    DownloadViewCard: ({ props }) => <DownloadViewCard {...(props as any)} />,
    DownloadViewCardBlock: ({ props }) => <DownloadViewCardBlock {...(props as any)} />,
    DrawerBlock: ({ props, children }) => <DrawerBlock {...(props as any)}>{children}</DrawerBlock>,
    FollowUpItem: ({ props }) => (
      <FollowUpItem
        {...(props as any)}
        label={(props as any).label ?? (props as any).title}
        text={(props as any).text ?? (props as any).description}
      />
    ),
    FollowUpBlock: ({ props, children }) => <FollowUpBlock {...(props as any)}>{children}</FollowUpBlock>,
    FormControl: ({ props, children }) => <FormControl {...(props as any)}>{children}</FormControl>,
    HorizontalAlternateTimeline: ({ props }) => <HorizontalAlternateTimeline {...(props as any)} />,
    ImageBlock: ({ props }) => <ImageBlock {...(props as any)} />,
    MarkDownRenderer: ({ props }) => <MarkDownRenderer {...(props as any)} />,
    PaginationBlock: ({ props }) => <PaginationBlock {...(props as any)} />,
    ProductCard: ({ props, children }) => <ProductCard {...(props as any)}>{children}</ProductCard>,
    StatswithBadges: ({ props }) => <StatswithBadges {...(props as any)} />,
    StatswithBorders: ({ props }) => <StatswithBorders {...(props as any)} />,
    StatswithCardLayout: ({ props }) => <StatswithCardLayout {...(props as any)} />,
    StatswithCircularProgress: ({ props }) => <StatswithCircularProgress {...(props as any)} />,
    StatswithLinks: ({ props }) => <StatswithLinks {...(props as any)} />,
    StatswithMap: ({ props }) => <StatswithMap {...(props as any)} />,
    StatswithStatus: ({ props }) => <StatswithStatus {...(props as any)} />,
    StatswithTrending: ({ props }) => <StatswithTrending {...(props as any)} />,
    SwitchItem: ({ props }) => <SwitchItem {...(props as any)} />,
    SwitchGroup: ({ props }) => <SwitchGroup {...(props as any)} />,
    TablewithAccordion: ({ props }) => <TablewithAccordion {...(props as any)} />,
    Tag: ({ props, children }) => <Tag {...(props as any)}>{children}</Tag>,
    TagBlock: ({ props, children }) => <TagBlock {...(props as any)}>{children}</TagBlock>,
    TextContent: ({ props, children }) => <TextContent {...(props as any)}>{children}</TextContent>,
    Blockquote: ({ props, children }) => <Blockquote {...(props as any)}>{children}</Blockquote>,
    InlineCode: ({ props, children }) => <InlineCode {...(props as any)}>{children}</InlineCode>,
    VerticalTimeline: ({ props }) => <VerticalTimeline {...(props as any)} />,

    // ── Form Inputs ───────────────────────────────────────────────────

    Input: ({ props, bindings, emit }) => {
      const [boundValue, setBoundValue] = useBoundProp<string>(
        props.value as string | undefined,
        bindings?.value,
      );
      const [localValue, setLocalValue] = useState("");
      const isBound = !!bindings?.value;
      const value = isBound ? (boundValue ?? "") : localValue;
      const setValue = isBound ? setBoundValue : setLocalValue;

      const hasValidation = !!(bindings?.value && props.checks?.length);
      const { errors, validate } = useFieldValidation(
        bindings?.value ?? "",
        hasValidation ? { checks: props.checks ?? [] } : undefined,
      );

      return (
        <div className="w-full space-y-2">
          {props.label && <Label htmlFor={props.name}>{props.label}</Label>}
          <Input
            id={props.name}
            name={props.name}
            type={props.type ?? "text"}
            placeholder={props.placeholder ?? ""}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") emit("submit");
            }}
            onFocus={() => emit("focus")}
            onBlur={() => {
              if (hasValidation) validate();
              emit("blur");
            }}
          />
          {errors.length > 0 && (
            <p className="text-sm text-destructive">{errors[0]}</p>
          )}
        </div>
      );
    },

    Textarea: ({ props, bindings }) => {
      const [boundValue, setBoundValue] = useBoundProp<string>(
        props.value as string | undefined,
        bindings?.value,
      );
      const [localValue, setLocalValue] = useState("");
      const isBound = !!bindings?.value;
      const value = isBound ? (boundValue ?? "") : localValue;
      const setValue = isBound ? setBoundValue : setLocalValue;

      const hasValidation = !!(bindings?.value && props.checks?.length);
      const { errors, validate } = useFieldValidation(
        bindings?.value ?? "",
        hasValidation ? { checks: props.checks ?? [] } : undefined,
      );

      return (
        <div className="w-full space-y-2">
          {props.label && <Label htmlFor={props.name}>{props.label}</Label>}
          <Textarea
            id={props.name}
            name={props.name}
            placeholder={props.placeholder ?? ""}
            rows={props.rows ?? 3}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={() => {
              if (hasValidation) validate();
            }}
          />
          {errors.length > 0 && (
            <p className="text-sm text-destructive">{errors[0]}</p>
          )}
        </div>
      );
    },

    Select: ({ props, bindings, emit }) => {
      const [boundValue, setBoundValue] = useBoundProp<string>(
        props.value as string | undefined,
        bindings?.value,
      );
      const [localValue, setLocalValue] = useState<string>("");
      const isBound = !!bindings?.value;
      const value = isBound ? (boundValue ?? "") : localValue;
      const setValue = isBound ? setBoundValue : setLocalValue;
      const rawOptions = props.options ?? [];
      // Coerce options to strings – AI may produce objects/numbers instead of
      // plain strings which would cause duplicate `[object Object]` keys.
      const options = rawOptions.map((opt) =>
        typeof opt === "string" ? opt : String(opt ?? ""),
      );

      const hasValidation = !!(bindings?.value && props.checks?.length);
      const { errors, validate } = useFieldValidation(
        bindings?.value ?? "",
        hasValidation ? { checks: props.checks ?? [] } : undefined,
      );

      return (
        <div className="w-full space-y-2">
          <Label>{props.label}</Label>
          <Select
            value={value}
            onValueChange={(v) => {
              setValue(v);
              if (hasValidation) validate();
              emit("change");
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={props.placeholder ?? "Select..."} />
            </SelectTrigger>
            <SelectContent>
              {options.map((opt, idx) => (
                <SelectItem
                  key={`${idx}-${opt}`}
                  value={opt || `option-${idx}`}
                >
                  {opt}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.length > 0 && (
            <p className="text-sm text-destructive">{errors[0]}</p>
          )}
        </div>
      );
    },

    Checkbox: ({ props, bindings, emit }) => {
      const [boundChecked, setBoundChecked] = useBoundProp<boolean>(
        props.checked as boolean | undefined,
        bindings?.checked,
      );
      const [localChecked, setLocalChecked] = useState(!!props.checked);
      const isBound = !!bindings?.checked;
      const checked = isBound ? (boundChecked ?? false) : localChecked;
      const setChecked = isBound ? setBoundChecked : setLocalChecked;

      return (
        <div className="flex items-center space-x-2">
          <Checkbox
            id={props.name}
            checked={checked}
            onCheckedChange={(c) => {
              setChecked(c === true);
              emit("change");
            }}
          />
          <Label htmlFor={props.name} className="cursor-pointer">
            {props.label}
          </Label>
        </div>
      );
    },

    Radio: ({ props, bindings, emit }) => {
      const rawOptions = props.options ?? [];
      const options = rawOptions.map((opt) =>
        typeof opt === "string" ? opt : String(opt ?? ""),
      );
      const [boundValue, setBoundValue] = useBoundProp<string>(
        props.value as string | undefined,
        bindings?.value,
      );
      const [localValue, setLocalValue] = useState(options[0] ?? "");
      const isBound = !!bindings?.value;
      const value = isBound ? (boundValue ?? "") : localValue;
      const setValue = isBound ? setBoundValue : setLocalValue;

      return (
        <div className="w-full space-y-2">
          {props.label && <Label>{props.label}</Label>}
          <RadioGroup
            value={value}
            onValueChange={(v) => {
              setValue(v);
              emit("change");
            }}
          >
            {options.map((opt, idx) => (
              <div
                key={`${idx}-${opt}`}
                className="flex items-center space-x-2"
              >
                <RadioGroupItem
                  value={opt || `option-${idx}`}
                  id={`${props.name}-${idx}-${opt}`}
                />
                <Label
                  htmlFor={`${props.name}-${idx}-${opt}`}
                  className="cursor-pointer"
                >
                  {opt}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      );
    },

    Switch: ({ props, bindings, emit }) => {
      const [boundChecked, setBoundChecked] = useBoundProp<boolean>(
        props.checked as boolean | undefined,
        bindings?.checked,
      );
      const [localChecked, setLocalChecked] = useState(!!props.checked);
      const isBound = !!bindings?.checked;
      const checked = isBound ? (boundChecked ?? false) : localChecked;
      const setChecked = isBound ? setBoundChecked : setLocalChecked;

      return (
        <div className="w-full flex items-center justify-between space-x-2">
          <Label htmlFor={props.name} className="cursor-pointer">
            {props.label}
          </Label>
          <Switch
            id={props.name}
            checked={checked}
            onCheckedChange={(c) => {
              setChecked(c);
              emit("change");
            }}
          />
        </div>
      );
    },

    Slider: ({ props, bindings, emit }) => {
      const [boundValue, setBoundValue] = useBoundProp<number>(
        props.value as number | undefined,
        bindings?.value,
      );
      const [localValue, setLocalValue] = useState(props.min ?? 0);
      const isBound = !!bindings?.value;
      const value = isBound ? (boundValue ?? props.min ?? 0) : localValue;
      const setValue = isBound ? setBoundValue : setLocalValue;

      return (
        <div className="w-full space-y-2">
          {props.label && (
            <div className="flex justify-between">
              <Label className="text-sm">{props.label}</Label>
              <span className="text-sm text-muted-foreground">{value}</span>
            </div>
          )}
          <Slider
            value={[value]}
            min={props.min ?? 0}
            max={props.max ?? 100}
            step={props.step ?? 1}
            onValueChange={(v) => {
              setValue(v[0] ?? 0);
              emit("change");
            }}
          />
        </div>
      );
    },

    // ── Actions ───────────────────────────────────────────────────────

    Button: ({ props, emit }) => {
      const variant =
        props.variant === "danger"
          ? "destructive"
          : props.variant === "outline"
            ? "outline"
            : props.variant === "secondary"
              ? "secondary"
              : "default";

      return (
        <Button
          variant={variant}
          disabled={props.disabled ?? false}
          onClick={() => emit("press")}
        >
          {props.label}
        </Button>
      );
    },

    Link: ({ props, emit }) => (
      <Button
        variant="link"
        className="h-auto p-0"
        onClick={() => emit("press")}
      >
        {props.label}
      </Button>
    ),

    DropdownMenu: ({ props, emit }) => {
      const items = props.items ?? [];
      return (
        <DropdownMenuPrimitive>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">{props.label}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {items.map((item) => (
              <DropdownMenuItem key={item.value} onClick={() => emit("select")}>
                {item.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenuPrimitive>
      );
    },

    Toggle: ({ props, bindings, emit }) => {
      const [boundPressed, setBoundPressed] = useBoundProp<boolean>(
        props.pressed as boolean | undefined,
        bindings?.pressed,
      );
      const [localPressed, setLocalPressed] = useState(props.pressed ?? false);
      const isBound = !!bindings?.pressed;
      const pressed = isBound ? (boundPressed ?? false) : localPressed;
      const setPressed = isBound ? setBoundPressed : setLocalPressed;

      return (
        <Toggle
          variant={props.variant ?? "default"}
          pressed={pressed}
          onPressedChange={(v) => {
            setPressed(v);
            emit("change");
          }}
        >
          {props.label}
        </Toggle>
      );
    },

    ToggleGroup: ({ props, bindings, emit }) => {
      const type = props.type ?? "single";
      const items = props.items ?? [];
      const [boundValue, setBoundValue] = useBoundProp<string>(
        props.value as string | undefined,
        bindings?.value,
      );
      const [localValue, setLocalValue] = useState(items[0]?.value ?? "");
      const isBound = !!bindings?.value;
      const value = isBound ? (boundValue ?? "") : localValue;
      const setValue = isBound ? setBoundValue : setLocalValue;

      if (type === "multiple") {
        return (
          <ToggleGroup type="multiple">
            {items.map((item) => (
              <ToggleGroupItem key={item.value} value={item.value}>
                {item.label}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        );
      }

      return (
        <ToggleGroup
          type="single"
          value={value}
          onValueChange={(v) => {
            if (v) {
              setValue(v);
              emit("change");
            }
          }}
        >
          {items.map((item) => (
            <ToggleGroupItem key={item.value} value={item.value}>
              {item.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      );
    },

    ButtonGroup: ({ props, bindings, emit }) => {
      const buttons = props.buttons ?? [];
      const [boundSelected, setBoundSelected] = useBoundProp<string>(
        props.selected as string | undefined,
        bindings?.selected,
      );
      const [localValue, setLocalValue] = useState(buttons[0]?.value ?? "");
      const isBound = !!bindings?.selected;
      const value = isBound ? (boundSelected ?? "") : localValue;
      const setValue = isBound ? setBoundSelected : setLocalValue;

      return (
        <div className="inline-flex rounded-md border border-border">
          {buttons.map((btn, i) => (
            <button
              key={btn.value}
              className={`px-3 py-1.5 text-sm transition-colors ${
                value === btn.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-background hover:bg-muted"
              } ${i > 0 ? "border-l border-border" : ""} ${
                i === 0 ? "rounded-l-md" : ""
              } ${i === buttons.length - 1 ? "rounded-r-md" : ""}`}
              onClick={() => {
                setValue(btn.value);
                emit("change");
              }}
            >
              {btn.label}
            </button>
          ))}
        </div>
      );
    },

    Pagination: ({ props, bindings, emit }) => {
      const [boundPage, setBoundPage] = useBoundProp<number>(
        props.page as number | undefined,
        bindings?.page,
      );
      const currentPage = boundPage ?? 1;
      const pages = Array.from({ length: props.totalPages }, (_, i) => i + 1);

      return (
        <PaginationPrimitive>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage > 1) {
                    setBoundPage(currentPage - 1);
                    emit("change");
                  }
                }}
              />
            </PaginationItem>
            {pages.map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  href="#"
                  isActive={page === currentPage}
                  onClick={(e) => {
                    e.preventDefault();
                    setBoundPage(page);
                    emit("change");
                  }}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage < props.totalPages) {
                    setBoundPage(currentPage + 1);
                    emit("change");
                  }
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </PaginationPrimitive>
      );
    },
  },

  actions: {
    // Built-in state actions — handled by ActionProvider, stubs needed for types
    setState: async () => {},
    pushState: async () => {},
    removeState: async () => {},

    // Demo actions — show toasts
    buttonClick: async (params) => {
      const message = (params?.message as string) || "Button clicked!";
      toast.success(message);
    },

    formSubmit: async (params) => {
      const formName = (params?.formName as string) || "Form";
      toast.success(`${formName} submitted successfully!`);
    },

    linkClick: async (params) => {
      const href = (params?.href as string) || "#";
      toast.info(`Navigating to: ${href}`);
    },
  },
});

// Fallback component for unknown types
export function Fallback({ type }: { type: string }) {
  return <div className="text-xs text-muted-foreground">[{type}]</div>;
}
