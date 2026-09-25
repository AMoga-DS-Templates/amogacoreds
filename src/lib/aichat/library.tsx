"use client";

import type { ComponentGroup } from "./json-component";
import { createLibrary, defineComponent } from "./json-component";
import { z } from "zod";

// Content
import { Alert } from "./ui/alert";
import { Avatar } from "./ui/avatar";
import { ShadcnBadgeComponent } from "./ui/badge";
import { CardHeader } from "./ui/card-header";
import { ChatFileCard, ChatFileCardAction } from "./ui/chat-file-card";
import { CodeBlock } from "./ui/code-block";
import { Image, ImageBlock } from "./ui/image";
import { MarkDownRenderer } from "./ui/markdown-renderer";
import { Map, MapMarker } from "./ui/map";
import { ProductCard } from "./ui/product-card";
import { Progress } from "./ui/progress";
import { Separator } from "./ui/separator";
import { StatsUsageDashboard } from "./ui/StatsUsageDashboard";
import { StatswithAreaChart } from "./ui/StatswithAreaChart";
import { StatswithBadges } from "./ui/StatswithBadges";
import { StatswithBarChart } from "./ui/StatswithBarChart";
import { StatswithBorders } from "./ui/StatswithBorders";
import { StatswithCardLayout } from "./ui/StatswithCardLayout";
import { StatswithCircularProgress } from "./ui/StatswithCircularProgress";
import { StatswithLineChart } from "./ui/StatswithLineChart";
import { StatswithLinks } from "./ui/StatswithLinks";
import { StatswithMap } from "./ui/StatswithMap";
import { StatswithPieChart } from "./ui/StatswithPieChart";
import { StatswithStatus } from "./ui/StatswithStatus";
import { StatswithTrending } from "./ui/StatswithTrending";
import { TextContent } from "./ui/text-content";

// Charts
import {
  AreaChartCondensed,
  AreaChartAxesComponent,
  AreaChartGradientComponent,
  BarChartMixedComponent,
  BarChartMultipleComponent,
  BarChartCondensed,
  LineChartDotsColorsComponent,
  LineChartLabelComponent,
  LineChartCondensed,
  PieChartDonutActiveComponent,
  PieChartDonutComponent,
  PieChartComponent,
  Point,
  RadarChartComponent,
  RadialChartStackedComponent,
  RadialChartTextComponent,
  RadialChartComponent,
  ScatterChartComponent,
  ScatterSeries,
  Series,
  Slice,
} from "./ui/charts";

// Forms
import { CheckBoxGroup, CheckBoxItem } from "./ui/checkbox-group";
import { DatePicker } from "./ui/date-picker";
import { Form } from "./ui/form";
import { FormControl } from "./ui/form-control";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioItem } from "./ui/radio-group";
import { Select, SelectItem } from "./ui/select";
import { Slider } from "./ui/slider";
import { SwitchGroup, SwitchItem } from "./ui/switch-group";
import { TextArea } from "./ui/textarea";

// Buttons
import { Button } from "./ui/button";
import { Buttons } from "./ui/buttons";

// Layout
import { Accordion, AccordionItemDef } from "./ui/accordion";
import { Carousel } from "./ui/carousel";
import { TabItem, Tabs } from "./ui/tabs";

// Data Display
import { Col, Table } from "./ui/table";
import { TablewithAccordion } from "./ui/TablewithAccordion";
import { Tag, TagBlock } from "./ui/tag";

// Chat-specific
import { FollowUpBlock, FollowUpItem } from "./ui/follow-up-block";
import { GaugeChartLiveUpdates, GaugeChartTwentyLevels } from "./ui/gauges";
import { GanttTaskChartComponent } from "./ui/gantt-task-chart";

// New components
import { AlertDialogBlock } from "./ui/alert-dialog-block";
import { CalendarBlock } from "./ui/calendar-block";
import { DialogBlock } from "./ui/dialog-block";
import { DownloadViewCardBlock } from "./ui/download-view-card";
import { DrawerBlock } from "./ui/drawer-block";
import { PaginationBlock } from "./ui/pagination-block";
import { Blockquote, Heading, InlineCode } from "./ui/typography";
import { HorizontalAlternateTimeline } from "./ui/HorizontalAlternateTimeline";
import { VerticalTimeline } from "./ui/verticleTimeline";

import { ChatContentChildUnion } from "./unions";

const ChatCardChildUnion = z.union([...ChatContentChildUnion.options, Tabs.ref, Carousel.ref]);

