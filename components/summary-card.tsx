import { TEXT_COLORS } from "@/lib/constants";
import { CardType } from "@/lib/types";
import { cn } from "@/lib/utils";

interface SummaryCardProps {
  title: string;
  amount: string;
  type: CardType;
}
export function SummaryCard({ title, amount, type }: SummaryCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-md border border-slate-200 bg-white p-3 py-5 shadow-[0px_1px_2px_rgba(0,0,0,0.04)] transition-all hover:shadow-sm">
      <div className={cn("text-sm font-medium", TEXT_COLORS[type])}>
        {title}
      </div>
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
