import { Button } from "@/components/ui/button";
import { SummaryCard } from "@/components/summary-card";
import { ChevronRight, Filter, Home, Plus } from "lucide-react";

export default function Page() {
  const summaryData = [
    { title: "Electric", amount: "£1,867.94", type: "electric" as const },
    { title: "Water", amount: "£267.94", type: "water" as const },
    { title: "Gas", amount: "£467.94", type: "gas" as const },
    { title: "Internet", amount: "£67.94", type: "internet" as const },
    { title: "Mobile", amount: "£137.94", type: "mobile" as const },
  ];

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
        {/* buttons, need to change the background thing, for add new bill button. */}
        <div className="flex items-center gap-2">
          <Button variant="outline" className="bg-white">
            My Suppliers
          </Button>
          <Button className="bg-brand-purple hover:bg-brand-purple/90 text-white">
            <Plus className=" size-4" />
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

      <div className="pt-8 text-center text-sm text-muted-foreground">
        [Table Component Will Go Here]
      </div>
    </div>
  );
}
