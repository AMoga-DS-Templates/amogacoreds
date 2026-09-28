# JSON Render Registry Components

These components are available when the AI Chat tool is set to **UI Render**.

The catalog is defined in `src/lib/render/catalog.ts` and the React implementations are registered in `src/lib/render/registry.tsx`.

## UI / Base Shadcn Components (39)

- `Card`
- `Stack`
- `Form`
- `Grid`
- `Separator`
- `Tabs`
- `Accordion`
- `Collapsible`
- `Dialog`
- `Drawer`
- `Carousel`
- `Table`
- `Heading`
- `Text`
- `Image`
- `Icon`
- `Avatar`
- `Badge`
- `Alert`
- `Progress`
- `Skeleton`
- `Spinner`
- `Tooltip`
- `Popover`
- `Rating`
- `Metric`

### Forms and interactions

- `Input`
- `Textarea`
- `Select`
- `Checkbox`
- `Radio`
- `Switch`
- `Slider`
- `Button`
- `Link`
- `DropdownMenu`
- `Toggle`
- `ToggleGroup`
- `ButtonGroup`
- `Pagination`

## Custom UI Components (67)

### Base charts

- `BarChart`
- `BarChartCondensed`
- `BarChartMixed`
- `BarChartMultiple`
- `LineChart`
- `LineChartCondensed`
- `LineChartDotsColors`
- `LineChartLabel`
- `AreaChart`
- `AreaChartCondensed`
- `AreaChartAxes`
- `AreaChartGradient`
- `RadarChart`
- `PieChart`
- `PieChartDonut`
- `PieChartDonutActive`
- `RadialChart`
- `RadialChartStacked`
- `RadialChartText`
- `ScatterChart`
- `GaugeChartLiveUpdates`
- `GaugeChartTwentyLevels`
- `GanttTaskChart`
- `StatsUsageDashboard`
- `StatswithAreaChart`
- `StatswithBarChart`
- `StatswithLineChart`
- `StatswithPieChart`

These use the shared components in `src/components/base-charts`.

### Base UI blocks

- `AlertDialogBlock`
- `Buttons`
- `CalendarBlock`
- `CardHeader`
- `ChatFileCard`
- `ChatFileCardAction`
- `CheckBoxItem`
- `CheckBoxGroup`
- `CodeBlock`
- `DialogBlock`
- `DownloadViewCard`
- `DownloadViewCardBlock`
- `DrawerBlock`
- `FollowUpItem`
- `FollowUpBlock`
- `FormControl`
- `HorizontalAlternateTimeline`
- `ImageBlock`
- `MarkDownRenderer`
- `PaginationBlock`
- `ProductCard`
- `StatswithBadges`
- `StatswithBorders`
- `StatswithCardLayout`
- `StatswithCircularProgress`
- `StatswithLinks`
- `StatswithMap`
- `StatswithStatus`
- `StatswithTrending`
- `SwitchItem`
- `SwitchGroup`
- `TablewithAccordion`
- `Tag`
- `TagBlock`
- `TextContent`
- `Blockquote`
- `InlineCode`
- `VerticalTimeline`

These use the shared components in `src/components/base-ui`.

## Verification

Run this command to verify that every catalog component has a matching registry implementation:

```bash
pnpm test:json-render
```

The current registry contains 106 matched components.
