'use client'

import { useState, type ReactNode } from 'react'
import { CheckCircle2Icon, InfoIcon, MapPin } from 'lucide-react'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { ButtonGroup, ButtonGroupText } from '@/components/ui/button-group'
import { Calendar } from '@/components/ui/calendar'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from '@/components/ui/chart'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from '@/components/ui/context-menu'
import { DatePicker } from '@/design-system/components/ui/date-picker'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyTitle } from '@/components/ui/empty'
import { Field, FieldDescription, FieldLabel } from '@/components/ui/field'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from '@/components/ui/input-group'
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp'
import { Item, ItemContent, ItemDescription, ItemTitle } from '@/components/ui/item'
import { Kbd, KbdGroup } from '@/components/ui/kbd'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider } from '@/components/ui/sidebar'
import { Skeleton } from '@/components/ui/skeleton'
import { Spinner } from '@/components/ui/spinner'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import LeafletMap from '@/components/ui/leaflet-map'
import { Map as MapComponent, MapMarker, MarkerContent } from '@/components/ui/map'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
import { Progress } from '@/components/ui/progress'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import { Toggle } from '@/components/ui/toggle'

import { baseComponents, type BaseComponentName } from './base-components'

// -----------------------------------------------------------------------------
// Stateful previews
// -----------------------------------------------------------------------------

function DatePickerPreview() {
  const [date, setDate] = useState<Date | undefined>(new Date(2026, 8, 23))
  return <div className='w-full max-w-sm'><DatePicker date={date} setDate={setDate} /></div>
}

function FormPreview() {
  const form = useForm({ defaultValues: { username: '' } })
  return <Form {...form}><form onSubmit={form.handleSubmit(() => undefined)} className='w-full max-w-lg space-y-5'>
    <FormField control={form.control} name='username' render={({ field }) => <FormItem>
      <FormLabel>Username</FormLabel>
      <FormControl><Input placeholder='Enter your username' {...field} /></FormControl>
      <FormDescription>This is your public display name.</FormDescription>
      <FormMessage />
    </FormItem>} />
    <Button type='submit'>Save</Button>
  </form></Form>
}

function InputOTPPreview() {
  const [value, setValue] = useState('123456')
  return <InputOTP maxLength={6} value={value} onChange={setValue}>
    <InputOTPGroup><InputOTPSlot index={0} /><InputOTPSlot index={1} /></InputOTPGroup>
    <InputOTPSeparator />
    <InputOTPGroup><InputOTPSlot index={2} /><InputOTPSlot index={3} /></InputOTPGroup>
    <InputOTPSeparator />
    <InputOTPGroup><InputOTPSlot index={4} /><InputOTPSlot index={5} /></InputOTPGroup>
  </InputOTP>
}

function ChartPreview() {
  const chartConfig = { value: { label: 'Orders', color: 'var(--primary)' } } satisfies ChartConfig
  const chartData = [
    { month: 'Jan', value: 18 }, { month: 'Feb', value: 32 }, { month: 'Mar', value: 24 },
    { month: 'Apr', value: 41 }, { month: 'May', value: 36 },
  ]
  return <ChartContainer config={chartConfig} className='h-[240px] w-full max-w-2xl'>
    <BarChart accessibilityLayer data={chartData} margin={{ left: 8, right: 8 }}>
      <CartesianGrid vertical={false} />
      <XAxis dataKey='month' tickLine={false} axisLine={false} tickMargin={8} />
      <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
      <Bar dataKey='value' fill='var(--color-value)' radius={4} />
    </BarChart>
  </ChartContainer>
}

// -----------------------------------------------------------------------------
// Component previews, grouped in the same order as baseComponents.
// -----------------------------------------------------------------------------

