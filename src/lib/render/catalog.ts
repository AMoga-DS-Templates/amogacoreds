import { defineCatalog } from "@json-render/core";
import { schema } from "@json-render/react/schema";
import { z } from "zod";

const baseChartProps = {
  data: z.array(z.record(z.string(), z.unknown())).nullable(),
  series: z.array(
    z.object({
      dataKey: z.string(),
      label: z.string().nullable(),
      color: z.string().nullable(),
    }),
  ).nullable(),
  categoryKey: z.string().nullable(),
  className: z.string().nullable(),
  height: z.number().nullable(),
  showGrid: z.boolean().nullable(),
  showLegend: z.boolean().nullable(),
};

const statsChartProps = {
  summary: z.array(z.record(z.string(), z.unknown())).nullable(),
  className: z.string().nullable(),
};

const baseUiProps = z
  .object({
    className: z.string().nullable(),
    title: z.string().nullable(),
    description: z.string().nullable(),
    text: z.string().nullable(),
    label: z.string().nullable(),
    variant: z.string().nullable(),
  })
  .passthrough();

/**
 * Web playground component catalog
 *
 * This defines the components available for AI generation in the playground.
 * Components and actions are implemented in lib/registry.tsx via defineRegistry.
 *
 * Keep schemas simple — one format per prop, no unions.
 * Fewer components = less confusion for the AI.
 */
