import { z } from "zod";

import { Alert } from "./ui/alert";
import { AlertDialogBlock } from "./ui/alert-dialog-block";
import { ShadcnBadgeComponent } from "./ui/badge";
import { CalendarBlock } from "./ui/calendar-block";
import { CodeBlock } from "./ui/code-block";
import { DialogBlock } from "./ui/dialog-block";
import { DownloadViewCardBlock } from "./ui/download-view-card";
import { DrawerBlock } from "./ui/drawer-block";
import { FollowUpBlock } from "./ui/follow-up-block";
import { GaugeChartLiveUpdates, GaugeChartTwentyLevels } from "./ui/gauges";
import { GanttTaskChartComponent } from "./ui/gantt-task-chart";
import { Image, ImageBlock } from "./ui/image";
import { MarkDownRenderer } from "./ui/markdown-renderer";
import { Map } from "./ui/map";
import { PaginationBlock } from "./ui/pagination-block";
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
import { Blockquote, Heading, InlineCode } from "./ui/typography";
import { HorizontalAlternateTimeline } from "./ui/HorizontalAlternateTimeline";
import { TablewithAccordion } from "./ui/TablewithAccordion";
import { VerticalTimeline } from "./ui/verticleTimeline";

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
  RadarChartComponent,
  RadialChartStackedComponent,
  RadialChartTextComponent,
  RadialChartComponent,
  ScatterChartComponent,
} from "./ui/charts";

import { Table } from "./ui/table";
import { TagBlock } from "./ui/tag";

import { Avatar } from "./ui/avatar";
import { Buttons } from "./ui/buttons";
import { CardHeader } from "./ui/card-header";
import { Form } from "./ui/form";

export const ContentChildUnion = z.union([
  TextContent.ref,
  MarkDownRenderer.ref,
  CardHeader.ref,
  Alert.ref,
  ShadcnBadgeComponent.ref,
  Avatar.ref,
  CodeBlock.ref,
  Image.ref,
  ImageBlock.ref,
  Progress.ref,
  Separator.ref,
  ProductCard.ref,
  StatswithTrending.ref,
  StatswithBorders.ref,
  StatswithCardLayout.ref,
  StatswithBadges.ref,
  StatswithCircularProgress.ref,
  StatswithAreaChart.ref,
  StatswithBarChart.ref,
  StatswithLineChart.ref,
  StatswithPieChart.ref,
  StatswithMap.ref,
  StatswithLinks.ref,
  StatswithStatus.ref,
  StatsUsageDashboard.ref,
  GaugeChartLiveUpdates.ref,
  GaugeChartTwentyLevels.ref,
  GanttTaskChartComponent.ref,
  BarChartCondensed.ref,
  BarChartMixedComponent.ref,
  BarChartMultipleComponent.ref,
  LineChartCondensed.ref,
  LineChartDotsColorsComponent.ref,
  LineChartLabelComponent.ref,
  AreaChartCondensed.ref,
  AreaChartAxesComponent.ref,
  AreaChartGradientComponent.ref,
  PieChartComponent.ref,
  PieChartDonutComponent.ref,
  PieChartDonutActiveComponent.ref,
  RadarChartComponent.ref,
  RadialChartComponent.ref,
  RadialChartStackedComponent.ref,
  RadialChartTextComponent.ref,
  ScatterChartComponent.ref,
  Map.ref,
  Table.ref,
  TablewithAccordion.ref,
  TagBlock.ref,
  Form.ref,
  Buttons.ref,
  Heading.ref,
  Blockquote.ref,
  InlineCode.ref,
  PaginationBlock.ref,
  DialogBlock.ref,
  DownloadViewCardBlock.ref,
  AlertDialogBlock.ref,
  DrawerBlock.ref,
  CalendarBlock.ref,
  HorizontalAlternateTimeline.ref,
  VerticalTimeline.ref,
]);

export const ChatContentChildUnion = z.union([...ContentChildUnion.options, FollowUpBlock.ref]);