const ChatCard = defineComponent({
  name: "Card",
  props: z.object({
    children: z.array(ChatCardChildUnion),
  }),
  description:
    "Vertical container for all content in a chat response. Children stack top to bottom automatically.",
  component: ({ props, renderNode }) => (
    <div className="w-full space-y-4 px-0">{renderNode(props.children)}</div>
  ),
});

// â”€â”€ Component Groups â”€â”€

export const shadcnComponentGroups: ComponentGroup[] = [
  {
    name: "Content",
    components: [
      "CardHeader",
      "TextContent",
      "MarkDownRenderer",
      "Alert",
      "Badge",
      "Avatar",
      "ChatFileCard",
      "ChatFileCardAction",
      "DownloadViewCard",
      "CodeBlock",
      "Image",
      "ImageBlock",
      "ProductCard",
      "Progress",
      "Separator",
    ],
  },
  {
    name: "Commerce",
    components: ["ProductCard"],
    notes: [
      "- Use ProductCard for POS/cart-style product results with image, price, stock, and add button.",
      "- Use real product data only. Do not invent product names, prices, images, or stock.",
    ],
  },
  {
    name: "Tables",
    components: ["Table", "Col"],
    notes: [
      "- Table rows must contain only primitive cell values: string, number, or boolean.",
      "- Do NOT place Badge, Button, Alert, or any other component inside Table rows.",
      "- Every column must have a non-empty header, and every row must provide values in the same order as the columns.",
      "- For record lists, include useful identifying columns such as ID, name, or date in addition to the metric being sorted.",
    ],
  },
  {
    name: "Maps",
    components: ["Map", "MapMarker"],
    notes: [
      "- Map renders an interactive Leaflet map using OpenStreetMap tiles.",
      "- Use MapMarker references with title, latitude, and longitude.",
      "- Optional subtitle and description appear inside the marker popup.",
    ],
  },
  {
    name: "Charts (2D)",
    components: ["BarChart", "BarChartMixed", "BarChartMultiple", "LineChart", "LineChartDotsColors", "LineChartLabel", "AreaChart", "AreaChartAxes", "AreaChartGradient", "RadarChart", "Series", "GanttTaskChart"],
  },
  {
    name: "Charts (1D)",
    components: ["PieChart", "PieChartDonut", "PieChartDonutActive", "RadialChart", "RadialChartStacked", "RadialChartText", "Slice", "GaugeChartLiveUpdates", "GaugeChartTwentyLevels"],
  },
  {
    name: "Charts (Scatter)",
    components: ["ScatterChart", "ScatterSeries", "Point"],
  },
  {
    name: "Stats",
    components: [
      "StatswithTrending",
      "StatswithBorders",
      "StatswithCardLayout",
      "StatswithBadges",
      "StatswithCircularProgress",
      "StatswithAreaChart",
      "StatswithBarChart",
      "StatswithLineChart",
      "StatswithPieChart",
      "StatswithMap",
      "StatswithLinks",
      "StatswithStatus",
      "StatsUsageDashboard",
    ],
    notes: [
      "- Use Stats components for compact KPI summaries and dashboard-style metric blocks.",
      '- Trend fields use "positive"/"negative" or "up"/"down" exactly as documented by each component.',
      "- Keep values preformatted as strings when they include currency, percent signs, commas, or units.",
    ],
  },
  {
    name: "Forms",
    components: [
      "Form",
      "FormControl",
      "Label",
      "Input",
      "TextArea",
      "Select",
      "SelectItem",
      "DatePicker",
      "Slider",
      "CheckBoxGroup",
      "CheckBoxItem",
      "RadioGroup",
      "RadioItem",
      "SwitchGroup",
      "SwitchItem",
    ],
    notes: [
      "- Define EACH FormControl as its own reference â€” do NOT inline all controls in one array.",
      "- NEVER nest Form inside Form.",
      "- Form requires explicit buttons. Always pass a Buttons(...) reference as the third Form argument.",
      "- rules is an optional object: { required: true, email: true, min: 8, maxLength: 100 }",
      "- The renderer shows error messages automatically â€” do NOT generate error text in the UI",
    ],
  },
  {
    name: "Buttons",
    components: ["Button", "Buttons"],
  },
  {
    name: "Follow-ups",
    components: ["FollowUpBlock", "FollowUpItem"],
    notes: [
      "- Use FollowUpBlock with FollowUpItem references at the end of a response to suggest next actions.",
      "- Clicking a FollowUpItem sends its text to the LLM as a user message.",
    ],
  },
  {
    name: "Layout",
    components: ["Tabs", "TabItem", "Accordion", "AccordionItem", "Carousel"],
    notes: [
      "- Use Tabs to present alternative views â€” each TabItem has a value id, trigger label, and content array.",
      "- Carousel takes an array of slides, where each slide is an array of content.",
      "- IMPORTANT: Every slide in a Carousel must have the same structure.",
    ],
  },
  {
    name: "Data Display",
    components: ["TablewithAccordion", "TagBlock", "Tag"],
  },
  {
    name: "Timeline",
    components: ["VerticalTimeline", "HorizontalAlternateTimeline"],
    notes: [
      "- Use VerticalTimeline for stacked event history and HorizontalAlternateTimeline for milestone roadmaps.",
      "- Both accept height up to 800px and stay responsive inside the chat card.",
    ],
  },
  {
    name: "Typography",
    components: ["Heading", "Blockquote", "InlineCode"],
    notes: [
      '- Heading levels: "h1" | "h2" | "h3" | "h4". Each renders with appropriate shadcn/ui typography styles.',
      "- Blockquote for styled quotes with optional cite attribution.",
      "- InlineCode for monospace code snippets within text.",
    ],
  },
  {
    name: "Calendar",
    components: ["CalendarBlock"],
    notes: [
      '- CalendarBlock renders a standalone interactive calendar. mode: "single" | "multiple" | "range".',
      "- Use numberOfMonths to show multiple months side by side.",
      "- Use defaultMonth (ISO date string) to set the initial visible month.",
    ],
  },
  {
    name: "Navigation",
    components: ["PaginationBlock"],
    notes: ["- PaginationBlock takes currentPage and totalPages."],
  },
  {
    name: "Overlays",
    components: ["DialogBlock", "AlertDialogBlock", "DrawerBlock"],
    notes: [
      "- DialogBlock renders a button that opens a modal dialog with content inside.",
      "- AlertDialogBlock renders a confirmation dialog with cancel/confirm actions.",
      "- DrawerBlock renders a bottom drawer panel triggered by a button.",
    ],
  },
];

