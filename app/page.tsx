import { Button } from "@/components/ui/button";
import { SummaryCard } from "@/components/summary-card";
import { ChevronRight, Filter, Home, Plus } from "lucide-react";
import { BillsTable } from "@/components/bills-table";
import { summaryData } from "@/lib/data";

export default function Page() {
  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          {/* Breadcrumbs, implemented just for ui using icon.*/}
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Home className="size-3" />
            <ChevronRight className="size-3" />
            <span>Suppliers</span>
          </div>

          <h1 className="text-2xl font-medium tracking-tight text-foreground">
            My Bills
          </h1>
          <p className="text-sm text-muted-foreground">
            Check how much you spent and all individual bills
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="h-10 rounded-lg border-slate-200 bg-white px-4 font-semibold text-slate-700 shadow-sm hover:bg-slate-50 hover:text-slate-900"
          >
            My Suppliers
          </Button>

          <Button className="h-10 rounded-lg bg-linear-to-r from-[#5819bc] to-[#7448dc] px-4 font-semibold text-white shadow-md hover:from-[#5b21b6] hover:to-[#7c3aed]">
            <Plus className=" size-5" />
            Add New Bill
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-base font-semibold">
              How much did you spend with each supplier?
            </h2>
            <p className="text-xs text-muted-foreground">
              Keep track of how much did you spent with each company.
            </p>
          </div>

          <Button variant="outline" size="sm" className="bg-white h-8">
            Filters
            <ChevronRight className="ml-2 size-3 rotate-90" />
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {summaryData.map((card) => (
            <SummaryCard
              key={card.title}
              title={card.title}
              amount={card.amount}
              type={card.type}
            />
          ))}
        </div>
      </div>

      <div className="pt-4">
        <BillsTable />
      </div>
    </div>
  );
}
