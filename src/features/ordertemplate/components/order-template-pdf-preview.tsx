"use client";

import * as React from "react";
import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { pdf } from "@react-pdf/renderer";
import { ZrimoViewer } from "@/features/zrimo-viewer";

Font.register({
  family: "Geist",
  fonts: [
    { src: "/fonts/Geist-Regular.ttf", fontWeight: 400 },
    { src: "/fonts/Geist-Bold.ttf", fontWeight: 700 },
  ],
});

type OrderTemplatePdfPreviewProps = {
  data: Record<string, unknown>;
};

const styles = StyleSheet.create({
  page: { padding: 42, fontFamily: "Geist", fontSize: 9, color: "#193244", backgroundColor: "#ffffff" },
  headerBand: { borderBottom: 1.5, borderBottomColor: "#193244", paddingBottom: 12, flexDirection: "row", justifyContent: "flex-start" },
  business: { fontSize: 11, fontFamily: "Geist", fontWeight: 700, color: "#193244" },
  muted: { color: "#4d6472", fontSize: 8, marginTop: 4 },
  title: { fontSize: 22, fontFamily: "Geist", fontWeight: 700, color: "#193244", textAlign: "left" },
  sectionTitle: { fontSize: 11, fontFamily: "Geist", fontWeight: 700, color: "#2d6877", marginBottom: 8 },
  number: { color: "#4d6472", fontSize: 9, marginTop: 6, textAlign: "right" },
  body: { marginTop: 18, padding: 0, backgroundColor: "#ffffff" },
  meta: { flexDirection: "row", justifyContent: "space-between", paddingTop: 10, paddingBottom: 12, marginBottom: 12 },
  column: { width: "48%" },
  label: { color: "#4d6472", fontSize: 8, fontFamily: "Geist", fontWeight: 700, textTransform: "uppercase", marginBottom: 5 },
  value: { fontSize: 10, marginBottom: 6, minHeight: 16, padding: 3, backgroundColor: "#f1f4fc", borderBottom: 1, borderBottomColor: "#cbd5e1" },
  tableTitle: { fontSize: 11, fontFamily: "Geist", fontWeight: 700, color: "#2d6877", marginTop: 14, marginBottom: 7 },
  table: { marginTop: 4, borderTop: 1, borderTopColor: "#cbd5e1", borderLeft: 1, borderRight: 1, borderBottom: 1, borderColor: "#cbd5e1" },
  row: { flexDirection: "row", borderBottom: 1, borderBottomColor: "#cbd5e1", paddingVertical: 7, paddingHorizontal: 6 },
  altRow: { backgroundColor: "#f1f4fc" },
  tableHeader: { backgroundColor: "#193244", borderBottom: 0, paddingVertical: 8 },
  no: { width: "5%" },
  description: { width: "29%", paddingRight: 4 },
  delivery: { width: "14%", paddingRight: 4 },
  qty: { width: "7%", paddingRight: 4 },
  unit: { width: "7%", paddingRight: 4 },
  unitPrice: { width: "14%", paddingRight: 4 },
  discount: { width: "12%", paddingRight: 4 },
  amount: { width: "12%", textAlign: "right" },
  headerText: { fontSize: 7, color: "#ffffff", fontFamily: "Geist", fontWeight: 700 },
  totalBox: { alignSelf: "flex-end", width: "42%", marginTop: 14, padding: 10, backgroundColor: "#eaf0f2" },
  totalRow: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 5 },
  totalValue: { textAlign: "right", fontFamily: "Geist", fontWeight: 700 },
  difference: { borderTop: 2, borderTopColor: "#1e293b", marginTop: 5, paddingTop: 8, fontFamily: "Geist", fontWeight: 700 },
  notes: { flexDirection: "row", gap: 20, borderTop: 1, borderTopColor: "#cbd5e1", marginTop: 16, paddingTop: 10, paddingBottom: 4 },
  footer: { marginTop: 24, paddingTop: 10, borderTop: 1, borderTopColor: "#cbd5e1", color: "#94a3b8", fontSize: 8 },
});

const display = (value: unknown) => String(value ?? "-").trim() || "-";
const pdfValue = (value: unknown) => String(value ?? "").trim();

