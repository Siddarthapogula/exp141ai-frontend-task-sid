export interface Bill {
  id: string;
  company: string;
  type: BillType;
  amount: string;
  status: BillStatus;
  billingPeriod: string;
  billDate: string;
}

export type BillStatus = "Correct" | "Disputed";
export type BillType = "Electric" | "Water" | "Gas" | "Internet" | "Mobile";
export type CardType = "electric" | "water" | "gas" | "internet" | "mobile";