const previewByComponent: Partial<Record<BaseComponentName, () => ReactNode>> = {
  Accordion: () => <Accordion type='single' collapsible className='max-w-lg'><AccordionItem value='item-1'><AccordionTrigger>Show details</AccordionTrigger><AccordionContent>Accordion content from the imported component.</AccordionContent></AccordionItem></Accordion>,
  Alert: () => <div className='grid w-full max-w-2xl gap-4'><Alert><CheckCircle2Icon /><AlertTitle>Payment successful</AlertTitle><AlertDescription>Your payment of $29.99 has been processed. A receipt has been sent to your email address.</AlertDescription></Alert><Alert><InfoIcon /><AlertTitle>New feature available</AlertTitle><AlertDescription>We've added dark mode support. You can enable it in your account settings.</AlertDescription></Alert></div>,
  'Alert Dialog': () => <AlertDialog><AlertDialogTrigger asChild><Button variant='outline'>Open alert dialog</Button></AlertDialogTrigger><AlertDialogContent><AlertDialogHeader><AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle><AlertDialogDescription>This action cannot be undone. This will permanently delete the selected item.</AlertDialogDescription></AlertDialogHeader><AlertDialogFooter><AlertDialogCancel>Cancel</AlertDialogCancel><AlertDialogAction>Continue</AlertDialogAction></AlertDialogFooter></AlertDialogContent></AlertDialog>,
  'Aspect Ratio': () => <div className='w-full max-w-xl'><AspectRatio ratio={16 / 9} className='overflow-hidden rounded-lg border bg-muted'><div className='flex h-full items-center justify-center text-sm text-muted-foreground'>16:9 aspect ratio</div></AspectRatio></div>,
  Avatar: () => <Avatar><AvatarFallback>AM</AvatarFallback></Avatar>,
  Badge: () => <div className='flex gap-2'><Badge>Default</Badge><Badge variant='secondary'>Secondary</Badge><Badge variant='outline'>Outline</Badge></div>,
  Breadcrumb: () => <Breadcrumb><BreadcrumbList><BreadcrumbItem><BreadcrumbLink href='#'>Home</BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator /><BreadcrumbItem>Current</BreadcrumbItem></BreadcrumbList></Breadcrumb>,
  Button: () => <div className='flex flex-wrap gap-2'><Button>Primary</Button><Button variant='outline'>Outline</Button><Button variant='secondary'>Secondary</Button></div>,
  'Button Group': () => <ButtonGroup><Button variant='outline'>First</Button><Button variant='outline'>Second</Button><ButtonGroupText>Actions</ButtonGroupText></ButtonGroup>,
  Calendar: () => <Calendar mode='single' defaultMonth={new Date(2026, 8)} selected={new Date(2026, 8, 23)} className='rounded-md border' />,
  Card: () => <Card className='max-w-md'><CardHeader><CardTitle>Card</CardTitle></CardHeader><CardContent>Card content</CardContent></Card>,
  Carousel: () => <Carousel className='w-full max-w-xl px-12'><CarouselContent>{['First slide', 'Second slide', 'Third slide'].map((label) => <CarouselItem key={label}><div className='flex h-40 items-center justify-center rounded-lg border bg-muted text-sm font-medium'>{label}</div></CarouselItem>)}</CarouselContent><CarouselPrevious /><CarouselNext /></Carousel>,
  Chart: () => <ChartPreview />,
  Checkbox: () => <div className='flex items-center gap-2'><Checkbox id='base-checkbox' /><Label htmlFor='base-checkbox'>Accept terms</Label></div>,
  Collapsible: () => <Collapsible defaultOpen className='w-full max-w-lg space-y-2'><div className='flex items-center justify-between rounded-md border px-4 py-3'><span className='text-sm font-medium'>Project details</span><CollapsibleTrigger asChild><Button variant='outline' size='sm'>Toggle</Button></CollapsibleTrigger></div><CollapsibleContent className='rounded-md border px-4 py-3 text-sm text-muted-foreground'>This content can be expanded or collapsed.</CollapsibleContent></Collapsible>,
  Command: () => <Command className='w-full max-w-lg rounded-lg border shadow-md'><CommandInput placeholder='Search commands...' /><CommandList><CommandEmpty>No commands found.</CommandEmpty><CommandGroup heading='Suggestions'><CommandItem>Open dashboard</CommandItem><CommandItem>Search files</CommandItem><CommandItem>Change theme</CommandItem></CommandGroup></CommandList></Command>,
  'Context Menu': () => <ContextMenu><ContextMenuTrigger className='flex h-32 w-full max-w-lg cursor-context-menu select-none items-center justify-center rounded-lg border border-dashed text-sm text-muted-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring'>Right-click here to open the menu</ContextMenuTrigger><ContextMenuContent><ContextMenuItem>Back</ContextMenuItem><ContextMenuItem>Forward</ContextMenuItem><ContextMenuItem>Reload</ContextMenuItem></ContextMenuContent></ContextMenu>,
  'Date Picker': () => <DatePickerPreview />,
  Dialog: () => <Dialog><DialogTrigger asChild><Button variant='outline'>Open dialog</Button></DialogTrigger><DialogContent><DialogHeader><DialogTitle>Edit profile</DialogTitle><DialogDescription>Make changes to your profile here. Click save when you are done.</DialogDescription></DialogHeader><div className='rounded-md border p-4 text-sm text-muted-foreground'>Dialog content</div><DialogFooter><Button>Save changes</Button></DialogFooter></DialogContent></Dialog>,
  Drawer: () => <Drawer><DrawerTrigger asChild><Button variant='outline'>Open drawer</Button></DrawerTrigger><DrawerContent><div className='mx-auto w-full max-w-lg'><DrawerHeader><DrawerTitle>Drawer title</DrawerTitle><DrawerDescription>Drawer content slides in from the bottom.</DrawerDescription></DrawerHeader><div className='px-4 py-4 text-sm text-muted-foreground'>Drawer content</div><DrawerFooter><Button>Save</Button></DrawerFooter></div></DrawerContent></Drawer>,
  'Dropdown Menu': () => <DropdownMenu><DropdownMenuTrigger asChild><Button variant='outline'>Open menu</Button></DropdownMenuTrigger><DropdownMenuContent><DropdownMenuItem>Profile</DropdownMenuItem><DropdownMenuItem>Settings</DropdownMenuItem><DropdownMenuItem>Sign out</DropdownMenuItem></DropdownMenuContent></DropdownMenu>,
  Empty: () => <Empty className='w-full max-w-lg border'><EmptyHeader><EmptyTitle>No results found</EmptyTitle><EmptyDescription>Try changing your search or filters.</EmptyDescription></EmptyHeader><EmptyContent><Button variant='outline'>Clear filters</Button></EmptyContent></Empty>,
  Field: () => <Field className='w-full max-w-lg'><FieldLabel htmlFor='field-demo'>Project name</FieldLabel><Input id='field-demo' placeholder='My project' /><FieldDescription>Choose a name that helps your team identify this project.</FieldDescription></Field>,
  Form: () => <FormPreview />,
  'Hover Card': () => <HoverCard><HoverCardTrigger asChild><Button variant='link'>Hover over this link</Button></HoverCardTrigger><HoverCardContent><p className='text-sm'>Additional information appears in this hover card.</p></HoverCardContent></HoverCard>,
  Input: () => <div className='grid max-w-md gap-2'><Label htmlFor='base-input'>Input</Label><Input id='base-input' placeholder='Enter text' /></div>,
  'Input Group': () => <InputGroup className='w-full max-w-lg'><InputGroupAddon><InputGroupText>@</InputGroupText></InputGroupAddon><InputGroupInput placeholder='username' /><InputGroupAddon align='inline-end'><InputGroupText>.com</InputGroupText></InputGroupAddon></InputGroup>,
  'Input OTP': () => <InputOTPPreview />,
  Item: () => <Item variant='outline' className='w-full max-w-lg'><ItemContent><ItemTitle>Project settings</ItemTitle><ItemDescription>Manage your project preferences and access.</ItemDescription></ItemContent><Button variant='outline' size='sm'>Open</Button></Item>,
  Kbd: () => <div className='flex items-center gap-3 text-sm'>Press <KbdGroup><Kbd>Cmd</Kbd><Kbd>K</Kbd></KbdGroup> to open search</div>,
  Label: () => <div className='grid w-full max-w-lg gap-2'><Label htmlFor='label-demo'>Project name</Label><Input id='label-demo' placeholder='Enter a project name' /></div>,
  Menubar: () => <Menubar><MenubarMenu><MenubarTrigger>File</MenubarTrigger><MenubarContent><MenubarItem>New</MenubarItem><MenubarItem>Open</MenubarItem></MenubarContent></MenubarMenu></Menubar>,
  'Navigation Menu': () => <NavigationMenu><NavigationMenuList><NavigationMenuItem><NavigationMenuTrigger>Components</NavigationMenuTrigger><NavigationMenuLink href='#'>Overview</NavigationMenuLink></NavigationMenuItem><NavigationMenuItem><NavigationMenuLink href='#'>Documentation</NavigationMenuLink></NavigationMenuItem></NavigationMenuList></NavigationMenu>,
  Pagination: () => <Pagination><PaginationContent><PaginationItem><PaginationPrevious href='#' /></PaginationItem><PaginationItem><PaginationLink href='#' isActive>1</PaginationLink></PaginationItem><PaginationItem><PaginationNext href='#' /></PaginationItem></PaginationContent></Pagination>,
  Popover: () => <Popover><PopoverTrigger asChild><Button variant='outline'>Open popover</Button></PopoverTrigger><PopoverContent className='w-80'><div className='grid gap-2'><h4 className='font-medium'>Popover</h4><p className='text-sm text-muted-foreground'>This content is displayed in a floating popover.</p></div></PopoverContent></Popover>,
  Progress: () => <Progress value={66} className='max-w-md' />,
  'Radio Group': () => <RadioGroup defaultValue='comfortable'><div className='flex items-center gap-2'><RadioGroupItem value='comfortable' id='comfortable' /><Label htmlFor='comfortable'>Comfortable</Label></div><div className='flex items-center gap-2'><RadioGroupItem value='compact' id='compact' /><Label htmlFor='compact'>Compact</Label></div></RadioGroup>,
  Resizable: () => <ResizablePanelGroup direction='horizontal' className='h-48 w-full max-w-2xl rounded-lg border'><ResizablePanel defaultSize={50} className='p-4'><div className='text-sm font-medium'>Panel one</div><p className='mt-2 text-sm text-muted-foreground'>Drag the handle to resize.</p></ResizablePanel><ResizableHandle withHandle /><ResizablePanel defaultSize={50} className='p-4'><div className='text-sm font-medium'>Panel two</div><p className='mt-2 text-sm text-muted-foreground'>Resizable content area.</p></ResizablePanel></ResizablePanelGroup>,
  'Scroll Area': () => <ScrollArea className='h-48 w-full max-w-lg rounded-md border p-4'><div className='space-y-4 text-sm'>{Array.from({ length: 10 }, (_, index) => <p key={index}>Scrollable content item {index + 1}</p>)}</div></ScrollArea>,
  Select: () => <div className='grid max-w-md gap-2'><Label>Dropdown</Label><Select defaultValue='one'><SelectTrigger><SelectValue placeholder='Select an option' /></SelectTrigger><SelectContent><SelectItem value='one'>Option One</SelectItem><SelectItem value='two'>Option Two</SelectItem></SelectContent></Select></div>,
  Separator: () => <div className='w-full max-w-md space-y-4'><div>Content above</div><Separator /><div>Content below</div></div>,
  Sheet: () => <Sheet><SheetTrigger asChild><Button variant='outline'>Open sheet</Button></SheetTrigger><SheetContent><SheetHeader><SheetTitle>Sheet title</SheetTitle><SheetDescription>Additional content opens in a side panel.</SheetDescription></SheetHeader><div className='p-4 text-sm text-muted-foreground'>Sheet content</div></SheetContent></Sheet>,
  Sidebar: () => <SidebarProvider className='h-56 w-full max-w-2xl overflow-hidden rounded-lg border'><Sidebar collapsible='none'><SidebarHeader><div className='font-semibold'>Workspace</div></SidebarHeader><SidebarContent><SidebarGroup><SidebarGroupLabel>Navigation</SidebarGroupLabel><SidebarGroupContent><SidebarMenu><SidebarMenuItem><SidebarMenuButton>Dashboard</SidebarMenuButton></SidebarMenuItem><SidebarMenuItem><SidebarMenuButton>Projects</SidebarMenuButton></SidebarMenuItem></SidebarMenu></SidebarGroupContent></SidebarGroup></SidebarContent></Sidebar><main className='flex flex-1 items-center justify-center p-6 text-sm text-muted-foreground'>Sidebar content</main></SidebarProvider>,
  Skeleton: () => <div className='w-full max-w-lg space-y-4'><Skeleton className='h-6 w-1/3' /><Skeleton className='h-4 w-full' /><Skeleton className='h-4 w-5/6' /><Skeleton className='h-24 w-full' /></div>,
  Slider: () => <Slider defaultValue={[40]} max={100} step={1} className='max-w-md' />,
  Sonner: () => <Button variant='outline' onClick={() => toast.success('Sonner notification displayed')}>Show toast</Button>,
  Spinner: () => <div className='flex items-center gap-3 text-sm text-muted-foreground'><Spinner className='size-6' />Loading...</div>,
  Switch: () => <div className='flex items-center gap-2'><Switch id='base-switch' /><Label htmlFor='base-switch'>Enable setting</Label></div>,
  Table: () => <div className='w-full max-w-2xl overflow-hidden rounded-lg border'><Table><TableHeader><TableRow><TableHead>Invoice</TableHead><TableHead>Status</TableHead><TableHead className='text-right'>Amount</TableHead></TableRow></TableHeader><TableBody><TableRow><TableCell className='font-medium'>INV-001</TableCell><TableCell>Paid</TableCell><TableCell className='text-right'>$250.00</TableCell></TableRow><TableRow><TableCell className='font-medium'>INV-002</TableCell><TableCell>Pending</TableCell><TableCell className='text-right'>$180.00</TableCell></TableRow><TableRow><TableCell className='font-medium'>INV-003</TableCell><TableCell>Overdue</TableCell><TableCell className='text-right'>$320.00</TableCell></TableRow></TableBody></Table></div>,
  Tabs: () => <Tabs defaultValue='first' className='max-w-md'><TabsList><TabsTrigger value='first'>First</TabsTrigger><TabsTrigger value='second'>Second</TabsTrigger></TabsList><TabsContent value='first'>First tab content</TabsContent><TabsContent value='second'>Second tab content</TabsContent></Tabs>,
  Textarea: () => <div className='grid w-full max-w-lg gap-2'><Label htmlFor='base-textarea'>Message</Label><Textarea id='base-textarea' placeholder='Write your message...' /><p className='text-sm text-muted-foreground'>Your message will be shared with the team.</p></div>,
  Toggle: () => <Toggle variant='outline' aria-label='Toggle italic'>Italic</Toggle>,
  'Toggle Group': () => <ToggleGroup type='single' defaultValue='center' variant='outline' aria-label='Text alignment'><ToggleGroupItem value='left' aria-label='Align left'>Left</ToggleGroupItem><ToggleGroupItem value='center' aria-label='Align center'>Center</ToggleGroupItem><ToggleGroupItem value='right' aria-label='Align right'>Right</ToggleGroupItem></ToggleGroup>,
  Tooltip: () => <TooltipProvider><Tooltip><TooltipTrigger asChild><Button variant='outline'>Hover for tooltip</Button></TooltipTrigger><TooltipContent>Helpful tooltip content</TooltipContent></Tooltip></TooltipProvider>,
  'Leaflet Map': () => <div className='h-64 w-full max-w-2xl overflow-hidden rounded-lg border'><LeafletMap latitude={40.7128} longitude={-74.006} address='New York, NY' /></div>,
  Map: () => <div className='h-64 w-full max-w-2xl overflow-hidden rounded-lg border'><MapComponent center={[-74.006, 40.7128]} zoom={10} className='h-full w-full'><MapMarker longitude={-74.006} latitude={40.7128}><MarkerContent><MapPin className='size-7 fill-primary text-primary-foreground drop-shadow' /></MarkerContent></MapMarker></MapComponent></div>,
}

