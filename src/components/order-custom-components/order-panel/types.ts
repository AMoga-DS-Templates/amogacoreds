export type OrderPanelSection = "purchase-order" | "approved";

export type OrderPanelRecord = {
  id: string;
  name: string;
  yearCode: string;
  description: string;
  periods: number;
  endDate: string;
  status: string;
};

export type OrderPanelProps = {
  records?: OrderPanelRecord[];
  approvedRecords?: OrderPanelRecord[];
  defaultSection?: OrderPanelSection;
  tabs: Array<{ value: OrderPanelSection; label: string }>;
  labels: {
    searchPlaceholder: string;
    newAction?: string;
  };
  counts?: {
    all?: number;
    action?: number;
  };
  showEmptyState?: boolean;
  onNewOrder?: () => void;
  onSelectRecord?: (record: OrderPanelRecord, section: OrderPanelSection) => void;
  className?: string;
};
