import { ArrowUpDown, ChevronDown, Edit2, Search, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import { BillStatus, BillType } from "@/lib/types";
import { bills } from "@/lib/data";

const getTypeStyles = (type: BillType) => {
  switch (type) {
    case "Electric":
      return "bg-orange-100 text-orange-700 border-orange-200";
    case "Water":
      return "bg-blue-100 text-blue-700 border-blue-200";
    case "Gas":
      return "bg-slate-100 text-slate-600 border-slate-200";
    case "Internet":
      return "bg-purple-100 text-purple-700 border-purple-200";
    case "Mobile":
      return "bg-pink-100 text-pink-700 border-pink-200";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const getStatusStyles = (status: BillStatus) => {
  if (status === "Correct") return "bg-emerald-100 text-emerald-700";
  if (status === "Disputed") return "bg-red-100 text-red-700";
  return "";
};

export function BillsTable() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold text-slate-900">All Bills</h2>
          <p className="text-xs text-muted-foreground">
            Keep track of all bill from all companies.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search"
              className="h-9 w-[250px] pl-9 bg-white"
            />
          </div>
          <Button variant="outline" size="sm" className="h-9 bg-white">
            Filters
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="rounded-md border bg-white shadow-sm">
        <Table>
          <TableHeader className="bg-slate-50/50">
            <TableRow>
              <TableHead className=" text-muted-foreground">Company</TableHead>
              <TableHead className=" text-muted-foreground">Type</TableHead>
              <TableHead>
                <div className="flex items-center gap-1 cursor-pointer text-muted-foreground hover:text-foreground">
                  Total <ArrowUpDown className="h-3 w-3" />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-1 cursor-pointer text-muted-foreground hover:text-foreground">
                  Billing Period <ArrowUpDown className="h-3 w-3" />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-1 cursor-pointer text-muted-foreground hover:text-foreground">
                  Bill Date <ArrowUpDown className="h-3 w-3" />
                </div>
              </TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bills.map((bill) => (
              <TableRow key={bill.id} className="hover:bg-slate-50/50">
                <TableCell className="font-medium text-slate-700">
                  {bill.company}
                </TableCell>
                <TableCell>
                  <span
                    className={cn(
                      "inline-flex items-center px-2.5 py-0.5 rounded border text-xs font-medium",
                      getTypeStyles(bill.type)
                    )}
                  >
                    {bill.type}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-xs text-muted-foreground">
                      {bill.amount}
                    </span>
                    <span
                      className={cn(
                        "inline-flex items-center px-2 py-0.5 text-xs rounded-full font-medium tracking-wide",
                        getStatusStyles(bill.status)
                      )}
                    >
                      {bill.status}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-xs text-muted-foreground">
                  <div className="flex flex-col">
                    <span>{bill.billingPeriod.split(" - ")[0]}</span>
                    <span>{bill.billingPeriod.split(" - ")[1]}</span>
                  </div>
                </TableCell>
                <TableCell className="text-xs text-muted-foreground">
                  {bill.billDate}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 hover:text-blue-600"
                    >
                      <Edit2 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 hover:text-red-600"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-end pt-4">
        <Pagination className="justify-end">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious className="border bg-white" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink>2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink>3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink>8</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink>9</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink>10</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext className="border bg-white" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
