import orderTemplateMock from "../order-template.mock.json";

export async function getAccountsList() {
  return orderTemplateMock.accounts;
}

export async function getPurchaseOrderProducts() {
  return orderTemplateMock.products;
}

export async function getPurchaseOrderContacts() {
  return orderTemplateMock.contacts;
}

export async function getPurchaseOrderApprovalUsers() {
  return orderTemplateMock.approvalUsers;
}

export async function getVoucherUserAddress() {
  return orderTemplateMock.userAddress;
}