// â”€â”€ Library â”€â”€

export const shadcnChatLibrary = createLibrary({
  root: "Card",
  componentGroups: shadcnComponentGroups,
  components: [
    // Root
    ChatCard,
    CardHeader,
    // Content
    TextContent,
    MarkDownRenderer,
    Alert,
    ShadcnBadgeComponent,
    Avatar,
    ChatFileCard,
    ChatFileCardAction,
    DownloadViewCardBlock,
    CodeBlock,
    Image,
    ImageBlock,
    ProductCard,
    Progress,
    Separator,
    StatswithTrending,
    StatswithBorders,
    StatswithCardLayout,
    StatswithBadges,
    StatswithCircularProgress,
    StatswithAreaChart,
    StatswithBarChart,
    StatswithLineChart,
    StatswithPieChart,
    StatswithMap,
    StatswithLinks,
    StatswithStatus,
    StatsUsageDashboard,
    // Tables
    Table,
    TablewithAccordion,
    Col,
    // Maps
    Map,
    MapMarker,
    // Charts (2D)
    BarChartCondensed,
    BarChartMixedComponent,
    BarChartMultipleComponent,
    LineChartCondensed,
    LineChartDotsColorsComponent,
    LineChartLabelComponent,
    AreaChartCondensed,
    AreaChartAxesComponent,
    AreaChartGradientComponent,
    RadarChartComponent,
    GanttTaskChartComponent,
    Series,
    // Charts (1D)
    PieChartComponent,
    PieChartDonutComponent,
    PieChartDonutActiveComponent,
    RadialChartComponent,
    RadialChartStackedComponent,
    RadialChartTextComponent,
    Slice,
    GaugeChartLiveUpdates,
    GaugeChartTwentyLevels,
    // Charts (Scatter)
    ScatterChartComponent,
    ScatterSeries,
    Point,
    // Forms
    Form,
    FormControl,
    Label,
    Input,
    TextArea,
    Select,
    SelectItem,
    DatePicker,
    Slider,
    CheckBoxGroup,
    CheckBoxItem,
    RadioGroup,
    RadioItem,
    SwitchGroup,
    SwitchItem,
    // Buttons
    Button,
    Buttons,
    // Follow-ups
    FollowUpBlock,
    FollowUpItem,
    // Layout
    Tabs,
    TabItem,
    Accordion,
    AccordionItemDef,
    Carousel,
    // Data Display
    TagBlock,
    Tag,
    VerticalTimeline,
    HorizontalAlternateTimeline,
    // Typography
    Heading,
    Blockquote,
    InlineCode,
    // Navigation
    PaginationBlock,
    // Overlays
    DialogBlock,
    AlertDialogBlock,
    DrawerBlock,
    // Calendar
    CalendarBlock,
  ],
});