export function componentPreview(name: BaseComponentName) {
  const Preview = previewByComponent[name]
  return Preview ? <Preview /> : <div className='rounded-lg border border-dashed p-8 text-center text-sm text-muted-foreground'>Preview for <span className='font-medium text-foreground'>{name}</span></div>
}

export function BaseComponentPreview({ name }: { name: BaseComponentName }) {
  const component = baseComponents.find(([item]) => item === name) ?? baseComponents[0]
  const [, file] = component
  const importName = name.replace(/\s+/g, '')

  return <div className='mx-auto mt-2 w-full max-w-4xl min-w-0 overflow-hidden rounded-xl border bg-card p-4 sm:mt-3 sm:p-6'>
    <div className='mb-5 text-center'><h2 className='text-lg font-semibold'>{name}</h2><p className='text-xs text-muted-foreground'>Imported from components/ui</p></div>
    <Tabs defaultValue='radix-ui'>
      <TabsList variant='line' className='mt-3 h-auto gap-6 rounded-none bg-transparent p-0'>
        <TabsTrigger value='radix-ui' className='flex-none rounded-none px-0 pb-2 pt-1'>Radix UI</TabsTrigger>
        <TabsTrigger value='code' className='flex-none rounded-none px-0 pb-2 pt-1'>Code</TabsTrigger>
      </TabsList>
      <TabsContent value='radix-ui' className='pt-4'><div className='flex min-h-64 items-center justify-center rounded-lg border border-dashed bg-muted/20 p-8 text-center'>{componentPreview(name)}</div></TabsContent>
      <TabsContent value='code' className='pt-4'><pre className='overflow-x-auto rounded-lg bg-muted p-4 text-left text-xs'><code>{`import { ${importName} } from '@/components/ui/${file.replace('.tsx', '')}'`}</code></pre></TabsContent>
    </Tabs>
  </div>
}
