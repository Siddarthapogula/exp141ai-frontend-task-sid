import { BillStatus, BillType, CardType } from "./types";

export const TYPE_STYLES: Record<BillType, string> = {
  Electric: "bg-orange-100 text-orange-700 border-orange-200",
  Water: "bg-blue-100 text-blue-700 border-blue-200",
  Gas: "bg-slate-100 text-slate-600 border-slate-200",
  Internet: "bg-purple-100 text-purple-700 border-purple-200",
  Mobile: "bg-pink-100 text-pink-700 border-pink-200",
};

export const STATUS_STYLES: Record<BillStatus, string> = {
  Correct: "bg-emerald-100 text-emerald-700",
  Disputed: "bg-red-100 text-red-700",
};

export const TEXT_COLORS: Record<CardType, string> = {
  electric: "text-badge-electric-text",
  water: "text-badge-water-text",
  gas: "text-badge-gas-text",
  internet: "text-badge-internet-text",
  mobile: "text-badge-mobile-text",
};
