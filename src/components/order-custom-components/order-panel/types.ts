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
  onNewOrder?: () => void;
  onSelectRecord?: (record: OrderPanelRecord, section: OrderPanelSection) => void;
  className?: string;
};
