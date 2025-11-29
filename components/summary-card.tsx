import { cn } from "@/lib/utils";

type CardType = "electric" | "water" | "gas" | "internet" | "mobile";

interface SummaryCardProps {
  title: string;
  amount: string;
  type: CardType;
}

const textColors: Record<CardType, string> = {
  electric: "text-badge-electric-text",
  water: "text-badge-water-text",
  gas: "text-badge-gas-text",
  internet: "text-badge-internet-text",
  mobile: "text-badge-mobile-text",
};

export function SummaryCard({ title, amount, type }: SummaryCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-md border border-slate-200 bg-white p-3 py-5 shadow-[0px_1px_2px_rgba(0,0,0,0.04)] transition-all hover:shadow-sm">
      <div className={cn("text-sm font-medium", textColors[type])}>{title}</div>
      <div className="mt-1">
        <h3 className="text-xl font-medium tracking-tight text-slate-900">
          {amount}
        </h3>
        <p className="mt-1 text-[11px] font-medium text-slate-400">
          Total Spent
        </p>
      </div>
    </div>
  );
}
