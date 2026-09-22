'use client';
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/design-system/index.ts
var design_system_exports = {};
__export(design_system_exports, {
  Accordion: () => Accordion,
  AccordionContent: () => AccordionContent,
  AccordionItem: () => AccordionItem,
  AccordionTrigger: () => AccordionTrigger,
  AiChatHeader: () => AiChatHeader,
  AiChatInput: () => AiChatInput,
  AiMessageBubble: () => AiMessageBubble,
  AiMessageList: () => AiMessageList,
  AiModelSelector: () => AiModelSelector,
  AiPromptSuggestions: () => AiPromptSuggestions,
  AiToolSelector: () => AiToolSelector,
  Alert: () => Alert,
  AlertDescription: () => AlertDescription,
  AlertDialog: () => AlertDialog,
  AlertDialogAction: () => AlertDialogAction,
  AlertDialogCancel: () => AlertDialogCancel,
  AlertDialogContent: () => AlertDialogContent,
  AlertDialogDescription: () => AlertDialogDescription,
  AlertDialogFooter: () => AlertDialogFooter,
  AlertDialogHeader: () => AlertDialogHeader,
  AlertDialogMedia: () => AlertDialogMedia,
  AlertDialogOverlay: () => AlertDialogOverlay,
  AlertDialogPortal: () => AlertDialogPortal,
  AlertDialogTitle: () => AlertDialogTitle,
  AlertDialogTrigger: () => AlertDialogTrigger,
  AlertTitle: () => AlertTitle,
  AppHeader: () => AppHeader,
  AppLogo: () => AppLogo,
  AppSidebar: () => AppSidebar,
  AppTitle: () => AppTitle,
  AreaChartDemo: () => AreaChartDemo,
  AspectRatio: () => AspectRatio,
  AuthenticatedLayout: () => AuthenticatedLayout,
  Avatar: () => Avatar,
  AvatarBadge: () => AvatarBadge,
  AvatarFallback: () => AvatarFallback,
  AvatarGroup: () => AvatarGroup,
  AvatarGroupCount: () => AvatarGroupCount,
  AvatarImage: () => AvatarImage,
  Badge: () => Badge,
  BarChartDemo: () => BarChartDemo,
  Breadcrumb: () => Breadcrumb,
  BreadcrumbEllipsis: () => BreadcrumbEllipsis,
  BreadcrumbItem: () => BreadcrumbItem,
  BreadcrumbLink: () => BreadcrumbLink,
  BreadcrumbList: () => BreadcrumbList,
  BreadcrumbPage: () => BreadcrumbPage,
  BreadcrumbSeparator: () => BreadcrumbSeparator,
  Button: () => Button,
  ButtonGroup: () => ButtonGroup,
  ButtonGroupSeparator: () => ButtonGroupSeparator,
  ButtonGroupText: () => ButtonGroupText,
  CHART_TOKENS: () => CHART_TOKENS,
  Calendar: () => Calendar,
  CalendarDayButton: () => CalendarDayButton,
  Card: () => Card,
  CardAction: () => CardAction,
  CardContent: () => CardContent,
  CardDescription: () => CardDescription,
  CardFooter: () => CardFooter,
  CardHeader: () => CardHeader,
  CardTitle: () => CardTitle,
  Carousel: () => Carousel,
  CarouselContent: () => CarouselContent,
  CarouselItem: () => CarouselItem,
  CarouselNext: () => CarouselNext,
  CarouselPrevious: () => CarouselPrevious,
  ChartContainer: () => ChartContainer,
  ChartLegend: () => ChartLegend,
  ChartLegendContent: () => ChartLegendContent,
  ChartStyle: () => ChartStyle,
  ChartTooltip: () => ChartTooltip,
  ChartTooltipContent: () => ChartTooltipContent,
  ChatBubble: () => ChatBubble,
  ChatCardItem: () => ChatCardItem,
  ChatEmptyState: () => ChatEmptyState,
  ChatHeader: () => ChatHeader,
  ChatInput: () => ChatInput,
  ChatMessageList: () => ChatMessageList,
  ChatSidebar: () => ChatSidebar,
  Checkbox: () => Checkbox,
  Collapsible: () => Collapsible,
  CollapsibleContent: () => CollapsibleContent,
  CollapsibleTrigger: () => CollapsibleTrigger,
  Command: () => Command,
  CommandDialog: () => CommandDialog,
  CommandEmpty: () => CommandEmpty,
  CommandGroup: () => CommandGroup,
  CommandInput: () => CommandInput,
  CommandItem: () => CommandItem,
  CommandList: () => CommandList,
  CommandSeparator: () => CommandSeparator,
  CommandShortcut: () => CommandShortcut,
  ConfirmDialog: () => ConfirmDialog,
  ContactManager: () => ContactManager,
  ContextMenu: () => ContextMenu,
  ContextMenuCheckboxItem: () => ContextMenuCheckboxItem,
  ContextMenuContent: () => ContextMenuContent,
  ContextMenuGroup: () => ContextMenuGroup,
  ContextMenuItem: () => ContextMenuItem,
  ContextMenuLabel: () => ContextMenuLabel,
  ContextMenuPortal: () => ContextMenuPortal,
  ContextMenuRadioGroup: () => ContextMenuRadioGroup,
  ContextMenuRadioItem: () => ContextMenuRadioItem,
  ContextMenuSeparator: () => ContextMenuSeparator,
  ContextMenuShortcut: () => ContextMenuShortcut,
  ContextMenuSub: () => ContextMenuSub,
  ContextMenuSubContent: () => ContextMenuSubContent,
  ContextMenuSubTrigger: () => ContextMenuSubTrigger,
  ContextMenuTrigger: () => ContextMenuTrigger,
  DEFAULT_AI_MODELS: () => DEFAULT_AI_MODELS,
  DEFAULT_AI_PROMPTS: () => DEFAULT_AI_PROMPTS,
  DEFAULT_AI_TOOLS: () => DEFAULT_AI_TOOLS,
  DashboardTemplate: () => DashboardTemplate,
  DataTable: () => DataTable,
  DatePicker: () => DatePicker2,
  DetailTemplate: () => DetailTemplate,
  Dialog: () => Dialog,
  DialogClose: () => DialogClose,
  DialogContent: () => DialogContent,
  DialogDescription: () => DialogDescription,
  DialogFooter: () => DialogFooter,
  DialogHeader: () => DialogHeader,
  DialogOverlay: () => DialogOverlay,
  DialogPortal: () => DialogPortal,
  DialogTitle: () => DialogTitle,
  DialogTrigger: () => DialogTrigger,
  Drawer: () => Drawer,
  DrawerClose: () => DrawerClose,
  DrawerContent: () => DrawerContent,
  DrawerDescription: () => DrawerDescription,
  DrawerFooter: () => DrawerFooter,
  DrawerHeader: () => DrawerHeader,
  DrawerOverlay: () => DrawerOverlay,
  DrawerPortal: () => DrawerPortal,
  DrawerTitle: () => DrawerTitle,
  DrawerTrigger: () => DrawerTrigger,
  DropdownMenu: () => DropdownMenu,
  DropdownMenuCheckboxItem: () => DropdownMenuCheckboxItem,
  DropdownMenuContent: () => DropdownMenuContent,
  DropdownMenuGroup: () => DropdownMenuGroup,
  DropdownMenuItem: () => DropdownMenuItem,
  DropdownMenuLabel: () => DropdownMenuLabel,
  DropdownMenuPortal: () => DropdownMenuPortal,
  DropdownMenuRadioGroup: () => DropdownMenuRadioGroup,
  DropdownMenuRadioItem: () => DropdownMenuRadioItem,
  DropdownMenuSeparator: () => DropdownMenuSeparator,
  DropdownMenuShortcut: () => DropdownMenuShortcut,
  DropdownMenuSub: () => DropdownMenuSub,
  DropdownMenuSubContent: () => DropdownMenuSubContent,
  DropdownMenuSubTrigger: () => DropdownMenuSubTrigger,
  DropdownMenuTrigger: () => DropdownMenuTrigger,
  EmailSettingsFeature: () => EmailSettingsFeature,
  Empty: () => Empty,
  EmptyContent: () => EmptyContent,
  EmptyDescription: () => EmptyDescription,
  EmptyHeader: () => EmptyHeader,
  EmptyMedia: () => EmptyMedia,
  EmptyTitle: () => EmptyTitle,
  Field: () => Field,
  FieldContent: () => FieldContent,
  FieldDescription: () => FieldDescription,
  FieldError: () => FieldError,
  FieldGroup: () => FieldGroup,
  FieldLabel: () => FieldLabel,
  FieldLegend: () => FieldLegend,
  FieldSeparator: () => FieldSeparator,
  FieldSet: () => FieldSet,
  FieldTitle: () => FieldTitle,
  FileCardItem: () => FileCardItem,
  FileUploadForm: () => FileUploadForm,
  FilterBar: () => FilterBar,
  FolderTreeItem: () => FolderTreeItem,
  Form: () => Form,
  FormControl: () => FormControl,
  FormDescription: () => FormDescription,
  FormField: () => FormField,
  FormItem: () => FormItem,
  FormLabel: () => FormLabel,
  FormMessage: () => FormMessage,
  FormSection: () => FormSection,
  FormTemplate: () => FormTemplate,
  GroupManager: () => GroupManager,
  Header: () => Header2,
  HoverCard: () => HoverCard,
  HoverCardContent: () => HoverCardContent,
  HoverCardTrigger: () => HoverCardTrigger,
  Input: () => Input,
  InputGroup: () => InputGroup,
  InputGroupAddon: () => InputGroupAddon,
  InputGroupButton: () => InputGroupButton,
  InputGroupInput: () => InputGroupInput,
  InputGroupText: () => InputGroupText,
  InputGroupTextarea: () => InputGroupTextarea,
  InputOTP: () => InputOTP,
  InputOTPGroup: () => InputOTPGroup,
  InputOTPSeparator: () => InputOTPSeparator,
  InputOTPSlot: () => InputOTPSlot,
  Item: () => Item,
  ItemActions: () => ItemActions,
  ItemContent: () => ItemContent,
  ItemDescription: () => ItemDescription,
  ItemFooter: () => ItemFooter,
  ItemGroup: () => ItemGroup,
  ItemHeader: () => ItemHeader,
  ItemMedia: () => ItemMedia,
  ItemSeparator: () => ItemSeparator,
  ItemTitle: () => ItemTitle,
  Kbd: () => Kbd,
  KbdGroup: () => KbdGroup,
  Label: () => Label,
  LineChartDemo: () => LineChartDemo,
  ListTemplate: () => ListTemplate,
  LongText: () => LongText,
  Main: () => Main,
  Menubar: () => Menubar,
  MenubarCheckboxItem: () => MenubarCheckboxItem,
  MenubarContent: () => MenubarContent,
  MenubarGroup: () => MenubarGroup,
  MenubarItem: () => MenubarItem,
  MenubarLabel: () => MenubarLabel,
  MenubarMenu: () => MenubarMenu,
  MenubarPortal: () => MenubarPortal,
  MenubarRadioGroup: () => MenubarRadioGroup,
  MenubarRadioItem: () => MenubarRadioItem,
  MenubarSeparator: () => MenubarSeparator,
  MenubarShortcut: () => MenubarShortcut,
  MenubarSub: () => MenubarSub,
  MenubarSubContent: () => MenubarSubContent,
  MenubarSubTrigger: () => MenubarSubTrigger,
  MenubarTrigger: () => MenubarTrigger,
  MetricCard: () => MetricCard,
  NavGroup: () => NavGroup,
  NavUser: () => NavUser,
  NavigationMenu: () => NavigationMenu,
  NavigationMenuContent: () => NavigationMenuContent,
  NavigationMenuIndicator: () => NavigationMenuIndicator,
  NavigationMenuItem: () => NavigationMenuItem,
  NavigationMenuLink: () => NavigationMenuLink,
  NavigationMenuList: () => NavigationMenuList,
  NavigationMenuTrigger: () => NavigationMenuTrigger,
  NavigationMenuViewport: () => NavigationMenuViewport,
  PageHeader: () => PageHeader,
  Pagination: () => Pagination,
  PaginationContent: () => PaginationContent,
  PaginationEllipsis: () => PaginationEllipsis,
  PaginationItem: () => PaginationItem,
  PaginationLink: () => PaginationLink,
  PaginationNext: () => PaginationNext,
  PaginationPrevious: () => PaginationPrevious,
  PasswordInput: () => PasswordInput,
  PieChartDemo: () => PieChartDemo,
  Popover: () => Popover,
  PopoverAnchor: () => PopoverAnchor,
  PopoverContent: () => PopoverContent,
  PopoverDescription: () => PopoverDescription,
  PopoverHeader: () => PopoverHeader,
  PopoverTitle: () => PopoverTitle,
  PopoverTrigger: () => PopoverTrigger,
  Progress: () => Progress,
  QRCodeDisplay: () => QRCodeDisplay,
  QrCodeDisplay: () => QrCodeDisplay,
  RadioGroup: () => RadioGroup,
  RadioGroupItem: () => RadioGroupItem,
  ResizableHandle: () => ResizableHandle,
  ResizablePanel: () => ResizablePanel,
  ResizablePanelGroup: () => ResizablePanelGroup,
  SEMANTIC_TOKENS: () => SEMANTIC_TOKENS,
  SIDEBAR_TOKENS: () => SIDEBAR_TOKENS,
  ScrollArea: () => ScrollArea,
  ScrollBar: () => ScrollBar,
  Search: () => Search,
  Select: () => Select,
  SelectContent: () => SelectContent,
  SelectDropdown: () => SelectDropdown,
  SelectGroup: () => SelectGroup,
  SelectItem: () => SelectItem,
  SelectLabel: () => SelectLabel,
  SelectScrollDownButton: () => SelectScrollDownButton,
  SelectScrollUpButton: () => SelectScrollUpButton,
  SelectSeparator: () => SelectSeparator,
  SelectTrigger: () => SelectTrigger,
  SelectValue: () => SelectValue,
  Separator: () => Separator,
  Sheet: () => Sheet,
  SheetClose: () => SheetClose,
  SheetContent: () => SheetContent,
  SheetDescription: () => SheetDescription,
  SheetFooter: () => SheetFooter,
  SheetHeader: () => SheetHeader,
  SheetOverlay: () => SheetOverlay,
  SheetPortal: () => SheetPortal,
  SheetTitle: () => SheetTitle,
  SheetTrigger: () => SheetTrigger,
  Sidebar: () => Sidebar,
  SidebarContent: () => SidebarContent,
  SidebarFooter: () => SidebarFooter,
  SidebarGroup: () => SidebarGroup,
  SidebarGroupAction: () => SidebarGroupAction,
  SidebarGroupContent: () => SidebarGroupContent,
  SidebarGroupLabel: () => SidebarGroupLabel,
  SidebarHeader: () => SidebarHeader,
  SidebarInput: () => SidebarInput,
  SidebarInset: () => SidebarInset,
  SidebarMenu: () => SidebarMenu,
  SidebarMenuAction: () => SidebarMenuAction,
  SidebarMenuBadge: () => SidebarMenuBadge,
  SidebarMenuButton: () => SidebarMenuButton,
  SidebarMenuItem: () => SidebarMenuItem,
  SidebarMenuSkeleton: () => SidebarMenuSkeleton,
  SidebarMenuSub: () => SidebarMenuSub,
  SidebarMenuSubButton: () => SidebarMenuSubButton,
  SidebarMenuSubItem: () => SidebarMenuSubItem,
  SidebarProvider: () => SidebarProvider,
  SidebarRail: () => SidebarRail,
  SidebarSearch: () => SidebarSearch,
  SidebarSeparator: () => SidebarSeparator,
  SidebarTrigger: () => SidebarTrigger,
  SignOutDialog: () => SignOutDialog,
  SignUpForm: () => SignUpForm,
  Skeleton: () => Skeleton,
  Slider: () => Slider,
  Sonner: () => import_sonner.Toaster,
  Spinner: () => Spinner,
  Stats01: () => Stats01,
  StatusBadge: () => StatusBadge,
  StorageStatCard: () => StorageStatCard,
  Switch: () => Switch,
  Table: () => Table,
  TableBody: () => TableBody,
  TableCaption: () => TableCaption,
  TableCell: () => TableCell,
  TableFooter: () => TableFooter,
  TableHead: () => TableHead,
  TableHeader: () => TableHeader,
  TableRow: () => TableRow,
  Tabs: () => Tabs,
  TabsContent: () => TabsContent,
  TabsList: () => TabsList,
  TabsTrigger: () => TabsTrigger,
  TeamSwitcher: () => TeamSwitcher,
  Textarea: () => Textarea,
  ThemeSelector: () => ThemeSelector,
  ThemeSwitch: () => ThemeSwitch,
  Toaster: () => Toaster,
  Toggle: () => Toggle,
  ToggleGroup: () => ToggleGroup,
  ToggleGroupItem: () => ToggleGroupItem,
  Tooltip: () => Tooltip2,
  TooltipContent: () => TooltipContent,
  TooltipProvider: () => TooltipProvider,
  TooltipTrigger: () => TooltipTrigger,
  TopNav: () => TopNav,
  TypingIndicator: () => TypingIndicator,
  UserAuthForm: () => UserAuthForm,
  UserFileCardsView: () => UserFileCardsView,
  WizardTemplate: () => WizardTemplate,
  WorkspaceTemplate: () => WorkspaceTemplate,
  badgeVariants: () => badgeVariants,
  buttonGroupVariants: () => buttonGroupVariants,
  buttonVariants: () => buttonVariants,
  downloadQrCode: () => downloadQrCode,
  formatBytes: () => formatBytes,
  formatTimeAgo: () => formatTimeAgo,
  getFileCategoryTheme: () => getFileCategoryTheme,
  navigationMenuTriggerStyle: () => navigationMenuTriggerStyle,
  sidebarData: () => sidebarData2,
  statusBadgeVariants: () => statusBadgeVariants,
  tabsListVariants: () => tabsListVariants,
  toggleVariants: () => toggleVariants,
  useEmailSettingsStore: () => useEmailSettingsStore,
  useFormField: () => useFormField,
  useSidebar: () => useSidebar
});
module.exports = __toCommonJS(design_system_exports);

// src/design-system/tokens/index.ts
var SEMANTIC_TOKENS = {
  background: "var(--background)",
  foreground: "var(--foreground)",
  card: "var(--card)",
  cardForeground: "var(--card-foreground)",
  popover: "var(--popover)",
  popoverForeground: "var(--popover-foreground)",
  primary: "var(--primary)",
  primaryForeground: "var(--primary-foreground)",
  secondary: "var(--secondary)",
  secondaryForeground: "var(--secondary-foreground)",
  muted: "var(--muted)",
  mutedForeground: "var(--muted-foreground)",
  accent: "var(--accent)",
  accentForeground: "var(--accent-foreground)",
  destructive: "var(--destructive)",
  destructiveForeground: "var(--destructive-foreground)",
  success: "var(--success)",
  successForeground: "var(--success-foreground)",
  warning: "var(--warning)",
  warningForeground: "var(--warning-foreground)",
  info: "var(--info)",
  infoForeground: "var(--info-foreground)",
  border: "var(--border)",
  input: "var(--input)",
  ring: "var(--ring)",
  radius: "var(--radius)",
  radiusSm: "var(--radius-sm)",
  radiusMd: "var(--radius-md)",
  radiusLg: "var(--radius-lg)",
  radiusXl: "var(--radius-xl)"
};
var CHART_TOKENS = {
  chart1: "var(--chart-1)",
  chart2: "var(--chart-2)",
  chart3: "var(--chart-3)",
  chart4: "var(--chart-4)",
  chart5: "var(--chart-5)"
};
var SIDEBAR_TOKENS = {
  sidebar: "var(--sidebar)",
  sidebarForeground: "var(--sidebar-foreground)",
  sidebarPrimary: "var(--sidebar-primary)",
  sidebarPrimaryForeground: "var(--sidebar-primary-foreground)",
  sidebarAccent: "var(--sidebar-accent)",
  sidebarAccentForeground: "var(--sidebar-accent-foreground)",
  sidebarBorder: "var(--sidebar-border)",
  sidebarRing: "var(--sidebar-ring)"
};

// src/design-system/components/ui/accordion.tsx
var import_lucide_react = require("lucide-react");
var import_radix_ui = require("radix-ui");

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}
function sleep(ms = 1e3) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// src/design-system/components/ui/accordion.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Accordion({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_radix_ui.Accordion.Root, { "data-slot": "accordion", ...props });
}
function AccordionItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_radix_ui.Accordion.Item,
    {
      "data-slot": "accordion-item",
      className: cn("border-b last:border-b-0", className),
      ...props
    }
  );
}
function AccordionTrigger({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_radix_ui.Accordion.Header, { className: "flex", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_radix_ui.Accordion.Trigger,
    {
      "data-slot": "accordion-trigger",
      className: cn(
        "flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronDownIcon, { className: "pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200" })
      ]
    }
  ) });
}
function AccordionContent({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_radix_ui.Accordion.Content,
    {
      "data-slot": "accordion-content",
      className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("pt-0 pb-4", className), children })
    }
  );
}

// src/design-system/components/ui/alert-dialog.tsx
var import_radix_ui2 = require("radix-ui");
var import_jsx_runtime2 = require("react/jsx-runtime");
function AlertDialog({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_radix_ui2.AlertDialog.Root, { "data-slot": "alert-dialog", ...props });
}
function AlertDialogTrigger({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_radix_ui2.AlertDialog.Trigger, { "data-slot": "alert-dialog-trigger", ...props });
}
function AlertDialogPortal({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_radix_ui2.AlertDialog.Portal, { "data-slot": "alert-dialog-portal", ...props });
}
function AlertDialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_radix_ui2.AlertDialog.Overlay,
    {
      "data-slot": "alert-dialog-overlay",
      className: cn(
        "fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
        className
      ),
      ...props
    }
  );
}
function AlertDialogContent({
  className,
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(AlertDialogPortal, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(AlertDialogOverlay, {}),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_radix_ui2.AlertDialog.Content,
      {
        "data-slot": "alert-dialog-content",
        "data-size": size,
        className: cn(
          "group/alert-dialog-content fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 data-[size=sm]:max-w-xs data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[size=default]:sm:max-w-lg",
          className
        ),
        ...props
      }
    )
  ] });
}
function AlertDialogHeader({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "div",
    {
      "data-slot": "alert-dialog-header",
      className: cn(
        "grid grid-rows-[auto_1fr] place-items-center gap-1.5 text-center has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] has-data-[slot=alert-dialog-media]:gap-x-6 sm:group-data-[size=default]/alert-dialog-content:place-items-start sm:group-data-[size=default]/alert-dialog-content:text-left sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]",
        className
      ),
      ...props
    }
  );
}
function AlertDialogFooter({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "div",
    {
      "data-slot": "alert-dialog-footer",
      className: cn(
        "flex flex-col-reverse gap-2 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 sm:flex-row sm:justify-end",
        className
      ),
      ...props
    }
  );
}
function AlertDialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_radix_ui2.AlertDialog.Title,
    {
      "data-slot": "alert-dialog-title",
      className: cn(
        "text-lg font-semibold sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2",
        className
      ),
      ...props
    }
  );
}
function AlertDialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_radix_ui2.AlertDialog.Description,
    {
      "data-slot": "alert-dialog-description",
      className: cn("text-sm text-muted-foreground", className),
      ...props
    }
  );
}
function AlertDialogMedia({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "div",
    {
      "data-slot": "alert-dialog-media",
      className: cn(
        "mb-2 inline-flex size-16 items-center justify-center rounded-md bg-muted sm:group-data-[size=default]/alert-dialog-content:row-span-2 *:[svg:not([class*='size-'])]:size-8",
        className
      ),
      ...props
    }
  );
}
function AlertDialogAction({
  className,
  variant = "default",
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Button, { variant, size, asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_radix_ui2.AlertDialog.Action,
    {
      "data-slot": "alert-dialog-action",
      className: cn(className),
      ...props
    }
  ) });
}
function AlertDialogCancel({
  className,
  variant = "outline",
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Button, { variant, size, asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_radix_ui2.AlertDialog.Cancel,
    {
      "data-slot": "alert-dialog-cancel",
      className: cn(className),
      ...props
    }
  ) });
}

// src/design-system/components/ui/alert.tsx
var import_class_variance_authority = require("class-variance-authority");
var import_jsx_runtime3 = require("react/jsx-runtime");
var alertVariants = (0, import_class_variance_authority.cva)(
  "relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-lg border px-4 py-3 text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive: "bg-card text-destructive *:data-[slot=alert-description]:text-destructive/90 [&>svg]:text-current"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Alert({
  className,
  variant,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "div",
    {
      "data-slot": "alert",
      role: "alert",
      className: cn(alertVariants({ variant }), className),
      ...props
    }
  );
}
function AlertTitle({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "div",
    {
      "data-slot": "alert-title",
      className: cn(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        className
      ),
      ...props
    }
  );
}
function AlertDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "div",
    {
      "data-slot": "alert-description",
      className: cn(
        "col-start-2 grid justify-items-start gap-1 text-sm text-muted-foreground [&_p]:leading-relaxed",
        className
      ),
      ...props
    }
  );
}

// src/design-system/components/ui/aspect-ratio.tsx
var import_radix_ui3 = require("radix-ui");
var import_jsx_runtime4 = require("react/jsx-runtime");
function AspectRatio({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_radix_ui3.AspectRatio.Root, { "data-slot": "aspect-ratio", ...props });
}

// src/design-system/components/ui/avatar.tsx
var import_radix_ui4 = require("radix-ui");
var import_jsx_runtime5 = require("react/jsx-runtime");
function Avatar({
  className,
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    import_radix_ui4.Avatar.Root,
    {
      "data-slot": "avatar",
      "data-size": size,
      className: cn(
        "group/avatar relative flex size-8 shrink-0 overflow-hidden rounded-full select-none data-[size=lg]:size-10 data-[size=sm]:size-6",
        className
      ),
      ...props
    }
  );
}
function AvatarImage({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    import_radix_ui4.Avatar.Image,
    {
      "data-slot": "avatar-image",
      className: cn("aspect-square size-full", className),
      ...props
    }
  );
}
function AvatarFallback({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    import_radix_ui4.Avatar.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: cn(
        "flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs",
        className
      ),
      ...props
    }
  );
}
function AvatarBadge({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "span",
    {
      "data-slot": "avatar-badge",
      className: cn(
        "absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground ring-2 ring-background select-none",
        "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden",
        "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2",
        "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2",
        className
      ),
      ...props
    }
  );
}
function AvatarGroup({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "div",
    {
      "data-slot": "avatar-group",
      className: cn(
        "group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background",
        className
      ),
      ...props
    }
  );
}
function AvatarGroupCount({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "div",
    {
      "data-slot": "avatar-group-count",
      className: cn(
        "relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground ring-2 ring-background group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3",
        className
      ),
      ...props
    }
  );
}

// src/design-system/components/ui/badge.tsx
var import_class_variance_authority2 = require("class-variance-authority");
var import_radix_ui5 = require("radix-ui");
var import_jsx_runtime6 = require("react/jsx-runtime");
var badgeVariants = (0, import_class_variance_authority2.cva)(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "bg-destructive text-white focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40 [a&]:hover:bg-destructive/90",
        outline: "border-border text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        ghost: "[a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        link: "text-primary underline-offset-4 [a&]:hover:underline"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? import_radix_ui5.Slot.Root : "span";
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    Comp,
    {
      "data-slot": "badge",
      "data-variant": variant,
      className: cn(badgeVariants({ variant }), className),
      ...props
    }
  );
}

// src/design-system/components/ui/breadcrumb.tsx
var import_lucide_react2 = require("lucide-react");
var import_radix_ui6 = require("radix-ui");
var import_jsx_runtime7 = require("react/jsx-runtime");
function Breadcrumb({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...props });
}
function BreadcrumbList({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "ol",
    {
      "data-slot": "breadcrumb-list",
      className: cn(
        "flex flex-wrap items-center gap-1.5 text-sm break-words text-muted-foreground sm:gap-2.5",
        className
      ),
      ...props
    }
  );
}
function BreadcrumbItem({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: cn("inline-flex items-center gap-1.5", className),
      ...props
    }
  );
}
function BreadcrumbLink({
  asChild,
  className,
  ...props
}) {
  const Comp = asChild ? import_radix_ui6.Slot.Root : "a";
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    Comp,
    {
      "data-slot": "breadcrumb-link",
      className: cn("transition-colors hover:text-foreground", className),
      ...props
    }
  );
}
function BreadcrumbPage({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "span",
    {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: cn("font-normal text-foreground", className),
      ...props
    }
  );
}
function BreadcrumbSeparator({
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: cn("[&>svg]:size-3.5", className),
      ...props,
      children: children ?? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react2.ChevronRight, {})
    }
  );
}
function BreadcrumbEllipsis({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
    "span",
    {
      "data-slot": "breadcrumb-ellipsis",
      role: "presentation",
      "aria-hidden": "true",
      className: cn("flex size-9 items-center justify-center", className),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react2.MoreHorizontal, { className: "size-4" }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "sr-only", children: "More" })
      ]
    }
  );
}

// src/design-system/components/ui/button.tsx
var import_class_variance_authority3 = require("class-variance-authority");
var import_radix_ui7 = require("radix-ui");
var import_jsx_runtime8 = require("react/jsx-runtime");
var buttonVariants = (0, import_class_variance_authority3.cva)(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? import_radix_ui7.Slot.Root : "button";
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    Comp,
    {
      "data-slot": "button",
      "data-variant": variant,
      "data-size": size,
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

// src/design-system/components/ui/button-group.tsx
var import_class_variance_authority4 = require("class-variance-authority");
var import_radix_ui8 = require("radix-ui");
var import_jsx_runtime9 = require("react/jsx-runtime");
var buttonGroupVariants = (0, import_class_variance_authority4.cva)(
  "flex w-fit items-stretch has-[>[data-slot=button-group]]:gap-2 [&>*]:focus-visible:relative [&>*]:focus-visible:z-10 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1",
  {
    variants: {
      orientation: {
        horizontal: "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",
        vertical: "flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none"
      }
    },
    defaultVariants: {
      orientation: "horizontal"
    }
  }
);
function ButtonGroup({
  className,
  orientation,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    "div",
    {
      role: "group",
      "data-slot": "button-group",
      "data-orientation": orientation,
      className: cn(buttonGroupVariants({ orientation }), className),
      ...props
    }
  );
}
function ButtonGroupText({
  className,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? import_radix_ui8.Slot.Root : "div";
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    Comp,
    {
      className: cn(
        "flex items-center gap-2 rounded-md border bg-muted px-4 text-sm font-medium shadow-xs [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function ButtonGroupSeparator({
  className,
  orientation = "vertical",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    Separator,
    {
      "data-slot": "button-group-separator",
      orientation,
      className: cn(
        "relative m-0! self-stretch bg-input data-[orientation=vertical]:h-auto",
        className
      ),
      ...props
    }
  );
}

// src/design-system/components/ui/calendar.tsx
var React = __toESM(require("react"));
var import_lucide_react3 = require("lucide-react");
var import_react_day_picker = require("react-day-picker");
var import_jsx_runtime10 = require("react/jsx-runtime");
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}) {
  const defaultClassNames = (0, import_react_day_picker.getDefaultClassNames)();
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    import_react_day_picker.DayPicker,
    {
      showOutsideDays,
      className: cn(
        "group/calendar bg-background p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      ),
      captionLayout,
      formatters: {
        formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" }),
        ...formatters
      },
      classNames: {
        root: cn("w-fit", defaultClassNames.root),
        months: cn(
          "relative flex flex-col gap-4 md:flex-row",
          defaultClassNames.months
        ),
        month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
        nav: cn(
          "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) p-0 select-none aria-disabled:opacity-50",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) p-0 select-none aria-disabled:opacity-50",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "relative rounded-md border border-input shadow-xs has-focus:border-ring has-focus:ring-[3px] has-focus:ring-ring/50",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn(
          "absolute inset-0 bg-popover opacity-0",
          defaultClassNames.dropdown
        ),
        caption_label: cn(
          "font-medium select-none",
          captionLayout === "label" ? "text-sm" : "flex h-8 items-center gap-1 rounded-md pr-1 pl-2 text-sm [&>svg]:size-3.5 [&>svg]:text-muted-foreground",
          defaultClassNames.caption_label
        ),
        month_grid: cn("w-full border-collapse", defaultClassNames.month_grid),
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "flex-1 rounded-md text-[0.8rem] font-normal text-muted-foreground select-none",
          defaultClassNames.weekday
        ),
        week: cn("mt-2 flex w-full", defaultClassNames.week),
        week_number_header: cn(
          "w-(--cell-size) select-none",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "text-[0.8rem] text-muted-foreground select-none",
          defaultClassNames.week_number
        ),
        day: cn(
          "group/day relative aspect-square h-full w-full p-0 text-center select-none [&:last-child[data-selected=true]_button]:rounded-r-md",
          props.showWeekNumber ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-md" : "[&:first-child[data-selected=true]_button]:rounded-l-md",
          defaultClassNames.day
        ),
        range_start: cn(
          "rounded-l-md bg-accent",
          defaultClassNames.range_start
        ),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn("rounded-r-md bg-accent", defaultClassNames.range_end),
        today: cn(
          "rounded-md bg-accent text-accent-foreground data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn(
          "text-muted-foreground opacity-50",
          defaultClassNames.disabled
        ),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames
      },
      components: {
        Root: ({ className: className2, rootRef, ...props2 }) => {
          return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            "div",
            {
              "data-slot": "calendar",
              ref: rootRef,
              className: cn(className2),
              ...props2
            }
          );
        },
        Chevron: ({ className: className2, orientation, ...props2 }) => {
          if (orientation === "left") {
            return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_lucide_react3.ChevronLeftIcon, { className: cn("size-4", className2), ...props2 });
          }
          if (orientation === "right") {
            return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
              import_lucide_react3.ChevronRightIcon,
              {
                className: cn("size-4", className2),
                ...props2
              }
            );
          }
          return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_lucide_react3.ChevronDownIcon, { className: cn("size-4", className2), ...props2 });
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props2 }) => {
          return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("td", { ...props2, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children }) });
        },
        ...components
      },
      ...props
    }
  );
}
function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}) {
  const defaultClassNames = (0, import_react_day_picker.getDefaultClassNames)();
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    Button,
    {
      ref,
      variant: "ghost",
      size: "icon",
      "data-day": day.date.toLocaleDateString(),
      "data-selected-single": modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle,
      "data-range-start": modifiers.range_start,
      "data-range-end": modifiers.range_end,
      "data-range-middle": modifiers.range_middle,
      className: cn(
        "flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground data-[range-middle=true]:rounded-none data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground dark:hover:text-accent-foreground [&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className
      ),
      ...props
    }
  );
}

// src/design-system/components/ui/card.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
function Card({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    "div",
    {
      "data-slot": "card",
      className: cn(
        "flex flex-col gap-6 rounded-xl border bg-card py-6 text-card-foreground shadow-sm",
        className
      ),
      ...props
    }
  );
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    "div",
    {
      "data-slot": "card-header",
      className: cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      ),
      ...props
    }
  );
}
function CardTitle({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    "div",
    {
      "data-slot": "card-title",
      className: cn("leading-none font-semibold", className),
      ...props
    }
  );
}
function CardDescription({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    "div",
    {
      "data-slot": "card-description",
      className: cn("text-sm text-muted-foreground", className),
      ...props
    }
  );
}
function CardAction({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    "div",
    {
      "data-slot": "card-action",
      className: cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      ),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    "div",
    {
      "data-slot": "card-content",
      className: cn("px-6", className),
      ...props
    }
  );
}
function CardFooter({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    "div",
    {
      "data-slot": "card-footer",
      className: cn("flex items-center px-6 [.border-t]:pt-6", className),
      ...props
    }
  );
}

// src/design-system/components/ui/carousel.tsx
var React2 = __toESM(require("react"));
var import_embla_carousel_react = __toESM(require("embla-carousel-react"));
var import_lucide_react4 = require("lucide-react");
var import_jsx_runtime12 = require("react/jsx-runtime");
var CarouselContext = React2.createContext(null);
function useCarousel() {
  const context = React2.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}) {
  const [carouselRef, api] = (0, import_embla_carousel_react.default)(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y"
    },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = React2.useState(false);
  const [canScrollNext, setCanScrollNext] = React2.useState(false);
  const onSelect = React2.useCallback((api2) => {
    if (!api2) return;
    setCanScrollPrev(api2.canScrollPrev());
    setCanScrollNext(api2.canScrollNext());
  }, []);
  const scrollPrev = React2.useCallback(() => {
    api?.scrollPrev();
  }, [api]);
  const scrollNext = React2.useCallback(() => {
    api?.scrollNext();
  }, [api]);
  const handleKeyDown = React2.useCallback(
    (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );
  React2.useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);
  React2.useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    CarouselContext.Provider,
    {
      value: {
        carouselRef,
        api,
        opts,
        orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
        "div",
        {
          onKeyDownCapture: handleKeyDown,
          className: cn("relative", className),
          role: "region",
          "aria-roledescription": "carousel",
          "data-slot": "carousel",
          ...props,
          children
        }
      )
    }
  );
}
function CarouselContent({ className, ...props }) {
  const { carouselRef, orientation } = useCarousel();
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    "div",
    {
      ref: carouselRef,
      className: "overflow-hidden",
      "data-slot": "carousel-content",
      children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
        "div",
        {
          className: cn(
            "flex",
            orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
            className
          ),
          ...props
        }
      )
    }
  );
}
function CarouselItem({ className, ...props }) {
  const { orientation } = useCarousel();
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    "div",
    {
      role: "group",
      "aria-roledescription": "slide",
      "data-slot": "carousel-item",
      className: cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      ),
      ...props
    }
  );
}
function CarouselPrevious({
  className,
  variant = "outline",
  size = "icon",
  ...props
}) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
    Button,
    {
      "data-slot": "carousel-previous",
      variant,
      size,
      className: cn(
        "absolute size-8 rounded-full",
        orientation === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollPrev,
      onClick: scrollPrev,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_lucide_react4.ArrowLeft, {}),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
}
function CarouselNext({
  className,
  variant = "outline",
  size = "icon",
  ...props
}) {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
    Button,
    {
      "data-slot": "carousel-next",
      variant,
      size,
      className: cn(
        "absolute size-8 rounded-full",
        orientation === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollNext,
      onClick: scrollNext,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_lucide_react4.ArrowRight, {}),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
}

// src/design-system/components/ui/chart.tsx
var React3 = __toESM(require("react"));
var RechartsPrimitive = __toESM(require("recharts"));
var import_jsx_runtime13 = require("react/jsx-runtime");
var THEMES = { light: "", dark: ".dark" };
var INITIAL_DIMENSION = { width: 320, height: 200 };
var ChartContext = React3.createContext(null);
function useChart() {
  const context = React3.useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }
  return context;
}
function ChartContainer({
  id,
  className,
  children,
  config,
  initialDimension = INITIAL_DIMENSION,
  ...props
}) {
  const uniqueId = React3.useId();
  const chartId = `chart-${id ?? uniqueId.replace(/:/g, "")}`;
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(ChartContext.Provider, { value: { config }, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
    "div",
    {
      "data-slot": "chart",
      "data-chart": chartId,
      className: cn(
        "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(ChartStyle, { id: chartId, config }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          RechartsPrimitive.ResponsiveContainer,
          {
            initialDimension,
            children
          }
        )
      ]
    }
  ) });
}
var ChartStyle = ({ id, config }) => {
  const colorConfig = Object.entries(config).filter(
    ([, config2]) => config2.theme ?? config2.color
  );
  if (!colorConfig.length) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(THEMES).map(
          ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig.map(([key, itemConfig]) => {
            const color = itemConfig.theme?.[theme] ?? itemConfig.color;
            return color ? `  --color-${key}: ${color};` : null;
          }).join("\n")}
}
`
        ).join("\n")
      }
    }
  );
};
var ChartTooltip = RechartsPrimitive.Tooltip;
function ChartTooltipContent({
  active,
  payload,
  className,
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
  labelClassName,
  formatter,
  color,
  nameKey,
  labelKey
}) {
  const { config } = useChart();
  const tooltipLabel = React3.useMemo(() => {
    if (hideLabel || !payload?.length) {
      return null;
    }
    const [item] = payload;
    const key = `${labelKey ?? item?.dataKey ?? item?.name ?? "value"}`;
    const itemConfig = getPayloadConfigFromPayload(config, item, key);
    const value = !labelKey && typeof label === "string" ? config[label]?.label ?? label : itemConfig?.label;
    if (labelFormatter) {
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: cn("font-medium", labelClassName), children: labelFormatter(value, payload) });
    }
    if (!value) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: cn("font-medium", labelClassName), children: value });
  }, [
    label,
    labelFormatter,
    payload,
    hideLabel,
    labelClassName,
    config,
    labelKey
  ]);
  if (!active || !payload?.length) {
    return null;
  }
  const nestLabel = payload.length === 1 && indicator !== "dot";
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
    "div",
    {
      className: cn(
        "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
        className
      ),
      children: [
        !nestLabel ? tooltipLabel : null,
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "grid gap-1.5", children: payload.filter((item) => item.type !== "none").map((item, index) => {
          const key = `${nameKey ?? item.name ?? item.dataKey ?? "value"}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);
          const indicatorColor = color ?? item.payload?.fill ?? item.color;
          return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            "div",
            {
              className: cn(
                "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                indicator === "dot" && "items-center"
              ),
              children: formatter && item?.value !== void 0 && item.name ? formatter(item.value, item.name, item, index, item.payload) : /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_jsx_runtime13.Fragment, { children: [
                itemConfig?.icon ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(itemConfig.icon, {}) : !hideIndicator && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                  "div",
                  {
                    className: cn(
                      "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                      {
                        "h-2.5 w-2.5": indicator === "dot",
                        "w-1": indicator === "line",
                        "w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
                        "my-0.5": nestLabel && indicator === "dashed"
                      }
                    ),
                    style: {
                      "--color-bg": indicatorColor,
                      "--color-border": indicatorColor
                    }
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
                  "div",
                  {
                    className: cn(
                      "flex flex-1 justify-between leading-none",
                      nestLabel ? "items-end" : "items-center"
                    ),
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "grid gap-1.5", children: [
                        nestLabel ? tooltipLabel : null,
                        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "text-muted-foreground", children: itemConfig?.label ?? item.name })
                      ] }),
                      item.value != null && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "font-mono font-medium text-foreground tabular-nums", children: typeof item.value === "number" ? item.value.toLocaleString() : String(item.value) })
                    ]
                  }
                )
              ] })
            },
            index
          );
        }) })
      ]
    }
  );
}
var ChartLegend = RechartsPrimitive.Legend;
function ChartLegendContent({
  className,
  hideIcon = false,
  payload,
  verticalAlign = "bottom",
  nameKey
}) {
  const { config } = useChart();
  if (!payload?.length) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    "div",
    {
      className: cn(
        "flex items-center justify-center gap-4",
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className
      ),
      children: payload.filter((item) => item.type !== "none").map((item, index) => {
        const key = `${nameKey ?? item.dataKey ?? "value"}`;
        const itemConfig = getPayloadConfigFromPayload(config, item, key);
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
          "div",
          {
            className: cn(
              "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
            ),
            children: [
              itemConfig?.icon && !hideIcon ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(itemConfig.icon, {}) : /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                "div",
                {
                  className: "h-2 w-2 shrink-0 rounded-[2px]",
                  style: {
                    backgroundColor: item.color
                  }
                }
              ),
              itemConfig?.label
            ]
          },
          index
        );
      })
    }
  );
}
function getPayloadConfigFromPayload(config, payload, key) {
  if (typeof payload !== "object" || payload === null) {
    return void 0;
  }
  const payloadPayload = "payload" in payload && typeof payload.payload === "object" && payload.payload !== null ? payload.payload : void 0;
  let configLabelKey = key;
  if (key in payload && typeof payload[key] === "string") {
    configLabelKey = payload[key];
  } else if (payloadPayload && key in payloadPayload && typeof payloadPayload[key] === "string") {
    configLabelKey = payloadPayload[key];
  }
  return configLabelKey in config ? config[configLabelKey] : config[key];
}

// src/design-system/components/ui/chart-demos.tsx
var import_recharts = require("recharts");
var import_jsx_runtime14 = require("react/jsx-runtime");
var areaData = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 }
];
var barData = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 }
];
var lineData = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 }
];
var pieData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" }
];
var chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))"
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))"
  }
};
var pieChartConfig = {
  visitors: { label: "Visitors" },
  chrome: { label: "Chrome", color: "hsl(var(--chart-1))" },
  safari: { label: "Safari", color: "hsl(var(--chart-2))" },
  firefox: { label: "Firefox", color: "hsl(var(--chart-3))" },
  edge: { label: "Edge", color: "hsl(var(--chart-4))" },
  other: { label: "Other", color: "hsl(var(--chart-5))" }
};
function AreaChartDemo({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(ChartContainer, { config: chartConfig, className, children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
    import_recharts.AreaChart,
    {
      accessibilityLayer: true,
      data: areaData,
      margin: { left: 12, right: 12 },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_recharts.CartesianGrid, { vertical: false }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          import_recharts.XAxis,
          {
            dataKey: "month",
            tickLine: false,
            axisLine: false,
            tickMargin: 8,
            tickFormatter: (value) => value.slice(0, 3)
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(ChartTooltip, { cursor: false, content: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(ChartTooltipContent, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          import_recharts.Area,
          {
            dataKey: "desktop",
            type: "natural",
            fill: "var(--color-desktop)",
            fillOpacity: 0.4,
            stroke: "var(--color-desktop)",
            stackId: "a"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          import_recharts.Area,
          {
            dataKey: "mobile",
            type: "natural",
            fill: "var(--color-mobile)",
            fillOpacity: 0.4,
            stroke: "var(--color-mobile)",
            stackId: "a"
          }
        )
      ]
    }
  ) });
}
function BarChartDemo({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(ChartContainer, { config: chartConfig, className, children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_recharts.BarChart, { accessibilityLayer: true, data: barData, children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_recharts.CartesianGrid, { vertical: false }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      import_recharts.XAxis,
      {
        dataKey: "month",
        tickLine: false,
        tickMargin: 10,
        axisLine: false,
        tickFormatter: (value) => value.slice(0, 3)
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(ChartTooltip, { cursor: false, content: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(ChartTooltipContent, { indicator: "dashed" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_recharts.Bar, { dataKey: "desktop", fill: "var(--color-desktop)", radius: 4 }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_recharts.Bar, { dataKey: "mobile", fill: "var(--color-mobile)", radius: 4 })
  ] }) });
}
function LineChartDemo({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(ChartContainer, { config: chartConfig, className, children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
    import_recharts.LineChart,
    {
      accessibilityLayer: true,
      data: lineData,
      margin: { left: 12, right: 12 },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_recharts.CartesianGrid, { vertical: false }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          import_recharts.XAxis,
          {
            dataKey: "month",
            tickLine: false,
            axisLine: false,
            tickMargin: 8,
            tickFormatter: (value) => value.slice(0, 3)
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(ChartTooltip, { cursor: false, content: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(ChartTooltipContent, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          import_recharts.Line,
          {
            dataKey: "desktop",
            type: "monotone",
            stroke: "var(--color-desktop)",
            strokeWidth: 2,
            dot: false
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          import_recharts.Line,
          {
            dataKey: "mobile",
            type: "monotone",
            stroke: "var(--color-mobile)",
            strokeWidth: 2,
            dot: false
          }
        )
      ]
    }
  ) });
}
function PieChartDemo({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(ChartContainer, { config: pieChartConfig, className, children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_recharts.PieChart, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(ChartTooltip, { cursor: false, content: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(ChartTooltipContent, { hideLabel: true }) }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      import_recharts.Pie,
      {
        data: pieData,
        dataKey: "visitors",
        nameKey: "browser",
        innerRadius: 60,
        strokeWidth: 5
      }
    )
  ] }) });
}

// src/design-system/components/ui/checkbox.tsx
var import_lucide_react5 = require("lucide-react");
var import_radix_ui9 = require("radix-ui");
var import_jsx_runtime15 = require("react/jsx-runtime");
function Checkbox({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    import_radix_ui9.Checkbox.Root,
    {
      "data-slot": "checkbox",
      className: cn(
        "peer size-4 shrink-0 rounded-[4px] border border-input shadow-xs transition-shadow outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:bg-input/30 dark:aria-invalid:ring-destructive/40 dark:data-[state=checked]:bg-primary",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        import_radix_ui9.Checkbox.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "grid place-content-center text-current transition-none",
          children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_lucide_react5.CheckIcon, { className: "size-3.5" })
        }
      )
    }
  );
}

// src/design-system/components/ui/collapsible.tsx
var import_radix_ui10 = require("radix-ui");
var import_jsx_runtime16 = require("react/jsx-runtime");
function Collapsible({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_radix_ui10.Collapsible.Root, { "data-slot": "collapsible", ...props });
}
function CollapsibleTrigger({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    import_radix_ui10.Collapsible.CollapsibleTrigger,
    {
      "data-slot": "collapsible-trigger",
      ...props
    }
  );
}
function CollapsibleContent({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    import_radix_ui10.Collapsible.CollapsibleContent,
    {
      "data-slot": "collapsible-content",
      ...props
    }
  );
}

// src/design-system/components/ui/command.tsx
var import_cmdk = require("cmdk");
var import_lucide_react6 = require("lucide-react");
var import_jsx_runtime17 = require("react/jsx-runtime");
function Command({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    import_cmdk.Command,
    {
      "data-slot": "command",
      className: cn(
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
        className
      ),
      ...props
    }
  );
}
function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  className,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Dialog, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(DialogHeader, { className: "sr-only", children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(DialogTitle, { children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(DialogDescription, { children: description })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      DialogContent,
      {
        className: cn("overflow-hidden p-0", className),
        showCloseButton,
        children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Command, { className: "**:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children })
      }
    )
  ] });
}
function CommandInput({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: "flex h-9 items-center gap-2 border-b px-3",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_lucide_react6.SearchIcon, { className: "size-4 shrink-0 opacity-50" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
          import_cmdk.Command.Input,
          {
            "data-slot": "command-input",
            className: cn(
              "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
              className
            ),
            ...props
          }
        )
      ]
    }
  );
}
function CommandList({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    import_cmdk.Command.List,
    {
      "data-slot": "command-list",
      className: cn(
        "max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto",
        className
      ),
      ...props
    }
  );
}
function CommandEmpty({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    import_cmdk.Command.Empty,
    {
      "data-slot": "command-empty",
      className: "py-6 text-center text-sm",
      ...props
    }
  );
}
function CommandGroup({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    import_cmdk.Command.Group,
    {
      "data-slot": "command-group",
      className: cn(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        className
      ),
      ...props
    }
  );
}
function CommandSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    import_cmdk.Command.Separator,
    {
      "data-slot": "command-separator",
      className: cn("-mx-1 h-px bg-border", className),
      ...props
    }
  );
}
function CommandItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    import_cmdk.Command.Item,
    {
      "data-slot": "command-item",
      className: cn(
        "relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
        className
      ),
      ...props
    }
  );
}
function CommandShortcut({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    "span",
    {
      "data-slot": "command-shortcut",
      className: cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      ),
      ...props
    }
  );
}

// src/design-system/components/ui/context-menu.tsx
var import_lucide_react7 = require("lucide-react");
var import_radix_ui11 = require("radix-ui");
var import_jsx_runtime18 = require("react/jsx-runtime");
function ContextMenu({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_radix_ui11.ContextMenu.Root, { "data-slot": "context-menu", ...props });
}
function ContextMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_radix_ui11.ContextMenu.Trigger, { "data-slot": "context-menu-trigger", ...props });
}
function ContextMenuGroup({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_radix_ui11.ContextMenu.Group, { "data-slot": "context-menu-group", ...props });
}
function ContextMenuPortal({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_radix_ui11.ContextMenu.Portal, { "data-slot": "context-menu-portal", ...props });
}
function ContextMenuSub({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_radix_ui11.ContextMenu.Sub, { "data-slot": "context-menu-sub", ...props });
}
function ContextMenuRadioGroup({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    import_radix_ui11.ContextMenu.RadioGroup,
    {
      "data-slot": "context-menu-radio-group",
      ...props
    }
  );
}
function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
    import_radix_ui11.ContextMenu.SubTrigger,
    {
      "data-slot": "context-menu-sub-trigger",
      "data-inset": inset,
      className: cn(
        "flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[inset]:pl-8 data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_lucide_react7.ChevronRightIcon, { className: "ml-auto" })
      ]
    }
  );
}
function ContextMenuSubContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    import_radix_ui11.ContextMenu.SubContent,
    {
      "data-slot": "context-menu-sub-content",
      className: cn(
        "z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        className
      ),
      ...props
    }
  );
}
function ContextMenuContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_radix_ui11.ContextMenu.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    import_radix_ui11.ContextMenu.Content,
    {
      "data-slot": "context-menu-content",
      className: cn(
        "z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        className
      ),
      ...props
    }
  ) });
}
function ContextMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    import_radix_ui11.ContextMenu.Item,
    {
      "data-slot": "context-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground data-[variant=destructive]:*:[svg]:text-destructive!",
        className
      ),
      ...props
    }
  );
}
function ContextMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
    import_radix_ui11.ContextMenu.CheckboxItem,
    {
      "data-slot": "context-menu-checkbox-item",
      className: cn(
        "relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      checked,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_radix_ui11.ContextMenu.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_lucide_react7.CheckIcon, { className: "size-4" }) }) }),
        children
      ]
    }
  );
}
function ContextMenuRadioItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
    import_radix_ui11.ContextMenu.RadioItem,
    {
      "data-slot": "context-menu-radio-item",
      className: cn(
        "relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_radix_ui11.ContextMenu.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_lucide_react7.CircleIcon, { className: "size-2 fill-current" }) }) }),
        children
      ]
    }
  );
}
function ContextMenuLabel({
  className,
  inset,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    import_radix_ui11.ContextMenu.Label,
    {
      "data-slot": "context-menu-label",
      "data-inset": inset,
      className: cn(
        "px-2 py-1.5 text-sm font-medium text-foreground data-[inset]:pl-8",
        className
      ),
      ...props
    }
  );
}
function ContextMenuSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    import_radix_ui11.ContextMenu.Separator,
    {
      "data-slot": "context-menu-separator",
      className: cn("-mx-1 my-1 h-px bg-border", className),
      ...props
    }
  );
}
function ContextMenuShortcut({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    "span",
    {
      "data-slot": "context-menu-shortcut",
      className: cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      ),
      ...props
    }
  );
}

// src/design-system/components/ui/date-picker.tsx
var import_date_fns = require("date-fns");
var import_lucide_react8 = require("lucide-react");
var import_react = require("react");
var import_jsx_runtime19 = require("react/jsx-runtime");
var DatePicker = (0, import_react.forwardRef)(function DatePickerCmp({ date, setDate }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(Popover, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
      Button,
      {
        variant: "outline",
        className: cn(
          "w-full justify-start text-left font-normal",
          !date && "text-muted-foreground"
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_lucide_react8.Calendar, { className: "mr-2 h-4 w-4" }),
          date ? (0, import_date_fns.format)(date, "PPP") : /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { children: "Pick a date" })
        ]
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(PopoverContent, { className: "w-auto p-0", ref, children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
      Calendar,
      {
        mode: "single",
        selected: date,
        onSelect: setDate
      }
    ) })
  ] });
});

// src/design-system/components/ui/dialog.tsx
var import_lucide_react9 = require("lucide-react");
var import_radix_ui12 = require("radix-ui");
var import_jsx_runtime20 = require("react/jsx-runtime");
function Dialog({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_radix_ui12.Dialog.Root, { "data-slot": "dialog", ...props });
}
function DialogTrigger({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_radix_ui12.Dialog.Trigger, { "data-slot": "dialog-trigger", ...props });
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_radix_ui12.Dialog.Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogClose({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_radix_ui12.Dialog.Close, { "data-slot": "dialog-close", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    import_radix_ui12.Dialog.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: cn(
        "fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
        className
      ),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(DialogPortal, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(DialogOverlay, {}),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
      import_radix_ui12.Dialog.Content,
      {
        "data-slot": "dialog-content",
        className: cn(
          "fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:max-w-lg",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
            import_radix_ui12.Dialog.Close,
            {
              "data-slot": "dialog-close",
              className: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_lucide_react9.XIcon, {}),
                /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    "div",
    {
      "data-slot": "dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function DialogFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
    "div",
    {
      "data-slot": "dialog-footer",
      className: cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      ),
      ...props,
      children: [
        children,
        showCloseButton && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_radix_ui12.Dialog.Close, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Button, { variant: "outline", children: "Close" }) })
      ]
    }
  );
}
function DialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    import_radix_ui12.Dialog.Title,
    {
      "data-slot": "dialog-title",
      className: cn("text-lg leading-none font-semibold", className),
      ...props
    }
  );
}
function DialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    import_radix_ui12.Dialog.Description,
    {
      "data-slot": "dialog-description",
      className: cn("text-sm text-muted-foreground", className),
      ...props
    }
  );
}

// src/design-system/components/ui/drawer.tsx
var import_vaul = require("vaul");
var import_jsx_runtime21 = require("react/jsx-runtime");
function Drawer({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_vaul.Drawer.Root, { "data-slot": "drawer", ...props });
}
function DrawerTrigger({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_vaul.Drawer.Trigger, { "data-slot": "drawer-trigger", ...props });
}
function DrawerPortal({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_vaul.Drawer.Portal, { "data-slot": "drawer-portal", ...props });
}
function DrawerClose({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_vaul.Drawer.Close, { "data-slot": "drawer-close", ...props });
}
function DrawerOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
    import_vaul.Drawer.Overlay,
    {
      "data-slot": "drawer-overlay",
      className: cn(
        "fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
        className
      ),
      ...props
    }
  );
}
function DrawerContent({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(DrawerPortal, { "data-slot": "drawer-portal", children: [
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(DrawerOverlay, {}),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
      import_vaul.Drawer.Content,
      {
        "data-slot": "drawer-content",
        className: cn(
          "group/drawer-content fixed z-50 flex h-auto flex-col bg-background",
          "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b",
          "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t",
          "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm",
          "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm",
          className
        ),
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full bg-muted group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }),
          children
        ]
      }
    )
  ] });
}
function DrawerHeader({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
    "div",
    {
      "data-slot": "drawer-header",
      className: cn(
        "flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left",
        className
      ),
      ...props
    }
  );
}
function DrawerFooter({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
    "div",
    {
      "data-slot": "drawer-footer",
      className: cn("mt-auto flex flex-col gap-2 p-4", className),
      ...props
    }
  );
}
function DrawerTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
    import_vaul.Drawer.Title,
    {
      "data-slot": "drawer-title",
      className: cn("font-semibold text-foreground", className),
      ...props
    }
  );
}
function DrawerDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
    import_vaul.Drawer.Description,
    {
      "data-slot": "drawer-description",
      className: cn("text-sm text-muted-foreground", className),
      ...props
    }
  );
}

// src/design-system/components/ui/dropdown-menu.tsx
var import_lucide_react10 = require("lucide-react");
var import_radix_ui13 = require("radix-ui");
var import_jsx_runtime22 = require("react/jsx-runtime");
function DropdownMenu({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_radix_ui13.DropdownMenu.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuPortal({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_radix_ui13.DropdownMenu.Portal, { "data-slot": "dropdown-menu-portal", ...props });
}
function DropdownMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
    import_radix_ui13.DropdownMenu.Trigger,
    {
      "data-slot": "dropdown-menu-trigger",
      ...props
    }
  );
}
function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_radix_ui13.DropdownMenu.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
    import_radix_ui13.DropdownMenu.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset,
      className: cn(
        "z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        className
      ),
      ...props
    }
  ) });
}
function DropdownMenuGroup({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_radix_ui13.DropdownMenu.Group, { "data-slot": "dropdown-menu-group", ...props });
}
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
    import_radix_ui13.DropdownMenu.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground data-[variant=destructive]:*:[svg]:text-destructive!",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
    import_radix_ui13.DropdownMenu.CheckboxItem,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      className: cn(
        "relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      checked,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_radix_ui13.DropdownMenu.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_lucide_react10.CheckIcon, { className: "size-4" }) }) }),
        children
      ]
    }
  );
}
function DropdownMenuRadioGroup({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
    import_radix_ui13.DropdownMenu.RadioGroup,
    {
      "data-slot": "dropdown-menu-radio-group",
      ...props
    }
  );
}
function DropdownMenuRadioItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
    import_radix_ui13.DropdownMenu.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: cn(
        "relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_radix_ui13.DropdownMenu.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_lucide_react10.CircleIcon, { className: "size-2 fill-current" }) }) }),
        children
      ]
    }
  );
}
function DropdownMenuLabel({
  className,
  inset,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
    import_radix_ui13.DropdownMenu.Label,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": inset,
      className: cn(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
    import_radix_ui13.DropdownMenu.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: cn("-mx-1 my-1 h-px bg-border", className),
      ...props
    }
  );
}
function DropdownMenuShortcut({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
    "span",
    {
      "data-slot": "dropdown-menu-shortcut",
      className: cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuSub({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_radix_ui13.DropdownMenu.Sub, { "data-slot": "dropdown-menu-sub", ...props });
}
function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
    import_radix_ui13.DropdownMenu.SubTrigger,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": inset,
      className: cn(
        "flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[inset]:pl-8 data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_lucide_react10.ChevronRightIcon, { className: "ml-auto size-4" })
      ]
    }
  );
}
function DropdownMenuSubContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
    import_radix_ui13.DropdownMenu.SubContent,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: cn(
        "z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        className
      ),
      ...props
    }
  );
}

// src/design-system/components/ui/empty.tsx
var import_class_variance_authority5 = require("class-variance-authority");
var import_jsx_runtime23 = require("react/jsx-runtime");
function Empty({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
    "div",
    {
      "data-slot": "empty",
      className: cn(
        "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-lg border-dashed p-6 text-center text-balance md:p-12",
        className
      ),
      ...props
    }
  );
}
function EmptyHeader({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
    "div",
    {
      "data-slot": "empty-header",
      className: cn(
        "flex max-w-sm flex-col items-center gap-2 text-center",
        className
      ),
      ...props
    }
  );
}
var emptyMediaVariants = (0, import_class_variance_authority5.cva)(
  "mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground [&_svg:not([class*='size-'])]:size-6"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function EmptyMedia({
  className,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
    "div",
    {
      "data-slot": "empty-icon",
      "data-variant": variant,
      className: cn(emptyMediaVariants({ variant, className })),
      ...props
    }
  );
}
function EmptyTitle({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
    "div",
    {
      "data-slot": "empty-title",
      className: cn("text-lg font-medium tracking-tight", className),
      ...props
    }
  );
}
function EmptyDescription({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
    "div",
    {
      "data-slot": "empty-description",
      className: cn(
        "text-sm/relaxed text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
        className
      ),
      ...props
    }
  );
}
function EmptyContent({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
    "div",
    {
      "data-slot": "empty-content",
      className: cn(
        "flex w-full max-w-sm min-w-0 flex-col items-center gap-4 text-sm text-balance",
        className
      ),
      ...props
    }
  );
}

// src/design-system/components/ui/field.tsx
var import_react2 = require("react");
var import_class_variance_authority6 = require("class-variance-authority");
var import_jsx_runtime24 = require("react/jsx-runtime");
function FieldSet({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    "fieldset",
    {
      "data-slot": "field-set",
      className: cn(
        "flex flex-col gap-6",
        "has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
        className
      ),
      ...props
    }
  );
}
function FieldLegend({
  className,
  variant = "legend",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    "legend",
    {
      "data-slot": "field-legend",
      "data-variant": variant,
      className: cn(
        "mb-3 font-medium",
        "data-[variant=legend]:text-base",
        "data-[variant=label]:text-sm",
        className
      ),
      ...props
    }
  );
}
function FieldGroup({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    "div",
    {
      "data-slot": "field-group",
      className: cn(
        "group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4",
        className
      ),
      ...props
    }
  );
}
var fieldVariants = (0, import_class_variance_authority6.cva)(
  "group/field flex w-full gap-3 data-[invalid=true]:text-destructive",
  {
    variants: {
      orientation: {
        vertical: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],
        horizontal: [
          "flex-row items-center",
          "[&>[data-slot=field-label]]:flex-auto",
          "has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
        ],
        responsive: [
          "flex-col @md/field-group:flex-row @md/field-group:items-center [&>*]:w-full @md/field-group:[&>*]:w-auto [&>.sr-only]:w-auto",
          "@md/field-group:[&>[data-slot=field-label]]:flex-auto",
          "@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
        ]
      }
    },
    defaultVariants: {
      orientation: "vertical"
    }
  }
);
function Field({
  className,
  orientation = "vertical",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    "div",
    {
      role: "group",
      "data-slot": "field",
      "data-orientation": orientation,
      className: cn(fieldVariants({ orientation }), className),
      ...props
    }
  );
}
function FieldContent({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    "div",
    {
      "data-slot": "field-content",
      className: cn(
        "group/field-content flex flex-1 flex-col gap-1.5 leading-snug",
        className
      ),
      ...props
    }
  );
}
function FieldLabel({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    Label,
    {
      "data-slot": "field-label",
      className: cn(
        "group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50",
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4",
        "has-data-[state=checked]:border-primary has-data-[state=checked]:bg-primary/5 dark:has-data-[state=checked]:bg-primary/10",
        className
      ),
      ...props
    }
  );
}
function FieldTitle({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    "div",
    {
      "data-slot": "field-label",
      className: cn(
        "flex w-fit items-center gap-2 text-sm leading-snug font-medium group-data-[disabled=true]/field:opacity-50",
        className
      ),
      ...props
    }
  );
}
function FieldDescription({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    "p",
    {
      "data-slot": "field-description",
      className: cn(
        "text-sm leading-normal font-normal text-muted-foreground group-has-[[data-orientation=horizontal]]/field:text-balance",
        "last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5",
        "[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
        className
      ),
      ...props
    }
  );
}
function FieldSeparator({
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
    "div",
    {
      "data-slot": "field-separator",
      "data-content": !!children,
      className: cn(
        "relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Separator, { className: "absolute inset-0 top-1/2" }),
        children && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
          "span",
          {
            className: "relative mx-auto block w-fit bg-background px-2 text-muted-foreground",
            "data-slot": "field-separator-content",
            children
          }
        )
      ]
    }
  );
}
function FieldError({
  className,
  children,
  errors,
  ...props
}) {
  const content = (0, import_react2.useMemo)(() => {
    if (children) {
      return children;
    }
    if (!errors?.length) {
      return null;
    }
    const uniqueErrors = [
      ...new Map(errors.map((error) => [error?.message, error])).values()
    ];
    if (uniqueErrors?.length == 1) {
      return uniqueErrors[0]?.message;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("ul", { className: "ml-4 flex list-disc flex-col gap-1", children: uniqueErrors.map(
      (error, index) => error?.message && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("li", { children: error.message }, index)
    ) });
  }, [children, errors]);
  if (!content) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    "div",
    {
      role: "alert",
      "data-slot": "field-error",
      className: cn("text-sm font-normal text-destructive", className),
      ...props,
      children: content
    }
  );
}

// src/design-system/components/ui/form.tsx
var React4 = __toESM(require("react"));
var import_radix_ui14 = require("radix-ui");
var import_react_hook_form = require("react-hook-form");
var import_jsx_runtime25 = require("react/jsx-runtime");
var Form = import_react_hook_form.FormProvider;
var FormFieldContext = React4.createContext(
  {}
);
var FormField = ({
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(FormFieldContext.Provider, { value: { name: props.name }, children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_react_hook_form.Controller, { ...props }) });
};
var useFormField = () => {
  const fieldContext = React4.useContext(FormFieldContext);
  const itemContext = React4.useContext(FormItemContext);
  const { getFieldState } = (0, import_react_hook_form.useFormContext)();
  const formState = (0, import_react_hook_form.useFormState)({ name: fieldContext.name });
  const fieldState = getFieldState(fieldContext.name, formState);
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }
  const { id } = itemContext;
  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  };
};
var FormItemContext = React4.createContext(
  {}
);
function FormItem({ className, ...props }) {
  const id = React4.useId();
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(FormItemContext.Provider, { value: { id }, children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    "div",
    {
      "data-slot": "form-item",
      className: cn("grid gap-2", className),
      ...props
    }
  ) });
}
function FormLabel({
  className,
  ...props
}) {
  const { error, formItemId } = useFormField();
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    Label,
    {
      "data-slot": "form-label",
      "data-error": !!error,
      className: cn("data-[error=true]:text-destructive", className),
      htmlFor: formItemId,
      ...props
    }
  );
}
function FormControl({ ...props }) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    import_radix_ui14.Slot.Root,
    {
      "data-slot": "form-control",
      id: formItemId,
      "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
      "aria-invalid": !!error,
      ...props
    }
  );
}
function FormDescription({ className, ...props }) {
  const { formDescriptionId } = useFormField();
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    "p",
    {
      "data-slot": "form-description",
      id: formDescriptionId,
      className: cn("text-sm text-muted-foreground", className),
      ...props
    }
  );
}
function FormMessage({ className, ...props }) {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? "") : props.children;
  if (!body) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    "p",
    {
      "data-slot": "form-message",
      id: formMessageId,
      className: cn("text-sm text-destructive", className),
      ...props,
      children: body
    }
  );
}

// src/design-system/components/ui/hover-card.tsx
var import_radix_ui15 = require("radix-ui");
var import_jsx_runtime26 = require("react/jsx-runtime");
function HoverCard({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_radix_ui15.HoverCard.Root, { "data-slot": "hover-card", ...props });
}
function HoverCardTrigger({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_radix_ui15.HoverCard.Trigger, { "data-slot": "hover-card-trigger", ...props });
}
function HoverCardContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_radix_ui15.HoverCard.Portal, { "data-slot": "hover-card-portal", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
    import_radix_ui15.HoverCard.Content,
    {
      "data-slot": "hover-card-content",
      align,
      sideOffset,
      className: cn(
        "z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        className
      ),
      ...props
    }
  ) });
}

// src/design-system/components/ui/input.tsx
var import_jsx_runtime27 = require("react/jsx-runtime");
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30",
        "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
        className
      ),
      ...props
    }
  );
}

// src/design-system/components/ui/input-group.tsx
var import_class_variance_authority7 = require("class-variance-authority");
var import_jsx_runtime28 = require("react/jsx-runtime");
function InputGroup({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
    "div",
    {
      "data-slot": "input-group",
      role: "group",
      className: cn(
        "group/input-group relative flex w-full items-center rounded-md border border-input shadow-xs transition-[color,box-shadow] outline-none dark:bg-input/30",
        "h-9 min-w-0 has-[>textarea]:h-auto",
        // Variants based on alignment.
        "has-[>[data-align=inline-start]]:[&>input]:pl-2",
        "has-[>[data-align=inline-end]]:[&>input]:pr-2",
        "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3",
        "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3",
        // Focus state.
        "has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-[3px] has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50",
        // Error state.
        "has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-destructive/20 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40",
        className
      ),
      ...props
    }
  );
}
var inputGroupAddonVariants = (0, import_class_variance_authority7.cva)(
  "flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted-foreground select-none group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4",
  {
    variants: {
      align: {
        "inline-start": "order-first pl-3 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]",
        "inline-end": "order-last pr-3 has-[>button]:mr-[-0.45rem] has-[>kbd]:mr-[-0.35rem]",
        "block-start": "order-first w-full justify-start px-3 pt-3 group-has-[>input]/input-group:pt-2.5 [.border-b]:pb-3",
        "block-end": "order-last w-full justify-start px-3 pb-3 group-has-[>input]/input-group:pb-2.5 [.border-t]:pt-3"
      }
    },
    defaultVariants: {
      align: "inline-start"
    }
  }
);
function InputGroupAddon({
  className,
  align = "inline-start",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
    "div",
    {
      role: "group",
      "data-slot": "input-group-addon",
      "data-align": align,
      className: cn(inputGroupAddonVariants({ align }), className),
      onClick: (e) => {
        if (e.target.closest("button")) {
          return;
        }
        e.currentTarget.parentElement?.querySelector("input")?.focus();
      },
      ...props
    }
  );
}
var inputGroupButtonVariants = (0, import_class_variance_authority7.cva)(
  "flex items-center gap-2 text-sm shadow-none",
  {
    variants: {
      size: {
        xs: "h-6 gap-1 rounded-[calc(var(--radius)-5px)] px-2 has-[>svg]:px-2 [&>svg:not([class*='size-'])]:size-3.5",
        sm: "h-8 gap-1.5 rounded-md px-2.5 has-[>svg]:px-2.5",
        "icon-xs": "size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0",
        "icon-sm": "size-8 p-0 has-[>svg]:p-0"
      }
    },
    defaultVariants: {
      size: "xs"
    }
  }
);
function InputGroupButton({
  className,
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
    Button,
    {
      type,
      "data-size": size,
      variant,
      className: cn(inputGroupButtonVariants({ size }), className),
      ...props
    }
  );
}
function InputGroupText({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
    "span",
    {
      className: cn(
        "flex items-center gap-2 text-sm text-muted-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function InputGroupInput({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
    Input,
    {
      "data-slot": "input-group-control",
      className: cn(
        "flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent",
        className
      ),
      ...props
    }
  );
}
function InputGroupTextarea({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
    Textarea,
    {
      "data-slot": "input-group-control",
      className: cn(
        "flex-1 resize-none rounded-none border-0 bg-transparent py-3 shadow-none focus-visible:ring-0 dark:bg-transparent",
        className
      ),
      ...props
    }
  );
}

// src/design-system/components/ui/input-otp.tsx
var React5 = __toESM(require("react"));
var import_input_otp = require("input-otp");
var import_lucide_react11 = require("lucide-react");
var import_jsx_runtime29 = require("react/jsx-runtime");
function InputOTP({
  className,
  containerClassName,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
    import_input_otp.OTPInput,
    {
      "data-slot": "input-otp",
      containerClassName: cn(
        "flex items-center gap-2 has-disabled:opacity-50",
        containerClassName
      ),
      className: cn("disabled:cursor-not-allowed", className),
      ...props
    }
  );
}
function InputOTPGroup({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
    "div",
    {
      "data-slot": "input-otp-group",
      className: cn("flex items-center", className),
      ...props
    }
  );
}
function InputOTPSlot({
  index,
  className,
  ...props
}) {
  const inputOTPContext = React5.useContext(import_input_otp.OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
    "div",
    {
      "data-slot": "input-otp-slot",
      "data-active": isActive,
      className: cn(
        "relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md aria-invalid:border-destructive data-[active=true]:z-10 data-[active=true]:border-ring data-[active=true]:ring-[3px] data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:border-destructive data-[active=true]:aria-invalid:ring-destructive/20 dark:bg-input/30 dark:data-[active=true]:aria-invalid:ring-destructive/40",
        className
      ),
      ...props,
      children: [
        char,
        hasFakeCaret && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "h-4 w-px animate-caret-blink bg-foreground duration-1000" }) })
      ]
    }
  );
}
function InputOTPSeparator({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { "data-slot": "input-otp-separator", role: "separator", ...props, children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_lucide_react11.MinusIcon, {}) });
}

// src/design-system/components/ui/item.tsx
var import_class_variance_authority8 = require("class-variance-authority");
var import_radix_ui16 = require("radix-ui");
var import_jsx_runtime30 = require("react/jsx-runtime");
function ItemGroup({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
    "div",
    {
      role: "list",
      "data-slot": "item-group",
      className: cn("group/item-group flex flex-col", className),
      ...props
    }
  );
}
function ItemSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
    Separator,
    {
      "data-slot": "item-separator",
      orientation: "horizontal",
      className: cn("my-0", className),
      ...props
    }
  );
}
var itemVariants = (0, import_class_variance_authority8.cva)(
  "group/item flex flex-wrap items-center rounded-md border border-transparent text-sm transition-colors duration-100 outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 [a]:transition-colors [a]:hover:bg-accent/50",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border-border",
        muted: "bg-muted/50"
      },
      size: {
        default: "gap-4 p-4",
        sm: "gap-2.5 px-4 py-3"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Item({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? import_radix_ui16.Slot.Root : "div";
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
    Comp,
    {
      "data-slot": "item",
      "data-variant": variant,
      "data-size": size,
      className: cn(itemVariants({ variant, size, className })),
      ...props
    }
  );
}
var itemMediaVariants = (0, import_class_variance_authority8.cva)(
  "flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:translate-y-0.5 group-has-[[data-slot=item-description]]/item:self-start [&_svg]:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "size-8 rounded-sm border bg-muted [&_svg:not([class*='size-'])]:size-4",
        image: "size-10 overflow-hidden rounded-sm [&_img]:size-full [&_img]:object-cover"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function ItemMedia({
  className,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
    "div",
    {
      "data-slot": "item-media",
      "data-variant": variant,
      className: cn(itemMediaVariants({ variant, className })),
      ...props
    }
  );
}
function ItemContent({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
    "div",
    {
      "data-slot": "item-content",
      className: cn(
        "flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none",
        className
      ),
      ...props
    }
  );
}
function ItemTitle({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
    "div",
    {
      "data-slot": "item-title",
      className: cn(
        "flex w-fit items-center gap-2 text-sm leading-snug font-medium",
        className
      ),
      ...props
    }
  );
}
function ItemDescription({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
    "p",
    {
      "data-slot": "item-description",
      className: cn(
        "line-clamp-2 text-sm leading-normal font-normal text-balance text-muted-foreground",
        "[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
        className
      ),
      ...props
    }
  );
}
function ItemActions({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
    "div",
    {
      "data-slot": "item-actions",
      className: cn("flex items-center gap-2", className),
      ...props
    }
  );
}
function ItemHeader({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
    "div",
    {
      "data-slot": "item-header",
      className: cn(
        "flex basis-full items-center justify-between gap-2",
        className
      ),
      ...props
    }
  );
}
function ItemFooter({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
    "div",
    {
      "data-slot": "item-footer",
      className: cn(
        "flex basis-full items-center justify-between gap-2",
        className
      ),
      ...props
    }
  );
}

// src/design-system/components/ui/kbd.tsx
var import_jsx_runtime31 = require("react/jsx-runtime");
function Kbd({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
    "kbd",
    {
      "data-slot": "kbd",
      className: cn(
        "pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm bg-muted px-1 font-sans text-xs font-medium text-muted-foreground select-none",
        "[&_svg:not([class*='size-'])]:size-3",
        "[[data-slot=tooltip-content]_&]:bg-background/20 [[data-slot=tooltip-content]_&]:text-background dark:[[data-slot=tooltip-content]_&]:bg-background/10",
        className
      ),
      ...props
    }
  );
}
function KbdGroup({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
    "kbd",
    {
      "data-slot": "kbd-group",
      className: cn("inline-flex items-center gap-1", className),
      ...props
    }
  );
}

// src/design-system/components/ui/label.tsx
var import_radix_ui17 = require("radix-ui");
var import_jsx_runtime32 = require("react/jsx-runtime");
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
    import_radix_ui17.Label.Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}

// src/design-system/components/ui/menubar.tsx
var import_lucide_react12 = require("lucide-react");
var import_radix_ui18 = require("radix-ui");
var import_jsx_runtime33 = require("react/jsx-runtime");
function Menubar({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
    import_radix_ui18.Menubar.Root,
    {
      "data-slot": "menubar",
      className: cn(
        "flex h-9 items-center gap-1 rounded-md border bg-background p-1 shadow-xs",
        className
      ),
      ...props
    }
  );
}
function MenubarMenu({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_radix_ui18.Menubar.Menu, { "data-slot": "menubar-menu", ...props });
}
function MenubarGroup({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_radix_ui18.Menubar.Group, { "data-slot": "menubar-group", ...props });
}
function MenubarPortal({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_radix_ui18.Menubar.Portal, { "data-slot": "menubar-portal", ...props });
}
function MenubarRadioGroup({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_radix_ui18.Menubar.RadioGroup, { "data-slot": "menubar-radio-group", ...props });
}
function MenubarTrigger({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
    import_radix_ui18.Menubar.Trigger,
    {
      "data-slot": "menubar-trigger",
      className: cn(
        "flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        className
      ),
      ...props
    }
  );
}
function MenubarContent({
  className,
  align = "start",
  alignOffset = -4,
  sideOffset = 8,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(MenubarPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
    import_radix_ui18.Menubar.Content,
    {
      "data-slot": "menubar-content",
      align,
      alignOffset,
      sideOffset,
      className: cn(
        "z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        className
      ),
      ...props
    }
  ) });
}
function MenubarItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
    import_radix_ui18.Menubar.Item,
    {
      "data-slot": "menubar-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground data-[variant=destructive]:*:[svg]:text-destructive!",
        className
      ),
      ...props
    }
  );
}
function MenubarCheckboxItem({
  className,
  children,
  checked,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
    import_radix_ui18.Menubar.CheckboxItem,
    {
      "data-slot": "menubar-checkbox-item",
      className: cn(
        "relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      checked,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_radix_ui18.Menubar.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_lucide_react12.CheckIcon, { className: "size-4" }) }) }),
        children
      ]
    }
  );
}
function MenubarRadioItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
    import_radix_ui18.Menubar.RadioItem,
    {
      "data-slot": "menubar-radio-item",
      className: cn(
        "relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_radix_ui18.Menubar.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_lucide_react12.CircleIcon, { className: "size-2 fill-current" }) }) }),
        children
      ]
    }
  );
}
function MenubarLabel({
  className,
  inset,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
    import_radix_ui18.Menubar.Label,
    {
      "data-slot": "menubar-label",
      "data-inset": inset,
      className: cn(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      ),
      ...props
    }
  );
}
function MenubarSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
    import_radix_ui18.Menubar.Separator,
    {
      "data-slot": "menubar-separator",
      className: cn("-mx-1 my-1 h-px bg-border", className),
      ...props
    }
  );
}
function MenubarShortcut({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
    "span",
    {
      "data-slot": "menubar-shortcut",
      className: cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      ),
      ...props
    }
  );
}
function MenubarSub({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_radix_ui18.Menubar.Sub, { "data-slot": "menubar-sub", ...props });
}
function MenubarSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
    import_radix_ui18.Menubar.SubTrigger,
    {
      "data-slot": "menubar-sub-trigger",
      "data-inset": inset,
      className: cn(
        "flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none focus:bg-accent focus:text-accent-foreground data-[inset]:pl-8 data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_lucide_react12.ChevronRightIcon, { className: "ml-auto h-4 w-4" })
      ]
    }
  );
}
function MenubarSubContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
    import_radix_ui18.Menubar.SubContent,
    {
      "data-slot": "menubar-sub-content",
      className: cn(
        "z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        className
      ),
      ...props
    }
  );
}

// src/design-system/components/ui/navigation-menu.tsx
var import_class_variance_authority9 = require("class-variance-authority");
var import_lucide_react13 = require("lucide-react");
var import_radix_ui19 = require("radix-ui");
var import_jsx_runtime34 = require("react/jsx-runtime");
function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(
    import_radix_ui19.NavigationMenu.Root,
    {
      "data-slot": "navigation-menu",
      "data-viewport": viewport,
      className: cn(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        className
      ),
      ...props,
      children: [
        children,
        viewport && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(NavigationMenuViewport, {})
      ]
    }
  );
}
function NavigationMenuList({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
    import_radix_ui19.NavigationMenu.List,
    {
      "data-slot": "navigation-menu-list",
      className: cn(
        "group flex flex-1 list-none items-center justify-center gap-1",
        className
      ),
      ...props
    }
  );
}
function NavigationMenuItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
    import_radix_ui19.NavigationMenu.Item,
    {
      "data-slot": "navigation-menu-item",
      className: cn("relative", className),
      ...props
    }
  );
}
var navigationMenuTriggerStyle = (0, import_class_variance_authority9.cva)(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-[color,box-shadow] outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-accent/50 data-[state=open]:text-accent-foreground data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent"
);
function NavigationMenuTrigger({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(
    import_radix_ui19.NavigationMenu.Trigger,
    {
      "data-slot": "navigation-menu-trigger",
      className: cn(navigationMenuTriggerStyle(), "group", className),
      ...props,
      children: [
        children,
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
          import_lucide_react13.ChevronDownIcon,
          {
            className: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
}
function NavigationMenuContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
    import_radix_ui19.NavigationMenu.Content,
    {
      "data-slot": "navigation-menu-content",
      className: cn(
        "top-0 left-0 w-full p-2 pr-2.5 data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 data-[motion^=from-]:animate-in data-[motion^=from-]:fade-in data-[motion^=to-]:animate-out data-[motion^=to-]:fade-out md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95",
        className
      ),
      ...props
    }
  );
}
function NavigationMenuViewport({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
    "div",
    {
      className: cn(
        "absolute top-full left-0 isolate z-50 flex justify-center"
      ),
      children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
        import_radix_ui19.NavigationMenu.Viewport,
        {
          "data-slot": "navigation-menu-viewport",
          className: cn(
            "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
            className
          ),
          ...props
        }
      )
    }
  );
}
function NavigationMenuLink({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
    import_radix_ui19.NavigationMenu.Link,
    {
      "data-slot": "navigation-menu-link",
      className: cn(
        "flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground data-[active=true]:hover:bg-accent data-[active=true]:focus:bg-accent [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
        className
      ),
      ...props
    }
  );
}
function NavigationMenuIndicator({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
    import_radix_ui19.NavigationMenu.Indicator,
    {
      "data-slot": "navigation-menu-indicator",
      className: cn(
        "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:animate-in data-[state=visible]:fade-in",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
    }
  );
}

// src/design-system/components/ui/pagination.tsx
var import_lucide_react14 = require("lucide-react");
var import_jsx_runtime35 = require("react/jsx-runtime");
function Pagination({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
    "nav",
    {
      role: "navigation",
      "aria-label": "pagination",
      "data-slot": "pagination",
      className: cn("mx-auto flex w-full justify-center", className),
      ...props
    }
  );
}
function PaginationContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
    "ul",
    {
      "data-slot": "pagination-content",
      className: cn("flex flex-row items-center gap-1", className),
      ...props
    }
  );
}
function PaginationItem({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("li", { "data-slot": "pagination-item", ...props });
}
function PaginationLink({
  className,
  isActive,
  size = "icon",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
    "a",
    {
      "aria-current": isActive ? "page" : void 0,
      "data-slot": "pagination-link",
      "data-active": isActive,
      className: cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size
        }),
        className
      ),
      ...props
    }
  );
}
function PaginationPrevious({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(
    PaginationLink,
    {
      "aria-label": "Go to previous page",
      size: "default",
      className: cn("gap-1 px-2.5 sm:pl-2.5", className),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_lucide_react14.ChevronLeftIcon, {}),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: "hidden sm:block", children: "Previous" })
      ]
    }
  );
}
function PaginationNext({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(
    PaginationLink,
    {
      "aria-label": "Go to next page",
      size: "default",
      className: cn("gap-1 px-2.5 sm:pr-2.5", className),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: "hidden sm:block", children: "Next" }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_lucide_react14.ChevronRightIcon, {})
      ]
    }
  );
}
function PaginationEllipsis({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(
    "span",
    {
      "aria-hidden": true,
      "data-slot": "pagination-ellipsis",
      className: cn("flex size-9 items-center justify-center", className),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_lucide_react14.MoreHorizontalIcon, { className: "size-4" }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: "sr-only", children: "More pages" })
      ]
    }
  );
}

// src/design-system/components/ui/popover.tsx
var import_radix_ui20 = require("radix-ui");
var import_jsx_runtime36 = require("react/jsx-runtime");
function Popover({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_radix_ui20.Popover.Root, { "data-slot": "popover", ...props });
}
function PopoverTrigger({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_radix_ui20.Popover.Trigger, { "data-slot": "popover-trigger", ...props });
}
function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_radix_ui20.Popover.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
    import_radix_ui20.Popover.Content,
    {
      "data-slot": "popover-content",
      align,
      sideOffset,
      className: cn(
        "z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        className
      ),
      ...props
    }
  ) });
}
function PopoverAnchor({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_radix_ui20.Popover.Anchor, { "data-slot": "popover-anchor", ...props });
}
function PopoverHeader({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
    "div",
    {
      "data-slot": "popover-header",
      className: cn("flex flex-col gap-1 text-sm", className),
      ...props
    }
  );
}
function PopoverTitle({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
    "div",
    {
      "data-slot": "popover-title",
      className: cn("font-medium", className),
      ...props
    }
  );
}
function PopoverDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
    "p",
    {
      "data-slot": "popover-description",
      className: cn("text-muted-foreground", className),
      ...props
    }
  );
}

// src/design-system/components/ui/progress.tsx
var import_radix_ui21 = require("radix-ui");
var import_jsx_runtime37 = require("react/jsx-runtime");
function Progress({
  className,
  value,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
    import_radix_ui21.Progress.Root,
    {
      "data-slot": "progress",
      className: cn(
        "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
        import_radix_ui21.Progress.Indicator,
        {
          "data-slot": "progress-indicator",
          className: "h-full w-full flex-1 bg-primary transition-all",
          style: { transform: `translateX(-${100 - (value || 0)}%)` }
        }
      )
    }
  );
}

// src/design-system/components/ui/radio-group.tsx
var import_lucide_react15 = require("lucide-react");
var import_radix_ui22 = require("radix-ui");
var import_jsx_runtime38 = require("react/jsx-runtime");
function RadioGroup({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
    import_radix_ui22.RadioGroup.Root,
    {
      "data-slot": "radio-group",
      className: cn("grid gap-3", className),
      ...props
    }
  );
}
function RadioGroupItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
    import_radix_ui22.RadioGroup.Item,
    {
      "data-slot": "radio-group-item",
      className: cn(
        "aspect-square size-4 shrink-0 rounded-full border border-input text-primary shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30 dark:aria-invalid:ring-destructive/40",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
        import_radix_ui22.RadioGroup.Indicator,
        {
          "data-slot": "radio-group-indicator",
          className: "relative flex items-center justify-center",
          children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_lucide_react15.CircleIcon, { className: "absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 fill-primary" })
        }
      )
    }
  );
}

// src/design-system/components/ui/resizable.tsx
var import_lucide_react16 = require("lucide-react");
var ResizablePrimitive = __toESM(require("react-resizable-panels"));
var import_jsx_runtime39 = require("react/jsx-runtime");
function ResizablePanelGroup({
  className,
  direction,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
    ResizablePrimitive.Group,
    {
      "data-slot": "resizable-panel-group",
      orientation: props.orientation || direction,
      className: cn(
        "flex h-full w-full aria-[orientation=vertical]:flex-col",
        className
      ),
      ...props
    }
  );
}
function ResizablePanel({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(ResizablePrimitive.Panel, { "data-slot": "resizable-panel", ...props });
}
function ResizableHandle({
  withHandle,
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
    ResizablePrimitive.Separator,
    {
      "data-slot": "resizable-handle",
      className: cn(
        "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:outline-hidden aria-[orientation=horizontal]:h-px aria-[orientation=horizontal]:w-full aria-[orientation=horizontal]:after:left-0 aria-[orientation=horizontal]:after:h-1 aria-[orientation=horizontal]:after:w-full aria-[orientation=horizontal]:after:translate-x-0 aria-[orientation=horizontal]:after:-translate-y-1/2 [&[aria-orientation=horizontal]>div]:rotate-90",
        className
      ),
      ...props,
      children: withHandle && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "z-10 flex h-4 w-3 items-center justify-center rounded-xs border bg-border", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_lucide_react16.GripVerticalIcon, { className: "size-2.5" }) })
    }
  );
}

// src/design-system/components/ui/scroll-area.tsx
var import_radix_ui23 = require("radix-ui");
var import_jsx_runtime40 = require("react/jsx-runtime");
function ScrollArea({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(
    import_radix_ui23.ScrollArea.Root,
    {
      "data-slot": "scroll-area",
      className: cn("relative", className),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
          import_radix_ui23.ScrollArea.Viewport,
          {
            "data-slot": "scroll-area-viewport",
            className: "size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1",
            children
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(ScrollBar, {}),
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_radix_ui23.ScrollArea.Corner, {})
      ]
    }
  );
}
function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
    import_radix_ui23.ScrollArea.ScrollAreaScrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      orientation,
      className: cn(
        "flex touch-none p-px transition-colors select-none",
        orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent",
        orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
        import_radix_ui23.ScrollArea.ScrollAreaThumb,
        {
          "data-slot": "scroll-area-thumb",
          className: "relative flex-1 rounded-full bg-border"
        }
      )
    }
  );
}

// src/design-system/components/ui/select.tsx
var import_lucide_react17 = require("lucide-react");
var import_radix_ui24 = require("radix-ui");
var import_jsx_runtime41 = require("react/jsx-runtime");
function Select({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_radix_ui24.Select.Root, { "data-slot": "select", ...props });
}
function SelectGroup({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_radix_ui24.Select.Group, { "data-slot": "select-group", ...props });
}
function SelectValue({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_radix_ui24.Select.Value, { "data-slot": "select-value", ...props });
}
function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(
    import_radix_ui24.Select.Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": size,
      className: cn(
        "flex w-fit items-center justify-between gap-2 rounded-md border border-input bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[placeholder]:text-muted-foreground data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_radix_ui24.Select.Icon, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_lucide_react17.ChevronDownIcon, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function SelectContent({
  className,
  children,
  position = "item-aligned",
  align = "center",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_radix_ui24.Select.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(
    import_radix_ui24.Select.Content,
    {
      "data-slot": "select-content",
      className: cn(
        "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position,
      align,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(SelectScrollUpButton, {}),
        /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
          import_radix_ui24.Select.Viewport,
          {
            className: cn(
              "p-1",
              position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(SelectScrollDownButton, {})
      ]
    }
  ) });
}
function SelectLabel({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
    import_radix_ui24.Select.Label,
    {
      "data-slot": "select-label",
      className: cn("px-2 py-1.5 text-xs text-muted-foreground", className),
      ...props
    }
  );
}
function SelectItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(
    import_radix_ui24.Select.Item,
    {
      "data-slot": "select-item",
      className: cn(
        "relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
          "span",
          {
            "data-slot": "select-item-indicator",
            className: "absolute right-2 flex size-3.5 items-center justify-center",
            children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_radix_ui24.Select.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_lucide_react17.CheckIcon, { className: "size-4" }) })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_radix_ui24.Select.ItemText, { children })
      ]
    }
  );
}
function SelectSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
    import_radix_ui24.Select.Separator,
    {
      "data-slot": "select-separator",
      className: cn("pointer-events-none -mx-1 my-1 h-px bg-border", className),
      ...props
    }
  );
}
function SelectScrollUpButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
    import_radix_ui24.Select.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_lucide_react17.ChevronUpIcon, { className: "size-4" })
    }
  );
}
function SelectScrollDownButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
    import_radix_ui24.Select.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_lucide_react17.ChevronDownIcon, { className: "size-4" })
    }
  );
}

// src/design-system/components/ui/separator.tsx
var import_radix_ui25 = require("radix-ui");
var import_jsx_runtime42 = require("react/jsx-runtime");
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
    import_radix_ui25.Separator.Root,
    {
      "data-slot": "separator",
      decorative,
      orientation,
      className: cn(
        "shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      ),
      ...props
    }
  );
}

// src/design-system/components/ui/sheet.tsx
var import_lucide_react18 = require("lucide-react");
var import_radix_ui26 = require("radix-ui");
var import_jsx_runtime43 = require("react/jsx-runtime");
function Sheet({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_radix_ui26.Dialog.Root, { "data-slot": "sheet", ...props });
}
function SheetTrigger({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_radix_ui26.Dialog.Trigger, { "data-slot": "sheet-trigger", ...props });
}
function SheetClose({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_radix_ui26.Dialog.Close, { "data-slot": "sheet-close", ...props });
}
function SheetPortal({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_radix_ui26.Dialog.Portal, { "data-slot": "sheet-portal", ...props });
}
function SheetOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
    import_radix_ui26.Dialog.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: cn(
        "fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
        className
      ),
      ...props
    }
  );
}
function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(SheetPortal, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(SheetOverlay, {}),
    /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(
      import_radix_ui26.Dialog.Content,
      {
        "data-slot": "sheet-content",
        className: cn(
          "fixed z-50 flex flex-col gap-4 bg-background shadow-lg transition ease-in-out data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:animate-in data-[state=open]:duration-500",
          side === "right" && "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
          side === "left" && "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
          side === "top" && "inset-x-0 top-0 h-auto border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
          side === "bottom" && "inset-x-0 bottom-0 h-auto border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(import_radix_ui26.Dialog.Close, { className: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
            /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_lucide_react18.XIcon, { className: "size-4" }),
            /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function SheetHeader({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
    "div",
    {
      "data-slot": "sheet-header",
      className: cn("flex flex-col gap-1.5 p-4", className),
      ...props
    }
  );
}
function SheetFooter({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
    "div",
    {
      "data-slot": "sheet-footer",
      className: cn("mt-auto flex flex-col gap-2 p-4", className),
      ...props
    }
  );
}
function SheetTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
    import_radix_ui26.Dialog.Title,
    {
      "data-slot": "sheet-title",
      className: cn("font-semibold text-foreground", className),
      ...props
    }
  );
}
function SheetDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
    import_radix_ui26.Dialog.Description,
    {
      "data-slot": "sheet-description",
      className: cn("text-sm text-muted-foreground", className),
      ...props
    }
  );
}

// src/design-system/components/ui/sidebar.tsx
var React7 = __toESM(require("react"));
var import_class_variance_authority10 = require("class-variance-authority");
var import_lucide_react19 = require("lucide-react");
var import_radix_ui27 = require("radix-ui");

// src/hooks/use-mobile.tsx
var React6 = __toESM(require("react"));
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = React6.useState(void 0);
  React6.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return !!isMobile;
}

// src/design-system/components/ui/sidebar.tsx
var import_jsx_runtime44 = require("react/jsx-runtime");
var SIDEBAR_COOKIE_NAME = "sidebar_state";
var SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
var SIDEBAR_WIDTH = "13rem";
var SIDEBAR_WIDTH_MOBILE = "15rem";
var SIDEBAR_WIDTH_ICON = "3rem";
var SIDEBAR_KEYBOARD_SHORTCUT = "b";
var SidebarContext = React7.createContext(null);
function useSidebar() {
  const context = React7.useContext(SidebarContext);
  if (!context) {
    return {
      state: "expanded",
      open: true,
      setOpen: () => {
      },
      openMobile: false,
      setOpenMobile: () => {
      },
      isMobile: false,
      toggleSidebar: () => {
      }
    };
  }
  return context;
}
function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}) {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React7.useState(false);
  const [_open, _setOpen] = React7.useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = React7.useCallback(
    (value) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [setOpenProp, open]
  );
  const toggleSidebar = React7.useCallback(() => {
    return isMobile ? setOpenMobile((open2) => !open2) : setOpen((open2) => !open2);
  }, [isMobile, setOpen, setOpenMobile]);
  React7.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);
  React7.useEffect(() => {
    const handleCustomToggle = (e) => {
      const customEvent = e;
      if (customEvent.detail && typeof customEvent.detail.open === "boolean") {
        if (isMobile) {
          setOpenMobile(customEvent.detail.open);
        } else {
          setOpen(customEvent.detail.open);
        }
      } else {
        toggleSidebar();
      }
    };
    window.addEventListener("amoga:toggle-sidebar", handleCustomToggle);
    return () => window.removeEventListener("amoga:toggle-sidebar", handleCustomToggle);
  }, [isMobile, setOpenMobile, setOpen, toggleSidebar]);
  const state = open ? "expanded" : "collapsed";
  const contextValue = React7.useMemo(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(SidebarContext.Provider, { value: contextValue, children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(TooltipProvider, { delayDuration: 0, children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": SIDEBAR_WIDTH,
        "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
        ...style
      },
      className: cn(
        "group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar",
        className
      ),
      ...props,
      children
    }
  ) }) });
}
function Sidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
  if (collapsible === "none") {
    return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
      "div",
      {
        "data-slot": "sidebar",
        className: cn(
          "flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground",
          className
        ),
        ...props,
        children
      }
    );
  }
  if (isMobile) {
    return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(Sheet, { open: openMobile, onOpenChange: setOpenMobile, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(
      SheetContent,
      {
        "data-sidebar": "sidebar",
        "data-slot": "sidebar",
        "data-mobile": "true",
        className: "w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
        style: {
          "--sidebar-width": SIDEBAR_WIDTH_MOBILE
        },
        side,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(SheetHeader, { className: "sr-only", children: [
            /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(SheetTitle, { children: "Sidebar" }),
            /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(SheetDescription, { children: "Displays the mobile sidebar." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "flex h-full w-full flex-col", children })
        ]
      }
    ) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(
    "div",
    {
      className: "group peer hidden text-sidebar-foreground md:block",
      "data-state": state,
      "data-collapsible": state === "collapsed" ? collapsible : "",
      "data-variant": variant,
      "data-side": side,
      "data-slot": "sidebar",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
          "div",
          {
            "data-slot": "sidebar-gap",
            className: cn(
              "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
              "group-data-[collapsible=offcanvas]:w-0",
              "group-data-[side=right]:rotate-180",
              variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
            )
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
          "div",
          {
            "data-slot": "sidebar-container",
            className: cn(
              "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
              side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
              // Adjust the padding for floating and inset variants.
              variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
              className
            ),
            ...props,
            children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
              "div",
              {
                "data-sidebar": "sidebar",
                "data-slot": "sidebar-inner",
                className: "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow-sm",
                children
              }
            )
          }
        )
      ]
    }
  );
}
function SidebarTrigger({
  className,
  onClick,
  ...props
}) {
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(
    Button,
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: cn("size-7", className),
      onClick: (event) => {
        onClick?.(event);
        toggleSidebar();
      },
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_lucide_react19.PanelLeftIcon, {}),
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function SidebarRail({ className, ...props }) {
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
    "button",
    {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabIndex: -1,
      onClick: toggleSidebar,
      title: "Toggle Sidebar",
      className: cn(
        "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border sm:flex",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full hover:group-data-[collapsible=offcanvas]:bg-sidebar",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className
      ),
      ...props
    }
  );
}
function SidebarInset({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
    "main",
    {
      "data-slot": "sidebar-inset",
      className: cn(
        "relative flex w-full flex-1 flex-col bg-background",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        className
      ),
      ...props
    }
  );
}
function SidebarInput({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
    Input,
    {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      className: cn("h-8 w-full bg-background shadow-none", className),
      ...props
    }
  );
}
function SidebarHeader({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
    "div",
    {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      className: cn("flex flex-col gap-2 p-2", className),
      ...props
    }
  );
}
function SidebarFooter({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
    "div",
    {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      className: cn("flex flex-col gap-2 p-2", className),
      ...props
    }
  );
}
function SidebarSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
    Separator,
    {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      className: cn("mx-2 w-auto bg-sidebar-border", className),
      ...props
    }
  );
}
function SidebarContent({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
    "div",
    {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      className: cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      ),
      ...props
    }
  );
}
function SidebarGroup({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
    "div",
    {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      className: cn("relative flex w-full min-w-0 flex-col p-2", className),
      ...props
    }
  );
}
function SidebarGroupLabel({
  className,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? import_radix_ui27.Slot.Root : "div";
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
    Comp,
    {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      className: cn(
        "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 ring-sidebar-ring outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      ),
      ...props
    }
  );
}
function SidebarGroupAction({
  className,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? import_radix_ui27.Slot.Root : "button";
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
    Comp,
    {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      className: cn(
        "absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  );
}
function SidebarGroupContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
    "div",
    {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      className: cn("w-full text-sm", className),
      ...props
    }
  );
}
function SidebarMenu({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
    "ul",
    {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      className: cn("flex w-full min-w-0 flex-col gap-1", className),
      ...props
    }
  );
}
function SidebarMenuItem({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
    "li",
    {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: cn("group/menu-item relative", className),
      ...props
    }
  );
}
var sidebarMenuButtonVariants = (0, import_class_variance_authority10.cva)(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm ring-sidebar-ring outline-hidden transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_var(--sidebar-border)] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_var(--sidebar-accent)]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}) {
  const Comp = asChild ? import_radix_ui27.Slot.Root : "button";
  const { isMobile, state } = useSidebar();
  const button = /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
    Comp,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": size,
      "data-active": isActive,
      className: cn(sidebarMenuButtonVariants({ variant, size }), className),
      ...props
    }
  );
  if (!tooltip) {
    return button;
  }
  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip
    };
  }
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(Tooltip2, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(TooltipTrigger, { asChild: true, children: button }),
    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
      TooltipContent,
      {
        side: "right",
        align: "center",
        hidden: state !== "collapsed" || isMobile,
        ...tooltip
      }
    )
  ] });
}
function SidebarMenuAction({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}) {
  const Comp = asChild ? import_radix_ui27.Slot.Root : "button";
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
    Comp,
    {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      className: cn(
        "absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform peer-hover/menu-button:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground data-[state=open]:opacity-100 md:opacity-0",
        className
      ),
      ...props
    }
  );
}
function SidebarMenuBadge({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
    "div",
    {
      "data-slot": "sidebar-menu-badge",
      "data-sidebar": "menu-badge",
      className: cn(
        "pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium text-sidebar-foreground tabular-nums select-none",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  );
}
function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}) {
  const width = React7.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(
    "div",
    {
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      className: cn("flex h-8 items-center gap-2 rounded-md px-2", className),
      ...props,
      children: [
        showIcon && /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
          Skeleton,
          {
            className: "size-4 rounded-md",
            "data-sidebar": "menu-skeleton-icon"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
          Skeleton,
          {
            className: "h-4 max-w-(--skeleton-width) flex-1",
            "data-sidebar": "menu-skeleton-text",
            style: {
              "--skeleton-width": width
            }
          }
        )
      ]
    }
  );
}
function SidebarMenuSub({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
    "ul",
    {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-sub",
      className: cn(
        "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  );
}
function SidebarMenuSubItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
    "li",
    {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      className: cn("group/menu-sub-item relative", className),
      ...props
    }
  );
}
function SidebarMenuSubButton({
  asChild = false,
  size = "md",
  isActive = false,
  className,
  ...props
}) {
  const Comp = asChild ? import_radix_ui27.Slot.Root : "a";
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
    Comp,
    {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      "data-size": size,
      "data-active": isActive,
      className: cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground ring-sidebar-ring outline-hidden hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  );
}

// src/design-system/components/ui/skeleton.tsx
var import_jsx_runtime45 = require("react/jsx-runtime");
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
    "div",
    {
      "data-slot": "skeleton",
      className: cn("animate-pulse rounded-md bg-accent", className),
      ...props
    }
  );
}

// src/design-system/components/ui/slider.tsx
var React8 = __toESM(require("react"));
var import_radix_ui28 = require("radix-ui");
var import_jsx_runtime46 = require("react/jsx-runtime");
function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}) {
  const _values = React8.useMemo(
    () => Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max],
    [value, defaultValue, min, max]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(
    import_radix_ui28.Slider.Root,
    {
      "data-slot": "slider",
      defaultValue,
      value,
      min,
      max,
      className: cn(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
          import_radix_ui28.Slider.Track,
          {
            "data-slot": "slider-track",
            className: cn(
              "relative grow overflow-hidden rounded-full bg-muted data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
            ),
            children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
              import_radix_ui28.Slider.Range,
              {
                "data-slot": "slider-range",
                className: cn(
                  "absolute bg-primary data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
                )
              }
            )
          }
        ),
        Array.from({ length: _values.length }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
          import_radix_ui28.Slider.Thumb,
          {
            "data-slot": "slider-thumb",
            className: "block size-4 shrink-0 rounded-full border border-primary bg-white shadow-sm ring-ring/50 transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
          },
          index
        ))
      ]
    }
  );
}

// src/design-system/components/ui/sonner.tsx
var import_lucide_react20 = require("lucide-react");
var import_next_themes = require("next-themes");
var import_sonner = require("sonner");
var import_jsx_runtime47 = require("react/jsx-runtime");
var Toaster = ({ ...props }) => {
  const { theme = "system" } = (0, import_next_themes.useTheme)();
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
    import_sonner.Toaster,
    {
      theme,
      className: "toaster group",
      closeButton: true,
      toastOptions: {
        classNames: {
          closeButton: "!left-auto !right-2.5 !top-2.5 !transform-none !bg-transparent !border-none !shadow-none text-muted-foreground hover:text-foreground transition-colors cursor-pointer p-0.5 rounded-xs hover:bg-muted/50"
        }
      },
      icons: {
        success: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_lucide_react20.CircleCheckIcon, { className: "size-4" }),
        info: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_lucide_react20.InfoIcon, { className: "size-4" }),
        warning: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_lucide_react20.TriangleAlertIcon, { className: "size-4" }),
        error: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_lucide_react20.OctagonXIcon, { className: "size-4" }),
        loading: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_lucide_react20.Loader2Icon, { className: "size-4 animate-spin" })
      },
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)",
        "--border-radius": "var(--radius)"
      },
      ...props
    }
  );
};

// src/design-system/components/ui/spinner.tsx
var import_lucide_react21 = require("lucide-react");
var import_jsx_runtime48 = require("react/jsx-runtime");
function Spinner({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
    import_lucide_react21.Loader2Icon,
    {
      role: "status",
      "aria-label": "Loading",
      className: cn("size-4 animate-spin", className),
      ...props
    }
  );
}

// src/design-system/components/ui/switch.tsx
var import_radix_ui29 = require("radix-ui");
var import_jsx_runtime49 = require("react/jsx-runtime");
function Switch({
  className,
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
    import_radix_ui29.Switch.Root,
    {
      "data-slot": "switch",
      "data-size": size,
      className: cn(
        "peer group/switch inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-[1.15rem] data-[size=default]:w-8 data-[size=sm]:h-3.5 data-[size=sm]:w-6 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input dark:data-[state=unchecked]:bg-input/80",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
        import_radix_ui29.Switch.Thumb,
        {
          "data-slot": "switch-thumb",
          className: cn(
            "pointer-events-none block rounded-full bg-background ring-0 transition-transform group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0 dark:data-[state=checked]:bg-primary-foreground dark:data-[state=unchecked]:bg-foreground"
          )
        }
      )
    }
  );
}

// src/design-system/components/ui/table.tsx
var import_jsx_runtime50 = require("react/jsx-runtime");
function Table({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
    "div",
    {
      "data-slot": "table-container",
      className: "relative w-full overflow-x-auto",
      children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
        "table",
        {
          "data-slot": "table",
          className: cn("w-full caption-bottom text-sm", className),
          ...props
        }
      )
    }
  );
}
function TableHeader({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
    "thead",
    {
      "data-slot": "table-header",
      className: cn("[&_tr]:border-b", className),
      ...props
    }
  );
}
function TableBody({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
    "tbody",
    {
      "data-slot": "table-body",
      className: cn("[&_tr:last-child]:border-0", className),
      ...props
    }
  );
}
function TableFooter({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
    "tfoot",
    {
      "data-slot": "table-footer",
      className: cn(
        "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
        className
      ),
      ...props
    }
  );
}
function TableRow({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
    "tr",
    {
      "data-slot": "table-row",
      className: cn(
        "border-b transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted",
        className
      ),
      ...props
    }
  );
}
function TableHead({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
    "th",
    {
      "data-slot": "table-head",
      className: cn(
        "h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    }
  );
}
function TableCell({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
    "td",
    {
      "data-slot": "table-cell",
      className: cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    }
  );
}
function TableCaption({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
    "caption",
    {
      "data-slot": "table-caption",
      className: cn("mt-4 text-sm text-muted-foreground", className),
      ...props
    }
  );
}

// src/design-system/components/ui/tabs.tsx
var import_class_variance_authority11 = require("class-variance-authority");
var import_radix_ui30 = require("radix-ui");
var import_jsx_runtime51 = require("react/jsx-runtime");
function Tabs({
  className,
  orientation = "horizontal",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
    import_radix_ui30.Tabs.Root,
    {
      "data-slot": "tabs",
      "data-orientation": orientation,
      orientation,
      className: cn(
        "group/tabs flex gap-2 data-[orientation=horizontal]:flex-col",
        className
      ),
      ...props
    }
  );
}
var tabsListVariants = (0, import_class_variance_authority11.cva)(
  "group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-[orientation=horizontal]/tabs:h-9 group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col data-[variant=line]:rounded-none",
  {
    variants: {
      variant: {
        default: "bg-muted",
        line: "gap-1 bg-transparent"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function TabsList({
  className,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
    import_radix_ui30.Tabs.List,
    {
      "data-slot": "tabs-list",
      "data-variant": variant,
      className: cn(tabsListVariants({ variant }), className),
      ...props
    }
  );
}
function TabsTrigger({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
    import_radix_ui30.Tabs.Trigger,
    {
      "data-slot": "tabs-trigger",
      className: cn(
        "relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-[state=active]:shadow-sm group-data-[variant=line]/tabs-list:data-[state=active]:shadow-none dark:text-muted-foreground dark:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:border-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent",
        "data-[state=active]:bg-background data-[state=active]:text-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 dark:data-[state=active]:text-foreground",
        "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100",
        className
      ),
      ...props
    }
  );
}
function TabsContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
    import_radix_ui30.Tabs.Content,
    {
      "data-slot": "tabs-content",
      className: cn("flex-1 outline-none", className),
      ...props
    }
  );
}

// src/design-system/components/ui/textarea.tsx
var import_jsx_runtime52 = require("react/jsx-runtime");
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "flex field-sizing-content min-h-16 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:ring-destructive/40",
        className
      ),
      ...props
    }
  );
}

// src/design-system/components/ui/toggle.tsx
var import_class_variance_authority12 = require("class-variance-authority");
var import_radix_ui31 = require("radix-ui");
var import_jsx_runtime53 = require("react/jsx-runtime");
var toggleVariants = (0, import_class_variance_authority12.cva)(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none hover:bg-muted hover:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-9 min-w-9 px-2",
        sm: "h-8 min-w-8 px-1.5",
        lg: "h-10 min-w-10 px-2.5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Toggle({
  className,
  variant,
  size,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
    import_radix_ui31.Toggle.Root,
    {
      "data-slot": "toggle",
      className: cn(toggleVariants({ variant, size, className })),
      ...props
    }
  );
}

// src/design-system/components/ui/toggle-group.tsx
var React9 = __toESM(require("react"));
var import_radix_ui32 = require("radix-ui");
var import_jsx_runtime54 = require("react/jsx-runtime");
var ToggleGroupContext = React9.createContext({
  size: "default",
  variant: "default",
  spacing: 0
});
function ToggleGroup({
  className,
  variant,
  size,
  spacing = 0,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(
    import_radix_ui32.ToggleGroup.Root,
    {
      "data-slot": "toggle-group",
      "data-variant": variant,
      "data-size": size,
      "data-spacing": spacing,
      style: { "--gap": spacing },
      className: cn(
        "group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md data-[spacing=default]:data-[variant=outline]:shadow-xs",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(ToggleGroupContext.Provider, { value: { variant, size, spacing }, children })
    }
  );
}
function ToggleGroupItem({
  className,
  children,
  variant,
  size,
  ...props
}) {
  const context = React9.useContext(ToggleGroupContext);
  return /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(
    import_radix_ui32.ToggleGroup.Item,
    {
      "data-slot": "toggle-group-item",
      "data-variant": context.variant || variant,
      "data-size": context.size || size,
      "data-spacing": context.spacing,
      className: cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size
        }),
        "w-auto min-w-0 shrink-0 px-3 focus:z-10 focus-visible:z-10",
        "data-[spacing=0]:rounded-none data-[spacing=0]:shadow-none data-[spacing=0]:first:rounded-l-md data-[spacing=0]:last:rounded-r-md data-[spacing=0]:data-[variant=outline]:border-l-0 data-[spacing=0]:data-[variant=outline]:first:border-l",
        className
      ),
      ...props,
      children
    }
  );
}

// src/design-system/components/ui/tooltip.tsx
var import_radix_ui33 = require("radix-ui");
var import_jsx_runtime55 = require("react/jsx-runtime");
function TooltipProvider({
  delayDuration = 0,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
    import_radix_ui33.Tooltip.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration,
      ...props
    }
  );
}
function Tooltip2({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(import_radix_ui33.Tooltip.Root, { "data-slot": "tooltip", ...props });
}
function TooltipTrigger({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(import_radix_ui33.Tooltip.Trigger, { "data-slot": "tooltip-trigger", ...props });
}
function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(import_radix_ui33.Tooltip.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)(
    import_radix_ui33.Tooltip.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset,
      className: cn(
        "z-50 w-fit origin-(--radix-tooltip-content-transform-origin) animate-in rounded-md bg-foreground px-3 py-1.5 text-xs text-balance text-background fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(import_radix_ui33.Tooltip.Arrow, { className: "z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground" })
      ]
    }
  ) });
}

// src/design-system/components/business/page-header.tsx
var import_jsx_runtime56 = require("react/jsx-runtime");
function PageHeader({
  title,
  description,
  badge,
  breadcrumbs,
  actions,
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)(
    "div",
    {
      className: cn(
        "flex flex-col gap-4 pb-4 md:pb-6",
        className
      ),
      ...props,
      children: [
        breadcrumbs && /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "text-sm text-muted-foreground", children: breadcrumbs }),
        /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "flex flex-col gap-4 md:flex-row md:items-center md:justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "flex items-center gap-2.5", children: [
              /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("h1", { className: "text-2xl font-bold tracking-tight text-foreground sm:text-3xl", children: title }),
              badge && /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { children: badge })
            ] }),
            description && /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("p", { className: "text-sm text-muted-foreground sm:text-base", children: description })
          ] }),
          actions && /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "flex flex-wrap items-center gap-2 md:self-center", children: actions })
        ] }),
        children
      ]
    }
  );
}

// src/design-system/components/business/data-table.tsx
var import_lucide_react22 = require("lucide-react");
var import_jsx_runtime57 = require("react/jsx-runtime");
function DataTable({
  columns,
  data: data2,
  isLoading = false,
  loadingRowCount = 5,
  emptyTitle = "No data found",
  emptyDescription = "There are no records matching your criteria.",
  emptyIcon,
  onRowClick,
  keyExtractor,
  pagination,
  className
}) {
  const totalPages = pagination ? Math.max(1, Math.ceil(pagination.totalCount / pagination.pageSize)) : 1;
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: cn("space-y-4", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "rounded-md border bg-card", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)(Table, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(TableRow, { children: columns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(TableHead, { className: col.headerClassName, children: col.header }, col.key)) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(TableBody, { children: isLoading ? Array.from({ length: loadingRowCount }).map((_, rIdx) => /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(TableRow, { children: columns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(TableCell, { className: col.className, children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(Skeleton, { className: "h-5 w-full max-w-[160px]" }) }, `loading-${rIdx}-${col.key}`)) }, `loading-${rIdx}`)) : data2.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(TableCell, { colSpan: columns.length, className: "h-48 text-center", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(Empty, { className: "py-6", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)(EmptyHeader, { children: [
        emptyIcon && /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(EmptyMedia, { children: emptyIcon }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(EmptyTitle, { children: emptyTitle }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(EmptyDescription, { children: emptyDescription })
      ] }) }) }) }) : data2.map((row, rIdx) => {
        const key = keyExtractor ? keyExtractor(row, rIdx) : rIdx;
        return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
          TableRow,
          {
            onClick: onRowClick ? () => onRowClick(row) : void 0,
            className: cn(
              onRowClick && "cursor-pointer hover:bg-muted/50 transition-colors"
            ),
            children: columns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(TableCell, { className: col.className, children: col.cell ? col.cell(row, rIdx) : row[col.key] ?? "\u2014" }, `${key}-${col.key}`))
          },
          key
        );
      }) })
    ] }) }),
    pagination && /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "flex items-center justify-between px-2 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { children: [
        "Showing",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("span", { className: "font-medium text-foreground", children: data2.length > 0 ? pagination.pageIndex * pagination.pageSize + 1 : 0 }),
        " ",
        "to",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("span", { className: "font-medium text-foreground", children: Math.min(
          (pagination.pageIndex + 1) * pagination.pageSize,
          pagination.totalCount
        ) }),
        " ",
        "of",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("span", { className: "font-medium text-foreground", children: pagination.totalCount }),
        " ",
        "results"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)(
          Button,
          {
            variant: "outline",
            size: "sm",
            disabled: pagination.pageIndex <= 0 || isLoading,
            onClick: () => pagination.onPageChange(pagination.pageIndex - 1),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(import_lucide_react22.ChevronLeft, { className: "mr-1 h-4 w-4" }),
              "Previous"
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("span", { className: "text-xs", children: [
          "Page ",
          pagination.pageIndex + 1,
          " of ",
          totalPages
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)(
          Button,
          {
            variant: "outline",
            size: "sm",
            disabled: pagination.pageIndex + 1 >= totalPages || isLoading,
            onClick: () => pagination.onPageChange(pagination.pageIndex + 1),
            children: [
              "Next",
              /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(import_lucide_react22.ChevronRight, { className: "ml-1 h-4 w-4" })
            ]
          }
        )
      ] })
    ] })
  ] });
}

// src/design-system/components/business/status-badge.tsx
var import_class_variance_authority13 = require("class-variance-authority");
var import_jsx_runtime58 = require("react/jsx-runtime");
var statusBadgeVariants = (0, import_class_variance_authority13.cva)(
  "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      status: {
        default: "bg-primary/10 text-primary border border-primary/20",
        secondary: "bg-secondary text-secondary-foreground border border-border",
        success: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30",
        warning: "bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30",
        info: "bg-sky-500/15 text-sky-700 dark:text-sky-400 border border-sky-500/30",
        destructive: "bg-destructive/15 text-destructive border border-destructive/30",
        outline: "text-foreground border border-border bg-transparent"
      },
      size: {
        sm: "px-2 py-0.25 text-[11px]",
        default: "px-2.5 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm"
      }
    },
    defaultVariants: {
      status: "default",
      size: "default"
    }
  }
);
var dotColorMap = {
  default: "bg-primary",
  secondary: "bg-secondary-foreground",
  success: "bg-emerald-500",
  warning: "bg-amber-500",
  info: "bg-sky-500",
  destructive: "bg-destructive",
  outline: "bg-foreground"
};
function StatusBadge({
  status = "default",
  size = "default",
  dot = false,
  pulse = false,
  icon,
  className,
  children,
  ...props
}) {
  const activeStatus = status || "default";
  return /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(
    "div",
    {
      className: cn(statusBadgeVariants({ status, size }), className),
      ...props,
      children: [
        dot && /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("span", { className: "relative flex h-2 w-2", children: [
          pulse && /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
            "span",
            {
              className: cn(
                "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
                dotColorMap[activeStatus] || "bg-primary"
              )
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
            "span",
            {
              className: cn(
                "relative inline-flex h-2 w-2 rounded-full",
                dotColorMap[activeStatus] || "bg-primary"
              )
            }
          )
        ] }),
        icon && /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "shrink-0", children: icon }),
        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { children })
      ]
    }
  );
}

// src/design-system/components/business/filter-bar.tsx
var import_lucide_react23 = require("lucide-react");
var import_jsx_runtime59 = require("react/jsx-runtime");
function FilterBar({
  searchPlaceholder = "Search...",
  searchValue,
  onSearchChange,
  filters,
  activeFilters = [],
  onClearAll,
  actions,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: cn("flex flex-col gap-3", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "flex flex-1 flex-wrap items-center gap-2", children: [
        onSearchChange && /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "relative w-full sm:w-64 md:w-80", children: [
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(import_lucide_react23.Search, { className: "absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" }),
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
            Input,
            {
              placeholder: searchPlaceholder,
              value: searchValue ?? "",
              onChange: (e) => onSearchChange(e.target.value),
              className: "pl-8"
            }
          )
        ] }),
        filters
      ] }),
      actions && /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { className: "flex items-center gap-2 shrink-0", children: actions })
    ] }),
    activeFilters.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "flex flex-wrap items-center gap-2 pt-1", children: [
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { className: "text-xs font-medium text-muted-foreground", children: "Active filters:" }),
      activeFilters.map((filter) => /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)(
        Badge,
        {
          variant: "secondary",
          className: "gap-1 pr-1 text-xs",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("span", { children: [
              filter.label,
              ":"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { className: "font-normal text-foreground", children: filter.value }),
            /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
              "button",
              {
                type: "button",
                onClick: filter.onRemove,
                className: "rounded-full p-0.5 hover:bg-muted-foreground/20",
                "aria-label": `Remove filter ${filter.label}`,
                children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(import_lucide_react23.X, { className: "h-3 w-3" })
              }
            )
          ]
        },
        filter.key
      )),
      onClearAll && /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
        Button,
        {
          variant: "ghost",
          size: "sm",
          onClick: onClearAll,
          className: "h-6 px-2 text-xs text-muted-foreground hover:text-foreground",
          children: "Clear all"
        }
      )
    ] })
  ] });
}

// src/design-system/components/business/form-section.tsx
var import_jsx_runtime60 = require("react/jsx-runtime");
function FormSection({
  title,
  description,
  actions,
  separator = true,
  columns = 1,
  className,
  children,
  ...props
}) {
  const gridColsClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
  }[columns];
  return /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: cn("space-y-4 py-2", className), ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("h2", { className: "text-base font-semibold text-foreground sm:text-lg", children: title }),
        description && /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("p", { className: "text-xs text-muted-foreground sm:text-sm", children: description })
      ] }),
      actions && /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("div", { className: "flex items-center gap-2 pt-2 sm:pt-0", children: actions })
    ] }),
    separator && /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(Separator, {}),
    /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("div", { className: cn("grid gap-4 sm:gap-6", gridColsClass), children })
  ] });
}

// src/design-system/components/business/metric-card.tsx
var import_lucide_react24 = require("lucide-react");
var import_jsx_runtime61 = require("react/jsx-runtime");
function MetricCard({
  title,
  value,
  description,
  icon: Icon,
  change,
  footer,
  className,
  ...props
}) {
  const trendColor = change?.trend === "up" ? "text-emerald-600 dark:text-emerald-400" : change?.trend === "down" ? "text-rose-600 dark:text-rose-400" : "text-muted-foreground";
  return /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(Card, { className: cn("overflow-hidden shadow-xs transition-shadow hover:shadow-md", className), ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(CardTitle, { className: "text-sm font-medium text-muted-foreground", children: title }),
      Icon && /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "rounded-md bg-muted p-2 text-muted-foreground", children: typeof Icon === "function" ? /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(Icon, { className: "h-4 w-4" }) : Icon })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(CardContent, { className: "space-y-1.5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "text-2xl font-bold tracking-tight text-foreground", children: value }),
      (change || description) && /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground", children: [
        change && /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("span", { className: cn("inline-flex items-center font-medium", trendColor), children: [
          change.trend === "up" && /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_lucide_react24.ArrowUpRight, { className: "mr-0.5 h-3.5 w-3.5" }),
          change.trend === "down" && /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_lucide_react24.ArrowDownRight, { className: "mr-0.5 h-3.5 w-3.5" }),
          change.trend === "neutral" && /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_lucide_react24.Minus, { className: "mr-0.5 h-3.5 w-3.5" }),
          change.value
        ] }),
        change?.label && /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("span", { children: change.label }),
        !change && description && /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("span", { children: description })
      ] }),
      footer && /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "pt-2", children: footer })
    ] })
  ] });
}

// src/design-system/components/business/confirm-dialog.tsx
var import_jsx_runtime62 = require("react/jsx-runtime");
function ConfirmDialog(props) {
  const {
    title,
    desc,
    children,
    className,
    confirmText,
    cancelBtnText,
    destructive,
    isLoading,
    disabled = false,
    form,
    handleConfirm,
    ...actions
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(AlertDialog, { ...actions, children: /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)(AlertDialogContent, { className: cn(className && className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)(AlertDialogHeader, { className: "text-start", children: [
      /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(AlertDialogTitle, { children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(AlertDialogDescription, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("div", { children: desc }) })
    ] }),
    children,
    /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)(AlertDialogFooter, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(AlertDialogCancel, { disabled: isLoading, children: cancelBtnText ?? "Cancel" }),
      /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
        Button,
        {
          type: form ? "submit" : "button",
          form,
          onClick: handleConfirm,
          variant: destructive ? "destructive" : "default",
          disabled: disabled || isLoading,
          children: confirmText ?? "Continue"
        }
      )
    ] })
  ] }) });
}

// src/design-system/components/business/password-input.tsx
var React10 = __toESM(require("react"));
var import_lucide_react25 = require("lucide-react");
var import_jsx_runtime63 = require("react/jsx-runtime");
function PasswordInput({
  className,
  disabled,
  ref,
  ...props
}) {
  const [showPassword, setShowPassword] = React10.useState(false);
  return /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)("div", { className: cn("relative rounded-md", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(
      "input",
      {
        type: showPassword ? "text" : "password",
        className: "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
        ref,
        disabled,
        ...props
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)(
      Button,
      {
        type: "button",
        size: "icon",
        variant: "ghost",
        disabled,
        className: "absolute inset-e-1 top-1/2 h-6 w-6 -translate-y-1/2 rounded-md text-muted-foreground",
        onClick: () => setShowPassword((prev) => !prev),
        children: [
          showPassword ? /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(import_lucide_react25.Eye, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(import_lucide_react25.EyeOff, { size: 18 }),
          /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("span", { className: "sr-only", children: showPassword ? "Hide password" : "Show password" })
        ]
      }
    )
  ] });
}

// src/lib/client.ts
var import_ssr = require("@supabase/ssr");
var clientSingleton = null;
function createClient() {
  if (typeof window === "undefined") {
    return (0, import_ssr.createBrowserClient)(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
    );
  }
  if (!clientSingleton) {
    clientSingleton = (0, import_ssr.createBrowserClient)(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
    );
  }
  return clientSingleton;
}

// src/stores/auth-store.ts
var import_zustand = require("zustand");

// src/lib/cookies.ts
var DEFAULT_MAX_AGE = 60 * 60 * 24 * 7;
function getCookie(name) {
  if (typeof document === "undefined") return void 0;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    const cookieValue = parts.pop()?.split(";").shift();
    return cookieValue;
  }
  return void 0;
}
function setCookie(name, value, maxAge = DEFAULT_MAX_AGE) {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=${value}; path=/; max-age=${maxAge}`;
}
function removeCookie(name) {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=; path=/; max-age=0`;
}

// src/stores/auth-store.ts
var ACCESS_TOKEN = "thisisjustarandomstring";
var USER_DATA = "auth_user_data";
var useAuthStore = (0, import_zustand.create)()((set) => {
  const cookieState = getCookie(ACCESS_TOKEN);
  let initToken = "";
  if (cookieState) {
    try {
      initToken = cookieState.startsWith('"') ? JSON.parse(cookieState) : cookieState;
    } catch {
      initToken = cookieState;
    }
  }
  const userCookie = getCookie(USER_DATA);
  let initUser = null;
  if (userCookie) {
    try {
      let raw = userCookie;
      if (raw.includes("%")) {
        try {
          raw = decodeURIComponent(raw);
        } catch {
        }
      }
      if (raw.includes("%")) {
        try {
          raw = decodeURIComponent(raw);
        } catch {
        }
      }
      const parsed = JSON.parse(raw);
      if (parsed && parsed.exp && parsed.exp > Date.now()) {
        initUser = parsed;
      } else if (parsed && !parsed.exp) {
        initUser = parsed;
      } else {
        removeCookie(ACCESS_TOKEN);
        removeCookie(USER_DATA);
      }
    } catch (err) {
      console.warn("Could not parse userCookie in useAuthStore:", err);
      initUser = null;
    }
  }
  return {
    auth: {
      user: initUser,
      setUser: (user) => set((state) => {
        if (user) {
          setCookie(USER_DATA, encodeURIComponent(JSON.stringify(user)));
        } else {
          removeCookie(USER_DATA);
        }
        return { ...state, auth: { ...state.auth, user } };
      }),
      accessToken: initUser ? initToken : "",
      setAccessToken: (accessToken) => set((state) => {
        setCookie(ACCESS_TOKEN, JSON.stringify(accessToken));
        return { ...state, auth: { ...state.auth, accessToken } };
      }),
      resetAccessToken: () => set((state) => {
        removeCookie(ACCESS_TOKEN);
        return { ...state, auth: { ...state.auth, accessToken: "" } };
      }),
      reset: () => set((state) => {
        removeCookie(ACCESS_TOKEN);
        removeCookie(USER_DATA);
        return {
          ...state,
          auth: { ...state.auth, user: null, accessToken: "" }
        };
      })
    }
  };
});

// src/design-system/components/business/sign-out-dialog.tsx
var import_react3 = require("next-auth/react");
var import_jsx_runtime64 = require("react/jsx-runtime");
function SignOutDialog({ open, onOpenChange }) {
  const handleSignOut = async () => {
    try {
      useAuthStore.getState().auth.reset();
    } catch (err) {
    }
    try {
      await (0, import_react3.signOut)({ redirect: false });
    } catch (err) {
    }
    try {
      const supabase = createClient();
      await supabase.auth.signOut({ scope: "global" }).catch(() => {
      });
    } catch (err) {
    }
    try {
      if (typeof window !== "undefined") {
        const preservedSettings = localStorage.getItem("email-settings-workspace");
        const theme = localStorage.getItem("theme");
        localStorage.clear();
        if (preservedSettings) {
          localStorage.setItem("email-settings-workspace", preservedSettings);
        }
        if (theme) {
          localStorage.setItem("theme", theme);
        }
        sessionStorage.clear();
      }
    } catch (e) {
    }
    window.location.href = "/api/auth/mobile-logout";
  };
  return /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(
    ConfirmDialog,
    {
      open,
      onOpenChange,
      title: "Sign out",
      desc: "Are you sure you want to sign out? You will need to sign in again to access your account.",
      confirmText: "Sign out",
      destructive: true,
      handleConfirm: handleSignOut,
      className: "sm:max-w-sm"
    }
  );
}

// src/design-system/components/business/theme-switch.tsx
var import_react5 = require("react");
var import_lucide_react26 = require("lucide-react");

// src/context/theme-provider.tsx
var import_react4 = require("react");
var import_jsx_runtime65 = require("react/jsx-runtime");
var DEFAULT_THEME = "system";
var THEME_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;
var initialState = {
  defaultTheme: DEFAULT_THEME,
  resolvedTheme: "light",
  theme: DEFAULT_THEME,
  setTheme: () => null,
  resetTheme: () => null
};
var ThemeContext = (0, import_react4.createContext)(initialState);
var useTheme2 = () => {
  const context = (0, import_react4.useContext)(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};

// src/design-system/components/business/theme-switch.tsx
var import_jsx_runtime66 = require("react/jsx-runtime");
function ThemeSwitch() {
  const { theme, resolvedTheme, setTheme } = useTheme2();
  (0, import_react5.useEffect)(() => {
    const themeColor = resolvedTheme === "dark" ? "#020817" : "#fff";
    const metaThemeColor = document.querySelector("meta[name='theme-color']");
    if (metaThemeColor) metaThemeColor.setAttribute("content", themeColor);
  }, [resolvedTheme]);
  return /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)(DropdownMenu, { modal: false, children: [
    /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)(
      Button,
      {
        variant: "ghost",
        size: "icon",
        className: "size-8 shrink-0 scale-95 rounded-full",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(import_lucide_react26.Sun, { className: "size-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" }),
          /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(import_lucide_react26.Moon, { className: "absolute size-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" }),
          /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("span", { className: "sr-only", children: "Toggle theme" })
        ]
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)(DropdownMenuContent, { align: "end", children: [
      /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)(DropdownMenuItem, { onClick: () => setTheme("light"), children: [
        "Light",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(
          import_lucide_react26.Check,
          {
            size: 14,
            className: cn("ms-auto", theme !== "light" && "hidden")
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)(DropdownMenuItem, { onClick: () => setTheme("dark"), children: [
        "Dark",
        /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(
          import_lucide_react26.Check,
          {
            size: 14,
            className: cn("ms-auto", theme !== "dark" && "hidden")
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)(DropdownMenuItem, { onClick: () => setTheme("system"), children: [
        "System",
        /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(
          import_lucide_react26.Check,
          {
            size: 14,
            className: cn("ms-auto", theme !== "system" && "hidden")
          }
        )
      ] })
    ] })
  ] });
}

// src/design-system/components/business/theme-selector.tsx
var import_lucide_react27 = require("lucide-react");

// src/context/color-theme-provider.tsx
var import_react6 = require("react");
var import_jsx_runtime67 = require("react/jsx-runtime");
var COLOR_THEME_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;
function simplePalette(lightPrimary, lightRing, darkPrimary, darkRing, charts) {
  return {
    light: {
      "--primary": lightPrimary,
      "--primary-foreground": "oklch(0.984 0.003 247.858)",
      "--ring": lightRing,
      "--chart-1": charts.light[0],
      "--chart-2": charts.light[1],
      "--chart-3": charts.light[2],
      "--chart-4": charts.light[3],
      "--chart-5": charts.light[4]
    },
    dark: {
      "--primary": darkPrimary,
      "--primary-foreground": "oklch(0.208 0.042 265.755)",
      "--ring": darkRing,
      "--chart-1": charts.dark[0],
      "--chart-2": charts.dark[1],
      "--chart-3": charts.dark[2],
      "--chart-4": charts.dark[3],
      "--chart-5": charts.dark[4]
    }
  };
}
var colorThemes = [
  // ─── Tweakcn & Custom Themes ─────────────────────────────────
  {
    name: "catppuccin",
    label: "Catppuccin",
    category: "tweakcn",
    preview: "#cba6f7",
    colors: ["#cba6f7", "#89b4fa", "#f38ba8", "#a6e3a1", "#1e1e2e"],
    tokens: {
      light: {
        "--background": "oklch(0.96 0.01 260)",
        "--foreground": "oklch(0.35 0.03 260)",
        "--card": "oklch(0.98 0.005 260)",
        "--card-foreground": "oklch(0.35 0.03 260)",
        "--popover": "oklch(0.98 0.005 260)",
        "--popover-foreground": "oklch(0.35 0.03 260)",
        "--primary": "oklch(0.53 0.24 290)",
        "--primary-foreground": "oklch(0.99 0 0)",
        "--secondary": "oklch(0.9 0.02 260)",
        "--secondary-foreground": "oklch(0.35 0.03 260)",
        "--muted": "oklch(0.92 0.015 260)",
        "--muted-foreground": "oklch(0.52 0.03 260)",
        "--accent": "oklch(0.72 0.17 330)",
        "--accent-foreground": "oklch(0.99 0 0)",
        "--border": "oklch(0.85 0.02 260)",
        "--input": "oklch(0.85 0.02 260)",
        "--ring": "oklch(0.53 0.24 290)"
      },
      dark: {
        "--background": "oklch(0.18 0.03 260)",
        "--foreground": "oklch(0.88 0.03 260)",
        "--card": "oklch(0.15 0.03 260)",
        "--card-foreground": "oklch(0.88 0.03 260)",
        "--popover": "oklch(0.15 0.03 260)",
        "--popover-foreground": "oklch(0.88 0.03 260)",
        "--primary": "oklch(0.76 0.16 290)",
        "--primary-foreground": "oklch(0.15 0.03 260)",
        "--secondary": "oklch(0.24 0.03 260)",
        "--secondary-foreground": "oklch(0.88 0.03 260)",
        "--muted": "oklch(0.24 0.03 260)",
        "--muted-foreground": "oklch(0.68 0.03 260)",
        "--accent": "oklch(0.82 0.12 330)",
        "--accent-foreground": "oklch(0.15 0.03 260)",
        "--border": "oklch(0.32 0.03 260)",
        "--input": "oklch(0.32 0.03 260)",
        "--ring": "oklch(0.76 0.16 290)"
      }
    }
  },
  {
    name: "tokyo-night",
    label: "Tokyo Night",
    category: "tweakcn",
    preview: "#7aa2f7",
    colors: ["#7aa2f7", "#bb9af7", "#7dcfff", "#f7768e", "#1a1b26"],
    tokens: {
      light: {
        "--background": "oklch(0.94 0.02 260)",
        "--foreground": "oklch(0.35 0.12 260)",
        "--card": "oklch(0.97 0.015 260)",
        "--card-foreground": "oklch(0.35 0.12 260)",
        "--popover": "oklch(0.97 0.015 260)",
        "--popover-foreground": "oklch(0.35 0.12 260)",
        "--primary": "oklch(0.55 0.18 260)",
        "--primary-foreground": "oklch(0.99 0 0)",
        "--secondary": "oklch(0.88 0.03 260)",
        "--secondary-foreground": "oklch(0.35 0.12 260)",
        "--muted": "oklch(0.9 0.02 260)",
        "--muted-foreground": "oklch(0.5 0.08 260)",
        "--border": "oklch(0.82 0.03 260)",
        "--input": "oklch(0.82 0.03 260)",
        "--ring": "oklch(0.55 0.18 260)"
      },
      dark: {
        "--background": "oklch(0.16 0.03 260)",
        "--foreground": "oklch(0.78 0.06 260)",
        "--card": "oklch(0.14 0.03 260)",
        "--card-foreground": "oklch(0.78 0.06 260)",
        "--popover": "oklch(0.14 0.03 260)",
        "--popover-foreground": "oklch(0.78 0.06 260)",
        "--primary": "oklch(0.72 0.14 260)",
        "--primary-foreground": "oklch(0.14 0.03 260)",
        "--secondary": "oklch(0.22 0.03 260)",
        "--secondary-foreground": "oklch(0.78 0.06 260)",
        "--muted": "oklch(0.22 0.03 260)",
        "--muted-foreground": "oklch(0.52 0.06 260)",
        "--border": "oklch(0.26 0.03 260)",
        "--input": "oklch(0.26 0.03 260)",
        "--ring": "oklch(0.72 0.14 260)"
      }
    }
  },
  {
    name: "dracula",
    label: "Dracula",
    category: "tweakcn",
    preview: "#bd93f9",
    colors: ["#bd93f9", "#ff79c6", "#8be9fd", "#50fa7b", "#282a36"],
    tokens: {
      light: {
        "--background": "oklch(0.97 0.01 280)",
        "--foreground": "oklch(0.22 0.04 280)",
        "--card": "oklch(0.98 0.005 280)",
        "--card-foreground": "oklch(0.22 0.04 280)",
        "--primary": "oklch(0.52 0.12 280)",
        "--primary-foreground": "oklch(0.99 0 0)",
        "--secondary": "oklch(0.9 0.02 280)",
        "--secondary-foreground": "oklch(0.22 0.04 280)",
        "--muted": "oklch(0.92 0.01 280)",
        "--muted-foreground": "oklch(0.5 0.04 280)",
        "--border": "oklch(0.85 0.02 280)",
        "--input": "oklch(0.85 0.02 280)",
        "--ring": "oklch(0.52 0.12 280)"
      },
      dark: {
        "--background": "oklch(0.22 0.04 280)",
        "--foreground": "oklch(0.97 0.01 280)",
        "--card": "oklch(0.18 0.04 280)",
        "--card-foreground": "oklch(0.97 0.01 280)",
        "--popover": "oklch(0.18 0.04 280)",
        "--popover-foreground": "oklch(0.97 0.01 280)",
        "--primary": "oklch(0.72 0.16 295)",
        "--primary-foreground": "oklch(0.22 0.04 280)",
        "--secondary": "oklch(0.3 0.04 280)",
        "--secondary-foreground": "oklch(0.97 0.01 280)",
        "--muted": "oklch(0.3 0.04 280)",
        "--muted-foreground": "oklch(0.65 0.04 280)",
        "--border": "oklch(0.35 0.04 280)",
        "--input": "oklch(0.35 0.04 280)",
        "--ring": "oklch(0.72 0.16 295)"
      }
    }
  },
  {
    name: "nord",
    label: "Nord",
    category: "tweakcn",
    preview: "#88c0d0",
    colors: ["#88c0d0", "#81a1c1", "#5e81ac", "#bf616a", "#2e3440"],
    tokens: {
      light: {
        "--background": "oklch(0.95 0.01 230)",
        "--foreground": "oklch(0.26 0.03 230)",
        "--card": "oklch(0.97 0.005 230)",
        "--card-foreground": "oklch(0.26 0.03 230)",
        "--primary": "oklch(0.55 0.08 230)",
        "--primary-foreground": "oklch(0.99 0 0)",
        "--secondary": "oklch(0.89 0.015 230)",
        "--secondary-foreground": "oklch(0.26 0.03 230)",
        "--muted": "oklch(0.89 0.015 230)",
        "--muted-foreground": "oklch(0.42 0.03 230)",
        "--border": "oklch(0.85 0.015 230)",
        "--input": "oklch(0.85 0.015 230)",
        "--ring": "oklch(0.55 0.08 230)"
      },
      dark: {
        "--background": "oklch(0.26 0.03 230)",
        "--foreground": "oklch(0.95 0.01 230)",
        "--card": "oklch(0.22 0.03 230)",
        "--card-foreground": "oklch(0.95 0.01 230)",
        "--popover": "oklch(0.22 0.03 230)",
        "--popover-foreground": "oklch(0.95 0.01 230)",
        "--primary": "oklch(0.76 0.08 210)",
        "--primary-foreground": "oklch(0.26 0.03 230)",
        "--secondary": "oklch(0.32 0.03 230)",
        "--secondary-foreground": "oklch(0.95 0.01 230)",
        "--muted": "oklch(0.32 0.03 230)",
        "--muted-foreground": "oklch(0.85 0.015 230)",
        "--border": "oklch(0.36 0.03 230)",
        "--input": "oklch(0.36 0.03 230)",
        "--ring": "oklch(0.76 0.08 210)"
      }
    }
  },
  {
    name: "gruvbox",
    label: "Gruvbox",
    category: "tweakcn",
    preview: "#fe8019",
    colors: ["#fe8019", "#fabd2f", "#b8bb26", "#83a598", "#282828"],
    tokens: {
      light: {
        "--background": "oklch(0.96 0.03 85)",
        "--foreground": "oklch(0.28 0.03 60)",
        "--card": "oklch(0.92 0.04 85)",
        "--card-foreground": "oklch(0.28 0.03 60)",
        "--primary": "oklch(0.55 0.16 45)",
        "--primary-foreground": "oklch(0.96 0.03 85)",
        "--secondary": "oklch(0.88 0.04 85)",
        "--secondary-foreground": "oklch(0.28 0.03 60)",
        "--muted": "oklch(0.88 0.04 85)",
        "--muted-foreground": "oklch(0.52 0.03 60)",
        "--border": "oklch(0.82 0.04 85)",
        "--input": "oklch(0.82 0.04 85)",
        "--ring": "oklch(0.55 0.16 45)"
      },
      dark: {
        "--background": "oklch(0.22 0.01 60)",
        "--foreground": "oklch(0.88 0.04 85)",
        "--card": "oklch(0.18 0.01 60)",
        "--card-foreground": "oklch(0.88 0.04 85)",
        "--popover": "oklch(0.18 0.01 60)",
        "--popover-foreground": "oklch(0.88 0.04 85)",
        "--primary": "oklch(0.68 0.18 55)",
        "--primary-foreground": "oklch(0.22 0.01 60)",
        "--secondary": "oklch(0.28 0.02 60)",
        "--secondary-foreground": "oklch(0.88 0.04 85)",
        "--muted": "oklch(0.28 0.02 60)",
        "--muted-foreground": "oklch(0.68 0.03 80)",
        "--border": "oklch(0.35 0.02 60)",
        "--input": "oklch(0.35 0.02 60)",
        "--ring": "oklch(0.68 0.18 55)"
      }
    }
  },
  {
    name: "supabase",
    label: "Supabase",
    category: "tweakcn",
    preview: "#3ecf8e",
    colors: ["#3ecf8e", "#10b981", "#047857", "#a7f3d0", "#121212"],
    tokens: {
      light: {
        "--background": "oklch(0.98 0.005 240)",
        "--foreground": "oklch(0.15 0.02 240)",
        "--card": "oklch(1 0 0)",
        "--card-foreground": "oklch(0.15 0.02 240)",
        "--primary": "oklch(0.55 0.15 160)",
        "--primary-foreground": "oklch(0.99 0 0)",
        "--secondary": "oklch(0.92 0.01 240)",
        "--secondary-foreground": "oklch(0.15 0.02 240)",
        "--muted": "oklch(0.95 0.01 240)",
        "--muted-foreground": "oklch(0.48 0.02 240)",
        "--border": "oklch(0.9 0.01 240)",
        "--input": "oklch(0.9 0.01 240)",
        "--ring": "oklch(0.55 0.15 160)"
      },
      dark: {
        "--background": "oklch(0.14 0.005 240)",
        "--foreground": "oklch(0.94 0.005 240)",
        "--card": "oklch(0.16 0.005 240)",
        "--card-foreground": "oklch(0.94 0.005 240)",
        "--popover": "oklch(0.16 0.005 240)",
        "--popover-foreground": "oklch(0.94 0.005 240)",
        "--primary": "oklch(0.74 0.17 160)",
        "--primary-foreground": "oklch(0.14 0.005 240)",
        "--secondary": "oklch(0.22 0.005 240)",
        "--secondary-foreground": "oklch(0.94 0.005 240)",
        "--muted": "oklch(0.22 0.005 240)",
        "--muted-foreground": "oklch(0.68 0.005 240)",
        "--border": "oklch(0.24 0.005 240)",
        "--input": "oklch(0.24 0.005 240)",
        "--ring": "oklch(0.74 0.17 160)"
      }
    }
  },
  {
    name: "tweakcn-sunset",
    label: "Tweakcn Sunset",
    category: "tweakcn",
    preview: "#f97316",
    colors: ["#f97316", "#ec4899", "#8b5cf6", "#3b82f6", "#0f172a"],
    tokens: {
      light: {
        "--background": "oklch(0.97 0.02 50)",
        "--foreground": "oklch(0.25 0.05 40)",
        "--card": "oklch(0.94 0.03 50)",
        "--card-foreground": "oklch(0.25 0.05 40)",
        "--primary": "oklch(0.62 0.22 45)",
        "--primary-foreground": "oklch(0.99 0 0)",
        "--secondary": "oklch(0.88 0.05 50)",
        "--secondary-foreground": "oklch(0.25 0.05 40)",
        "--muted": "oklch(0.94 0.03 50)",
        "--muted-foreground": "oklch(0.55 0.08 40)",
        "--border": "oklch(0.85 0.06 50)",
        "--input": "oklch(0.85 0.06 50)",
        "--ring": "oklch(0.62 0.22 45)"
      },
      dark: {
        "--background": "oklch(0.12 0.02 50)",
        "--foreground": "oklch(0.94 0.01 50)",
        "--card": "oklch(0.16 0.02 50)",
        "--card-foreground": "oklch(0.94 0.01 50)",
        "--popover": "oklch(0.16 0.02 50)",
        "--popover-foreground": "oklch(0.94 0.01 50)",
        "--primary": "oklch(0.705 0.213 47.604)",
        "--primary-foreground": "oklch(0.12 0.02 50)",
        "--secondary": "oklch(0.22 0.02 50)",
        "--secondary-foreground": "oklch(0.94 0.01 50)",
        "--muted": "oklch(0.22 0.02 50)",
        "--muted-foreground": "oklch(0.68 0.02 50)",
        "--border": "oklch(0.3 0.02 50)",
        "--input": "oklch(0.3 0.02 50)",
        "--ring": "oklch(0.705 0.213 47.604)"
      }
    }
  },
  {
    name: "tweakcn-ocean",
    label: "Tweakcn Ocean",
    category: "tweakcn",
    preview: "#06b6d4",
    colors: ["#06b6d4", "#0284c7", "#3b82f6", "#10b981", "#0f172a"],
    tokens: {
      light: {
        "--background": "oklch(0.97 0.02 200)",
        "--foreground": "oklch(0.22 0.06 200)",
        "--card": "oklch(0.94 0.03 200)",
        "--card-foreground": "oklch(0.22 0.06 200)",
        "--primary": "oklch(0.55 0.15 200)",
        "--primary-foreground": "oklch(0.99 0 0)",
        "--secondary": "oklch(0.88 0.05 200)",
        "--secondary-foreground": "oklch(0.22 0.06 200)",
        "--muted": "oklch(0.94 0.03 200)",
        "--muted-foreground": "oklch(0.48 0.06 200)",
        "--border": "oklch(0.85 0.05 200)",
        "--input": "oklch(0.85 0.05 200)",
        "--ring": "oklch(0.55 0.15 200)"
      },
      dark: {
        "--background": "oklch(0.12 0.03 210)",
        "--foreground": "oklch(0.92 0.02 210)",
        "--card": "oklch(0.16 0.03 210)",
        "--card-foreground": "oklch(0.92 0.02 210)",
        "--popover": "oklch(0.16 0.03 210)",
        "--popover-foreground": "oklch(0.92 0.02 210)",
        "--primary": "oklch(0.68 0.15 200)",
        "--primary-foreground": "oklch(0.12 0.03 210)",
        "--secondary": "oklch(0.22 0.03 210)",
        "--secondary-foreground": "oklch(0.92 0.02 210)",
        "--muted": "oklch(0.22 0.03 210)",
        "--muted-foreground": "oklch(0.68 0.03 210)",
        "--border": "oklch(0.28 0.03 210)",
        "--input": "oklch(0.28 0.03 210)",
        "--ring": "oklch(0.68 0.15 200)"
      }
    }
  },
  {
    name: "tweakcn-midnight",
    label: "Tweakcn Midnight",
    category: "tweakcn",
    preview: "#8b5cf6",
    colors: ["#8b5cf6", "#d946ef", "#6366f1", "#ec4899", "#09090b"],
    tokens: {
      light: {
        "--background": "oklch(0.96 0.02 280)",
        "--foreground": "oklch(0.22 0.08 280)",
        "--card": "oklch(0.93 0.03 280)",
        "--card-foreground": "oklch(0.22 0.08 280)",
        "--primary": "oklch(0.55 0.22 280)",
        "--primary-foreground": "oklch(0.99 0 0)",
        "--secondary": "oklch(0.88 0.04 280)",
        "--secondary-foreground": "oklch(0.22 0.08 280)",
        "--muted": "oklch(0.93 0.03 280)",
        "--muted-foreground": "oklch(0.48 0.08 280)",
        "--border": "oklch(0.84 0.04 280)",
        "--input": "oklch(0.84 0.04 280)",
        "--ring": "oklch(0.55 0.22 280)"
      },
      dark: {
        "--background": "oklch(0.1 0.03 280)",
        "--foreground": "oklch(0.93 0.02 280)",
        "--card": "oklch(0.14 0.03 280)",
        "--card-foreground": "oklch(0.93 0.02 280)",
        "--popover": "oklch(0.14 0.03 280)",
        "--popover-foreground": "oklch(0.93 0.02 280)",
        "--primary": "oklch(0.72 0.18 280)",
        "--primary-foreground": "oklch(0.1 0.03 280)",
        "--secondary": "oklch(0.2 0.03 280)",
        "--secondary-foreground": "oklch(0.93 0.02 280)",
        "--muted": "oklch(0.2 0.03 280)",
        "--muted-foreground": "oklch(0.68 0.03 280)",
        "--border": "oklch(0.26 0.03 280)",
        "--input": "oklch(0.26 0.03 280)",
        "--ring": "oklch(0.72 0.18 280)"
      }
    }
  },
  {
    name: "synthwave-84",
    label: "Synthwave '84",
    category: "tweakcn",
    preview: "#ff7edb",
    colors: ["#ff7edb", "#36f9f6", "#fe4450", "#72f1b8", "#262335"],
    tokens: {
      light: {
        "--background": "oklch(0.97 0.02 330)",
        "--foreground": "oklch(0.3 0.12 330)",
        "--card": "oklch(0.94 0.03 330)",
        "--card-foreground": "oklch(0.3 0.12 330)",
        "--primary": "oklch(0.6 0.25 330)",
        "--primary-foreground": "oklch(0.99 0 0)",
        "--secondary": "oklch(0.88 0.05 330)",
        "--secondary-foreground": "oklch(0.3 0.12 330)",
        "--muted": "oklch(0.94 0.03 330)",
        "--muted-foreground": "oklch(0.5 0.1 330)",
        "--border": "oklch(0.84 0.06 330)",
        "--input": "oklch(0.84 0.06 330)",
        "--ring": "oklch(0.6 0.25 330)"
      },
      dark: {
        "--background": "oklch(0.16 0.04 300)",
        "--foreground": "oklch(0.95 0.02 330)",
        "--card": "oklch(0.19 0.04 300)",
        "--card-foreground": "oklch(0.95 0.02 330)",
        "--popover": "oklch(0.19 0.04 300)",
        "--popover-foreground": "oklch(0.95 0.02 330)",
        "--primary": "oklch(0.74 0.2 330)",
        "--primary-foreground": "oklch(0.16 0.04 300)",
        "--secondary": "oklch(0.26 0.04 300)",
        "--secondary-foreground": "oklch(0.95 0.02 330)",
        "--muted": "oklch(0.26 0.04 300)",
        "--muted-foreground": "oklch(0.75 0.12 190)",
        "--border": "oklch(0.32 0.04 300)",
        "--input": "oklch(0.32 0.04 300)",
        "--ring": "oklch(0.74 0.2 330)"
      }
    }
  },
  {
    name: "everforest",
    label: "Everforest",
    category: "tweakcn",
    preview: "#a7c080",
    colors: ["#a7c080", "#dbbc7f", "#e67e80", "#7fbbb3", "#2d353b"],
    tokens: {
      light: {
        "--background": "oklch(0.96 0.02 90)",
        "--foreground": "oklch(0.32 0.02 120)",
        "--card": "oklch(0.93 0.025 90)",
        "--card-foreground": "oklch(0.32 0.02 120)",
        "--primary": "oklch(0.55 0.12 120)",
        "--primary-foreground": "oklch(0.96 0.02 90)",
        "--secondary": "oklch(0.88 0.02 90)",
        "--secondary-foreground": "oklch(0.32 0.02 120)",
        "--muted": "oklch(0.88 0.02 90)",
        "--muted-foreground": "oklch(0.5 0.02 120)",
        "--border": "oklch(0.82 0.02 90)",
        "--input": "oklch(0.82 0.02 90)",
        "--ring": "oklch(0.55 0.12 120)"
      },
      dark: {
        "--background": "oklch(0.24 0.02 140)",
        "--foreground": "oklch(0.88 0.03 110)",
        "--card": "oklch(0.2 0.02 140)",
        "--card-foreground": "oklch(0.88 0.03 110)",
        "--popover": "oklch(0.2 0.02 140)",
        "--popover-foreground": "oklch(0.88 0.03 110)",
        "--primary": "oklch(0.74 0.11 125)",
        "--primary-foreground": "oklch(0.24 0.02 140)",
        "--secondary": "oklch(0.28 0.02 140)",
        "--secondary-foreground": "oklch(0.88 0.03 110)",
        "--muted": "oklch(0.28 0.02 140)",
        "--muted-foreground": "oklch(0.68 0.02 120)",
        "--border": "oklch(0.32 0.02 140)",
        "--input": "oklch(0.32 0.02 140)",
        "--ring": "oklch(0.74 0.11 125)"
      }
    }
  },
  {
    name: "rose-pine",
    label: "Ros\xE9 Pine",
    category: "tweakcn",
    preview: "#ebbcba",
    colors: ["#ebbcba", "#31748f", "#9ccfd8", "#c4a7e7", "#191724"],
    tokens: {
      light: {
        "--background": "oklch(0.97 0.01 60)",
        "--foreground": "oklch(0.32 0.04 280)",
        "--card": "oklch(0.93 0.015 60)",
        "--card-foreground": "oklch(0.32 0.04 280)",
        "--primary": "oklch(0.52 0.12 350)",
        "--primary-foreground": "oklch(0.97 0.01 60)",
        "--secondary": "oklch(0.88 0.015 60)",
        "--secondary-foreground": "oklch(0.32 0.04 280)",
        "--muted": "oklch(0.88 0.015 60)",
        "--muted-foreground": "oklch(0.5 0.04 280)",
        "--border": "oklch(0.82 0.015 60)",
        "--input": "oklch(0.82 0.015 60)",
        "--ring": "oklch(0.52 0.12 350)"
      },
      dark: {
        "--background": "oklch(0.18 0.03 280)",
        "--foreground": "oklch(0.9 0.02 280)",
        "--card": "oklch(0.15 0.03 280)",
        "--card-foreground": "oklch(0.9 0.02 280)",
        "--popover": "oklch(0.15 0.03 280)",
        "--popover-foreground": "oklch(0.9 0.02 280)",
        "--primary": "oklch(0.78 0.08 20)",
        "--primary-foreground": "oklch(0.18 0.03 280)",
        "--secondary": "oklch(0.24 0.03 280)",
        "--secondary-foreground": "oklch(0.9 0.02 280)",
        "--muted": "oklch(0.24 0.03 280)",
        "--muted-foreground": "oklch(0.65 0.02 280)",
        "--border": "oklch(0.28 0.03 280)",
        "--input": "oklch(0.28 0.03 280)",
        "--ring": "oklch(0.78 0.08 20)"
      }
    }
  },
  // ─── Simple accent themes ─────────────────────────────────────
  {
    name: "zinc",
    label: "Zinc",
    preview: "oklch(0.208 0.042 265.755)",
    colors: ["#71717a", "#fafafa", "#18181b", "#a1a1aa", "#d4d4d8"],
    tokens: {
      light: {
        "--primary": "oklch(0.208 0.042 265.755)",
        "--primary-foreground": "oklch(0.984 0.003 247.858)",
        "--ring": "oklch(0.704 0.04 256.788)",
        "--chart-1": "oklch(0.646 0.222 41.116)",
        "--chart-2": "oklch(0.6 0.118 184.704)",
        "--chart-3": "oklch(0.398 0.07 227.392)",
        "--chart-4": "oklch(0.828 0.189 84.429)",
        "--chart-5": "oklch(0.769 0.188 70.08)"
      },
      dark: {
        "--primary": "oklch(0.929 0.013 255.508)",
        "--primary-foreground": "oklch(0.208 0.042 265.755)",
        "--ring": "oklch(0.551 0.027 264.364)",
        "--chart-1": "oklch(0.488 0.243 264.376)",
        "--chart-2": "oklch(0.696 0.17 162.48)",
        "--chart-3": "oklch(0.769 0.188 70.08)",
        "--chart-4": "oklch(0.627 0.265 303.9)",
        "--chart-5": "oklch(0.645 0.246 16.439)"
      }
    }
  },
  {
    name: "blue",
    label: "Blue",
    preview: "oklch(0.546 0.245 262.881)",
    colors: ["#2563eb", "#3b82f6", "#93c5fd", "#bfdbfe", "#1e40af"],
    tokens: simplePalette(
      "oklch(0.546 0.245 262.881)",
      "oklch(0.546 0.245 262.881)",
      "oklch(0.623 0.214 259.815)",
      "oklch(0.623 0.214 259.815)",
      {
        light: ["oklch(0.546 0.245 262.881)", "oklch(0.6 0.118 184.704)", "oklch(0.398 0.07 227.392)", "oklch(0.828 0.189 84.429)", "oklch(0.769 0.188 70.08)"],
        dark: ["oklch(0.623 0.214 259.815)", "oklch(0.696 0.17 162.48)", "oklch(0.769 0.188 70.08)", "oklch(0.627 0.265 303.9)", "oklch(0.645 0.246 16.439)"]
      }
    )
  },
  {
    name: "rose",
    label: "Rose",
    preview: "oklch(0.585 0.22 3.717)",
    colors: ["#e11d48", "#f43f5e", "#fda4af", "#fecdd3", "#9f1239"],
    tokens: simplePalette(
      "oklch(0.585 0.22 3.717)",
      "oklch(0.585 0.22 3.717)",
      "oklch(0.645 0.246 16.439)",
      "oklch(0.645 0.246 16.439)",
      {
        light: ["oklch(0.585 0.22 3.717)", "oklch(0.6 0.118 184.704)", "oklch(0.398 0.07 227.392)", "oklch(0.828 0.189 84.429)", "oklch(0.769 0.188 70.08)"],
        dark: ["oklch(0.645 0.246 16.439)", "oklch(0.696 0.17 162.48)", "oklch(0.769 0.188 70.08)", "oklch(0.627 0.265 303.9)", "oklch(0.488 0.243 264.376)"]
      }
    )
  },
  {
    name: "green",
    label: "Green",
    preview: "oklch(0.527 0.154 150.069)",
    colors: ["#16a34a", "#22c55e", "#86efac", "#bbf7d0", "#166534"],
    tokens: simplePalette(
      "oklch(0.527 0.154 150.069)",
      "oklch(0.527 0.154 150.069)",
      "oklch(0.696 0.17 162.48)",
      "oklch(0.696 0.17 162.48)",
      {
        light: ["oklch(0.527 0.154 150.069)", "oklch(0.6 0.118 184.704)", "oklch(0.398 0.07 227.392)", "oklch(0.828 0.189 84.429)", "oklch(0.769 0.188 70.08)"],
        dark: ["oklch(0.696 0.17 162.48)", "oklch(0.623 0.214 259.815)", "oklch(0.769 0.188 70.08)", "oklch(0.627 0.265 303.9)", "oklch(0.645 0.246 16.439)"]
      }
    )
  },
  {
    name: "orange",
    label: "Orange",
    preview: "oklch(0.705 0.213 47.604)",
    colors: ["#f97316", "#fb923c", "#fdba74", "#fed7aa", "#c2410c"],
    tokens: {
      light: {
        "--primary": "oklch(0.705 0.213 47.604)",
        "--primary-foreground": "oklch(0.208 0.042 265.755)",
        "--ring": "oklch(0.705 0.213 47.604)",
        "--chart-1": "oklch(0.705 0.213 47.604)",
        "--chart-2": "oklch(0.6 0.118 184.704)",
        "--chart-3": "oklch(0.398 0.07 227.392)",
        "--chart-4": "oklch(0.828 0.189 84.429)",
        "--chart-5": "oklch(0.769 0.188 70.08)"
      },
      dark: {
        "--primary": "oklch(0.769 0.188 70.08)",
        "--primary-foreground": "oklch(0.208 0.042 265.755)",
        "--ring": "oklch(0.769 0.188 70.08)",
        "--chart-1": "oklch(0.769 0.188 70.08)",
        "--chart-2": "oklch(0.696 0.17 162.48)",
        "--chart-3": "oklch(0.623 0.214 259.815)",
        "--chart-4": "oklch(0.627 0.265 303.9)",
        "--chart-5": "oklch(0.645 0.246 16.439)"
      }
    }
  },
  {
    name: "violet",
    label: "Violet",
    preview: "oklch(0.541 0.281 293.009)",
    colors: ["#7c3aed", "#8b5cf6", "#c4b5fd", "#ddd6fe", "#5b21b6"],
    tokens: simplePalette(
      "oklch(0.541 0.281 293.009)",
      "oklch(0.541 0.281 293.009)",
      "oklch(0.627 0.265 303.9)",
      "oklch(0.627 0.265 303.9)",
      {
        light: ["oklch(0.541 0.281 293.009)", "oklch(0.6 0.118 184.704)", "oklch(0.398 0.07 227.392)", "oklch(0.828 0.189 84.429)", "oklch(0.769 0.188 70.08)"],
        dark: ["oklch(0.627 0.265 303.9)", "oklch(0.696 0.17 162.48)", "oklch(0.769 0.188 70.08)", "oklch(0.623 0.214 259.815)", "oklch(0.645 0.246 16.439)"]
      }
    )
  },
  {
    name: "amber",
    label: "Amber",
    preview: "oklch(0.769 0.172 70.67)",
    colors: ["#f59e0b", "#fbbf24", "#fcd34d", "#fde68a", "#92400e"],
    tokens: {
      light: {
        "--primary": "oklch(0.555 0.163 48.998)",
        "--primary-foreground": "oklch(0.984 0.003 247.858)",
        "--ring": "oklch(0.555 0.163 48.998)",
        "--chart-1": "oklch(0.769 0.172 70.67)",
        "--chart-2": "oklch(0.6 0.118 184.704)",
        "--chart-3": "oklch(0.398 0.07 227.392)",
        "--chart-4": "oklch(0.828 0.189 84.429)",
        "--chart-5": "oklch(0.585 0.22 3.717)"
      },
      dark: {
        "--primary": "oklch(0.769 0.172 70.67)",
        "--primary-foreground": "oklch(0.208 0.042 265.755)",
        "--ring": "oklch(0.769 0.172 70.67)",
        "--chart-1": "oklch(0.769 0.172 70.67)",
        "--chart-2": "oklch(0.696 0.17 162.48)",
        "--chart-3": "oklch(0.623 0.214 259.815)",
        "--chart-4": "oklch(0.627 0.265 303.9)",
        "--chart-5": "oklch(0.645 0.246 16.439)"
      }
    }
  },
  {
    name: "teal",
    label: "Teal",
    preview: "oklch(0.6 0.118 184.704)",
    colors: ["#14b8a6", "#2dd4bf", "#5eead4", "#99f6e4", "#115e59"],
    tokens: {
      light: {
        "--primary": "oklch(0.485 0.118 192.351)",
        "--primary-foreground": "oklch(0.984 0.003 247.858)",
        "--ring": "oklch(0.485 0.118 192.351)",
        "--chart-1": "oklch(0.6 0.118 184.704)",
        "--chart-2": "oklch(0.546 0.245 262.881)",
        "--chart-3": "oklch(0.398 0.07 227.392)",
        "--chart-4": "oklch(0.828 0.189 84.429)",
        "--chart-5": "oklch(0.769 0.188 70.08)"
      },
      dark: {
        "--primary": "oklch(0.696 0.17 162.48)",
        "--primary-foreground": "oklch(0.208 0.042 265.755)",
        "--ring": "oklch(0.696 0.17 162.48)",
        "--chart-1": "oklch(0.696 0.17 162.48)",
        "--chart-2": "oklch(0.623 0.214 259.815)",
        "--chart-3": "oklch(0.769 0.188 70.08)",
        "--chart-4": "oklch(0.627 0.265 303.9)",
        "--chart-5": "oklch(0.645 0.246 16.439)"
      }
    }
  },
  // New simple accent themes
  {
    name: "ruby",
    label: "Ruby",
    preview: "#b91c1c",
    colors: ["#b91c1c", "#ef4444", "#fca5a5", "#fee2e2", "#7f1d1d"],
    tokens: simplePalette(
      "oklch(0.505 0.213 27.325)",
      "oklch(0.505 0.213 27.325)",
      "oklch(0.637 0.237 25.331)",
      "oklch(0.637 0.237 25.331)",
      {
        light: ["oklch(0.505 0.213 27.325)", "oklch(0.546 0.245 262.881)", "oklch(0.527 0.154 150.069)", "oklch(0.769 0.172 70.67)", "oklch(0.585 0.22 3.717)"],
        dark: ["oklch(0.637 0.237 25.331)", "oklch(0.623 0.214 259.815)", "oklch(0.696 0.17 162.48)", "oklch(0.769 0.188 70.08)", "oklch(0.627 0.265 303.9)"]
      }
    )
  },
  {
    name: "emerald",
    label: "Emerald",
    preview: "#059669",
    colors: ["#059669", "#34d399", "#6ee7b7", "#a7f3d0", "#064e3b"],
    tokens: simplePalette(
      "oklch(0.596 0.145 163.225)",
      "oklch(0.596 0.145 163.225)",
      "oklch(0.696 0.17 162.48)",
      "oklch(0.696 0.17 162.48)",
      {
        light: ["oklch(0.596 0.145 163.225)", "oklch(0.546 0.245 262.881)", "oklch(0.769 0.172 70.67)", "oklch(0.585 0.22 3.717)", "oklch(0.627 0.265 303.9)"],
        dark: ["oklch(0.696 0.17 162.48)", "oklch(0.623 0.214 259.815)", "oklch(0.769 0.188 70.08)", "oklch(0.645 0.246 16.439)", "oklch(0.627 0.265 303.9)"]
      }
    )
  },
  {
    name: "sapphire",
    label: "Sapphire",
    preview: "#1d4ed8",
    colors: ["#1d4ed8", "#3b82f6", "#93c5fd", "#bfdbfe", "#1e3a8a"],
    tokens: simplePalette(
      "oklch(0.488 0.243 264.376)",
      "oklch(0.488 0.243 264.376)",
      "oklch(0.623 0.214 259.815)",
      "oklch(0.623 0.214 259.815)",
      {
        light: ["oklch(0.488 0.243 264.376)", "oklch(0.696 0.17 162.48)", "oklch(0.585 0.22 3.717)", "oklch(0.769 0.172 70.67)", "oklch(0.627 0.265 303.9)"],
        dark: ["oklch(0.623 0.214 259.815)", "oklch(0.696 0.17 162.48)", "oklch(0.769 0.188 70.08)", "oklch(0.645 0.246 16.439)", "oklch(0.627 0.265 303.9)"]
      }
    )
  },
  {
    name: "fuchsia",
    label: "Fuchsia",
    preview: "#c026d3",
    colors: ["#c026d3", "#e879f9", "#f5d0fe", "#fae8ff", "#86198f"],
    tokens: simplePalette(
      "oklch(0.591 0.293 322.896)",
      "oklch(0.591 0.293 322.896)",
      "oklch(0.667 0.295 322.15)",
      "oklch(0.667 0.295 322.15)",
      {
        light: ["oklch(0.591 0.293 322.896)", "oklch(0.546 0.245 262.881)", "oklch(0.696 0.17 162.48)", "oklch(0.769 0.172 70.67)", "oklch(0.585 0.22 3.717)"],
        dark: ["oklch(0.667 0.295 322.15)", "oklch(0.623 0.214 259.815)", "oklch(0.769 0.188 70.08)", "oklch(0.696 0.17 162.48)", "oklch(0.645 0.246 16.439)"]
      }
    )
  },
  {
    name: "cyan",
    label: "Cyan",
    preview: "#0891b2",
    colors: ["#0891b2", "#22d3ee", "#a5f3fc", "#cffafe", "#155e75"],
    tokens: simplePalette(
      "oklch(0.609 0.126 199.769)",
      "oklch(0.609 0.126 199.769)",
      "oklch(0.715 0.143 198.14)",
      "oklch(0.715 0.143 198.14)",
      {
        light: ["oklch(0.609 0.126 199.769)", "oklch(0.546 0.245 262.881)", "oklch(0.585 0.22 3.717)", "oklch(0.769 0.172 70.67)", "oklch(0.627 0.265 303.9)"],
        dark: ["oklch(0.715 0.143 198.14)", "oklch(0.623 0.214 259.815)", "oklch(0.645 0.246 16.439)", "oklch(0.769 0.188 70.08)", "oklch(0.627 0.265 303.9)"]
      }
    )
  },
  {
    name: "indigo",
    label: "Indigo",
    preview: "#4f46e5",
    colors: ["#4f46e5", "#818cf8", "#a5b4fc", "#c7d2fe", "#312e81"],
    tokens: simplePalette(
      "oklch(0.511 0.262 276.966)",
      "oklch(0.511 0.262 276.966)",
      "oklch(0.585 0.233 277.117)",
      "oklch(0.585 0.233 277.117)",
      {
        light: ["oklch(0.511 0.262 276.966)", "oklch(0.696 0.17 162.48)", "oklch(0.769 0.172 70.67)", "oklch(0.585 0.22 3.717)", "oklch(0.627 0.265 303.9)"],
        dark: ["oklch(0.585 0.233 277.117)", "oklch(0.696 0.17 162.48)", "oklch(0.769 0.188 70.08)", "oklch(0.645 0.246 16.439)", "oklch(0.623 0.214 259.815)"]
      }
    )
  },
  {
    name: "pink",
    label: "Pink",
    preview: "#db2777",
    colors: ["#db2777", "#f472b6", "#f9a8d4", "#fbcfe8", "#831843"],
    tokens: simplePalette(
      "oklch(0.592 0.249 0.584)",
      "oklch(0.592 0.249 0.584)",
      "oklch(0.656 0.241 354.308)",
      "oklch(0.656 0.241 354.308)",
      {
        light: ["oklch(0.592 0.249 0.584)", "oklch(0.546 0.245 262.881)", "oklch(0.696 0.17 162.48)", "oklch(0.769 0.172 70.67)", "oklch(0.627 0.265 303.9)"],
        dark: ["oklch(0.656 0.241 354.308)", "oklch(0.623 0.214 259.815)", "oklch(0.696 0.17 162.48)", "oklch(0.769 0.188 70.08)", "oklch(0.627 0.265 303.9)"]
      }
    )
  },
  {
    name: "lime",
    label: "Lime",
    preview: "#65a30d",
    colors: ["#65a30d", "#84cc16", "#bef264", "#d9f99d", "#365314"],
    tokens: simplePalette(
      "oklch(0.627 0.168 131.589)",
      "oklch(0.627 0.168 131.589)",
      "oklch(0.768 0.233 130.85)",
      "oklch(0.768 0.233 130.85)",
      {
        light: ["oklch(0.627 0.168 131.589)", "oklch(0.546 0.245 262.881)", "oklch(0.585 0.22 3.717)", "oklch(0.769 0.172 70.67)", "oklch(0.627 0.265 303.9)"],
        dark: ["oklch(0.768 0.233 130.85)", "oklch(0.623 0.214 259.815)", "oklch(0.645 0.246 16.439)", "oklch(0.769 0.188 70.08)", "oklch(0.627 0.265 303.9)"]
      }
    )
  },
  {
    name: "sky",
    label: "Sky",
    preview: "#0284c7",
    colors: ["#0284c7", "#38bdf8", "#7dd3fc", "#bae6fd", "#0c4a6e"],
    tokens: simplePalette(
      "oklch(0.562 0.158 241.966)",
      "oklch(0.562 0.158 241.966)",
      "oklch(0.714 0.175 232.799)",
      "oklch(0.714 0.175 232.799)",
      {
        light: ["oklch(0.562 0.158 241.966)", "oklch(0.696 0.17 162.48)", "oklch(0.585 0.22 3.717)", "oklch(0.769 0.172 70.67)", "oklch(0.627 0.265 303.9)"],
        dark: ["oklch(0.714 0.175 232.799)", "oklch(0.696 0.17 162.48)", "oklch(0.769 0.188 70.08)", "oklch(0.645 0.246 16.439)", "oklch(0.623 0.214 259.815)"]
      }
    )
  },
  {
    name: "slate",
    label: "Slate",
    preview: "#475569",
    colors: ["#475569", "#94a3b8", "#cbd5e1", "#e2e8f0", "#1e293b"],
    tokens: simplePalette(
      "oklch(0.446 0.043 257.281)",
      "oklch(0.446 0.043 257.281)",
      "oklch(0.869 0.022 252.894)",
      "oklch(0.551 0.027 264.364)",
      {
        light: ["oklch(0.446 0.043 257.281)", "oklch(0.546 0.245 262.881)", "oklch(0.696 0.17 162.48)", "oklch(0.769 0.172 70.67)", "oklch(0.585 0.22 3.717)"],
        dark: ["oklch(0.869 0.022 252.894)", "oklch(0.623 0.214 259.815)", "oklch(0.696 0.17 162.48)", "oklch(0.769 0.188 70.08)", "oklch(0.627 0.265 303.9)"]
      }
    )
  },
  // ─── Full palette themes ──────────────────────────────────────
  {
    name: "bold-tech",
    label: "Bold Tech",
    preview: "#6d28d9",
    colors: ["#6d28d9", "#818cf8", "#c4b5fd", "#a5b4fc", "#1e1b4b"],
    tokens: {
      light: {
        "--background": "oklch(0.94 0.025 280)",
        "--foreground": "oklch(0.15 0.05 280)",
        "--card": "oklch(0.97 0.018 280)",
        "--card-foreground": "oklch(0.15 0.05 280)",
        "--popover": "oklch(0.97 0.018 280)",
        "--popover-foreground": "oklch(0.15 0.05 280)",
        "--primary": "oklch(0.49 0.27 285)",
        "--primary-foreground": "oklch(0.98 0.005 280)",
        "--secondary": "oklch(0.88 0.04 280)",
        "--secondary-foreground": "oklch(0.25 0.05 280)",
        "--muted": "oklch(0.9 0.03 280)",
        "--muted-foreground": "oklch(0.5 0.04 280)",
        "--accent": "oklch(0.86 0.055 280)",
        "--accent-foreground": "oklch(0.25 0.05 280)",
        "--destructive": "oklch(0.577 0.245 27.325)",
        "--border": "oklch(0.84 0.04 280)",
        "--input": "oklch(0.84 0.04 280)",
        "--ring": "oklch(0.49 0.27 285)",
        "--chart-1": "oklch(0.49 0.27 285)",
        "--chart-2": "oklch(0.6 0.118 184.704)",
        "--chart-3": "oklch(0.645 0.246 16.439)",
        "--chart-4": "oklch(0.769 0.172 70.67)",
        "--chart-5": "oklch(0.696 0.17 162.48)"
      },
      dark: {
        "--background": "oklch(0.12 0.04 280)",
        "--foreground": "oklch(0.93 0.01 280)",
        "--card": "oklch(0.15 0.04 278)",
        "--card-foreground": "oklch(0.93 0.01 280)",
        "--popover": "oklch(0.17 0.045 280)",
        "--popover-foreground": "oklch(0.93 0.01 280)",
        "--primary": "oklch(0.65 0.25 285)",
        "--primary-foreground": "oklch(0.12 0.04 280)",
        "--secondary": "oklch(0.22 0.04 278)",
        "--secondary-foreground": "oklch(0.93 0.01 280)",
        "--muted": "oklch(0.22 0.04 278)",
        "--muted-foreground": "oklch(0.65 0.04 280)",
        "--accent": "oklch(0.22 0.04 278)",
        "--accent-foreground": "oklch(0.93 0.01 280)",
        "--destructive": "oklch(0.704 0.191 22.216)",
        "--border": "oklch(1 0 0 / 10%)",
        "--input": "oklch(1 0 0 / 15%)",
        "--ring": "oklch(0.65 0.25 285)",
        "--chart-1": "oklch(0.65 0.25 285)",
        "--chart-2": "oklch(0.696 0.17 162.48)",
        "--chart-3": "oklch(0.769 0.188 70.08)",
        "--chart-4": "oklch(0.645 0.246 16.439)",
        "--chart-5": "oklch(0.623 0.214 259.815)"
      }
    }
  },
  {
    name: "bubblegum",
    label: "Bubblegum",
    preview: "#ec4899",
    colors: ["#ec4899", "#f472b6", "#fce7f3", "#f9a8d4", "#831843"],
    tokens: {
      light: {
        "--background": "oklch(0.95 0.03 350)",
        "--foreground": "oklch(0.18 0.06 340)",
        "--card": "oklch(0.97 0.022 350)",
        "--card-foreground": "oklch(0.18 0.06 340)",
        "--popover": "oklch(0.97 0.022 350)",
        "--popover-foreground": "oklch(0.18 0.06 340)",
        "--primary": "oklch(0.656 0.241 354.308)",
        "--primary-foreground": "oklch(0.98 0.005 350)",
        "--secondary": "oklch(0.9 0.05 340)",
        "--secondary-foreground": "oklch(0.25 0.06 340)",
        "--muted": "oklch(0.91 0.04 340)",
        "--muted-foreground": "oklch(0.5 0.04 340)",
        "--accent": "oklch(0.88 0.06 340)",
        "--accent-foreground": "oklch(0.25 0.06 340)",
        "--destructive": "oklch(0.577 0.245 27.325)",
        "--border": "oklch(0.85 0.05 340)",
        "--input": "oklch(0.85 0.05 340)",
        "--ring": "oklch(0.656 0.241 354.308)",
        "--chart-1": "oklch(0.656 0.241 354.308)",
        "--chart-2": "oklch(0.627 0.265 303.9)",
        "--chart-3": "oklch(0.715 0.143 198.14)",
        "--chart-4": "oklch(0.769 0.172 70.67)",
        "--chart-5": "oklch(0.546 0.245 262.881)"
      },
      dark: {
        "--background": "oklch(0.14 0.04 340)",
        "--foreground": "oklch(0.94 0.015 340)",
        "--card": "oklch(0.17 0.04 338)",
        "--card-foreground": "oklch(0.94 0.015 340)",
        "--popover": "oklch(0.19 0.045 340)",
        "--popover-foreground": "oklch(0.94 0.015 340)",
        "--primary": "oklch(0.72 0.22 350)",
        "--primary-foreground": "oklch(0.14 0.04 340)",
        "--secondary": "oklch(0.24 0.04 338)",
        "--secondary-foreground": "oklch(0.94 0.015 340)",
        "--muted": "oklch(0.24 0.04 338)",
        "--muted-foreground": "oklch(0.65 0.04 340)",
        "--accent": "oklch(0.24 0.04 338)",
        "--accent-foreground": "oklch(0.94 0.015 340)",
        "--destructive": "oklch(0.704 0.191 22.216)",
        "--border": "oklch(1 0 0 / 10%)",
        "--input": "oklch(1 0 0 / 15%)",
        "--ring": "oklch(0.72 0.22 350)",
        "--chart-1": "oklch(0.72 0.22 350)",
        "--chart-2": "oklch(0.627 0.265 303.9)",
        "--chart-3": "oklch(0.715 0.143 198.14)",
        "--chart-4": "oklch(0.769 0.188 70.08)",
        "--chart-5": "oklch(0.623 0.214 259.815)"
      }
    }
  },
  {
    name: "caffeine",
    label: "Caffeine",
    preview: "#92400e",
    colors: ["#92400e", "#a16207", "#ca8a04", "#fbbf24", "#451a03"],
    tokens: {
      light: {
        "--background": "oklch(0.96 0.025 65)",
        "--foreground": "oklch(0.2 0.04 50)",
        "--card": "oklch(0.97 0.02 65)",
        "--card-foreground": "oklch(0.2 0.04 50)",
        "--popover": "oklch(0.97 0.02 65)",
        "--popover-foreground": "oklch(0.2 0.04 50)",
        "--primary": "oklch(0.47 0.12 55)",
        "--primary-foreground": "oklch(0.98 0.01 70)",
        "--secondary": "oklch(0.91 0.035 60)",
        "--secondary-foreground": "oklch(0.3 0.05 50)",
        "--muted": "oklch(0.92 0.028 60)",
        "--muted-foreground": "oklch(0.5 0.04 55)",
        "--accent": "oklch(0.89 0.04 60)",
        "--accent-foreground": "oklch(0.3 0.05 50)",
        "--destructive": "oklch(0.577 0.245 27.325)",
        "--border": "oklch(0.86 0.04 60)",
        "--input": "oklch(0.86 0.04 60)",
        "--ring": "oklch(0.55 0.12 55)",
        "--chart-1": "oklch(0.55 0.12 55)",
        "--chart-2": "oklch(0.696 0.17 162.48)",
        "--chart-3": "oklch(0.546 0.245 262.881)",
        "--chart-4": "oklch(0.769 0.172 70.67)",
        "--chart-5": "oklch(0.585 0.22 3.717)"
      },
      dark: {
        "--background": "oklch(0.13 0.02 50)",
        "--foreground": "oklch(0.92 0.015 60)",
        "--card": "oklch(0.16 0.025 48)",
        "--card-foreground": "oklch(0.92 0.015 60)",
        "--popover": "oklch(0.18 0.03 50)",
        "--popover-foreground": "oklch(0.92 0.015 60)",
        "--primary": "oklch(0.72 0.15 65)",
        "--primary-foreground": "oklch(0.15 0.02 50)",
        "--secondary": "oklch(0.24 0.03 48)",
        "--secondary-foreground": "oklch(0.92 0.015 60)",
        "--muted": "oklch(0.24 0.03 48)",
        "--muted-foreground": "oklch(0.6 0.04 55)",
        "--accent": "oklch(0.24 0.03 48)",
        "--accent-foreground": "oklch(0.92 0.015 60)",
        "--destructive": "oklch(0.704 0.191 22.216)",
        "--border": "oklch(1 0 0 / 10%)",
        "--input": "oklch(1 0 0 / 15%)",
        "--ring": "oklch(0.72 0.15 65)",
        "--chart-1": "oklch(0.72 0.15 65)",
        "--chart-2": "oklch(0.696 0.17 162.48)",
        "--chart-3": "oklch(0.623 0.214 259.815)",
        "--chart-4": "oklch(0.627 0.265 303.9)",
        "--chart-5": "oklch(0.645 0.246 16.439)"
      }
    }
  },
  {
    name: "candyland",
    label: "Candyland",
    preview: "#e11d48",
    colors: ["#e11d48", "#06b6d4", "#22c55e", "#f59e0b", "#fce7f3"],
    tokens: {
      light: {
        "--background": "oklch(0.96 0.018 15)",
        "--foreground": "oklch(0.18 0.04 340)",
        "--card": "oklch(0.975 0.013 15)",
        "--card-foreground": "oklch(0.18 0.04 340)",
        "--popover": "oklch(0.975 0.013 15)",
        "--popover-foreground": "oklch(0.18 0.04 340)",
        "--primary": "oklch(0.585 0.22 3.717)",
        "--primary-foreground": "oklch(0.98 0.005 340)",
        "--secondary": "oklch(0.91 0.028 15)",
        "--secondary-foreground": "oklch(0.3 0.04 340)",
        "--muted": "oklch(0.92 0.022 15)",
        "--muted-foreground": "oklch(0.5 0.04 340)",
        "--accent": "oklch(0.9 0.04 200)",
        "--accent-foreground": "oklch(0.25 0.04 200)",
        "--destructive": "oklch(0.577 0.245 27.325)",
        "--border": "oklch(0.87 0.035 15)",
        "--input": "oklch(0.87 0.035 15)",
        "--ring": "oklch(0.585 0.22 3.717)",
        "--chart-1": "oklch(0.585 0.22 3.717)",
        "--chart-2": "oklch(0.715 0.143 198.14)",
        "--chart-3": "oklch(0.696 0.17 162.48)",
        "--chart-4": "oklch(0.769 0.172 70.67)",
        "--chart-5": "oklch(0.627 0.265 303.9)"
      },
      dark: {
        "--background": "oklch(0.14 0.03 340)",
        "--foreground": "oklch(0.94 0.01 340)",
        "--card": "oklch(0.17 0.03 338)",
        "--card-foreground": "oklch(0.94 0.01 340)",
        "--popover": "oklch(0.19 0.035 340)",
        "--popover-foreground": "oklch(0.94 0.01 340)",
        "--primary": "oklch(0.65 0.24 5)",
        "--primary-foreground": "oklch(0.14 0.03 340)",
        "--secondary": "oklch(0.24 0.03 338)",
        "--secondary-foreground": "oklch(0.94 0.01 340)",
        "--muted": "oklch(0.24 0.03 338)",
        "--muted-foreground": "oklch(0.65 0.04 340)",
        "--accent": "oklch(0.24 0.035 200)",
        "--accent-foreground": "oklch(0.94 0.01 200)",
        "--destructive": "oklch(0.704 0.191 22.216)",
        "--border": "oklch(1 0 0 / 10%)",
        "--input": "oklch(1 0 0 / 15%)",
        "--ring": "oklch(0.65 0.24 5)",
        "--chart-1": "oklch(0.65 0.24 5)",
        "--chart-2": "oklch(0.715 0.143 198.14)",
        "--chart-3": "oklch(0.696 0.17 162.48)",
        "--chart-4": "oklch(0.769 0.188 70.08)",
        "--chart-5": "oklch(0.627 0.265 303.9)"
      }
    }
  },
  {
    name: "catppuccin",
    label: "Catppuccin",
    preview: "#cba6f7",
    colors: ["#cba6f7", "#f5c2e7", "#89b4fa", "#a6e3a1", "#1e1e2e"],
    tokens: {
      light: {
        "--background": "oklch(0.93 0.018 280)",
        "--foreground": "oklch(0.28 0.03 280)",
        "--card": "oklch(0.95 0.014 280)",
        "--card-foreground": "oklch(0.28 0.03 280)",
        "--popover": "oklch(0.95 0.014 280)",
        "--popover-foreground": "oklch(0.28 0.03 280)",
        "--primary": "oklch(0.57 0.18 295)",
        "--primary-foreground": "oklch(0.97 0.006 280)",
        "--secondary": "oklch(0.88 0.025 280)",
        "--secondary-foreground": "oklch(0.35 0.03 280)",
        "--muted": "oklch(0.89 0.022 280)",
        "--muted-foreground": "oklch(0.5 0.03 280)",
        "--accent": "oklch(0.87 0.03 280)",
        "--accent-foreground": "oklch(0.35 0.03 280)",
        "--destructive": "oklch(0.577 0.245 27.325)",
        "--border": "oklch(0.84 0.025 280)",
        "--input": "oklch(0.84 0.025 280)",
        "--ring": "oklch(0.57 0.18 295)",
        "--chart-1": "oklch(0.57 0.18 295)",
        "--chart-2": "oklch(0.72 0.14 350)",
        "--chart-3": "oklch(0.65 0.17 260)",
        "--chart-4": "oklch(0.78 0.17 145)",
        "--chart-5": "oklch(0.72 0.16 200)"
      },
      dark: {
        "--background": "oklch(0.16 0.015 280)",
        "--foreground": "oklch(0.9 0.01 280)",
        "--card": "oklch(0.19 0.018 278)",
        "--card-foreground": "oklch(0.9 0.01 280)",
        "--popover": "oklch(0.21 0.02 280)",
        "--popover-foreground": "oklch(0.9 0.01 280)",
        "--primary": "oklch(0.78 0.15 295)",
        "--primary-foreground": "oklch(0.16 0.015 280)",
        "--secondary": "oklch(0.25 0.02 278)",
        "--secondary-foreground": "oklch(0.9 0.01 280)",
        "--muted": "oklch(0.25 0.02 278)",
        "--muted-foreground": "oklch(0.65 0.03 280)",
        "--accent": "oklch(0.25 0.02 278)",
        "--accent-foreground": "oklch(0.9 0.01 280)",
        "--destructive": "oklch(0.704 0.191 22.216)",
        "--border": "oklch(0.3 0.018 280)",
        "--input": "oklch(0.3 0.018 280)",
        "--ring": "oklch(0.78 0.15 295)",
        "--chart-1": "oklch(0.78 0.15 295)",
        "--chart-2": "oklch(0.8 0.12 350)",
        "--chart-3": "oklch(0.72 0.14 260)",
        "--chart-4": "oklch(0.82 0.14 145)",
        "--chart-5": "oklch(0.75 0.13 200)"
      }
    }
  },
  {
    name: "claude",
    label: "Claude",
    preview: "#da7b3c",
    colors: ["#da7b3c", "#f5e6d3", "#c8956c", "#e8c5a0", "#2d2419"],
    tokens: {
      light: {
        "--background": "oklch(0.96 0.022 60)",
        "--foreground": "oklch(0.2 0.03 55)",
        "--card": "oklch(0.975 0.016 60)",
        "--card-foreground": "oklch(0.2 0.03 55)",
        "--popover": "oklch(0.975 0.016 60)",
        "--popover-foreground": "oklch(0.2 0.03 55)",
        "--primary": "oklch(0.62 0.16 50)",
        "--primary-foreground": "oklch(0.98 0.01 65)",
        "--secondary": "oklch(0.91 0.032 60)",
        "--secondary-foreground": "oklch(0.3 0.04 55)",
        "--muted": "oklch(0.92 0.026 60)",
        "--muted-foreground": "oklch(0.5 0.03 55)",
        "--accent": "oklch(0.9 0.038 60)",
        "--accent-foreground": "oklch(0.3 0.04 55)",
        "--destructive": "oklch(0.577 0.245 27.325)",
        "--border": "oklch(0.86 0.035 60)",
        "--input": "oklch(0.86 0.035 60)",
        "--ring": "oklch(0.62 0.16 50)",
        "--chart-1": "oklch(0.62 0.16 50)",
        "--chart-2": "oklch(0.696 0.17 162.48)",
        "--chart-3": "oklch(0.546 0.245 262.881)",
        "--chart-4": "oklch(0.627 0.265 303.9)",
        "--chart-5": "oklch(0.585 0.22 3.717)"
      },
      dark: {
        "--background": "oklch(0.14 0.02 50)",
        "--foreground": "oklch(0.92 0.012 60)",
        "--card": "oklch(0.17 0.02 48)",
        "--card-foreground": "oklch(0.92 0.012 60)",
        "--popover": "oklch(0.19 0.025 50)",
        "--popover-foreground": "oklch(0.92 0.012 60)",
        "--primary": "oklch(0.73 0.14 52)",
        "--primary-foreground": "oklch(0.14 0.02 50)",
        "--secondary": "oklch(0.24 0.025 48)",
        "--secondary-foreground": "oklch(0.92 0.012 60)",
        "--muted": "oklch(0.24 0.025 48)",
        "--muted-foreground": "oklch(0.62 0.035 55)",
        "--accent": "oklch(0.24 0.025 48)",
        "--accent-foreground": "oklch(0.92 0.012 60)",
        "--destructive": "oklch(0.704 0.191 22.216)",
        "--border": "oklch(1 0 0 / 10%)",
        "--input": "oklch(1 0 0 / 15%)",
        "--ring": "oklch(0.73 0.14 52)",
        "--chart-1": "oklch(0.73 0.14 52)",
        "--chart-2": "oklch(0.696 0.17 162.48)",
        "--chart-3": "oklch(0.623 0.214 259.815)",
        "--chart-4": "oklch(0.627 0.265 303.9)",
        "--chart-5": "oklch(0.645 0.246 16.439)"
      }
    }
  },
  {
    name: "claymorphism",
    label: "Claymorphism",
    preview: "#8b7355",
    colors: ["#8b7355", "#c4a97d", "#e8dfd5", "#d4c4b0", "#f5f0eb"],
    tokens: {
      light: {
        "--background": "oklch(0.95 0.02 75)",
        "--foreground": "oklch(0.25 0.03 60)",
        "--card": "oklch(0.965 0.015 75)",
        "--card-foreground": "oklch(0.25 0.03 60)",
        "--popover": "oklch(0.965 0.015 75)",
        "--popover-foreground": "oklch(0.25 0.03 60)",
        "--primary": "oklch(0.52 0.07 65)",
        "--primary-foreground": "oklch(0.97 0.008 75)",
        "--secondary": "oklch(0.9 0.028 70)",
        "--secondary-foreground": "oklch(0.35 0.03 60)",
        "--muted": "oklch(0.91 0.022 70)",
        "--muted-foreground": "oklch(0.5 0.03 65)",
        "--accent": "oklch(0.88 0.032 70)",
        "--accent-foreground": "oklch(0.35 0.03 60)",
        "--destructive": "oklch(0.577 0.245 27.325)",
        "--border": "oklch(0.85 0.03 70)",
        "--input": "oklch(0.85 0.03 70)",
        "--ring": "oklch(0.52 0.07 65)",
        "--chart-1": "oklch(0.52 0.07 65)",
        "--chart-2": "oklch(0.696 0.17 162.48)",
        "--chart-3": "oklch(0.546 0.245 262.881)",
        "--chart-4": "oklch(0.769 0.172 70.67)",
        "--chart-5": "oklch(0.585 0.22 3.717)"
      },
      dark: {
        "--background": "oklch(0.15 0.015 60)",
        "--foreground": "oklch(0.92 0.01 70)",
        "--card": "oklch(0.18 0.015 58)",
        "--card-foreground": "oklch(0.92 0.01 70)",
        "--popover": "oklch(0.2 0.018 60)",
        "--popover-foreground": "oklch(0.92 0.01 70)",
        "--primary": "oklch(0.72 0.08 65)",
        "--primary-foreground": "oklch(0.15 0.015 60)",
        "--secondary": "oklch(0.25 0.018 58)",
        "--secondary-foreground": "oklch(0.92 0.01 70)",
        "--muted": "oklch(0.25 0.018 58)",
        "--muted-foreground": "oklch(0.62 0.03 65)",
        "--accent": "oklch(0.25 0.018 58)",
        "--accent-foreground": "oklch(0.92 0.01 70)",
        "--destructive": "oklch(0.704 0.191 22.216)",
        "--border": "oklch(0.3 0.015 60)",
        "--input": "oklch(0.3 0.015 60)",
        "--ring": "oklch(0.72 0.08 65)",
        "--chart-1": "oklch(0.72 0.08 65)",
        "--chart-2": "oklch(0.696 0.17 162.48)",
        "--chart-3": "oklch(0.623 0.214 259.815)",
        "--chart-4": "oklch(0.769 0.188 70.08)",
        "--chart-5": "oklch(0.645 0.246 16.439)"
      }
    }
  },
  {
    name: "clean-slate",
    label: "Clean Slate",
    preview: "#475569",
    colors: ["#475569", "#64748b", "#94a3b8", "#cbd5e1", "#f8fafc"],
    tokens: {
      light: {
        "--background": "oklch(0.95 0.01 250)",
        "--foreground": "oklch(0.2 0.04 260)",
        "--card": "oklch(0.965 0.007 250)",
        "--card-foreground": "oklch(0.2 0.04 260)",
        "--popover": "oklch(0.965 0.007 250)",
        "--popover-foreground": "oklch(0.2 0.04 260)",
        "--primary": "oklch(0.446 0.043 257.281)",
        "--primary-foreground": "oklch(0.99 0.002 250)",
        "--secondary": "oklch(0.9 0.014 250)",
        "--secondary-foreground": "oklch(0.3 0.04 260)",
        "--muted": "oklch(0.91 0.011 250)",
        "--muted-foreground": "oklch(0.554 0.046 257.417)",
        "--accent": "oklch(0.9 0.014 250)",
        "--accent-foreground": "oklch(0.3 0.04 260)",
        "--destructive": "oklch(0.577 0.245 27.325)",
        "--border": "oklch(0.86 0.016 250)",
        "--input": "oklch(0.86 0.016 250)",
        "--ring": "oklch(0.446 0.043 257.281)",
        "--chart-1": "oklch(0.446 0.043 257.281)",
        "--chart-2": "oklch(0.696 0.17 162.48)",
        "--chart-3": "oklch(0.585 0.22 3.717)",
        "--chart-4": "oklch(0.769 0.172 70.67)",
        "--chart-5": "oklch(0.627 0.265 303.9)"
      },
      dark: {
        "--background": "oklch(0.13 0.02 260)",
        "--foreground": "oklch(0.93 0.008 250)",
        "--card": "oklch(0.16 0.02 258)",
        "--card-foreground": "oklch(0.93 0.008 250)",
        "--popover": "oklch(0.18 0.025 260)",
        "--popover-foreground": "oklch(0.93 0.008 250)",
        "--primary": "oklch(0.869 0.022 252.894)",
        "--primary-foreground": "oklch(0.13 0.02 260)",
        "--secondary": "oklch(0.24 0.02 258)",
        "--secondary-foreground": "oklch(0.93 0.008 250)",
        "--muted": "oklch(0.24 0.02 258)",
        "--muted-foreground": "oklch(0.704 0.04 256.788)",
        "--accent": "oklch(0.24 0.02 258)",
        "--accent-foreground": "oklch(0.93 0.008 250)",
        "--destructive": "oklch(0.704 0.191 22.216)",
        "--border": "oklch(1 0 0 / 10%)",
        "--input": "oklch(1 0 0 / 15%)",
        "--ring": "oklch(0.869 0.022 252.894)",
        "--chart-1": "oklch(0.869 0.022 252.894)",
        "--chart-2": "oklch(0.696 0.17 162.48)",
        "--chart-3": "oklch(0.645 0.246 16.439)",
        "--chart-4": "oklch(0.769 0.188 70.08)",
        "--chart-5": "oklch(0.627 0.265 303.9)"
      }
    }
  },
  {
    name: "cosmic-night",
    label: "Cosmic Night",
    preview: "#6366f1",
    colors: ["#6366f1", "#818cf8", "#a78bfa", "#c7d2fe", "#0f0524"],
    tokens: {
      light: {
        "--background": "oklch(0.93 0.022 275)",
        "--foreground": "oklch(0.15 0.05 275)",
        "--card": "oklch(0.95 0.016 275)",
        "--card-foreground": "oklch(0.15 0.05 275)",
        "--popover": "oklch(0.95 0.016 275)",
        "--popover-foreground": "oklch(0.15 0.05 275)",
        "--primary": "oklch(0.55 0.24 278)",
        "--primary-foreground": "oklch(0.98 0.005 275)",
        "--secondary": "oklch(0.88 0.032 275)",
        "--secondary-foreground": "oklch(0.25 0.05 275)",
        "--muted": "oklch(0.89 0.026 275)",
        "--muted-foreground": "oklch(0.5 0.04 275)",
        "--accent": "oklch(0.87 0.038 275)",
        "--accent-foreground": "oklch(0.25 0.05 275)",
        "--destructive": "oklch(0.577 0.245 27.325)",
        "--border": "oklch(0.84 0.03 275)",
        "--input": "oklch(0.84 0.03 275)",
        "--ring": "oklch(0.55 0.24 278)",
        "--chart-1": "oklch(0.55 0.24 278)",
        "--chart-2": "oklch(0.627 0.265 303.9)",
        "--chart-3": "oklch(0.696 0.17 162.48)",
        "--chart-4": "oklch(0.769 0.172 70.67)",
        "--chart-5": "oklch(0.645 0.246 16.439)"
      },
      dark: {
        "--background": "oklch(0.1 0.045 275)",
        "--foreground": "oklch(0.93 0.01 275)",
        "--card": "oklch(0.13 0.045 273)",
        "--card-foreground": "oklch(0.93 0.01 275)",
        "--popover": "oklch(0.15 0.05 275)",
        "--popover-foreground": "oklch(0.93 0.01 275)",
        "--primary": "oklch(0.68 0.2 278)",
        "--primary-foreground": "oklch(0.1 0.045 275)",
        "--secondary": "oklch(0.2 0.04 273)",
        "--secondary-foreground": "oklch(0.93 0.01 275)",
        "--muted": "oklch(0.2 0.04 273)",
        "--muted-foreground": "oklch(0.65 0.04 275)",
        "--accent": "oklch(0.2 0.04 273)",
        "--accent-foreground": "oklch(0.93 0.01 275)",
        "--destructive": "oklch(0.704 0.191 22.216)",
        "--border": "oklch(1 0 0 / 8%)",
        "--input": "oklch(1 0 0 / 12%)",
        "--ring": "oklch(0.68 0.2 278)",
        "--chart-1": "oklch(0.68 0.2 278)",
        "--chart-2": "oklch(0.627 0.265 303.9)",
        "--chart-3": "oklch(0.696 0.17 162.48)",
        "--chart-4": "oklch(0.769 0.188 70.08)",
        "--chart-5": "oklch(0.645 0.246 16.439)"
      }
    }
  },
  {
    name: "cyberpunk",
    label: "Cyberpunk",
    preview: "#00ff88",
    colors: ["#00ff88", "#ff0080", "#00d4ff", "#ffff00", "#0a0a0a"],
    tokens: {
      light: {
        "--background": "oklch(0.93 0.015 160)",
        "--foreground": "oklch(0.12 0.02 180)",
        "--card": "oklch(0.945 0.012 160)",
        "--card-foreground": "oklch(0.12 0.02 180)",
        "--popover": "oklch(0.945 0.012 160)",
        "--popover-foreground": "oklch(0.12 0.02 180)",
        "--primary": "oklch(0.62 0.22 160)",
        "--primary-foreground": "oklch(0.12 0.02 180)",
        "--secondary": "oklch(0.88 0.025 160)",
        "--secondary-foreground": "oklch(0.2 0.02 180)",
        "--muted": "oklch(0.89 0.02 160)",
        "--muted-foreground": "oklch(0.45 0.03 180)",
        "--accent": "oklch(0.87 0.04 320)",
        "--accent-foreground": "oklch(0.2 0.03 320)",
        "--destructive": "oklch(0.65 0.28 340)",
        "--border": "oklch(0.84 0.025 160)",
        "--input": "oklch(0.84 0.025 160)",
        "--ring": "oklch(0.62 0.22 160)",
        "--chart-1": "oklch(0.87 0.3 155)",
        "--chart-2": "oklch(0.65 0.28 340)",
        "--chart-3": "oklch(0.75 0.17 220)",
        "--chart-4": "oklch(0.9 0.22 105)",
        "--chart-5": "oklch(0.627 0.265 303.9)"
      },
      dark: {
        "--background": "oklch(0.09 0.005 0)",
        "--foreground": "oklch(0.92 0.01 180)",
        "--card": "oklch(0.12 0.008 270)",
        "--card-foreground": "oklch(0.92 0.01 180)",
        "--popover": "oklch(0.14 0.01 270)",
        "--popover-foreground": "oklch(0.92 0.01 180)",
        "--primary": "oklch(0.87 0.3 155)",
        "--primary-foreground": "oklch(0.09 0.005 0)",
        "--secondary": "oklch(0.18 0.01 270)",
        "--secondary-foreground": "oklch(0.92 0.01 180)",
        "--muted": "oklch(0.18 0.01 270)",
        "--muted-foreground": "oklch(0.6 0.02 180)",
        "--accent": "oklch(0.18 0.015 320)",
        "--accent-foreground": "oklch(0.87 0.3 155)",
        "--destructive": "oklch(0.72 0.26 340)",
        "--border": "oklch(0.87 0.3 155 / 15%)",
        "--input": "oklch(0.87 0.3 155 / 20%)",
        "--ring": "oklch(0.87 0.3 155)",
        "--chart-1": "oklch(0.87 0.3 155)",
        "--chart-2": "oklch(0.72 0.26 340)",
        "--chart-3": "oklch(0.75 0.17 220)",
        "--chart-4": "oklch(0.9 0.22 105)",
        "--chart-5": "oklch(0.627 0.265 303.9)"
      }
    }
  },
  {
    name: "darkmatter",
    label: "Darkmatter",
    preview: "#525252",
    colors: ["#404040", "#525252", "#737373", "#a3a3a3", "#0a0a0a"],
    tokens: {
      light: {
        "--background": "oklch(0.94 0.004 286)",
        "--foreground": "oklch(0.145 0.005 285)",
        "--card": "oklch(0.955 0.003 286)",
        "--card-foreground": "oklch(0.145 0.005 285)",
        "--popover": "oklch(0.955 0.003 286)",
        "--popover-foreground": "oklch(0.145 0.005 285)",
        "--primary": "oklch(0.27 0.006 286)",
        "--primary-foreground": "oklch(0.985 0 0)",
        "--secondary": "oklch(0.89 0.005 286)",
        "--secondary-foreground": "oklch(0.27 0.006 286)",
        "--muted": "oklch(0.9 0.004 286)",
        "--muted-foreground": "oklch(0.55 0.013 286)",
        "--accent": "oklch(0.88 0.006 286)",
        "--accent-foreground": "oklch(0.27 0.006 286)",
        "--destructive": "oklch(0.577 0.245 27.325)",
        "--border": "oklch(0.85 0.007 286)",
        "--input": "oklch(0.85 0.007 286)",
        "--ring": "oklch(0.55 0.013 286)",
        "--chart-1": "oklch(0.37 0.013 286)",
        "--chart-2": "oklch(0.55 0.013 286)",
        "--chart-3": "oklch(0.705 0.015 286)",
        "--chart-4": "oklch(0.445 0.012 286)",
        "--chart-5": "oklch(0.63 0.014 286)"
      },
      dark: {
        "--background": "oklch(0.1 0.003 286)",
        "--foreground": "oklch(0.92 0.004 286)",
        "--card": "oklch(0.13 0.004 286)",
        "--card-foreground": "oklch(0.92 0.004 286)",
        "--popover": "oklch(0.15 0.004 286)",
        "--popover-foreground": "oklch(0.92 0.004 286)",
        "--primary": "oklch(0.87 0.006 286)",
        "--primary-foreground": "oklch(0.1 0.003 286)",
        "--secondary": "oklch(0.21 0.005 286)",
        "--secondary-foreground": "oklch(0.92 0.004 286)",
        "--muted": "oklch(0.21 0.005 286)",
        "--muted-foreground": "oklch(0.6 0.01 286)",
        "--accent": "oklch(0.21 0.005 286)",
        "--accent-foreground": "oklch(0.92 0.004 286)",
        "--destructive": "oklch(0.704 0.191 22.216)",
        "--border": "oklch(1 0 0 / 8%)",
        "--input": "oklch(1 0 0 / 12%)",
        "--ring": "oklch(0.6 0.01 286)",
        "--chart-1": "oklch(0.5 0.01 286)",
        "--chart-2": "oklch(0.65 0.012 286)",
        "--chart-3": "oklch(0.8 0.008 286)",
        "--chart-4": "oklch(0.55 0.011 286)",
        "--chart-5": "oklch(0.72 0.01 286)"
      }
    }
  },
  {
    name: "doom-64",
    label: "Doom 64",
    preview: "#dc2626",
    colors: ["#dc2626", "#16a34a", "#ca8a04", "#71717a", "#1a0f0f"],
    tokens: {
      light: {
        "--background": "oklch(0.94 0.016 25)",
        "--foreground": "oklch(0.18 0.02 20)",
        "--card": "oklch(0.955 0.012 25)",
        "--card-foreground": "oklch(0.18 0.02 20)",
        "--popover": "oklch(0.955 0.012 25)",
        "--popover-foreground": "oklch(0.18 0.02 20)",
        "--primary": "oklch(0.577 0.245 27.325)",
        "--primary-foreground": "oklch(0.97 0.005 25)",
        "--secondary": "oklch(0.89 0.022 25)",
        "--secondary-foreground": "oklch(0.3 0.02 20)",
        "--muted": "oklch(0.9 0.018 25)",
        "--muted-foreground": "oklch(0.5 0.02 20)",
        "--accent": "oklch(0.88 0.025 25)",
        "--accent-foreground": "oklch(0.3 0.02 20)",
        "--destructive": "oklch(0.577 0.245 27.325)",
        "--border": "oklch(0.85 0.025 25)",
        "--input": "oklch(0.85 0.025 25)",
        "--ring": "oklch(0.577 0.245 27.325)",
        "--chart-1": "oklch(0.577 0.245 27.325)",
        "--chart-2": "oklch(0.527 0.154 150.069)",
        "--chart-3": "oklch(0.705 0.15 65)",
        "--chart-4": "oklch(0.55 0.013 286)",
        "--chart-5": "oklch(0.546 0.245 262.881)"
      },
      dark: {
        "--background": "oklch(0.12 0.015 20)",
        "--foreground": "oklch(0.88 0.01 25)",
        "--card": "oklch(0.15 0.018 18)",
        "--card-foreground": "oklch(0.88 0.01 25)",
        "--popover": "oklch(0.17 0.02 20)",
        "--popover-foreground": "oklch(0.88 0.01 25)",
        "--primary": "oklch(0.637 0.237 25.331)",
        "--primary-foreground": "oklch(0.12 0.015 20)",
        "--secondary": "oklch(0.22 0.018 18)",
        "--secondary-foreground": "oklch(0.88 0.01 25)",
        "--muted": "oklch(0.22 0.018 18)",
        "--muted-foreground": "oklch(0.6 0.02 20)",
        "--accent": "oklch(0.22 0.018 18)",
        "--accent-foreground": "oklch(0.88 0.01 25)",
        "--destructive": "oklch(0.704 0.191 22.216)",
        "--border": "oklch(0.637 0.237 25.331 / 15%)",
        "--input": "oklch(0.637 0.237 25.331 / 20%)",
        "--ring": "oklch(0.637 0.237 25.331)",
        "--chart-1": "oklch(0.637 0.237 25.331)",
        "--chart-2": "oklch(0.696 0.17 162.48)",
        "--chart-3": "oklch(0.769 0.172 70.67)",
        "--chart-4": "oklch(0.6 0.01 286)",
        "--chart-5": "oklch(0.623 0.214 259.815)"
      }
    }
  },
  {
    name: "elegant-luxury",
    label: "Elegant Luxury",
    preview: "#d4a853",
    colors: ["#d4a853", "#b8960c", "#a3a3a3", "#e5e5e5", "#0c0a09"],
    tokens: {
      light: {
        "--background": "oklch(0.96 0.018 80)",
        "--foreground": "oklch(0.15 0.01 60)",
        "--card": "oklch(0.97 0.013 80)",
        "--card-foreground": "oklch(0.15 0.01 60)",
        "--popover": "oklch(0.97 0.013 80)",
        "--popover-foreground": "oklch(0.15 0.01 60)",
        "--primary": "oklch(0.65 0.13 80)",
        "--primary-foreground": "oklch(0.15 0.01 60)",
        "--secondary": "oklch(0.91 0.022 80)",
        "--secondary-foreground": "oklch(0.25 0.01 60)",
        "--muted": "oklch(0.92 0.018 80)",
        "--muted-foreground": "oklch(0.5 0.015 70)",
        "--accent": "oklch(0.9 0.026 80)",
        "--accent-foreground": "oklch(0.25 0.01 60)",
        "--destructive": "oklch(0.577 0.245 27.325)",
        "--border": "oklch(0.87 0.022 80)",
        "--input": "oklch(0.87 0.022 80)",
        "--ring": "oklch(0.65 0.13 80)",
        "--chart-1": "oklch(0.65 0.13 80)",
        "--chart-2": "oklch(0.55 0.013 286)",
        "--chart-3": "oklch(0.696 0.17 162.48)",
        "--chart-4": "oklch(0.585 0.22 3.717)",
        "--chart-5": "oklch(0.546 0.245 262.881)"
      },
      dark: {
        "--background": "oklch(0.1 0.008 60)",
        "--foreground": "oklch(0.92 0.008 80)",
        "--card": "oklch(0.13 0.008 58)",
        "--card-foreground": "oklch(0.92 0.008 80)",
        "--popover": "oklch(0.15 0.01 60)",
        "--popover-foreground": "oklch(0.92 0.008 80)",
        "--primary": "oklch(0.78 0.14 80)",
        "--primary-foreground": "oklch(0.1 0.008 60)",
        "--secondary": "oklch(0.2 0.008 58)",
        "--secondary-foreground": "oklch(0.92 0.008 80)",
        "--muted": "oklch(0.2 0.008 58)",
        "--muted-foreground": "oklch(0.6 0.015 70)",
        "--accent": "oklch(0.2 0.008 58)",
        "--accent-foreground": "oklch(0.92 0.008 80)",
        "--destructive": "oklch(0.704 0.191 22.216)",
        "--border": "oklch(0.78 0.14 80 / 12%)",
        "--input": "oklch(0.78 0.14 80 / 18%)",
        "--ring": "oklch(0.78 0.14 80)",
        "--chart-1": "oklch(0.78 0.14 80)",
        "--chart-2": "oklch(0.6 0.01 286)",
        "--chart-3": "oklch(0.696 0.17 162.48)",
        "--chart-4": "oklch(0.645 0.246 16.439)",
        "--chart-5": "oklch(0.623 0.214 259.815)"
      }
    }
  },
  {
    name: "frost",
    label: "Frost",
    preview: "#0ea5e9",
    colors: ["#0ea5e9", "#38bdf8", "#7dd3fc", "#bae6fd", "#e0f2fe"],
    tokens: {
      light: {
        "--background": "oklch(0.94 0.025 220)",
        "--foreground": "oklch(0.18 0.04 230)",
        "--card": "oklch(0.955 0.019 220)",
        "--card-foreground": "oklch(0.18 0.04 230)",
        "--popover": "oklch(0.955 0.019 220)",
        "--popover-foreground": "oklch(0.18 0.04 230)",
        "--primary": "oklch(0.62 0.16 230)",
        "--primary-foreground": "oklch(0.99 0.005 220)",
        "--secondary": "oklch(0.89 0.035 220)",
        "--secondary-foreground": "oklch(0.28 0.04 230)",
        "--muted": "oklch(0.9 0.028 220)",
        "--muted-foreground": "oklch(0.5 0.03 230)",
        "--accent": "oklch(0.88 0.04 220)",
        "--accent-foreground": "oklch(0.28 0.04 230)",
        "--destructive": "oklch(0.577 0.245 27.325)",
        "--border": "oklch(0.85 0.035 220)",
        "--input": "oklch(0.85 0.035 220)",
        "--ring": "oklch(0.62 0.16 230)",
        "--chart-1": "oklch(0.62 0.16 230)",
        "--chart-2": "oklch(0.696 0.17 162.48)",
        "--chart-3": "oklch(0.627 0.265 303.9)",
        "--chart-4": "oklch(0.769 0.172 70.67)",
        "--chart-5": "oklch(0.585 0.22 3.717)"
      },
      dark: {
        "--background": "oklch(0.13 0.025 230)",
        "--foreground": "oklch(0.94 0.01 220)",
        "--card": "oklch(0.16 0.025 228)",
        "--card-foreground": "oklch(0.94 0.01 220)",
        "--popover": "oklch(0.18 0.03 230)",
        "--popover-foreground": "oklch(0.94 0.01 220)",
        "--primary": "oklch(0.75 0.15 225)",
        "--primary-foreground": "oklch(0.13 0.025 230)",
        "--secondary": "oklch(0.23 0.025 228)",
        "--secondary-foreground": "oklch(0.94 0.01 220)",
        "--muted": "oklch(0.23 0.025 228)",
        "--muted-foreground": "oklch(0.65 0.03 225)",
        "--accent": "oklch(0.23 0.025 228)",
        "--accent-foreground": "oklch(0.94 0.01 220)",
        "--destructive": "oklch(0.704 0.191 22.216)",
        "--border": "oklch(1 0 0 / 10%)",
        "--input": "oklch(1 0 0 / 15%)",
        "--ring": "oklch(0.75 0.15 225)",
        "--chart-1": "oklch(0.75 0.15 225)",
        "--chart-2": "oklch(0.696 0.17 162.48)",
        "--chart-3": "oklch(0.627 0.265 303.9)",
        "--chart-4": "oklch(0.769 0.188 70.08)",
        "--chart-5": "oklch(0.645 0.246 16.439)"
      }
    }
  },
  {
    name: "horizon",
    label: "Horizon",
    preview: "#f43f5e",
    colors: ["#f43f5e", "#fb923c", "#fbbf24", "#a78bfa", "#0f172a"],
    tokens: {
      light: {
        "--background": "oklch(0.95 0.022 20)",
        "--foreground": "oklch(0.18 0.03 30)",
        "--card": "oklch(0.965 0.016 20)",
        "--card-foreground": "oklch(0.18 0.03 30)",
        "--popover": "oklch(0.965 0.016 20)",
        "--popover-foreground": "oklch(0.18 0.03 30)",
        "--primary": "oklch(0.585 0.22 3.717)",
        "--primary-foreground": "oklch(0.99 0.005 20)",
        "--secondary": "oklch(0.9 0.032 30)",
        "--secondary-foreground": "oklch(0.28 0.03 30)",
        "--muted": "oklch(0.91 0.026 30)",
        "--muted-foreground": "oklch(0.5 0.03 30)",
        "--accent": "oklch(0.89 0.038 50)",
        "--accent-foreground": "oklch(0.28 0.03 50)",
        "--destructive": "oklch(0.577 0.245 27.325)",
        "--border": "oklch(0.86 0.028 30)",
        "--input": "oklch(0.86 0.028 30)",
        "--ring": "oklch(0.585 0.22 3.717)",
        "--chart-1": "oklch(0.645 0.246 16.439)",
        "--chart-2": "oklch(0.705 0.213 47.604)",
        "--chart-3": "oklch(0.769 0.172 70.67)",
        "--chart-4": "oklch(0.627 0.265 303.9)",
        "--chart-5": "oklch(0.546 0.245 262.881)"
      },
      dark: {
        "--background": "oklch(0.12 0.025 260)",
        "--foreground": "oklch(0.94 0.01 30)",
        "--card": "oklch(0.15 0.025 258)",
        "--card-foreground": "oklch(0.94 0.01 30)",
        "--popover": "oklch(0.17 0.03 260)",
        "--popover-foreground": "oklch(0.94 0.01 30)",
        "--primary": "oklch(0.65 0.24 5)",
        "--primary-foreground": "oklch(0.12 0.025 260)",
        "--secondary": "oklch(0.22 0.025 258)",
        "--secondary-foreground": "oklch(0.94 0.01 30)",
        "--muted": "oklch(0.22 0.025 258)",
        "--muted-foreground": "oklch(0.65 0.03 30)",
        "--accent": "oklch(0.22 0.03 50)",
        "--accent-foreground": "oklch(0.94 0.01 30)",
        "--destructive": "oklch(0.704 0.191 22.216)",
        "--border": "oklch(1 0 0 / 10%)",
        "--input": "oklch(1 0 0 / 15%)",
        "--ring": "oklch(0.65 0.24 5)",
        "--chart-1": "oklch(0.645 0.246 16.439)",
        "--chart-2": "oklch(0.769 0.188 70.08)",
        "--chart-3": "oklch(0.769 0.172 70.67)",
        "--chart-4": "oklch(0.627 0.265 303.9)",
        "--chart-5": "oklch(0.623 0.214 259.815)"
      }
    }
  },
  {
    name: "lavender-dreams",
    label: "Lavender Dreams",
    preview: "#9333ea",
    colors: ["#9333ea", "#a855f7", "#c084fc", "#e9d5ff", "#faf5ff"],
    tokens: {
      light: {
        "--background": "oklch(0.94 0.022 300)",
        "--foreground": "oklch(0.18 0.04 300)",
        "--card": "oklch(0.955 0.016 300)",
        "--card-foreground": "oklch(0.18 0.04 300)",
        "--popover": "oklch(0.955 0.016 300)",
        "--popover-foreground": "oklch(0.18 0.04 300)",
        "--primary": "oklch(0.53 0.25 305)",
        "--primary-foreground": "oklch(0.99 0.005 300)",
        "--secondary": "oklch(0.89 0.034 300)",
        "--secondary-foreground": "oklch(0.28 0.04 300)",
        "--muted": "oklch(0.9 0.028 300)",
        "--muted-foreground": "oklch(0.5 0.03 300)",
        "--accent": "oklch(0.88 0.042 300)",
        "--accent-foreground": "oklch(0.28 0.04 300)",
        "--destructive": "oklch(0.577 0.245 27.325)",
        "--border": "oklch(0.85 0.032 300)",
        "--input": "oklch(0.85 0.032 300)",
        "--ring": "oklch(0.53 0.25 305)",
        "--chart-1": "oklch(0.53 0.25 305)",
        "--chart-2": "oklch(0.696 0.17 162.48)",
        "--chart-3": "oklch(0.585 0.22 3.717)",
        "--chart-4": "oklch(0.769 0.172 70.67)",
        "--chart-5": "oklch(0.546 0.245 262.881)"
      },
      dark: {
        "--background": "oklch(0.13 0.03 300)",
        "--foreground": "oklch(0.94 0.01 300)",
        "--card": "oklch(0.16 0.03 298)",
        "--card-foreground": "oklch(0.94 0.01 300)",
        "--popover": "oklch(0.18 0.035 300)",
        "--popover-foreground": "oklch(0.94 0.01 300)",
        "--primary": "oklch(0.7 0.22 300)",
        "--primary-foreground": "oklch(0.13 0.03 300)",
        "--secondary": "oklch(0.23 0.03 298)",
        "--secondary-foreground": "oklch(0.94 0.01 300)",
        "--muted": "oklch(0.23 0.03 298)",
        "--muted-foreground": "oklch(0.65 0.03 300)",
        "--accent": "oklch(0.23 0.03 298)",
        "--accent-foreground": "oklch(0.94 0.01 300)",
        "--destructive": "oklch(0.704 0.191 22.216)",
        "--border": "oklch(1 0 0 / 10%)",
        "--input": "oklch(1 0 0 / 15%)",
        "--ring": "oklch(0.7 0.22 300)",
        "--chart-1": "oklch(0.7 0.22 300)",
        "--chart-2": "oklch(0.696 0.17 162.48)",
        "--chart-3": "oklch(0.645 0.246 16.439)",
        "--chart-4": "oklch(0.769 0.188 70.08)",
        "--chart-5": "oklch(0.623 0.214 259.815)"
      }
    }
  },
  {
    name: "midnight",
    label: "Midnight",
    preview: "#3b82f6",
    colors: ["#3b82f6", "#60a5fa", "#93c5fd", "#bfdbfe", "#020617"],
    tokens: {
      light: {
        "--background": "oklch(0.93 0.02 260)",
        "--foreground": "oklch(0.15 0.05 260)",
        "--card": "oklch(0.945 0.015 260)",
        "--card-foreground": "oklch(0.15 0.05 260)",
        "--popover": "oklch(0.945 0.015 260)",
        "--popover-foreground": "oklch(0.15 0.05 260)",
        "--primary": "oklch(0.546 0.245 262.881)",
        "--primary-foreground": "oklch(0.99 0.004 260)",
        "--secondary": "oklch(0.88 0.03 260)",
        "--secondary-foreground": "oklch(0.25 0.05 260)",
        "--muted": "oklch(0.89 0.024 260)",
        "--muted-foreground": "oklch(0.5 0.04 260)",
        "--accent": "oklch(0.87 0.034 260)",
        "--accent-foreground": "oklch(0.25 0.05 260)",
        "--destructive": "oklch(0.577 0.245 27.325)",
        "--border": "oklch(0.84 0.028 260)",
        "--input": "oklch(0.84 0.028 260)",
        "--ring": "oklch(0.546 0.245 262.881)",
        "--chart-1": "oklch(0.546 0.245 262.881)",
        "--chart-2": "oklch(0.696 0.17 162.48)",
        "--chart-3": "oklch(0.585 0.22 3.717)",
        "--chart-4": "oklch(0.769 0.172 70.67)",
        "--chart-5": "oklch(0.627 0.265 303.9)"
      },
      dark: {
        "--background": "oklch(0.08 0.04 260)",
        "--foreground": "oklch(0.93 0.008 260)",
        "--card": "oklch(0.11 0.04 258)",
        "--card-foreground": "oklch(0.93 0.008 260)",
        "--popover": "oklch(0.13 0.045 260)",
        "--popover-foreground": "oklch(0.93 0.008 260)",
        "--primary": "oklch(0.623 0.214 259.815)",
        "--primary-foreground": "oklch(0.08 0.04 260)",
        "--secondary": "oklch(0.18 0.04 258)",
        "--secondary-foreground": "oklch(0.93 0.008 260)",
        "--muted": "oklch(0.18 0.04 258)",
        "--muted-foreground": "oklch(0.65 0.03 260)",
        "--accent": "oklch(0.18 0.04 258)",
        "--accent-foreground": "oklch(0.93 0.008 260)",
        "--destructive": "oklch(0.704 0.191 22.216)",
        "--border": "oklch(1 0 0 / 8%)",
        "--input": "oklch(1 0 0 / 12%)",
        "--ring": "oklch(0.623 0.214 259.815)",
        "--chart-1": "oklch(0.623 0.214 259.815)",
        "--chart-2": "oklch(0.696 0.17 162.48)",
        "--chart-3": "oklch(0.645 0.246 16.439)",
        "--chart-4": "oklch(0.769 0.188 70.08)",
        "--chart-5": "oklch(0.627 0.265 303.9)"
      }
    }
  },
  {
    name: "nord",
    label: "Nord",
    preview: "#88c0d0",
    colors: ["#88c0d0", "#81a1c1", "#5e81ac", "#b48ead", "#2e3440"],
    tokens: {
      light: {
        "--background": "oklch(0.94 0.018 230)",
        "--foreground": "oklch(0.25 0.03 230)",
        "--card": "oklch(0.955 0.013 230)",
        "--card-foreground": "oklch(0.25 0.03 230)",
        "--popover": "oklch(0.955 0.013 230)",
        "--popover-foreground": "oklch(0.25 0.03 230)",
        "--primary": "oklch(0.55 0.09 215)",
        "--primary-foreground": "oklch(0.97 0.005 230)",
        "--secondary": "oklch(0.89 0.025 230)",
        "--secondary-foreground": "oklch(0.32 0.03 230)",
        "--muted": "oklch(0.9 0.02 230)",
        "--muted-foreground": "oklch(0.5 0.025 230)",
        "--accent": "oklch(0.88 0.028 230)",
        "--accent-foreground": "oklch(0.32 0.03 230)",
        "--destructive": "oklch(0.577 0.245 27.325)",
        "--border": "oklch(0.85 0.022 230)",
        "--input": "oklch(0.85 0.022 230)",
        "--ring": "oklch(0.55 0.09 215)",
        "--chart-1": "oklch(0.73 0.08 210)",
        "--chart-2": "oklch(0.63 0.07 240)",
        "--chart-3": "oklch(0.55 0.09 255)",
        "--chart-4": "oklch(0.68 0.1 330)",
        "--chart-5": "oklch(0.72 0.12 100)"
      },
      dark: {
        "--background": "oklch(0.22 0.02 230)",
        "--foreground": "oklch(0.92 0.008 225)",
        "--card": "oklch(0.25 0.02 228)",
        "--card-foreground": "oklch(0.92 0.008 225)",
        "--popover": "oklch(0.27 0.022 230)",
        "--popover-foreground": "oklch(0.92 0.008 225)",
        "--primary": "oklch(0.73 0.08 210)",
        "--primary-foreground": "oklch(0.22 0.02 230)",
        "--secondary": "oklch(0.3 0.02 228)",
        "--secondary-foreground": "oklch(0.92 0.008 225)",
        "--muted": "oklch(0.3 0.02 228)",
        "--muted-foreground": "oklch(0.65 0.025 230)",
        "--accent": "oklch(0.3 0.02 228)",
        "--accent-foreground": "oklch(0.92 0.008 225)",
        "--destructive": "oklch(0.704 0.191 22.216)",
        "--border": "oklch(0.35 0.018 228)",
        "--input": "oklch(0.35 0.018 228)",
        "--ring": "oklch(0.73 0.08 210)",
        "--chart-1": "oklch(0.73 0.08 210)",
        "--chart-2": "oklch(0.63 0.07 240)",
        "--chart-3": "oklch(0.55 0.09 255)",
        "--chart-4": "oklch(0.68 0.1 330)",
        "--chart-5": "oklch(0.72 0.12 100)"
      }
    }
  },
  {
    name: "sunset-vibes",
    label: "Sunset Vibes",
    preview: "#ea580c",
    colors: ["#ea580c", "#f97316", "#fb923c", "#fdba74", "#431407"],
    tokens: {
      light: {
        "--background": "oklch(0.95 0.028 40)",
        "--foreground": "oklch(0.18 0.03 35)",
        "--card": "oklch(0.965 0.022 40)",
        "--card-foreground": "oklch(0.18 0.03 35)",
        "--popover": "oklch(0.965 0.022 40)",
        "--popover-foreground": "oklch(0.18 0.03 35)",
        "--primary": "oklch(0.58 0.22 38)",
        "--primary-foreground": "oklch(0.99 0.005 40)",
        "--secondary": "oklch(0.9 0.038 40)",
        "--secondary-foreground": "oklch(0.28 0.03 35)",
        "--muted": "oklch(0.91 0.032 40)",
        "--muted-foreground": "oklch(0.5 0.03 38)",
        "--accent": "oklch(0.89 0.042 40)",
        "--accent-foreground": "oklch(0.28 0.03 35)",
        "--destructive": "oklch(0.577 0.245 27.325)",
        "--border": "oklch(0.86 0.036 40)",
        "--input": "oklch(0.86 0.036 40)",
        "--ring": "oklch(0.58 0.22 38)",
        "--chart-1": "oklch(0.58 0.22 38)",
        "--chart-2": "oklch(0.705 0.213 47.604)",
        "--chart-3": "oklch(0.769 0.172 70.67)",
        "--chart-4": "oklch(0.585 0.22 3.717)",
        "--chart-5": "oklch(0.546 0.245 262.881)"
      },
      dark: {
        "--background": "oklch(0.12 0.02 35)",
        "--foreground": "oklch(0.93 0.012 40)",
        "--card": "oklch(0.15 0.022 33)",
        "--card-foreground": "oklch(0.93 0.012 40)",
        "--popover": "oklch(0.17 0.025 35)",
        "--popover-foreground": "oklch(0.93 0.012 40)",
        "--primary": "oklch(0.72 0.2 42)",
        "--primary-foreground": "oklch(0.12 0.02 35)",
        "--secondary": "oklch(0.22 0.022 33)",
        "--secondary-foreground": "oklch(0.93 0.012 40)",
        "--muted": "oklch(0.22 0.022 33)",
        "--muted-foreground": "oklch(0.62 0.03 38)",
        "--accent": "oklch(0.22 0.022 33)",
        "--accent-foreground": "oklch(0.93 0.012 40)",
        "--destructive": "oklch(0.704 0.191 22.216)",
        "--border": "oklch(1 0 0 / 10%)",
        "--input": "oklch(1 0 0 / 15%)",
        "--ring": "oklch(0.72 0.2 42)",
        "--chart-1": "oklch(0.72 0.2 42)",
        "--chart-2": "oklch(0.769 0.188 70.08)",
        "--chart-3": "oklch(0.769 0.172 70.67)",
        "--chart-4": "oklch(0.645 0.246 16.439)",
        "--chart-5": "oklch(0.623 0.214 259.815)"
      }
    }
  },
  {
    name: "twilight",
    label: "Twilight",
    preview: "#a855f7",
    colors: ["#a855f7", "#c084fc", "#e879f9", "#7c3aed", "#1e1040"],
    tokens: {
      light: {
        "--background": "oklch(0.93 0.025 290)",
        "--foreground": "oklch(0.16 0.045 290)",
        "--card": "oklch(0.945 0.019 290)",
        "--card-foreground": "oklch(0.16 0.045 290)",
        "--popover": "oklch(0.945 0.019 290)",
        "--popover-foreground": "oklch(0.16 0.045 290)",
        "--primary": "oklch(0.6 0.25 295)",
        "--primary-foreground": "oklch(0.98 0.006 290)",
        "--secondary": "oklch(0.88 0.038 290)",
        "--secondary-foreground": "oklch(0.25 0.045 290)",
        "--muted": "oklch(0.89 0.032 290)",
        "--muted-foreground": "oklch(0.5 0.035 290)",
        "--accent": "oklch(0.87 0.045 300)",
        "--accent-foreground": "oklch(0.25 0.045 300)",
        "--destructive": "oklch(0.577 0.245 27.325)",
        "--border": "oklch(0.84 0.036 290)",
        "--input": "oklch(0.84 0.036 290)",
        "--ring": "oklch(0.6 0.25 295)",
        "--chart-1": "oklch(0.6 0.25 295)",
        "--chart-2": "oklch(0.667 0.295 322.15)",
        "--chart-3": "oklch(0.541 0.281 293.009)",
        "--chart-4": "oklch(0.769 0.172 70.67)",
        "--chart-5": "oklch(0.696 0.17 162.48)"
      },
      dark: {
        "--background": "oklch(0.11 0.04 290)",
        "--foreground": "oklch(0.93 0.01 290)",
        "--card": "oklch(0.14 0.04 288)",
        "--card-foreground": "oklch(0.93 0.01 290)",
        "--popover": "oklch(0.16 0.045 290)",
        "--popover-foreground": "oklch(0.93 0.01 290)",
        "--primary": "oklch(0.72 0.2 295)",
        "--primary-foreground": "oklch(0.11 0.04 290)",
        "--secondary": "oklch(0.21 0.04 288)",
        "--secondary-foreground": "oklch(0.93 0.01 290)",
        "--muted": "oklch(0.21 0.04 288)",
        "--muted-foreground": "oklch(0.65 0.035 290)",
        "--accent": "oklch(0.21 0.04 310)",
        "--accent-foreground": "oklch(0.93 0.01 310)",
        "--destructive": "oklch(0.704 0.191 22.216)",
        "--border": "oklch(1 0 0 / 8%)",
        "--input": "oklch(1 0 0 / 12%)",
        "--ring": "oklch(0.72 0.2 295)",
        "--chart-1": "oklch(0.72 0.2 295)",
        "--chart-2": "oklch(0.72 0.25 322)",
        "--chart-3": "oklch(0.627 0.265 303.9)",
        "--chart-4": "oklch(0.769 0.188 70.08)",
        "--chart-5": "oklch(0.696 0.17 162.48)"
      }
    }
  }
];
var DEFAULT_COLOR_THEME = "zinc";
var ColorThemeContext = (0, import_react6.createContext)({
  colorTheme: DEFAULT_COLOR_THEME,
  setColorTheme: () => null,
  resetColorTheme: () => null,
  currentTheme: colorThemes[0]
});
var useColorTheme = () => {
  const context = (0, import_react6.useContext)(ColorThemeContext);
  if (!context)
    throw new Error("useColorTheme must be used within a ColorThemeProvider");
  return context;
};

// src/design-system/components/business/theme-selector.tsx
var import_jsx_runtime68 = require("react/jsx-runtime");
function ThemeSelector() {
  const { colorTheme, setColorTheme } = useColorTheme();
  const { theme, setTheme } = useTheme2();
  return /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)(Popover, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)(
      Button,
      {
        variant: "ghost",
        size: "icon",
        className: "relative size-8 shrink-0 scale-95 rounded-full",
        "aria-label": "Select color theme",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(import_lucide_react27.Palette, { className: "size-[1.2rem]" }),
          /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
            "span",
            {
              className: "absolute -top-0.5 -right-0.5 size-2.5 rounded-full ring-2 ring-background",
              style: {
                backgroundColor: colorThemes.find((t) => t.name === colorTheme)?.preview ?? "currentColor"
              }
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)(
      PopoverContent,
      {
        align: "end",
        className: "w-[280px] p-3",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)("div", { className: "mb-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("p", { className: "mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Appearance" }),
            /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("div", { className: "grid grid-cols-3 gap-1.5", children: [
              { value: "light", label: "Light" },
              { value: "dark", label: "Dark" },
              { value: "system", label: "System" }
            ].map((mode) => /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
              "button",
              {
                onClick: () => setTheme(mode.value),
                className: cn(
                  "flex items-center justify-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-all",
                  "hover:bg-accent hover:text-accent-foreground",
                  theme === mode.value ? "bg-primary text-primary-foreground shadow-sm" : "bg-muted/50 text-muted-foreground"
                ),
                children: mode.label
              },
              mode.value
            )) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(Separator, { className: "my-3" }),
          /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("p", { className: "mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Color Theme" }),
            /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("div", { className: "max-h-[280px] space-y-0.5 overflow-y-auto", children: colorThemes.map((ct) => /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)(
              "button",
              {
                onClick: () => setColorTheme(ct.name),
                className: cn(
                  "flex w-full items-center gap-2.5 rounded-md px-2 py-1.5 transition-all",
                  colorTheme === ct.name ? "bg-primary text-primary-foreground" : "hover:bg-accent"
                ),
                "aria-label": `Select ${ct.label} color theme`,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("div", { className: "flex gap-0.5", children: ct.colors.slice(0, 5).map((color, i) => /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
                    "span",
                    {
                      className: cn(
                        "size-2.5 rounded-full",
                        colorTheme === ct.name ? "ring-1 ring-primary-foreground/30" : "ring-1 ring-border/40"
                      ),
                      style: { backgroundColor: color }
                    },
                    i
                  )) }),
                  /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("span", { className: "text-xs font-medium", children: ct.label }),
                  colorTheme === ct.name && /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(import_lucide_react27.Check, { className: "ml-auto size-3.5", strokeWidth: 3 })
                ]
              },
              ct.name
            )) })
          ] })
        ]
      }
    )
  ] });
}

// src/design-system/components/business/select-dropdown.tsx
var import_lucide_react28 = require("lucide-react");
var import_jsx_runtime69 = require("react/jsx-runtime");
function SelectDropdown({
  defaultValue,
  onValueChange,
  isPending,
  items,
  placeholder,
  disabled,
  className = "",
  isControlled = false
}) {
  const defaultState = isControlled ? { value: defaultValue, onValueChange } : { defaultValue, onValueChange };
  return /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)(Select, { ...defaultState, children: [
    /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(SelectTrigger, { disabled, className: cn(className), children: /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(SelectValue, { placeholder: placeholder ?? "Select" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(SelectContent, { children: isPending ? /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(SelectItem, { disabled: true, value: "loading", className: "h-14", children: /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)("div", { className: "flex items-center justify-center gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(import_lucide_react28.Loader, { className: "h-5 w-5 animate-spin" }),
      "  ",
      "Loading..."
    ] }) }) : items?.map(({ label, value }) => /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(SelectItem, { value, children: label }, value)) })
  ] });
}

// src/design-system/components/business/long-text.tsx
var import_react7 = require("react");
var import_jsx_runtime70 = require("react/jsx-runtime");
function LongText({
  children,
  className = "",
  contentClassName = ""
}) {
  const ref = (0, import_react7.useRef)(null);
  const [isOverflown, setIsOverflown] = (0, import_react7.useState)(false);
  const refCallback = (node) => {
    ref.current = node;
    if (node && checkOverflow(node)) {
      queueMicrotask(() => setIsOverflown(true));
    }
  };
  if (!isOverflown)
    return /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("div", { ref: refCallback, className: cn("truncate", className), children });
  return /* @__PURE__ */ (0, import_jsx_runtime70.jsxs)(import_jsx_runtime70.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("div", { className: "hidden sm:block", children: /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(TooltipProvider, { delayDuration: 0, children: /* @__PURE__ */ (0, import_jsx_runtime70.jsxs)(Tooltip2, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("div", { ref: refCallback, className: cn("truncate", className), children }) }),
      /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(TooltipContent, { children: /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("p", { className: contentClassName, children }) })
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("div", { className: "sm:hidden", children: /* @__PURE__ */ (0, import_jsx_runtime70.jsxs)(Popover, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("div", { ref: refCallback, className: cn("truncate", className), children }) }),
      /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(PopoverContent, { className: cn("w-fit", contentClassName), children: /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("p", { children }) })
    ] }) })
  ] });
}
var checkOverflow = (textContainer) => {
  if (textContainer) {
    return textContainer.offsetHeight < textContainer.scrollHeight || textContainer.offsetWidth < textContainer.scrollWidth;
  }
  return false;
};

// src/design-system/components/business/search.tsx
var import_lucide_react31 = require("lucide-react");

// src/context/search-provider.tsx
var import_react9 = require("react");

// src/components/command-menu.tsx
var import_react8 = __toESM(require("react"));
var import_navigation = require("next/navigation");
var import_lucide_react30 = require("lucide-react");

// src/components/layout/data/sidebar-data.ts
var import_lucide_react29 = require("lucide-react");
var sidebarData = {
  user: {
    name: "satnaing",
    email: "satnaingdev@gmail.com",
    avatar: "/avatars/shadcn.jpg"
  },
  teams: [
    {
      name: "Amoga App",
      logo: import_lucide_react29.Command,
      plan: "Demo Company"
    }
  ],
  navGroups: [
    {
      title: "Menu",
      items: [
        {
          title: "Message",
          url: "/message",
          icon: import_lucide_react29.Mail
        },
        {
          title: "App Settings",
          url: "/app-settings",
          icon: import_lucide_react29.Settings
        },
        {
          title: "Design System",
          url: "/",
          icon: import_lucide_react29.Settings
        },
        {
          title: "Vouchers",
          url: "/vouchers",
          icon: import_lucide_react29.Ticket
        },
        {
          title: "AI Chat",
          url: "/ai_chat",
          icon: import_lucide_react29.Bot
        },
        {
          title: "AI Search",
          url: "/ai_search",
          icon: import_lucide_react29.SearchIcon
        },
        {
          title: "Chart Template",
          url: "/charttemplate",
          icon: import_lucide_react29.ChartArea
        },
        {
          title: "Map Template",
          url: "/map",
          icon: import_lucide_react29.Map
        },
        {
          title: "Route Doc",
          url: "/routedoc",
          icon: import_lucide_react29.Route
        },
        {
          title: "Link Maker",
          url: "/link-maker",
          icon: import_lucide_react29.Link
        }
      ]
    },
    {
      title: "Other",
      items: [
        {
          title: "Settings",
          icon: import_lucide_react29.Settings,
          items: [
            // Add settings pages here
          ]
        },
        {
          title: "Help Center",
          url: "/help-center",
          icon: import_lucide_react29.HelpCircle
        }
      ]
    }
  ]
};

// src/components/command-menu.tsx
var import_jsx_runtime71 = require("react/jsx-runtime");
function CommandMenu() {
  const router = (0, import_navigation.useRouter)();
  const { setTheme } = useTheme2();
  const { open, setOpen } = useSearch();
  const runCommand = import_react8.default.useCallback(
    (command) => {
      setOpen(false);
      command();
    },
    [setOpen]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)(CommandDialog, { modal: true, open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(CommandInput, { placeholder: "Type a command or search..." }),
    /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(CommandList, { children: /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)(ScrollArea, { type: "hover", className: "h-72 pe-1", children: [
      /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(CommandEmpty, { children: "No results found." }),
      sidebarData.navGroups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(CommandGroup, { heading: group.title, children: group.items.map((navItem, i) => {
        if (navItem.url)
          return /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)(
            CommandItem,
            {
              value: navItem.title,
              onSelect: () => {
                runCommand(() => router.push(navItem.url));
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("div", { className: "flex size-4 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(import_lucide_react30.ArrowRight, { className: "size-2 text-muted-foreground/80" }) }),
                navItem.title
              ]
            },
            `${navItem.url}-${i}`
          );
        return navItem.items?.map((subItem, i2) => /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)(
          CommandItem,
          {
            value: `${navItem.title}-${subItem.url}`,
            onSelect: () => {
              runCommand(() => router.push(subItem.url));
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("div", { className: "flex size-4 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(import_lucide_react30.ArrowRight, { className: "size-2 text-muted-foreground/80" }) }),
              navItem.title,
              " ",
              /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(import_lucide_react30.ChevronRight, {}),
              " ",
              subItem.title
            ]
          },
          `${navItem.title}-${subItem.url}-${i2}`
        ));
      }) }, group.title)),
      /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(CommandSeparator, {}),
      /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)(CommandGroup, { heading: "Theme", children: [
        /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)(CommandItem, { onSelect: () => runCommand(() => setTheme("light")), children: [
          /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(import_lucide_react30.Sun, {}),
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("span", { children: "Light" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)(CommandItem, { onSelect: () => runCommand(() => setTheme("dark")), children: [
          /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(import_lucide_react30.Moon, { className: "scale-90" }),
          /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("span", { children: "Dark" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)(CommandItem, { onSelect: () => runCommand(() => setTheme("system")), children: [
          /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(import_lucide_react30.Laptop, {}),
          /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("span", { children: "System" })
        ] })
      ] })
    ] }) })
  ] });
}

// src/context/search-provider.tsx
var import_jsx_runtime72 = require("react/jsx-runtime");
var SearchContext = (0, import_react9.createContext)(null);
function SearchProvider({ children }) {
  const [open, setOpen] = (0, import_react9.useState)(false);
  (0, import_react9.useEffect)(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open2) => !open2);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)(SearchContext, { value: { open, setOpen }, children: [
    children,
    /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(CommandMenu, {})
  ] });
}
var useSearch = () => {
  const searchContext = (0, import_react9.useContext)(SearchContext);
  if (!searchContext) {
    return {
      open: false,
      setOpen: () => {
      }
    };
  }
  return searchContext;
};

// src/design-system/components/business/search.tsx
var import_jsx_runtime73 = require("react/jsx-runtime");
function Search({
  className = "",
  placeholder = "Search",
  iconOnly = true,
  ...props
}) {
  const { setOpen } = useSearch();
  const openSearch = () => setOpen(true);
  return /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(
    Button,
    {
      ...props,
      variant: "ghost",
      size: "icon",
      className: cn("size-8 shrink-0", className),
      "aria-label": "Search",
      "aria-keyshortcuts": "Meta+K Control+K",
      onClick: openSearch,
      children: /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(import_lucide_react31.SearchIcon, { className: "size-5", "aria-hidden": "true" })
    }
  );
}

// src/design-system/components/business/stats-01.tsx
var import_jsx_runtime74 = require("react/jsx-runtime");
var data = [
  {
    name: "Profit",
    value: "$287,654.00",
    change: "+8.32%",
    changeType: "positive"
  },
  {
    name: "Late payments",
    value: "$9,435.00",
    change: "-12.64%",
    changeType: "negative"
  },
  {
    name: "Pending orders",
    value: "$173,229.00",
    change: "+2.87%",
    changeType: "positive"
  },
  {
    name: "Operating costs",
    value: "$52,891.00",
    change: "-5.73%",
    changeType: "negative"
  }
];
function Stats01() {
  return /* @__PURE__ */ (0, import_jsx_runtime74.jsx)("div", { className: "flex items-center justify-center p-10", children: /* @__PURE__ */ (0, import_jsx_runtime74.jsx)("div", { className: "mx-auto grid grid-cols-1 gap-px rounded-xl bg-border sm:grid-cols-2 lg:grid-cols-4", children: data.map((stat, index) => /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(
    Card,
    {
      className: cn(
        "rounded-none border-0 shadow-none py-0",
        index === 0 && "rounded-l-xl",
        index === data.length - 1 && "rounded-r-xl"
      ),
      children: /* @__PURE__ */ (0, import_jsx_runtime74.jsxs)(CardContent, { className: "flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 p-4 sm:p-6", children: [
        /* @__PURE__ */ (0, import_jsx_runtime74.jsx)("div", { className: "text-sm font-medium text-muted-foreground", children: stat.name }),
        /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(
          "div",
          {
            className: cn(
              "tabular-nums text-xs font-medium",
              stat.changeType === "positive" ? "text-green-800 dark:text-green-400" : "text-red-800 dark:text-red-400"
            ),
            children: stat.change
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime74.jsx)("div", { className: "tabular-nums w-full flex-none text-3xl font-medium tracking-tight text-foreground", children: stat.value })
      ] })
    },
    stat.name
  )) }) });
}

// src/design-system/components/business/date-picker.tsx
var import_date_fns2 = require("date-fns");
var import_lucide_react32 = require("lucide-react");
var import_jsx_runtime75 = require("react/jsx-runtime");
function DatePicker2({
  selected,
  onSelect,
  placeholder = "Pick a date"
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)(Popover, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)(
      Button,
      {
        variant: "outline",
        "data-empty": !selected,
        className: "w-60 justify-start text-start font-normal data-[empty=true]:text-muted-foreground",
        children: [
          selected ? (0, import_date_fns2.format)(selected, "MMM d, yyyy") : /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("span", { children: placeholder }),
          /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(import_lucide_react32.Calendar, { className: "ms-auto h-4 w-4 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(PopoverContent, { className: "w-auto p-0", children: /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(
      Calendar,
      {
        mode: "single",
        captionLayout: "dropdown",
        selected,
        onSelect,
        disabled: (date) => date > /* @__PURE__ */ new Date() || date < /* @__PURE__ */ new Date("1900-01-01")
      }
    ) })
  ] });
}

// src/design-system/components/business/qr-code-display.tsx
var import_react10 = __toESM(require("react"));
var import_react_qr_code = __toESM(require("react-qr-code"));
var import_sonner2 = require("sonner");
var import_jsx_runtime76 = require("react/jsx-runtime");
function QrCodeDisplay({ value, size = 140, className }) {
  if (!value) {
    return /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(
      "div",
      {
        className: `flex items-center justify-center bg-muted/40 rounded text-xs text-muted-foreground ${className ?? ""}`,
        style: { width: size, height: size },
        children: "No URL"
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime76.jsx)("div", { className, style: { width: size, height: size }, children: /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(
    import_react_qr_code.default,
    {
      value,
      size,
      level: value.length > 800 ? "L" : "M",
      bgColor: "#ffffff",
      fgColor: "#000000",
      style: { height: "auto", maxWidth: "100%", width: "100%" }
    }
  ) });
}
var QRCodeDisplay = QrCodeDisplay;
async function downloadQrCode(value, filename, size = 400) {
  if (!value) return;
  try {
    const wrapper = document.createElement("div");
    wrapper.style.position = "absolute";
    wrapper.style.left = "-9999px";
    document.body.appendChild(wrapper);
    const { createRoot } = await import("react-dom/client");
    const root = createRoot(wrapper);
    root.render(
      import_react10.default.createElement(import_react_qr_code.default, {
        value,
        size,
        level: "M",
        bgColor: "#ffffff",
        fgColor: "#000000"
      })
    );
    await new Promise((r) => setTimeout(r, 100));
    const svgEl = wrapper.querySelector("svg");
    if (!svgEl) throw new Error("QR render failed");
    const svgData = new XMLSerializer().serializeToString(svgEl);
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Canvas unavailable");
    const img = new Image();
    const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    await new Promise((resolve, reject) => {
      img.onload = () => {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, size, size);
        ctx.drawImage(img, 0, 0, size, size);
        URL.revokeObjectURL(url);
        resolve();
      };
      img.onerror = reject;
      img.src = url;
    });
    root.unmount();
    document.body.removeChild(wrapper);
    canvas.toBlob((pngBlob) => {
      if (!pngBlob) return;
      const blobUrl = window.URL.createObjectURL(pngBlob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(blobUrl);
      import_sonner2.toast.success("QR Code downloaded successfully!");
    }, "image/png");
  } catch {
    import_sonner2.toast.error("Failed to download QR code.");
  }
}

// src/design-system/components/chat/chat-bubble.tsx
var import_lucide_react33 = require("lucide-react");
var import_jsx_runtime77 = require("react/jsx-runtime");
function ChatBubble({
  id,
  content,
  isOwn = false,
  senderName = "Mohammed Aman",
  senderAvatar,
  time,
  status,
  attachments = [],
  location,
  reactions = [],
  replyTo,
  isHighlighted = false,
  showActions = true,
  className,
  bubbleClassName,
  onReply,
  onForward,
  onPin,
  onStar,
  onFavorite,
  onFlag,
  onArchive,
  onActionThis,
  onDelete,
  onThumbsUp,
  onThumbsDown,
  onCopy,
  onShare,
  onActionClick,
  onAttachmentClick,
  onAttachmentPreview,
  onLocationClick,
  children
}) {
  const formattedTime = time instanceof Date ? time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : time;
  const renderStatusIcon = () => {
    if (!status) return null;
    switch (status) {
      case "sending":
        return /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_lucide_react33.Clock, { className: "h-3.5 w-3.5 text-muted-foreground animate-spin shrink-0" });
      case "sent":
        return /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_lucide_react33.Check, { className: "h-3.5 w-3.5 text-muted-foreground shrink-0" });
      case "delivered":
        return /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_lucide_react33.CheckCheck, { className: "h-3.5 w-3.5 text-muted-foreground shrink-0" });
      case "read":
        return /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_lucide_react33.CheckCheck, { className: "h-3.5 w-3.5 text-sky-500 shrink-0" });
      case "failed":
        return /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_lucide_react33.AlertCircle, { className: "h-3.5 w-3.5 text-destructive shrink-0" });
      default:
        return null;
    }
  };
  const handleCopy = () => {
    if (content) {
      navigator.clipboard?.writeText(content);
    }
    onCopy?.();
  };
  const imageAttachments = attachments.filter((att) => att.type === "image" || att.url?.match(/\.(jpeg|jpg|gif|png|webp)/i));
  const fileAttachments = attachments.filter((att) => att.type !== "image" && !att.url?.match(/\.(jpeg|jpg|gif|png|webp)/i));
  const initials = senderName.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase() || "MO";
  return /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)(
    "div",
    {
      id: id ? `chat-bubble-${id}` : void 0,
      className: cn(
        "group relative flex w-full gap-3 py-2 transition-colors duration-150",
        isHighlighted && "bg-primary/5 rounded-xl px-2",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)(Avatar, { className: "h-9 w-9 flex-shrink-0 mt-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-semibold border border-border/50 rounded-full", children: [
          senderAvatar && /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(AvatarImage, { src: senderAvatar, alt: senderName }),
          /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(AvatarFallback, { className: "text-xs font-semibold", children: initials })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)("div", { className: "flex flex-col min-w-0 flex-1 items-start relative", children: [
          senderName && /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("span", { className: "text-xs font-semibold text-foreground/85 mb-1", children: senderName }),
          replyTo && /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)(
            "div",
            {
              onClick: onReply,
              className: "mb-1 cursor-pointer rounded-lg border-l-2 border-indigo-600 bg-muted/60 p-1.5 text-xs transition-opacity hover:opacity-80",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("div", { className: "font-medium text-[10px]", children: replyTo.senderName || "Replying to message" }),
                /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("div", { className: "line-clamp-1 text-[11px] text-muted-foreground", children: replyTo.content })
              ]
            }
          ),
          children ? children : /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)("div", { className: "space-y-2 w-full", children: [
            content && /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("p", { className: "text-sm font-medium text-foreground whitespace-pre-wrap leading-relaxed", children: content }),
            fileAttachments.map((att, idx) => /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)(
              "div",
              {
                className: "w-full max-w-[340px] rounded-2xl border border-border/80 bg-background p-3.5 flex items-center justify-between gap-3 shadow-2xs hover:border-border transition-all duration-150",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("div", { className: "flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400 shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_lucide_react33.FileText, { className: "h-5 w-5" }) }),
                  /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)("div", { className: "min-w-0 flex-1", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("h5", { className: "truncate text-xs font-bold text-foreground", children: att.name }),
                    /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)("p", { className: "text-[11px] text-muted-foreground", children: [
                      att.size ? `${(att.size / 1024).toFixed(0)} KB \u2022 ` : "",
                      att.type?.toUpperCase() || "PDF"
                    ] }),
                    att.statusText && /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("span", { className: "inline-block text-[11px] font-semibold text-emerald-600 dark:text-emerald-400", children: att.statusText })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)("div", { className: "flex items-center gap-1 shrink-0 text-muted-foreground", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(
                      "button",
                      {
                        type: "button",
                        onClick: () => onAttachmentPreview?.(att),
                        className: "p-1 rounded-md hover:bg-muted hover:text-foreground transition-colors cursor-pointer",
                        title: "Preview",
                        children: /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_lucide_react33.Eye, { className: "h-4 w-4" })
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(
                      "button",
                      {
                        type: "button",
                        onClick: () => onAttachmentClick?.(att),
                        className: "p-1 rounded-md hover:bg-muted hover:text-foreground transition-colors cursor-pointer",
                        title: "Download",
                        children: /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_lucide_react33.Download, { className: "h-4 w-4" })
                      }
                    )
                  ] })
                ]
              },
              att.id || idx
            )),
            location && /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)(
              "div",
              {
                onClick: () => onLocationClick?.(location),
                className: "w-full max-w-[340px] rounded-2xl border border-border/80 bg-background overflow-hidden shadow-2xs cursor-pointer hover:border-border transition-all duration-150",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)("div", { className: "relative h-36 w-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center overflow-hidden", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-70" }),
                    /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("div", { className: "relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white shadow-md", children: /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_lucide_react33.MapPin, { className: "h-5 w-5 fill-white text-emerald-600" }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("div", { className: "absolute bottom-1 left-2 rounded bg-background/80 px-1.5 py-0.5 text-[9px] text-muted-foreground backdrop-blur-xs", children: "\xA9 CARTO, \xA9 OpenStreetMap" })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)("div", { className: "p-3 flex items-start gap-2.5 bg-muted/30", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("div", { className: "flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 shrink-0 mt-0.5", children: /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_lucide_react33.MapPin, { className: "h-3.5 w-3.5 text-emerald-600" }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)("div", { className: "min-w-0 flex-1", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("h5", { className: "text-xs font-bold text-foreground", children: location.title || "Current Location" }),
                      /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("p", { className: "text-[11px] text-muted-foreground truncate", children: location.address || `${location.latitude.toFixed(4)}, ${location.longitude.toFixed(4)}` })
                    ] })
                  ] })
                ]
              }
            ),
            imageAttachments.map((img, idx) => /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(
              "div",
              {
                onClick: () => onAttachmentClick?.(img),
                className: "w-full max-w-[340px] rounded-2xl overflow-hidden border border-border/80 bg-background shadow-2xs cursor-pointer group/img",
                children: img.url ? /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(
                  "img",
                  {
                    src: img.url,
                    alt: img.name,
                    className: "w-full h-44 object-cover transition-transform duration-200 group-hover/img:scale-[1.02]"
                  }
                ) : /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("div", { className: "w-full h-44 bg-slate-900 flex items-center justify-center text-white text-xs", children: img.name })
              },
              img.id || idx
            ))
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)("div", { className: "mt-1 flex items-center gap-1 text-[11px] text-muted-foreground select-none", children: [
            formattedTime && /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("span", { children: formattedTime }),
            renderStatusIcon()
          ] }),
          showActions && /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("div", { className: "mt-1 opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)("div", { className: "inline-flex items-center gap-2.5 rounded-full border border-border/80 bg-background/95 backdrop-blur-xs px-3 py-1 shadow-md", children: [
            /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(
              "button",
              {
                type: "button",
                onClick: onThumbsUp,
                className: "p-0.5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer",
                title: "Like",
                children: /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_lucide_react33.ThumbsUp, { className: "h-3.5 w-3.5" })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(
              "button",
              {
                type: "button",
                onClick: onThumbsDown,
                className: "p-0.5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer",
                title: "Dislike",
                children: /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_lucide_react33.ThumbsDown, { className: "h-3.5 w-3.5" })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(
              "button",
              {
                type: "button",
                onClick: handleCopy,
                className: "p-0.5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer",
                title: "Copy",
                children: /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_lucide_react33.Copy, { className: "h-3.5 w-3.5" })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(
              "button",
              {
                type: "button",
                onClick: onShare,
                className: "p-0.5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer",
                title: "Share",
                children: /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_lucide_react33.Share2, { className: "h-3.5 w-3.5" })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)(DropdownMenu, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(
                "button",
                {
                  type: "button",
                  className: "p-0.5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer",
                  title: "More actions",
                  children: /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_lucide_react33.MoreHorizontal, { className: "h-3.5 w-3.5" })
                }
              ) }),
              /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)(
                DropdownMenuContent,
                {
                  align: "start",
                  side: "top",
                  sideOffset: 8,
                  className: "w-48 rounded-2xl p-1.5 shadow-2xl border border-border/80 bg-background text-foreground space-y-0.5",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)(
                      DropdownMenuItem,
                      {
                        onClick: onReply,
                        className: "gap-2.5 py-1.5 px-2 text-xs font-semibold cursor-pointer rounded-xl hover:bg-muted",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_lucide_react33.CornerUpLeft, { className: "h-4 w-4 text-blue-600 shrink-0" }),
                          /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("span", { children: "Reply" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)(
                      DropdownMenuItem,
                      {
                        onClick: onForward,
                        className: "gap-2.5 py-1.5 px-2 text-xs font-semibold cursor-pointer rounded-xl hover:bg-muted",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_lucide_react33.CornerUpRight, { className: "h-4 w-4 text-sky-500 shrink-0" }),
                          /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("span", { children: "Forward" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)(
                      DropdownMenuItem,
                      {
                        onClick: onPin,
                        className: "gap-2.5 py-1.5 px-2 text-xs font-semibold cursor-pointer rounded-xl hover:bg-muted",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_lucide_react33.Pin, { className: "h-4 w-4 text-purple-600 shrink-0" }),
                          /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("span", { children: "Pin Message" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)(
                      DropdownMenuItem,
                      {
                        onClick: onStar,
                        className: "gap-2.5 py-1.5 px-2 text-xs font-semibold cursor-pointer rounded-xl hover:bg-muted",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_lucide_react33.Star, { className: "h-4 w-4 text-amber-500 shrink-0" }),
                          /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("span", { children: "Star" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)(
                      DropdownMenuItem,
                      {
                        onClick: onFavorite,
                        className: "gap-2.5 py-1.5 px-2 text-xs font-semibold cursor-pointer rounded-xl hover:bg-muted",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_lucide_react33.Heart, { className: "h-4 w-4 text-rose-500 shrink-0" }),
                          /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("span", { children: "Favorite" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)(
                      DropdownMenuItem,
                      {
                        onClick: onFlag,
                        className: "gap-2.5 py-1.5 px-2 text-xs font-semibold cursor-pointer rounded-xl hover:bg-muted",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_lucide_react33.Flag, { className: "h-4 w-4 text-red-600 shrink-0" }),
                          /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("span", { children: "Flag" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)(
                      DropdownMenuItem,
                      {
                        onClick: onArchive,
                        className: "gap-2.5 py-1.5 px-2 text-xs font-semibold cursor-pointer rounded-xl hover:bg-muted",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_lucide_react33.Archive, { className: "h-4 w-4 text-indigo-600 shrink-0" }),
                          /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("span", { children: "Archive" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)(
                      DropdownMenuItem,
                      {
                        onClick: onActionThis,
                        className: "flex items-center justify-between py-1.5 px-2 text-xs font-semibold cursor-pointer rounded-xl hover:bg-muted",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)("div", { className: "flex items-center gap-2.5", children: [
                            /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_lucide_react33.Bell, { className: "h-4 w-4 text-orange-500 shrink-0" }),
                            /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("span", { children: "Action This" })
                          ] }),
                          /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_lucide_react33.ChevronRight, { className: "h-3.5 w-3.5 text-muted-foreground" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)(
                      DropdownMenuItem,
                      {
                        onClick: onDelete,
                        className: "flex items-center justify-between py-1.5 px-2 text-xs font-semibold text-rose-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 cursor-pointer rounded-xl",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)("div", { className: "flex items-center gap-2.5", children: [
                            /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_lucide_react33.Trash2, { className: "h-4 w-4 text-rose-500 shrink-0" }),
                            /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("span", { children: "Delete" })
                          ] }),
                          /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_lucide_react33.ChevronRight, { className: "h-3.5 w-3.5 text-rose-400" })
                        ]
                      }
                    )
                  ]
                }
              )
            ] })
          ] }) }),
          reactions.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("div", { className: "mt-1 flex flex-wrap gap-1", children: reactions.map((react, i) => /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)(
            "span",
            {
              className: "inline-flex items-center gap-1 rounded-full border border-border/60 bg-background px-2 py-0.5 text-xs shadow-2xs cursor-pointer hover:bg-muted",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("span", { children: react.emoji }),
                /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("span", { className: "font-semibold text-[10px] text-muted-foreground", children: react.count })
              ]
            },
            i
          )) })
        ] })
      ]
    }
  );
}

// src/design-system/components/chat/chat-input.tsx
var import_react11 = require("react");
var import_lucide_react34 = require("lucide-react");
var import_jsx_runtime78 = require("react/jsx-runtime");
function ChatInput({
  value,
  onChange,
  onSend,
  placeholder = "Message",
  disabled = false,
  isLoading = false,
  maxLength,
  replyMessage,
  showAttachments = true,
  showEmoji = true,
  showCamera = true,
  showVoice = true,
  onAttachmentClick,
  onSelectAttachmentType,
  onEmojiClick,
  onCameraClick,
  onVoiceClick,
  customActions,
  className
}) {
  const textareaRef = (0, import_react11.useRef)(null);
  const [isAttachOpen, setIsAttachOpen] = (0, import_react11.useState)(false);
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (value.trim() && !disabled && !isLoading) {
        onSend();
      }
    }
  };
  (0, import_react11.useEffect)(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  }, [value]);
  const hasText = value.trim().length > 0;
  const handleSelectOption = (type) => {
    setIsAttachOpen(false);
    onSelectAttachmentType?.(type);
    if (type === "images" || type === "documents") {
      onAttachmentClick?.();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)("div", { className: cn("flex flex-col gap-1 w-full", className), children: [
    replyMessage && /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)("div", { className: "flex items-center justify-between rounded-t-xl border border-b-0 border-border/60 bg-muted/40 px-3 py-1.5 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)("div", { className: "flex items-center gap-1.5 truncate", children: [
        /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)("span", { className: "font-medium text-foreground", children: [
          "Replying to ",
          replyMessage.senderName || "Message",
          ":"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime78.jsx)("span", { className: "truncate", children: replyMessage.content })
      ] }),
      replyMessage.onClear && /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
        "button",
        {
          onClick: replyMessage.onClear,
          className: "ml-2 rounded-sm p-0.5 hover:bg-muted text-muted-foreground hover:text-foreground cursor-pointer",
          children: /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(import_lucide_react34.X, { className: "h-3.5 w-3.5" })
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)("div", { className: "flex flex-1 items-center gap-1.5 rounded-full border border-border/80 bg-background px-3 py-1.5 shadow-2xs transition-all focus-within:border-indigo-500/60 focus-within:ring-1 focus-within:ring-indigo-500/30", children: [
        showEmoji && /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
          Button,
          {
            type: "button",
            variant: "ghost",
            size: "icon",
            onClick: onEmojiClick,
            disabled: disabled || isLoading,
            className: "h-8 w-8 text-muted-foreground hover:text-foreground rounded-full shrink-0",
            children: /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(import_lucide_react34.Smile, { className: "h-4.5 w-4.5" })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
          "textarea",
          {
            ref: textareaRef,
            value,
            onChange: (e) => onChange(e.target.value),
            onKeyDown: handleKeyDown,
            placeholder,
            disabled: disabled || isLoading,
            maxLength,
            rows: 1,
            className: "max-h-28 min-h-[24px] w-full resize-none bg-transparent px-1 py-1 text-sm outline-none placeholder:text-muted-foreground/80 disabled:cursor-not-allowed disabled:opacity-50 leading-normal"
          }
        ),
        showAttachments && /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)(DropdownMenu, { open: isAttachOpen, onOpenChange: setIsAttachOpen, children: [
          /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
            Button,
            {
              type: "button",
              variant: "ghost",
              size: "icon",
              disabled: disabled || isLoading,
              className: "h-8 w-8 text-muted-foreground hover:text-foreground rounded-full shrink-0",
              title: "Attachments",
              children: /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(import_lucide_react34.Paperclip, { className: "h-4.5 w-4.5" })
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)(DropdownMenuContent, { align: "end", side: "top", sideOffset: 8, className: "w-56 rounded-2xl p-1.5 shadow-xl border border-border/80 bg-background text-foreground", children: [
            /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)(
              DropdownMenuItem,
              {
                onClick: () => handleSelectOption("images"),
                className: "gap-3 py-2 px-2.5 text-xs font-semibold cursor-pointer rounded-xl hover:bg-muted",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(import_lucide_react34.ImagePlus, { className: "h-4 w-4 text-slate-600 dark:text-slate-400 shrink-0" }),
                  /* @__PURE__ */ (0, import_jsx_runtime78.jsx)("span", { children: "Images" })
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)(
              DropdownMenuItem,
              {
                onClick: () => handleSelectOption("videos"),
                className: "gap-3 py-2 px-2.5 text-xs font-semibold cursor-pointer rounded-xl hover:bg-muted",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(import_lucide_react34.Video, { className: "h-4 w-4 text-slate-600 dark:text-slate-400 shrink-0" }),
                  /* @__PURE__ */ (0, import_jsx_runtime78.jsx)("span", { children: "Videos" })
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)(
              DropdownMenuItem,
              {
                onClick: () => handleSelectOption("documents"),
                className: "gap-3 py-2 px-2.5 text-xs font-semibold cursor-pointer rounded-xl hover:bg-muted",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(import_lucide_react34.FileText, { className: "h-4 w-4 text-slate-600 dark:text-slate-400 shrink-0" }),
                  /* @__PURE__ */ (0, import_jsx_runtime78.jsx)("span", { children: "Documents" })
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)(
              DropdownMenuItem,
              {
                onClick: () => handleSelectOption("location"),
                className: "gap-3 py-2 px-2.5 text-xs font-semibold cursor-pointer rounded-xl hover:bg-muted",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(import_lucide_react34.MapPin, { className: "h-4 w-4 text-slate-600 dark:text-slate-400 shrink-0" }),
                  /* @__PURE__ */ (0, import_jsx_runtime78.jsx)("span", { children: "Location" })
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)(
              DropdownMenuItem,
              {
                onClick: () => handleSelectOption("image-converter"),
                className: "gap-3 py-2 px-2.5 text-xs font-semibold cursor-pointer rounded-xl hover:bg-muted",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(import_lucide_react34.FileImage, { className: "h-4 w-4 text-slate-600 dark:text-slate-400 shrink-0" }),
                  /* @__PURE__ */ (0, import_jsx_runtime78.jsx)("span", { children: "Image Converter" })
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)(
              DropdownMenuItem,
              {
                onClick: () => handleSelectOption("doc-converter"),
                className: "gap-3 py-2 px-2.5 text-xs font-semibold cursor-pointer rounded-xl hover:bg-muted",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(import_lucide_react34.RefreshCw, { className: "h-4 w-4 text-slate-600 dark:text-slate-400 shrink-0" }),
                  /* @__PURE__ */ (0, import_jsx_runtime78.jsx)("span", { children: "Doc Converter" })
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)(
              DropdownMenuItem,
              {
                onClick: () => handleSelectOption("doc-scanner"),
                className: "gap-3 py-2 px-2.5 text-xs font-semibold cursor-pointer rounded-xl hover:bg-muted",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(import_lucide_react34.Scan, { className: "h-4 w-4 text-slate-600 dark:text-slate-400 shrink-0" }),
                  /* @__PURE__ */ (0, import_jsx_runtime78.jsx)("span", { children: "Doc Scanner" })
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)(
              DropdownMenuItem,
              {
                onClick: () => handleSelectOption("scan-document"),
                className: "gap-3 py-2 px-2.5 text-xs font-semibold cursor-pointer rounded-xl hover:bg-muted",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(import_lucide_react34.ScanLine, { className: "h-4 w-4 text-slate-600 dark:text-slate-400 shrink-0" }),
                  /* @__PURE__ */ (0, import_jsx_runtime78.jsx)("span", { children: "Scan Document" })
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)(
              DropdownMenuItem,
              {
                onClick: () => handleSelectOption("extract-text"),
                className: "gap-3 py-2 px-2.5 text-xs font-semibold cursor-pointer rounded-xl hover:bg-muted",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(import_lucide_react34.FileCode2, { className: "h-4 w-4 text-slate-600 dark:text-slate-400 shrink-0" }),
                  /* @__PURE__ */ (0, import_jsx_runtime78.jsx)("span", { children: "Extract Text" })
                ]
              }
            )
          ] })
        ] }),
        showCamera && /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
          Button,
          {
            type: "button",
            variant: "ghost",
            size: "icon",
            onClick: onCameraClick,
            disabled: disabled || isLoading,
            className: "h-8 w-8 text-muted-foreground hover:text-foreground rounded-full shrink-0",
            title: "Camera",
            children: /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(import_lucide_react34.Camera, { className: "h-4.5 w-4.5" })
          }
        ),
        customActions
      ] }),
      hasText ? /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
        "button",
        {
          type: "button",
          onClick: onSend,
          disabled: disabled || isLoading,
          className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-md transition-transform active:scale-95 cursor-pointer disabled:opacity-50",
          title: "Send message",
          children: /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(import_lucide_react34.Send, { className: "h-4.5 w-4.5" })
        }
      ) : showVoice ? /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
        "button",
        {
          type: "button",
          onClick: onVoiceClick,
          disabled: disabled || isLoading,
          className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-md transition-transform active:scale-95 cursor-pointer disabled:opacity-50",
          title: "Voice message",
          children: /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(import_lucide_react34.Mic, { className: "h-4.5 w-4.5" })
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
        "button",
        {
          type: "button",
          onClick: onSend,
          disabled: true,
          className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-600/50 text-white shadow-md cursor-not-allowed",
          children: /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(import_lucide_react34.Send, { className: "h-4.5 w-4.5" })
        }
      )
    ] })
  ] });
}

// src/design-system/components/chat/chat-header.tsx
var import_lucide_react35 = require("lucide-react");
var import_jsx_runtime79 = require("react/jsx-runtime");
function ChatHeader({
  title = "Mohammed Aman",
  subtitle = "Last seen today at 04:58 PM",
  avatarUrl,
  status = "online",
  isGroup = false,
  memberCount,
  actions,
  showDefaultActions = true,
  onAvatarClick,
  onNotificationClick,
  onFlagClick,
  onReply,
  onForward,
  onPin,
  onStar,
  onFavorite,
  onArchive,
  onActionThis,
  onDelete,
  className
}) {
  const getStatusColor = () => {
    switch (status) {
      case "online":
        return "bg-emerald-500";
      case "away":
        return "bg-amber-500";
      case "busy":
        return "bg-red-500";
      default:
        return "bg-slate-400";
    }
  };
  const initials = title?.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase() || "MA";
  return /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)(
    "div",
    {
      className: cn(
        "flex items-center justify-between border-b border-border bg-background px-4 py-3 select-none",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)("div", { className: "flex items-center gap-3 min-w-0", children: [
          /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)("div", { className: "relative cursor-pointer shrink-0", onClick: onAvatarClick, children: [
            /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)(Avatar, { className: "h-10 w-10 rounded-xl border border-border/60 shadow-2xs", children: [
              avatarUrl && /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(AvatarImage, { src: avatarUrl, alt: title, className: "rounded-xl" }),
              /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(AvatarFallback, { className: "rounded-xl bg-primary/10 text-primary font-bold text-sm", children: initials })
            ] }),
            !isGroup && /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
              "span",
              {
                className: cn(
                  "absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full ring-2 ring-background",
                  getStatusColor()
                )
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("h2", { className: "truncate text-sm font-bold text-foreground tracking-tight leading-snug", children: title }),
            /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("p", { className: "truncate text-xs text-muted-foreground leading-tight", children: subtitle ? subtitle : isGroup ? `${memberCount || 0} members` : /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("span", { className: "capitalize", children: status }) })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("div", { className: "flex items-center gap-1 shrink-0", children: actions ? actions : showDefaultActions ? /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
            "button",
            {
              type: "button",
              onClick: onNotificationClick,
              className: "p-1.5 rounded-lg hover:bg-muted text-amber-500 hover:text-amber-600 transition-colors cursor-pointer",
              title: "Act on this",
              children: /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(import_lucide_react35.Bell, { className: "h-4.5 w-4.5" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
            "button",
            {
              type: "button",
              onClick: onFlagClick,
              className: "p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer",
              title: "Flag",
              children: /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(import_lucide_react35.Flag, { className: "h-4.5 w-4.5" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)(DropdownMenu, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
              "button",
              {
                type: "button",
                className: "p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer",
                title: "More options",
                children: /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(import_lucide_react35.MoreVertical, { className: "h-4.5 w-4.5" })
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)(
              DropdownMenuContent,
              {
                align: "end",
                className: "w-48 border border-border/80 bg-background shadow-lg p-1 space-y-0.5 rounded-xl",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
                    DropdownMenuItem,
                    {
                      onClick: onReply,
                      className: "cursor-pointer text-xs flex items-center justify-between py-2 px-2.5 font-medium hover:bg-muted/80 rounded-md",
                      children: /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)("div", { className: "flex items-center gap-2.5", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(import_lucide_react35.CornerUpLeft, { className: "h-4 w-4 text-blue-500" }),
                        /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("span", { children: "Reply" })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
                    DropdownMenuItem,
                    {
                      onClick: onForward,
                      className: "cursor-pointer text-xs flex items-center justify-between py-2 px-2.5 font-medium hover:bg-muted/80 rounded-md",
                      children: /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)("div", { className: "flex items-center gap-2.5", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(import_lucide_react35.CornerUpRight, { className: "h-4 w-4 text-sky-500" }),
                        /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("span", { children: "Forward" })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
                    DropdownMenuItem,
                    {
                      onClick: onPin,
                      className: "cursor-pointer text-xs flex items-center justify-between py-2 px-2.5 font-medium hover:bg-muted/80 rounded-md",
                      children: /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)("div", { className: "flex items-center gap-2.5", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(import_lucide_react35.Pin, { className: "h-4 w-4 text-purple-600" }),
                        /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("span", { children: "Pin Message" })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
                    DropdownMenuItem,
                    {
                      onClick: onStar,
                      className: "cursor-pointer text-xs flex items-center justify-between py-2 px-2.5 font-medium hover:bg-muted/80 rounded-md",
                      children: /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)("div", { className: "flex items-center gap-2.5", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(import_lucide_react35.Star, { className: "h-4 w-4 text-amber-500" }),
                        /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("span", { children: "Star" })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
                    DropdownMenuItem,
                    {
                      onClick: onFavorite,
                      className: "cursor-pointer text-xs flex items-center justify-between py-2 px-2.5 font-medium hover:bg-muted/80 rounded-md",
                      children: /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)("div", { className: "flex items-center gap-2.5", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(import_lucide_react35.Heart, { className: "h-4 w-4 text-rose-500" }),
                        /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("span", { children: "Favorite" })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
                    DropdownMenuItem,
                    {
                      onClick: onArchive,
                      className: "cursor-pointer text-xs flex items-center justify-between py-2 px-2.5 font-medium hover:bg-muted/80 rounded-md",
                      children: /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)("div", { className: "flex items-center gap-2.5", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(import_lucide_react35.Archive, { className: "h-4 w-4 text-indigo-600" }),
                        /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("span", { children: "Archive" })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)(
                    DropdownMenuItem,
                    {
                      onClick: onActionThis,
                      className: "cursor-pointer text-xs flex items-center justify-between py-2 px-2.5 font-medium hover:bg-muted/80 rounded-md",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)("div", { className: "flex items-center gap-2.5", children: [
                          /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(import_lucide_react35.Bell, { className: "h-4 w-4 text-amber-500" }),
                          /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("span", { children: "Action This" })
                        ] }),
                        /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(import_lucide_react35.ChevronRight, { className: "h-3.5 w-3.5 text-muted-foreground" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)(
                    DropdownMenuItem,
                    {
                      onClick: onDelete,
                      className: "cursor-pointer text-xs flex items-center justify-between py-2 px-2.5 font-medium hover:bg-rose-50 dark:hover:bg-rose-950/30 text-rose-500 hover:text-rose-600 rounded-md",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)("div", { className: "flex items-center gap-2.5", children: [
                          /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(import_lucide_react35.Trash2, { className: "h-4 w-4 text-rose-500" }),
                          /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("span", { children: "Delete" })
                        ] }),
                        /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(import_lucide_react35.ChevronRight, { className: "h-3.5 w-3.5 text-rose-400" })
                      ]
                    }
                  )
                ]
              }
            )
          ] })
        ] }) : null })
      ]
    }
  );
}

// src/design-system/components/chat/typing-indicator.tsx
var import_jsx_runtime80 = require("react/jsx-runtime");
function TypingIndicator({ label = "Typing...", avatarUrl, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime80.jsxs)("div", { className: cn("flex items-center gap-2 px-3 py-1.5 text-xs text-muted-foreground", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime80.jsxs)("div", { className: "flex items-center gap-1 rounded-full bg-muted/80 px-2.5 py-1.5 border border-border/50", children: [
      /* @__PURE__ */ (0, import_jsx_runtime80.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary/70 animate-bounce [animation-delay:-0.3s]" }),
      /* @__PURE__ */ (0, import_jsx_runtime80.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary/70 animate-bounce [animation-delay:-0.15s]" }),
      /* @__PURE__ */ (0, import_jsx_runtime80.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary/70 animate-bounce" })
    ] }),
    label && /* @__PURE__ */ (0, import_jsx_runtime80.jsx)("span", { className: "text-[11px] font-normal italic", children: label })
  ] });
}

// src/design-system/components/chat/chat-empty-state.tsx
var import_lucide_react36 = require("lucide-react");
var import_jsx_runtime81 = require("react/jsx-runtime");
function ChatEmptyState({
  title = "No conversation selected",
  description = "Choose a chat from the sidebar or start a new conversation to begin messaging.",
  icon,
  action,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime81.jsxs)("div", { className: cn("flex flex-1 flex-col items-center justify-center p-8 text-center bg-muted/20", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime81.jsx)("div", { className: "flex h-16 w-16 items-center justify-center rounded-2xl bg-muted/80 text-muted-foreground mb-4 shadow-xs", children: icon || /* @__PURE__ */ (0, import_jsx_runtime81.jsx)(import_lucide_react36.MessageSquareDashed, { className: "h-8 w-8 text-primary/70" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime81.jsx)("h3", { className: "text-base font-semibold text-foreground tracking-tight mb-1", children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime81.jsx)("p", { className: "text-xs text-muted-foreground max-w-sm leading-relaxed mb-4", children: description }),
    action && /* @__PURE__ */ (0, import_jsx_runtime81.jsx)("div", { children: action })
  ] });
}

// src/design-system/components/chat/chat-card-item.tsx
var import_lucide_react37 = require("lucide-react");
var import_jsx_runtime82 = require("react/jsx-runtime");
function ChatCardItem({
  id,
  title,
  badgeLabel = "Chat",
  lastMessage,
  time,
  membersCount = 2,
  onlineCount = 0,
  unreadCount = 0,
  isActive = false,
  isGroup = false,
  onClick,
  onMoreClick,
  className
}) {
  const formattedTime = time instanceof Date ? time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : time;
  return /* @__PURE__ */ (0, import_jsx_runtime82.jsxs)(
    "div",
    {
      onClick,
      className: cn(
        "group relative flex flex-col gap-1 rounded-xl p-3 cursor-pointer transition-all duration-150 select-none border",
        isActive ? "bg-indigo-500/10 border-indigo-200/60 dark:bg-indigo-950/30 dark:border-indigo-900/50 shadow-2xs" : "bg-background hover:bg-muted/40 border-transparent hover:border-border/40",
        unreadCount > 0 && !isActive && "bg-primary/5",
        className
      ),
      children: [
        isActive && /* @__PURE__ */ (0, import_jsx_runtime82.jsx)("div", { className: "absolute top-1.5 bottom-1.5 left-0 w-1 rounded-l-md bg-indigo-600 dark:bg-indigo-500" }),
        /* @__PURE__ */ (0, import_jsx_runtime82.jsxs)("div", { className: "flex items-center justify-between gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime82.jsxs)("div", { className: "flex items-center gap-1.5 min-w-0", children: [
            /* @__PURE__ */ (0, import_jsx_runtime82.jsx)("h4", { className: cn("truncate text-sm font-semibold tracking-tight text-foreground"), children: title }),
            badgeLabel && /* @__PURE__ */ (0, import_jsx_runtime82.jsxs)(Badge, { className: "h-4.5 rounded-full border border-emerald-200/40 bg-emerald-500/10 dark:bg-emerald-950/40 px-1.5 py-0 text-[10px] font-medium text-emerald-600 dark:text-emerald-400 gap-1 shrink-0", children: [
              /* @__PURE__ */ (0, import_jsx_runtime82.jsx)("span", { className: "text-[9px]", children: "\u{1F4AC}" }),
              /* @__PURE__ */ (0, import_jsx_runtime82.jsx)("span", { children: badgeLabel })
            ] })
          ] }),
          formattedTime && /* @__PURE__ */ (0, import_jsx_runtime82.jsx)("span", { className: "text-[11px] text-muted-foreground whitespace-nowrap shrink-0", children: formattedTime })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime82.jsxs)("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground/80", children: [
          /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(import_lucide_react37.Users, { className: "h-3.5 w-3.5 shrink-0" }),
          /* @__PURE__ */ (0, import_jsx_runtime82.jsxs)("span", { className: "truncate", children: [
            membersCount,
            " Members \u2022 ",
            onlineCount,
            " Online"
          ] })
        ] }),
        lastMessage && /* @__PURE__ */ (0, import_jsx_runtime82.jsx)("p", { className: "line-clamp-1 text-xs text-muted-foreground/70 truncate", children: lastMessage }),
        onMoreClick && /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(
          "button",
          {
            type: "button",
            onClick: (e) => {
              e.stopPropagation();
              onMoreClick(e);
            },
            className: "absolute top-2.5 right-2 opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded-md hover:bg-muted text-muted-foreground",
            children: /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(import_lucide_react37.MoreHorizontal, { className: "h-3.5 w-3.5" })
          }
        )
      ]
    }
  );
}

// src/design-system/components/chat/chat-message-list.tsx
var import_react12 = __toESM(require("react"));
var import_lucide_react38 = require("lucide-react");
var import_jsx_runtime83 = require("react/jsx-runtime");
function ChatMessageList({
  children,
  isLoadingMore = false,
  onLoadMore,
  autoScrollToBottom = true,
  emptyState,
  className
}) {
  const bottomRef = (0, import_react12.useRef)(null);
  const containerRef = (0, import_react12.useRef)(null);
  (0, import_react12.useEffect)(() => {
    if (autoScrollToBottom && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [children, autoScrollToBottom]);
  const hasChildren = import_react12.default.Children.count(children) > 0;
  return /* @__PURE__ */ (0, import_jsx_runtime83.jsxs)(
    "div",
    {
      ref: containerRef,
      className: cn("flex flex-1 flex-col overflow-y-auto p-4 space-y-2", className),
      children: [
        isLoadingMore && /* @__PURE__ */ (0, import_jsx_runtime83.jsxs)("div", { className: "flex items-center justify-center py-2 text-muted-foreground", children: [
          /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(import_lucide_react38.Loader2, { className: "h-4 w-4 animate-spin text-primary mr-1.5" }),
          /* @__PURE__ */ (0, import_jsx_runtime83.jsx)("span", { className: "text-xs", children: "Loading older messages..." })
        ] }),
        hasChildren ? children : emptyState ? /* @__PURE__ */ (0, import_jsx_runtime83.jsx)("div", { className: "flex flex-1 items-center justify-center h-full", children: emptyState }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime83.jsx)("div", { ref: bottomRef, className: "h-0 w-0" })
      ]
    }
  );
}

// src/design-system/components/chat/chat-sidebar.tsx
var import_lucide_react39 = require("lucide-react");
var import_jsx_runtime84 = require("react/jsx-runtime");
function ChatSidebar({
  title = "Chats",
  searchValue = "",
  onSearchChange,
  searchPlaceholder = "Search...",
  tabs = [
    { id: "chats", label: "Chats" },
    { id: "contact", label: "Contact" },
    { id: "groups", label: "Groups" },
    { id: "folder", label: "Folder" }
  ],
  activeTab = "chats",
  onTabChange,
  sectionLabel = "CHATS",
  sectionCount = 2,
  actions,
  onNewChat,
  children,
  footer,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime84.jsxs)(
    "aside",
    {
      className: cn(
        "flex flex-col h-full w-full md:w-80 lg:w-[340px] border-r border-border/70 bg-background/95 select-none",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime84.jsx)("div", { className: "flex items-center gap-4 px-4 pt-3 pb-1 border-b border-border/40 overflow-x-auto no-scrollbar", children: tabs.map((tab) => {
          const isSelected = activeTab === tab.id;
          return /* @__PURE__ */ (0, import_jsx_runtime84.jsxs)(
            "button",
            {
              onClick: () => onTabChange?.(tab.id),
              className: cn(
                "relative pb-2 text-sm font-medium transition-all shrink-0 cursor-pointer",
                isSelected ? "text-indigo-600 dark:text-indigo-400 font-semibold" : "text-muted-foreground hover:text-foreground"
              ),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime84.jsx)("span", { children: tab.label }),
                isSelected && /* @__PURE__ */ (0, import_jsx_runtime84.jsx)("span", { className: "absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-indigo-600 dark:bg-indigo-400" })
              ]
            },
            tab.id
          );
        }) }),
        /* @__PURE__ */ (0, import_jsx_runtime84.jsx)("div", { className: "p-3", children: /* @__PURE__ */ (0, import_jsx_runtime84.jsxs)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(import_lucide_react39.Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
          /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(
            Input,
            {
              type: "search",
              value: searchValue,
              onChange: (e) => onSearchChange?.(e.target.value),
              placeholder: searchPlaceholder,
              className: "pl-9 h-9 text-xs rounded-xl bg-background border-border/80 focus-visible:ring-1 focus-visible:ring-indigo-500/50"
            }
          )
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime84.jsxs)("div", { className: "flex items-center px-4 py-1.5 gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(import_lucide_react39.MessageSquare, { className: "h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" }),
          /* @__PURE__ */ (0, import_jsx_runtime84.jsx)("span", { className: "text-[11px] font-bold tracking-wider text-muted-foreground uppercase", children: sectionLabel }),
          /* @__PURE__ */ (0, import_jsx_runtime84.jsx)("div", { className: "flex-1 h-[1px] bg-border/60 mx-1" }),
          typeof sectionCount === "number" && /* @__PURE__ */ (0, import_jsx_runtime84.jsx)("span", { className: "text-xs font-medium text-muted-foreground shrink-0", children: sectionCount })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime84.jsx)("div", { className: "flex-1 overflow-y-auto px-2 py-1 space-y-1", children }),
        footer && /* @__PURE__ */ (0, import_jsx_runtime84.jsx)("div", { className: "p-3 border-t border-border/60 bg-muted/20", children: footer })
      ]
    }
  );
}

// src/design-system/components/chat/contact-manager.tsx
var import_react13 = require("react");
var import_lucide_react40 = require("lucide-react");
var import_jsx_runtime85 = require("react/jsx-runtime");
function ContactManager({
  contacts = [],
  title = "Contact Manager",
  description = "Manage your saved contacts and start direct chat conversations.",
  searchPlaceholder = "Search contacts by name or email...",
  onChatClick,
  onToggleStatus,
  onEditClick,
  onDeleteClick,
  onAddContact,
  className
}) {
  const [searchQuery, setSearchQuery] = (0, import_react13.useState)("");
  const [isAddOpen, setIsAddOpen] = (0, import_react13.useState)(false);
  const [newName, setNewName] = (0, import_react13.useState)("");
  const [newEmail, setNewEmail] = (0, import_react13.useState)("");
  const filteredContacts = contacts.filter(
    (c) => c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.email.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!newEmail.trim()) return;
    onAddContact?.({
      name: newName.trim() || newEmail.split("@")[0],
      email: newEmail.trim()
    });
    setNewName("");
    setNewEmail("");
    setIsAddOpen(false);
  };
  const getInitials = (contact) => {
    if (contact.initials) return contact.initials;
    return contact.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase() || "U";
  };
  return /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)(
    "div",
    {
      className: cn(
        "w-full rounded-2xl border border-border/80 bg-background p-6 shadow-sm space-y-5",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)("div", { className: "space-y-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(import_lucide_react40.Users, { className: "h-5 w-5 text-indigo-600 dark:text-indigo-400" }),
            /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("h3", { className: "text-lg font-bold tracking-tight text-foreground", children: title })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("p", { className: "text-xs text-muted-foreground", children: description })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(import_lucide_react40.Search, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
          /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(
            Input,
            {
              type: "search",
              value: searchQuery,
              onChange: (e) => setSearchQuery(e.target.value),
              placeholder: searchPlaceholder,
              className: "pl-10 h-10 text-xs rounded-xl bg-background border-border/80 focus-visible:ring-1 focus-visible:ring-indigo-500/50"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("div", { className: "space-y-2.5 max-h-[380px] overflow-y-auto pr-1", children: filteredContacts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("div", { className: "py-8 text-center text-xs text-muted-foreground", children: "No contacts found matching your search." }) : filteredContacts.map((contact) => /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)(
          "div",
          {
            className: "flex items-center justify-between gap-3 rounded-2xl border border-border/70 bg-background/50 p-3 hover:border-border transition-all duration-150 shadow-2xs",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)("div", { className: "flex items-center gap-3 min-w-0", children: [
                /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)(Avatar, { className: "h-10 w-10 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-bold border border-blue-200/50 dark:border-blue-900/40", children: [
                  contact.avatarUrl && /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(AvatarImage, { src: contact.avatarUrl, alt: contact.name }),
                  /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(AvatarFallback, { className: "bg-transparent text-xs", children: getInitials(contact) })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("h4", { className: "truncate text-sm font-semibold text-foreground tracking-tight", children: contact.name }),
                  /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("p", { className: "truncate text-xs text-muted-foreground", children: contact.email })
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)("div", { className: "flex items-center gap-2 shrink-0", children: [
                /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(
                  Button,
                  {
                    variant: "ghost",
                    size: "icon",
                    onClick: () => onChatClick?.(contact),
                    className: "h-8 w-8 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 rounded-lg",
                    title: "Open Chat",
                    children: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(import_lucide_react40.MessageSquare, { className: "h-4 w-4" })
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(
                  Switch,
                  {
                    checked: contact.isEnabled !== false,
                    onCheckedChange: (checked) => onToggleStatus?.(contact, checked),
                    className: "data-[state=checked]:bg-slate-800 dark:data-[state=checked]:bg-slate-200"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(
                  Button,
                  {
                    variant: "ghost",
                    size: "icon",
                    onClick: () => onEditClick?.(contact),
                    className: "h-8 w-8 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/40 rounded-lg",
                    title: "Edit Contact",
                    children: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(import_lucide_react40.Pencil, { className: "h-3.5 w-3.5" })
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(
                  Button,
                  {
                    variant: "ghost",
                    size: "icon",
                    onClick: () => onDeleteClick?.(contact),
                    className: "h-8 w-8 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-lg",
                    title: "Delete Contact",
                    children: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(import_lucide_react40.Trash2, { className: "h-3.5 w-3.5" })
                  }
                )
              ] })
            ]
          },
          contact.id
        )) }),
        /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)(
          Button,
          {
            onClick: () => setIsAddOpen(true),
            className: "w-full h-10 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs shadow-xs transition-transform active:scale-[0.99] gap-1.5",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(import_lucide_react40.Plus, { className: "h-4 w-4" }),
              /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("span", { children: "Add New Contact" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(Dialog, { open: isAddOpen, onOpenChange: setIsAddOpen, children: /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)(DialogContent, { className: "sm:max-w-md rounded-2xl", children: [
          /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)(DialogHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(DialogTitle, { children: "Add New Contact" }),
            /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(DialogDescription, { children: "Enter contact details to start messaging directly." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)("form", { onSubmit: handleAddSubmit, className: "space-y-3 py-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)("div", { className: "space-y-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("label", { className: "text-xs font-medium text-foreground", children: "Name (Optional)" }),
              /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(
                Input,
                {
                  value: newName,
                  onChange: (e) => setNewName(e.target.value),
                  placeholder: "e.g. Aman",
                  className: "h-9 text-xs rounded-xl"
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)("div", { className: "space-y-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("label", { className: "text-xs font-medium text-foreground", children: "Email Address *" }),
              /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(
                Input,
                {
                  type: "email",
                  required: true,
                  value: newEmail,
                  onChange: (e) => setNewEmail(e.target.value),
                  placeholder: "e.g. aman@example.com",
                  className: "h-9 text-xs rounded-xl"
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)(DialogFooter, { className: "pt-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(
                Button,
                {
                  type: "button",
                  variant: "outline",
                  onClick: () => setIsAddOpen(false),
                  className: "rounded-xl text-xs",
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(Button, { type: "submit", className: "rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs", children: "Save Contact" })
            ] })
          ] })
        ] }) })
      ]
    }
  );
}

// src/design-system/components/chat/group-manager.tsx
var import_react14 = require("react");
var import_lucide_react41 = require("lucide-react");
var import_jsx_runtime86 = require("react/jsx-runtime");
function GroupManager({
  groups = [],
  title = "Groups Manager",
  description = "Manage your group channels and start team conversations.",
  searchPlaceholder = "Search groups...",
  onChatClick,
  onToggleStatus,
  onEditClick,
  onDeleteClick,
  onAddGroup,
  className
}) {
  const [searchQuery, setSearchQuery] = (0, import_react14.useState)("");
  const [isAddOpen, setIsAddOpen] = (0, import_react14.useState)(false);
  const [groupName, setGroupName] = (0, import_react14.useState)("");
  const [groupDesc, setGroupDesc] = (0, import_react14.useState)("");
  const filteredGroups = groups.filter(
    (g) => g.name.toLowerCase().includes(searchQuery.toLowerCase()) || g.ownerEmail && g.ownerEmail.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!groupName.trim()) return;
    onAddGroup?.({
      name: groupName.trim(),
      description: groupDesc.trim() || void 0
    });
    setGroupName("");
    setGroupDesc("");
    setIsAddOpen(false);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime86.jsxs)(
    "div",
    {
      className: cn(
        "w-full rounded-2xl border border-border/80 bg-background p-6 shadow-sm space-y-5",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime86.jsxs)("div", { className: "space-y-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime86.jsxs)("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(import_lucide_react41.Users, { className: "h-5 w-5 text-indigo-600 dark:text-indigo-400" }),
            /* @__PURE__ */ (0, import_jsx_runtime86.jsx)("h3", { className: "text-lg font-bold tracking-tight text-foreground", children: title })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime86.jsx)("p", { className: "text-xs text-muted-foreground", children: description })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime86.jsxs)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(import_lucide_react41.Search, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
          /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(
            Input,
            {
              type: "search",
              value: searchQuery,
              onChange: (e) => setSearchQuery(e.target.value),
              placeholder: searchPlaceholder,
              className: "pl-10 h-10 text-xs rounded-xl bg-background border-border/80 focus-visible:ring-1 focus-visible:ring-indigo-500/50"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime86.jsx)("div", { className: "space-y-2.5 max-h-[380px] overflow-y-auto pr-1", children: filteredGroups.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime86.jsx)("div", { className: "py-8 text-center text-xs text-muted-foreground", children: "No group channels found matching your search." }) : filteredGroups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime86.jsxs)(
          "div",
          {
            className: "flex items-center justify-between gap-3 rounded-2xl border border-border/70 bg-background/50 p-3 hover:border-border transition-all duration-150 shadow-2xs",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime86.jsxs)("div", { className: "flex items-center gap-3 min-w-0", children: [
                /* @__PURE__ */ (0, import_jsx_runtime86.jsxs)(Avatar, { className: "h-10 w-10 rounded-xl bg-slate-800 text-white font-bold border border-border/60 overflow-hidden", children: [
                  group.avatarUrl && /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(AvatarImage, { src: group.avatarUrl, alt: group.name, className: "object-cover" }),
                  /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(AvatarFallback, { className: "bg-slate-800 text-xs font-semibold text-white", children: group.name.slice(0, 2).toUpperCase() })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime86.jsxs)("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime86.jsx)("h4", { className: "truncate text-sm font-semibold text-foreground tracking-tight", children: group.name }),
                  /* @__PURE__ */ (0, import_jsx_runtime86.jsxs)("p", { className: "truncate text-xs text-muted-foreground", children: [
                    group.membersCount || 1,
                    " members ",
                    group.ownerEmail ? `\u2022 ${group.ownerEmail}` : ""
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime86.jsxs)("div", { className: "flex items-center gap-2 shrink-0", children: [
                /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(
                  Button,
                  {
                    variant: "ghost",
                    size: "icon",
                    onClick: () => onChatClick?.(group),
                    className: "h-8 w-8 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 rounded-lg",
                    title: "Open Group Chat",
                    children: /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(import_lucide_react41.MessageSquare, { className: "h-4 w-4" })
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(
                  Switch,
                  {
                    checked: group.isEnabled !== false,
                    onCheckedChange: (checked) => onToggleStatus?.(group, checked),
                    className: "data-[state=checked]:bg-slate-800 dark:data-[state=checked]:bg-slate-200"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(
                  Button,
                  {
                    variant: "ghost",
                    size: "icon",
                    onClick: () => onEditClick?.(group),
                    className: "h-8 w-8 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/40 rounded-lg",
                    title: "Edit Group",
                    children: /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(import_lucide_react41.Pencil, { className: "h-3.5 w-3.5" })
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(
                  Button,
                  {
                    variant: "ghost",
                    size: "icon",
                    onClick: () => onDeleteClick?.(group),
                    className: "h-8 w-8 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-lg",
                    title: "Delete Group",
                    children: /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(import_lucide_react41.Trash2, { className: "h-3.5 w-3.5" })
                  }
                )
              ] })
            ]
          },
          group.id
        )) }),
        /* @__PURE__ */ (0, import_jsx_runtime86.jsxs)(
          Button,
          {
            onClick: () => setIsAddOpen(true),
            className: "w-full h-10 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs shadow-xs transition-transform active:scale-[0.99] gap-1.5",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(import_lucide_react41.Plus, { className: "h-4 w-4" }),
              /* @__PURE__ */ (0, import_jsx_runtime86.jsx)("span", { children: "Add New Group" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(Dialog, { open: isAddOpen, onOpenChange: setIsAddOpen, children: /* @__PURE__ */ (0, import_jsx_runtime86.jsxs)(DialogContent, { className: "sm:max-w-md rounded-2xl", children: [
          /* @__PURE__ */ (0, import_jsx_runtime86.jsxs)(DialogHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(DialogTitle, { children: "Create New Group" }),
            /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(DialogDescription, { children: "Create a group channel to collaborate and chat with multiple members." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime86.jsxs)("form", { onSubmit: handleAddSubmit, className: "space-y-3 py-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime86.jsxs)("div", { className: "space-y-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime86.jsx)("label", { className: "text-xs font-medium text-foreground", children: "Group Name *" }),
              /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(
                Input,
                {
                  required: true,
                  value: groupName,
                  onChange: (e) => setGroupName(e.target.value),
                  placeholder: "e.g. Design Team Hub",
                  className: "h-9 text-xs rounded-xl"
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime86.jsxs)("div", { className: "space-y-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime86.jsx)("label", { className: "text-xs font-medium text-foreground", children: "Description (Optional)" }),
              /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(
                Input,
                {
                  value: groupDesc,
                  onChange: (e) => setGroupDesc(e.target.value),
                  placeholder: "e.g. Core team discussions",
                  className: "h-9 text-xs rounded-xl"
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime86.jsxs)(DialogFooter, { className: "pt-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(
                Button,
                {
                  type: "button",
                  variant: "outline",
                  onClick: () => setIsAddOpen(false),
                  className: "rounded-xl text-xs",
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(Button, { type: "submit", className: "rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs", children: "Create Group" })
            ] })
          ] })
        ] }) })
      ]
    }
  );
}

// src/design-system/components/ai-chat/ai-model-selector.tsx
var import_lucide_react42 = require("lucide-react");
var import_jsx_runtime87 = require("react/jsx-runtime");
var DEFAULT_AI_MODELS = [
  { id: "google/gemini-2.5-flash", name: "Gemini 2.5 Flash" },
  { id: "openai/gpt-4o", name: "GPT-4o" },
  { id: "anthropic/claude-3.5-sonnet", name: "Claude 3.5 Sonnet" },
  { id: "deepseek/deepseek-chat", name: "DeepSeek Chat" },
  { id: "meta-llama/llama-3.3-70b-instruct", name: "Llama 3.3 70B" }
];
function AiModelSelector({
  model = "google/gemini-2.5-flash",
  models = DEFAULT_AI_MODELS,
  onModelChange,
  disabled = false,
  className
}) {
  const currentModel = models.find((m) => m.id === model) || models[0];
  return /* @__PURE__ */ (0, import_jsx_runtime87.jsxs)(DropdownMenu, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(DropdownMenuTrigger, { asChild: true, disabled, children: /* @__PURE__ */ (0, import_jsx_runtime87.jsxs)(
      "button",
      {
        type: "button",
        className: cn(
          "flex items-center gap-1.5 px-3 py-1 rounded-full border border-border/80 bg-background hover:bg-muted text-xs font-medium text-foreground transition-all cursor-pointer shadow-2xs focus:outline-none select-none",
          className
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime87.jsx)("span", { className: "truncate max-w-[130px] font-semibold", children: currentModel?.name || "Select Model" }),
          /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(import_lucide_react42.ChevronDown, { className: "h-3 w-3 text-muted-foreground shrink-0" })
        ]
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(
      DropdownMenuContent,
      {
        align: "start",
        side: "top",
        sideOffset: 6,
        className: "w-48 rounded-2xl p-1 shadow-2xl border border-border/80 bg-background text-foreground space-y-0.5",
        children: models.map((m) => {
          const isSelected = m.id === model;
          return /* @__PURE__ */ (0, import_jsx_runtime87.jsxs)(
            DropdownMenuItem,
            {
              onClick: () => onModelChange?.(m.id),
              className: cn(
                "flex items-center justify-between py-2 px-3 text-xs font-semibold rounded-xl cursor-pointer transition-colors",
                isSelected ? "bg-slate-900 text-white dark:bg-slate-900 dark:text-white focus:bg-slate-900 focus:text-white" : "text-foreground hover:bg-muted/70 focus:bg-muted/70"
              ),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime87.jsx)("span", { className: "truncate", children: m.name }),
                isSelected && /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(import_lucide_react42.Check, { className: "h-3.5 w-3.5 shrink-0 text-white" })
              ]
            },
            m.id
          );
        })
      }
    )
  ] });
}

// src/design-system/components/ai-chat/ai-tool-selector.tsx
var import_lucide_react43 = require("lucide-react");
var import_jsx_runtime88 = require("react/jsx-runtime");
var DEFAULT_AI_TOOLS = [
  { id: "chat", name: "AI Chat", icon: "" },
  { id: "web-search", name: "Web Search", icon: "\u{1F310}" },
  { id: "ui-render", name: "UI Render", icon: "\u{1F3A8}" }
];
function AiToolSelector({
  tool = "chat",
  tools = DEFAULT_AI_TOOLS,
  onToolChange,
  disabled = false,
  className
}) {
  const currentTool = tools.find((t) => t.id === tool) || tools[0];
  return /* @__PURE__ */ (0, import_jsx_runtime88.jsxs)(DropdownMenu, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime88.jsx)(DropdownMenuTrigger, { asChild: true, disabled, children: /* @__PURE__ */ (0, import_jsx_runtime88.jsxs)(
      "button",
      {
        type: "button",
        className: cn(
          "flex items-center gap-1.5 px-3 py-1 rounded-full border border-border/80 bg-background hover:bg-muted text-xs font-medium text-foreground transition-all cursor-pointer shadow-2xs focus:outline-none select-none",
          className
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime88.jsx)("span", { className: "text-muted-foreground", children: "Tool:" }),
          /* @__PURE__ */ (0, import_jsx_runtime88.jsxs)("span", { className: "flex items-center gap-1 font-semibold", children: [
            currentTool.icon && /* @__PURE__ */ (0, import_jsx_runtime88.jsx)("span", { children: currentTool.icon }),
            /* @__PURE__ */ (0, import_jsx_runtime88.jsx)("span", { children: currentTool?.name || "Select Tool" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime88.jsx)(import_lucide_react43.ChevronDown, { className: "h-3 w-3 text-muted-foreground shrink-0" })
        ]
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime88.jsx)(
      DropdownMenuContent,
      {
        align: "start",
        side: "top",
        sideOffset: 6,
        className: "w-48 rounded-2xl p-1 shadow-2xl border border-border/80 bg-background text-foreground space-y-0.5",
        children: tools.map((t) => {
          const isSelected = t.id === tool;
          return /* @__PURE__ */ (0, import_jsx_runtime88.jsxs)(
            DropdownMenuItem,
            {
              onClick: () => onToolChange?.(t.id),
              className: cn(
                "flex items-center justify-between py-2 px-3 text-xs font-semibold rounded-xl cursor-pointer transition-colors",
                isSelected ? "bg-slate-900 text-white dark:bg-slate-900 dark:text-white focus:bg-slate-900 focus:text-white" : "text-foreground hover:bg-muted/70 focus:bg-muted/70"
              ),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime88.jsxs)("div", { className: "flex items-center gap-2", children: [
                  t.icon && /* @__PURE__ */ (0, import_jsx_runtime88.jsx)("span", { className: "text-sm shrink-0", children: t.icon }),
                  /* @__PURE__ */ (0, import_jsx_runtime88.jsx)("span", { className: "truncate", children: t.name })
                ] }),
                isSelected && /* @__PURE__ */ (0, import_jsx_runtime88.jsx)(import_lucide_react43.Check, { className: "h-3.5 w-3.5 shrink-0 text-white" })
              ]
            },
            t.id
          );
        })
      }
    )
  ] });
}

// src/design-system/components/ai-chat/ai-chat-input.tsx
var import_react15 = require("react");
var import_lucide_react44 = require("lucide-react");
var import_jsx_runtime89 = require("react/jsx-runtime");
function AiChatInput({
  value,
  onChange,
  onSend,
  placeholder = "Ask a question about your data...",
  disabled = false,
  isLoading = false,
  model = "google/gemini-2.5-flash",
  onModelChange,
  models,
  tool = "chat",
  onToolChange,
  tools,
  isListening = false,
  onVoiceToggle,
  onHistoryClick,
  onNewChatClick,
  className
}) {
  const textareaRef = (0, import_react15.useRef)(null);
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (value.trim() && !disabled && !isLoading) {
        onSend();
      }
    }
  };
  (0, import_react15.useEffect)(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 140)}px`;
    }
  }, [value]);
  const hasText = value.trim().length > 0;
  return /* @__PURE__ */ (0, import_jsx_runtime89.jsxs)(
    "div",
    {
      className: cn(
        "w-full rounded-3xl border border-border/80 bg-background p-3 flex flex-col gap-2 shadow-xs transition-all focus-within:border-indigo-500/60 focus-within:ring-1 focus-within:ring-indigo-500/20",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime89.jsxs)("div", { className: "flex items-center gap-2 px-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(
            "textarea",
            {
              ref: textareaRef,
              value,
              onChange: (e) => onChange(e.target.value),
              onKeyDown: handleKeyDown,
              placeholder: isListening ? "\u{1F3A4} Listening... Speak now" : isLoading ? "Thinking..." : placeholder,
              disabled: disabled || isLoading,
              rows: 1,
              className: "max-h-32 min-h-[26px] w-full resize-none bg-transparent text-sm sm:text-base outline-none placeholder:text-muted-foreground/80 disabled:cursor-not-allowed disabled:opacity-50 leading-relaxed"
            }
          ),
          onVoiceToggle && /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(
            "button",
            {
              type: "button",
              onClick: onVoiceToggle,
              disabled: disabled || isLoading,
              className: cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all cursor-pointer",
                isListening ? "bg-rose-500 text-white animate-pulse" : "text-muted-foreground hover:text-foreground hover:bg-muted"
              ),
              title: "Voice input",
              children: /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(import_lucide_react44.Mic, { className: "h-4.5 w-4.5" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(
            "button",
            {
              type: "button",
              onClick: onSend,
              disabled: !hasText || disabled || isLoading,
              className: cn(
                "flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all cursor-pointer shadow-xs",
                hasText && !disabled && !isLoading ? "bg-slate-800 hover:bg-slate-900 text-white dark:bg-slate-200 dark:text-slate-900 active:scale-95" : "bg-muted text-muted-foreground opacity-50 cursor-not-allowed"
              ),
              title: "Send",
              children: /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(import_lucide_react44.ArrowUp, { className: "h-4.5 w-4.5" })
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime89.jsxs)("div", { className: "flex items-center justify-between gap-2 pt-1 border-t border-border/40 overflow-x-auto no-scrollbar", children: [
          /* @__PURE__ */ (0, import_jsx_runtime89.jsxs)("div", { className: "flex items-center gap-1.5 shrink-0", children: [
            /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(
              AiModelSelector,
              {
                model,
                models,
                onModelChange,
                disabled: disabled || isLoading
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(
              AiToolSelector,
              {
                tool,
                tools,
                onToolChange,
                disabled: disabled || isLoading
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime89.jsxs)("div", { className: "flex items-center gap-1.5 shrink-0", children: [
            onHistoryClick && /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(
              "button",
              {
                type: "button",
                onClick: onHistoryClick,
                disabled: disabled || isLoading,
                className: "flex h-7 w-7 items-center justify-center rounded-full border border-border/70 hover:bg-muted text-muted-foreground hover:text-foreground transition-all cursor-pointer shadow-2xs",
                title: "Prompt History",
                children: /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(import_lucide_react44.History, { className: "h-3.5 w-3.5" })
              }
            ),
            onNewChatClick && /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(
              "button",
              {
                type: "button",
                onClick: onNewChatClick,
                disabled: disabled || isLoading,
                className: "flex h-7 w-7 items-center justify-center rounded-full border border-border/70 hover:bg-muted text-muted-foreground hover:text-foreground transition-all cursor-pointer shadow-2xs",
                title: "New Chat",
                children: /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(import_lucide_react44.Plus, { className: "h-3.5 w-3.5" })
              }
            )
          ] })
        ] })
      ]
    }
  );
}

// src/design-system/components/ai-chat/ai-message-bubble.tsx
var import_react_markdown = __toESM(require("react-markdown"));
var import_remark_gfm = __toESM(require("remark-gfm"));
var import_lucide_react45 = require("lucide-react");
var import_jsx_runtime90 = require("react/jsx-runtime");
function AiMessageBubble({
  id,
  role,
  content,
  senderName,
  modelName,
  avatarUrl,
  sources = [],
  images = [],
  isLoading = false,
  showPreviewBtn = false,
  onOpenPreview,
  onImageClick,
  className
}) {
  const isUser = role === "user";
  const authorLabel = senderName || (isUser ? "You" : "AI Assistant");
  return /* @__PURE__ */ (0, import_jsx_runtime90.jsxs)(
    "div",
    {
      id: id ? `ai-bubble-${id}` : void 0,
      className: cn("flex w-full gap-3 py-2 justify-start select-text", className),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime90.jsx)("div", { className: "shrink-0 mt-0.5", children: isUser ? /* @__PURE__ */ (0, import_jsx_runtime90.jsx)("div", { className: "flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900 shadow-2xs font-semibold text-xs", children: /* @__PURE__ */ (0, import_jsx_runtime90.jsx)(import_lucide_react45.User, { className: "h-4 w-4" }) }) : /* @__PURE__ */ (0, import_jsx_runtime90.jsx)("div", { className: "flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-900/40 shadow-2xs", children: /* @__PURE__ */ (0, import_jsx_runtime90.jsx)(import_lucide_react45.Bot, { className: "h-4 w-4" }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime90.jsxs)("div", { className: "flex flex-col min-w-0 flex-1 items-start gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime90.jsxs)("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime90.jsx)(
              "span",
              {
                className: cn(
                  "text-xs font-semibold",
                  isUser ? "text-muted-foreground/90" : "text-indigo-600 dark:text-indigo-400"
                ),
                children: authorLabel
              }
            ),
            !isUser && modelName && /* @__PURE__ */ (0, import_jsx_runtime90.jsxs)("span", { className: "text-[10px] text-muted-foreground font-normal", children: [
              "\u2022 ",
              modelName
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime90.jsxs)("div", { className: "text-sm sm:text-base text-foreground w-full leading-relaxed", children: [
            isLoading ? /* @__PURE__ */ (0, import_jsx_runtime90.jsxs)("div", { className: "flex items-center gap-1.5 py-1 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ (0, import_jsx_runtime90.jsx)("span", { className: "h-2 w-2 rounded-full bg-indigo-600 animate-pulse" }),
              /* @__PURE__ */ (0, import_jsx_runtime90.jsx)("span", { className: "h-2 w-2 rounded-full bg-indigo-600 animate-pulse delay-75" }),
              /* @__PURE__ */ (0, import_jsx_runtime90.jsx)("span", { className: "h-2 w-2 rounded-full bg-indigo-600 animate-pulse delay-150" }),
              /* @__PURE__ */ (0, import_jsx_runtime90.jsx)("span", { className: "ml-1", children: "Thinking..." })
            ] }) : isUser ? /* @__PURE__ */ (0, import_jsx_runtime90.jsx)("div", { className: "whitespace-pre-wrap", children: content }) : /* @__PURE__ */ (0, import_jsx_runtime90.jsx)("div", { className: "prose prose-sm dark:prose-invert max-w-none leading-relaxed break-words prose-p:leading-relaxed prose-pre:bg-muted/80 prose-pre:border prose-pre:border-border/50 prose-pre:rounded-xl prose-code:text-indigo-600 dark:prose-code:text-indigo-400 prose-code:font-mono prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none", children: /* @__PURE__ */ (0, import_jsx_runtime90.jsx)(import_react_markdown.default, { remarkPlugins: [import_remark_gfm.default], children: content }) }),
            !isUser && showPreviewBtn && onOpenPreview && /* @__PURE__ */ (0, import_jsx_runtime90.jsx)("div", { className: "mt-3 flex justify-start", children: /* @__PURE__ */ (0, import_jsx_runtime90.jsxs)(
              "button",
              {
                type: "button",
                onClick: onOpenPreview,
                className: "flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-indigo-200 dark:border-indigo-900/50 bg-indigo-50/50 dark:bg-indigo-950/20 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 hover:shadow-xs transition-all cursor-pointer",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime90.jsx)(import_lucide_react45.Sparkles, { className: "h-3.5 w-3.5" }),
                  /* @__PURE__ */ (0, import_jsx_runtime90.jsx)("span", { children: "Open Preview Panel" })
                ]
              }
            ) }),
            !isUser && sources.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime90.jsxs)("div", { className: "mt-3 space-y-1.5", children: [
              /* @__PURE__ */ (0, import_jsx_runtime90.jsxs)("div", { className: "flex items-center gap-1 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider", children: [
                /* @__PURE__ */ (0, import_jsx_runtime90.jsx)(import_lucide_react45.Globe, { className: "h-3.5 w-3.5 text-blue-500" }),
                /* @__PURE__ */ (0, import_jsx_runtime90.jsx)("span", { children: "Sources" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime90.jsx)("div", { className: "flex flex-wrap gap-2", children: sources.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime90.jsx)(
                "a",
                {
                  href: src.url,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl border border-border/80 bg-background hover:bg-muted text-xs text-foreground transition-colors shadow-2xs",
                  children: /* @__PURE__ */ (0, import_jsx_runtime90.jsx)("span", { className: "truncate max-w-[180px]", children: src.title })
                },
                i
              )) })
            ] }),
            !isUser && images.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime90.jsx)("div", { className: "mt-3 flex flex-wrap gap-2", children: images.map((img, idx) => /* @__PURE__ */ (0, import_jsx_runtime90.jsx)(
              "img",
              {
                src: img,
                alt: `AI generated ${idx}`,
                onClick: () => onImageClick?.(img),
                className: "h-28 w-28 rounded-xl object-cover border border-border/80 cursor-pointer hover:opacity-90 transition-opacity"
              },
              idx
            )) })
          ] })
        ] })
      ]
    }
  );
}

// src/design-system/components/ai-chat/ai-message-list.tsx
var import_react16 = require("react");

// src/design-system/components/ai-chat/ai-prompt-suggestions.tsx
var import_lucide_react46 = require("lucide-react");
var import_jsx_runtime91 = require("react/jsx-runtime");
var DEFAULT_AI_PROMPTS = [
  {
    title: "Explain React 19 features",
    description: "Deep dive into server actions, useActionState, and use() hook.",
    prompt: "Explain the new features of React 19 with examples of Server Actions and the use() hook.",
    tool: "chat",
    icon: /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(import_lucide_react46.Code, { className: "h-4 w-4 text-sky-500" })
  },
  {
    title: "Design user profile card",
    description: "Generates a rich, interactive UI card showing stats, avatar, and badges.",
    prompt: "Design a beautiful user profile card with follower count, location, badges and actions.",
    tool: "ui-render",
    icon: /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(import_lucide_react46.Palette, { className: "h-4 w-4 text-indigo-500" })
  },
  {
    title: "Search latest Tech news",
    description: "Searches the web for recent announcements in AI and technology.",
    prompt: "What are the key announcements from the latest tech conferences and AI releases this month?",
    tool: "web-search",
    icon: /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(import_lucide_react46.Search, { className: "h-4 w-4 text-emerald-500" })
  },
  {
    title: "Create feedback form",
    description: "Renders a beautiful form with textareas, ratings, and submittable actions.",
    prompt: "Build a premium user feedback form with input fields for name, email, rating select, and submit button.",
    tool: "ui-render",
    icon: /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(import_lucide_react46.FormInput, { className: "h-4 w-4 text-amber-500" })
  }
];
function AiPromptSuggestions({
  suggestions = DEFAULT_AI_PROMPTS,
  onSelectPrompt,
  title = "How can I help you today?",
  subtitle = "Choose a prompt below or start typing your question.",
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime91.jsxs)("div", { className: cn("flex flex-col items-center justify-center p-6 text-center max-w-2xl mx-auto space-y-6", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime91.jsxs)("div", { className: "space-y-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime91.jsx)("div", { className: "inline-flex p-3 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mb-1", children: /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(import_lucide_react46.Sparkles, { className: "h-6 w-6" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime91.jsx)("h2", { className: "text-xl sm:text-2xl font-bold tracking-tight text-foreground", children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime91.jsx)("p", { className: "text-xs text-muted-foreground", children: subtitle })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime91.jsx)("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3 w-full text-left", children: suggestions.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime91.jsxs)(
      "div",
      {
        onClick: () => onSelectPrompt?.(item.prompt, item.tool),
        className: "p-3.5 rounded-2xl border border-border/80 bg-background hover:bg-muted/40 hover:border-indigo-500/50 transition-all cursor-pointer shadow-2xs group flex flex-col justify-between gap-2",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime91.jsxs)("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime91.jsx)("div", { className: "p-1.5 rounded-lg bg-muted/60 shrink-0", children: item.icon }),
            /* @__PURE__ */ (0, import_jsx_runtime91.jsx)("h4", { className: "text-xs font-bold text-foreground group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors", children: item.title })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime91.jsx)("p", { className: "text-[11px] text-muted-foreground line-clamp-2", children: item.description })
        ]
      },
      idx
    )) })
  ] });
}

// src/design-system/components/ai-chat/ai-message-list.tsx
var import_jsx_runtime92 = require("react/jsx-runtime");
function AiMessageList({
  children,
  isEmpty = false,
  suggestions,
  onSelectPrompt,
  autoScrollToBottom = true,
  className
}) {
  const scrollRef = (0, import_react16.useRef)(null);
  (0, import_react16.useEffect)(() => {
    if (autoScrollToBottom && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [children, autoScrollToBottom]);
  return /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(
    "div",
    {
      ref: scrollRef,
      className: cn(
        "flex-1 w-full overflow-y-auto px-4 py-4 space-y-4 no-scrollbar",
        className
      ),
      children: isEmpty ? /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(
        AiPromptSuggestions,
        {
          suggestions,
          onSelectPrompt
        }
      ) : children
    }
  );
}

// src/design-system/components/ai-chat/ai-chat-header.tsx
var import_lucide_react47 = require("lucide-react");
var import_jsx_runtime93 = require("react/jsx-runtime");
function AiChatHeader({
  title = "AI Assistant",
  subtitle = "Powered by AI \xB7 Ask anything",
  modelName,
  showSparkles = true,
  showDefaultActions = true,
  onBack,
  actions,
  onNotificationClick,
  onFlagClick,
  onReply,
  onForward,
  onPin,
  onStar,
  onFavorite,
  onArchive,
  onActionThis,
  onDelete,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime93.jsxs)(
    "div",
    {
      className: cn(
        "flex items-center justify-between px-4 py-3 border-b border-border bg-background select-none",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime93.jsxs)("div", { className: "flex items-center gap-3 min-w-0", children: [
          onBack && /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(
            "button",
            {
              type: "button",
              onClick: onBack,
              className: "flex h-8 w-8 items-center justify-center rounded-xl hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer",
              title: "Back",
              children: /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(import_lucide_react47.ArrowLeft, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime93.jsx)("div", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-900/40 shrink-0 shadow-2xs", children: /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(import_lucide_react47.Bot, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime93.jsxs)("div", { className: "min-w-0", children: [
            /* @__PURE__ */ (0, import_jsx_runtime93.jsxs)("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ (0, import_jsx_runtime93.jsx)("h3", { className: "truncate text-sm font-bold text-foreground tracking-tight leading-snug", children: title }),
              showSparkles && /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(import_lucide_react47.Sparkles, { className: "h-3.5 w-3.5 text-indigo-500 shrink-0" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime93.jsx)("p", { className: "truncate text-xs text-muted-foreground leading-tight", children: subtitle ? subtitle : modelName ? `Powered by ${modelName}` : "Powered by AI \xB7 Ask anything" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime93.jsx)("div", { className: "flex items-center gap-1 shrink-0", children: actions ? actions : showDefaultActions ? /* @__PURE__ */ (0, import_jsx_runtime93.jsxs)("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(
            "button",
            {
              type: "button",
              onClick: onNotificationClick,
              className: "p-1.5 rounded-lg hover:bg-muted text-amber-500 hover:text-amber-600 transition-colors cursor-pointer",
              title: "Act on this",
              children: /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(import_lucide_react47.Bell, { className: "h-4.5 w-4.5" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(
            "button",
            {
              type: "button",
              onClick: onFlagClick,
              className: "p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer",
              title: "Flag",
              children: /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(import_lucide_react47.Flag, { className: "h-4.5 w-4.5" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime93.jsxs)(DropdownMenu, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(
              "button",
              {
                type: "button",
                className: "p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer",
                title: "More options",
                children: /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(import_lucide_react47.MoreVertical, { className: "h-4.5 w-4.5" })
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime93.jsxs)(
              DropdownMenuContent,
              {
                align: "end",
                className: "w-48 border border-border/80 bg-background shadow-lg p-1 space-y-0.5 rounded-xl",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(
                    DropdownMenuItem,
                    {
                      onClick: onReply,
                      className: "cursor-pointer text-xs flex items-center justify-between py-2 px-2.5 font-medium hover:bg-muted/80 rounded-md",
                      children: /* @__PURE__ */ (0, import_jsx_runtime93.jsxs)("div", { className: "flex items-center gap-2.5", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(import_lucide_react47.CornerUpLeft, { className: "h-4 w-4 text-blue-500" }),
                        /* @__PURE__ */ (0, import_jsx_runtime93.jsx)("span", { children: "Reply" })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(
                    DropdownMenuItem,
                    {
                      onClick: onForward,
                      className: "cursor-pointer text-xs flex items-center justify-between py-2 px-2.5 font-medium hover:bg-muted/80 rounded-md",
                      children: /* @__PURE__ */ (0, import_jsx_runtime93.jsxs)("div", { className: "flex items-center gap-2.5", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(import_lucide_react47.CornerUpRight, { className: "h-4 w-4 text-sky-500" }),
                        /* @__PURE__ */ (0, import_jsx_runtime93.jsx)("span", { children: "Forward" })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(
                    DropdownMenuItem,
                    {
                      onClick: onPin,
                      className: "cursor-pointer text-xs flex items-center justify-between py-2 px-2.5 font-medium hover:bg-muted/80 rounded-md",
                      children: /* @__PURE__ */ (0, import_jsx_runtime93.jsxs)("div", { className: "flex items-center gap-2.5", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(import_lucide_react47.Pin, { className: "h-4 w-4 text-purple-600" }),
                        /* @__PURE__ */ (0, import_jsx_runtime93.jsx)("span", { children: "Pin Message" })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(
                    DropdownMenuItem,
                    {
                      onClick: onStar,
                      className: "cursor-pointer text-xs flex items-center justify-between py-2 px-2.5 font-medium hover:bg-muted/80 rounded-md",
                      children: /* @__PURE__ */ (0, import_jsx_runtime93.jsxs)("div", { className: "flex items-center gap-2.5", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(import_lucide_react47.Star, { className: "h-4 w-4 text-amber-500" }),
                        /* @__PURE__ */ (0, import_jsx_runtime93.jsx)("span", { children: "Star" })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(
                    DropdownMenuItem,
                    {
                      onClick: onFavorite,
                      className: "cursor-pointer text-xs flex items-center justify-between py-2 px-2.5 font-medium hover:bg-muted/80 rounded-md",
                      children: /* @__PURE__ */ (0, import_jsx_runtime93.jsxs)("div", { className: "flex items-center gap-2.5", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(import_lucide_react47.Heart, { className: "h-4 w-4 text-rose-500" }),
                        /* @__PURE__ */ (0, import_jsx_runtime93.jsx)("span", { children: "Favorite" })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(
                    DropdownMenuItem,
                    {
                      onClick: onArchive,
                      className: "cursor-pointer text-xs flex items-center justify-between py-2 px-2.5 font-medium hover:bg-muted/80 rounded-md",
                      children: /* @__PURE__ */ (0, import_jsx_runtime93.jsxs)("div", { className: "flex items-center gap-2.5", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(import_lucide_react47.Archive, { className: "h-4 w-4 text-indigo-600" }),
                        /* @__PURE__ */ (0, import_jsx_runtime93.jsx)("span", { children: "Archive" })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime93.jsxs)(
                    DropdownMenuItem,
                    {
                      onClick: onActionThis,
                      className: "cursor-pointer text-xs flex items-center justify-between py-2 px-2.5 font-medium hover:bg-muted/80 rounded-md",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime93.jsxs)("div", { className: "flex items-center gap-2.5", children: [
                          /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(import_lucide_react47.Bell, { className: "h-4 w-4 text-amber-500" }),
                          /* @__PURE__ */ (0, import_jsx_runtime93.jsx)("span", { children: "Action This" })
                        ] }),
                        /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(import_lucide_react47.ChevronRight, { className: "h-3.5 w-3.5 text-muted-foreground" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime93.jsxs)(
                    DropdownMenuItem,
                    {
                      onClick: onDelete,
                      className: "cursor-pointer text-xs flex items-center justify-between py-2 px-2.5 font-medium hover:bg-rose-50 dark:hover:bg-rose-950/30 text-rose-500 hover:text-rose-600 rounded-md",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime93.jsxs)("div", { className: "flex items-center gap-2.5", children: [
                          /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(import_lucide_react47.Trash2, { className: "h-4 w-4 text-rose-500" }),
                          /* @__PURE__ */ (0, import_jsx_runtime93.jsx)("span", { children: "Delete" })
                        ] }),
                        /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(import_lucide_react47.ChevronRight, { className: "h-3.5 w-3.5 text-rose-400" })
                      ]
                    }
                  )
                ]
              }
            )
          ] })
        ] }) : null })
      ]
    }
  );
}

// src/design-system/components/files/file-card-item.tsx
var import_lucide_react48 = require("lucide-react");
var import_jsx_runtime94 = require("react/jsx-runtime");
function formatBytes(bytes, decimals = 1) {
  if (!bytes || bytes === 0) return "0 B";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["B", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}
function getFileCategoryTheme(category) {
  const cat = (category || "").toLowerCase();
  if (cat.includes("pdf")) {
    return {
      name: "Pdf",
      icon: import_lucide_react48.FileText,
      badgeColor: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-200/50",
      iconColor: "text-red-500",
      bgColor: "bg-red-50 dark:bg-red-950/30"
    };
  }
  if (cat.includes("doc") || cat.includes("word") || cat.includes("txt")) {
    return {
      name: "Doc",
      icon: import_lucide_react48.FileText,
      badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200/50",
      iconColor: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/30"
    };
  }
  if (cat.includes("xls") || cat.includes("csv") || cat.includes("sheet")) {
    return {
      name: "Spreadsheet",
      icon: import_lucide_react48.FileSpreadsheet,
      badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200/50",
      iconColor: "text-emerald-500",
      bgColor: "bg-emerald-50 dark:bg-emerald-950/30"
    };
  }
  if (cat.includes("image") || cat.includes("img") || cat.includes("png") || cat.includes("jpg")) {
    return {
      name: "Images",
      icon: import_lucide_react48.Image,
      badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200/50",
      iconColor: "text-amber-500",
      bgColor: "bg-amber-50 dark:bg-amber-950/30"
    };
  }
  if (cat.includes("video") || cat.includes("mp4") || cat.includes("mov")) {
    return {
      name: "Videos",
      icon: import_lucide_react48.Film,
      badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200/50",
      iconColor: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-950/30"
    };
  }
  if (cat.includes("zip") || cat.includes("rar") || cat.includes("tar")) {
    return {
      name: "Archives",
      icon: import_lucide_react48.Archive,
      badgeColor: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-200/50",
      iconColor: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-950/30"
    };
  }
  return {
    name: "Other",
    icon: import_lucide_react48.File,
    badgeColor: "bg-muted text-muted-foreground border-border/80",
    iconColor: "text-muted-foreground",
    bgColor: "bg-muted/40"
  };
}
function formatTimeAgo(dateString) {
  if (!dateString) return "recently";
  try {
    const d = new Date(dateString);
    const diff = (Date.now() - d.getTime()) / 1e3;
    if (diff < 60) return "just now";
    if (diff < 3600) return `${Math.floor(diff / 60)} mins ago`;
    if (diff < 86400) {
      const hours = Math.floor(diff / 3600);
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    }
    const days = Math.floor(diff / 86400);
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } catch {
    return "recently";
  }
}
function FileCardItem({
  file,
  viewMode = "grid",
  isSelected = false,
  onSelect,
  onPreview,
  onDownload,
  onDelete,
  onCopyLink,
  onRename,
  onShare,
  className
}) {
  const theme = getFileCategoryTheme(file.category);
  const isImage = theme.name === "Images" || file.fileName.match(/\.(jpg|jpeg|png|webp|gif|svg)$/i) || file.fileUrl && file.fileUrl.startsWith("http") && !file.fileUrl.endsWith(".pdf");
  if (viewMode === "table") {
    return /* @__PURE__ */ (0, import_jsx_runtime94.jsxs)(
      "tr",
      {
        className: cn(
          "group border-b border-border/60 transition-colors hover:bg-muted/40 text-xs",
          isSelected && "bg-primary/5",
          className
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime94.jsx)("td", { className: "py-2.5 px-3", children: /* @__PURE__ */ (0, import_jsx_runtime94.jsxs)("div", { className: "flex items-center gap-2.5 min-w-0", children: [
            /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(
              "div",
              {
                className: cn(
                  "flex h-7 w-7 items-center justify-center rounded-lg shrink-0",
                  theme.bgColor,
                  theme.iconColor
                ),
                children: /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(theme.icon, { className: "h-3.5 w-3.5" })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime94.jsx)("span", { className: "font-semibold text-foreground truncate max-w-[200px]", children: file.fileName })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime94.jsx)("td", { className: "py-2.5 px-3 text-muted-foreground truncate max-w-[140px]", children: file.folderPath || file.section || "General" }),
          /* @__PURE__ */ (0, import_jsx_runtime94.jsx)("td", { className: "py-2.5 px-3 text-muted-foreground font-mono", children: formatBytes(file.fileSize) }),
          /* @__PURE__ */ (0, import_jsx_runtime94.jsx)("td", { className: "py-2.5 px-3 text-muted-foreground", children: formatTimeAgo(file.updatedAt) }),
          /* @__PURE__ */ (0, import_jsx_runtime94.jsx)("td", { className: "py-2.5 px-3 text-right", children: /* @__PURE__ */ (0, import_jsx_runtime94.jsxs)("div", { className: "flex items-center justify-end gap-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime94.jsxs)(
              Button,
              {
                size: "sm",
                variant: "ghost",
                onClick: () => onPreview?.(file),
                className: "h-7 px-2.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500/20 text-xs font-semibold gap-1.5",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(import_lucide_react48.Eye, { className: "h-3.5 w-3.5" }),
                  " Preview"
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(
              Button,
              {
                size: "icon",
                variant: "ghost",
                onClick: () => onDownload?.(file),
                className: "h-7 w-7 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground",
                children: /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(import_lucide_react48.Download, { className: "h-3.5 w-3.5" })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime94.jsxs)(DropdownMenu, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(
                Button,
                {
                  size: "icon",
                  variant: "ghost",
                  className: "h-7 w-7 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground",
                  children: /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(import_lucide_react48.MoreHorizontal, { className: "h-3.5 w-3.5" })
                }
              ) }),
              /* @__PURE__ */ (0, import_jsx_runtime94.jsxs)(DropdownMenuContent, { align: "end", className: "w-40 rounded-xl p-1 shadow-lg", children: [
                /* @__PURE__ */ (0, import_jsx_runtime94.jsxs)(DropdownMenuItem, { onClick: () => onPreview?.(file), className: "gap-2 text-xs", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(import_lucide_react48.Eye, { className: "h-3.5 w-3.5" }),
                  " Preview"
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime94.jsxs)(DropdownMenuItem, { onClick: () => onDownload?.(file), className: "gap-2 text-xs", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(import_lucide_react48.Download, { className: "h-3.5 w-3.5" }),
                  " Download"
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime94.jsxs)(DropdownMenuItem, { onClick: () => onCopyLink?.(file), className: "gap-2 text-xs", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(import_lucide_react48.Copy, { className: "h-3.5 w-3.5" }),
                  " Copy Link"
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(DropdownMenuSeparator, {}),
                /* @__PURE__ */ (0, import_jsx_runtime94.jsxs)(
                  DropdownMenuItem,
                  {
                    onClick: () => onDelete?.(file),
                    className: "gap-2 text-xs text-destructive focus:text-destructive",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(import_lucide_react48.Trash2, { className: "h-3.5 w-3.5" }),
                      " Delete"
                    ]
                  }
                )
              ] })
            ] })
          ] }) })
        ]
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime94.jsxs)(
    "div",
    {
      className: cn(
        "group relative flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-2.5 shadow-2xs hover:shadow-md transition-all hover:border-indigo-300 dark:hover:border-indigo-700 select-none",
        isSelected && "ring-2 ring-indigo-500 bg-indigo-500/5",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime94.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime94.jsx)("div", { className: "relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-muted/60 mb-2.5 flex items-center justify-center", children: isImage && file.fileUrl ? /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(
            "img",
            {
              src: file.fileUrl,
              alt: file.fileName,
              className: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105",
              loading: "lazy"
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime94.jsxs)(
            "div",
            {
              className: cn(
                "flex flex-col items-center justify-center gap-1.5 w-full h-full p-4",
                theme.bgColor
              ),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(theme.icon, { className: cn("h-10 w-10", theme.iconColor) }),
                /* @__PURE__ */ (0, import_jsx_runtime94.jsx)("span", { className: "text-[11px] font-bold uppercase tracking-wider text-muted-foreground", children: theme.name })
              ]
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime94.jsxs)("div", { className: "px-1 min-w-0", children: [
            /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(
              "h3",
              {
                className: "text-sm font-bold text-foreground truncate tracking-tight",
                title: file.fileName,
                children: file.fileName
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime94.jsxs)("p", { className: "text-xs text-muted-foreground truncate mt-0.5 flex items-center gap-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime94.jsx)("span", { children: file.folderPath || `Chat/${file.senderEmail || "amanmicropay@gmail.com"}` }),
              /* @__PURE__ */ (0, import_jsx_runtime94.jsx)("span", { children: "\xB7" }),
              /* @__PURE__ */ (0, import_jsx_runtime94.jsx)("span", { children: formatTimeAgo(file.updatedAt) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime94.jsxs)("div", { className: "flex items-center gap-1.5 mt-2.5 pt-2 border-t border-border/40 px-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime94.jsxs)(
            Button,
            {
              size: "sm",
              variant: "ghost",
              onClick: () => onPreview?.(file),
              className: "h-7 px-2.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500/20 text-xs font-semibold gap-1.5 flex-1 justify-center cursor-pointer",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(import_lucide_react48.Eye, { className: "h-3.5 w-3.5" }),
                " Preview"
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(
            Button,
            {
              size: "icon",
              variant: "ghost",
              onClick: () => onDownload?.(file),
              className: "h-7 w-7 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer",
              title: "Download",
              children: /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(import_lucide_react48.Download, { className: "h-3.5 w-3.5" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime94.jsxs)(DropdownMenu, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(
              Button,
              {
                size: "icon",
                variant: "ghost",
                className: "h-7 w-7 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer",
                title: "More actions",
                children: /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(import_lucide_react48.MoreHorizontal, { className: "h-3.5 w-3.5" })
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime94.jsxs)(DropdownMenuContent, { align: "end", className: "w-40 rounded-xl p-1 shadow-lg", children: [
              /* @__PURE__ */ (0, import_jsx_runtime94.jsxs)(DropdownMenuItem, { onClick: () => onPreview?.(file), className: "gap-2 text-xs", children: [
                /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(import_lucide_react48.Eye, { className: "h-3.5 w-3.5" }),
                " Preview"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime94.jsxs)(DropdownMenuItem, { onClick: () => onDownload?.(file), className: "gap-2 text-xs", children: [
                /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(import_lucide_react48.Download, { className: "h-3.5 w-3.5" }),
                " Download"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime94.jsxs)(DropdownMenuItem, { onClick: () => onCopyLink?.(file), className: "gap-2 text-xs", children: [
                /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(import_lucide_react48.Copy, { className: "h-3.5 w-3.5" }),
                " Copy Link"
              ] }),
              onShare && /* @__PURE__ */ (0, import_jsx_runtime94.jsxs)(DropdownMenuItem, { onClick: () => onShare?.(file), className: "gap-2 text-xs", children: [
                /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(import_lucide_react48.Share2, { className: "h-3.5 w-3.5" }),
                " Share"
              ] }),
              onRename && /* @__PURE__ */ (0, import_jsx_runtime94.jsxs)(DropdownMenuItem, { onClick: () => onRename?.(file), className: "gap-2 text-xs", children: [
                /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(import_lucide_react48.Edit2, { className: "h-3.5 w-3.5" }),
                " Rename"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(DropdownMenuSeparator, {}),
              /* @__PURE__ */ (0, import_jsx_runtime94.jsxs)(
                DropdownMenuItem,
                {
                  onClick: () => onDelete?.(file),
                  className: "gap-2 text-xs text-destructive focus:text-destructive",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(import_lucide_react48.Trash2, { className: "h-3.5 w-3.5" }),
                    " Delete"
                  ]
                }
              )
            ] })
          ] })
        ] })
      ]
    }
  );
}

// src/design-system/components/files/folder-tree-item.tsx
var import_lucide_react49 = require("lucide-react");
var import_jsx_runtime95 = require("react/jsx-runtime");
function FolderTreeItem({
  folder,
  isFolderActive,
  isExpanded,
  onToggleExpand,
  onSelectFolder,
  className
}) {
  const isLevel0 = folder.level === 0;
  const isLevel1 = folder.level === 1;
  const isLevel2 = folder.level === 2;
  const hasChildren = isLevel0 || isLevel1;
  return /* @__PURE__ */ (0, import_jsx_runtime95.jsxs)(
    "div",
    {
      id: `folder-card-${folder.id}`,
      onClick: () => {
        if (hasChildren) {
          onToggleExpand(folder.id);
        } else {
          onSelectFolder(folder);
        }
      },
      className: cn(
        "group relative flex cursor-pointer items-center justify-between gap-2 rounded-xl py-1.5 px-2 transition-all duration-200 select-none border",
        isLevel0 && "font-bold bg-muted/20 border-border/50 my-1",
        isLevel1 && "ml-3 border-border/40 my-0.5",
        isLevel2 && "ml-6 border-transparent hover:bg-muted/40 my-0.5",
        isFolderActive ? "border-indigo-300 bg-indigo-500/15 text-indigo-600 dark:border-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-400 font-bold shadow-2xs" : "bg-card hover:bg-indigo-500/5 hover:border-indigo-200/40",
        className
      ),
      children: [
        isFolderActive && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("div", { className: "absolute top-1 bottom-1 left-0 w-1 rounded-l-full bg-indigo-600" }),
        /* @__PURE__ */ (0, import_jsx_runtime95.jsxs)("div", { className: "flex items-center gap-1.5 min-w-0 flex-1", children: [
          hasChildren && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(
            "button",
            {
              type: "button",
              onClick: (e) => onToggleExpand(folder.id, e),
              className: "flex h-4 w-4 shrink-0 items-center justify-center rounded text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer",
              children: isExpanded ? /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(import_lucide_react49.ChevronDown, { className: "h-3 w-3" }) : /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(import_lucide_react49.ChevronRight, { className: "h-3 w-3" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(
            "div",
            {
              className: cn(
                "flex shrink-0 items-center justify-center rounded-lg text-indigo-600 dark:text-indigo-400 transition-colors",
                isLevel0 ? "h-6 w-6 border border-indigo-200/40 bg-indigo-500/10" : isLevel1 ? "h-5.5 w-5.5 border border-indigo-200/30 bg-indigo-500/5" : "h-5 w-5"
              ),
              children: isExpanded ? /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(
                import_lucide_react49.FolderOpen,
                {
                  className: isLevel0 ? "h-3.5 w-3.5" : isLevel1 ? "h-3 w-3" : "h-3 w-3 text-indigo-500"
                }
              ) : /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(
                import_lucide_react49.Folder,
                {
                  className: isLevel0 ? "h-3.5 w-3.5" : isLevel1 ? "h-3 w-3" : "h-3 w-3 text-indigo-500"
                }
              )
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(
            "span",
            {
              className: cn(
                "truncate text-foreground",
                isLevel0 ? "text-xs font-bold" : isLevel1 ? "text-[11px] font-semibold" : "text-[11px] font-medium",
                isFolderActive && "text-indigo-600 dark:text-indigo-400"
              ),
              children: folder.name
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(
          Badge,
          {
            variant: isFolderActive ? "default" : "secondary",
            className: cn(
              "text-[10px] px-1.5 py-0 h-4 min-w-4 flex items-center justify-center font-mono",
              isFolderActive ? "bg-indigo-600 text-white" : "bg-muted text-muted-foreground group-hover:bg-indigo-500/10 group-hover:text-indigo-600"
            ),
            children: folder.fileCount
          }
        )
      ]
    }
  );
}

// src/design-system/components/files/storage-stat-card.tsx
var import_lucide_react50 = require("lucide-react");
var import_jsx_runtime96 = require("react/jsx-runtime");
function StorageStatCard({
  totalFiles,
  totalSizeBytes = 0,
  maxStorageBytes = 10 * 1024 * 1024 * 1024,
  // 10 GB default
  stats,
  onViewAllFiles,
  onUploadClick,
  className
}) {
  const percentUsed = Math.min(
    100,
    Math.max(1, Math.round(totalSizeBytes / (maxStorageBytes || 1) * 100))
  );
  const defaultStats = stats || [
    {
      label: "Documents & PDFs",
      count: Math.round(totalFiles * 0.4),
      sizeBytes: Math.round(totalSizeBytes * 0.45),
      colorClass: "bg-red-500",
      icon: /* @__PURE__ */ (0, import_jsx_runtime96.jsx)(import_lucide_react50.FileText, { className: "h-4 w-4 text-red-500" })
    },
    {
      label: "Images & Photos",
      count: Math.round(totalFiles * 0.35),
      sizeBytes: Math.round(totalSizeBytes * 0.3),
      colorClass: "bg-amber-500",
      icon: /* @__PURE__ */ (0, import_jsx_runtime96.jsx)(import_lucide_react50.Image, { className: "h-4 w-4 text-amber-500" })
    },
    {
      label: "Media & Videos",
      count: Math.round(totalFiles * 0.15),
      sizeBytes: Math.round(totalSizeBytes * 0.2),
      colorClass: "bg-purple-500",
      icon: /* @__PURE__ */ (0, import_jsx_runtime96.jsx)(import_lucide_react50.Film, { className: "h-4 w-4 text-purple-500" })
    },
    {
      label: "Other & Archives",
      count: Math.max(0, totalFiles - Math.round(totalFiles * 0.9)),
      sizeBytes: Math.round(totalSizeBytes * 0.05),
      colorClass: "bg-indigo-500",
      icon: /* @__PURE__ */ (0, import_jsx_runtime96.jsx)(import_lucide_react50.Database, { className: "h-4 w-4 text-indigo-500" })
    }
  ];
  return /* @__PURE__ */ (0, import_jsx_runtime96.jsxs)(
    "div",
    {
      className: cn(
        "flex flex-col gap-4 rounded-2xl border border-border/80 bg-card p-4 shadow-2xs select-none",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime96.jsxs)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime96.jsxs)("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ (0, import_jsx_runtime96.jsx)("div", { className: "flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-200/40", children: /* @__PURE__ */ (0, import_jsx_runtime96.jsx)(import_lucide_react50.HardDrive, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime96.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime96.jsx)("h3", { className: "text-xs font-bold text-foreground", children: "Storage Overview" }),
              /* @__PURE__ */ (0, import_jsx_runtime96.jsxs)("p", { className: "text-[11px] text-muted-foreground", children: [
                totalFiles,
                " items stored in workspace"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime96.jsxs)("div", { className: "text-right", children: [
            /* @__PURE__ */ (0, import_jsx_runtime96.jsx)("p", { className: "text-xs font-bold text-foreground font-mono", children: formatBytes(totalSizeBytes) }),
            /* @__PURE__ */ (0, import_jsx_runtime96.jsxs)("p", { className: "text-[10px] text-muted-foreground font-mono", children: [
              "of ",
              formatBytes(maxStorageBytes)
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime96.jsxs)("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ (0, import_jsx_runtime96.jsx)("div", { className: "flex h-2.5 w-full overflow-hidden rounded-full bg-muted/60 p-0.5 border border-border/40", children: /* @__PURE__ */ (0, import_jsx_runtime96.jsx)(
            "div",
            {
              className: "h-full rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-amber-500 transition-all duration-500",
              style: { width: `${percentUsed}%` }
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime96.jsxs)("div", { className: "flex justify-between text-[10px] text-muted-foreground", children: [
            /* @__PURE__ */ (0, import_jsx_runtime96.jsxs)("span", { children: [
              percentUsed,
              "% capacity utilized"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime96.jsxs)("span", { children: [
              formatBytes(Math.max(0, maxStorageBytes - totalSizeBytes)),
              " available"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime96.jsx)("div", { className: "grid grid-cols-2 gap-2 pt-1", children: defaultStats.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime96.jsxs)(
          "div",
          {
            className: "flex items-center gap-2 rounded-xl border border-border/40 bg-muted/20 p-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime96.jsx)("div", { className: "shrink-0", children: item.icon }),
              /* @__PURE__ */ (0, import_jsx_runtime96.jsxs)("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ (0, import_jsx_runtime96.jsx)("p", { className: "truncate text-[11px] font-semibold text-foreground", children: item.label }),
                /* @__PURE__ */ (0, import_jsx_runtime96.jsxs)("div", { className: "flex items-center justify-between text-[10px] text-muted-foreground", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime96.jsxs)("span", { children: [
                    item.count,
                    " files"
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime96.jsx)("span", { className: "font-mono", children: formatBytes(item.sizeBytes) })
                ] })
              ] })
            ]
          },
          idx
        )) }),
        (onViewAllFiles || onUploadClick) && /* @__PURE__ */ (0, import_jsx_runtime96.jsxs)("div", { className: "flex items-center justify-between pt-2 border-t border-border/50", children: [
          onViewAllFiles && /* @__PURE__ */ (0, import_jsx_runtime96.jsxs)(
            "button",
            {
              type: "button",
              onClick: onViewAllFiles,
              className: "text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 cursor-pointer",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime96.jsx)("span", { children: "Explore All Files" }),
                /* @__PURE__ */ (0, import_jsx_runtime96.jsx)(import_lucide_react50.ArrowUpRight, { className: "h-3.5 w-3.5" })
              ]
            }
          ),
          onUploadClick && /* @__PURE__ */ (0, import_jsx_runtime96.jsx)(
            "button",
            {
              type: "button",
              onClick: onUploadClick,
              className: "text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-700 px-3 py-1 rounded-lg transition-colors cursor-pointer",
              children: "Upload New"
            }
          )
        ] })
      ]
    }
  );
}

// src/design-system/components/files/user-file-cards-view.tsx
var import_react17 = require("react");
var import_lucide_react51 = require("lucide-react");
var import_jsx_runtime97 = require("react/jsx-runtime");
function UserFileCardsView({
  folder,
  files,
  selectedFileId,
  onSelectFileForPreview,
  onDownloadFile,
  onDeleteFile,
  onCopyLink,
  onRenameFile,
  onShareFile,
  onUploadClick,
  onBack,
  onClose,
  className
}) {
  const [searchQuery, setSearchQuery] = (0, import_react17.useState)("");
  const [selectedCategory, setSelectedCategory] = (0, import_react17.useState)("all");
  const [sortBy, setSortBy] = (0, import_react17.useState)("date");
  const [sortOrder, setSortOrder] = (0, import_react17.useState)("desc");
  const [viewMode, setViewMode] = (0, import_react17.useState)("grid");
  const [currentPage, setCurrentPage] = (0, import_react17.useState)(1);
  const itemsPerPage = viewMode === "grid" ? 12 : 20;
  const [selectedIds, setSelectedIds] = (0, import_react17.useState)(/* @__PURE__ */ new Set());
  const filteredFiles = (0, import_react17.useMemo)(() => {
    return files.filter((f) => {
      if (folder) {
        if (folder.category) {
          const cat = folder.category.toLowerCase();
          if (cat === "xls") {
            if (f.category.toLowerCase() !== "xls" && f.category.toLowerCase() !== "csv") return false;
          } else if (f.category.toLowerCase() !== cat) {
            return false;
          }
        } else if (folder.level === 2 || ["Images", "Pdf", "Doc", "Xls", "Videos", "Ppt", "Txt", "Csv", "Zip", "Other"].includes(
          folder.name
        )) {
          const cat = folder.name.toLowerCase();
          if (cat === "xls") {
            if (f.category.toLowerCase() !== "xls" && f.category.toLowerCase() !== "csv") return false;
          } else if (f.category.toLowerCase() !== cat) {
            return false;
          }
        }
      }
      const matchCategory = selectedCategory === "all" || f.category.toLowerCase() === selectedCategory.toLowerCase() || selectedCategory === "Xls" && (f.category === "Csv" || f.category === "Xls");
      const matchSearch = !searchQuery.trim() || f.fileName.toLowerCase().includes(searchQuery.toLowerCase()) || f.folderPath && f.folderPath.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [files, folder, selectedCategory, searchQuery]);
  const sortedFiles = (0, import_react17.useMemo)(() => {
    return [...filteredFiles].sort((a, b) => {
      let compare = 0;
      if (sortBy === "date") {
        const timeA = a.updatedAt ? new Date(a.updatedAt).getTime() : 0;
        const timeB = b.updatedAt ? new Date(b.updatedAt).getTime() : 0;
        compare = timeB - timeA;
      } else if (sortBy === "name") {
        compare = a.fileName.localeCompare(b.fileName);
      } else if (sortBy === "size") {
        compare = (b.fileSize || 0) - (a.fileSize || 0);
      }
      return sortOrder === "asc" ? -compare : compare;
    });
  }, [filteredFiles, sortBy, sortOrder]);
  const totalPages = Math.ceil(sortedFiles.length / itemsPerPage) || 1;
  const paginatedFiles = (0, import_react17.useMemo)(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return sortedFiles.slice(start, start + itemsPerPage);
  }, [sortedFiles, currentPage, itemsPerPage]);
  const totalBytes = (0, import_react17.useMemo)(() => {
    return files.reduce((acc, curr) => acc + (curr.fileSize || 0), 0);
  }, [files]);
  const handleBulkDownload = () => {
    const toDownload = files.filter((f) => selectedIds.has(f.id));
    toDownload.forEach((f) => onDownloadFile?.(f));
  };
  const handleBulkDelete = () => {
    const toDelete = files.filter((f) => selectedIds.has(f.id));
    toDelete.forEach((f) => onDeleteFile?.(f));
    setSelectedIds(/* @__PURE__ */ new Set());
  };
  const folderDisplayName = folder?.name || "Images";
  const folderDisplayPath = folder?.path || "Chat/amanmicropay@gmail.com/Images";
  return /* @__PURE__ */ (0, import_jsx_runtime97.jsxs)(
    "div",
    {
      className: cn(
        "flex h-full min-h-0 w-full flex-1 flex-col overflow-hidden bg-background select-none",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime97.jsxs)("div", { className: "flex items-center justify-between border-b border-border bg-background px-4 py-3 shrink-0", children: [
          /* @__PURE__ */ (0, import_jsx_runtime97.jsxs)("div", { className: "flex items-center gap-3 min-w-0", children: [
            onBack && /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(
              "button",
              {
                type: "button",
                onClick: onBack,
                className: "flex h-8 w-8 items-center justify-center rounded-xl text-muted-foreground hover:bg-muted hover:text-foreground transition-colors cursor-pointer",
                title: "Back",
                children: /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(import_lucide_react51.ArrowLeft, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime97.jsx)("div", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-200/50 dark:border-indigo-900/40 shrink-0 shadow-2xs", children: /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(import_lucide_react51.FolderOpen, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime97.jsxs)("div", { className: "min-w-0", children: [
              /* @__PURE__ */ (0, import_jsx_runtime97.jsxs)("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ (0, import_jsx_runtime97.jsx)("h2", { className: "truncate text-base font-bold text-foreground tracking-tight", children: folderDisplayName }),
                /* @__PURE__ */ (0, import_jsx_runtime97.jsxs)("span", { className: "px-2 py-0.5 rounded-full bg-muted text-xs font-normal text-muted-foreground shrink-0", children: [
                  filteredFiles.length,
                  " files"
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime97.jsxs)("p", { className: "truncate text-xs text-muted-foreground mt-0.5", children: [
                "Storage folder: ",
                folderDisplayPath
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime97.jsxs)("div", { className: "flex items-center gap-1 shrink-0", children: [
            /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(
              "button",
              {
                type: "button",
                className: "p-2 rounded-lg text-amber-500 hover:bg-muted transition-colors cursor-pointer",
                title: "Notifications",
                children: /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(import_lucide_react51.Bell, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(
              "button",
              {
                type: "button",
                className: "p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer",
                title: "Flag / Report",
                children: /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(import_lucide_react51.Flag, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime97.jsxs)(DropdownMenu, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(
                "button",
                {
                  type: "button",
                  className: "p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer",
                  title: "Options",
                  children: /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(import_lucide_react51.MoreVertical, { className: "h-4 w-4" })
                }
              ) }),
              /* @__PURE__ */ (0, import_jsx_runtime97.jsxs)(DropdownMenuContent, { align: "end", className: "w-44 rounded-xl p-1 shadow-lg", children: [
                onUploadClick && /* @__PURE__ */ (0, import_jsx_runtime97.jsxs)(DropdownMenuItem, { onClick: onUploadClick, className: "gap-2 text-xs", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(import_lucide_react51.Upload, { className: "h-3.5 w-3.5" }),
                  " Upload Files"
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime97.jsxs)(DropdownMenuItem, { onClick: () => setViewMode(viewMode === "grid" ? "table" : "grid"), className: "gap-2 text-xs", children: [
                  viewMode === "grid" ? /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(import_lucide_react51.List, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(import_lucide_react51.LayoutGrid, { className: "h-3.5 w-3.5" }),
                  "Switch to ",
                  viewMode === "grid" ? "Table" : "Card",
                  " View"
                ] })
              ] })
            ] }),
            (onClose || onBack) && /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(
              "button",
              {
                type: "button",
                onClick: onClose || onBack,
                className: "p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer",
                title: "Close",
                children: /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(import_lucide_react51.X, { className: "h-4 w-4" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime97.jsxs)("div", { className: "flex flex-wrap items-center justify-between gap-2 px-4 pt-3 pb-2 shrink-0", children: [
          /* @__PURE__ */ (0, import_jsx_runtime97.jsxs)("div", { className: "flex items-center gap-2 overflow-x-auto py-0.5", children: [
            /* @__PURE__ */ (0, import_jsx_runtime97.jsxs)(
              Button,
              {
                variant: "outline",
                size: "sm",
                className: "h-8 gap-1.5 text-xs font-bold text-muted-foreground rounded-xl border-border px-3 shrink-0",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(import_lucide_react51.ArrowLeftRight, { className: "h-3.5 w-3.5 text-muted-foreground" }),
                  "LTR"
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime97.jsxs)(
              Button,
              {
                variant: "outline",
                size: "sm",
                className: "h-8 gap-1.5 text-xs font-bold text-muted-foreground rounded-xl border-border px-3 shrink-0",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(import_lucide_react51.Filter, { className: "h-3.5 w-3.5 text-muted-foreground" }),
                  "FILTER"
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime97.jsxs)(DropdownMenu, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime97.jsxs)(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  className: "h-8 gap-1.5 text-xs font-bold text-muted-foreground rounded-xl border-border px-3 shrink-0",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(import_lucide_react51.ArrowUpDown, { className: "h-3.5 w-3.5 text-muted-foreground" }),
                    "SORT"
                  ]
                }
              ) }),
              /* @__PURE__ */ (0, import_jsx_runtime97.jsxs)(DropdownMenuContent, { align: "start", className: "w-40 rounded-xl p-1 shadow-lg", children: [
                /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(DropdownMenuItem, { onClick: () => setSortBy("date"), className: "text-xs", children: "Date Modified" }),
                /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(DropdownMenuItem, { onClick: () => setSortBy("name"), className: "text-xs", children: "File Name" }),
                /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(DropdownMenuItem, { onClick: () => setSortBy("size"), className: "text-xs", children: "File Size" })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime97.jsxs)(
              Button,
              {
                variant: "outline",
                size: "sm",
                className: "h-8 gap-1.5 text-xs font-bold text-muted-foreground rounded-xl border-border px-3 shrink-0",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(import_lucide_react51.SlidersHorizontal, { className: "h-3.5 w-3.5 text-muted-foreground" }),
                  "SHORT"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(
            Button,
            {
              onClick: () => setViewMode(viewMode === "grid" ? "table" : "grid"),
              size: "sm",
              className: "h-8 gap-1.5 text-xs font-bold rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs px-3.5 shrink-0 cursor-pointer",
              children: viewMode === "grid" ? /* @__PURE__ */ (0, import_jsx_runtime97.jsxs)(import_jsx_runtime97.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(import_lucide_react51.LayoutGrid, { className: "h-3.5 w-3.5" }),
                "VIEW: CARD"
              ] }) : /* @__PURE__ */ (0, import_jsx_runtime97.jsxs)(import_jsx_runtime97.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(import_lucide_react51.List, { className: "h-3.5 w-3.5" }),
                "VIEW: TABLE"
              ] })
            }
          )
        ] }),
        (!folder || folder.level < 2) && /* @__PURE__ */ (0, import_jsx_runtime97.jsx)("div", { className: "flex items-center gap-1.5 px-4 pb-2 overflow-x-auto no-scrollbar shrink-0", children: ["all", "Images", "Pdf", "Doc", "Xls", "Videos", "Ppt", "Txt", "Zip"].map((cat) => /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(
          "button",
          {
            type: "button",
            onClick: () => {
              setSelectedCategory(cat);
              setCurrentPage(1);
            },
            className: cn(
              "px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer",
              selectedCategory.toLowerCase() === cat.toLowerCase() ? "bg-indigo-600 text-white shadow-xs" : "bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground"
            ),
            children: cat === "all" ? "All Files" : cat
          },
          cat
        )) }),
        /* @__PURE__ */ (0, import_jsx_runtime97.jsx)("div", { className: "px-4 pb-2 shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime97.jsxs)("div", { className: "relative w-full", children: [
          /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(import_lucide_react51.Search, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
          /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(
            Input,
            {
              value: searchQuery,
              onChange: (e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              },
              placeholder: "Search files by name, format, or sender...",
              className: "h-10 pl-10 pr-9 text-sm rounded-xl bg-background border-border/80 focus-visible:ring-1 focus-visible:ring-indigo-500"
            }
          ),
          searchQuery && /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(
            "button",
            {
              type: "button",
              onClick: () => setSearchQuery(""),
              className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
              children: /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(import_lucide_react51.X, { className: "h-4 w-4" })
            }
          )
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime97.jsxs)("div", { className: "flex items-center justify-between px-4 py-2 text-xs text-muted-foreground font-medium shrink-0", children: [
          /* @__PURE__ */ (0, import_jsx_runtime97.jsxs)("span", { children: [
            filteredFiles.length,
            " files"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime97.jsxs)("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime97.jsx)("span", { children: sortedFiles.length === 0 ? "0 of 0" : `${(currentPage - 1) * itemsPerPage + 1}\u2013${Math.min(
              currentPage * itemsPerPage,
              sortedFiles.length
            )} of ${sortedFiles.length}` }),
            /* @__PURE__ */ (0, import_jsx_runtime97.jsxs)("div", { className: "flex items-center gap-0.5", children: [
              /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(
                Button,
                {
                  variant: "ghost",
                  size: "icon",
                  disabled: currentPage <= 1,
                  onClick: () => setCurrentPage((p) => Math.max(1, p - 1)),
                  className: "h-6 w-6 rounded-md text-muted-foreground hover:text-foreground",
                  children: /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(import_lucide_react51.ChevronLeft, { className: "h-3.5 w-3.5" })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(
                Button,
                {
                  variant: "ghost",
                  size: "icon",
                  disabled: currentPage >= totalPages,
                  onClick: () => setCurrentPage((p) => Math.min(totalPages, p + 1)),
                  className: "h-6 w-6 rounded-md text-muted-foreground hover:text-foreground",
                  children: /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(import_lucide_react51.ChevronRight, { className: "h-3.5 w-3.5" })
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime97.jsx)("div", { className: "min-h-0 flex-1 overflow-y-auto p-4", children: paginatedFiles.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime97.jsxs)("div", { className: "flex flex-col items-center justify-center h-64 text-center p-6 rounded-2xl border border-dashed border-border/80 bg-muted/5", children: [
          /* @__PURE__ */ (0, import_jsx_runtime97.jsx)("div", { className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-600 mb-3", children: /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(import_lucide_react51.FolderOpen, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime97.jsx)("h3", { className: "text-sm font-bold text-foreground", children: "No files found" }),
          /* @__PURE__ */ (0, import_jsx_runtime97.jsx)("p", { className: "text-xs text-muted-foreground max-w-xs mt-1", children: searchQuery ? `No files match your query "${searchQuery}" in this folder.` : "This folder is currently empty. Upload documents or media to get started." }),
          onUploadClick && /* @__PURE__ */ (0, import_jsx_runtime97.jsxs)(
            Button,
            {
              size: "sm",
              onClick: onUploadClick,
              className: "mt-4 gap-1.5 text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-xs",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(import_lucide_react51.Upload, { className: "h-3.5 w-3.5" }),
                "Upload First File"
              ]
            }
          )
        ] }) : viewMode === "table" ? /* @__PURE__ */ (0, import_jsx_runtime97.jsx)("div", { className: "overflow-x-auto rounded-2xl border border-border/80 bg-card shadow-2xs", children: /* @__PURE__ */ (0, import_jsx_runtime97.jsxs)("table", { className: "w-full text-left text-xs border-collapse", children: [
          /* @__PURE__ */ (0, import_jsx_runtime97.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime97.jsxs)("tr", { className: "border-b border-border/60 bg-muted/20 text-muted-foreground font-semibold", children: [
            /* @__PURE__ */ (0, import_jsx_runtime97.jsx)("th", { className: "py-2.5 px-3", children: "File Name" }),
            /* @__PURE__ */ (0, import_jsx_runtime97.jsx)("th", { className: "py-2.5 px-3", children: "Storage Space" }),
            /* @__PURE__ */ (0, import_jsx_runtime97.jsx)("th", { className: "py-2.5 px-3", children: "Size" }),
            /* @__PURE__ */ (0, import_jsx_runtime97.jsx)("th", { className: "py-2.5 px-3", children: "Updated" }),
            /* @__PURE__ */ (0, import_jsx_runtime97.jsx)("th", { className: "py-2.5 px-3 text-right", children: "Actions" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime97.jsx)("tbody", { children: paginatedFiles.map((file) => /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(
            FileCardItem,
            {
              file,
              viewMode: "table",
              isSelected: selectedIds.has(file.id),
              onSelect: () => {
                setSelectedIds((prev) => {
                  const next = new Set(prev);
                  if (next.has(file.id)) next.delete(file.id);
                  else next.add(file.id);
                  return next;
                });
              },
              onPreview: onSelectFileForPreview,
              onDownload: onDownloadFile,
              onDelete: onDeleteFile,
              onCopyLink,
              onRename: onRenameFile,
              onShare: onShareFile
            },
            file.id
          )) })
        ] }) }) : /* @__PURE__ */ (0, import_jsx_runtime97.jsx)("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", children: paginatedFiles.map((file) => /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(
          FileCardItem,
          {
            file,
            viewMode: "grid",
            isSelected: selectedIds.has(file.id),
            onPreview: onSelectFileForPreview,
            onDownload: onDownloadFile,
            onDelete: onDeleteFile,
            onCopyLink,
            onRename: onRenameFile,
            onShare: onShareFile
          },
          file.id
        )) }) })
      ]
    }
  );
}

// src/design-system/components/files/file-upload-form.tsx
var import_react18 = require("react");
var import_lucide_react52 = require("lucide-react");
var import_jsx_runtime98 = require("react/jsx-runtime");
var FOLDER_OPTIONS = ["Finance", "Chat", "Files", "Email", "AI Chat", "Order"];
var SUB_FOLDER_OPTIONS = [
  "Pdf",
  "Doc",
  "Xls",
  "Images",
  "Videos",
  "Ppt",
  "Txt",
  "Csv",
  "Zip",
  "Other"
];
function FileUploadForm({
  userEmail,
  folders,
  initialSubject = "",
  initialFolder = "Finance",
  initialSubFolder = "Pdf",
  warningMessage,
  onClose,
  onSave,
  onSaveDraft,
  onUploadSuccess,
  onPreviewAttachment,
  className
}) {
  const [folder, setFolder] = (0, import_react18.useState)(initialFolder);
  const [subFolder, setSubFolder] = (0, import_react18.useState)(initialSubFolder);
  const [remarks, setRemarks] = (0, import_react18.useState)("");
  const [body, setBody] = (0, import_react18.useState)("");
  const [attachments, setAttachments] = (0, import_react18.useState)([]);
  const [uploadingFile, setUploadingFile] = (0, import_react18.useState)(null);
  const [isUploading, setIsUploading] = (0, import_react18.useState)(false);
  const [isSaving, setIsSaving] = (0, import_react18.useState)(false);
  const fileInputRef = (0, import_react18.useRef)(null);
  const handleFileUpload = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setIsUploading(true);
      const ext = file.name.split(".").pop()?.toLowerCase() || "";
      if (["jpg", "jpeg", "png", "webp", "svg", "gif"].includes(ext)) {
        setSubFolder("Images");
      } else if (ext === "pdf") {
        setSubFolder("Pdf");
      } else if (["doc", "docx"].includes(ext)) {
        setSubFolder("Doc");
      } else if (["xls", "xlsx"].includes(ext)) {
        setSubFolder("Xls");
      } else if (["mp4", "mov", "avi"].includes(ext)) {
        setSubFolder("Videos");
      }
      setUploadingFile({
        name: file.name,
        size: formatBytes(file.size),
        progress: 20
      });
      const reader = new FileReader();
      reader.onload = () => {
        const fileDataUrl = reader.result;
        const newAttachment = {
          id: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
          name: file.name,
          type: file.type || "application/octet-stream",
          size: formatBytes(file.size),
          url: fileDataUrl,
          fileObj: file,
          progress: 100
        };
        const interval = setInterval(() => {
          setUploadingFile((prev) => {
            if (!prev) return null;
            if (prev.progress >= 90) {
              clearInterval(interval);
              setTimeout(() => {
                setAttachments((a) => [...a, newAttachment]);
                setUploadingFile(null);
                setIsUploading(false);
              }, 300);
              return { ...prev, progress: 100 };
            }
            return { ...prev, progress: prev.progress + 25 };
          });
        }, 150);
      };
      reader.readAsDataURL(file);
      e.target.value = "";
    }
  };
  const removeAttachment = (id) => {
    setAttachments((prev) => prev.filter((a) => a.id !== id));
  };
  const handleDownload = (attachment) => {
    if (attachment.url) {
      const a = document.createElement("a");
      a.href = attachment.url;
      a.download = attachment.name || "download";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };
  const handleSaveDocument = async () => {
    setIsSaving(true);
    try {
      if (onSave) {
        await onSave({
          subject: remarks || `${folder}_${subFolder}`,
          folder,
          subFolder,
          remarks,
          body,
          attachments
        });
      }
      onUploadSuccess?.();
    } finally {
      setIsSaving(false);
    }
  };
  const handleSaveDraft = async () => {
    if (onSaveDraft) {
      await onSaveDraft({
        subject: remarks || `${folder}_${subFolder}`,
        folder,
        subFolder,
        remarks,
        body,
        attachments
      });
    } else {
      await handleSaveDocument();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime98.jsxs)(
    "div",
    {
      className: cn(
        "flex h-full min-h-0 w-full flex-1 flex-col overflow-hidden bg-background select-none font-sans",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime98.jsxs)("div", { className: "flex items-center justify-between border-b border-border bg-background px-6 py-4 shrink-0", children: [
          /* @__PURE__ */ (0, import_jsx_runtime98.jsx)("h1", { className: "text-xl font-bold tracking-tight text-foreground", children: "New File Upload" }),
          onClose && /* @__PURE__ */ (0, import_jsx_runtime98.jsxs)(
            "button",
            {
              type: "button",
              onClick: onClose,
              className: "flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(import_lucide_react52.ArrowLeft, { className: "h-4 w-4" }),
                /* @__PURE__ */ (0, import_jsx_runtime98.jsx)("span", { children: "Back to Storage" })
              ]
            }
          )
        ] }),
        warningMessage && /* @__PURE__ */ (0, import_jsx_runtime98.jsxs)("div", { className: "mx-6 mt-4 flex items-center justify-between gap-3 p-3 bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 rounded-xl text-xs font-medium", children: [
          /* @__PURE__ */ (0, import_jsx_runtime98.jsxs)("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(import_lucide_react52.AlertTriangle, { className: "h-4 w-4 shrink-0 text-amber-500" }),
            /* @__PURE__ */ (0, import_jsx_runtime98.jsx)("span", { children: warningMessage })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(
            "a",
            {
              href: "/app-settings",
              className: "px-2.5 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-700 dark:text-amber-300 font-semibold transition-colors text-[11px] shrink-0",
              children: "Go to App Settings"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime98.jsxs)("div", { className: "min-h-0 flex-1 overflow-y-auto px-6 py-4 space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime98.jsxs)("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(Label, { className: "text-xs font-semibold text-foreground", children: "Folder" }),
            /* @__PURE__ */ (0, import_jsx_runtime98.jsx)("div", { className: "w-full max-w-xs", children: /* @__PURE__ */ (0, import_jsx_runtime98.jsxs)(Select, { value: folder, onValueChange: setFolder, children: [
              /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(SelectTrigger, { className: "h-10 text-xs rounded-xl border border-border/80 bg-background shadow-2xs", children: /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(SelectValue, { placeholder: "Select folder" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(SelectContent, { className: "rounded-xl shadow-lg", children: (folders || FOLDER_OPTIONS.map((f) => ({ id: f, name: f }))).map((f) => /* @__PURE__ */ (0, import_jsx_runtime98.jsxs)(SelectItem, { value: f.name, className: "text-xs", children: [
                "\u{1F4C1} ",
                f.name
              ] }, f.id)) })
            ] }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime98.jsxs)("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(Label, { className: "text-xs font-semibold text-foreground", children: "Sub folder" }),
            /* @__PURE__ */ (0, import_jsx_runtime98.jsx)("div", { className: "w-full max-w-xs", children: /* @__PURE__ */ (0, import_jsx_runtime98.jsxs)(Select, { value: subFolder, onValueChange: (val) => setSubFolder(val), children: [
              /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(SelectTrigger, { className: "h-10 text-xs rounded-xl border border-border/80 bg-background shadow-2xs", children: /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(SelectValue, { placeholder: "Select sub folder" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(SelectContent, { className: "rounded-xl shadow-lg", children: SUB_FOLDER_OPTIONS.map((sub) => /* @__PURE__ */ (0, import_jsx_runtime98.jsxs)(SelectItem, { value: sub, className: "text-xs", children: [
                "\u{1F4C1} ",
                sub
              ] }, sub)) })
            ] }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime98.jsxs)("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(Label, { className: "text-xs font-semibold text-foreground", children: "Remarks" }),
            /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(
              "textarea",
              {
                rows: 3,
                placeholder: "Add a note about these attachments...",
                value: remarks,
                onChange: (e) => setRemarks(e.target.value),
                className: "w-full rounded-xl border border-border/80 bg-background p-3 text-xs text-foreground placeholder:text-muted-foreground focus:outline-hidden focus:ring-1 focus:ring-indigo-500 shadow-2xs resize-y"
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime98.jsxs)("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(Label, { className: "text-xs font-semibold text-foreground", children: "Description / Notes" }),
            /* @__PURE__ */ (0, import_jsx_runtime98.jsxs)("div", { className: "overflow-hidden rounded-xl border border-border/80 bg-background shadow-2xs", children: [
              /* @__PURE__ */ (0, import_jsx_runtime98.jsxs)("div", { className: "flex items-center gap-1 px-3 py-2 border-b border-border/60 bg-muted/20 flex-wrap", children: [
                /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(
                  "button",
                  {
                    type: "button",
                    className: "flex h-7 w-7 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground text-xs font-bold transition-colors cursor-pointer",
                    title: "Bold",
                    children: /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(import_lucide_react52.Bold, { className: "h-3.5 w-3.5" })
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(
                  "button",
                  {
                    type: "button",
                    className: "flex h-7 w-7 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground text-xs font-bold transition-colors cursor-pointer",
                    title: "Italic",
                    children: /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(import_lucide_react52.Italic, { className: "h-3.5 w-3.5" })
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(
                  "button",
                  {
                    type: "button",
                    className: "flex h-7 w-7 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground text-xs font-bold transition-colors cursor-pointer",
                    title: "Underline",
                    children: /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(import_lucide_react52.Underline, { className: "h-3.5 w-3.5" })
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime98.jsx)("div", { className: "h-4 w-[1px] bg-border mx-1.5" }),
                /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(
                  "button",
                  {
                    type: "button",
                    className: "flex h-7 w-7 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground text-xs font-bold transition-colors cursor-pointer",
                    title: "Bullet List",
                    children: /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(import_lucide_react52.List, { className: "h-3.5 w-3.5" })
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(
                  "button",
                  {
                    type: "button",
                    className: "flex h-7 w-7 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground text-xs font-bold transition-colors cursor-pointer",
                    title: "Numbered List",
                    children: /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(import_lucide_react52.ListOrdered, { className: "h-3.5 w-3.5" })
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime98.jsx)("div", { className: "h-4 w-[1px] bg-border mx-1.5" }),
                /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(
                  "button",
                  {
                    type: "button",
                    onClick: () => fileInputRef.current?.click(),
                    className: "flex h-7 w-7 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground text-xs font-bold transition-colors cursor-pointer",
                    title: "Attach File",
                    children: /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(import_lucide_react52.Paperclip, { className: "h-3.5 w-3.5" })
                  }
                )
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(
                "textarea",
                {
                  value: body,
                  onChange: (e) => setBody(e.target.value),
                  placeholder: "Type description, remarks, or notes here...",
                  rows: 5,
                  className: "w-full bg-transparent p-3.5 text-xs leading-relaxed outline-none resize-y border-0 focus:ring-0 text-foreground placeholder:text-muted-foreground"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime98.jsxs)("div", { className: "space-y-2 pt-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime98.jsxs)(Label, { className: "text-xs font-semibold text-foreground", children: [
              "Attachments (",
              attachments.length,
              ")"
            ] }),
            uploadingFile && /* @__PURE__ */ (0, import_jsx_runtime98.jsxs)("div", { className: "rounded-xl border border-primary/30 bg-primary/5 p-3 space-y-2 shadow-2xs w-full", children: [
              /* @__PURE__ */ (0, import_jsx_runtime98.jsxs)("div", { className: "flex items-center justify-between text-xs font-semibold text-foreground", children: [
                /* @__PURE__ */ (0, import_jsx_runtime98.jsxs)("div", { className: "flex items-center gap-2 truncate", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(import_lucide_react52.FileText, { className: "h-4 w-4 text-primary shrink-0" }),
                  /* @__PURE__ */ (0, import_jsx_runtime98.jsx)("span", { className: "truncate", children: uploadingFile.name })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime98.jsxs)("span", { className: "text-primary shrink-0", children: [
                  uploadingFile.progress,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime98.jsx)("div", { className: "h-1.5 w-full rounded-full bg-muted/60 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(
                "div",
                {
                  className: "h-full bg-primary rounded-full transition-all duration-300 ease-out",
                  style: { width: `${uploadingFile.progress}%` }
                }
              ) })
            ] }),
            attachments.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime98.jsx)("div", { className: "border border-border/80 rounded-xl overflow-hidden bg-background divide-y divide-border", children: attachments.map((attachment) => /* @__PURE__ */ (0, import_jsx_runtime98.jsxs)(
              "div",
              {
                className: "flex items-center justify-between p-3 select-none hover:bg-muted/20 transition-colors",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime98.jsxs)("div", { className: "flex items-center space-x-3 min-w-0 flex-1", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime98.jsx)("div", { className: "bg-primary/10 w-9 h-9 flex items-center justify-center rounded-lg border border-primary/20 shrink-0 text-primary", children: /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(import_lucide_react52.FileText, { className: "h-4.5 w-4.5" }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime98.jsxs)("div", { className: "min-w-0 flex-1", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime98.jsx)("p", { className: "text-xs font-semibold text-foreground truncate", children: attachment.name }),
                      /* @__PURE__ */ (0, import_jsx_runtime98.jsx)("p", { className: "text-[10px] text-muted-foreground", children: attachment.size })
                    ] })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime98.jsxs)("div", { className: "flex items-center space-x-1 shrink-0", children: [
                    attachment.url && /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(
                      Button,
                      {
                        type: "button",
                        variant: "ghost",
                        size: "icon",
                        className: "h-7 w-7 text-muted-foreground hover:text-foreground cursor-pointer",
                        onClick: () => handleDownload(attachment),
                        title: "Download",
                        children: /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(import_lucide_react52.Download, { className: "h-3.5 w-3.5" })
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(
                      Button,
                      {
                        type: "button",
                        variant: "ghost",
                        size: "icon",
                        className: "h-7 w-7 text-muted-foreground hover:text-foreground cursor-pointer",
                        onClick: () => {
                          if (onPreviewAttachment && attachment.url) {
                            onPreviewAttachment({ name: attachment.name, url: attachment.url });
                          }
                        },
                        title: "View file",
                        children: /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(import_lucide_react52.Eye, { className: "h-3.5 w-3.5" })
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(
                      Button,
                      {
                        type: "button",
                        variant: "ghost",
                        size: "icon",
                        className: "h-7 w-7 text-muted-foreground hover:text-destructive cursor-pointer",
                        onClick: () => removeAttachment(attachment.id),
                        title: "Remove attachment",
                        children: /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(import_lucide_react52.X, { className: "h-3.5 w-3.5" })
                      }
                    )
                  ] })
                ]
              },
              attachment.id
            )) }),
            /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(
              "input",
              {
                type: "file",
                ref: fileInputRef,
                id: "file-upload-input-field",
                className: "hidden",
                multiple: true,
                onChange: handleFileUpload
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(
              "button",
              {
                type: "button",
                onClick: () => fileInputRef.current?.click(),
                disabled: isUploading,
                className: "flex w-full items-center justify-center gap-2 rounded-xl border border-border/80 bg-background py-2.5 text-xs font-medium text-foreground hover:bg-muted/40 transition-all cursor-pointer shadow-2xs",
                children: isUploading ? /* @__PURE__ */ (0, import_jsx_runtime98.jsxs)(import_jsx_runtime98.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(import_lucide_react52.Loader2, { className: "h-3.5 w-3.5 animate-spin" }),
                  /* @__PURE__ */ (0, import_jsx_runtime98.jsx)("span", { children: "Uploading..." })
                ] }) : /* @__PURE__ */ (0, import_jsx_runtime98.jsxs)(import_jsx_runtime98.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(import_lucide_react52.Paperclip, { className: "h-3.5 w-3.5 text-muted-foreground" }),
                  /* @__PURE__ */ (0, import_jsx_runtime98.jsx)("span", { children: "Attach Files" })
                ] })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime98.jsxs)("div", { className: "flex items-center justify-between border-t border-border bg-background px-6 py-4 shrink-0", children: [
          /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: onClose,
              className: "h-9 px-4 rounded-xl text-xs font-semibold border-border/80 cursor-pointer",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime98.jsxs)("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime98.jsxs)(
              Button,
              {
                variant: "outline",
                size: "sm",
                onClick: handleSaveDraft,
                disabled: isSaving,
                className: "h-9 px-4 rounded-xl text-xs font-semibold border-border/80 gap-1.5 cursor-pointer",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(import_lucide_react52.Save, { className: "h-3.5 w-3.5 text-muted-foreground" }),
                  /* @__PURE__ */ (0, import_jsx_runtime98.jsx)("span", { children: "Save as Draft" })
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(
              Button,
              {
                onClick: handleSaveDocument,
                disabled: isSaving,
                size: "sm",
                className: "h-9 px-5 rounded-xl text-xs font-semibold gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs cursor-pointer min-w-[80px]",
                children: isSaving ? /* @__PURE__ */ (0, import_jsx_runtime98.jsxs)(import_jsx_runtime98.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(import_lucide_react52.Loader2, { className: "h-3.5 w-3.5 animate-spin" }),
                  /* @__PURE__ */ (0, import_jsx_runtime98.jsx)("span", { children: "Saving..." })
                ] }) : /* @__PURE__ */ (0, import_jsx_runtime98.jsxs)(import_jsx_runtime98.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(import_lucide_react52.Save, { className: "h-3.5 w-3.5" }),
                  /* @__PURE__ */ (0, import_jsx_runtime98.jsx)("span", { children: "Save" })
                ] })
              }
            )
          ] })
        ] })
      ]
    }
  );
}

// src/design-system/templates/list-template.tsx
var import_jsx_runtime99 = require("react/jsx-runtime");
function ListTemplate({
  title,
  description,
  badge,
  breadcrumbs,
  actions,
  searchPlaceholder,
  searchValue,
  onSearchChange,
  filters,
  activeFilters,
  onClearAllFilters,
  filterActions,
  children,
  footer,
  className,
  ...props
}) {
  const hasFilterBar = Boolean(onSearchChange) || Boolean(filters) || activeFilters && activeFilters.length > 0 || Boolean(filterActions);
  return /* @__PURE__ */ (0, import_jsx_runtime99.jsxs)("div", { className: cn("flex flex-col gap-6 p-4 sm:p-6 md:p-8", className), ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime99.jsx)(
      PageHeader,
      {
        title,
        description,
        badge,
        breadcrumbs,
        actions
      }
    ),
    hasFilterBar && /* @__PURE__ */ (0, import_jsx_runtime99.jsx)(
      FilterBar,
      {
        searchPlaceholder,
        searchValue,
        onSearchChange,
        filters,
        activeFilters,
        onClearAll: onClearAllFilters,
        actions: filterActions
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime99.jsx)("div", { className: "flex-1", children }),
    footer && /* @__PURE__ */ (0, import_jsx_runtime99.jsx)("div", { className: "pt-2", children: footer })
  ] });
}

// src/design-system/templates/detail-template.tsx
var import_lucide_react53 = require("lucide-react");
var import_jsx_runtime100 = require("react/jsx-runtime");
function DetailTemplate({
  title,
  description,
  badge,
  breadcrumbs,
  actions,
  onBack,
  backLabel = "Back",
  highlights,
  sidebar,
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime100.jsxs)("div", { className: cn("flex flex-col gap-6 p-4 sm:p-6 md:p-8", className), ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime100.jsxs)("div", { className: "flex flex-col gap-2", children: [
      onBack && /* @__PURE__ */ (0, import_jsx_runtime100.jsxs)(
        Button,
        {
          variant: "ghost",
          size: "sm",
          onClick: onBack,
          className: "w-fit gap-1.5 px-0 text-xs text-muted-foreground hover:bg-transparent hover:text-foreground",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime100.jsx)(import_lucide_react53.ArrowLeft, { className: "h-3.5 w-3.5" }),
            backLabel
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime100.jsx)(
        PageHeader,
        {
          title,
          description,
          badge,
          breadcrumbs,
          actions
        }
      )
    ] }),
    highlights && /* @__PURE__ */ (0, import_jsx_runtime100.jsx)("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: highlights }),
    /* @__PURE__ */ (0, import_jsx_runtime100.jsxs)(
      "div",
      {
        className: cn(
          "grid gap-6",
          sidebar ? "grid-cols-1 lg:grid-cols-3" : "grid-cols-1"
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime100.jsx)("div", { className: cn(sidebar ? "lg:col-span-2 space-y-6" : "space-y-6"), children }),
          sidebar && /* @__PURE__ */ (0, import_jsx_runtime100.jsx)("aside", { className: "space-y-6 lg:col-span-1", children: sidebar })
        ]
      }
    )
  ] });
}

// src/design-system/templates/form-template.tsx
var import_lucide_react54 = require("lucide-react");
var import_jsx_runtime101 = require("react/jsx-runtime");
function FormTemplate({
  title,
  description,
  badge,
  breadcrumbs,
  onBack,
  backLabel = "Back",
  submitLabel = "Save changes",
  cancelLabel = "Cancel",
  onCancel,
  isSubmitting = false,
  stickyFooter = false,
  secondaryActions,
  children,
  className,
  onSubmit,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime101.jsxs)("div", { className: "flex flex-col gap-6 p-4 sm:p-6 md:p-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime101.jsxs)("div", { className: "flex flex-col gap-2", children: [
      onBack && /* @__PURE__ */ (0, import_jsx_runtime101.jsxs)(
        Button,
        {
          type: "button",
          variant: "ghost",
          size: "sm",
          onClick: onBack,
          className: "w-fit gap-1.5 px-0 text-xs text-muted-foreground hover:bg-transparent hover:text-foreground",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime101.jsx)(import_lucide_react54.ArrowLeft, { className: "h-3.5 w-3.5" }),
            backLabel
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime101.jsx)(
        PageHeader,
        {
          title,
          description,
          badge,
          breadcrumbs
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime101.jsxs)("form", { onSubmit, className: cn("space-y-8", className), ...props, children: [
      /* @__PURE__ */ (0, import_jsx_runtime101.jsx)("div", { className: "space-y-6", children }),
      /* @__PURE__ */ (0, import_jsx_runtime101.jsxs)(
        "div",
        {
          className: cn(
            "flex flex-wrap items-center justify-between gap-4 pt-6",
            stickyFooter && "sticky bottom-0 -mx-4 -mb-4 bg-background/95 p-4 backdrop-blur border-t sm:-mx-6 sm:-mb-6 sm:p-6 md:-mx-8 md:-mb-8 md:p-8"
          ),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime101.jsx)("div", { children: secondaryActions }),
            /* @__PURE__ */ (0, import_jsx_runtime101.jsxs)("div", { className: "flex items-center gap-3", children: [
              onCancel && /* @__PURE__ */ (0, import_jsx_runtime101.jsx)(
                Button,
                {
                  type: "button",
                  variant: "outline",
                  disabled: isSubmitting,
                  onClick: onCancel,
                  children: cancelLabel
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime101.jsx)(Button, { type: "submit", disabled: isSubmitting, children: isSubmitting ? "Saving..." : submitLabel })
            ] })
          ]
        }
      )
    ] })
  ] });
}

// src/design-system/templates/wizard-template.tsx
var import_lucide_react55 = require("lucide-react");
var import_jsx_runtime102 = require("react/jsx-runtime");
function WizardTemplate({
  title,
  description,
  steps,
  currentStepIndex,
  onStepChange,
  onNext,
  onPrevious,
  onSubmit,
  nextLabel = "Next",
  previousLabel = "Previous",
  submitLabel = "Complete",
  isSubmitting = false,
  canProceed = true,
  children,
  className,
  ...props
}) {
  const isLastStep = currentStepIndex === steps.length - 1;
  const isFirstStep = currentStepIndex === 0;
  return /* @__PURE__ */ (0, import_jsx_runtime102.jsxs)("div", { className: cn("flex flex-col gap-6 p-4 sm:p-6 md:p-8", className), ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(PageHeader, { title, description }),
    /* @__PURE__ */ (0, import_jsx_runtime102.jsx)("nav", { "aria-label": "Wizard Progress", className: "py-2", children: /* @__PURE__ */ (0, import_jsx_runtime102.jsx)("ol", { className: "flex items-center justify-between gap-2 overflow-x-auto pb-2", children: steps.map((step, idx) => {
      const isCompleted = idx < currentStepIndex;
      const isCurrent = idx === currentStepIndex;
      const isClickable = onStepChange && idx < currentStepIndex;
      return /* @__PURE__ */ (0, import_jsx_runtime102.jsxs)(
        "li",
        {
          className: "flex flex-1 items-center gap-2.5 min-w-[120px]",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime102.jsxs)(
              "button",
              {
                type: "button",
                disabled: !isClickable,
                onClick: isClickable ? () => onStepChange(idx) : void 0,
                className: cn(
                  "flex items-center gap-2 text-left transition-colors",
                  isClickable && "cursor-pointer hover:opacity-80"
                ),
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(
                    "span",
                    {
                      className: cn(
                        "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
                        isCompleted && "bg-primary text-primary-foreground",
                        isCurrent && "border-2 border-primary bg-primary/10 text-primary font-bold",
                        !isCompleted && !isCurrent && "border border-border bg-muted text-muted-foreground"
                      ),
                      children: isCompleted ? /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(import_lucide_react55.Check, { className: "h-4 w-4" }) : idx + 1
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime102.jsx)("div", { className: "hidden sm:block", children: /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(
                    "div",
                    {
                      className: cn(
                        "text-xs font-medium",
                        isCurrent ? "text-foreground font-semibold" : "text-muted-foreground"
                      ),
                      children: step.title
                    }
                  ) })
                ]
              }
            ),
            idx < steps.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(
              "div",
              {
                className: cn(
                  "h-0.5 flex-1 rounded-full",
                  idx < currentStepIndex ? "bg-primary" : "bg-border"
                )
              }
            )
          ]
        },
        step.id
      );
    }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime102.jsx)("div", { className: "flex-1 rounded-lg border bg-card p-4 sm:p-6", children }),
    /* @__PURE__ */ (0, import_jsx_runtime102.jsxs)("div", { className: "flex items-center justify-between pt-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime102.jsxs)(
        Button,
        {
          type: "button",
          variant: "outline",
          disabled: isFirstStep || isSubmitting,
          onClick: onPrevious,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(import_lucide_react55.ChevronLeft, { className: "mr-1 h-4 w-4" }),
            previousLabel
          ]
        }
      ),
      isLastStep ? /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(
        Button,
        {
          type: "button",
          disabled: !canProceed || isSubmitting,
          onClick: onSubmit,
          children: isSubmitting ? "Submitting..." : submitLabel
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime102.jsxs)(
        Button,
        {
          type: "button",
          disabled: !canProceed || isSubmitting,
          onClick: onNext,
          children: [
            nextLabel,
            /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(import_lucide_react55.ChevronRight, { className: "ml-1 h-4 w-4" })
          ]
        }
      )
    ] })
  ] });
}

// src/design-system/templates/dashboard-template.tsx
var import_jsx_runtime103 = require("react/jsx-runtime");
function DashboardTemplate({
  title,
  description,
  badge,
  breadcrumbs,
  actions,
  metrics,
  charts,
  activity,
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime103.jsxs)("div", { className: cn("flex flex-col gap-6 p-4 sm:p-6 md:p-8", className), ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime103.jsx)(
      PageHeader,
      {
        title,
        description,
        badge,
        breadcrumbs,
        actions
      }
    ),
    metrics && /* @__PURE__ */ (0, import_jsx_runtime103.jsx)("section", { "aria-label": "Key Metrics", className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: metrics }),
    charts && /* @__PURE__ */ (0, import_jsx_runtime103.jsx)("section", { "aria-label": "Charts and Visualizations", className: "grid gap-4 md:grid-cols-2 lg:grid-cols-7", children: charts }),
    activity && /* @__PURE__ */ (0, import_jsx_runtime103.jsx)("section", { "aria-label": "Recent Activity", className: "space-y-4", children: activity }),
    children && /* @__PURE__ */ (0, import_jsx_runtime103.jsx)("div", { className: "space-y-6", children })
  ] });
}

// src/design-system/templates/workspace-template.tsx
var import_jsx_runtime104 = require("react/jsx-runtime");
function WorkspaceTemplate({
  header,
  leftSidebar,
  rightSidebar,
  footer,
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime104.jsxs)(
    "div",
    {
      className: cn(
        "flex h-screen w-full flex-col overflow-hidden bg-background text-foreground",
        className
      ),
      ...props,
      children: [
        header && /* @__PURE__ */ (0, import_jsx_runtime104.jsx)("header", { className: "flex h-14 shrink-0 items-center border-b px-4 bg-background z-10", children: header }),
        /* @__PURE__ */ (0, import_jsx_runtime104.jsxs)("div", { className: "flex flex-1 overflow-hidden", children: [
          leftSidebar && /* @__PURE__ */ (0, import_jsx_runtime104.jsx)("aside", { className: "hidden md:flex w-64 shrink-0 flex-col border-r bg-sidebar p-3 overflow-y-auto", children: leftSidebar }),
          /* @__PURE__ */ (0, import_jsx_runtime104.jsx)("main", { className: "flex flex-1 flex-col overflow-y-auto p-4 sm:p-6 bg-muted/20", children }),
          rightSidebar && /* @__PURE__ */ (0, import_jsx_runtime104.jsx)("aside", { className: "hidden lg:flex w-80 shrink-0 flex-col border-l bg-background p-4 overflow-y-auto", children: rightSidebar })
        ] }),
        footer && /* @__PURE__ */ (0, import_jsx_runtime104.jsx)("footer", { className: "flex h-10 shrink-0 items-center border-t px-4 text-xs text-muted-foreground bg-background", children: footer })
      ]
    }
  );
}

// src/design-system/templates/app-header.tsx
var import_react20 = require("react");
var import_lucide_react57 = require("lucide-react");
var import_navigation2 = require("next/navigation");

// src/components/layout/header.tsx
var import_react19 = require("react");
var import_jsx_runtime105 = require("react/jsx-runtime");
function Header({ className, fixed, children, ...props }) {
  const [offset, setOffset] = (0, import_react19.useState)(0);
  (0, import_react19.useEffect)(() => {
    const onScroll = () => {
      setOffset(document.body.scrollTop || document.documentElement.scrollTop);
    };
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => document.removeEventListener("scroll", onScroll);
  }, []);
  return (
    // Page header container: fixed mode me top par sticky behavior deta hai.
    /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(
      "header",
      {
        className: cn(
          "z-50 h-16 shrink-0",
          fixed && "header-fixed peer/header sticky top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80",
          offset > 10 && fixed ? "shadow-sm" : "shadow-none",
          className
        ),
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_runtime105.jsxs)(
          "div",
          {
            className: cn(
              // Header ke andar left-to-right UI controls/content align karne ke liye row layout.
              "relative flex h-full min-w-0 flex-nowrap items-center gap-1.5 overflow-hidden px-2 py-2 sm:gap-3 sm:px-4 md:gap-4",
              offset > 10 && fixed && "after:absolute after:inset-0 after:-z-10 after:bg-background/20 after:backdrop-blur-lg"
            ),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(AppLogo, { className: "shrink-0 md:hidden" }),
              children
            ]
          }
        )
      }
    )
  );
}

// src/components/search.tsx
var import_lucide_react56 = require("lucide-react");
var import_jsx_runtime106 = require("react/jsx-runtime");
function Search7({
  className = "",
  placeholder = "Search",
  iconOnly = true,
  ...props
}) {
  const search = useSearch();
  const openSearch = () => {
    if (search?.setOpen) {
      search.setOpen(true);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime106.jsx)(
    Button,
    {
      ...props,
      variant: "ghost",
      size: "icon",
      className: cn("size-8 shrink-0", className),
      "aria-label": "Search",
      "aria-keyshortcuts": "Meta+K Control+K",
      onClick: openSearch,
      children: /* @__PURE__ */ (0, import_jsx_runtime106.jsx)(import_lucide_react56.SearchIcon, { className: "size-5", "aria-hidden": "true" })
    }
  );
}

// src/stores/notification-store.ts
var import_zustand2 = require("zustand");

// src/lib/supabase/client.ts
var import_ssr2 = require("@supabase/ssr");
var clientSingleton2 = null;
var cachedChatUrl = null;
var cachedChatKey = null;
function sanitizeSupabaseUrl(url) {
  if (!url) return "";
  let cleaned = url.trim();
  if (!cleaned.startsWith("http://") && !cleaned.startsWith("https://")) {
    cleaned = `https://${cleaned}`;
  }
  cleaned = cleaned.replace(/\/rest\/v1\/?$/i, "");
  cleaned = cleaned.replace(/\/auth\/v1\/?$/i, "");
  cleaned = cleaned.replace(/\/storage\/v1\/?$/i, "");
  cleaned = cleaned.replace(/\/+$/, "");
  return cleaned;
}
function createClient2() {
  const envUrl = sanitizeSupabaseUrl(process.env.NEXT_PUBLIC_SUPABASE_URL || "");
  const envKey = (process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "").trim();
  if (typeof window === "undefined") {
    return (0, import_ssr2.createBrowserClient)(envUrl, envKey);
  }
  try {
    const raw = localStorage.getItem("email-settings-workspace");
    if (raw) {
      const parsed = JSON.parse(raw);
      const chatAccounts = parsed?.state?.config?.chatAccounts;
      const activeAccount = Array.isArray(chatAccounts) ? chatAccounts.find((acc) => acc.isEnabled && acc.supabaseUrl && acc.supabaseAnonKey) : null;
      if (activeAccount) {
        const cleanUrl = sanitizeSupabaseUrl(activeAccount.supabaseUrl);
        const cleanKey = activeAccount.supabaseAnonKey.trim();
        if (!clientSingleton2 || cachedChatUrl !== cleanUrl || cachedChatKey !== cleanKey) {
          cachedChatUrl = cleanUrl;
          cachedChatKey = cleanKey;
          clientSingleton2 = (0, import_ssr2.createBrowserClient)(cleanUrl, cleanKey);
        }
        return clientSingleton2;
      }
    }
  } catch (e) {
    console.error("Failed to read custom chat Supabase settings from localStorage:", e);
  }
  if (!clientSingleton2 || cachedChatUrl !== envUrl || cachedChatKey !== envKey) {
    cachedChatUrl = envUrl;
    cachedChatKey = envKey;
    clientSingleton2 = (0, import_ssr2.createBrowserClient)(envUrl, envKey);
  }
  return clientSingleton2;
}

// src/stores/notification-store.ts
var activeChannel = null;
var activeUserId = null;
var useNotificationStore = (0, import_zustand2.create)((set, get) => ({
  notifications: [],
  unreadCount: 0,
  isLoading: false,
  fetchNotifications: async (userId) => {
    set({ isLoading: true });
    const supabase = createClient2();
    try {
      const { data: data2, error } = await supabase.from("notifications").select("*").eq("user_id", userId).order("created_at", { ascending: false });
      if (error) throw error;
      const notifications = data2 || [];
      const unreadCount = notifications.filter((n) => !n.read).length;
      set({ notifications, unreadCount });
    } catch (e) {
      console.error("[NotificationStore] Failed to fetch notifications:", e);
    } finally {
      set({ isLoading: false });
    }
  },
  markAsRead: async (notificationId) => {
    const supabase = createClient2();
    try {
      const { error } = await supabase.from("notifications").update({ read: true }).eq("id", notificationId);
      if (error) throw error;
      set((state) => {
        const updated = state.notifications.map(
          (n) => n.id === notificationId ? { ...n, read: true } : n
        );
        const unreadCount = updated.filter((n) => !n.read).length;
        return { notifications: updated, unreadCount };
      });
    } catch (e) {
      console.error("[NotificationStore] Failed to mark notification as read:", e);
    }
  },
  markAllAsRead: async (userId) => {
    const supabase = createClient2();
    try {
      const { error } = await supabase.from("notifications").update({ read: true }).eq("user_id", userId).eq("read", false);
      if (error) throw error;
      set((state) => {
        const updated = state.notifications.map((n) => ({ ...n, read: true }));
        return { notifications: updated, unreadCount: 0 };
      });
    } catch (e) {
      console.error("[NotificationStore] Failed to mark all notifications as read:", e);
    }
  },
  deleteNotification: async (notificationId) => {
    const supabase = createClient2();
    try {
      const { error } = await supabase.from("notifications").delete().eq("id", notificationId);
      if (error) throw error;
      set((state) => {
        const updated = state.notifications.filter((n) => n.id !== notificationId);
        const unreadCount = updated.filter((n) => !n.read).length;
        return { notifications: updated, unreadCount };
      });
    } catch (e) {
      console.error("[NotificationStore] Failed to delete notification:", e);
    }
  },
  subscribeToNotifications: (userId) => {
    try {
      if (!userId) return;
      const supabase = createClient2();
      if (activeChannel && activeUserId === userId) {
        return;
      }
      if (activeChannel) {
        try {
          supabase.removeChannel(activeChannel);
        } catch (_) {
        }
        activeChannel = null;
        activeUserId = null;
      }
      const channelTopic = `notifications-user-${userId}-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
      const channel = supabase.channel(channelTopic);
      channel.on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "notifications",
          filter: `user_id=eq.${userId}`
        },
        (payload) => {
          const { eventType, new: newRecord, old: oldRecord } = payload;
          if (eventType === "INSERT") {
            const inserted = newRecord;
            set((state) => {
              if (state.notifications.some((n) => n.id === inserted.id)) {
                return {};
              }
              const updated = [inserted, ...state.notifications];
              const unreadCount = updated.filter((n) => !n.read).length;
              return { notifications: updated, unreadCount };
            });
          } else if (eventType === "UPDATE") {
            const updatedRecord = newRecord;
            set((state) => {
              const updated = state.notifications.map(
                (n) => n.id === updatedRecord.id ? updatedRecord : n
              );
              const unreadCount = updated.filter((n) => !n.read).length;
              return { notifications: updated, unreadCount };
            });
          } else if (eventType === "DELETE") {
            const deletedId = oldRecord?.id;
            if (!deletedId) return;
            set((state) => {
              const updated = state.notifications.filter((n) => n.id !== deletedId);
              const unreadCount = updated.filter((n) => !n.read).length;
              return { notifications: updated, unreadCount };
            });
          }
        }
      ).subscribe();
      activeChannel = channel;
      activeUserId = userId;
    } catch (err) {
      console.warn("[NotificationStore] Realtime subscription error:", err);
    }
  },
  unsubscribe: () => {
    try {
      if (activeChannel) {
        const supabase = createClient2();
        supabase.removeChannel(activeChannel);
        activeChannel = null;
        activeUserId = null;
      }
    } catch (err) {
      console.warn("[NotificationStore] Unsubscribe error:", err);
    }
  }
}));

// src/design-system/templates/app-header.tsx
var import_jsx_runtime107 = require("react/jsx-runtime");
function AppHeader({
  title,
  fixed = true,
  iconsPosition = "right",
  children
}) {
  const router = (0, import_navigation2.useRouter)();
  const currentUser = useAuthStore((state) => state.auth.user);
  const { unreadCount, fetchNotifications, subscribeToNotifications, unsubscribe } = useNotificationStore();
  (0, import_react20.useEffect)(() => {
    if (currentUser) {
      fetchNotifications(currentUser.accountNo);
      subscribeToNotifications(currentUser.accountNo);
    }
    return () => {
      unsubscribe();
    };
  }, [currentUser, fetchNotifications, subscribeToNotifications, unsubscribe]);
  return /* @__PURE__ */ (0, import_jsx_runtime107.jsx)(Header, { fixed, className: "border-b bg-background", children: /* @__PURE__ */ (0, import_jsx_runtime107.jsx)("div", { className: "flex flex-1 items-center justify-between w-full", children: iconsPosition === "left" ? /* @__PURE__ */ (0, import_jsx_runtime107.jsxs)("div", { className: "flex items-center gap-2 sm:gap-3 min-w-0", children: [
    /* @__PURE__ */ (0, import_jsx_runtime107.jsx)("h1", { className: "min-w-0 truncate text-base font-semibold sm:text-lg", children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime107.jsxs)("div", { className: "flex items-center gap-1 sm:gap-2 shrink-0 ml-1", children: [
      /* @__PURE__ */ (0, import_jsx_runtime107.jsx)(Search7, { iconOnly: true }),
      children,
      /* @__PURE__ */ (0, import_jsx_runtime107.jsxs)(
        Button,
        {
          variant: "ghost",
          size: "icon",
          className: "relative size-8 shrink-0",
          "aria-label": "Notifications",
          onClick: () => router.push("/notification"),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime107.jsx)(import_lucide_react57.Bell, { className: "size-5" }),
            unreadCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime107.jsx)("span", { className: "absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-medium text-white shadow-xs", children: unreadCount > 5 ? "5+" : unreadCount })
          ]
        }
      )
    ] })
  ] }) : /* @__PURE__ */ (0, import_jsx_runtime107.jsxs)(import_jsx_runtime107.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime107.jsx)("h1", { className: "min-w-0 truncate text-base font-semibold sm:text-lg", children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime107.jsxs)("div", { className: "ml-auto flex items-center gap-2 sm:gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime107.jsx)(Search7, { iconOnly: true }),
      children,
      /* @__PURE__ */ (0, import_jsx_runtime107.jsxs)(
        Button,
        {
          variant: "ghost",
          size: "icon",
          className: "relative size-8 shrink-0",
          "aria-label": "Notifications",
          onClick: () => router.push("/notification"),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime107.jsx)(import_lucide_react57.Bell, { className: "size-5" }),
            unreadCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime107.jsx)("span", { className: "absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-medium text-white shadow-xs", children: unreadCount > 5 ? "5+" : unreadCount })
          ]
        }
      )
    ] })
  ] }) }) });
}

// src/design-system/templates/data/sidebar-data.ts
var import_lucide_react58 = require("lucide-react");
var sidebarData2 = {
  user: {
    name: "satnaing",
    email: "satnaingdev@gmail.com",
    avatar: "/avatars/shadcn.jpg"
  },
  teams: [
    {
      name: "Amoga App",
      logo: import_lucide_react58.Command,
      plan: "Demo Company"
    }
  ],
  navGroups: [
    {
      title: "Menu",
      items: [
        {
          title: "Message",
          url: "/message",
          icon: import_lucide_react58.Mail
        },
        {
          title: "App Settings",
          url: "/app-settings",
          icon: import_lucide_react58.Settings
        },
        {
          title: "Design System",
          url: "/",
          icon: import_lucide_react58.Settings
        },
        {
          title: "Vouchers",
          url: "/vouchers",
          icon: import_lucide_react58.Ticket
        },
        {
          title: "AI Chat",
          url: "/ai_chat",
          icon: import_lucide_react58.Bot
        },
        {
          title: "AI Search",
          url: "/ai_search",
          icon: import_lucide_react58.SearchIcon
        },
        {
          title: "Chart Template",
          url: "/charttemplate",
          icon: import_lucide_react58.ChartArea
        },
        {
          title: "Map Template",
          url: "/map",
          icon: import_lucide_react58.Map
        },
        {
          title: "Route Doc",
          url: "/routedoc",
          icon: import_lucide_react58.Route
        },
        {
          title: "Link Maker",
          url: "/link-maker",
          icon: import_lucide_react58.Link
        }
      ]
    },
    {
      title: "Other",
      items: [
        {
          title: "Settings",
          icon: import_lucide_react58.Settings,
          items: [
            // Add settings pages here
          ]
        },
        {
          title: "Help Center",
          url: "/help-center",
          icon: import_lucide_react58.HelpCircle
        }
      ]
    }
  ]
};

// src/design-system/templates/app-logo.tsx
var import_jsx_runtime108 = require("react/jsx-runtime");
function AppLogo({ className, onClick }) {
  const { toggleSidebar, setOpenMobile, isMobile } = useSidebar();
  const team = sidebarData2.teams[0];
  const Logo = team.logo;
  const handleClick = (e) => {
    e.stopPropagation();
    if (onClick) {
      onClick();
      return;
    }
    if (isMobile) {
      setOpenMobile(true);
    } else {
      toggleSidebar();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(
    Button,
    {
      type: "button",
      variant: "ghost",
      onClick: handleClick,
      className: cn(
        "size-8 shrink-0 p-0 hover:bg-transparent sm:size-9 cursor-pointer",
        className
      ),
      "aria-label": "Open sidebar menu",
      children: /* @__PURE__ */ (0, import_jsx_runtime108.jsx)("div", { className: "flex size-full items-center justify-center rounded-lg bg-primary text-primary-foreground", children: /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(Logo, { className: "size-4" }) })
    }
  );
}

// src/context/layout-provider.tsx
var import_react21 = require("react");
var import_jsx_runtime109 = require("react/jsx-runtime");
var LAYOUT_COLLAPSIBLE_COOKIE_NAME = "layout_collapsible";
var LAYOUT_VARIANT_COOKIE_NAME = "layout_variant";
var LAYOUT_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
var DEFAULT_VARIANT = "inset";
var DEFAULT_COLLAPSIBLE = "icon";
var LayoutContext = (0, import_react21.createContext)(null);
function LayoutProvider({ children }) {
  const [collapsible, _setCollapsible] = (0, import_react21.useState)(() => {
    const saved = getCookie(LAYOUT_COLLAPSIBLE_COOKIE_NAME);
    return saved || DEFAULT_COLLAPSIBLE;
  });
  const [variant, _setVariant] = (0, import_react21.useState)(() => {
    const saved = getCookie(LAYOUT_VARIANT_COOKIE_NAME);
    return saved || DEFAULT_VARIANT;
  });
  const [showInlineNotFound, setShowInlineNotFound] = (0, import_react21.useState)(false);
  const setCollapsible = (newCollapsible) => {
    _setCollapsible(newCollapsible);
    setCookie(
      LAYOUT_COLLAPSIBLE_COOKIE_NAME,
      newCollapsible,
      LAYOUT_COOKIE_MAX_AGE
    );
  };
  const setVariant = (newVariant) => {
    _setVariant(newVariant);
    setCookie(LAYOUT_VARIANT_COOKIE_NAME, newVariant, LAYOUT_COOKIE_MAX_AGE);
  };
  const resetLayout = () => {
    setCollapsible(DEFAULT_COLLAPSIBLE);
    setVariant(DEFAULT_VARIANT);
  };
  const contextValue = {
    resetLayout,
    defaultCollapsible: DEFAULT_COLLAPSIBLE,
    collapsible,
    setCollapsible,
    defaultVariant: DEFAULT_VARIANT,
    variant,
    setVariant,
    showInlineNotFound,
    setShowInlineNotFound
  };
  return /* @__PURE__ */ (0, import_jsx_runtime109.jsx)(LayoutContext, { value: contextValue, children });
}
function useLayout() {
  const context = (0, import_react21.useContext)(LayoutContext);
  if (!context) {
    return {
      resetLayout: () => {
      },
      defaultCollapsible: DEFAULT_COLLAPSIBLE,
      collapsible: DEFAULT_COLLAPSIBLE,
      setCollapsible: () => {
      },
      defaultVariant: DEFAULT_VARIANT,
      variant: DEFAULT_VARIANT,
      setVariant: () => {
      },
      showInlineNotFound: false,
      setShowInlineNotFound: () => {
      }
    };
  }
  return context;
}

// src/design-system/templates/nav-group.tsx
var import_link = __toESM(require("next/link"));
var import_navigation3 = require("next/navigation");
var import_lucide_react59 = require("lucide-react");
var import_jsx_runtime110 = require("react/jsx-runtime");
function NavGroup({ title, items }) {
  const { state, isMobile, openMobile, setOpenMobile } = useSidebar();
  const href = (0, import_navigation3.usePathname)();
  return /* @__PURE__ */ (0, import_jsx_runtime110.jsxs)(SidebarGroup, { className: cn(title === "Menu" && "pt-0"), children: [
    /* @__PURE__ */ (0, import_jsx_runtime110.jsxs)(
      SidebarGroupLabel,
      {
        className: cn(
          "flex items-center justify-between",
          title === "Menu" && state !== "collapsed" && "sticky top-0 z-20 bg-sidebar py-1.5"
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime110.jsx)("span", { children: title }),
          title === "Menu" && !isMobile && /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(
            SidebarTrigger,
            {
              variant: "ghost",
              className: "h-5 w-5",
              "aria-label": "Toggle sidebar"
            }
          ),
          title === "Menu" && isMobile && openMobile && /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(
            Button,
            {
              type: "button",
              variant: "ghost",
              size: "icon",
              className: "size-6 shrink-0",
              "aria-label": "Close sidebar",
              onClick: () => setOpenMobile(false),
              children: /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(import_lucide_react59.X, { className: "size-4", "aria-hidden": "true" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(SidebarMenu, { children: items.map((item) => {
      const key = `${item.title}-${item.url}`;
      if (!item.items)
        return /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(SidebarMenuLink, { item, href }, key);
      if (item.title === "Settings" && item.items.length === 0)
        return /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(SidebarMenuSettings, { item }, key);
      if (state === "collapsed" && !isMobile)
        return /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(SidebarMenuCollapsedDropdown, { item, href }, key);
      return /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(SidebarMenuCollapsible, { item, href }, key);
    }) })
  ] });
}
function NavBadge({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(Badge, { className: "rounded-full px-1 py-0 text-xs", children });
}
function SidebarMenuLink({ item, href }) {
  const { setOpenMobile } = useSidebar();
  const { setShowInlineNotFound } = useLayout();
  return /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(
    SidebarMenuButton,
    {
      asChild: true,
      isActive: checkIsActive(href, item),
      tooltip: item.title,
      children: /* @__PURE__ */ (0, import_jsx_runtime110.jsxs)(
        import_link.default,
        {
          href: item.url,
          onClick: () => {
            setShowInlineNotFound(false);
            setOpenMobile(false);
          },
          children: [
            item.icon && /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(item.icon, {}),
            /* @__PURE__ */ (0, import_jsx_runtime110.jsx)("span", { children: item.title }),
            item.badge && /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(NavBadge, { children: item.badge })
          ]
        }
      )
    }
  ) });
}
function SidebarMenuSettings({ item }) {
  const { setOpenMobile } = useSidebar();
  const { showInlineNotFound, setShowInlineNotFound } = useLayout();
  return /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime110.jsxs)(
    SidebarMenuButton,
    {
      tooltip: item.title,
      isActive: showInlineNotFound,
      onClick: () => {
        setShowInlineNotFound(true);
        setOpenMobile(false);
      },
      children: [
        item.icon && /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(item.icon, {}),
        /* @__PURE__ */ (0, import_jsx_runtime110.jsx)("span", { children: item.title })
      ]
    }
  ) });
}
function SidebarMenuCollapsible({
  item,
  href
}) {
  const { setOpenMobile } = useSidebar();
  const { setShowInlineNotFound } = useLayout();
  return /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(
    Collapsible,
    {
      asChild: true,
      defaultOpen: checkIsActive(href, item, true),
      className: "group/collapsible",
      children: /* @__PURE__ */ (0, import_jsx_runtime110.jsxs)(SidebarMenuItem, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(CollapsibleTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime110.jsxs)(SidebarMenuButton, { tooltip: item.title, children: [
          item.icon && /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(item.icon, {}),
          /* @__PURE__ */ (0, import_jsx_runtime110.jsx)("span", { children: item.title }),
          item.badge && /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(NavBadge, { children: item.badge }),
          /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(import_lucide_react59.ChevronRight, { className: "ms-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 rtl:rotate-180" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(CollapsibleContent, { className: "CollapsibleContent", children: /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(SidebarMenuSub, { children: item.items.map((subItem) => /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(SidebarMenuSubItem, { children: /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(
          SidebarMenuSubButton,
          {
            asChild: true,
            isActive: checkIsActive(href, subItem),
            children: /* @__PURE__ */ (0, import_jsx_runtime110.jsxs)(
              import_link.default,
              {
                href: subItem.url,
                onClick: () => {
                  setShowInlineNotFound(false);
                  setOpenMobile(false);
                },
                children: [
                  subItem.icon && /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(subItem.icon, {}),
                  /* @__PURE__ */ (0, import_jsx_runtime110.jsx)("span", { children: subItem.title }),
                  subItem.badge && /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(NavBadge, { children: subItem.badge })
                ]
              }
            )
          }
        ) }, subItem.title)) }) })
      ] })
    }
  );
}
function SidebarMenuCollapsedDropdown({
  item,
  href
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime110.jsxs)(DropdownMenu, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime110.jsxs)(
      SidebarMenuButton,
      {
        tooltip: item.title,
        isActive: checkIsActive(href, item),
        children: [
          item.icon && /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(item.icon, {}),
          /* @__PURE__ */ (0, import_jsx_runtime110.jsx)("span", { children: item.title }),
          item.badge && /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(NavBadge, { children: item.badge }),
          /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(import_lucide_react59.ChevronRight, { className: "ms-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" })
        ]
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime110.jsxs)(DropdownMenuContent, { side: "right", align: "start", sideOffset: 4, children: [
      /* @__PURE__ */ (0, import_jsx_runtime110.jsxs)(DropdownMenuLabel, { children: [
        item.title,
        " ",
        item.badge ? `(${item.badge})` : ""
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(DropdownMenuSeparator, {}),
      item.items.map((sub) => /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime110.jsxs)(
        import_link.default,
        {
          href: sub.url,
          className: `${checkIsActive(href, sub) ? "bg-secondary" : ""}`,
          children: [
            sub.icon && /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(sub.icon, {}),
            /* @__PURE__ */ (0, import_jsx_runtime110.jsx)("span", { className: "max-w-52 text-wrap", children: sub.title }),
            sub.badge && /* @__PURE__ */ (0, import_jsx_runtime110.jsx)("span", { className: "ms-auto text-xs", children: sub.badge })
          ]
        }
      ) }, `${sub.title}-${sub.url}`))
    ] })
  ] }) });
}
function checkIsActive(href, item, mainNav = false) {
  return href === item.url || // /endpint?search=param
  href.split("?")[0] === item.url || // endpoint
  !!item?.items?.filter((i) => i.url === href).length || // if child nav is active
  mainNav && href.split("/")[1] !== "" && href.split("/")[1] === item?.url?.split("/")[1];
}

// src/design-system/templates/team-switcher.tsx
var import_jsx_runtime111 = require("react/jsx-runtime");
function TeamSwitcher({ teams }) {
  useSidebar();
  const activeTeam = teams[0];
  return /* @__PURE__ */ (0, import_jsx_runtime111.jsx)(SidebarMenu, { children: /* @__PURE__ */ (0, import_jsx_runtime111.jsx)(SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime111.jsxs)(
    SidebarMenuButton,
    {
      size: "lg",
      className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime111.jsx)("div", { className: "flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground", children: /* @__PURE__ */ (0, import_jsx_runtime111.jsx)(activeTeam.logo, { className: "size-4" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime111.jsxs)("div", { className: "grid flex-1 text-start text-sm leading-tight", children: [
          /* @__PURE__ */ (0, import_jsx_runtime111.jsx)("span", { className: "truncate font-semibold", children: activeTeam.name }),
          /* @__PURE__ */ (0, import_jsx_runtime111.jsx)("span", { className: "truncate text-xs", children: activeTeam.plan })
        ] })
      ]
    }
  ) }) });
}

// src/design-system/templates/nav-user.tsx
var import_lucide_react61 = require("lucide-react");

// src/hooks/use-dialog-state.tsx
var import_react22 = require("react");
function useDialogState(initialState2 = null) {
  const [open, _setOpen] = (0, import_react22.useState)(initialState2);
  const setOpen = (str) => _setOpen((prev) => prev === str ? null : str);
  return [open, setOpen];
}

// src/components/config-drawer.tsx
var import_react23 = require("react");
var import_react_radio_group = require("@radix-ui/react-radio-group");
var import_lucide_react60 = require("lucide-react");

// src/assets/custom/icon-theme-dark.tsx
var import_jsx_runtime112 = require("react/jsx-runtime");
function IconThemeDark(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime112.jsxs)(
    "svg",
    {
      "data-name": "icon-theme-dark",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 79.86 51.14",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime112.jsxs)("g", { fill: "#1d2b3f", children: [
          /* @__PURE__ */ (0, import_jsx_runtime112.jsx)("rect", { x: 0.53, y: 0.5, width: 78.83, height: 50.14, rx: 3.5, ry: 3.5 }),
          /* @__PURE__ */ (0, import_jsx_runtime112.jsx)("path", { d: "M75.86 1c1.65 0 3 1.35 3 3v43.14c0 1.65-1.35 3-3 3H4.03c-1.65 0-3-1.35-3-3V4c0-1.65 1.35-3 3-3h71.83m0-1H4.03c-2.21 0-4 1.79-4 4v43.14c0 2.21 1.79 4 4 4h71.83c2.21 0 4-1.79 4-4V4c0-2.21-1.79-4-4-4z" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime112.jsx)(
          "path",
          {
            d: "M22.88 0h52.97c2.21 0 4 1.79 4 4v43.14c0 2.21-1.79 4-4 4H22.88V0z",
            fill: "#0d1628"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime112.jsx)("circle", { cx: 6.7, cy: 7.04, r: 3.54, fill: "#426187" }),
        /* @__PURE__ */ (0, import_jsx_runtime112.jsx)(
          "path",
          {
            d: "M18.12 6.39h-5.87c-.6 0-1.09-.45-1.09-1s.49-1 1.09-1h5.87c.6 0 1.09.45 1.09 1s-.49 1-1.09 1zM16.55 9.77h-4.24c-.55 0-1-.45-1-1s.45-1 1-1h4.24c.55 0 1 .45 1 1s-.45 1-1 1zM18.32 17.37H4.59c-.69 0-1.25-.47-1.25-1.05s.56-1.05 1.25-1.05h13.73c.69 0 1.25.47 1.25 1.05s-.56 1.05-1.25 1.05zM15.34 21.26h-11c-.55 0-1-.41-1-.91s.45-.91 1-.91h11c.55 0 1 .41 1 .91s-.45.91-1 .91zM16.46 25.57H4.43c-.6 0-1.09-.44-1.09-.98s.49-.98 1.09-.98h12.03c.6 0 1.09.44 1.09.98s-.49.98-1.09.98z",
            fill: "#426187"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime112.jsxs)("g", { fill: "#2a62bc", children: [
          /* @__PURE__ */ (0, import_jsx_runtime112.jsx)(
            "rect",
            {
              x: 33.36,
              y: 19.73,
              width: 2.75,
              height: 3.42,
              rx: 0.33,
              ry: 0.33,
              opacity: 0.32
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime112.jsx)(
            "rect",
            {
              x: 29.64,
              y: 16.57,
              width: 2.75,
              height: 6.58,
              rx: 0.33,
              ry: 0.33,
              opacity: 0.44
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime112.jsx)(
            "rect",
            {
              x: 37.16,
              y: 14.44,
              width: 2.75,
              height: 8.7,
              rx: 0.33,
              ry: 0.33,
              opacity: 0.53
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime112.jsx)(
            "rect",
            {
              x: 41.19,
              y: 10.75,
              width: 2.75,
              height: 12.4,
              rx: 0.33,
              ry: 0.33,
              opacity: 0.53
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime112.jsx)("circle", { cx: 62.74, cy: 16.32, r: 8, fill: "#2f5491", opacity: 0.5 }),
        /* @__PURE__ */ (0, import_jsx_runtime112.jsx)(
          "path",
          {
            d: "M62.74 16.32l4.1-6.87c1.19.71 2.18 1.72 2.86 2.92s1.04 2.57 1.04 3.95h-8z",
            fill: "#2f5491",
            opacity: 0.74
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime112.jsx)(
          "rect",
          {
            x: 29.64,
            y: 27.75,
            width: 41.62,
            height: 18.62,
            rx: 1.69,
            ry: 1.69,
            fill: "#17273f"
          }
        )
      ]
    }
  );
}

// src/assets/custom/icon-theme-light.tsx
var import_jsx_runtime113 = require("react/jsx-runtime");
function IconThemeLight(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime113.jsxs)(
    "svg",
    {
      "data-name": "icon-theme-light",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 79.86 51.14",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime113.jsxs)("g", { fill: "#d9d9d9", children: [
          /* @__PURE__ */ (0, import_jsx_runtime113.jsx)("rect", { x: 0.53, y: 0.5, width: 78.83, height: 50.14, rx: 3.5, ry: 3.5 }),
          /* @__PURE__ */ (0, import_jsx_runtime113.jsx)("path", { d: "M75.86 1c1.65 0 3 1.35 3 3v43.14c0 1.65-1.35 3-3 3H4.03c-1.65 0-3-1.35-3-3V4c0-1.65 1.35-3 3-3h71.83m0-1H4.03c-2.21 0-4 1.79-4 4v43.14c0 2.21 1.79 4 4 4h71.83c2.21 0 4-1.79 4-4V4c0-2.21-1.79-4-4-4z" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime113.jsx)(
          "path",
          {
            d: "M22.88 0h52.97c2.21 0 4 1.79 4 4v43.14c0 2.21-1.79 4-4 4H22.88V0z",
            fill: "#ecedef"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime113.jsx)("circle", { cx: 6.7, cy: 7.04, r: 3.54, fill: "#fff" }),
        /* @__PURE__ */ (0, import_jsx_runtime113.jsx)(
          "path",
          {
            d: "M18.12 6.39h-5.87c-.6 0-1.09-.45-1.09-1s.49-1 1.09-1h5.87c.6 0 1.09.45 1.09 1s-.49 1-1.09 1zM16.55 9.77h-4.24c-.55 0-1-.45-1-1s.45-1 1-1h4.24c.55 0 1 .45 1 1s-.45 1-1 1zM18.32 17.37H4.59c-.69 0-1.25-.47-1.25-1.05s.56-1.05 1.25-1.05h13.73c.69 0 1.25.47 1.25 1.05s-.56 1.05-1.25 1.05zM15.34 21.26h-11c-.55 0-1-.41-1-.91s.45-.91 1-.91h11c.55 0 1 .41 1 .91s-.45.91-1 .91zM16.46 25.57H4.43c-.6 0-1.09-.44-1.09-.98s.49-.98 1.09-.98h12.03c.6 0 1.09.44 1.09.98s-.49.98-1.09.98z",
            fill: "#fff"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime113.jsxs)("g", { fill: "#c0c4c4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime113.jsx)(
            "rect",
            {
              x: 33.36,
              y: 19.73,
              width: 2.75,
              height: 3.42,
              rx: 0.33,
              ry: 0.33,
              opacity: 0.32
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime113.jsx)(
            "rect",
            {
              x: 29.64,
              y: 16.57,
              width: 2.75,
              height: 6.58,
              rx: 0.33,
              ry: 0.33,
              opacity: 0.44
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime113.jsx)(
            "rect",
            {
              x: 37.16,
              y: 14.44,
              width: 2.75,
              height: 8.7,
              rx: 0.33,
              ry: 0.33,
              opacity: 0.53
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime113.jsx)(
            "rect",
            {
              x: 41.19,
              y: 10.75,
              width: 2.75,
              height: 12.4,
              rx: 0.33,
              ry: 0.33,
              opacity: 0.53
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime113.jsx)("circle", { cx: 62.74, cy: 16.32, r: 8, fill: "#fff" }),
        /* @__PURE__ */ (0, import_jsx_runtime113.jsxs)("g", { fill: "#d9d9d9", children: [
          /* @__PURE__ */ (0, import_jsx_runtime113.jsx)("path", { d: "M63.62 15.82L67 10.15c.93.64 1.7 1.48 2.26 2.47.56.98.89 2.08.96 3.21h-6.6z" }),
          /* @__PURE__ */ (0, import_jsx_runtime113.jsx)("path", { d: "M67.14 10.88a6.977 6.977 0 012.52 4.44h-5.17l2.65-4.44m-.31-1.43l-4.1 6.87h8c0-1.39-.36-2.75-1.04-3.95s-1.67-2.21-2.86-2.92z" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime113.jsx)(
          "rect",
          {
            x: 29.64,
            y: 27.75,
            width: 41.62,
            height: 18.62,
            rx: 1.69,
            ry: 1.69,
            fill: "#fff"
          }
        )
      ]
    }
  );
}

// src/assets/custom/icon-theme-system.tsx
var import_jsx_runtime114 = require("react/jsx-runtime");
function IconThemeSystem({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime114.jsxs)(
    "svg",
    {
      "data-name": "icon-theme-system",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 79.86 51.14",
      className: cn(
        "overflow-hidden rounded-[6px]",
        "fill-primary stroke-primary group-data-[state=unchecked]:fill-muted-foreground group-data-[state=unchecked]:stroke-muted-foreground",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime114.jsx)("path", { opacity: 0.2, d: "M0 0.03H22.88V51.17H0z" }),
        /* @__PURE__ */ (0, import_jsx_runtime114.jsx)(
          "circle",
          {
            cx: 6.7,
            cy: 7.04,
            r: 3.54,
            fill: "#fff",
            opacity: 0.8,
            stroke: "#fff",
            strokeLinecap: "round",
            strokeMiterlimit: 10
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime114.jsx)(
          "path",
          {
            d: "M18.12 6.39h-5.87c-.6 0-1.09-.45-1.09-1s.49-1 1.09-1h5.87c.6 0 1.09.45 1.09 1s-.49 1-1.09 1zM16.55 9.77h-4.24c-.55 0-1-.45-1-1s.45-1 1-1h4.24c.55 0 1 .45 1 1s-.45 1-1 1z",
            fill: "#fff",
            stroke: "none",
            opacity: 0.75
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime114.jsx)(
          "path",
          {
            d: "M18.32 17.37H4.59c-.69 0-1.25-.47-1.25-1.05s.56-1.05 1.25-1.05h13.73c.69 0 1.25.47 1.25 1.05s-.56 1.05-1.25 1.05z",
            fill: "#fff",
            stroke: "none",
            opacity: 0.72
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime114.jsx)(
          "path",
          {
            d: "M15.34 21.26h-11c-.55 0-1-.41-1-.91s.45-.91 1-.91h11c.55 0 1 .41 1 .91s-.45.91-1 .91z",
            fill: "#fff",
            stroke: "none",
            opacity: 0.55
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime114.jsx)(
          "path",
          {
            d: "M16.46 25.57H4.43c-.6 0-1.09-.44-1.09-.98s.49-.98 1.09-.98h12.03c.6 0 1.09.44 1.09.98s-.49.98-1.09.98z",
            fill: "#fff",
            stroke: "none",
            opacity: 0.67
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime114.jsx)(
          "rect",
          {
            x: 33.36,
            y: 19.73,
            width: 2.75,
            height: 3.42,
            rx: 0.33,
            ry: 0.33,
            opacity: 0.31,
            stroke: "none"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime114.jsx)(
          "rect",
          {
            x: 29.64,
            y: 16.57,
            width: 2.75,
            height: 6.58,
            rx: 0.33,
            ry: 0.33,
            opacity: 0.4,
            stroke: "none"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime114.jsx)(
          "rect",
          {
            x: 37.16,
            y: 14.44,
            width: 2.75,
            height: 8.7,
            rx: 0.33,
            ry: 0.33,
            opacity: 0.26,
            stroke: "none"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime114.jsx)(
          "rect",
          {
            x: 41.19,
            y: 10.75,
            width: 2.75,
            height: 12.4,
            rx: 0.33,
            ry: 0.33,
            opacity: 0.37,
            stroke: "none"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime114.jsxs)("g", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime114.jsx)("circle", { cx: 62.74, cy: 16.32, r: 8, opacity: 0.25 }),
          /* @__PURE__ */ (0, import_jsx_runtime114.jsx)(
            "path",
            {
              d: "M62.74 16.32l4.1-6.87c1.19.71 2.18 1.72 2.86 2.92s1.04 2.57 1.04 3.95h-8z",
              opacity: 0.45
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime114.jsx)(
          "rect",
          {
            x: 29.64,
            y: 27.75,
            width: 41.62,
            height: 18.62,
            rx: 1.69,
            ry: 1.69,
            opacity: 0.3,
            stroke: "none",
            strokeLinecap: "round",
            strokeMiterlimit: 10
          }
        )
      ]
    }
  );
}

// src/components/config-drawer.tsx
var import_jsx_runtime115 = require("react/jsx-runtime");
function ConfigDrawer({
  trigger
}) {
  const { resetTheme } = useTheme2();
  const { resetColorTheme } = useColorTheme();
  const handleReset = () => {
    resetTheme();
    resetColorTheme();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime115.jsxs)(Sheet, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(SheetTrigger, { asChild: true, children: trigger ?? /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(
      Button,
      {
        size: "icon",
        variant: "ghost",
        "aria-label": "Open theme settings",
        className: "rounded-full",
        children: /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(import_lucide_react60.Settings, { "aria-hidden": "true" })
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime115.jsxs)(SheetContent, { className: "flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_runtime115.jsxs)(SheetHeader, { className: "pb-0 text-start", children: [
        /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(SheetTitle, { children: "Theme Settings" }),
        /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(SheetDescription, { children: "Customize the look and feel of your dashboard." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime115.jsxs)("div", { className: "flex flex-1 flex-col gap-6 overflow-hidden px-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(ThemeConfig, {}),
        /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(ThemeListSelector, {})
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(SheetFooter, { className: "gap-2", children: /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(
        Button,
        {
          variant: "destructive",
          onClick: handleReset,
          children: "Reset"
        }
      ) })
    ] })
  ] });
}
function SectionTitle({
  title,
  showReset = false,
  onReset,
  resetAriaLabel,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime115.jsxs)(
    "div",
    {
      className: cn(
        "mb-2 flex items-center gap-2 text-sm font-semibold text-muted-foreground",
        className
      ),
      children: [
        title,
        showReset && onReset && /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(
          Button,
          {
            type: "button",
            size: "icon",
            variant: "secondary",
            className: "size-4 rounded-full",
            onClick: onReset,
            "aria-label": resetAriaLabel,
            children: /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(import_lucide_react60.RotateCcw, { className: "size-3" })
          }
        )
      ]
    }
  );
}
function RadioGroupItem2({
  item,
  isTheme = false
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime115.jsxs)(
    import_react_radio_group.Item,
    {
      value: item.value,
      className: cn("group outline-none", "transition duration-200 ease-in"),
      "aria-label": `Select ${item.label.toLowerCase()}`,
      "aria-describedby": `${item.value}-description`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime115.jsxs)(
          "div",
          {
            className: cn(
              "relative rounded-[6px] ring-[1px] ring-border",
              "group-data-[state=checked]:shadow-2xl group-data-[state=checked]:ring-primary",
              "group-focus-visible:ring-2"
            ),
            role: "img",
            "aria-hidden": "false",
            "aria-label": `${item.label} option preview`,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(
                import_lucide_react60.CircleCheck,
                {
                  className: cn(
                    "size-6 fill-primary stroke-white",
                    "group-data-[state=unchecked]:hidden",
                    "absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"
                  ),
                  "aria-hidden": "true"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(
                item.icon,
                {
                  className: cn(
                    !isTheme && "fill-primary stroke-primary group-data-[state=unchecked]:fill-muted-foreground group-data-[state=unchecked]:stroke-muted-foreground"
                  ),
                  "aria-hidden": "true"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(
          "div",
          {
            className: "mt-1 text-xs",
            id: `${item.value}-description`,
            "aria-live": "polite",
            children: item.label
          }
        )
      ]
    }
  );
}
function ThemeConfig() {
  const { defaultTheme, theme, setTheme } = useTheme2();
  return /* @__PURE__ */ (0, import_jsx_runtime115.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(
      SectionTitle,
      {
        title: "Theme",
        showReset: theme !== defaultTheme,
        onReset: () => setTheme(defaultTheme),
        resetAriaLabel: "Reset theme preference to default"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(
      import_react_radio_group.Root,
      {
        value: theme,
        onValueChange: setTheme,
        className: "grid w-full max-w-md grid-cols-3 gap-4",
        "aria-label": "Select theme preference",
        "aria-describedby": "theme-description",
        children: [
          {
            value: "system",
            label: "System",
            icon: IconThemeSystem
          },
          {
            value: "light",
            label: "Light",
            icon: IconThemeLight
          },
          {
            value: "dark",
            label: "Dark",
            icon: IconThemeDark
          }
        ].map((item) => /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(RadioGroupItem2, { item, isTheme: true }, item.value))
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime115.jsx)("div", { id: "theme-description", className: "sr-only", children: "Choose between system preference, light mode, or dark mode" })
  ] });
}
function ThemeListSelector() {
  const [search, setSearch] = (0, import_react23.useState)("");
  const { colorTheme, setColorTheme } = useColorTheme();
  const filtered = colorThemes.filter(
    (t) => t.label.toLowerCase().includes(search.toLowerCase())
  );
  return /* @__PURE__ */ (0, import_jsx_runtime115.jsxs)("div", { className: "flex min-h-0 flex-1 flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(
      SectionTitle,
      {
        title: "Color Theme",
        showReset: colorTheme !== DEFAULT_COLOR_THEME,
        onReset: () => setColorTheme(DEFAULT_COLOR_THEME),
        resetAriaLabel: "Reset color theme to default"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime115.jsxs)("div", { className: "relative mb-2.5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(import_lucide_react60.Search, { className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }),
      /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(
        "input",
        {
          type: "text",
          placeholder: "Search themes...",
          value: search,
          onChange: (e) => setSearch(e.target.value),
          className: cn(
            "w-full rounded-lg border border-border bg-background py-2 pl-9 pr-3 text-sm",
            "placeholder:text-muted-foreground",
            "focus:outline-none focus:ring-2 focus:ring-ring",
            "transition-colors"
          )
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime115.jsxs)("p", { className: "mb-2 text-xs text-muted-foreground font-medium", children: [
      filtered.length,
      " theme",
      filtered.length !== 1 ? "s" : "",
      " available"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime115.jsxs)(
      "div",
      {
        className: "flex-1 space-y-1 overflow-y-auto rounded-lg pr-1",
        role: "radiogroup",
        "aria-label": "Select color theme",
        children: [
          filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime115.jsx)("p", { className: "py-8 text-center text-sm text-muted-foreground", children: "No themes found" }),
          filtered.map((ct) => /* @__PURE__ */ (0, import_jsx_runtime115.jsxs)(
            "button",
            {
              onClick: () => setColorTheme(ct.name),
              role: "radio",
              "aria-checked": colorTheme === ct.name,
              "aria-label": `Select ${ct.label} theme`,
              className: cn(
                "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 transition-all duration-150 cursor-pointer",
                colorTheme === ct.name ? "bg-primary text-primary-foreground shadow-md" : "hover:bg-accent/80 hover:text-foreground border border-transparent hover:border-border/40"
              ),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime115.jsx)("div", { className: "flex gap-1.5 shrink-0", children: ct.colors.map((color, i) => /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(
                  "span",
                  {
                    className: cn(
                      "size-3.5 rounded-full shadow-xs transition-transform hover:scale-110",
                      colorTheme === ct.name ? "ring-1 ring-primary-foreground/40" : "ring-1 ring-border/50"
                    ),
                    style: { backgroundColor: color }
                  },
                  i
                )) }),
                /* @__PURE__ */ (0, import_jsx_runtime115.jsxs)("div", { className: "flex items-center gap-1.5 truncate", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime115.jsx)("span", { className: "text-sm font-medium truncate", children: ct.label }),
                  ct.category === "tweakcn" && /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(
                    "span",
                    {
                      className: cn(
                        "rounded px-1.5 py-0.2 text-[9px] font-semibold tracking-wider uppercase",
                        colorTheme === ct.name ? "bg-primary-foreground/20 text-primary-foreground" : "bg-primary/10 text-primary"
                      )
                    }
                  )
                ] }),
                colorTheme === ct.name && /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(import_lucide_react60.Check, { className: "ml-auto size-4 shrink-0", strokeWidth: 3 })
              ]
            },
            ct.name
          ))
        ]
      }
    )
  ] });
}

// src/design-system/templates/nav-user.tsx
var import_jsx_runtime116 = require("react/jsx-runtime");
function NavUser({ user: fallbackUser }) {
  const { isMobile } = useSidebar();
  const [open, setOpen] = useDialogState();
  const { auth } = useAuthStore();
  const userName = auth.user?.name || auth.user?.email?.split("@")[0] || fallbackUser.name;
  const userEmail = auth.user?.email || fallbackUser.email;
  const userAvatar = auth.user?.picture || fallbackUser.avatar;
  const userInitials = userName.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
  return /* @__PURE__ */ (0, import_jsx_runtime116.jsxs)(import_jsx_runtime116.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(SidebarMenu, { children: /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime116.jsxs)(DropdownMenu, { modal: false, children: [
      /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime116.jsxs)(
        SidebarMenuButton,
        {
          size: "lg",
          tooltip: userName,
          className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime116.jsxs)(Avatar, { className: "h-8 w-8 rounded-lg", children: [
              /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(AvatarImage, { src: userAvatar, alt: userName }),
              /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(AvatarFallback, { className: "rounded-lg", children: userInitials })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime116.jsxs)("div", { className: "grid flex-1 text-start text-sm leading-tight", children: [
              /* @__PURE__ */ (0, import_jsx_runtime116.jsx)("span", { className: "truncate font-semibold", children: userName }),
              /* @__PURE__ */ (0, import_jsx_runtime116.jsx)("span", { className: "truncate text-xs text-muted-foreground", children: userEmail })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(import_lucide_react61.ChevronsUpDown, { className: "ml-auto size-4 shrink-0" })
          ]
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime116.jsxs)(
        DropdownMenuContent,
        {
          className: "w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg",
          side: isMobile ? "bottom" : "right",
          align: "end",
          sideOffset: 4,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(DropdownMenuLabel, { className: "p-0 font-normal", children: /* @__PURE__ */ (0, import_jsx_runtime116.jsxs)("div", { className: "flex items-center gap-2 px-1 py-1.5 text-start text-sm", children: [
              /* @__PURE__ */ (0, import_jsx_runtime116.jsxs)(Avatar, { className: "h-8 w-8 rounded-lg", children: [
                /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(AvatarImage, { src: userAvatar, alt: userName }),
                /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(AvatarFallback, { className: "rounded-lg", children: userInitials })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime116.jsxs)("div", { className: "grid flex-1 text-start text-sm leading-tight", children: [
                /* @__PURE__ */ (0, import_jsx_runtime116.jsx)("span", { className: "truncate font-semibold", children: userName }),
                /* @__PURE__ */ (0, import_jsx_runtime116.jsx)("span", { className: "truncate text-xs text-muted-foreground", children: userEmail })
              ] })
            ] }) }),
            /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(DropdownMenuSeparator, {}),
            /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(
              ConfigDrawer,
              {
                trigger: /* @__PURE__ */ (0, import_jsx_runtime116.jsxs)(DropdownMenuItem, { onSelect: (e) => e.preventDefault(), children: [
                  /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(import_lucide_react61.Palette, { className: "mr-2 h-4 w-4" }),
                  "Theme"
                ] })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(
              ConfigDrawer,
              {
                trigger: /* @__PURE__ */ (0, import_jsx_runtime116.jsxs)(DropdownMenuItem, { onSelect: (e) => e.preventDefault(), children: [
                  /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(import_lucide_react61.Settings, { className: "mr-2 h-4 w-4" }),
                  "Setting"
                ] })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(DropdownMenuSeparator, {}),
            /* @__PURE__ */ (0, import_jsx_runtime116.jsxs)(
              DropdownMenuItem,
              {
                variant: "destructive",
                onClick: () => setOpen(true),
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(import_lucide_react61.LogOut, { className: "mr-2 h-4 w-4" }),
                  "Sign out"
                ]
              }
            )
          ]
        }
      )
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(SignOutDialog, { open: !!open, onOpenChange: setOpen })
  ] });
}

// src/design-system/templates/app-sidebar.tsx
var import_jsx_runtime117 = require("react/jsx-runtime");
function AppSidebar() {
  const { collapsible } = useLayout();
  return /* @__PURE__ */ (0, import_jsx_runtime117.jsxs)(Sidebar, { collapsible, variant: "sidebar", children: [
    /* @__PURE__ */ (0, import_jsx_runtime117.jsxs)(SidebarHeader, { className: "p-2 pb-1", children: [
      /* @__PURE__ */ (0, import_jsx_runtime117.jsxs)("div", { className: "flex items-center justify-between gap-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime117.jsx)("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ (0, import_jsx_runtime117.jsx)(TeamSwitcher, { teams: sidebarData2.teams }) }),
        /* @__PURE__ */ (0, import_jsx_runtime117.jsx)("div", { className: "group-data-[collapsible=icon]:hidden shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime117.jsx)(
          SidebarTrigger,
          {
            variant: "ghost",
            className: "h-8 w-8 hover:bg-sidebar-accent text-sidebar-foreground",
            "aria-label": "Toggle sidebar"
          }
        ) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime117.jsx)("div", { className: "hidden group-data-[collapsible=icon]:flex justify-center pt-2 pb-1", children: /* @__PURE__ */ (0, import_jsx_runtime117.jsx)(
        SidebarTrigger,
        {
          variant: "ghost",
          className: "h-8 w-8 hover:bg-sidebar-accent text-sidebar-foreground",
          "aria-label": "Toggle sidebar"
        }
      ) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime117.jsx)(SidebarContent, { children: sidebarData2.navGroups.map((props) => /* @__PURE__ */ (0, import_jsx_runtime117.jsx)(NavGroup, { ...props }, props.title)) }),
    /* @__PURE__ */ (0, import_jsx_runtime117.jsx)(SidebarFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime117.jsx)(NavUser, { user: sidebarData2.user }) })
  ] });
}

// src/design-system/templates/app-title.tsx
var import_link2 = __toESM(require("next/link"));
var import_lucide_react62 = require("lucide-react");
var import_jsx_runtime118 = require("react/jsx-runtime");
function AppTitle() {
  const { setOpenMobile } = useSidebar();
  return /* @__PURE__ */ (0, import_jsx_runtime118.jsx)(SidebarMenu, { children: /* @__PURE__ */ (0, import_jsx_runtime118.jsx)(SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime118.jsx)(
    SidebarMenuButton,
    {
      size: "lg",
      className: "gap-0 py-0 hover:bg-transparent active:bg-transparent",
      asChild: true,
      children: /* @__PURE__ */ (0, import_jsx_runtime118.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime118.jsxs)(
          import_link2.default,
          {
            href: "/",
            onClick: () => setOpenMobile(false),
            className: "grid flex-1 text-start text-sm leading-tight",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime118.jsx)("span", { className: "truncate font-bold", children: "Shadcn-Admin" }),
              /* @__PURE__ */ (0, import_jsx_runtime118.jsx)("span", { className: "truncate text-xs", children: "Vite + ShadcnUI" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime118.jsx)(ToggleSidebar, {})
      ] })
    }
  ) }) });
}
function ToggleSidebar({
  className,
  onClick,
  ...props
}) {
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ (0, import_jsx_runtime118.jsxs)(
    Button,
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: cn("aspect-square size-8 max-md:scale-125", className),
      onClick: (event) => {
        onClick?.(event);
        toggleSidebar();
      },
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime118.jsx)(import_lucide_react62.X, { className: "md:hidden" }),
        /* @__PURE__ */ (0, import_jsx_runtime118.jsx)(import_lucide_react62.Menu, { className: "max-md:hidden" }),
        /* @__PURE__ */ (0, import_jsx_runtime118.jsx)("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}

// src/design-system/templates/authenticated-layout.tsx
var import_react25 = require("react");
var import_navigation6 = require("next/navigation");

// src/components/layout/app-sidebar.tsx
var import_react24 = require("react");

// src/components/layout/nav-group.tsx
var import_link3 = __toESM(require("next/link"));
var import_navigation4 = require("next/navigation");
var import_lucide_react63 = require("lucide-react");
var import_jsx_runtime119 = require("react/jsx-runtime");
function NavGroup2({ title, items }) {
  const { state, isMobile, openMobile, setOpenMobile } = useSidebar();
  const href = (0, import_navigation4.usePathname)();
  return /* @__PURE__ */ (0, import_jsx_runtime119.jsxs)(SidebarGroup, { className: cn(title === "Menu" && "pt-0"), children: [
    /* @__PURE__ */ (0, import_jsx_runtime119.jsxs)(
      SidebarGroupLabel,
      {
        className: cn(
          "flex items-center justify-between",
          title === "Menu" && state !== "collapsed" && "sticky top-0 z-20 bg-sidebar py-1.5"
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime119.jsx)("span", { children: title }),
          title === "Menu" && !isMobile && /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(
            SidebarTrigger,
            {
              variant: "ghost",
              className: "h-5 w-5",
              "aria-label": "Toggle sidebar"
            }
          ),
          title === "Menu" && isMobile && openMobile && /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(
            Button,
            {
              type: "button",
              variant: "ghost",
              size: "icon",
              className: "size-6 shrink-0",
              "aria-label": "Close sidebar",
              onClick: () => setOpenMobile(false),
              children: /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(import_lucide_react63.X, { className: "size-4", "aria-hidden": "true" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(SidebarMenu, { children: items.map((item) => {
      const key = `${item.title}-${item.url}`;
      if (!item.items)
        return /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(SidebarMenuLink2, { item, href }, key);
      if (item.title === "Settings" && item.items.length === 0)
        return /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(SidebarMenuSettings2, { item }, key);
      if (state === "collapsed" && !isMobile)
        return /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(SidebarMenuCollapsedDropdown2, { item, href }, key);
      return /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(SidebarMenuCollapsible2, { item, href }, key);
    }) })
  ] });
}
function NavBadge2({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(Badge, { className: "rounded-full px-1 py-0 text-xs", children });
}
function SidebarMenuLink2({ item, href }) {
  const { setOpenMobile } = useSidebar();
  const { setShowInlineNotFound } = useLayout();
  return /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(
    SidebarMenuButton,
    {
      asChild: true,
      isActive: checkIsActive2(href, item),
      tooltip: item.title,
      children: /* @__PURE__ */ (0, import_jsx_runtime119.jsxs)(
        import_link3.default,
        {
          href: item.url,
          onClick: () => {
            setShowInlineNotFound(false);
            setOpenMobile(false);
          },
          children: [
            item.icon && /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(item.icon, {}),
            /* @__PURE__ */ (0, import_jsx_runtime119.jsx)("span", { children: item.title }),
            item.badge && /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(NavBadge2, { children: item.badge })
          ]
        }
      )
    }
  ) });
}
function SidebarMenuSettings2({ item }) {
  const { setOpenMobile } = useSidebar();
  const { showInlineNotFound, setShowInlineNotFound } = useLayout();
  return /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime119.jsxs)(
    SidebarMenuButton,
    {
      tooltip: item.title,
      isActive: showInlineNotFound,
      onClick: () => {
        setShowInlineNotFound(true);
        setOpenMobile(false);
      },
      children: [
        item.icon && /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(item.icon, {}),
        /* @__PURE__ */ (0, import_jsx_runtime119.jsx)("span", { children: item.title })
      ]
    }
  ) });
}
function SidebarMenuCollapsible2({
  item,
  href
}) {
  const { setOpenMobile } = useSidebar();
  const { setShowInlineNotFound } = useLayout();
  return /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(
    Collapsible,
    {
      asChild: true,
      defaultOpen: checkIsActive2(href, item, true),
      className: "group/collapsible",
      children: /* @__PURE__ */ (0, import_jsx_runtime119.jsxs)(SidebarMenuItem, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(CollapsibleTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime119.jsxs)(SidebarMenuButton, { tooltip: item.title, children: [
          item.icon && /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(item.icon, {}),
          /* @__PURE__ */ (0, import_jsx_runtime119.jsx)("span", { children: item.title }),
          item.badge && /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(NavBadge2, { children: item.badge }),
          /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(import_lucide_react63.ChevronRight, { className: "ms-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 rtl:rotate-180" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(CollapsibleContent, { className: "CollapsibleContent", children: /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(SidebarMenuSub, { children: item.items.map((subItem) => /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(SidebarMenuSubItem, { children: /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(
          SidebarMenuSubButton,
          {
            asChild: true,
            isActive: checkIsActive2(href, subItem),
            children: /* @__PURE__ */ (0, import_jsx_runtime119.jsxs)(
              import_link3.default,
              {
                href: subItem.url,
                onClick: () => {
                  setShowInlineNotFound(false);
                  setOpenMobile(false);
                },
                children: [
                  subItem.icon && /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(subItem.icon, {}),
                  /* @__PURE__ */ (0, import_jsx_runtime119.jsx)("span", { children: subItem.title }),
                  subItem.badge && /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(NavBadge2, { children: subItem.badge })
                ]
              }
            )
          }
        ) }, subItem.title)) }) })
      ] })
    }
  );
}
function SidebarMenuCollapsedDropdown2({
  item,
  href
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime119.jsxs)(DropdownMenu, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime119.jsxs)(
      SidebarMenuButton,
      {
        tooltip: item.title,
        isActive: checkIsActive2(href, item),
        children: [
          item.icon && /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(item.icon, {}),
          /* @__PURE__ */ (0, import_jsx_runtime119.jsx)("span", { children: item.title }),
          item.badge && /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(NavBadge2, { children: item.badge }),
          /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(import_lucide_react63.ChevronRight, { className: "ms-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" })
        ]
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime119.jsxs)(DropdownMenuContent, { side: "right", align: "start", sideOffset: 4, children: [
      /* @__PURE__ */ (0, import_jsx_runtime119.jsxs)(DropdownMenuLabel, { children: [
        item.title,
        " ",
        item.badge ? `(${item.badge})` : ""
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(DropdownMenuSeparator, {}),
      item.items.map((sub) => /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime119.jsxs)(
        import_link3.default,
        {
          href: sub.url,
          className: `${checkIsActive2(href, sub) ? "bg-secondary" : ""}`,
          children: [
            sub.icon && /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(sub.icon, {}),
            /* @__PURE__ */ (0, import_jsx_runtime119.jsx)("span", { className: "max-w-52 text-wrap", children: sub.title }),
            sub.badge && /* @__PURE__ */ (0, import_jsx_runtime119.jsx)("span", { className: "ms-auto text-xs", children: sub.badge })
          ]
        }
      ) }, `${sub.title}-${sub.url}`))
    ] })
  ] }) });
}
function checkIsActive2(href, item, mainNav = false) {
  return href === item.url || // /endpint?search=param
  href.split("?")[0] === item.url || // endpoint
  !!item?.items?.filter((i) => i.url === href).length || // if child nav is active
  mainNav && href.split("/")[1] !== "" && href.split("/")[1] === item?.url?.split("/")[1];
}

// src/components/layout/nav-user.tsx
var import_lucide_react64 = require("lucide-react");
var import_link4 = __toESM(require("next/link"));
var import_jsx_runtime120 = require("react/jsx-runtime");
function NavUser2({ user: fallbackUser }) {
  const { isMobile } = useSidebar();
  const [open, setOpen] = useDialogState();
  const { auth } = useAuthStore();
  const { setShowInlineNotFound } = useLayout();
  const userName = auth.user?.name || auth.user?.email?.split("@")[0] || fallbackUser.name;
  const userEmail = auth.user?.email || fallbackUser.email;
  const userAvatar = auth.user?.picture || fallbackUser.avatar;
  const userInitials = userName.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
  return /* @__PURE__ */ (0, import_jsx_runtime120.jsxs)(import_jsx_runtime120.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime120.jsx)(SidebarMenu, { children: /* @__PURE__ */ (0, import_jsx_runtime120.jsx)(SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime120.jsxs)(DropdownMenu, { modal: false, children: [
      /* @__PURE__ */ (0, import_jsx_runtime120.jsx)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime120.jsxs)(
        SidebarMenuButton,
        {
          size: "lg",
          tooltip: userName,
          className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime120.jsxs)(Avatar, { className: "h-8 w-8 rounded-lg", children: [
              /* @__PURE__ */ (0, import_jsx_runtime120.jsx)(AvatarImage, { src: userAvatar, alt: userName }),
              /* @__PURE__ */ (0, import_jsx_runtime120.jsx)(AvatarFallback, { className: "rounded-lg", children: userInitials })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime120.jsxs)("div", { className: "grid flex-1 text-start text-sm leading-tight", children: [
              /* @__PURE__ */ (0, import_jsx_runtime120.jsx)("span", { className: "truncate font-semibold", children: userName }),
              /* @__PURE__ */ (0, import_jsx_runtime120.jsx)("span", { className: "truncate text-xs text-muted-foreground", children: userEmail })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime120.jsx)(import_lucide_react64.ChevronsUpDown, { className: "ml-auto size-4 shrink-0" })
          ]
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime120.jsxs)(
        DropdownMenuContent,
        {
          className: "w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg",
          side: isMobile ? "bottom" : "right",
          align: "end",
          sideOffset: 4,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime120.jsx)(DropdownMenuLabel, { className: "p-0 font-normal", children: /* @__PURE__ */ (0, import_jsx_runtime120.jsxs)("div", { className: "flex items-center gap-2 px-1 py-1.5 text-start text-sm", children: [
              /* @__PURE__ */ (0, import_jsx_runtime120.jsxs)(Avatar, { className: "h-8 w-8 rounded-lg", children: [
                /* @__PURE__ */ (0, import_jsx_runtime120.jsx)(AvatarImage, { src: userAvatar, alt: userName }),
                /* @__PURE__ */ (0, import_jsx_runtime120.jsx)(AvatarFallback, { className: "rounded-lg", children: userInitials })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime120.jsxs)("div", { className: "grid flex-1 text-start text-sm leading-tight", children: [
                /* @__PURE__ */ (0, import_jsx_runtime120.jsx)("span", { className: "truncate font-semibold", children: userName }),
                /* @__PURE__ */ (0, import_jsx_runtime120.jsx)("span", { className: "truncate text-xs text-muted-foreground", children: userEmail })
              ] })
            ] }) }),
            /* @__PURE__ */ (0, import_jsx_runtime120.jsx)(DropdownMenuSeparator, {}),
            /* @__PURE__ */ (0, import_jsx_runtime120.jsxs)(DropdownMenuItem, { onClick: () => setShowInlineNotFound(true), children: [
              /* @__PURE__ */ (0, import_jsx_runtime120.jsx)(import_lucide_react64.User, { className: "mr-2 h-4 w-4" }),
              "My Profile"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime120.jsxs)(DropdownMenuItem, { onClick: () => setShowInlineNotFound(true), children: [
              /* @__PURE__ */ (0, import_jsx_runtime120.jsx)(import_lucide_react64.Bell, { className: "mr-2 h-4 w-4" }),
              "Notifications"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime120.jsxs)(DropdownMenuItem, { onClick: () => setShowInlineNotFound(true), children: [
              /* @__PURE__ */ (0, import_jsx_runtime120.jsx)(import_lucide_react64.MessageCircle, { className: "mr-2 h-4 w-4" }),
              "Help & Support"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime120.jsx)(DropdownMenuSeparator, {}),
            /* @__PURE__ */ (0, import_jsx_runtime120.jsxs)(DropdownMenuItem, { onClick: () => setShowInlineNotFound(true), children: [
              /* @__PURE__ */ (0, import_jsx_runtime120.jsx)(import_lucide_react64.CreditCard, { className: "mr-2 h-4 w-4" }),
              "Subscriptions"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime120.jsx)(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime120.jsxs)(import_link4.default, { href: "/apps", children: [
              /* @__PURE__ */ (0, import_jsx_runtime120.jsx)(import_lucide_react64.ShoppingBag, { className: "mr-2 h-4 w-4" }),
              "Buy Apps"
            ] }) }),
            /* @__PURE__ */ (0, import_jsx_runtime120.jsx)(
              ConfigDrawer,
              {
                trigger: /* @__PURE__ */ (0, import_jsx_runtime120.jsxs)(DropdownMenuItem, { onSelect: (e) => e.preventDefault(), children: [
                  /* @__PURE__ */ (0, import_jsx_runtime120.jsx)(import_lucide_react64.Palette, { className: "mr-2 h-4 w-4" }),
                  "Theme Settings"
                ] })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime120.jsxs)(DropdownMenuItem, { onClick: () => setShowInlineNotFound(true), children: [
              /* @__PURE__ */ (0, import_jsx_runtime120.jsx)(import_lucide_react64.Settings, { className: "mr-2 h-4 w-4" }),
              "Settings"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime120.jsx)(DropdownMenuSeparator, {}),
            /* @__PURE__ */ (0, import_jsx_runtime120.jsxs)(
              DropdownMenuItem,
              {
                variant: "destructive",
                onClick: () => setOpen(true),
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime120.jsx)(import_lucide_react64.LogOut, { className: "mr-2 h-4 w-4" }),
                  "Sign out"
                ]
              }
            )
          ]
        }
      )
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime120.jsx)(SignOutDialog, { open: !!open, onOpenChange: setOpen })
  ] });
}

// src/components/layout/app-sidebar.tsx
var import_jsx_runtime121 = (
  // Sidebar ko fixed "sidebar" variant par lock kiya gaya hai (floating remove).
  require("react/jsx-runtime")
);
function AppSidebar2() {
  const { collapsible } = useLayout();
  const currentUser = useAuthStore((state) => state.auth.user);
  const { unreadCount, fetchNotifications, subscribeToNotifications, unsubscribe } = useNotificationStore();
  (0, import_react24.useEffect)(() => {
    if (currentUser) {
      fetchNotifications(currentUser.accountNo);
      subscribeToNotifications(currentUser.accountNo);
    }
    return () => {
      unsubscribe();
    };
  }, [currentUser, fetchNotifications, subscribeToNotifications, unsubscribe]);
  const dynamicSidebarData = {
    ...sidebarData,
    navGroups: sidebarData.navGroups.map((group) => ({
      ...group,
      items: group.items.map((item) => {
        if (item.title === "Notification") {
          return {
            ...item,
            badge: unreadCount > 0 ? unreadCount > 5 ? "5+" : String(unreadCount) : void 0
          };
        }
        return item;
      })
    }))
  };
  return /* @__PURE__ */ (0, import_jsx_runtime121.jsxs)(Sidebar, { collapsible, variant: "sidebar", children: [
    /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(SidebarHeader, { className: "pb-0", children: /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(TeamSwitcher, { teams: dynamicSidebarData.teams }) }),
    /* @__PURE__ */ (0, import_jsx_runtime121.jsx)("div", { className: "hidden group-data-[state=collapsed]:flex justify-center py-2", children: /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(
      SidebarTrigger,
      {
        variant: "ghost",
        className: "h-8 w-8",
        "aria-label": "Toggle sidebar"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(SidebarContent, { children: dynamicSidebarData.navGroups.map((props) => /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(NavGroup2, { ...props }, props.title)) }),
    /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(SidebarFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(NavUser2, { user: dynamicSidebarData.user }) })
  ] });
}

// src/components/skip-to-main.tsx
var import_jsx_runtime122 = require("react/jsx-runtime");
function SkipToMain() {
  return /* @__PURE__ */ (0, import_jsx_runtime122.jsx)(
    "a",
    {
      className: `fixed inset-s-44 z-999 -translate-y-52 bg-primary px-4 py-2 text-sm font-medium whitespace-nowrap text-primary-foreground opacity-95 shadow-sm transition hover:bg-primary/90 focus:translate-y-3 focus:transform focus-visible:ring-1 focus-visible:ring-ring`,
      href: "#content",
      children: "Skip to Main"
    }
  );
}

// src/features/errors/not-found-error.tsx
var import_navigation5 = require("next/navigation");
var import_jsx_runtime123 = require("react/jsx-runtime");
function NotFoundError({
  className,
  embedded = false,
  onDismiss
}) {
  const router = (0, import_navigation5.useRouter)();
  const handleGoBack = () => {
    if (onDismiss) {
      onDismiss();
      return;
    }
    router.back();
  };
  const handleGoHome = () => {
    if (onDismiss) onDismiss();
    router.push("/");
  };
  return /* @__PURE__ */ (0, import_jsx_runtime123.jsx)("div", { className: cn(embedded ? "min-h-96 w-full py-8" : "h-svh", className), children: /* @__PURE__ */ (0, import_jsx_runtime123.jsxs)("div", { className: "m-auto flex h-full w-full flex-col items-center justify-center gap-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime123.jsx)(
      "h1",
      {
        className: cn(
          "leading-tight font-bold",
          embedded ? "text-6xl" : "text-[7rem]"
        ),
        children: "404"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime123.jsx)("span", { className: "font-medium", children: "Oops! Page Not Found :-(!" }),
    /* @__PURE__ */ (0, import_jsx_runtime123.jsxs)("p", { className: "text-center text-muted-foreground", children: [
      "It seems like the page you're looking for ",
      /* @__PURE__ */ (0, import_jsx_runtime123.jsx)("br", {}),
      "does not exist or might have been removed."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime123.jsxs)("div", { className: "mt-6 flex gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime123.jsx)(Button, { variant: "outline", onClick: handleGoBack, children: "Go Back" }),
      /* @__PURE__ */ (0, import_jsx_runtime123.jsx)(Button, { onClick: handleGoHome, children: "Back to Home" })
    ] })
  ] }) });
}

// src/design-system/templates/authenticated-layout.tsx
var import_jsx_runtime124 = require("react/jsx-runtime");
function AuthenticatedLayoutContent({ children }) {
  const { showInlineNotFound, setShowInlineNotFound } = useLayout();
  const pathname = (0, import_navigation6.usePathname)();
  (0, import_react25.useEffect)(() => {
    setShowInlineNotFound(false);
  }, [pathname, setShowInlineNotFound]);
  return /* @__PURE__ */ (0, import_jsx_runtime124.jsxs)(import_jsx_runtime124.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime124.jsx)(SkipToMain, {}),
    /* @__PURE__ */ (0, import_jsx_runtime124.jsx)(AppSidebar2, {}),
    /* @__PURE__ */ (0, import_jsx_runtime124.jsx)(
      SidebarInset,
      {
        className: cn(
          "@container/content flex min-h-svh flex-1 flex-col overflow-hidden",
          "has-[[data-layout=fixed]]:h-svh has-data-[layout=fixed]:h-svh",
          "peer-data-[variant=inset]:has-data-[layout=fixed]:h-[calc(100svh-(var(--spacing)*4))]"
        ),
        children: showInlineNotFound ? /* @__PURE__ */ (0, import_jsx_runtime124.jsx)(
          NotFoundError,
          {
            embedded: true,
            onDismiss: () => setShowInlineNotFound(false)
          }
        ) : children
      }
    )
  ] });
}
function AuthenticatedLayout({ children }) {
  const [defaultOpen, setDefaultOpen] = (0, import_react25.useState)(true);
  const [isMounted, setIsMounted] = (0, import_react25.useState)(false);
  (0, import_react25.useEffect)(() => {
    setDefaultOpen(getCookie("sidebar_state") !== "false");
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime124.jsx)(SearchProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime124.jsx)(LayoutProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime124.jsx)(SidebarProvider, { defaultOpen, children: /* @__PURE__ */ (0, import_jsx_runtime124.jsx)(AuthenticatedLayoutContent, { children }) }) }) });
}

// src/design-system/templates/header.tsx
var import_react26 = require("react");
var import_jsx_runtime125 = require("react/jsx-runtime");
function Header2({ className, fixed, children, ...props }) {
  const [offset, setOffset] = (0, import_react26.useState)(0);
  (0, import_react26.useEffect)(() => {
    const onScroll = () => {
      setOffset(document.body.scrollTop || document.documentElement.scrollTop);
    };
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => document.removeEventListener("scroll", onScroll);
  }, []);
  return (
    // Page header container: fixed mode me top par sticky behavior deta hai.
    /* @__PURE__ */ (0, import_jsx_runtime125.jsx)(
      "header",
      {
        className: cn(
          "z-50 h-16 shrink-0",
          fixed && "header-fixed peer/header sticky top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80",
          offset > 10 && fixed ? "shadow-sm" : "shadow-none",
          className
        ),
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_runtime125.jsxs)(
          "div",
          {
            className: cn(
              // Header ke andar left-to-right UI controls/content align karne ke liye row layout.
              "relative flex h-full min-w-0 flex-nowrap items-center gap-1.5 overflow-hidden px-2 py-2 sm:gap-3 sm:px-4 md:gap-4",
              offset > 10 && fixed && "after:absolute after:inset-0 after:-z-10 after:bg-background/20 after:backdrop-blur-lg"
            ),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime125.jsx)(AppLogo, { className: "shrink-0 md:hidden" }),
              children
            ]
          }
        )
      }
    )
  );
}

// src/design-system/templates/main.tsx
var import_jsx_runtime126 = require("react/jsx-runtime");
function Main({ fixed, className, fluid, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime126.jsx)(
    "main",
    {
      "data-layout": fixed ? "fixed" : "auto",
      className: cn(
        "px-4 py-6",
        // If layout is fixed, make the main container flex and grow
        fixed && "flex grow flex-col min-h-0 overflow-hidden",
        // Standard full width to avoid left-side offset/gap next to sidebar
        "w-full",
        className
      ),
      ...props
    }
  );
}

// src/design-system/templates/sidebar-search.tsx
var import_lucide_react65 = require("lucide-react");
var import_jsx_runtime127 = require("react/jsx-runtime");
function SidebarSearch() {
  const { setOpen } = useSearch();
  return /* @__PURE__ */ (0, import_jsx_runtime127.jsx)(SidebarMenu, { children: /* @__PURE__ */ (0, import_jsx_runtime127.jsx)(SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime127.jsxs)(
    SidebarMenuButton,
    {
      onClick: () => setOpen(true),
      tooltip: "Search (\u2318K)",
      className: "bg-sidebar-accent/50 hover:bg-sidebar-accent border border-sidebar-border/60 text-muted-foreground hover:text-foreground",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime127.jsx)(import_lucide_react65.SearchIcon, { className: "size-4 shrink-0" }),
        /* @__PURE__ */ (0, import_jsx_runtime127.jsx)("span", { className: "flex-1 text-left text-xs font-normal group-data-[collapsible=icon]:hidden", children: "Search..." }),
        /* @__PURE__ */ (0, import_jsx_runtime127.jsxs)("kbd", { className: "pointer-events-none hidden h-4 select-none items-center gap-0.5 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 group-data-[collapsible=icon]:hidden sm:flex", children: [
          /* @__PURE__ */ (0, import_jsx_runtime127.jsx)("span", { className: "text-[10px]", children: "\u2318" }),
          "K"
        ] })
      ]
    }
  ) }) });
}

// src/design-system/templates/top-nav.tsx
var import_link5 = __toESM(require("next/link"));
var import_lucide_react66 = require("lucide-react");
var import_jsx_runtime128 = require("react/jsx-runtime");
function TopNav({ className, links, ...props }) {
  const renderLink = ({
    title,
    href,
    isActive,
    disabled,
    onClick
  }) => {
    const className2 = `text-sm font-medium transition-colors hover:text-primary ${isActive ? "" : "text-muted-foreground"}`;
    if (onClick) {
      return /* @__PURE__ */ (0, import_jsx_runtime128.jsx)(
        "button",
        {
          type: "button",
          onClick,
          disabled,
          className: className2,
          children: title
        },
        title
      );
    }
    return /* @__PURE__ */ (0, import_jsx_runtime128.jsx)(
      import_link5.default,
      {
        href,
        className: className2,
        style: disabled ? { pointerEvents: "none", opacity: 0.5 } : void 0,
        children: title
      },
      title
    );
  };
  return /* @__PURE__ */ (0, import_jsx_runtime128.jsxs)(import_jsx_runtime128.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime128.jsxs)(DropdownMenu, { modal: false, children: [
      /* @__PURE__ */ (0, import_jsx_runtime128.jsx)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime128.jsxs)(
        Button,
        {
          size: "icon",
          variant: "outline",
          className: cn(
            "hidden size-8 shrink-0 md:inline-flex lg:hidden",
            className
          ),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime128.jsx)(import_lucide_react66.Menu, {}),
            /* @__PURE__ */ (0, import_jsx_runtime128.jsx)("span", { className: "sr-only", children: "Toggle navigation menu" })
          ]
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime128.jsx)(DropdownMenuContent, { side: "bottom", align: "start", children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime128.jsx)(
        DropdownMenuItem,
        {
          disabled: link.disabled,
          onClick: link.onClick,
          asChild: !link.onClick,
          children: link.onClick ? /* @__PURE__ */ (0, import_jsx_runtime128.jsx)("span", { className: !link.isActive ? "text-muted-foreground" : "", children: link.title }) : /* @__PURE__ */ (0, import_jsx_runtime128.jsx)(
            import_link5.default,
            {
              href: link.href,
              className: !link.isActive ? "text-muted-foreground" : "",
              style: link.disabled ? { pointerEvents: "none", opacity: 0.5 } : void 0,
              children: link.title
            }
          )
        },
        link.title
      )) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime128.jsx)(
      "nav",
      {
        className: cn(
          "hidden items-center space-x-4 lg:flex lg:space-x-4 xl:space-x-6",
          className
        ),
        ...props,
        children: links.map((link) => renderLink(link))
      }
    )
  ] });
}

// src/features/email-settings/index.tsx
var import_react35 = require("react");

// src/features/email-settings/store.ts
var import_zustand3 = require("zustand");
var import_middleware = require("zustand/middleware");
var DEFAULT_STORAGE_CONFIG = {
  supabaseUrl: "",
  supabaseAnonKey: "",
  bucketName: "chat-files",
  isCustomEnabled: false,
  status: "untested"
};
var DEFAULT_CONFIG = {
  profile: {
    name: "Alex Rivera",
    bio: "Senior UX Architect & Tech Writer | Crafting digital experiences \u2728",
    avatarUrl: ""
  },
  accounts: [
    {
      id: "1",
      email: "user@gmail.com",
      protocol: "IMAP",
      isEnabled: true,
      incomingServer: "imap.gmail.com",
      incomingPort: 993,
      outgoingServer: "smtp.gmail.com",
      outgoingPort: 587,
      useSSL: true,
      useTLS: true
    },
    {
      id: "2",
      email: "user@outlook.com",
      protocol: "IMAP",
      isEnabled: true,
      incomingServer: "outlook.office365.com",
      incomingPort: 993,
      outgoingServer: "smtp-mail.outlook.com",
      outgoingPort: 587,
      useSSL: true,
      useTLS: true
    }
  ],
  storageAccounts: [],
  chatAccounts: [],
  aiAccounts: [],
  emailFileAccounts: [],
  authProviders: [],
  theme: {
    preset: "custom",
    appTheme: "system",
    appColorTheme: "zinc"
  },
  storage: DEFAULT_STORAGE_CONFIG
};
var useEmailSettingsStore = (0, import_zustand3.create)()(
  (0, import_middleware.persist)(
    (set) => ({
      config: DEFAULT_CONFIG,
      updateProfile: (profileUpdates) => set((state) => ({
        config: {
          ...state.config,
          profile: {
            ...state.config.profile,
            ...profileUpdates
          }
        }
      })),
      addAccount: (newAccount) => set((state) => {
        const accountWithId = {
          ...newAccount,
          id: `account-${Date.now()}`
        };
        return {
          config: {
            ...state.config,
            accounts: [...state.config.accounts, accountWithId]
          }
        };
      }),
      updateAccount: (id, updates) => set((state) => ({
        config: {
          ...state.config,
          accounts: state.config.accounts.map(
            (account) => account.id === id ? { ...account, ...updates } : account
          )
        }
      })),
      removeAccount: (id) => set((state) => ({
        config: {
          ...state.config,
          accounts: state.config.accounts.filter((account) => account.id !== id)
        }
      })),
      addStorageAccount: (newAccount) => set((state) => {
        const accountWithId = {
          ...newAccount,
          id: `storage-${Date.now()}`
        };
        return {
          config: {
            ...state.config,
            storageAccounts: [...state.config.storageAccounts || [], accountWithId]
          }
        };
      }),
      updateStorageAccount: (id, updates) => set((state) => ({
        config: {
          ...state.config,
          storageAccounts: (state.config.storageAccounts || []).map(
            (account) => account.id === id ? { ...account, ...updates } : account
          )
        }
      })),
      removeStorageAccount: (id) => set((state) => ({
        config: {
          ...state.config,
          storageAccounts: (state.config.storageAccounts || []).filter((account) => account.id !== id)
        }
      })),
      addChatAccount: (newAccount) => set((state) => {
        const accountWithId = {
          ...newAccount,
          id: `chat-${Date.now()}`
        };
        return {
          config: {
            ...state.config,
            chatAccounts: [...state.config.chatAccounts || [], accountWithId]
          }
        };
      }),
      updateChatAccount: (id, updates) => set((state) => ({
        config: {
          ...state.config,
          chatAccounts: (state.config.chatAccounts || []).map(
            (account) => account.id === id ? { ...account, ...updates } : account
          )
        }
      })),
      removeChatAccount: (id) => set((state) => ({
        config: {
          ...state.config,
          chatAccounts: (state.config.chatAccounts || []).filter((account) => account.id !== id)
        }
      })),
      addAiAccount: (newAccount) => set((state) => {
        const accountWithId = {
          ...newAccount,
          id: `ai-${Date.now()}`
        };
        return {
          config: {
            ...state.config,
            aiAccounts: [...state.config.aiAccounts || [], accountWithId]
          }
        };
      }),
      updateAiAccount: (id, updates) => set((state) => ({
        config: {
          ...state.config,
          aiAccounts: (state.config.aiAccounts || []).map(
            (account) => account.id === id ? { ...account, ...updates } : account
          )
        }
      })),
      removeAiAccount: (id) => set((state) => ({
        config: {
          ...state.config,
          aiAccounts: (state.config.aiAccounts || []).filter((account) => account.id !== id)
        }
      })),
      addEmailFileAccount: (newAccount) => set((state) => {
        const accountWithId = {
          ...newAccount,
          id: `emailfile-${Date.now()}`
        };
        return {
          config: {
            ...state.config,
            emailFileAccounts: [...state.config.emailFileAccounts || [], accountWithId]
          }
        };
      }),
      updateEmailFileAccount: (id, updates) => set((state) => ({
        config: {
          ...state.config,
          emailFileAccounts: (state.config.emailFileAccounts || []).map(
            (account) => account.id === id ? { ...account, ...updates } : account
          )
        }
      })),
      removeEmailFileAccount: (id) => set((state) => ({
        config: {
          ...state.config,
          emailFileAccounts: (state.config.emailFileAccounts || []).filter((account) => account.id !== id)
        }
      })),
      addAuthProvider: (newProvider) => set((state) => {
        const providerWithId = {
          ...newProvider,
          id: `auth-${Date.now()}`
        };
        return {
          config: {
            ...state.config,
            authProviders: [...state.config.authProviders || [], providerWithId]
          }
        };
      }),
      updateAuthProvider: (id, updates) => set((state) => ({
        config: {
          ...state.config,
          authProviders: (state.config.authProviders || []).map(
            (provider) => provider.id === id ? { ...provider, ...updates } : provider
          )
        }
      })),
      removeAuthProvider: (id) => set((state) => ({
        config: {
          ...state.config,
          authProviders: (state.config.authProviders || []).filter((provider) => provider.id !== id)
        }
      })),
      updateTheme: (themeUpdates) => set((state) => ({
        config: {
          ...state.config,
          theme: {
            ...state.config.theme,
            ...themeUpdates
          }
        }
      })),
      updateStorage: (storageUpdates) => set((state) => ({
        config: {
          ...state.config,
          storage: {
            ...state.config.storage || DEFAULT_STORAGE_CONFIG,
            ...storageUpdates
          }
        }
      })),
      resetStorage: () => set((state) => ({
        config: {
          ...state.config,
          storage: DEFAULT_STORAGE_CONFIG
        }
      })),
      resetConfig: () => set({
        config: DEFAULT_CONFIG
      })
    }),
    {
      name: "email-settings-workspace"
    }
  )
);

// src/features/email-settings/components/profile-tab.tsx
var import_lucide_react67 = require("lucide-react");
var import_jsx_runtime129 = require("react/jsx-runtime");
function ProfileTab() {
  const { config, updateProfile } = useEmailSettingsStore();
  const { name, bio, avatarUrl } = config.profile;
  const handleNameChange = (e) => {
    updateProfile({ name: e.target.value });
  };
  const handleBioChange = (e) => {
    updateProfile({ bio: e.target.value });
  };
  const handleAvatarChange = (e) => {
    updateProfile({ avatarUrl: e.target.value });
  };
  const getInitials = (fullName) => {
    return fullName.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase() || "?";
  };
  return /* @__PURE__ */ (0, import_jsx_runtime129.jsxs)(Card, { className: "border-muted bg-card/60 backdrop-blur-md", children: [
    /* @__PURE__ */ (0, import_jsx_runtime129.jsxs)(CardHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime129.jsxs)(CardTitle, { className: "text-xl flex items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime129.jsx)(import_lucide_react67.Sparkles, { className: "h-5 w-5 text-indigo-500" }),
        "Profile Customization"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime129.jsx)(CardDescription, { children: "Personalize your email sender profile heading, avatar picture, and bio description." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime129.jsxs)(CardContent, { className: "space-y-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime129.jsxs)("div", { className: "flex items-center gap-6 p-4 rounded-xl border border-dashed border-muted bg-muted/30", children: [
        /* @__PURE__ */ (0, import_jsx_runtime129.jsxs)(Avatar, { className: "h-20 w-20 border-2 border-primary/20 shadow-md", children: [
          /* @__PURE__ */ (0, import_jsx_runtime129.jsx)(AvatarImage, { src: avatarUrl, alt: name }),
          /* @__PURE__ */ (0, import_jsx_runtime129.jsx)(AvatarFallback, { className: "bg-gradient-to-tr from-indigo-500 to-fuchsia-500 text-white text-xl font-bold", children: getInitials(name) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime129.jsxs)("div", { className: "flex-1 space-y-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime129.jsx)("h4", { className: "font-semibold text-lg", children: name || "Your Name" }),
          /* @__PURE__ */ (0, import_jsx_runtime129.jsx)("p", { className: "text-xs text-muted-foreground line-clamp-2 max-w-[320px]", children: bio || "Write a short bio description..." })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime129.jsxs)("div", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime129.jsxs)("div", { className: "space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime129.jsx)(Label, { htmlFor: "avatar-url", className: "font-semibold", children: "Avatar Image URL" }),
          /* @__PURE__ */ (0, import_jsx_runtime129.jsx)(
            Input,
            {
              id: "avatar-url",
              placeholder: "e.g. https://images.unsplash.com/photo-1534528741775-53994a69daeb",
              value: avatarUrl || "",
              onChange: handleAvatarChange,
              className: "bg-background/80"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime129.jsx)("p", { className: "text-xs text-muted-foreground", children: "Provide a public image link or leave blank to display your display initials." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime129.jsxs)("div", { className: "space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime129.jsx)(Label, { htmlFor: "profile-name", className: "font-semibold", children: "Display Name" }),
          /* @__PURE__ */ (0, import_jsx_runtime129.jsx)(
            Input,
            {
              id: "profile-name",
              placeholder: "e.g. Jane Doe",
              value: name,
              onChange: handleNameChange,
              maxLength: 40,
              className: "bg-background/80"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime129.jsxs)("div", { className: "space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime129.jsx)(Label, { htmlFor: "profile-bio", className: "font-semibold", children: "Bio" }),
          /* @__PURE__ */ (0, import_jsx_runtime129.jsx)(
            Textarea,
            {
              id: "profile-bio",
              placeholder: "Tell the world about yourself...",
              value: bio,
              onChange: handleBioChange,
              maxLength: 160,
              rows: 4,
              className: "bg-background/80 resize-none"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime129.jsxs)("div", { className: "text-right text-xs text-muted-foreground", children: [
            bio.length,
            "/160 characters"
          ] })
        ] })
      ] })
    ] })
  ] });
}

// src/features/email-settings/components/files-tab.tsx
var import_react27 = require("react");
var import_lucide_react68 = require("lucide-react");
var import_jsx_runtime130 = require("react/jsx-runtime");
function FilesTab() {
  const { config, addStorageAccount, updateStorageAccount, removeStorageAccount } = useEmailSettingsStore();
  const storageAccounts = config.storageAccounts || [];
  const [editingAccountId, setEditingAccountId] = (0, import_react27.useState)(null);
  const [editFormData, setEditFormData] = (0, import_react27.useState)(null);
  const [showKey, setShowKey] = (0, import_react27.useState)(false);
  const openAddModal = () => {
    setShowKey(false);
    setEditingAccountId("new");
    setEditFormData({
      name: "",
      supabaseUrl: "",
      supabaseAnonKey: "",
      bucketName: "chat-files",
      defaultFolder: "Chat",
      isEnabled: true
    });
  };
  const openEditModal = (account) => {
    setShowKey(false);
    setEditingAccountId(account.id);
    setEditFormData({ ...account });
  };
  const closeEditModal = () => {
    setEditingAccountId(null);
    setEditFormData(null);
  };
  const saveEdit = () => {
    if (editingAccountId && editFormData) {
      const sanitizedData = {
        ...editFormData,
        supabaseUrl: editFormData.supabaseUrl?.trim().replace(/\/rest\/v1\/?$/i, "").replace(/\/auth\/v1\/?$/i, "").replace(/\/storage\/v1\/?$/i, "").replace(/\/+$/, ""),
        supabaseAnonKey: editFormData.supabaseAnonKey?.trim(),
        bucketName: editFormData.bucketName?.trim() || "chat-files"
      };
      if (editingAccountId === "new") {
        addStorageAccount(sanitizedData);
      } else {
        updateStorageAccount(editingAccountId, sanitizedData);
      }
      closeEditModal();
    }
  };
  const handleEditFieldChange = (field, value) => {
    setEditFormData((prev) => ({ ...prev, [field]: value }));
  };
  const formatDisplayUrl = (url) => {
    if (!url) return "Custom Supabase Storage";
    try {
      const parsed = new URL(url.startsWith("http") ? url : `https://${url}`);
      return parsed.hostname;
    } catch {
      return url.length > 28 ? `${url.substring(0, 24)}...` : url;
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime130.jsxs)(Card, { className: "border-muted bg-card/60 backdrop-blur-md", children: [
    /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 p-4 pb-2", children: /* @__PURE__ */ (0, import_jsx_runtime130.jsxs)("div", { className: "space-y-1", children: [
      /* @__PURE__ */ (0, import_jsx_runtime130.jsxs)(CardTitle, { className: "text-xl flex items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(import_lucide_react68.Database, { className: "h-5 w-5 text-indigo-500" }),
        "Supabase Credentials Manager"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(CardDescription, { className: "text-xs sm:text-sm", children: "Add edit and delete files Settings to manage Apps integration with Files Storage" })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(CardContent, { className: "p-4 pt-2 space-y-4", children: storageAccounts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime130.jsxs)("div", { className: "text-center py-10 border-2 border-dashed border-muted rounded-xl bg-muted/10", children: [
      /* @__PURE__ */ (0, import_jsx_runtime130.jsx)("p", { className: "text-muted-foreground mb-4 text-sm", children: "No Supabase credentials added yet." }),
      /* @__PURE__ */ (0, import_jsx_runtime130.jsxs)(Button, { onClick: openAddModal, variant: "outline", className: "gap-1 border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/10 text-xs", children: [
        /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(import_lucide_react68.Plus, { className: "h-4 w-4" }),
        " Add your first Supabase credential"
      ] })
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime130.jsxs)(import_jsx_runtime130.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime130.jsx)("div", { className: "space-y-3", children: storageAccounts.map((account) => /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(
        "div",
        {
          className: `border rounded-xl bg-background/50 overflow-hidden transition-all duration-200 shadow-sm ${account.isEnabled ? "border-muted" : "border-muted-foreground/20 opacity-60"}`,
          children: /* @__PURE__ */ (0, import_jsx_runtime130.jsxs)("div", { className: "flex items-center justify-between p-3 gap-2 bg-muted/10", children: [
            /* @__PURE__ */ (0, import_jsx_runtime130.jsxs)("div", { className: "flex items-center gap-3 min-w-0 flex-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime130.jsx)("div", { className: "h-8 w-8 flex items-center justify-center shrink-0 rounded-lg bg-indigo-500/10", children: /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(import_lucide_react68.Database, { className: "h-4.5 w-4.5 text-indigo-450" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime130.jsxs)("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ (0, import_jsx_runtime130.jsx)("p", { className: "font-semibold text-sm truncate", children: account.name || formatDisplayUrl(account.supabaseUrl) }),
                /* @__PURE__ */ (0, import_jsx_runtime130.jsxs)("p", { className: "text-xs text-muted-foreground truncate max-w-[320px]", children: [
                  "Bucket \u2022 ",
                  account.bucketName || "chat-files",
                  " \xA0\u2022\xA0 ",
                  formatDisplayUrl(account.supabaseUrl)
                ] })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime130.jsxs)("div", { className: "flex items-center gap-1 shrink-0", children: [
              /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(
                Switch,
                {
                  checked: account.isEnabled,
                  onCheckedChange: (checked) => updateStorageAccount(account.id, { isEnabled: checked }),
                  title: account.isEnabled ? "Disable Credential" : "Enable Credential",
                  className: "scale-90"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(
                Button,
                {
                  variant: "ghost",
                  size: "icon",
                  className: "h-7 w-7 text-blue-500 hover:text-blue-600 hover:bg-blue-500/10 shrink-0",
                  onClick: () => openEditModal(account),
                  title: "Edit Credential",
                  children: /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(import_lucide_react68.Edit, { className: "h-4 w-4" })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(
                Button,
                {
                  variant: "ghost",
                  size: "icon",
                  className: "h-7 w-7 text-red-500 hover:text-red-600 hover:bg-red-500/10 shrink-0",
                  onClick: () => removeStorageAccount(account.id),
                  title: "Delete Credential",
                  children: /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(import_lucide_react68.Trash2, { className: "h-4 w-4" })
                }
              )
            ] })
          ] })
        },
        account.id
      )) }),
      /* @__PURE__ */ (0, import_jsx_runtime130.jsx)("div", { className: "pt-1", children: /* @__PURE__ */ (0, import_jsx_runtime130.jsxs)(
        Button,
        {
          onClick: openAddModal,
          size: "sm",
          className: "w-full gap-1 bg-indigo-600 hover:bg-indigo-700 text-white",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(import_lucide_react68.Plus, { className: "h-4 w-4" }),
            "Add Your Supabase Credential"
          ]
        }
      ) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(Dialog, { open: !!editingAccountId, onOpenChange: (open) => !open && closeEditModal(), children: /* @__PURE__ */ (0, import_jsx_runtime130.jsxs)(DialogContent, { className: "sm:max-w-[600px] max-h-[90vh] overflow-y-auto", children: [
      /* @__PURE__ */ (0, import_jsx_runtime130.jsxs)(DialogHeader, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime130.jsxs)(DialogTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(import_lucide_react68.Database, { className: "h-5 w-5 text-indigo-500" }),
          editingAccountId === "new" ? "Add Supabase Credential" : "Edit Supabase Credential"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(DialogDescription, { children: "Input custom Supabase credentials and storage bucket properties." })
      ] }),
      editFormData && /* @__PURE__ */ (0, import_jsx_runtime130.jsxs)("div", { className: "space-y-5 py-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime130.jsxs)("div", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime130.jsxs)("h3", { className: "text-sm font-semibold flex items-center gap-2 text-foreground", children: [
            /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(import_lucide_react68.Lock, { className: "w-4 h-4 text-indigo-400" }),
            "Account Credentials"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime130.jsxs)("div", { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(Label, { className: "text-xs font-semibold", children: "Connection Name (Optional)" }),
            /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(
              Input,
              {
                placeholder: "e.g. My Storage Workspace",
                value: editFormData.name || "",
                onChange: (e) => handleEditFieldChange("name", e.target.value),
                className: "bg-background/80 h-9 text-sm"
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime130.jsxs)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime130.jsxs)("div", { className: "space-y-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(Label, { className: "text-xs font-semibold", children: "Supabase Project URL *" }),
              /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(
                Input,
                {
                  type: "url",
                  placeholder: "https://xyz.supabase.co",
                  value: editFormData.supabaseUrl || "",
                  onChange: (e) => handleEditFieldChange("supabaseUrl", e.target.value),
                  className: "bg-background/80 h-9 text-sm font-mono text-xs"
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime130.jsxs)("div", { className: "space-y-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime130.jsx)("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(Label, { className: "text-xs font-semibold", children: "Publishable / Anon Key *" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime130.jsxs)("div", { className: "relative", children: [
                /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(
                  Input,
                  {
                    type: showKey ? "text" : "password",
                    placeholder: "sb_publishable_... or eyJhbGciOi...",
                    value: editFormData.supabaseAnonKey || "",
                    onChange: (e) => handleEditFieldChange("supabaseAnonKey", e.target.value),
                    className: "bg-background/80 h-9 text-sm font-mono text-xs pr-9"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(
                  "button",
                  {
                    type: "button",
                    onClick: () => setShowKey(!showKey),
                    className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
                    children: showKey ? /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(import_lucide_react68.EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(import_lucide_react68.Eye, { className: "h-4 w-4" })
                  }
                )
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime130.jsxs)("div", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime130.jsxs)("h3", { className: "text-sm font-semibold flex items-center gap-2 text-foreground", children: [
            /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(import_lucide_react68.Server, { className: "w-4 h-4 text-indigo-400" }),
            "Storage Settings"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime130.jsxs)("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime130.jsxs)("div", { className: "space-y-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(Label, { className: "text-xs font-semibold", children: "Bucket Name *" }),
              /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(
                Input,
                {
                  placeholder: "chat-files",
                  value: editFormData.bucketName || "",
                  onChange: (e) => handleEditFieldChange("bucketName", e.target.value),
                  className: "bg-background/80 h-9 text-sm font-mono text-xs"
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime130.jsxs)("div", { className: "space-y-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(Label, { className: "text-xs font-semibold", children: "Default Folder Path" }),
              /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(
                Input,
                {
                  placeholder: "Chat",
                  value: editFormData.defaultFolder || "",
                  onChange: (e) => handleEditFieldChange("defaultFolder", e.target.value),
                  className: "bg-background/80 h-9 text-sm font-mono text-xs"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime130.jsxs)("div", { className: "flex justify-end gap-2 pt-4 border-t", children: [
          /* @__PURE__ */ (0, import_jsx_runtime130.jsxs)(
            Button,
            {
              variant: "outline",
              onClick: closeEditModal,
              className: "gap-1",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(import_lucide_react68.X, { className: "h-4 w-4" }),
                "Cancel"
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime130.jsxs)(
            Button,
            {
              onClick: saveEdit,
              disabled: !editFormData.supabaseUrl || !editFormData.supabaseAnonKey,
              className: "gap-1 bg-blue-600 hover:bg-blue-700 text-white",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime130.jsx)(import_lucide_react68.Save, { className: "h-4 w-4" }),
                editingAccountId === "new" ? "Add Credential" : "Save Changes"
              ]
            }
          )
        ] })
      ] })
    ] }) })
  ] });
}

// src/features/email-settings/components/chat-tab.tsx
var import_react28 = require("react");
var import_lucide_react69 = require("lucide-react");
var import_jsx_runtime131 = require("react/jsx-runtime");
function ChatTab() {
  const { config, addChatAccount, updateChatAccount, removeChatAccount } = useEmailSettingsStore();
  const chatAccounts = config.chatAccounts || [];
  const [editingAccountId, setEditingAccountId] = (0, import_react28.useState)(null);
  const [editFormData, setEditFormData] = (0, import_react28.useState)(null);
  const [showKey, setShowKey] = (0, import_react28.useState)(false);
  const openAddModal = () => {
    setShowKey(false);
    setEditingAccountId("new");
    setEditFormData({
      name: "",
      supabaseUrl: "",
      supabaseAnonKey: "",
      isEnabled: true
    });
  };
  const openEditModal = (account) => {
    setShowKey(false);
    setEditingAccountId(account.id);
    setEditFormData({ ...account });
  };
  const closeEditModal = () => {
    setEditingAccountId(null);
    setEditFormData(null);
  };
  const saveEdit = () => {
    if (editingAccountId && editFormData) {
      const sanitizedData = {
        ...editFormData,
        name: editFormData.name?.trim() || "",
        supabaseUrl: editFormData.supabaseUrl?.trim().replace(/\/rest\/v1\/?$/i, "").replace(/\/auth\/v1\/?$/i, "").replace(/\/storage\/v1\/?$/i, "").replace(/\/+$/, ""),
        supabaseAnonKey: editFormData.supabaseAnonKey?.trim() || "",
        isEnabled: editFormData.isEnabled ?? true
      };
      if (editingAccountId === "new") {
        addChatAccount(sanitizedData);
      } else {
        updateChatAccount(editingAccountId, sanitizedData);
      }
      closeEditModal();
    }
  };
  const handleEditFieldChange = (field, value) => {
    setEditFormData((prev) => ({ ...prev, [field]: value }));
  };
  const formatDisplayUrl = (url) => {
    if (!url) return "Custom Supabase Project";
    try {
      const parsed = new URL(url.startsWith("http") ? url : `https://${url}`);
      return parsed.hostname;
    } catch {
      return url.length > 28 ? `${url.substring(0, 24)}...` : url;
    }
  };
  const maskApiKey = (key) => {
    if (!key) return "No API Key";
    if (key.length <= 10) return "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022";
    return `${key.slice(0, 7)}...${key.slice(-4)}`;
  };
  return /* @__PURE__ */ (0, import_jsx_runtime131.jsxs)(Card, { className: "border-muted bg-card/60 backdrop-blur-md", children: [
    /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 p-4 pb-2", children: /* @__PURE__ */ (0, import_jsx_runtime131.jsxs)("div", { className: "space-y-1", children: [
      /* @__PURE__ */ (0, import_jsx_runtime131.jsxs)(CardTitle, { className: "text-xl flex items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(import_lucide_react69.MessageSquare, { className: "h-5 w-5 text-emerald-500" }),
        "Chat Credentials Manager"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(CardDescription, { className: "text-xs sm:text-sm", children: "Add edit and delete Supabase Settings to connect your custom database with real-time Chat" })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(CardContent, { className: "p-4 pt-2 space-y-4", children: chatAccounts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime131.jsxs)("div", { className: "text-center py-10 border-2 border-dashed border-muted rounded-xl bg-muted/10", children: [
      /* @__PURE__ */ (0, import_jsx_runtime131.jsx)("p", { className: "text-muted-foreground mb-4 text-sm", children: "No Chat Supabase credentials added yet." }),
      /* @__PURE__ */ (0, import_jsx_runtime131.jsxs)(
        Button,
        {
          onClick: openAddModal,
          variant: "outline",
          className: "gap-1 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 text-xs cursor-pointer",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(import_lucide_react69.Plus, { className: "h-4 w-4" }),
            " Add your first Chat Supabase credential"
          ]
        }
      )
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime131.jsxs)(import_jsx_runtime131.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime131.jsx)("div", { className: "space-y-3", children: chatAccounts.map((account) => /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(
        "div",
        {
          className: `border rounded-xl bg-background/50 overflow-hidden transition-all duration-200 shadow-sm ${account.isEnabled ? "border-muted" : "border-muted-foreground/20 opacity-60"}`,
          children: /* @__PURE__ */ (0, import_jsx_runtime131.jsxs)("div", { className: "flex items-center justify-between p-3 gap-2 bg-muted/10", children: [
            /* @__PURE__ */ (0, import_jsx_runtime131.jsxs)("div", { className: "flex items-center gap-3 min-w-0 flex-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime131.jsx)("div", { className: "h-8 w-8 flex items-center justify-center shrink-0 rounded-lg bg-emerald-500/10", children: /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(import_lucide_react69.MessageSquare, { className: "h-4.5 w-4.5 text-emerald-400" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime131.jsxs)("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ (0, import_jsx_runtime131.jsx)("p", { className: "font-semibold text-sm truncate", children: account.name || formatDisplayUrl(account.supabaseUrl) }),
                /* @__PURE__ */ (0, import_jsx_runtime131.jsxs)("p", { className: "text-xs text-muted-foreground truncate max-w-[320px]", children: [
                  "URL \u2022 ",
                  formatDisplayUrl(account.supabaseUrl),
                  " \xA0\u2022\xA0 Key \u2022 ",
                  maskApiKey(account.supabaseAnonKey)
                ] })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime131.jsxs)("div", { className: "flex items-center gap-1 shrink-0", children: [
              /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(
                Switch,
                {
                  checked: account.isEnabled,
                  onCheckedChange: (checked) => updateChatAccount(account.id, { isEnabled: checked }),
                  title: account.isEnabled ? "Disable Credential" : "Enable Credential",
                  className: "scale-90"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(
                Button,
                {
                  variant: "ghost",
                  size: "icon",
                  className: "h-7 w-7 text-blue-500 hover:text-blue-600 hover:bg-blue-500/10 shrink-0 cursor-pointer",
                  onClick: () => openEditModal(account),
                  title: "Edit Credential",
                  children: /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(import_lucide_react69.Edit, { className: "h-4 w-4" })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(
                Button,
                {
                  variant: "ghost",
                  size: "icon",
                  className: "h-7 w-7 text-red-500 hover:text-red-600 hover:bg-red-500/10 shrink-0 cursor-pointer",
                  onClick: () => removeChatAccount(account.id),
                  title: "Delete Credential",
                  children: /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(import_lucide_react69.Trash2, { className: "h-4 w-4" })
                }
              )
            ] })
          ] })
        },
        account.id
      )) }),
      /* @__PURE__ */ (0, import_jsx_runtime131.jsx)("div", { className: "pt-1", children: /* @__PURE__ */ (0, import_jsx_runtime131.jsxs)(
        Button,
        {
          onClick: openAddModal,
          size: "sm",
          className: "w-full gap-1 bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(import_lucide_react69.Plus, { className: "h-4 w-4" }),
            "Add Your Chat Credential"
          ]
        }
      ) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(Dialog, { open: !!editingAccountId, onOpenChange: (open) => !open && closeEditModal(), children: /* @__PURE__ */ (0, import_jsx_runtime131.jsxs)(DialogContent, { className: "sm:max-w-[600px] max-h-[90vh] overflow-y-auto", children: [
      /* @__PURE__ */ (0, import_jsx_runtime131.jsxs)(DialogHeader, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime131.jsxs)(DialogTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(import_lucide_react69.MessageSquare, { className: "h-5 w-5 text-emerald-500" }),
          editingAccountId === "new" ? "Add Chat Supabase Credential" : "Edit Chat Supabase Credential"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(DialogDescription, { children: "Configure custom Supabase project credentials for real-time chat, contacts, and messaging." })
      ] }),
      editFormData && /* @__PURE__ */ (0, import_jsx_runtime131.jsxs)("div", { className: "space-y-5 py-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime131.jsxs)("div", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime131.jsxs)("h3", { className: "text-sm font-semibold flex items-center gap-2 text-foreground", children: [
            /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(import_lucide_react69.Lock, { className: "w-4 h-4 text-emerald-400" }),
            "Account Credentials"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime131.jsxs)("div", { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(Label, { className: "text-xs font-semibold", children: "Connection Name (Optional)" }),
            /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(
              Input,
              {
                placeholder: "e.g. My Production Chat DB",
                value: editFormData.name || "",
                onChange: (e) => handleEditFieldChange("name", e.target.value),
                className: "bg-background/80 h-9 text-sm"
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime131.jsxs)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime131.jsxs)("div", { className: "space-y-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime131.jsxs)(Label, { className: "text-xs font-semibold flex items-center gap-1", children: [
                /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(import_lucide_react69.Server, { className: "h-3.5 w-3.5 text-muted-foreground" }),
                "Supabase Project URL *"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(
                Input,
                {
                  placeholder: "https://xyz.supabase.co",
                  value: editFormData.supabaseUrl || "",
                  onChange: (e) => handleEditFieldChange("supabaseUrl", e.target.value),
                  className: "bg-background/80 h-9 text-sm font-mono text-xs"
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime131.jsxs)("div", { className: "space-y-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime131.jsxs)(Label, { className: "text-xs font-semibold flex items-center gap-1", children: [
                /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(import_lucide_react69.Lock, { className: "h-3.5 w-3.5 text-muted-foreground" }),
                "Supabase Anon / Publishable Key *"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime131.jsxs)("div", { className: "relative", children: [
                /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(
                  Input,
                  {
                    type: showKey ? "text" : "password",
                    placeholder: "sb_publishable_... or eyJhbGciOi...",
                    value: editFormData.supabaseAnonKey || "",
                    onChange: (e) => handleEditFieldChange("supabaseAnonKey", e.target.value),
                    className: "bg-background/80 h-9 text-sm font-mono text-xs pr-9"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(
                  "button",
                  {
                    type: "button",
                    onClick: () => setShowKey(!showKey),
                    className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground cursor-pointer",
                    children: showKey ? /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(import_lucide_react69.EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(import_lucide_react69.Eye, { className: "h-4 w-4" })
                  }
                )
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime131.jsxs)("div", { className: "flex justify-end gap-2 pt-4 border-t", children: [
          /* @__PURE__ */ (0, import_jsx_runtime131.jsxs)(
            Button,
            {
              variant: "outline",
              onClick: closeEditModal,
              className: "gap-1 cursor-pointer",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(import_lucide_react69.X, { className: "h-4 w-4" }),
                "Cancel"
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime131.jsxs)(
            Button,
            {
              onClick: saveEdit,
              disabled: !editFormData.supabaseUrl?.trim() || !editFormData.supabaseAnonKey?.trim(),
              className: "gap-1 bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime131.jsx)(import_lucide_react69.Save, { className: "h-4 w-4" }),
                editingAccountId === "new" ? "Add Credential" : "Save Changes"
              ]
            }
          )
        ] })
      ] })
    ] }) })
  ] });
}

// src/features/email-settings/components/ai-tab.tsx
var import_react29 = require("react");
var import_lucide_react70 = require("lucide-react");
var import_jsx_runtime132 = require("react/jsx-runtime");
var AI_MODELS = [
  { id: "google/gemini-2.5-flash", name: "Gemini 2.5 Flash" },
  { id: "openai/gpt-4o", name: "GPT-4o" },
  { id: "anthropic/claude-3.5-sonnet", name: "Claude 3.5 Sonnet" },
  { id: "deepseek/deepseek-chat", name: "DeepSeek Chat" },
  { id: "meta-llama/llama-3.3-70b-instruct", name: "Llama 3.3 70B" }
];
function AiTab() {
  const { config, addAiAccount, updateAiAccount, removeAiAccount } = useEmailSettingsStore();
  const aiAccounts = config.aiAccounts || [];
  const [editingAccountId, setEditingAccountId] = (0, import_react29.useState)(null);
  const [editFormData, setEditFormData] = (0, import_react29.useState)(null);
  const [showKey, setShowKey] = (0, import_react29.useState)(false);
  const openAddModal = () => {
    setShowKey(false);
    setEditingAccountId("new");
    setEditFormData({
      name: "",
      model: "google/gemini-2.5-flash",
      apiKey: "",
      isEnabled: true
    });
  };
  const openEditModal = (account) => {
    setShowKey(false);
    setEditingAccountId(account.id);
    setEditFormData({ ...account });
  };
  const closeEditModal = () => {
    setEditingAccountId(null);
    setEditFormData(null);
  };
  const saveEdit = () => {
    if (editingAccountId && editFormData) {
      const sanitizedData = {
        ...editFormData,
        name: editFormData.name?.trim() || "",
        model: editFormData.model?.trim() || "google/gemini-2.5-flash",
        apiKey: editFormData.apiKey?.trim() || "",
        isEnabled: editFormData.isEnabled ?? true
      };
      if (editingAccountId === "new") {
        addAiAccount(sanitizedData);
      } else {
        updateAiAccount(editingAccountId, sanitizedData);
      }
      closeEditModal();
    }
  };
  const handleEditFieldChange = (field, value) => {
    setEditFormData((prev) => ({ ...prev, [field]: value }));
  };
  const getModelDisplayName = (modelId) => {
    const found = AI_MODELS.find((m) => m.id === modelId);
    return found ? found.name : modelId;
  };
  const maskApiKey = (key) => {
    if (!key) return "No API Key";
    if (key.length <= 10) return "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022";
    return `${key.slice(0, 7)}...${key.slice(-4)}`;
  };
  return /* @__PURE__ */ (0, import_jsx_runtime132.jsxs)(Card, { className: "border-muted bg-card/60 backdrop-blur-md", children: [
    /* @__PURE__ */ (0, import_jsx_runtime132.jsx)(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 p-4 pb-2", children: /* @__PURE__ */ (0, import_jsx_runtime132.jsxs)("div", { className: "space-y-1", children: [
      /* @__PURE__ */ (0, import_jsx_runtime132.jsxs)(CardTitle, { className: "text-xl flex items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime132.jsx)(import_lucide_react70.Sparkles, { className: "h-5 w-5 text-purple-500" }),
        "AI API Credentials Manager"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime132.jsx)(CardDescription, { className: "text-xs sm:text-sm", children: "Add edit and delete AI API Settings to manage OpenRouter models integration with AI Chat" })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime132.jsx)(CardContent, { className: "p-4 pt-2 space-y-4", children: aiAccounts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime132.jsxs)("div", { className: "text-center py-10 border-2 border-dashed border-muted rounded-xl bg-muted/10", children: [
      /* @__PURE__ */ (0, import_jsx_runtime132.jsx)("p", { className: "text-muted-foreground mb-4 text-sm", children: "No AI API credentials added yet." }),
      /* @__PURE__ */ (0, import_jsx_runtime132.jsxs)(
        Button,
        {
          onClick: openAddModal,
          variant: "outline",
          className: "gap-1 border-purple-500/30 text-purple-400 hover:bg-purple-500/10 text-xs",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime132.jsx)(import_lucide_react70.Plus, { className: "h-4 w-4" }),
            " Add your first AI API credential"
          ]
        }
      )
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime132.jsxs)(import_jsx_runtime132.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime132.jsx)("div", { className: "space-y-3", children: aiAccounts.map((account) => /* @__PURE__ */ (0, import_jsx_runtime132.jsx)(
        "div",
        {
          className: `border rounded-xl bg-background/50 overflow-hidden transition-all duration-200 shadow-sm ${account.isEnabled ? "border-muted" : "border-muted-foreground/20 opacity-60"}`,
          children: /* @__PURE__ */ (0, import_jsx_runtime132.jsxs)("div", { className: "flex items-center justify-between p-3 gap-2 bg-muted/10", children: [
            /* @__PURE__ */ (0, import_jsx_runtime132.jsxs)("div", { className: "flex items-center gap-3 min-w-0 flex-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime132.jsx)("div", { className: "h-8 w-8 flex items-center justify-center shrink-0 rounded-lg bg-purple-500/10", children: /* @__PURE__ */ (0, import_jsx_runtime132.jsx)(import_lucide_react70.Bot, { className: "h-4.5 w-4.5 text-purple-400" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime132.jsxs)("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ (0, import_jsx_runtime132.jsx)("p", { className: "font-semibold text-sm truncate", children: account.name || getModelDisplayName(account.model) }),
                /* @__PURE__ */ (0, import_jsx_runtime132.jsxs)("p", { className: "text-xs text-muted-foreground truncate max-w-[320px]", children: [
                  "Model \u2022 ",
                  getModelDisplayName(account.model),
                  " \xA0\u2022\xA0 Key \u2022 ",
                  maskApiKey(account.apiKey)
                ] })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime132.jsxs)("div", { className: "flex items-center gap-1 shrink-0", children: [
              /* @__PURE__ */ (0, import_jsx_runtime132.jsx)(
                Switch,
                {
                  checked: account.isEnabled,
                  onCheckedChange: (checked) => updateAiAccount(account.id, { isEnabled: checked }),
                  title: account.isEnabled ? "Disable Credential" : "Enable Credential",
                  className: "scale-90"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime132.jsx)(
                Button,
                {
                  variant: "ghost",
                  size: "icon",
                  className: "h-7 w-7 text-blue-500 hover:text-blue-600 hover:bg-blue-500/10 shrink-0",
                  onClick: () => openEditModal(account),
                  title: "Edit Credential",
                  children: /* @__PURE__ */ (0, import_jsx_runtime132.jsx)(import_lucide_react70.Edit, { className: "h-4 w-4" })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime132.jsx)(
                Button,
                {
                  variant: "ghost",
                  size: "icon",
                  className: "h-7 w-7 text-red-500 hover:text-red-600 hover:bg-red-500/10 shrink-0",
                  onClick: () => removeAiAccount(account.id),
                  title: "Delete Credential",
                  children: /* @__PURE__ */ (0, import_jsx_runtime132.jsx)(import_lucide_react70.Trash2, { className: "h-4 w-4" })
                }
              )
            ] })
          ] })
        },
        account.id
      )) }),
      /* @__PURE__ */ (0, import_jsx_runtime132.jsx)("div", { className: "pt-1", children: /* @__PURE__ */ (0, import_jsx_runtime132.jsxs)(
        Button,
        {
          onClick: openAddModal,
          size: "sm",
          className: "w-full gap-1 bg-purple-600 hover:bg-purple-700 text-white",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime132.jsx)(import_lucide_react70.Plus, { className: "h-4 w-4" }),
            "Add Your AI Credential"
          ]
        }
      ) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime132.jsx)(Dialog, { open: !!editingAccountId, onOpenChange: (open) => !open && closeEditModal(), children: /* @__PURE__ */ (0, import_jsx_runtime132.jsxs)(DialogContent, { className: "sm:max-w-[600px] max-h-[90vh] overflow-y-auto", children: [
      /* @__PURE__ */ (0, import_jsx_runtime132.jsxs)(DialogHeader, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime132.jsxs)(DialogTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime132.jsx)(import_lucide_react70.Sparkles, { className: "h-5 w-5 text-purple-500" }),
          editingAccountId === "new" ? "Add AI API Credential" : "Edit AI API Credential"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime132.jsx)(DialogDescription, { children: "Configure OpenRouter API credentials and default model for AI Chat integration." })
      ] }),
      editFormData && /* @__PURE__ */ (0, import_jsx_runtime132.jsxs)("div", { className: "space-y-5 py-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime132.jsxs)("div", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime132.jsxs)("h3", { className: "text-sm font-semibold flex items-center gap-2 text-foreground", children: [
            /* @__PURE__ */ (0, import_jsx_runtime132.jsx)(import_lucide_react70.Lock, { className: "w-4 h-4 text-purple-400" }),
            "Account Credentials"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime132.jsxs)("div", { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime132.jsx)(Label, { className: "text-xs font-semibold", children: "Connection Name (Optional)" }),
            /* @__PURE__ */ (0, import_jsx_runtime132.jsx)(
              Input,
              {
                placeholder: "e.g. My OpenRouter Workspace",
                value: editFormData.name || "",
                onChange: (e) => handleEditFieldChange("name", e.target.value),
                className: "bg-background/80 h-9 text-sm"
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime132.jsxs)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime132.jsxs)("div", { className: "space-y-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime132.jsx)(Label, { className: "text-xs font-semibold", children: "Select Model *" }),
              /* @__PURE__ */ (0, import_jsx_runtime132.jsxs)(
                Select,
                {
                  value: editFormData.model || "google/gemini-2.5-flash",
                  onValueChange: (val) => handleEditFieldChange("model", val),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime132.jsx)(SelectTrigger, { className: "bg-background/80 h-9 text-xs", children: /* @__PURE__ */ (0, import_jsx_runtime132.jsx)(SelectValue, { placeholder: "Select model" }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime132.jsx)(SelectContent, { children: AI_MODELS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime132.jsx)(SelectItem, { value: m.id, className: "text-xs", children: m.name }, m.id)) })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime132.jsxs)("div", { className: "space-y-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime132.jsx)(Label, { className: "text-xs font-semibold", children: "OpenRouter API Key *" }),
              /* @__PURE__ */ (0, import_jsx_runtime132.jsxs)("div", { className: "relative", children: [
                /* @__PURE__ */ (0, import_jsx_runtime132.jsx)(
                  Input,
                  {
                    type: showKey ? "text" : "password",
                    placeholder: "sk-or-v1-...",
                    value: editFormData.apiKey || "",
                    onChange: (e) => handleEditFieldChange("apiKey", e.target.value),
                    className: "bg-background/80 h-9 text-sm font-mono text-xs pr-9"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime132.jsx)(
                  "button",
                  {
                    type: "button",
                    onClick: () => setShowKey(!showKey),
                    className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground cursor-pointer",
                    children: showKey ? /* @__PURE__ */ (0, import_jsx_runtime132.jsx)(import_lucide_react70.EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime132.jsx)(import_lucide_react70.Eye, { className: "h-4 w-4" })
                  }
                )
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime132.jsxs)("div", { className: "flex justify-end gap-2 pt-4 border-t", children: [
          /* @__PURE__ */ (0, import_jsx_runtime132.jsxs)(
            Button,
            {
              variant: "outline",
              onClick: closeEditModal,
              className: "gap-1 cursor-pointer",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime132.jsx)(import_lucide_react70.X, { className: "h-4 w-4" }),
                "Cancel"
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime132.jsxs)(
            Button,
            {
              onClick: saveEdit,
              disabled: !editFormData.apiKey?.trim(),
              className: "gap-1 bg-purple-600 hover:bg-purple-700 text-white cursor-pointer",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime132.jsx)(import_lucide_react70.Save, { className: "h-4 w-4" }),
                editingAccountId === "new" ? "Add Credential" : "Save Changes"
              ]
            }
          )
        ] })
      ] })
    ] }) })
  ] });
}

// src/features/email-settings/components/accounts-tab.tsx
var import_react30 = require("react");
var import_lucide_react71 = require("lucide-react");
var import_jsx_runtime133 = require("react/jsx-runtime");
var PRESET_SERVERS = {
  gmail: {
    incomingServer: "imap.gmail.com",
    incomingPort: 993,
    outgoingServer: "smtp.gmail.com",
    outgoingPort: 587,
    useSSL: true,
    useTLS: true
  },
  outlook: {
    incomingServer: "outlook.office365.com",
    incomingPort: 993,
    outgoingServer: "smtp-mail.outlook.com",
    outgoingPort: 587,
    useSSL: true,
    useTLS: true
  },
  yahoo: {
    incomingServer: "imap.mail.yahoo.com",
    incomingPort: 993,
    outgoingServer: "smtp.mail.yahoo.com",
    outgoingPort: 465,
    useSSL: true,
    useTLS: false
  }
};
function LinksTab() {
  const { config, addAccount, updateAccount, removeAccount } = useEmailSettingsStore();
  const { accounts } = config;
  const [editingAccountId, setEditingAccountId] = (0, import_react30.useState)(null);
  const [editFormData, setEditFormData] = (0, import_react30.useState)(null);
  const [preset, setPreset] = (0, import_react30.useState)("");
  const handlePresetSelect = (presetName) => {
    setPreset(presetName);
    const presetConfig = PRESET_SERVERS[presetName];
    if (presetConfig) {
      setEditFormData((prev) => ({
        ...prev,
        ...presetConfig
      }));
    }
  };
  const openAddModal = () => {
    setPreset("");
    setEditingAccountId("new");
    setEditFormData({
      email: "",
      password: "",
      protocol: "IMAP",
      incomingServer: "",
      incomingPort: 993,
      outgoingServer: "",
      outgoingPort: 587,
      useSSL: true,
      useTLS: false,
      isEnabled: true
    });
  };
  const openEditModal = (account) => {
    setPreset("");
    setEditingAccountId(account.id);
    setEditFormData({ ...account });
  };
  const closeEditModal = () => {
    setEditingAccountId(null);
    setEditFormData(null);
  };
  const saveEdit = () => {
    if (editingAccountId && editFormData) {
      if (editingAccountId === "new") {
        addAccount(editFormData);
      } else {
        updateAccount(editingAccountId, editFormData);
      }
      closeEditModal();
    }
  };
  const handleEditFieldChange = (field, value) => {
    setEditFormData((prev) => ({ ...prev, [field]: value }));
  };
  return /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)(Card, { className: "border-muted bg-card/60 backdrop-blur-md", children: [
    /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-4", children: /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)("div", { className: "space-y-1", children: [
      /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)(CardTitle, { className: "text-xl flex items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(import_lucide_react71.Mail, { className: "h-5 w-5 text-indigo-500" }),
        "Email Accounts Manager"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(CardDescription, { children: "Add, edit, configure incoming/outgoing servers, and manage authentication for your emails." })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(CardContent, { className: "space-y-4", children: accounts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)("div", { className: "text-center py-12 border-2 border-dashed border-muted rounded-xl bg-muted/10", children: [
      /* @__PURE__ */ (0, import_jsx_runtime133.jsx)("p", { className: "text-muted-foreground mb-4", children: "No email accounts added yet." }),
      /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)(Button, { onClick: openAddModal, variant: "outline", className: "gap-1 border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/10", children: [
        /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(import_lucide_react71.Plus, { className: "h-4 w-4" }),
        " Add your first account"
      ] })
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)(import_jsx_runtime133.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime133.jsx)("div", { className: "space-y-3", children: accounts.map((account) => /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(
        "div",
        {
          className: `border rounded-xl bg-background/50 overflow-hidden transition-all duration-200 shadow-sm ${account.isEnabled ? "border-muted" : "border-muted-foreground/20 opacity-60"}`,
          children: /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)("div", { className: "flex items-center justify-between p-3 gap-2 bg-muted/10", children: [
            /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)("div", { className: "flex items-center gap-3 min-w-0 flex-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime133.jsx)("div", { className: "h-8 w-8 flex items-center justify-center shrink-0 rounded-lg bg-indigo-500/10", children: /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(import_lucide_react71.Mail, { className: "h-4.5 w-4.5 text-indigo-450" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ (0, import_jsx_runtime133.jsx)("p", { className: "font-semibold text-sm truncate", children: account.email || "Untitled Account" }),
                /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)("p", { className: "text-xs text-muted-foreground truncate max-w-[280px]", children: [
                  account.protocol,
                  " \u2022 ",
                  account.incomingServer || "No server configured"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)("div", { className: "flex items-center gap-1 shrink-0", children: [
              /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(
                Switch,
                {
                  checked: account.isEnabled,
                  onCheckedChange: (checked) => updateAccount(account.id, { isEnabled: checked }),
                  title: account.isEnabled ? "Disable Account" : "Enable Account",
                  className: "scale-90"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(
                Button,
                {
                  variant: "ghost",
                  size: "icon",
                  className: "h-7 w-7 text-blue-500 hover:text-blue-600 hover:bg-blue-500/10 shrink-0",
                  onClick: () => openEditModal(account),
                  title: "Edit Account",
                  children: /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(import_lucide_react71.Edit, { className: "h-4 w-4" })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(
                Button,
                {
                  variant: "ghost",
                  size: "icon",
                  className: "h-7 w-7 text-red-500 hover:text-red-600 hover:bg-red-500/10 shrink-0",
                  onClick: () => removeAccount(account.id),
                  title: "Delete Account",
                  children: /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(import_lucide_react71.Trash2, { className: "h-4 w-4" })
                }
              )
            ] })
          ] })
        },
        account.id
      )) }),
      /* @__PURE__ */ (0, import_jsx_runtime133.jsx)("div", { className: "pt-2", children: /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)(
        Button,
        {
          onClick: openAddModal,
          size: "sm",
          className: "w-full gap-1 bg-indigo-600 hover:bg-indigo-700 text-white",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(import_lucide_react71.Plus, { className: "h-4 w-4" }),
            "Add Email Account"
          ]
        }
      ) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(Dialog, { open: !!editingAccountId, onOpenChange: (open) => !open && closeEditModal(), children: /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)(DialogContent, { className: "sm:max-w-[600px] max-h-[90vh] overflow-y-auto", children: [
      /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)(DialogHeader, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)(DialogTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(import_lucide_react71.Mail, { className: "h-5 w-5 text-indigo-500" }),
          editingAccountId === "new" ? "Add Email Account" : "Edit Email Account"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(DialogDescription, { children: "Configure provider presets or input custom email credentials and server properties." })
      ] }),
      editFormData && /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)("div", { className: "space-y-6 py-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)("div", { className: "space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(Label, { className: "text-xs font-semibold", children: "Select Provider Preset (Optional)" }),
          /* @__PURE__ */ (0, import_jsx_runtime133.jsx)("div", { className: "grid grid-cols-3 gap-2", children: Object.keys(PRESET_SERVERS).map((key) => /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(
            Button,
            {
              variant: "outline",
              type: "button",
              onClick: () => handlePresetSelect(key),
              className: cn(
                "h-9 text-xs transition-all",
                preset === key ? "border-indigo-500 bg-indigo-500/10 text-indigo-400 font-semibold" : "hover:bg-muted/50"
              ),
              children: key.charAt(0).toUpperCase() + key.slice(1)
            },
            key
          )) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime133.jsx)("div", { className: "h-px bg-border" }),
        /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)("div", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)("h3", { className: "text-sm font-semibold flex items-center gap-2 text-foreground", children: [
            /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(import_lucide_react71.Lock, { className: "w-4 h-4 text-indigo-400" }),
            "Account Credentials"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)("div", { className: "space-y-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(Label, { className: "text-xs font-semibold", children: "Email Address *" }),
              /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(
                Input,
                {
                  type: "email",
                  placeholder: "your.email@example.com",
                  value: editFormData.email || "",
                  onChange: (e) => handleEditFieldChange("email", e.target.value),
                  className: "bg-background/80 h-9 text-sm"
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)("div", { className: "space-y-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(Label, { className: "text-xs font-semibold", children: "Password / App Password *" }),
              /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(
                Input,
                {
                  type: "password",
                  placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
                  value: editFormData.password || "",
                  onChange: (e) => handleEditFieldChange("password", e.target.value),
                  className: "bg-background/80 h-9 text-sm"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)("div", { className: "space-y-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(Label, { className: "text-xs font-semibold", children: "Email Protocol" }),
          /* @__PURE__ */ (0, import_jsx_runtime133.jsx)("div", { className: "grid grid-cols-2 gap-3", children: ["IMAP", "POP3"].map((proto) => /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)(
            "button",
            {
              type: "button",
              onClick: () => handleEditFieldChange("protocol", proto),
              className: cn(
                "p-3 rounded-lg border-2 text-left transition-all cursor-pointer",
                editFormData.protocol === proto ? "border-indigo-500 bg-indigo-500/5 text-indigo-400" : "border-muted hover:border-muted-foreground/30 hover:bg-muted/10"
              ),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime133.jsx)("div", { className: "font-semibold text-sm", children: proto }),
                /* @__PURE__ */ (0, import_jsx_runtime133.jsx)("div", { className: "text-[10px] text-muted-foreground mt-0.5", children: proto === "IMAP" ? "Sync folders, fast" : "Download and local storage" })
              ]
            },
            proto
          )) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)("div", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)("h3", { className: "text-sm font-semibold flex items-center gap-2 text-foreground", children: [
            /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(import_lucide_react71.Server, { className: "w-4 h-4 text-indigo-400" }),
            "Incoming Server (",
            editFormData.protocol,
            ")"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)("div", { className: "grid grid-cols-3 gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)("div", { className: "col-span-2 space-y-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(Label, { className: "text-xs font-semibold", children: "Server Address *" }),
              /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(
                Input,
                {
                  placeholder: "imap.example.com",
                  value: editFormData.incomingServer || "",
                  onChange: (e) => handleEditFieldChange("incomingServer", e.target.value),
                  className: "bg-background/80 h-9 text-sm"
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)("div", { className: "space-y-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(Label, { className: "text-xs font-semibold", children: "Port *" }),
              /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(
                Input,
                {
                  type: "number",
                  placeholder: "993",
                  value: editFormData.incomingPort || "",
                  onChange: (e) => handleEditFieldChange("incomingPort", parseInt(e.target.value) || 0),
                  className: "bg-background/80 h-9 text-sm"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(
                Switch,
                {
                  checked: editFormData.useSSL,
                  onCheckedChange: (checked) => handleEditFieldChange("useSSL", checked),
                  id: "use-ssl"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(Label, { htmlFor: "use-ssl", className: "text-xs font-medium text-muted-foreground cursor-pointer", children: "Use SSL/TLS" })
            ] }),
            editFormData.protocol === "IMAP" && /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(
                Switch,
                {
                  checked: editFormData.useTLS,
                  onCheckedChange: (checked) => handleEditFieldChange("useTLS", checked),
                  id: "use-tls"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(Label, { htmlFor: "use-tls", className: "text-xs font-medium text-muted-foreground cursor-pointer", children: "Use STARTTLS" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)("div", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)("h3", { className: "text-sm font-semibold flex items-center gap-2 text-foreground", children: [
            /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(import_lucide_react71.Server, { className: "w-4 h-4 text-indigo-400" }),
            "Outgoing Server (SMTP)"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)("div", { className: "grid grid-cols-3 gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)("div", { className: "col-span-2 space-y-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(Label, { className: "text-xs font-semibold", children: "Server Address *" }),
              /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(
                Input,
                {
                  placeholder: "smtp.example.com",
                  value: editFormData.outgoingServer || "",
                  onChange: (e) => handleEditFieldChange("outgoingServer", e.target.value),
                  className: "bg-background/80 h-9 text-sm"
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)("div", { className: "space-y-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(Label, { className: "text-xs font-semibold", children: "Port *" }),
              /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(
                Input,
                {
                  type: "number",
                  placeholder: "587",
                  value: editFormData.outgoingPort || "",
                  onChange: (e) => handleEditFieldChange("outgoingPort", parseInt(e.target.value) || 0),
                  className: "bg-background/80 h-9 text-sm"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)("div", { className: "flex justify-end gap-2 pt-4 border-t", children: [
          /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)(
            Button,
            {
              variant: "outline",
              onClick: closeEditModal,
              className: "gap-1",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(import_lucide_react71.X, { className: "h-4 w-4" }),
                "Cancel"
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime133.jsxs)(
            Button,
            {
              onClick: saveEdit,
              disabled: !editFormData.email,
              className: "gap-1 bg-blue-600 hover:bg-blue-700 text-white",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime133.jsx)(import_lucide_react71.Save, { className: "h-4 w-4" }),
                editingAccountId === "new" ? "Add Account" : "Save Changes"
              ]
            }
          )
        ] })
      ] })
    ] }) })
  ] });
}

// src/features/email-settings/components/email-files-tab.tsx
var import_react31 = require("react");
var import_lucide_react72 = require("lucide-react");
var import_jsx_runtime134 = require("react/jsx-runtime");
function EmailFilesTab() {
  const { config, addEmailFileAccount, updateEmailFileAccount, removeEmailFileAccount } = useEmailSettingsStore();
  const emailFileAccounts = config.emailFileAccounts || [];
  const [editingAccountId, setEditingAccountId] = (0, import_react31.useState)(null);
  const [editFormData, setEditFormData] = (0, import_react31.useState)(null);
  const [showKey, setShowKey] = (0, import_react31.useState)(false);
  const openAddModal = () => {
    setShowKey(false);
    setEditingAccountId("new");
    setEditFormData({
      name: "",
      supabaseUrl: "",
      supabaseAnonKey: "",
      bucketName: "email-attachments",
      defaultFolder: "EmailAttachments",
      isEnabled: true
    });
  };
  const openEditModal = (account) => {
    setShowKey(false);
    setEditingAccountId(account.id);
    setEditFormData({ ...account });
  };
  const closeEditModal = () => {
    setEditingAccountId(null);
    setEditFormData(null);
  };
  const saveEdit = () => {
    if (editingAccountId && editFormData) {
      const sanitizedData = {
        ...editFormData,
        name: editFormData.name?.trim() || "",
        supabaseUrl: editFormData.supabaseUrl?.trim().replace(/\/rest\/v1\/?$/i, "").replace(/\/auth\/v1\/?$/i, "").replace(/\/storage\/v1\/?$/i, "").replace(/\/+$/, ""),
        supabaseAnonKey: editFormData.supabaseAnonKey?.trim() || "",
        bucketName: editFormData.bucketName?.trim() || "email-attachments",
        defaultFolder: editFormData.defaultFolder?.trim() || "EmailAttachments",
        isEnabled: editFormData.isEnabled ?? true
      };
      if (editingAccountId === "new") {
        addEmailFileAccount(sanitizedData);
      } else {
        updateEmailFileAccount(editingAccountId, sanitizedData);
      }
      closeEditModal();
    }
  };
  const handleEditFieldChange = (field, value) => {
    setEditFormData((prev) => ({ ...prev, [field]: value }));
  };
  const formatDisplayUrl = (url) => {
    if (!url) return "Custom Email Storage";
    try {
      const parsed = new URL(url.startsWith("http") ? url : `https://${url}`);
      return parsed.hostname;
    } catch {
      return url.length > 28 ? `${url.substring(0, 24)}...` : url;
    }
  };
  const maskApiKey = (key) => {
    if (!key) return "No Key";
    if (key.length <= 10) return "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022";
    return `${key.slice(0, 7)}...${key.slice(-4)}`;
  };
  return /* @__PURE__ */ (0, import_jsx_runtime134.jsxs)(Card, { className: "border-muted bg-card/60 backdrop-blur-md", children: [
    /* @__PURE__ */ (0, import_jsx_runtime134.jsx)(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 p-4 pb-2", children: /* @__PURE__ */ (0, import_jsx_runtime134.jsxs)("div", { className: "space-y-1", children: [
      /* @__PURE__ */ (0, import_jsx_runtime134.jsxs)(CardTitle, { className: "text-xl flex items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime134.jsx)(import_lucide_react72.FolderArchive, { className: "h-5 w-5 text-purple-500" }),
        "Email Files Storage Manager"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime134.jsx)(CardDescription, { className: "text-xs sm:text-sm", children: "Add, edit and delete storage credentials to store email attachments and files without environment variables" })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime134.jsx)(CardContent, { className: "p-4 pt-2 space-y-4", children: emailFileAccounts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime134.jsxs)("div", { className: "text-center py-10 border-2 border-dashed border-muted rounded-xl bg-muted/10", children: [
      /* @__PURE__ */ (0, import_jsx_runtime134.jsx)("p", { className: "text-muted-foreground mb-4 text-sm", children: "No Email Files storage credentials added yet." }),
      /* @__PURE__ */ (0, import_jsx_runtime134.jsxs)(
        Button,
        {
          onClick: openAddModal,
          variant: "outline",
          className: "gap-1 border-purple-500/30 text-purple-400 hover:bg-purple-500/10 text-xs cursor-pointer",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime134.jsx)(import_lucide_react72.Plus, { className: "h-4 w-4" }),
            " Add your first Email Files credential"
          ]
        }
      )
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime134.jsxs)(import_jsx_runtime134.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime134.jsx)("div", { className: "space-y-3", children: emailFileAccounts.map((account) => /* @__PURE__ */ (0, import_jsx_runtime134.jsx)(
        "div",
        {
          className: `border rounded-xl bg-background/50 overflow-hidden transition-all duration-200 shadow-sm ${account.isEnabled ? "border-muted" : "border-muted-foreground/20 opacity-60"}`,
          children: /* @__PURE__ */ (0, import_jsx_runtime134.jsxs)("div", { className: "flex items-center justify-between p-3 gap-2 bg-muted/10", children: [
            /* @__PURE__ */ (0, import_jsx_runtime134.jsxs)("div", { className: "flex items-center gap-3 min-w-0 flex-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime134.jsx)("div", { className: "h-8 w-8 flex items-center justify-center shrink-0 rounded-lg bg-purple-500/10", children: /* @__PURE__ */ (0, import_jsx_runtime134.jsx)(import_lucide_react72.FolderArchive, { className: "h-4.5 w-4.5 text-purple-400" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime134.jsxs)("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ (0, import_jsx_runtime134.jsx)("p", { className: "font-semibold text-sm truncate", children: account.name || formatDisplayUrl(account.supabaseUrl) }),
                /* @__PURE__ */ (0, import_jsx_runtime134.jsxs)("p", { className: "text-xs text-muted-foreground truncate max-w-[340px]", children: [
                  "Bucket \u2022 ",
                  account.bucketName || "email-attachments",
                  " \xA0\u2022\xA0 Folder \u2022 ",
                  account.defaultFolder || "EmailAttachments",
                  " \xA0\u2022\xA0 Key \u2022 ",
                  maskApiKey(account.supabaseAnonKey)
                ] })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime134.jsxs)("div", { className: "flex items-center gap-1 shrink-0", children: [
              /* @__PURE__ */ (0, import_jsx_runtime134.jsx)(
                Switch,
                {
                  checked: account.isEnabled,
                  onCheckedChange: (checked) => updateEmailFileAccount(account.id, { isEnabled: checked }),
                  title: account.isEnabled ? "Disable Credential" : "Enable Credential",
                  className: "scale-90"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime134.jsx)(
                Button,
                {
                  variant: "ghost",
                  size: "icon",
                  className: "h-7 w-7 text-blue-500 hover:text-blue-600 hover:bg-blue-500/10 shrink-0 cursor-pointer",
                  onClick: () => openEditModal(account),
                  title: "Edit Credential",
                  children: /* @__PURE__ */ (0, import_jsx_runtime134.jsx)(import_lucide_react72.Edit, { className: "h-4 w-4" })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime134.jsx)(
                Button,
                {
                  variant: "ghost",
                  size: "icon",
                  className: "h-7 w-7 text-red-500 hover:text-red-600 hover:bg-red-500/10 shrink-0 cursor-pointer",
                  onClick: () => removeEmailFileAccount(account.id),
                  title: "Delete Credential",
                  children: /* @__PURE__ */ (0, import_jsx_runtime134.jsx)(import_lucide_react72.Trash2, { className: "h-4 w-4" })
                }
              )
            ] })
          ] })
        },
        account.id
      )) }),
      /* @__PURE__ */ (0, import_jsx_runtime134.jsx)("div", { className: "pt-1", children: /* @__PURE__ */ (0, import_jsx_runtime134.jsxs)(
        Button,
        {
          onClick: openAddModal,
          size: "sm",
          className: "w-full gap-1 bg-purple-600 hover:bg-purple-700 text-white cursor-pointer",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime134.jsx)(import_lucide_react72.Plus, { className: "h-4 w-4" }),
            "Add Your Email Files Credential"
          ]
        }
      ) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime134.jsx)(Dialog, { open: !!editingAccountId, onOpenChange: (open) => !open && closeEditModal(), children: /* @__PURE__ */ (0, import_jsx_runtime134.jsxs)(DialogContent, { className: "sm:max-w-[600px] max-h-[90vh] overflow-y-auto", children: [
      /* @__PURE__ */ (0, import_jsx_runtime134.jsxs)(DialogHeader, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime134.jsxs)(DialogTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime134.jsx)(import_lucide_react72.FolderArchive, { className: "h-5 w-5 text-purple-500" }),
          editingAccountId === "new" ? "Add Email Files Credential" : "Edit Email Files Credential"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime134.jsx)(DialogDescription, { children: "Configure Supabase storage credentials for saving email attachments and documents without server environment variables." })
      ] }),
      editFormData && /* @__PURE__ */ (0, import_jsx_runtime134.jsxs)("div", { className: "space-y-5 py-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime134.jsxs)("div", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime134.jsxs)("h3", { className: "text-sm font-semibold flex items-center gap-2 text-foreground", children: [
            /* @__PURE__ */ (0, import_jsx_runtime134.jsx)(import_lucide_react72.Lock, { className: "w-4 h-4 text-purple-400" }),
            "Storage Credentials"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime134.jsxs)("div", { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime134.jsx)(Label, { className: "text-xs font-semibold", children: "Connection Name (Optional)" }),
            /* @__PURE__ */ (0, import_jsx_runtime134.jsx)(
              Input,
              {
                placeholder: "e.g. My Email Attachments Bucket",
                value: editFormData.name || "",
                onChange: (e) => handleEditFieldChange("name", e.target.value),
                className: "bg-background/80 h-9 text-sm"
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime134.jsxs)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime134.jsxs)("div", { className: "space-y-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime134.jsxs)(Label, { className: "text-xs font-semibold flex items-center gap-1", children: [
                /* @__PURE__ */ (0, import_jsx_runtime134.jsx)(import_lucide_react72.Server, { className: "h-3.5 w-3.5 text-muted-foreground" }),
                "Supabase Project URL *"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime134.jsx)(
                Input,
                {
                  placeholder: "https://xyz.supabase.co",
                  value: editFormData.supabaseUrl || "",
                  onChange: (e) => handleEditFieldChange("supabaseUrl", e.target.value),
                  className: "bg-background/80 h-9 text-sm font-mono text-xs"
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime134.jsxs)("div", { className: "space-y-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime134.jsxs)(Label, { className: "text-xs font-semibold flex items-center gap-1", children: [
                /* @__PURE__ */ (0, import_jsx_runtime134.jsx)(import_lucide_react72.Lock, { className: "h-3.5 w-3.5 text-muted-foreground" }),
                "Supabase Anon / Service Key *"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime134.jsxs)("div", { className: "relative", children: [
                /* @__PURE__ */ (0, import_jsx_runtime134.jsx)(
                  Input,
                  {
                    type: showKey ? "text" : "password",
                    placeholder: "sb_publishable_... or eyJhbGciOi...",
                    value: editFormData.supabaseAnonKey || "",
                    onChange: (e) => handleEditFieldChange("supabaseAnonKey", e.target.value),
                    className: "bg-background/80 h-9 text-sm font-mono text-xs pr-9"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime134.jsx)(
                  "button",
                  {
                    type: "button",
                    onClick: () => setShowKey(!showKey),
                    className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground cursor-pointer",
                    children: showKey ? /* @__PURE__ */ (0, import_jsx_runtime134.jsx)(import_lucide_react72.EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime134.jsx)(import_lucide_react72.Eye, { className: "h-4 w-4" })
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime134.jsxs)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime134.jsxs)("div", { className: "space-y-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime134.jsxs)(Label, { className: "text-xs font-semibold flex items-center gap-1", children: [
                /* @__PURE__ */ (0, import_jsx_runtime134.jsx)(import_lucide_react72.FolderArchive, { className: "h-3.5 w-3.5 text-muted-foreground" }),
                "Bucket Name"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime134.jsx)(
                Input,
                {
                  placeholder: "email-attachments",
                  value: editFormData.bucketName || "",
                  onChange: (e) => handleEditFieldChange("bucketName", e.target.value),
                  className: "bg-background/80 h-9 text-sm"
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime134.jsxs)("div", { className: "space-y-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime134.jsxs)(Label, { className: "text-xs font-semibold flex items-center gap-1", children: [
                /* @__PURE__ */ (0, import_jsx_runtime134.jsx)(import_lucide_react72.Folder, { className: "h-3.5 w-3.5 text-muted-foreground" }),
                "Default Folder Path"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime134.jsx)(
                Input,
                {
                  placeholder: "EmailAttachments",
                  value: editFormData.defaultFolder || "",
                  onChange: (e) => handleEditFieldChange("defaultFolder", e.target.value),
                  className: "bg-background/80 h-9 text-sm"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime134.jsxs)("div", { className: "flex justify-end gap-2 pt-4 border-t", children: [
          /* @__PURE__ */ (0, import_jsx_runtime134.jsxs)(
            Button,
            {
              variant: "outline",
              onClick: closeEditModal,
              className: "gap-1 cursor-pointer",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime134.jsx)(import_lucide_react72.X, { className: "h-4 w-4" }),
                "Cancel"
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime134.jsxs)(
            Button,
            {
              onClick: saveEdit,
              disabled: !editFormData.supabaseUrl?.trim() || !editFormData.supabaseAnonKey?.trim(),
              className: "gap-1 bg-purple-600 hover:bg-purple-700 text-white cursor-pointer",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime134.jsx)(import_lucide_react72.Save, { className: "h-4 w-4" }),
                editingAccountId === "new" ? "Add Credential" : "Save Changes"
              ]
            }
          )
        ] })
      ] })
    ] }) })
  ] });
}

// src/features/email-settings/components/auth-tab.tsx
var import_react32 = require("react");
var import_lucide_react73 = require("lucide-react");
var import_jsx_runtime135 = require("react/jsx-runtime");
var PRESET_PROVIDERS = [
  { name: "Google", url: "https://accounts.google.com" },
  { name: "GitHub", url: "https://github.com/login/oauth/authorize" },
  { name: "Discord", url: "https://discord.com/api/oauth2/authorize" },
  { name: "Auth0", url: "https://your-tenant.auth0.com" },
  { name: "Apple", url: "https://appleid.apple.com/auth/authorize" },
  { name: "Microsoft Entra ID", url: "https://login.microsoftonline.com/common" },
  { name: "GitLab", url: "https://gitlab.com/oauth/authorize" },
  { name: "Twitter / X", url: "https://twitter.com/i/oauth2/authorize" },
  { name: "Slack", url: "https://slack.com/oauth/v2/authorize" },
  { name: "Credentials", url: "/api/auth/callback/credentials" },
  { name: "Custom OAuth", url: "" }
];
function AuthTab() {
  const { config, addAuthProvider, updateAuthProvider, removeAuthProvider } = useEmailSettingsStore();
  const authProviders = config.authProviders || [];
  const [editingProviderId, setEditingProviderId] = (0, import_react32.useState)(null);
  const [editFormData, setEditFormData] = (0, import_react32.useState)(null);
  const [showSecret, setShowSecret] = (0, import_react32.useState)(false);
  const [showPassword, setShowPassword] = (0, import_react32.useState)(false);
  const fileInputRef = (0, import_react32.useRef)(null);
  const openAddModal = () => {
    setShowSecret(false);
    setShowPassword(false);
    setEditingProviderId("new");
    setEditFormData({
      name: "Google",
      type: "oauth",
      iconUrl: "",
      providerUrl: "https://accounts.google.com",
      clientId: "",
      clientSecret: "",
      username: "",
      password: "",
      isEnabled: true
    });
  };
  const openEditModal = (provider) => {
    setShowSecret(false);
    setShowPassword(false);
    setEditingProviderId(provider.id);
    setEditFormData({ ...provider });
  };
  const closeEditModal = () => {
    setEditingProviderId(null);
    setEditFormData(null);
  };
  const handlePresetSelect = (presetName) => {
    const preset = PRESET_PROVIDERS.find((p) => p.name === presetName);
    setEditFormData((prev) => ({
      ...prev,
      name: presetName,
      providerUrl: preset?.url || prev?.providerUrl || "",
      type: presetName.toLowerCase() === "credentials" ? "credentials" : "oauth"
    }));
  };
  const handleIconUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("File size exceeds 2MB limit. Please choose a smaller icon.");
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setEditFormData((prev) => ({
            ...prev,
            iconUrl: reader.result
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  };
  const removeIcon = () => {
    setEditFormData((prev) => ({
      ...prev,
      iconUrl: ""
    }));
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  const saveEdit = () => {
    if (editingProviderId && editFormData) {
      const sanitizedData = {
        ...editFormData,
        name: editFormData.name?.trim() || "Custom Provider",
        providerUrl: editFormData.providerUrl?.trim() || "",
        clientId: editFormData.clientId?.trim() || "",
        clientSecret: editFormData.clientSecret?.trim() || "",
        username: editFormData.username?.trim() || "",
        password: editFormData.password?.trim() || "",
        isEnabled: editFormData.isEnabled ?? true
      };
      if (editingProviderId === "new") {
        addAuthProvider(sanitizedData);
      } else {
        updateAuthProvider(editingProviderId, sanitizedData);
      }
      closeEditModal();
    }
  };
  const handleEditFieldChange = (field, value) => {
    setEditFormData((prev) => ({ ...prev, [field]: value }));
  };
  const maskSecret = (secret) => {
    if (!secret) return "No Secret";
    if (secret.length <= 8) return "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022";
    return `${secret.slice(0, 4)}\u2022\u2022\u2022\u2022${secret.slice(-3)}`;
  };
  return /* @__PURE__ */ (0, import_jsx_runtime135.jsxs)(Card, { className: "border-muted bg-card/60 backdrop-blur-md", children: [
    /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 p-4 pb-2", children: /* @__PURE__ */ (0, import_jsx_runtime135.jsxs)("div", { className: "space-y-1", children: [
      /* @__PURE__ */ (0, import_jsx_runtime135.jsxs)(CardTitle, { className: "text-xl flex items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(import_lucide_react73.ShieldCheck, { className: "h-5 w-5 text-sky-500" }),
        "Auth Provider Manager"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(CardDescription, { className: "text-xs sm:text-sm", children: "Configure NextAuth authentication providers (Google, GitHub, Custom OAuth, Credentials) with active/inactive toggles" })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(CardContent, { className: "p-4 pt-2 space-y-4", children: authProviders.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime135.jsxs)("div", { className: "text-center py-10 border-2 border-dashed border-muted rounded-xl bg-muted/10", children: [
      /* @__PURE__ */ (0, import_jsx_runtime135.jsx)("p", { className: "text-muted-foreground mb-4 text-sm", children: "No Auth providers added yet." }),
      /* @__PURE__ */ (0, import_jsx_runtime135.jsxs)(
        Button,
        {
          onClick: openAddModal,
          variant: "outline",
          className: "gap-1 border-sky-500/30 text-sky-400 hover:bg-sky-500/10 text-xs cursor-pointer",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(import_lucide_react73.Plus, { className: "h-4 w-4" }),
            " Add your first Auth provider"
          ]
        }
      )
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime135.jsxs)(import_jsx_runtime135.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime135.jsx)("div", { className: "space-y-3", children: authProviders.map((provider) => /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(
        "div",
        {
          className: `border rounded-xl bg-background/50 overflow-hidden transition-all duration-200 shadow-sm ${provider.isEnabled ? "border-muted" : "border-muted-foreground/20 opacity-60"}`,
          children: /* @__PURE__ */ (0, import_jsx_runtime135.jsxs)("div", { className: "flex items-center justify-between p-3 gap-2 bg-muted/10", children: [
            /* @__PURE__ */ (0, import_jsx_runtime135.jsxs)("div", { className: "flex items-center gap-3 min-w-0 flex-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime135.jsx)("div", { className: "h-9 w-9 flex items-center justify-center shrink-0 rounded-lg bg-sky-500/10 border border-sky-500/20 overflow-hidden", children: provider.iconUrl ? /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(
                "img",
                {
                  src: provider.iconUrl,
                  alt: provider.name,
                  className: "h-full w-full object-contain p-1"
                }
              ) : /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(import_lucide_react73.ShieldCheck, { className: "h-5 w-5 text-sky-400" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime135.jsxs)("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ (0, import_jsx_runtime135.jsxs)("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime135.jsx)("p", { className: "font-semibold text-sm truncate", children: provider.name }),
                  /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(
                    "span",
                    {
                      className: `text-[10px] px-1.5 py-0.5 rounded font-mono font-semibold uppercase tracking-wider ${provider.isEnabled ? "bg-emerald-500/15 text-emerald-500 border border-emerald-500/20" : "bg-muted text-muted-foreground"}`,
                      children: provider.isEnabled ? "Active" : "Inactive"
                    }
                  )
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime135.jsxs)("p", { className: "text-xs text-muted-foreground truncate max-w-[340px]", children: [
                  provider.providerUrl || "Default URL",
                  " \xA0\u2022\xA0 Keys \u2022",
                  " ",
                  provider.clientId ? `${provider.clientId.slice(0, 10)}...` : "Not set",
                  " \xA0\u2022\xA0 Secret \u2022",
                  " ",
                  maskSecret(provider.clientSecret || "")
                ] })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime135.jsxs)("div", { className: "flex items-center gap-1 shrink-0", children: [
              /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(
                Switch,
                {
                  checked: provider.isEnabled,
                  onCheckedChange: (checked) => updateAuthProvider(provider.id, { isEnabled: checked }),
                  title: provider.isEnabled ? "Deactivate Provider" : "Activate Provider",
                  className: "scale-90"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(
                Button,
                {
                  variant: "ghost",
                  size: "icon",
                  className: "h-7 w-7 text-blue-500 hover:text-blue-600 hover:bg-blue-500/10 shrink-0 cursor-pointer",
                  onClick: () => openEditModal(provider),
                  title: "Edit Provider",
                  children: /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(import_lucide_react73.Edit, { className: "h-4 w-4" })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(
                Button,
                {
                  variant: "ghost",
                  size: "icon",
                  className: "h-7 w-7 text-red-500 hover:text-red-600 hover:bg-red-500/10 shrink-0 cursor-pointer",
                  onClick: () => removeAuthProvider(provider.id),
                  title: "Delete Provider",
                  children: /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(import_lucide_react73.Trash2, { className: "h-4 w-4" })
                }
              )
            ] })
          ] })
        },
        provider.id
      )) }),
      /* @__PURE__ */ (0, import_jsx_runtime135.jsx)("div", { className: "pt-1", children: /* @__PURE__ */ (0, import_jsx_runtime135.jsxs)(
        Button,
        {
          onClick: openAddModal,
          size: "sm",
          className: "w-full gap-1 bg-sky-600 hover:bg-sky-700 text-white cursor-pointer",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(import_lucide_react73.Plus, { className: "h-4 w-4" }),
            "Add Auth Provider"
          ]
        }
      ) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(Dialog, { open: !!editingProviderId, onOpenChange: (open) => !open && closeEditModal(), children: /* @__PURE__ */ (0, import_jsx_runtime135.jsxs)(DialogContent, { className: "sm:max-w-[620px] max-h-[90vh] overflow-y-auto", children: [
      /* @__PURE__ */ (0, import_jsx_runtime135.jsxs)(DialogHeader, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime135.jsxs)(DialogTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(import_lucide_react73.ShieldCheck, { className: "h-5 w-5 text-sky-500" }),
          editingProviderId === "new" ? "Add Auth Provider" : "Edit Auth Provider"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(DialogDescription, { children: "Configure any NextAuth-supported provider (Google, GitHub, Discord, Auth0, Credentials) with custom keys and icon." })
      ] }),
      editFormData && /* @__PURE__ */ (0, import_jsx_runtime135.jsxs)("div", { className: "space-y-5 py-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime135.jsxs)("div", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime135.jsxs)("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime135.jsxs)("div", { className: "space-y-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(Label, { className: "text-xs font-semibold", children: "Preset Provider" }),
              /* @__PURE__ */ (0, import_jsx_runtime135.jsxs)(
                Select,
                {
                  value: PRESET_PROVIDERS.some((p) => p.name === editFormData.name) ? editFormData.name : "Custom OAuth",
                  onValueChange: handlePresetSelect,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(SelectTrigger, { className: "h-9 text-sm", children: /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(SelectValue, { placeholder: "Select provider preset" }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(SelectContent, { children: PRESET_PROVIDERS.map((preset) => /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(SelectItem, { value: preset.name, children: preset.name }, preset.name)) })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime135.jsxs)("div", { className: "space-y-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(Label, { className: "text-xs font-semibold", children: "Provider Name *" }),
              /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(
                Input,
                {
                  placeholder: "e.g. Google, Corporate SSO",
                  value: editFormData.name || "",
                  onChange: (e) => handleEditFieldChange("name", e.target.value),
                  className: "bg-background/80 h-9 text-sm"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime135.jsxs)("div", { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime135.jsxs)(Label, { className: "text-xs font-semibold flex items-center gap-1.5", children: [
              /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(import_lucide_react73.ImageIcon, { className: "h-3.5 w-3.5 text-muted-foreground" }),
              "Provider Icon (File Upload to show on Signup & Login)"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime135.jsxs)("div", { className: "flex items-center gap-4 p-3 border rounded-lg bg-muted/10", children: [
              /* @__PURE__ */ (0, import_jsx_runtime135.jsx)("div", { className: "h-12 w-12 rounded-lg border border-dashed border-muted-foreground/30 flex items-center justify-center bg-background shrink-0 overflow-hidden", children: editFormData.iconUrl ? /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(
                "img",
                {
                  src: editFormData.iconUrl,
                  alt: "Provider icon",
                  className: "h-full w-full object-contain p-1"
                }
              ) : /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(import_lucide_react73.Upload, { className: "h-5 w-5 text-muted-foreground" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime135.jsxs)("div", { className: "flex-1 space-y-1", children: [
                /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(
                  "input",
                  {
                    ref: fileInputRef,
                    type: "file",
                    accept: "image/png,image/jpeg,image/svg+xml,image/webp",
                    onChange: handleIconUpload,
                    className: "hidden",
                    id: "provider-icon-upload"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime135.jsxs)("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime135.jsxs)(
                    Button,
                    {
                      type: "button",
                      variant: "outline",
                      size: "sm",
                      onClick: () => fileInputRef.current?.click(),
                      className: "text-xs gap-1 h-8 cursor-pointer",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(import_lucide_react73.Upload, { className: "h-3.5 w-3.5" }),
                        "Choose Icon File"
                      ]
                    }
                  ),
                  editFormData.iconUrl && /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(
                    Button,
                    {
                      type: "button",
                      variant: "ghost",
                      size: "sm",
                      onClick: removeIcon,
                      className: "text-xs text-red-500 hover:text-red-600 hover:bg-red-500/10 h-8 cursor-pointer",
                      children: "Remove"
                    }
                  )
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime135.jsx)("p", { className: "text-[11px] text-muted-foreground", children: "PNG, SVG, or JPG (max 2MB). Shown on login & signup buttons." })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime135.jsxs)("div", { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime135.jsxs)(Label, { className: "text-xs font-semibold flex items-center gap-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(import_lucide_react73.Globe, { className: "h-3.5 w-3.5 text-muted-foreground" }),
              "Provider URL / Issuer / Auth Endpoint"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(
              Input,
              {
                placeholder: "https://accounts.google.com or https://your-domain.auth0.com",
                value: editFormData.providerUrl || "",
                onChange: (e) => handleEditFieldChange("providerUrl", e.target.value),
                className: "bg-background/80 h-9 text-sm font-mono text-xs"
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime135.jsxs)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime135.jsxs)("div", { className: "space-y-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime135.jsxs)(Label, { className: "text-xs font-semibold flex items-center gap-1", children: [
                /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(import_lucide_react73.KeyRound, { className: "h-3.5 w-3.5 text-muted-foreground" }),
                "Keys (Client ID / Key)"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(
                Input,
                {
                  placeholder: "e.g. 419125420251-8jd9315...apps.googleusercontent.com",
                  value: editFormData.clientId || "",
                  onChange: (e) => handleEditFieldChange("clientId", e.target.value),
                  className: "bg-background/80 h-9 text-sm font-mono text-xs"
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime135.jsxs)("div", { className: "space-y-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime135.jsxs)(Label, { className: "text-xs font-semibold flex items-center gap-1", children: [
                /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(import_lucide_react73.Lock, { className: "h-3.5 w-3.5 text-muted-foreground" }),
                "Secret (Client Secret)"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime135.jsxs)("div", { className: "relative", children: [
                /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(
                  Input,
                  {
                    type: showSecret ? "text" : "password",
                    placeholder: "GOCSPX--8WJDZo86RlPyLAwMI...",
                    value: editFormData.clientSecret || "",
                    onChange: (e) => handleEditFieldChange("clientSecret", e.target.value),
                    className: "bg-background/80 h-9 text-sm font-mono text-xs pr-9"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(
                  "button",
                  {
                    type: "button",
                    onClick: () => setShowSecret(!showSecret),
                    className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground cursor-pointer",
                    children: showSecret ? /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(import_lucide_react73.EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(import_lucide_react73.Eye, { className: "h-4 w-4" })
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime135.jsxs)("div", { className: "p-3 border rounded-lg bg-muted/10 space-y-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime135.jsxs)("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_runtime135.jsxs)("p", { className: "text-xs font-semibold flex items-center gap-1 text-muted-foreground", children: [
                /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(import_lucide_react73.User, { className: "h-3.5 w-3.5" }),
                "Credentials Provider / Service Auth (Optional)"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime135.jsx)("span", { className: "text-[10px] text-muted-foreground", children: "For custom user/password auth" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime135.jsxs)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_runtime135.jsxs)("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(Label, { className: "text-[11px] font-semibold", children: "User Name" }),
                /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(
                  Input,
                  {
                    placeholder: "admin or test@example.com",
                    value: editFormData.username || "",
                    onChange: (e) => handleEditFieldChange("username", e.target.value),
                    className: "bg-background h-8 text-xs"
                  }
                )
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime135.jsxs)("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(Label, { className: "text-[11px] font-semibold", children: "Password" }),
                /* @__PURE__ */ (0, import_jsx_runtime135.jsxs)("div", { className: "relative", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(
                    Input,
                    {
                      type: showPassword ? "text" : "password",
                      placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
                      value: editFormData.password || "",
                      onChange: (e) => handleEditFieldChange("password", e.target.value),
                      className: "bg-background h-8 text-xs pr-8"
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(
                    "button",
                    {
                      type: "button",
                      onClick: () => setShowPassword(!showPassword),
                      className: "absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground cursor-pointer",
                      children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(import_lucide_react73.EyeOff, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(import_lucide_react73.Eye, { className: "h-3.5 w-3.5" })
                    }
                  )
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime135.jsxs)("div", { className: "flex items-center justify-between p-3 border rounded-lg bg-background", children: [
            /* @__PURE__ */ (0, import_jsx_runtime135.jsxs)("div", { className: "space-y-0.5", children: [
              /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(Label, { className: "text-xs font-semibold", children: "Status (Active / Inactive)" }),
              /* @__PURE__ */ (0, import_jsx_runtime135.jsx)("p", { className: "text-[11px] text-muted-foreground", children: "Enable to show this provider on login and sign-up pages." })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(
              Switch,
              {
                checked: editFormData.isEnabled ?? true,
                onCheckedChange: (checked) => handleEditFieldChange("isEnabled", checked)
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime135.jsxs)("div", { className: "flex justify-end gap-2 pt-4 border-t", children: [
          /* @__PURE__ */ (0, import_jsx_runtime135.jsxs)(
            Button,
            {
              variant: "outline",
              onClick: closeEditModal,
              className: "gap-1 cursor-pointer",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(import_lucide_react73.X, { className: "h-4 w-4" }),
                "Cancel"
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime135.jsxs)(
            Button,
            {
              onClick: saveEdit,
              disabled: !editFormData.name?.trim(),
              className: "gap-1 bg-sky-600 hover:bg-sky-700 text-white cursor-pointer",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime135.jsx)(import_lucide_react73.Save, { className: "h-4 w-4" }),
                editingProviderId === "new" ? "Add Provider" : "Save Changes"
              ]
            }
          )
        ] })
      ] })
    ] }) })
  ] });
}

// src/features/email-settings/components/themes-tab.tsx
var import_lucide_react74 = require("lucide-react");
var import_jsx_runtime136 = require("react/jsx-runtime");
function ThemesTab() {
  const { updateTheme } = useEmailSettingsStore();
  const { colorTheme, setColorTheme } = useColorTheme();
  const handleColorChange = (name) => {
    setColorTheme(name);
    updateTheme({ appColorTheme: name });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime136.jsxs)(Card, { className: "border-muted bg-card/60 backdrop-blur-md", children: [
    /* @__PURE__ */ (0, import_jsx_runtime136.jsxs)(CardHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime136.jsxs)(CardTitle, { className: "text-xl flex items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime136.jsx)(import_lucide_react74.Palette, { className: "h-5 w-5 text-indigo-500" }),
        "Themes & Design Settings"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime136.jsx)(CardDescription, { children: "Customize the appearance and accent color of your email workspace and mobile preview mockup." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime136.jsx)(CardContent, { className: "space-y-6", children: /* @__PURE__ */ (0, import_jsx_runtime136.jsxs)("div", { className: "space-y-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime136.jsx)(Label, { className: "font-semibold text-sm", children: "Accent Color Theme" }),
      /* @__PURE__ */ (0, import_jsx_runtime136.jsx)("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 max-h-[380px] overflow-y-auto pr-1 no-scrollbar", children: colorThemes.map((ct) => {
        const isActive = colorTheme === ct.name;
        return /* @__PURE__ */ (0, import_jsx_runtime136.jsxs)(
          "button",
          {
            onClick: () => handleColorChange(ct.name),
            className: cn(
              "flex w-full items-center gap-3 rounded-lg border p-3 text-left transition-all duration-150 cursor-pointer",
              isActive ? "border-indigo-500 bg-indigo-500/5 text-indigo-500 shadow-sm font-semibold" : "border-muted hover:border-indigo-500/50 hover:bg-muted/10"
            ),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime136.jsx)("div", { className: "flex gap-0.5 shrink-0", children: ct.colors.slice(0, 4).map((color, i) => /* @__PURE__ */ (0, import_jsx_runtime136.jsx)(
                "span",
                {
                  className: cn(
                    "size-3.5 rounded-full ring-1 ring-background",
                    isActive ? "ring-indigo-500/20" : "ring-border/40"
                  ),
                  style: { backgroundColor: color }
                },
                i
              )) }),
              /* @__PURE__ */ (0, import_jsx_runtime136.jsx)("span", { className: "text-xs truncate", children: ct.label }),
              isActive && /* @__PURE__ */ (0, import_jsx_runtime136.jsx)(import_lucide_react74.Check, { className: "ml-auto size-4 text-indigo-500 shrink-0", strokeWidth: 3 })
            ]
          },
          ct.name
        );
      }) })
    ] }) })
  ] });
}

// src/features/email-settings/components/phone-preview.tsx
var import_react33 = require("react");
var import_lucide_react75 = require("lucide-react");
var import_fc = require("react-icons/fc");
var import_fa = require("react-icons/fa");
var import_jsx_runtime137 = require("react/jsx-runtime");
function PhonePreview({ compact = false, activeSettingsTab }) {
  const { config } = useEmailSettingsStore();
  const { profile, accounts, theme, authProviders = [] } = config;
  const { resolvedTheme } = useTheme2();
  const isAuthTab = activeSettingsTab === "auth";
  const [viewMode, setViewMode] = (0, import_react33.useState)(
    isAuthTab ? "login" : "profile"
  );
  (0, import_react33.useEffect)(() => {
    if (activeSettingsTab === "auth") {
      setViewMode("login");
    } else if (activeSettingsTab === "profile" || activeSettingsTab === "links") {
      setViewMode("profile");
    }
  }, [activeSettingsTab]);
  let isDark = resolvedTheme === "dark";
  if (theme.appTheme === "dark") isDark = true;
  if (theme.appTheme === "light") isDark = false;
  const colorThemeName = theme.appColorTheme || "zinc";
  const colorThemeObj = colorThemes.find((t) => t.name === colorThemeName) || colorThemes[0];
  const tokens = isDark ? colorThemeObj.tokens.dark : colorThemeObj.tokens.light;
  const styleObj = {};
  for (const [prop, value] of Object.entries(tokens)) {
    ;
    styleObj[prop] = value;
  }
  const activeProviders = authProviders.filter((p) => p.isEnabled);
  const getInitials = (fullName) => {
    return fullName.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase() || "?";
  };
  const enabledAccounts = accounts.filter((acc) => acc.isEnabled);
  const shellWidth = compact ? "w-[270px]" : "w-[300px]";
  const shellHeight = compact ? "h-[540px]" : "h-[600px]";
  const renderProviderIcon = (provider) => {
    if (provider.iconUrl) {
      return /* @__PURE__ */ (0, import_jsx_runtime137.jsx)(
        "img",
        {
          src: provider.iconUrl,
          alt: provider.name,
          className: "h-4 w-4 object-contain shrink-0 rounded-xs"
        }
      );
    }
    const lower = provider.name.toLowerCase();
    if (lower.includes("google")) return /* @__PURE__ */ (0, import_jsx_runtime137.jsx)(import_fc.FcGoogle, { className: "h-4 w-4 shrink-0" });
    if (lower.includes("github")) return /* @__PURE__ */ (0, import_jsx_runtime137.jsx)(import_fa.FaGithub, { className: "h-4 w-4 shrink-0" });
    if (lower.includes("discord")) return /* @__PURE__ */ (0, import_jsx_runtime137.jsx)(import_fa.FaDiscord, { className: "h-4 w-4 shrink-0 text-[#5865F2]" });
    if (lower.includes("apple")) return /* @__PURE__ */ (0, import_jsx_runtime137.jsx)(import_fa.FaApple, { className: "h-4 w-4 shrink-0" });
    if (lower.includes("slack")) return /* @__PURE__ */ (0, import_jsx_runtime137.jsx)(import_fa.FaSlack, { className: "h-4 w-4 shrink-0" });
    if (lower.includes("twitter") || lower.includes("x"))
      return /* @__PURE__ */ (0, import_jsx_runtime137.jsx)(import_fa.FaTwitter, { className: "h-4 w-4 shrink-0 text-[#1DA1F2]" });
    return /* @__PURE__ */ (0, import_jsx_runtime137.jsx)(import_lucide_react75.ShieldCheck, { className: "h-4 w-4 shrink-0 text-sky-500" });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime137.jsxs)("div", { className: `flex flex-col items-center w-full shrink-0 ${compact ? "py-1" : "py-2"}`, children: [
    isAuthTab && /* @__PURE__ */ (0, import_jsx_runtime137.jsxs)("div", { className: "flex items-center p-1 mb-2.5 bg-muted/60 backdrop-blur-md rounded-xl border border-border/70 text-xs gap-1 shadow-xs", children: [
      /* @__PURE__ */ (0, import_jsx_runtime137.jsx)(
        "button",
        {
          type: "button",
          onClick: () => setViewMode("login"),
          className: cn(
            "px-4 py-1 rounded-lg font-medium transition-all text-xs cursor-pointer",
            viewMode === "login" ? "bg-background text-foreground shadow-xs font-semibold" : "text-muted-foreground hover:text-foreground"
          ),
          children: "Sign In"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime137.jsx)(
        "button",
        {
          type: "button",
          onClick: () => setViewMode("signup"),
          className: cn(
            "px-4 py-1 rounded-lg font-medium transition-all text-xs cursor-pointer",
            viewMode === "signup" ? "bg-background text-foreground shadow-xs font-semibold" : "text-muted-foreground hover:text-foreground"
          ),
          children: "Sign Up"
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime137.jsxs)(
      "div",
      {
        className: `relative ${shellWidth} ${shellHeight} rounded-[40px] border-[8px] border-slate-900 bg-black shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col shrink-0 ring-1 ring-slate-800`,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime137.jsxs)("div", { className: "absolute top-3 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-900 rounded-full z-30 flex items-center justify-center pointer-events-none", children: [
            /* @__PURE__ */ (0, import_jsx_runtime137.jsx)("div", { className: "w-2.5 h-2.5 rounded-full bg-slate-800/80 mr-8" }),
            /* @__PURE__ */ (0, import_jsx_runtime137.jsx)("div", { className: "w-1.5 h-1.5 rounded-full bg-slate-800/80" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime137.jsxs)(
            "div",
            {
              style: styleObj,
              className: cn(
                "flex-grow w-full h-full overflow-y-auto no-scrollbar flex flex-col p-4 pt-12 pb-5 select-none relative bg-background text-foreground transition-colors duration-300",
                isDark ? "dark" : ""
              ),
              children: [
                viewMode === "login" && /* @__PURE__ */ (0, import_jsx_runtime137.jsxs)("div", { className: "w-full flex flex-col justify-center space-y-3 py-1", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime137.jsxs)("div", { className: "space-y-1 text-center", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime137.jsx)("h3", { className: "text-base font-bold tracking-tight text-foreground", children: "Sign in" }),
                    /* @__PURE__ */ (0, import_jsx_runtime137.jsx)("p", { className: "text-[11px] text-muted-foreground", children: "Enter your credentials below to log into your account." })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime137.jsxs)("div", { className: "space-y-2.5 text-left pt-1", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime137.jsxs)("div", { className: "space-y-1", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime137.jsx)(Label, { className: "text-[11px] font-semibold", children: "Email" }),
                      /* @__PURE__ */ (0, import_jsx_runtime137.jsx)(
                        Input,
                        {
                          placeholder: "name@example.com",
                          defaultValue: "user@gmail.com",
                          className: "h-8 text-xs bg-background/80"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime137.jsxs)("div", { className: "space-y-1", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime137.jsxs)("div", { className: "flex items-center justify-between", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime137.jsx)(Label, { className: "text-[11px] font-semibold", children: "Password" }),
                        /* @__PURE__ */ (0, import_jsx_runtime137.jsx)("span", { className: "text-[10px] text-muted-foreground hover:underline cursor-pointer", children: "Forgot password?" })
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime137.jsx)(
                        PasswordInput,
                        {
                          placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
                          defaultValue: "secret123",
                          className: "h-8 text-xs bg-background/80"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime137.jsxs)(Button, { className: "w-full h-8 text-xs font-semibold gap-1.5 mt-1 cursor-pointer", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime137.jsx)(import_lucide_react75.LogIn, { className: "h-3.5 w-3.5" }),
                      "Sign in"
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime137.jsxs)("div", { className: "relative my-2", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime137.jsx)("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ (0, import_jsx_runtime137.jsx)("span", { className: "w-full border-t border-border" }) }),
                      /* @__PURE__ */ (0, import_jsx_runtime137.jsx)("div", { className: "relative flex justify-center text-[10px] uppercase", children: /* @__PURE__ */ (0, import_jsx_runtime137.jsx)("span", { className: "bg-background px-2 text-muted-foreground font-medium", children: "Or continue with" }) })
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime137.jsx)("div", { className: "space-y-1.5", children: activeProviders.length > 0 ? activeProviders.map((provider) => /* @__PURE__ */ (0, import_jsx_runtime137.jsxs)(
                      Button,
                      {
                        variant: "outline",
                        type: "button",
                        className: "w-full h-8 text-xs justify-center gap-2 border-border/80 shadow-none hover:bg-muted/40 font-medium cursor-pointer",
                        children: [
                          renderProviderIcon(provider),
                          /* @__PURE__ */ (0, import_jsx_runtime137.jsxs)("span", { className: "truncate", children: [
                            "Continue with ",
                            provider.name
                          ] })
                        ]
                      },
                      provider.id
                    )) : /* @__PURE__ */ (0, import_jsx_runtime137.jsxs)(
                      Button,
                      {
                        variant: "outline",
                        type: "button",
                        className: "w-full h-8 text-xs justify-center gap-2 border-border/80 shadow-none hover:bg-muted/40 font-medium cursor-pointer",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime137.jsx)(import_fc.FcGoogle, { className: "h-4 w-4 shrink-0" }),
                          /* @__PURE__ */ (0, import_jsx_runtime137.jsx)("span", { children: "Continue with Google" })
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime137.jsxs)("p", { className: "text-center text-[11px] text-muted-foreground pt-2", children: [
                      "Don't have an account?",
                      " ",
                      /* @__PURE__ */ (0, import_jsx_runtime137.jsx)(
                        "button",
                        {
                          type: "button",
                          onClick: () => setViewMode("signup"),
                          className: "font-semibold text-foreground underline hover:text-primary cursor-pointer",
                          children: "Sign Up"
                        }
                      )
                    ] })
                  ] })
                ] }),
                viewMode === "signup" && /* @__PURE__ */ (0, import_jsx_runtime137.jsxs)("div", { className: "w-full flex flex-col justify-center space-y-2.5 py-1", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime137.jsxs)("div", { className: "space-y-0.5 text-center", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime137.jsx)("h3", { className: "text-base font-bold tracking-tight text-foreground", children: "Create an account" }),
                    /* @__PURE__ */ (0, import_jsx_runtime137.jsx)("p", { className: "text-[11px] text-muted-foreground", children: "Enter your email below to create your account" })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime137.jsxs)("div", { className: "space-y-2 text-left pt-1", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime137.jsxs)("div", { className: "space-y-1", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime137.jsx)(Label, { className: "text-[11px] font-semibold", children: "Email" }),
                      /* @__PURE__ */ (0, import_jsx_runtime137.jsx)(
                        Input,
                        {
                          placeholder: "name@example.com",
                          defaultValue: "user@gmail.com",
                          className: "h-7.5 text-xs bg-background/80"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime137.jsxs)("div", { className: "space-y-1", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime137.jsx)(Label, { className: "text-[11px] font-semibold", children: "Password" }),
                      /* @__PURE__ */ (0, import_jsx_runtime137.jsx)(
                        PasswordInput,
                        {
                          placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
                          defaultValue: "secret123",
                          className: "h-7.5 text-xs bg-background/80"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime137.jsxs)("div", { className: "space-y-1", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime137.jsx)(Label, { className: "text-[11px] font-semibold", children: "Confirm Password" }),
                      /* @__PURE__ */ (0, import_jsx_runtime137.jsx)(
                        PasswordInput,
                        {
                          placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
                          defaultValue: "secret123",
                          className: "h-7.5 text-xs bg-background/80"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime137.jsxs)(Button, { className: "w-full h-8 text-xs font-semibold gap-1.5 mt-1 cursor-pointer", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime137.jsx)(import_lucide_react75.UserPlus, { className: "h-3.5 w-3.5" }),
                      "Create Account"
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime137.jsxs)("div", { className: "relative my-2", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime137.jsx)("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ (0, import_jsx_runtime137.jsx)("span", { className: "w-full border-t border-border" }) }),
                      /* @__PURE__ */ (0, import_jsx_runtime137.jsx)("div", { className: "relative flex justify-center text-[10px] uppercase", children: /* @__PURE__ */ (0, import_jsx_runtime137.jsx)("span", { className: "bg-background px-2 text-muted-foreground font-medium", children: "Or continue with" }) })
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime137.jsx)("div", { className: "space-y-1.5", children: activeProviders.length > 0 ? activeProviders.map((provider) => /* @__PURE__ */ (0, import_jsx_runtime137.jsxs)(
                      Button,
                      {
                        variant: "outline",
                        type: "button",
                        className: "w-full h-8 text-xs justify-center gap-2 border-border/80 shadow-none hover:bg-muted/40 font-medium cursor-pointer",
                        children: [
                          renderProviderIcon(provider),
                          /* @__PURE__ */ (0, import_jsx_runtime137.jsxs)("span", { className: "truncate", children: [
                            "Continue with ",
                            provider.name
                          ] })
                        ]
                      },
                      provider.id
                    )) : /* @__PURE__ */ (0, import_jsx_runtime137.jsxs)(
                      Button,
                      {
                        variant: "outline",
                        type: "button",
                        className: "w-full h-8 text-xs justify-center gap-2 border-border/80 shadow-none hover:bg-muted/40 font-medium cursor-pointer",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime137.jsx)(import_fc.FcGoogle, { className: "h-4 w-4 shrink-0" }),
                          /* @__PURE__ */ (0, import_jsx_runtime137.jsx)("span", { children: "Continue with Google" })
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime137.jsxs)("p", { className: "text-center text-[11px] text-muted-foreground pt-1", children: [
                      "Already have an account?",
                      " ",
                      /* @__PURE__ */ (0, import_jsx_runtime137.jsx)(
                        "button",
                        {
                          type: "button",
                          onClick: () => setViewMode("login"),
                          className: "font-semibold text-foreground underline hover:text-primary cursor-pointer",
                          children: "Sign In"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime137.jsx)("p", { className: "text-[10px] text-center text-muted-foreground leading-tight pt-1", children: "By clicking continue, you agree to our Terms of Service." })
                  ] })
                ] }),
                viewMode === "profile" && /* @__PURE__ */ (0, import_jsx_runtime137.jsxs)("div", { className: "w-full flex flex-col items-center pt-3", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime137.jsx)("div", { className: "w-18 h-18 rounded-full border-2 border-white/20 shadow-md overflow-hidden shrink-0 flex items-center justify-center bg-gradient-to-tr from-indigo-500 to-fuchsia-500 text-white font-black text-xl mb-3", children: profile.avatarUrl ? /* @__PURE__ */ (0, import_jsx_runtime137.jsx)(
                    "img",
                    {
                      src: profile.avatarUrl,
                      alt: profile.name,
                      className: "w-full h-full object-cover",
                      onError: (e) => {
                        ;
                        e.target.style.display = "none";
                      }
                    }
                  ) : /* @__PURE__ */ (0, import_jsx_runtime137.jsx)("span", { children: getInitials(profile.name) }) }),
                  /* @__PURE__ */ (0, import_jsx_runtime137.jsx)("h3", { className: "text-base font-bold text-center w-full mb-1 shrink-0 truncate text-foreground", children: profile.name || "Your Name" }),
                  /* @__PURE__ */ (0, import_jsx_runtime137.jsx)("p", { className: "text-xs text-center w-full max-h-16 overflow-y-auto no-scrollbar shrink-0 mb-6 leading-relaxed px-1 text-muted-foreground", children: profile.bio || "Add a bio to tell users who you are." }),
                  /* @__PURE__ */ (0, import_jsx_runtime137.jsx)("div", { className: "w-full flex-grow flex flex-col gap-3 mb-4 overflow-y-auto no-scrollbar", children: enabledAccounts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime137.jsx)("div", { className: "flex-grow flex flex-col items-center justify-center text-center p-4 border border-dashed border-border rounded-xl bg-card text-xs text-muted-foreground", children: "No active email accounts" }) : enabledAccounts.map((account) => {
                    return /* @__PURE__ */ (0, import_jsx_runtime137.jsxs)(
                      "div",
                      {
                        className: "w-full py-3 px-4 flex items-center justify-center relative text-xs font-bold text-center select-none bg-primary text-primary-foreground shadow-sm rounded-xl",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime137.jsx)(import_lucide_react75.Mail, { className: "h-4 w-4 absolute left-4 shrink-0" }),
                          /* @__PURE__ */ (0, import_jsx_runtime137.jsx)("span", { className: "truncate max-w-[80%]", children: account.email })
                        ]
                      },
                      account.id
                    );
                  }) })
                ] })
              ]
            }
          )
        ]
      }
    ),
    !compact && /* @__PURE__ */ (0, import_jsx_runtime137.jsx)("p", { className: "text-[10px] text-muted-foreground mt-3 text-center max-w-[240px]", children: "Interactive Live Simulation frame. Real-time changes from Auth & Profile tabs reflect dynamically." })
  ] });
}

// src/components/layout/app-header.tsx
var import_react34 = require("react");
var import_lucide_react76 = require("lucide-react");
var import_navigation7 = require("next/navigation");
var import_jsx_runtime138 = require("react/jsx-runtime");
function AppHeader2({
  title,
  fixed = true,
  iconsPosition = "right",
  children
}) {
  const router = (0, import_navigation7.useRouter)();
  const currentUser = useAuthStore((state) => state.auth.user);
  const { unreadCount, fetchNotifications, subscribeToNotifications, unsubscribe } = useNotificationStore();
  (0, import_react34.useEffect)(() => {
    if (currentUser) {
      fetchNotifications(currentUser.accountNo);
      subscribeToNotifications(currentUser.accountNo);
    }
    return () => {
      unsubscribe();
    };
  }, [currentUser, fetchNotifications, subscribeToNotifications, unsubscribe]);
  return /* @__PURE__ */ (0, import_jsx_runtime138.jsx)(Header, { fixed, className: "border-b bg-background", children: /* @__PURE__ */ (0, import_jsx_runtime138.jsx)("div", { className: "flex flex-1 items-center justify-between w-full", children: iconsPosition === "left" ? /* @__PURE__ */ (0, import_jsx_runtime138.jsxs)("div", { className: "flex items-center gap-2 sm:gap-3 min-w-0", children: [
    /* @__PURE__ */ (0, import_jsx_runtime138.jsx)("h1", { className: "min-w-0 truncate text-base font-semibold sm:text-lg", children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime138.jsxs)("div", { className: "flex items-center gap-1 sm:gap-2 shrink-0 ml-1", children: [
      /* @__PURE__ */ (0, import_jsx_runtime138.jsx)(Search7, { iconOnly: true }),
      children,
      /* @__PURE__ */ (0, import_jsx_runtime138.jsxs)(
        Button,
        {
          variant: "ghost",
          size: "icon",
          className: "relative size-8 shrink-0",
          "aria-label": "Notifications",
          onClick: () => router.push("/notification"),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime138.jsx)(import_lucide_react76.Bell, { className: "size-5" }),
            unreadCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime138.jsx)("span", { className: "absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-medium text-white shadow-xs", children: unreadCount > 5 ? "5+" : unreadCount })
          ]
        }
      )
    ] })
  ] }) : /* @__PURE__ */ (0, import_jsx_runtime138.jsxs)(import_jsx_runtime138.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime138.jsx)("h1", { className: "min-w-0 truncate text-base font-semibold sm:text-lg", children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime138.jsxs)("div", { className: "ml-auto flex items-center gap-2 sm:gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime138.jsx)(Search7, { iconOnly: true }),
      children,
      /* @__PURE__ */ (0, import_jsx_runtime138.jsxs)(
        Button,
        {
          variant: "ghost",
          size: "icon",
          className: "relative size-8 shrink-0",
          "aria-label": "Notifications",
          onClick: () => router.push("/notification"),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime138.jsx)(import_lucide_react76.Bell, { className: "size-5" }),
            unreadCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime138.jsx)("span", { className: "absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-medium text-white shadow-xs", children: unreadCount > 5 ? "5+" : unreadCount })
          ]
        }
      )
    ] })
  ] }) }) });
}

// src/features/email-settings/index.tsx
var import_lucide_react77 = require("lucide-react");
var import_jsx_runtime139 = require("react/jsx-runtime");
function EmailSettingsFeature() {
  const [previewOpen, setPreviewOpen] = (0, import_react35.useState)(false);
  const [activeTab, setActiveTab] = (0, import_react35.useState)("profile");
  return /* @__PURE__ */ (0, import_jsx_runtime139.jsxs)("div", { className: "flex h-full flex-col w-full overflow-hidden bg-background text-foreground", children: [
    /* @__PURE__ */ (0, import_jsx_runtime139.jsx)(AppHeader2, { title: "App Settings" }),
    /* @__PURE__ */ (0, import_jsx_runtime139.jsx)(Main, { fixed: true, className: "flex flex-grow flex-1 min-h-0 overflow-hidden p-3 sm:p-4 md:p-6", children: /* @__PURE__ */ (0, import_jsx_runtime139.jsxs)("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 w-full h-full overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_runtime139.jsx)("div", { className: "lg:col-span-7 flex flex-col h-full min-h-0 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime139.jsxs)(Tabs, { value: activeTab, onValueChange: setActiveTab, className: "flex flex-col h-full min-h-0 overflow-hidden", children: [
        /* @__PURE__ */ (0, import_jsx_runtime139.jsx)("div", { className: "w-full overflow-x-auto pb-2 mb-2 lg:mb-4 shrink-0 no-scrollbar", children: /* @__PURE__ */ (0, import_jsx_runtime139.jsxs)(TabsList, { className: "h-auto gap-4 sm:gap-6 border-b border-border bg-transparent p-0 shadow-none justify-start flex w-max min-w-full rounded-none", children: [
          /* @__PURE__ */ (0, import_jsx_runtime139.jsx)(
            TabsTrigger,
            {
              value: "profile",
              className: "h-auto rounded-none border-0 border-b-2 border-transparent bg-transparent px-0 pt-0 pb-2 shadow-none hover:bg-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:font-semibold data-[state=active]:shadow-none dark:data-[state=active]:border-x-transparent dark:data-[state=active]:border-t-transparent dark:data-[state=active]:border-b-primary dark:data-[state=active]:bg-transparent dark:data-[state=active]:shadow-none text-xs whitespace-nowrap",
              children: "Profile"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime139.jsx)(
            TabsTrigger,
            {
              value: "files",
              className: "h-auto rounded-none border-0 border-b-2 border-transparent bg-transparent px-0 pt-0 pb-2 shadow-none hover:bg-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:font-semibold data-[state=active]:shadow-none dark:data-[state=active]:border-x-transparent dark:data-[state=active]:border-t-transparent dark:data-[state=active]:border-b-primary dark:data-[state=active]:bg-transparent dark:data-[state=active]:shadow-none text-xs whitespace-nowrap",
              children: "Files"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime139.jsx)(
            TabsTrigger,
            {
              value: "chat",
              className: "h-auto rounded-none border-0 border-b-2 border-transparent bg-transparent px-0 pt-0 pb-2 shadow-none hover:bg-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:font-semibold data-[state=active]:shadow-none dark:data-[state=active]:border-x-transparent dark:data-[state=active]:border-t-transparent dark:data-[state=active]:border-b-primary dark:data-[state=active]:bg-transparent dark:data-[state=active]:shadow-none text-xs whitespace-nowrap",
              children: "Chat"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime139.jsx)(
            TabsTrigger,
            {
              value: "ai",
              className: "h-auto rounded-none border-0 border-b-2 border-transparent bg-transparent px-0 pt-0 pb-2 shadow-none hover:bg-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:font-semibold data-[state=active]:shadow-none dark:data-[state=active]:border-x-transparent dark:data-[state=active]:border-t-transparent dark:data-[state=active]:border-b-primary dark:data-[state=active]:bg-transparent dark:data-[state=active]:shadow-none text-xs whitespace-nowrap",
              children: "AI API"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime139.jsx)(
            TabsTrigger,
            {
              value: "links",
              className: "h-auto rounded-none border-0 border-b-2 border-transparent bg-transparent px-0 pt-0 pb-2 shadow-none hover:bg-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:font-semibold data-[state=active]:shadow-none dark:data-[state=active]:border-x-transparent dark:data-[state=active]:border-t-transparent dark:data-[state=active]:border-b-primary dark:data-[state=active]:bg-transparent dark:data-[state=active]:shadow-none text-xs whitespace-nowrap",
              children: "Email"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime139.jsx)(
            TabsTrigger,
            {
              value: "email-files",
              className: "h-auto rounded-none border-0 border-b-2 border-transparent bg-transparent px-0 pt-0 pb-2 shadow-none hover:bg-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:font-semibold data-[state=active]:shadow-none dark:data-[state=active]:border-x-transparent dark:data-[state=active]:border-t-transparent dark:data-[state=active]:border-b-primary dark:data-[state=active]:bg-transparent dark:data-[state=active]:shadow-none text-xs whitespace-nowrap",
              children: "Email Files"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime139.jsx)(
            TabsTrigger,
            {
              value: "auth",
              className: "h-auto rounded-none border-0 border-b-2 border-transparent bg-transparent px-0 pt-0 pb-2 shadow-none hover:bg-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:font-semibold data-[state=active]:shadow-none dark:data-[state=active]:border-x-transparent dark:data-[state=active]:border-t-transparent dark:data-[state=active]:border-b-primary dark:data-[state=active]:bg-transparent dark:data-[state=active]:shadow-none text-xs whitespace-nowrap",
              children: "Auth"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime139.jsx)(
            TabsTrigger,
            {
              value: "theme",
              className: "h-auto rounded-none border-0 border-b-2 border-transparent bg-transparent px-0 pt-0 pb-2 shadow-none hover:bg-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:font-semibold data-[state=active]:shadow-none dark:data-[state=active]:border-x-transparent dark:data-[state=active]:border-t-transparent dark:data-[state=active]:border-b-primary dark:data-[state=active]:bg-transparent dark:data-[state=active]:shadow-none text-xs whitespace-nowrap",
              children: "Theme"
            }
          )
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime139.jsxs)("div", { className: "flex-1 overflow-y-auto no-scrollbar pr-0 sm:pr-1 pb-20 lg:pb-6 space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime139.jsx)(TabsContent, { value: "profile", className: "mt-0 focus-visible:outline-none", children: /* @__PURE__ */ (0, import_jsx_runtime139.jsx)(ProfileTab, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime139.jsx)(TabsContent, { value: "files", className: "mt-0 focus-visible:outline-none", children: /* @__PURE__ */ (0, import_jsx_runtime139.jsx)(FilesTab, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime139.jsx)(TabsContent, { value: "chat", className: "mt-0 focus-visible:outline-none", children: /* @__PURE__ */ (0, import_jsx_runtime139.jsx)(ChatTab, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime139.jsx)(TabsContent, { value: "ai", className: "mt-0 focus-visible:outline-none", children: /* @__PURE__ */ (0, import_jsx_runtime139.jsx)(AiTab, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime139.jsx)(TabsContent, { value: "links", className: "mt-0 focus-visible:outline-none", children: /* @__PURE__ */ (0, import_jsx_runtime139.jsx)(LinksTab, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime139.jsx)(TabsContent, { value: "email-files", className: "mt-0 focus-visible:outline-none", children: /* @__PURE__ */ (0, import_jsx_runtime139.jsx)(EmailFilesTab, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime139.jsx)(TabsContent, { value: "auth", className: "mt-0 focus-visible:outline-none", children: /* @__PURE__ */ (0, import_jsx_runtime139.jsx)(AuthTab, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime139.jsx)(TabsContent, { value: "theme", className: "mt-0 focus-visible:outline-none", children: /* @__PURE__ */ (0, import_jsx_runtime139.jsx)(ThemesTab, {}) })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime139.jsx)("div", { className: "hidden lg:flex lg:col-span-5 min-h-0 overflow-y-auto overflow-x-hidden bg-muted/10 border rounded-2xl flex-col items-center px-4 py-6 shadow-inner", children: /* @__PURE__ */ (0, import_jsx_runtime139.jsx)(PhonePreview, { activeSettingsTab: activeTab }) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime139.jsx)("div", { className: "fixed bottom-4 right-4 z-40 lg:hidden", children: /* @__PURE__ */ (0, import_jsx_runtime139.jsxs)(
      Button,
      {
        onClick: () => setPreviewOpen(true),
        className: "h-12 px-5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg gap-2 cursor-pointer",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime139.jsx)(import_lucide_react77.Smartphone, { className: "h-4 w-4" }),
          "Preview"
        ]
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime139.jsx)(Sheet, { open: previewOpen, onOpenChange: setPreviewOpen, children: /* @__PURE__ */ (0, import_jsx_runtime139.jsxs)(SheetContent, { side: "bottom", className: "h-[90vh] rounded-t-2xl px-4 pt-6 pb-8 overflow-y-auto", children: [
      /* @__PURE__ */ (0, import_jsx_runtime139.jsxs)(SheetHeader, { className: "mb-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime139.jsx)(SheetTitle, { children: "Live Preview" }),
        /* @__PURE__ */ (0, import_jsx_runtime139.jsx)(SheetDescription, { children: "See how your authentication & email configurations look on a mobile mockup preview." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime139.jsx)("div", { className: "flex items-start justify-center h-full overflow-y-auto pt-2 pb-4", children: /* @__PURE__ */ (0, import_jsx_runtime139.jsx)(PhonePreview, { compact: true, activeSettingsTab: activeTab }) })
    ] }) })
  ] });
}

// src/features/auth/sign-in/components/user-auth-form.tsx
var import_react36 = require("next-auth/react");
var import_react37 = require("react");
var import_zod = require("zod");
var import_react_hook_form2 = require("react-hook-form");
var import_zod2 = require("@hookform/resolvers/zod");
var import_link6 = __toESM(require("next/link"));
var import_navigation8 = require("next/navigation");
var import_lucide_react78 = require("lucide-react");
var import_sonner3 = require("sonner");
var import_fc2 = require("react-icons/fc");
var import_fa2 = require("react-icons/fa");

// src/services/auth-redirect.service.ts
function handleAuthRedirect(router, redirectTo) {
  console.log("[DEBUG client] handleAuthRedirect received raw redirectTo:", redirectTo);
  let targetPath = "/";
  if (redirectTo) {
    try {
      targetPath = decodeURIComponent(redirectTo);
    } catch {
      targetPath = redirectTo;
    }
  }
  try {
    if (targetPath.startsWith("http://") || targetPath.startsWith("https://")) {
      const url = new URL(targetPath);
      targetPath = `${url.pathname}${url.search}${url.hash}` || "/";
    }
  } catch {
  }
  if (targetPath === "/sign-in" || targetPath === "/sign-up" || !targetPath || targetPath === "") {
    targetPath = "/";
  }
  if (!targetPath.startsWith("/")) {
    targetPath = `/${targetPath}`;
  }
  console.log("[DEBUG client] handleAuthRedirect executing navigation to targetPath:", targetPath);
  if (router && typeof router.replace === "function") {
    router.replace(targetPath);
  }
  if (typeof window !== "undefined") {
    setTimeout(() => {
      if (window.location.pathname.startsWith("/sign-in") || window.location.pathname.startsWith("/sign-up")) {
        console.log("[DEBUG client] Executing hard redirect to dashboard:", targetPath);
        window.location.href = targetPath;
      }
    }, 100);
  }
}

// src/features/auth/sign-in/components/user-auth-form.tsx
var import_jsx_runtime140 = require("react/jsx-runtime");
var formSchema = import_zod.z.object({
  email: import_zod.z.email({
    error: (iss) => iss.input === "" ? "Please enter your email." : void 0
  }),
  password: import_zod.z.string().min(1, "Please enter your password.").min(7, "Password must be at least 7 characters long.")
});
function UserAuthForm({
  className,
  redirectTo,
  ...props
}) {
  const [isLoading, setIsLoading] = (0, import_react37.useState)(false);
  const [activeLoadingProvider, setActiveLoadingProvider] = (0, import_react37.useState)(null);
  const router = (0, import_navigation8.useRouter)();
  const { auth } = useAuthStore();
  const [mounted, setMounted] = (0, import_react37.useState)(false);
  const { config } = useEmailSettingsStore();
  (0, import_react37.useEffect)(() => {
    setMounted(true);
  }, []);
  const authProviders = config?.authProviders || [];
  const activeProviders = mounted ? authProviders.filter((p) => p.isEnabled) : [];
  (0, import_react37.useEffect)(() => {
    if (typeof window !== "undefined" && redirectTo && redirectTo !== "/") {
      sessionStorage.setItem("post_login_redirect", redirectTo);
    }
  }, [redirectTo]);
  const renderProviderIcon = (provider) => {
    if (provider.iconUrl) {
      return /* @__PURE__ */ (0, import_jsx_runtime140.jsx)(
        "img",
        {
          src: provider.iconUrl,
          alt: provider.name,
          className: "h-4 w-4 object-contain shrink-0 rounded-xs"
        }
      );
    }
    const lower = provider.name.toLowerCase();
    if (lower.includes("google")) return /* @__PURE__ */ (0, import_jsx_runtime140.jsx)(import_fc2.FcGoogle, { className: "h-4 w-4 shrink-0" });
    if (lower.includes("github")) return /* @__PURE__ */ (0, import_jsx_runtime140.jsx)(import_fa2.FaGithub, { className: "h-4 w-4 shrink-0" });
    if (lower.includes("discord")) return /* @__PURE__ */ (0, import_jsx_runtime140.jsx)(import_fa2.FaDiscord, { className: "h-4 w-4 shrink-0 text-[#5865F2]" });
    if (lower.includes("apple")) return /* @__PURE__ */ (0, import_jsx_runtime140.jsx)(import_fa2.FaApple, { className: "h-4 w-4 shrink-0" });
    if (lower.includes("slack")) return /* @__PURE__ */ (0, import_jsx_runtime140.jsx)(import_fa2.FaSlack, { className: "h-4 w-4 shrink-0" });
    if (lower.includes("twitter") || lower.includes("x"))
      return /* @__PURE__ */ (0, import_jsx_runtime140.jsx)(import_fa2.FaTwitter, { className: "h-4 w-4 shrink-0 text-[#1DA1F2]" });
    return /* @__PURE__ */ (0, import_jsx_runtime140.jsx)(import_lucide_react78.ShieldCheck, { className: "h-4 w-4 shrink-0 text-sky-500" });
  };
  const handleProviderLogin = async (provider) => {
    const providerPreset = "preset" in provider && provider.preset ? provider.preset : provider.name.toLowerCase();
    const oauthProvider = providerPreset.includes("github") ? "github" : providerPreset.includes("discord") ? "discord" : providerPreset.includes("apple") ? "apple" : providerPreset.includes("slack") ? "slack" : providerPreset.includes("twitter") ? "twitter" : providerPreset.includes("google") ? "google" : providerPreset;
    setActiveLoadingProvider(provider.name);
    try {
      const redirectValue = redirectTo || "/";
      const targetUrl = redirectValue && redirectValue !== "/" ? redirectValue : "/";
      if (oauthProvider === "github") {
        const authProviderObj = provider;
        const clientId = authProviderObj.clientId;
        const clientSecret = authProviderObj.clientSecret;
        if (clientId) {
          if (typeof window !== "undefined" && clientSecret) {
            document.cookie = `auth_custom_github=${encodeURIComponent(
              JSON.stringify({ clientId, clientSecret })
            )}; path=/; max-age=600; SameSite=Lax`;
          }
          const redirectUri = `${window.location.origin}/api/auth/callback/github`;
          const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${encodeURIComponent(
            clientId
          )}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=read:user,user:email&state=${encodeURIComponent(
            targetUrl
          )}`;
          window.location.href = githubAuthUrl;
          return;
        }
      }
      if (oauthProvider === "google") {
        await (0, import_react36.signIn)("google", {
          callbackUrl: targetUrl
        });
      } else {
        await (0, import_react36.signIn)(oauthProvider, { callbackUrl: targetUrl });
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : `${provider.name} sign in failed. Please try again.`;
      console.error(`[DEBUG client] handleProviderLogin failed for ${provider.name}:`, err);
      import_sonner3.toast.error(message);
    } finally {
      setActiveLoadingProvider(null);
    }
  };
  const form = (0, import_react_hook_form2.useForm)({
    resolver: (0, import_zod2.zodResolver)(formSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });
  async function onSubmit(data2) {
    setIsLoading(true);
    try {
      const supabase = createClient2();
      const { data: profileList } = await supabase.from("profiles").select("id").eq("email", data2.email);
      const emailExists = profileList && profileList.length > 0;
      if (!emailExists) {
        import_sonner3.toast.error("Account not found in our records. Redirecting to Sign Up...");
        await sleep(1500);
        router.push(`/sign-up?email=${encodeURIComponent(data2.email)}`);
        return;
      }
      const { data: authData, error } = await supabase.auth.signInWithPassword({
        email: data2.email,
        password: data2.password
      });
      if (error) {
        throw error;
      }
      const user = authData.user;
      if (!user) throw new Error("No user returned from sign in.");
      auth.setUser({
        id: user.id,
        accountNo: user.id,
        email: user.email,
        name: user.user_metadata?.name || user.user_metadata?.full_name || user.email.split("@")[0],
        picture: user.user_metadata?.avatar_url || void 0,
        role: ["user"],
        exp: Date.now() + 24 * 60 * 60 * 1e3
      });
      auth.setAccessToken(authData.session?.access_token || "mock-access-token");
      const storedRedirect = typeof window !== "undefined" ? sessionStorage.getItem("post_login_redirect") : null;
      const destination = redirectTo || storedRedirect || void 0;
      if (typeof window !== "undefined") {
        sessionStorage.removeItem("post_login_redirect");
      }
      handleAuthRedirect(router, destination);
      import_sonner3.toast.success(`Welcome back, ${user.email}!`);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Sign in failed. Please check your credentials.";
      import_sonner3.toast.error(message);
    } finally {
      setIsLoading(false);
    }
  }
  return /* @__PURE__ */ (0, import_jsx_runtime140.jsx)(Form, { ...form, children: /* @__PURE__ */ (0, import_jsx_runtime140.jsxs)(
    "form",
    {
      onSubmit: form.handleSubmit(onSubmit),
      className: cn("grid gap-3", className),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime140.jsx)(
          FormField,
          {
            control: form.control,
            name: "email",
            render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime140.jsxs)(FormItem, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime140.jsx)(FormLabel, { children: "Email" }),
              /* @__PURE__ */ (0, import_jsx_runtime140.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime140.jsx)(Input, { placeholder: "name@example.com", ...field }) }),
              /* @__PURE__ */ (0, import_jsx_runtime140.jsx)(FormMessage, {})
            ] })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime140.jsx)(
          FormField,
          {
            control: form.control,
            name: "password",
            render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime140.jsxs)(FormItem, { className: "relative", children: [
              /* @__PURE__ */ (0, import_jsx_runtime140.jsx)(FormLabel, { children: "Password" }),
              /* @__PURE__ */ (0, import_jsx_runtime140.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime140.jsx)(PasswordInput, { placeholder: "********", ...field }) }),
              /* @__PURE__ */ (0, import_jsx_runtime140.jsx)(FormMessage, {}),
              /* @__PURE__ */ (0, import_jsx_runtime140.jsx)(
                import_link6.default,
                {
                  href: "/forgot-password",
                  className: "absolute inset-e-0 -top-0.5 text-sm font-medium text-muted-foreground hover:opacity-75",
                  children: "Forgot password?"
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime140.jsxs)(Button, { className: "mt-2", disabled: isLoading || activeLoadingProvider !== null, children: [
          isLoading ? /* @__PURE__ */ (0, import_jsx_runtime140.jsx)(import_lucide_react78.Loader2, { className: "animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime140.jsx)(import_lucide_react78.LogIn, {}),
          "Sign in"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime140.jsxs)("div", { className: "relative my-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime140.jsx)("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ (0, import_jsx_runtime140.jsx)("span", { className: "w-full border-t" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime140.jsx)("div", { className: "relative flex justify-center text-xs uppercase", children: /* @__PURE__ */ (0, import_jsx_runtime140.jsx)("span", { className: "bg-background px-2 text-muted-foreground", children: "Or continue with" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime140.jsx)("div", { className: "space-y-2", children: activeProviders.length > 0 ? activeProviders.map((provider) => /* @__PURE__ */ (0, import_jsx_runtime140.jsxs)(
          Button,
          {
            variant: "outline",
            type: "button",
            className: "w-full",
            disabled: isLoading || activeLoadingProvider !== null,
            onClick: () => handleProviderLogin(provider),
            children: [
              activeLoadingProvider === provider.name ? /* @__PURE__ */ (0, import_jsx_runtime140.jsx)(import_lucide_react78.Loader2, { className: "h-4 w-4 animate-spin" }) : renderProviderIcon(provider),
              "Continue with ",
              provider.name
            ]
          },
          provider.id
        )) : /* @__PURE__ */ (0, import_jsx_runtime140.jsxs)(
          Button,
          {
            variant: "outline",
            type: "button",
            className: "w-full",
            disabled: isLoading || activeLoadingProvider !== null,
            onClick: () => handleProviderLogin({ name: "Google", preset: "google" }),
            children: [
              activeLoadingProvider === "Google" ? /* @__PURE__ */ (0, import_jsx_runtime140.jsx)(import_lucide_react78.Loader2, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime140.jsx)(import_fc2.FcGoogle, { className: "h-4 w-4" }),
              "Continue with Google"
            ]
          }
        ) })
      ]
    }
  ) });
}

// src/features/auth/sign-up/components/sign-up-form.tsx
var import_react38 = require("next-auth/react");
var import_react39 = require("react");
var import_zod3 = require("zod");
var import_react_hook_form3 = require("react-hook-form");
var import_zod4 = require("@hookform/resolvers/zod");
var import_lucide_react79 = require("lucide-react");
var import_sonner4 = require("sonner");
var import_fc3 = require("react-icons/fc");
var import_fa3 = require("react-icons/fa");
var import_navigation9 = require("next/navigation");
var import_jsx_runtime141 = require("react/jsx-runtime");
var formSchema2 = import_zod3.z.object({
  email: import_zod3.z.string().email("Please enter a valid email."),
  password: import_zod3.z.string().min(1, "Please enter your password.").min(7, "Password must be at least 7 characters long."),
  confirmPassword: import_zod3.z.string().min(1, "Please confirm your password.")
}).refine((data2) => data2.password === data2.confirmPassword, {
  message: "Passwords don't match.",
  path: ["confirmPassword"]
});
function SignUpForm({
  className,
  ...props
}) {
  const [isLoading, setIsLoading] = (0, import_react39.useState)(false);
  const [activeLoadingProvider, setActiveLoadingProvider] = (0, import_react39.useState)(null);
  const router = (0, import_navigation9.useRouter)();
  const searchParams = (0, import_navigation9.useSearchParams)();
  const emailParam = searchParams ? searchParams.get("email") || "" : "";
  const { setUser, setAccessToken } = useAuthStore((state) => state.auth);
  const [mounted, setMounted] = (0, import_react39.useState)(false);
  const { config } = useEmailSettingsStore();
  (0, import_react39.useEffect)(() => {
    setMounted(true);
  }, []);
  const authProviders = config?.authProviders || [];
  const activeProviders = mounted ? authProviders.filter((p) => p.isEnabled) : [];
  const renderProviderIcon = (provider) => {
    if (provider.iconUrl) {
      return /* @__PURE__ */ (0, import_jsx_runtime141.jsx)(
        "img",
        {
          src: provider.iconUrl,
          alt: provider.name,
          className: "h-4 w-4 object-contain shrink-0 rounded-xs"
        }
      );
    }
    const lower = provider.name.toLowerCase();
    if (lower.includes("google")) return /* @__PURE__ */ (0, import_jsx_runtime141.jsx)(import_fc3.FcGoogle, { className: "h-4 w-4 shrink-0" });
    if (lower.includes("github")) return /* @__PURE__ */ (0, import_jsx_runtime141.jsx)(import_fa3.FaGithub, { className: "h-4 w-4 shrink-0" });
    if (lower.includes("discord")) return /* @__PURE__ */ (0, import_jsx_runtime141.jsx)(import_fa3.FaDiscord, { className: "h-4 w-4 shrink-0 text-[#5865F2]" });
    if (lower.includes("apple")) return /* @__PURE__ */ (0, import_jsx_runtime141.jsx)(import_fa3.FaApple, { className: "h-4 w-4 shrink-0" });
    if (lower.includes("slack")) return /* @__PURE__ */ (0, import_jsx_runtime141.jsx)(import_fa3.FaSlack, { className: "h-4 w-4 shrink-0" });
    if (lower.includes("twitter") || lower.includes("x"))
      return /* @__PURE__ */ (0, import_jsx_runtime141.jsx)(import_fa3.FaTwitter, { className: "h-4 w-4 shrink-0 text-[#1DA1F2]" });
    return /* @__PURE__ */ (0, import_jsx_runtime141.jsx)(import_lucide_react79.ShieldCheck, { className: "h-4 w-4 shrink-0 text-sky-500" });
  };
  const handleProviderLogin = async (provider) => {
    const providerPreset = "preset" in provider && provider.preset ? provider.preset : provider.name.toLowerCase();
    const oauthProvider = providerPreset.includes("github") ? "github" : providerPreset.includes("discord") ? "discord" : providerPreset.includes("apple") ? "apple" : providerPreset.includes("slack") ? "slack" : providerPreset.includes("twitter") ? "twitter" : providerPreset.includes("google") ? "google" : providerPreset;
    setActiveLoadingProvider(provider.name);
    try {
      if (oauthProvider === "github") {
        const authProviderObj = provider;
        const clientId = authProviderObj.clientId;
        const clientSecret = authProviderObj.clientSecret;
        if (clientId) {
          if (typeof window !== "undefined" && clientSecret) {
            document.cookie = `auth_custom_github=${encodeURIComponent(
              JSON.stringify({ clientId, clientSecret })
            )}; path=/; max-age=600; SameSite=Lax`;
          }
          const redirectUri = `${window.location.origin}/api/auth/callback/github`;
          const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${encodeURIComponent(
            clientId
          )}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=read:user,user:email&state=/`;
          window.location.href = githubAuthUrl;
          return;
        }
      }
      if (oauthProvider === "google") {
        await (0, import_react38.signIn)("google", {
          callbackUrl: "/"
        });
      } else {
        await (0, import_react38.signIn)(oauthProvider, { callbackUrl: "/" });
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : `${provider.name} sign in failed. Please try again.`;
      console.error(`[SignUp Provider] Error:`, err);
      import_sonner4.toast.error(message);
    } finally {
      setActiveLoadingProvider(null);
    }
  };
  const form = (0, import_react_hook_form3.useForm)({
    resolver: (0, import_zod4.zodResolver)(formSchema2),
    defaultValues: {
      email: emailParam,
      password: "",
      confirmPassword: ""
    }
  });
  (0, import_react39.useEffect)(() => {
    if (emailParam) {
      form.setValue("email", emailParam);
    }
  }, [emailParam, form]);
  async function onSubmit(data2) {
    setIsLoading(true);
    try {
      const supabase = createClient2();
      const { data: authData, error } = await supabase.auth.signUp({
        email: data2.email,
        password: data2.password,
        options: {
          data: {
            name: data2.email.split("@")[0]
          }
        }
      });
      if (error) {
        if (error.message?.includes("already registered")) {
          import_sonner4.toast.error("This email is already registered. Please sign in instead.");
          router.push(`/sign-in?email=${encodeURIComponent(data2.email)}`);
          return;
        }
        throw error;
      }
      const user = authData.user;
      if (!user) throw new Error("Registration failed.");
      await new Promise((resolve) => setTimeout(resolve, 500));
      if (!authData.session) {
        import_sonner4.toast.info("Verification link sent! Please check your email.");
        router.replace("/auth/sign-in");
        return;
      }
      setUser({
        id: user.id,
        accountNo: user.id,
        email: user.email,
        name: user.user_metadata?.name || user.email.split("@")[0],
        picture: user.user_metadata?.avatar_url || void 0,
        role: ["user"],
        exp: Date.now() + 24 * 60 * 60 * 1e3
      });
      setAccessToken(authData.session.access_token);
      router.replace("/");
      import_sonner4.toast.success(`Account created for ${data2.email}!`);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Registration failed. Please try again.";
      console.error("Signup error:", err);
      import_sonner4.toast.error(message);
    } finally {
      setIsLoading(false);
    }
  }
  return /* @__PURE__ */ (0, import_jsx_runtime141.jsx)(Form, { ...form, children: /* @__PURE__ */ (0, import_jsx_runtime141.jsxs)(
    "form",
    {
      onSubmit: form.handleSubmit(onSubmit),
      className: cn("grid gap-3", className),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime141.jsx)(
          FormField,
          {
            control: form.control,
            name: "email",
            render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime141.jsxs)(FormItem, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime141.jsx)(FormLabel, { children: "Email" }),
              /* @__PURE__ */ (0, import_jsx_runtime141.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime141.jsx)(Input, { placeholder: "name@example.com", ...field }) }),
              /* @__PURE__ */ (0, import_jsx_runtime141.jsx)(FormMessage, {})
            ] })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime141.jsx)(
          FormField,
          {
            control: form.control,
            name: "password",
            render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime141.jsxs)(FormItem, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime141.jsx)(FormLabel, { children: "Password" }),
              /* @__PURE__ */ (0, import_jsx_runtime141.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime141.jsx)(PasswordInput, { placeholder: "********", ...field }) }),
              /* @__PURE__ */ (0, import_jsx_runtime141.jsx)(FormMessage, {})
            ] })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime141.jsx)(
          FormField,
          {
            control: form.control,
            name: "confirmPassword",
            render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime141.jsxs)(FormItem, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime141.jsx)(FormLabel, { children: "Confirm Password" }),
              /* @__PURE__ */ (0, import_jsx_runtime141.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime141.jsx)(PasswordInput, { placeholder: "********", ...field }) }),
              /* @__PURE__ */ (0, import_jsx_runtime141.jsx)(FormMessage, {})
            ] })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime141.jsxs)(Button, { className: "mt-2", disabled: isLoading || activeLoadingProvider !== null, children: [
          isLoading ? /* @__PURE__ */ (0, import_jsx_runtime141.jsx)(import_lucide_react79.Loader2, { className: "animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime141.jsx)(import_lucide_react79.UserPlus, {}),
          "Create Account"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime141.jsxs)("div", { className: "relative my-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime141.jsx)("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ (0, import_jsx_runtime141.jsx)("span", { className: "w-full border-t" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime141.jsx)("div", { className: "relative flex justify-center text-xs uppercase", children: /* @__PURE__ */ (0, import_jsx_runtime141.jsx)("span", { className: "bg-background px-2 text-muted-foreground", children: "Or continue with" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime141.jsx)("div", { className: "space-y-2", children: activeProviders.length > 0 ? activeProviders.map((provider) => /* @__PURE__ */ (0, import_jsx_runtime141.jsxs)(
          Button,
          {
            variant: "outline",
            type: "button",
            className: "w-full",
            disabled: isLoading || activeLoadingProvider !== null,
            onClick: () => handleProviderLogin(provider),
            children: [
              activeLoadingProvider === provider.name ? /* @__PURE__ */ (0, import_jsx_runtime141.jsx)(import_lucide_react79.Loader2, { className: "h-4 w-4 animate-spin" }) : renderProviderIcon(provider),
              "Continue with ",
              provider.name
            ]
          },
          provider.id
        )) : /* @__PURE__ */ (0, import_jsx_runtime141.jsxs)(
          Button,
          {
            variant: "outline",
            type: "button",
            className: "w-full",
            disabled: isLoading || activeLoadingProvider !== null,
            onClick: () => handleProviderLogin({ name: "Google", preset: "google" }),
            children: [
              activeLoadingProvider === "Google" ? /* @__PURE__ */ (0, import_jsx_runtime141.jsx)(import_lucide_react79.Loader2, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime141.jsx)(import_fc3.FcGoogle, { className: "h-4 w-4" }),
              "Continue with Google"
            ]
          }
        ) })
      ]
    }
  ) });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AiChatHeader,
  AiChatInput,
  AiMessageBubble,
  AiMessageList,
  AiModelSelector,
  AiPromptSuggestions,
  AiToolSelector,
  Alert,
  AlertDescription,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertTitle,
  AppHeader,
  AppLogo,
  AppSidebar,
  AppTitle,
  AreaChartDemo,
  AspectRatio,
  AuthenticatedLayout,
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
  Badge,
  BarChartDemo,
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
  CHART_TOKENS,
  Calendar,
  CalendarDayButton,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
  ChatBubble,
  ChatCardItem,
  ChatEmptyState,
  ChatHeader,
  ChatInput,
  ChatMessageList,
  ChatSidebar,
  Checkbox,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  ConfirmDialog,
  ContactManager,
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
  DEFAULT_AI_MODELS,
  DEFAULT_AI_PROMPTS,
  DEFAULT_AI_TOOLS,
  DashboardTemplate,
  DataTable,
  DatePicker,
  DetailTemplate,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  EmailSettingsFeature,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
  FileCardItem,
  FileUploadForm,
  FilterBar,
  FolderTreeItem,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormSection,
  FormTemplate,
  GroupManager,
  Header,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
  Kbd,
  KbdGroup,
  Label,
  LineChartDemo,
  ListTemplate,
  LongText,
  Main,
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
  MetricCard,
  NavGroup,
  NavUser,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  PageHeader,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PasswordInput,
  PieChartDemo,
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
  Progress,
  QRCodeDisplay,
  QrCodeDisplay,
  RadioGroup,
  RadioGroupItem,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  SEMANTIC_TOKENS,
  SIDEBAR_TOKENS,
  ScrollArea,
  ScrollBar,
  Search,
  Select,
  SelectContent,
  SelectDropdown,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  Separator,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSearch,
  SidebarSeparator,
  SidebarTrigger,
  SignOutDialog,
  SignUpForm,
  Skeleton,
  Slider,
  Sonner,
  Spinner,
  Stats01,
  StatusBadge,
  StorageStatCard,
  Switch,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  TeamSwitcher,
  Textarea,
  ThemeSelector,
  ThemeSwitch,
  Toaster,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TopNav,
  TypingIndicator,
  UserAuthForm,
  UserFileCardsView,
  WizardTemplate,
  WorkspaceTemplate,
  badgeVariants,
  buttonGroupVariants,
  buttonVariants,
  downloadQrCode,
  formatBytes,
  formatTimeAgo,
  getFileCategoryTheme,
  navigationMenuTriggerStyle,
  sidebarData,
  statusBadgeVariants,
  tabsListVariants,
  toggleVariants,
  useEmailSettingsStore,
  useFormField,
  useSidebar
});
//# sourceMappingURL=index.js.map