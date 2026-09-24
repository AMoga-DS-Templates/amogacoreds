import type { Metadata } from "next";
import { OrderTemplateWorkspace } from "./_components/order-template-workspace";
import orderTemplateMock from "./order-template.mock.json";
import {
  getAccountsList,
  getPurchaseOrderProducts,
  getPurchaseOrderContacts,
  getPurchaseOrderApprovalUsers,
  getVoucherUserAddress,
} from "./_lib/queries";

export const metadata: Metadata = {
  title: "Purchase Order",
};

export default async function PurchaseOrderPage() {
  const session = { user: orderTemplateMock.session };
  const [accountRows, productRows, contactRows, approvalUsers, userAddress] =
    await Promise.all([
      getAccountsList(),
      getPurchaseOrderProducts(),
      getPurchaseOrderContacts(),
      getPurchaseOrderApprovalUsers(),
      getVoucherUserAddress(),
    ]);

  const formattedUserAddress = [
    userAddress?.business_address_1,
    userAddress?.business_address_2,
    userAddress?.business_city,
    userAddress?.business_state,
    userAddress?.business_postcode,
    userAddress?.business_country,
  ]
    .map((part) => String(part ?? "").trim())
    .filter(Boolean)
    .join(", ");

  return (
    <OrderTemplateWorkspace
      accounts={accountRows.map((row: any) => ({
        id: String(row.account_uuid ?? row.account_id),
        name: String(row.account_name ?? "Untitled account"),
      }))}
      products={productRows.map((row: any) => ({
        id: String(row.product_uuid ?? ""),
        name: String(row.product_name ?? "Untitled product"),
      })).filter((product: { id: string; name: string }) => product.id && product.name)}
      contacts={contactRows.map((row: any) => ({
        id: String(row.user_catalog_id ?? ""),
        name: String(row.user_email ?? "Contact"),
        companyName: String(row.business_name ?? ""),
        contactName: String(row.full_name ?? ""),
        mobile: String(row.user_mobile ?? ""),
        address: [row.business_address_1, row.business_address_2, row.business_city, row.business_state, row.business_postcode, row.business_country]
          .map((part: unknown) => String(part ?? "").trim())
          .filter(Boolean)
          .join(", "),
      })).filter((contact: { id: string; name: string }) => contact.id && contact.name)}
      approvalUsers={approvalUsers}
      user={{
        businessName: session?.user?.business_name ?? "Business",
        name:
          session?.user?.full_name ??
          session?.user?.user_name ??
          session?.user?.first_name ??
          "User",
        email: session?.user?.user_email ?? "",
        mobile: session?.user?.user_mobile ?? "",
        address: formattedUserAddress,
        current_date: session?.user?.current_date ?? null,
        user_id: session?.user?.user_id ?? null,
        user_uuid: session?.user?.user_uuid ?? null,
        business_uuid: session?.user?.business_uuid ?? null,
        business_number: session?.user?.business_number ?? null,
         created_business_uuid: session?.user?.created_business_uuid ?? null,
         financial_id: session?.user?.financial_id ?? null,
         financial_year_uuid: session?.user?.financial_year_uuid ?? null,
         financial_year: session?.user?.financial_year ?? null,
         period_id: session?.user?.period_id ?? null,
         period_uuid: session?.user?.period_uuid ?? null,
         period_name: session?.user?.period_name ?? null,
         month_id: session?.user?.month_id ?? null,
         month_uuid: session?.user?.month_uuid ?? null,
         month_name: session?.user?.month_name ?? null,
       }}
    />
  );
}