const sessionData = (data: Record<string, unknown>) => {
  if (typeof data.session_details !== "string") return {};
  try {
    const parsed = JSON.parse(data.session_details);
    return parsed && typeof parsed === "object" ? parsed as Record<string, unknown> : {};
  } catch {
    return {};
  }
};

const jsonObject = (value: unknown) => {
  if (typeof value !== "string") return value && typeof value === "object" ? value as Record<string, unknown> : {};
  try {
    const parsed = JSON.parse(value);
    return parsed && typeof parsed === "object" ? parsed as Record<string, unknown> : {};
  } catch {
    return {};
  }
};

export function OrderTemplatePdfDocument({ data }: OrderTemplatePdfPreviewProps) {
  const details = Array.isArray(data.details) ? data.details : [];
  const totalAmount = details.reduce((total, item) => {
    const row = (item ?? {}) as Record<string, unknown>;
    return total + (Number(row.remarks) || 0);
  }, 0);
  const session = sessionData(data);
  const fromParty = jsonObject(data.from_json);
  const toParty = jsonObject(data.to_json);
  const workflow = jsonObject(data.work_flow_json);
  const approvalUser = jsonObject((workflow as Record<string, unknown>).approval_user);
  const isApproved = String(data.status ?? "").trim().toLowerCase() === "approved";
  const business = display(
    fromParty.company_name ?? data.business_name ?? data.businessName ?? session.business_name ?? session.businessName ?? "Business"
  );
  const preparedOrApprovedBy = isApproved
    ? display(approvalUser.name ?? approvalUser.username ?? approvalUser.email ?? data.postapproved_user_uuid)
    : display(fromParty.name ?? data.created_user_name ?? session.full_name ?? session.user_name ?? session.user_email ?? business);

  return (
    <Document title={`Order ${display(data.voucher_number)}`}>
      <Page size="A4" style={styles.page}>
        <View style={styles.headerBand}>
          <View>
            <Text style={styles.title}>order</Text>
          </View>
        </View>

        <View style={styles.body}>
        <View style={styles.meta}>
          <View style={{ width: "22%" }}>
            <Text style={styles.label}>Order Number</Text>
            <Text style={styles.value}>{pdfValue(data.voucher_number)}</Text>
            <Text style={styles.label}>Order Date</Text>
            <Text style={styles.value}>{pdfValue(data.document_date)}</Text>
          </View>
        </View>

        <View style={[styles.meta, { marginBottom: 0 }]}>
          <View style={styles.column}><Text style={styles.sectionTitle}>BUYER / BILL TO</Text><Text style={styles.label}>Buyer name</Text><Text style={styles.value}>{pdfValue(fromParty.name)}</Text><Text style={styles.label}>Company name &amp; address</Text><Text style={styles.value}>{pdfValue(fromParty.company_name)}</Text><Text style={styles.muted}>{pdfValue(fromParty.address)}</Text><Text style={styles.label}>Contact name / phone</Text><Text style={styles.value}>{pdfValue(fromParty.phone)}</Text><Text style={styles.label}>Email</Text><Text style={styles.value}>{pdfValue(fromParty.email)}</Text><Text style={styles.label}>Tax / registration ID</Text><Text style={styles.value}>{pdfValue(fromParty.tax_id)}</Text></View>
          <View style={styles.column}><Text style={styles.sectionTitle}>SUPPLIER</Text><Text style={styles.label}>Supplier name</Text><Text style={styles.value}>{pdfValue(toParty.name)}</Text><Text style={styles.label}>Company name &amp; address</Text><Text style={styles.value}>{pdfValue(toParty.company_name)}</Text><Text style={styles.muted}>{pdfValue(toParty.address)}</Text><Text style={styles.label}>Contact name / phone</Text><Text style={styles.value}>{pdfValue(toParty.phone)}</Text><Text style={styles.label}>Email</Text><Text style={styles.value}>{pdfValue(toParty.email)}</Text><Text style={styles.label}>Tax / registration ID</Text><Text style={styles.value}>{pdfValue(toParty.tax_id)}</Text></View>
        </View>

        <Text style={styles.tableTitle}>Items</Text>
        <View style={styles.table}>
          <View style={[styles.row, styles.tableHeader]}>
            <Text style={[styles.no, styles.headerText]}>No.</Text><Text style={[styles.description, styles.headerText]}>Description / item code</Text><Text style={[styles.delivery, styles.headerText]}>Delivery date</Text><Text style={[styles.qty, styles.headerText]}>Qty</Text><Text style={[styles.unit, styles.headerText]}>Unit</Text><Text style={[styles.unitPrice, styles.headerText]}>Unit price</Text><Text style={[styles.discount, styles.headerText]}>Discount</Text><Text style={[styles.amount, styles.headerText]}>Amount</Text>
          </View>
          {details.map((item, index) => {
            const row = (item ?? {}) as Record<string, unknown>;
            return (
              <View style={[styles.row, index % 2 === 1 ? styles.altRow : {}]} key={`${display(row.product_name ?? row.ledger)}-${index}`}>
                <Text style={styles.no}>{index + 1}</Text><Text style={styles.description}>{pdfValue(row.description ?? row.product_name ?? row.ledger)}</Text><Text style={styles.delivery}></Text><Text style={styles.qty}>{(Number(row.credit) || 0).toFixed(2)}</Text><Text style={styles.unit}>-</Text><Text style={styles.unitPrice}>{(Number(row.debit) || 0).toFixed(2)}</Text><Text style={styles.discount}>-</Text><Text style={styles.amount}>{pdfValue(row.remarks)}</Text>
              </View>
            );
          })}
        </View>

        <View style={styles.notes}>
          <View style={{ width: "58%" }}><Text style={styles.sectionTitle}>SUPPLY TERMS</Text><Text style={styles.value}>{pdfValue(data.supply_terms)}</Text><Text style={styles.label}>Delivery terms / ship-to address</Text><Text style={styles.value}>{pdfValue(data.delivery_terms)}</Text><Text style={styles.label}>Payment terms / method</Text><Text style={styles.value}>{pdfValue(data.payment_terms)}</Text></View>
          <View style={{ width: "38%" }}><View style={styles.totalRow}><Text>Subtotal</Text><Text>{totalAmount.toFixed(2)}</Text></View><View style={styles.totalRow}><Text>Tax</Text><Text>-</Text></View><View style={styles.totalRow}><Text>Freight / other</Text><Text>-</Text></View><View style={[styles.totalRow, { backgroundColor: "#eaf0f2", padding: 10 }]}><Text style={{ fontFamily: "Geist", fontWeight: 700 }}>TOTAL</Text><Text style={styles.totalValue}>{totalAmount.toFixed(2)}</Text></View></View>
        </View>

        <View style={[styles.notes, { borderTop: 0, marginTop: 14 }]}>
          <View style={styles.column}><Text style={styles.sectionTitle}>{isApproved ? "APPROVED BY" : "PREPARED BY"}</Text><Text style={styles.label}>Name</Text><Text>{preparedOrApprovedBy}</Text><Text style={styles.label}>Signature                         Date</Text></View>
        </View>

        <Text style={styles.footer}>Generated from Order form - {business}</Text>
        </View>
      </Page>
    </Document>
  );
}

export function OrderTemplatePdfPreview({ data }: OrderTemplatePdfPreviewProps) {
  const dataKey = React.useMemo(() => JSON.stringify(data), [data]);
  const [blobUrl, setBlobUrl] = React.useState<string | null>(null);

  React.useEffect(() => {
    let cancelled = false;
    let nextUrl: string | null = null;
    setBlobUrl(null);
    void pdf(<OrderTemplatePdfDocument data={data} />)
      .toBlob()
      .then((blob) => {
        if (cancelled) return;
        nextUrl = URL.createObjectURL(blob);
        setBlobUrl(nextUrl);
      });
    return () => {
      cancelled = true;
      if (nextUrl) URL.revokeObjectURL(nextUrl);
    };
  }, [dataKey, data]);

  if (!blobUrl) {
    return <div className="flex h-full items-center justify-center text-sm text-muted-foreground">Preparing PDF preview…</div>;
  }

  return (
    <ZrimoViewer
      key={blobUrl}
      file={{
        id: `purchase-order-preview-${dataKey}`,
        name: `Order-${String(data.voucher_number ?? "preview")}.pdf`,
        url: blobUrl,
        directUrl: true,
        type: "pdf",
      }}
    />
  );
}
