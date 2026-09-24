"use client";

import * as React from "react";
import { Check, Search, X } from "lucide-react";
import { Command, CommandEmpty, CommandItem, CommandList } from "@/components/ui/command";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SingleSelectContextValue = {
  value: string;
  open: boolean;
  setOpen: (value: boolean) => void;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  onValueChange: (value: string) => void;
  selectedLabel: string;
  setSelectedLabel: React.Dispatch<React.SetStateAction<string>>;
  inputRef: React.RefObject<HTMLInputElement | null>;
};

const SingleSelectContext = React.createContext<SingleSelectContextValue | null>(null);
const useSingleSelect = () => {
  const context = React.useContext(SingleSelectContext);
  if (!context) throw new Error("SingleSelector components must be used inside SingleSelector");
  return context;
};

export function SingleSelector({
  value,
  onValueChange,
  open: openProp,
  onOpenChange,
  className,
  children,
  ...props
}: React.ComponentProps<typeof Command> & {
  value: string;
  onValueChange: (value: string) => void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  const [internalOpen, setInternalOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const [selectedLabel, setSelectedLabel] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);
  const open = openProp ?? internalOpen;
  const setOpen = React.useCallback((next: boolean) => {
    if (openProp === undefined) setInternalOpen(next);
    onOpenChange?.(next);
  }, [onOpenChange, openProp]);

  return (
    <SingleSelectContext.Provider value={{ value, open, setOpen, inputValue, setInputValue, onValueChange, selectedLabel, setSelectedLabel, inputRef }}>
      <Command className={cn("flex h-auto flex-col space-y-2 overflow-visible bg-transparent", className)} {...props}>{children}</Command>
    </SingleSelectContext.Provider>
  );
}

export const SingleSelectorTrigger = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, children, ...props }, ref) => {
  const { setOpen, inputRef } = useSingleSelect();
  return <div ref={ref} className={cn("flex flex-wrap gap-1 rounded-lg bg-background px-4 py-2 ring-1 ring-muted", className)} onMouseDown={(event) => { if ((event.target as HTMLElement).closest("button")) return; event.preventDefault(); setOpen(true); requestAnimationFrame(() => inputRef.current?.focus()); }} {...props}>{children}</div>;
});
SingleSelectorTrigger.displayName = "SingleSelectorTrigger";

export const SingleSelectorValue = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, children, ...props }, ref) => {
  const { value, selectedLabel, onValueChange, setSelectedLabel, setInputValue, setOpen, inputRef } = useSingleSelect();
  if ((!selectedLabel && !children) || !value) return null;
  return <Badge ref={ref} variant="secondary" className={cn("flex items-center gap-1 rounded-xl px-1", className)} {...props}><span className="text-xs">{children ?? selectedLabel}</span><button type="button" aria-label={`Remove ${selectedLabel}`} onMouseDown={(event) => { event.preventDefault(); event.stopPropagation(); }} onClick={() => { onValueChange(""); setSelectedLabel(""); setInputValue(""); setOpen(true); requestAnimationFrame(() => inputRef.current?.focus()); }}><X className="h-4 w-4 hover:stroke-destructive" /></button></Badge>;
});
SingleSelectorValue.displayName = "SingleSelectorValue";

export const SingleSelectorInput = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({ className, disabled, ...props }, ref) => {
  const { open, setOpen, inputValue, setInputValue, inputRef, selectedLabel } = useSingleSelect();
  return <div className="flex min-w-0 flex-1 items-center gap-2 pl-1"><Search className="h-5 w-5 shrink-0 text-muted-foreground" /><input {...props} ref={(node) => { inputRef.current = node; if (typeof ref === "function") ref(node); else if (ref) ref.current = node; }} disabled={disabled} value={open ? inputValue : ""} onChange={(event) => setInputValue(event.target.value)} onFocus={() => { setInputValue(""); setOpen(true); }} onBlur={() => window.setTimeout(() => setOpen(false), 0)} placeholder={open ? props.placeholder : selectedLabel || props.placeholder} className={cn("min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground", className)} /></div>;
});
SingleSelectorInput.displayName = "SingleSelectorInput";

export const SingleSelectorContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, children, ...props }, ref) => {
  const { open } = useSingleSelect();
  return <div ref={ref} className={cn("mt-1", className)} {...props}>{open ? children : null}</div>;
});
SingleSelectorContent.displayName = "SingleSelectorContent";

export const SingleSelectorList = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof CommandList>>(({ className, children, ...props }, ref) => <CommandList ref={ref} className={cn("flex max-h-[260px] flex-col gap-2 rounded-md border border-muted bg-background p-2 shadow-md", className)} {...props}>{children}<CommandEmpty><span className="text-muted-foreground">No results found</span></CommandEmpty></CommandList>);
SingleSelectorList.displayName = "SingleSelectorList";

export const SingleSelectorItem = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof CommandItem> & { value: string }>(({ className, value, children, ...props }, ref) => {
  const { value: selectedValue, onValueChange, setInputValue, setOpen, setSelectedLabel } = useSingleSelect();
  const commitSelection = React.useCallback(() => {
    onValueChange(value);
    setSelectedLabel(typeof children === "string" ? children : value);
    setInputValue("");
    setOpen(false);
  }, [children, onValueChange, setInputValue, setOpen, setSelectedLabel, value]);

  return <CommandItem ref={ref} value={value} className={cn("flex cursor-pointer justify-between rounded-md px-2 py-1 hover:bg-accent", className)} onSelect={commitSelection} onPointerDown={(event) => { if (event.button === 0) { event.preventDefault(); commitSelection(); } }} {...props}>{children}{selectedValue === value ? <Check className="h-4 w-4" /> : null}</CommandItem>;
});
SingleSelectorItem.displayName = "SingleSelectorItem";