export const playgroundCatalog = defineCatalog(schema, {
  components: {
    // ── Layout ──────────────────────────────────────────────────────────
    Card: {
      props: z.object({
        title: z.string().nullable(),
        description: z.string().nullable(),
        maxWidth: z.enum(["sm", "md", "lg", "full"]).nullable(),
        centered: z.boolean().nullable(),
      }),
      slots: ["default"],
      description:
        "Container card for content sections. Use for forms/content boxes, NOT for page headers.",
      example: { title: "Overview", description: "Your account summary" },
    },

    Stack: {
      props: z.object({
        direction: z.enum(["horizontal", "vertical"]).nullable(),
        gap: z.enum(["none", "sm", "md", "lg"]).nullable(),
        align: z.enum(["start", "center", "end", "stretch"]).nullable(),
        justify: z
          .enum(["start", "center", "end", "between", "around"])
          .nullable(),
      }),
      slots: ["default"],
      description: "Flex container for layouts",
      example: { direction: "vertical", gap: "md" },
    },

    Form: {
      props: z.object({
        className: z.string().nullable(),
      }),
      slots: ["default"],
      events: ["submit"],
      description: "Form container for inputs and submit actions",
    },

    Grid: {
      props: z.object({
        columns: z.number().nullable(),
        gap: z.enum(["sm", "md", "lg"]).nullable(),
      }),
      slots: ["default"],
      description: "Grid layout (1-6 columns)",
      example: { columns: 3, gap: "md" },
    },

    Separator: {
      props: z.object({
        orientation: z.enum(["horizontal", "vertical"]).nullable(),
      }),
      description: "Visual separator line",
    },

    Tabs: {
      props: z.object({
        tabs: z.array(
          z.object({
            label: z.string(),
            value: z.string(),
          }),
        ),
        defaultValue: z.string().nullable(),
        value: z.string().nullable(),
      }),
      slots: ["default"],
      events: ["change"],
      description:
        "Tab navigation. Use { $bindState } on value for active tab binding.",
    },

    Accordion: {
      props: z.object({
        items: z.array(
          z.object({
            title: z.string(),
            content: z.string(),
          }),
        ),
        type: z.enum(["single", "multiple"]).nullable(),
      }),
      description:
        "Collapsible sections. Items as [{title, content}]. Type 'single' (default) or 'multiple'.",
    },

    Collapsible: {
      props: z.object({
        title: z.string(),
        defaultOpen: z.boolean().nullable(),
      }),
      slots: ["default"],
      description: "Collapsible section with trigger. Children render inside.",
    },

    Dialog: {
      props: z.object({
        title: z.string(),
        description: z.string().nullable(),
        openPath: z.string(),
      }),
      slots: ["default"],
      description:
        "Modal dialog. Set openPath to a boolean state path. Use setState to toggle.",
    },

    Drawer: {
      props: z.object({
        title: z.string(),
        description: z.string().nullable(),
        openPath: z.string(),
      }),
      slots: ["default"],
      description:
        "Bottom sheet drawer. Set openPath to a boolean state path. Use setState to toggle.",
    },

    Carousel: {
      props: z.object({
        items: z.array(
          z.object({
            title: z.string().nullable(),
            description: z.string().nullable(),
          }),
        ),
      }),
      description: "Horizontally scrollable carousel of cards.",
    },

    // ── Data Display ────────────────────────────────────────────────────
    Table: {
      props: z.object({
        columns: z.array(z.string()),
        rows: z.array(z.array(z.string())),
        caption: z.string().nullable(),
      }),
      description:
        'Data table. columns: header labels. rows: 2D array of cell strings, e.g. [["Alice","admin"],["Bob","user"]].',
      example: {
        columns: ["Name", "Role"],
        rows: [
          ["Alice", "Admin"],
          ["Bob", "User"],
        ],
      },
    },

    Heading: {
      props: z.object({
        text: z.string(),
        level: z.enum(["h1", "h2", "h3", "h4"]).nullable(),
      }),
      description: "Heading text (h1-h4)",
      example: { text: "Welcome", level: "h1" },
    },

    Text: {
      props: z.object({
        text: z.string(),
        variant: z
          .enum(["body", "caption", "muted", "lead", "code"])
          .nullable(),
      }),
      description:
        'Paragraph text. In repeat scopes, use { "$template": "${field1} ${field2}" } to interpolate item fields.',
      example: { text: "Hello, world!" },
    },

    Image: {
      props: z.object({
        alt: z.string(),
        width: z.number().nullable(),
        height: z.number().nullable(),
      }),
      description: "Placeholder image (displays alt text in a styled box)",
    },

    Icon: {
      props: z.object({
        name: z.string(),
        size: z.enum(["sm", "md", "lg"]).nullable(),
        color: z
          .enum(["default", "muted", "primary", "success", "warning", "danger"])
          .nullable(),
      }),
      description:
        "Lucide icon by name. PascalCase: MapPin, Mail, Globe, Calendar, Star, Heart, Check, X, ArrowRight, Phone, Building, Clock, Shield, Zap, Users, Eye, Download, Upload, Search, Filter, Settings, Bell, ChevronRight, ExternalLink, Info, AlertTriangle, CheckCircle, XCircle. Use in horizontal Stacks with Text for icon+label patterns. Never use emoji — always use Icon.",
    },

    Avatar: {
      props: z.object({
        src: z.string().nullable(),
        name: z.string(),
        size: z.enum(["sm", "md", "lg"]).nullable(),
      }),
      description: "User avatar with fallback initials",
      example: { name: "Jane Doe", size: "md" },
    },

    Badge: {
      props: z.object({
        text: z.string(),
        variant: z.enum(["default", "success", "warning", "danger"]).nullable(),
      }),
      description: "Status badge",
      example: { text: "Active", variant: "success" },
    },

    Alert: {
      props: z.object({
        title: z.string(),
        message: z.string().nullable(),
        type: z.enum(["info", "success", "warning", "error"]).nullable(),
      }),
      description: "Alert banner",
      example: {
        title: "Note",
        message: "Your changes have been saved.",
        type: "success",
      },
    },

    Progress: {
      props: z.object({
        value: z.number(),
        max: z.number().nullable(),
        label: z.string().nullable(),
      }),
      description: "Progress bar (value 0-100)",
      example: { value: 65, max: 100, label: "Upload progress" },
    },

    Skeleton: {
      props: z.object({
        width: z.string().nullable(),
        height: z.string().nullable(),
        rounded: z.boolean().nullable(),
      }),
      description: "Loading placeholder skeleton",
    },

    Spinner: {
      props: z.object({
        size: z.enum(["sm", "md", "lg"]).nullable(),
        label: z.string().nullable(),
      }),
      description: "Loading spinner indicator",
    },

    Tooltip: {
      props: z.object({
        content: z.string(),
        text: z.string(),
      }),
      description: "Hover tooltip. Shows content on hover over text.",
    },

    Popover: {
      props: z.object({
        trigger: z.string(),
        content: z.string(),
      }),
      description: "Popover that appears on click of trigger.",
    },

    Rating: {
      props: z.object({
        value: z.number(),
        max: z.number().nullable(),
        label: z.string().nullable(),
        interactive: z.boolean().nullable(),
      }),
      events: ["change"],
      description:
        "Interactive star rating. Use { $bindState } on value for binding. Set interactive: false for read-only display.",
      example: { value: 4, max: 5, label: "Rating" },
    },

    Metric: {
      props: z.object({
        label: z.string(),
        value: z.string(),
        change: z.string().nullable(),
        changeType: z.enum(["positive", "negative", "neutral"]).nullable(),
        prefix: z.string().nullable(),
        suffix: z.string().nullable(),
      }),
      description:
        "Key metric / stat display. Shows a large value with label and optional change indicator. Use for dashboard KPIs.",
      example: {
        label: "Total Revenue",
        value: "125,000",
        prefix: "$",
        change: "+12.5%",
        changeType: "positive",
      },
    },

    // ── Charts ──────────────────────────────────────────────────────────
    BarChart: { props: z.object(baseChartProps), description: "Base bar chart" },
    BarChartCondensed: { props: z.object(baseChartProps), description: "Condensed bar chart" },
    BarChartMixed: { props: z.object(baseChartProps), description: "Mixed bar chart" },
    BarChartMultiple: { props: z.object(baseChartProps), description: "Multiple-series bar chart" },
    LineChart: { props: z.object(baseChartProps), description: "Base line chart" },
    LineChartCondensed: { props: z.object(baseChartProps), description: "Condensed line chart" },
    LineChartDotsColors: { props: z.object(baseChartProps), description: "Line chart with colored dots" },
    LineChartLabel: { props: z.object(baseChartProps), description: "Line chart with labels" },
    AreaChart: { props: z.object({ ...baseChartProps, showAxes: z.boolean().nullable(), gradientFill: z.boolean().nullable(), fillOpacity: z.number().nullable() }), description: "Area chart" },
    AreaChartCondensed: { props: z.object(baseChartProps), description: "Condensed area chart" },
    AreaChartAxes: { props: z.object(baseChartProps), description: "Area chart with axes" },
    AreaChartGradient: { props: z.object(baseChartProps), description: "Gradient area chart" },
    RadarChart: { props: z.object(baseChartProps), description: "Radar chart" },
    PieChart: { props: z.object({ data: z.array(z.record(z.string(), z.unknown())).nullable(), className: z.string().nullable(), height: z.number().nullable(), innerRadius: z.unknown().nullable(), showLegend: z.boolean().nullable() }), description: "Pie chart" },
    PieChartDonut: { props: z.object({ data: z.array(z.record(z.string(), z.unknown())).nullable(), className: z.string().nullable(), height: z.number().nullable(), innerRadius: z.unknown().nullable(), showLegend: z.boolean().nullable() }), description: "Donut chart" },
    PieChartDonutActive: { props: z.object({ data: z.array(z.record(z.string(), z.unknown())).nullable(), className: z.string().nullable(), height: z.number().nullable(), innerRadius: z.unknown().nullable(), showLegend: z.boolean().nullable() }), description: "Interactive donut chart" },
    RadialChart: { props: z.object({ data: z.array(z.record(z.string(), z.unknown())).nullable(), className: z.string().nullable(), height: z.number().nullable(), innerRadius: z.unknown().nullable(), showLegend: z.boolean().nullable(), centerLabel: z.string().nullable() }), description: "Radial chart" },
    RadialChartStacked: { props: z.object({ data: z.array(z.record(z.string(), z.unknown())).nullable(), className: z.string().nullable(), height: z.number().nullable(), innerRadius: z.unknown().nullable(), showLegend: z.boolean().nullable(), centerLabel: z.string().nullable() }), description: "Stacked radial chart" },
    RadialChartText: { props: z.object({ data: z.array(z.record(z.string(), z.unknown())).nullable(), className: z.string().nullable(), height: z.number().nullable(), innerRadius: z.unknown().nullable(), showLegend: z.boolean().nullable(), centerLabel: z.string().nullable() }), description: "Radial chart with text" },
    ScatterChart: { props: z.object({ data: z.array(z.record(z.string(), z.unknown())).nullable(), className: z.string().nullable(), height: z.number().nullable() }), description: "Scatter chart" },
    GaugeChartLiveUpdates: { props: z.object({ percent: z.unknown().nullable(), className: z.string().nullable(), label: z.string().nullable() }), description: "Live gauge chart" },
    GaugeChartTwentyLevels: { props: z.object({ percent: z.unknown().nullable(), className: z.string().nullable(), label: z.string().nullable() }), description: "Twenty-level gauge chart" },
    GanttTaskChart: { props: z.object({ tasks: z.array(z.record(z.string(), z.unknown())).nullable(), title: z.string().nullable(), className: z.string().nullable() }), description: "Task timeline chart" },
    StatsUsageDashboard: { props: z.object(statsChartProps), description: "Usage statistics dashboard" },
    StatswithAreaChart: { props: z.object(statsChartProps), description: "Statistics with area charts" },
    StatswithBarChart: { props: z.object(statsChartProps), description: "Statistics with bar charts" },
    StatswithLineChart: { props: z.object(statsChartProps), description: "Statistics with line charts" },
    StatswithPieChart: { props: z.object(statsChartProps), description: "Statistics with pie charts" },

    // ── Base UI blocks ─────────────────────────────────────────────────
    AlertDialogBlock: { props: baseUiProps, slots: ["default"], description: "Alert confirmation dialog" },
    Buttons: { props: baseUiProps, slots: ["default"], description: "Group of buttons" },
    CalendarBlock: { props: baseUiProps, description: "Calendar block" },
    CardHeader: { props: baseUiProps, slots: ["default"], description: "Card header content" },
    ChatFileCard: { props: baseUiProps, slots: ["default"], description: "File card for chat" },
    ChatFileCardAction: { props: baseUiProps, description: "File card action" },
    CheckBoxItem: { props: baseUiProps, description: "Checkbox item" },
    CheckBoxGroup: { props: baseUiProps, description: "Checkbox group" },
    CodeBlock: { props: baseUiProps, slots: ["default"], description: "Code display block" },
    DialogBlock: { props: baseUiProps, slots: ["default"], description: "Dialog block" },
    DownloadViewCard: { props: baseUiProps, description: "Download and view file card" },
    DownloadViewCardBlock: { props: baseUiProps, description: "Download and view file card" },
    DrawerBlock: { props: baseUiProps, slots: ["default"], description: "Drawer block" },
    FollowUpItem: { props: baseUiProps, description: "Follow-up action item" },
    FollowUpBlock: { props: baseUiProps, slots: ["default"], description: "Follow-up actions" },
    FormControl: { props: baseUiProps, slots: ["default"], description: "Form control wrapper" },
    HorizontalAlternateTimeline: { props: baseUiProps, description: "Horizontal timeline" },
    ImageBlock: { props: baseUiProps, description: "Image with caption" },
    MarkDownRenderer: { props: baseUiProps, description: "Markdown content renderer" },
    PaginationBlock: { props: baseUiProps, description: "Pagination block" },
    ProductCard: { props: baseUiProps, slots: ["default"], description: "Product card" },
    StatswithBadges: { props: baseUiProps, description: "Statistics with badges" },
    StatswithBorders: { props: baseUiProps, description: "Statistics with borders" },
    StatswithCardLayout: { props: baseUiProps, description: "Statistics card layout" },
    StatswithCircularProgress: { props: baseUiProps, description: "Statistics with circular progress" },
    StatswithLinks: { props: baseUiProps, description: "Statistics with links" },
    StatswithMap: { props: baseUiProps, description: "Statistics with map" },
    StatswithStatus: { props: baseUiProps, description: "Statistics with status" },
    StatswithTrending: { props: baseUiProps, description: "Statistics with trends" },
    SwitchItem: { props: baseUiProps, description: "Switch item" },
    SwitchGroup: { props: baseUiProps, description: "Switch group" },
    TablewithAccordion: { props: baseUiProps, description: "Accordion table" },
    Tag: { props: baseUiProps, slots: ["default"], description: "Tag label" },
    TagBlock: { props: baseUiProps, slots: ["default"], description: "Tag group" },
    TextContent: { props: baseUiProps, slots: ["default"], description: "Text content block" },
    Blockquote: { props: baseUiProps, slots: ["default"], description: "Block quote" },
    InlineCode: { props: baseUiProps, slots: ["default"], description: "Inline code" },
    VerticalTimeline: { props: baseUiProps, description: "Vertical timeline" },

    // ── Form Inputs ─────────────────────────────────────────────────────
    Input: {
      props: z.object({
        label: z.string(),
        name: z.string(),
        type: z.enum(["text", "email", "password", "number"]).nullable(),
        placeholder: z.string().nullable(),
        value: z.string().nullable(),
        checks: z
          .array(
            z.object({
              type: z.string(),
              message: z.string(),
              args: z.record(z.string(), z.unknown()).optional(),
            }),
          )
          .nullable(),
      }),
      events: ["submit", "focus", "blur"],
      description:
        "Text input field. Use { $bindState } on value for two-way binding. Use checks for validation (e.g. required, email, minLength).",
      example: {
        label: "Email",
        name: "email",
        type: "email",
        placeholder: "you@example.com",
      },
    },

    Textarea: {
      props: z.object({
        label: z.string(),
        name: z.string(),
        placeholder: z.string().nullable(),
        rows: z.number().nullable(),
        value: z.string().nullable(),
        checks: z
          .array(
            z.object({
              type: z.string(),
              message: z.string(),
              args: z.record(z.string(), z.unknown()).optional(),
            }),
          )
          .nullable(),
      }),
      description:
        "Multi-line text input. Use { $bindState } on value for binding. Use checks for validation.",
    },

    Select: {
      props: z.object({
        label: z.string(),
        name: z.string(),
        options: z.array(z.string()),
        placeholder: z.string().nullable(),
        value: z.string().nullable(),
        checks: z
          .array(
            z.object({
              type: z.string(),
              message: z.string(),
              args: z.record(z.string(), z.unknown()).optional(),
            }),
          )
          .nullable(),
      }),
      events: ["change"],
      description:
        "Dropdown select input. Use { $bindState } on value for binding. Use checks for validation.",
    },

    Checkbox: {
      props: z.object({
        label: z.string(),
        name: z.string(),
        checked: z.boolean().nullable(),
      }),
      events: ["change"],
      description: "Checkbox input. Use { $bindState } on checked for binding.",
    },

    Radio: {
      props: z.object({
        label: z.string(),
        name: z.string(),
        options: z.array(z.string()),
        value: z.string().nullable(),
      }),
      events: ["change"],
      description:
        "Radio button group. Use { $bindState } on value for binding.",
    },

    Switch: {
      props: z.object({
        label: z.string(),
        name: z.string(),
        checked: z.boolean().nullable(),
      }),
      events: ["change"],
      description: "Toggle switch. Use { $bindState } on checked for binding.",
    },

    Slider: {
      props: z.object({
        label: z.string().nullable(),
        min: z.number().nullable(),
        max: z.number().nullable(),
        step: z.number().nullable(),
        value: z.number().nullable(),
      }),
      events: ["change"],
      description:
        "Range slider input. Use { $bindState } on value for binding.",
    },

    // ── Actions ─────────────────────────────────────────────────────────
    Button: {
      props: z.object({
        label: z.string(),
        variant: z
          .enum(["primary", "secondary", "outline", "danger"])
          .nullable(),
        disabled: z.boolean().nullable(),
      }),
      events: ["press"],
      description:
        "Clickable button. primary = solid fill, outline = bordered/transparent, secondary = muted fill. Bind on.press for handler.",
      example: { label: "Submit", variant: "primary" },
    },

    Link: {
      props: z.object({
        label: z.string(),
        href: z.string(),
      }),
      events: ["press"],
      description: "Anchor link. Bind on.press for click handler.",
    },

    DropdownMenu: {
      props: z.object({
        label: z.string(),
        items: z.array(
          z.object({
            label: z.string(),
            value: z.string(),
          }),
        ),
      }),
      events: ["select"],
      description: "Dropdown menu with trigger button and selectable items.",
    },

    Toggle: {
      props: z.object({
        label: z.string(),
        pressed: z.boolean().nullable(),
        variant: z.enum(["default", "outline"]).nullable(),
      }),
      events: ["change"],
      description:
        "Toggle button. Use { $bindState } on pressed for state binding.",
    },

    ToggleGroup: {
      props: z.object({
        items: z.array(
          z.object({
            label: z.string(),
            value: z.string(),
          }),
        ),
        type: z.enum(["single", "multiple"]).nullable(),
        value: z.string().nullable(),
      }),
      events: ["change"],
      description:
        "Group of toggle buttons. Type 'single' (default) or 'multiple'. Use { $bindState } on value.",
    },

    ButtonGroup: {
      props: z.object({
        buttons: z.array(
          z.object({
            label: z.string(),
            value: z.string(),
          }),
        ),
        selected: z.string().nullable(),
      }),
      events: ["change"],
      description:
        "Segmented button group. Use { $bindState } on selected for selected value.",
    },

    Pagination: {
      props: z.object({
        totalPages: z.number(),
        page: z.number().nullable(),
      }),
      events: ["change"],
      description:
        "Page navigation. Use { $bindState } on page for current page number.",
    },
  },

  actions: {
    setState: {
      params: z.object({
        statePath: z.string(),
        value: z.unknown(),
      }),
      description: "Update a value in the state model at the given statePath.",
    },

    pushState: {
      params: z.object({
        statePath: z.string(),
        value: z.unknown(),
        clearStatePath: z.string().optional(),
      }),
      description:
        'Append an item to an array in state. Value can contain {"$state":"/statePath"} refs and "$id" for auto IDs. clearStatePath resets another path after pushing.',
    },

    removeState: {
      params: z.object({
        statePath: z.string(),
        index: z.number(),
      }),
      description: "Remove an item from an array in state at the given index.",
    },

    buttonClick: {
      params: z.object({
        message: z.string().nullable(),
      }),
      description: "Shows a toast with the message.",
    },

    formSubmit: {
      params: z.object({
        formName: z.string().nullable(),
      }),
      description: "Shows a toast confirming form submission.",
    },

    linkClick: {
      params: z.object({
        href: z.string(),
      }),
      description: "Shows a toast with the link destination.",
    },
  },
});
