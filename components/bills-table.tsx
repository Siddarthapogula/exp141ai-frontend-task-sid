"use client";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  ChevronDown,
  Edit2,
  Search,
  Trash2,
} from "lucide-react";

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
import { Bill } from "@/lib/types";
import { bills } from "@/lib/data";
import { useMemo, useState } from "react";
import { STATUS_STYLES, TYPE_STYLES } from "@/lib/constants";

const parseCurrency = (value: string) => {
  return parseFloat(value.replace(/[^0-9.-]+/g, ""));
};

const parseDate = (dateStr: string) => {
  const [day, month, year] = dateStr.split("/");
  return new Date(parseInt(year), parseInt(month) - 1, parseInt(day)).getTime();
};

const parseDateRange = (rangeStr: string) => {
  const startDate = rangeStr.split(" - ")[0];
  return parseDate(startDate);
};

export function BillsTable() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Bill | null;
    direction: "asc" | "desc";
  }>({ key: null, direction: "asc" });
  const initialsBills = bills;
  const sortedAndFilteredBills = useMemo(() => {
    let processData = [...initialsBills];
    if (searchTerm) {
      const lowerTerm = searchTerm.toLowerCase();
      processData = processData.filter(
        (bill) =>
          bill.company.toLowerCase().includes(lowerTerm) ||
          bill.amount.toLowerCase().includes(lowerTerm)
      );
    }

    if (sortConfig.key !== null) {
      processData.sort((a, b) => {
        let aValue: any = a[sortConfig.key!];
        let bValue: any = b[sortConfig.key!];
        if (sortConfig.key === "amount") {
          aValue = parseCurrency(a.amount);
          bValue = parseCurrency(b.amount);
        } else if (sortConfig.key === "billDate") {
          aValue = parseDate(a.billDate);
          bValue = parseDate(b.billDate);
        } else if (sortConfig.key === "billingPeriod") {
          aValue = parseDateRange(a.billingPeriod);
          bValue = parseDateRange(b.billingPeriod);
        }
        if (aValue < bValue) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }
    return processData;
  }, [sortConfig, searchTerm]);

  const requestSort = (key: keyof Bill) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (columnKey: keyof Bill) => {
    if (sortConfig.key !== columnKey)
      return <ArrowUpDown className="ml-2 h-3 w-3" />;
    if (sortConfig.direction === "asc")
      return <ArrowUp className="ml-2 h-3 w-3 text-slate-900" />;
    return <ArrowDown className="ml-2 h-3 w-3 text-slate-900" />;
  };
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
              onChange={(e) => setSearchTerm(e.target.value)}
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
              <TableHead onClick={() => requestSort("amount")}>
                <div className="flex items-center gap-1 cursor-pointer text-muted-foreground hover:text-foreground">
                  Total {getSortIcon("amount")}
                </div>
              </TableHead>
              <TableHead onClick={() => requestSort("billingPeriod")}>
                <div className="flex items-center gap-1 cursor-pointer text-muted-foreground hover:text-foreground">
                  Billing Period {getSortIcon("billingPeriod")}
                </div>
              </TableHead>
              <TableHead onClick={() => requestSort("billDate")}>
                <div className="flex items-center gap-1 cursor-pointer text-muted-foreground hover:text-foreground">
                  Bill Date {getSortIcon("billDate")}
                </div>
              </TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedAndFilteredBills.length > 0 ? (
              sortedAndFilteredBills.map((bill) => (
                <TableRow key={bill.id} className="hover:bg-slate-50/50">
                  <TableCell className="font-medium text-slate-700">
                    {bill.company}
                  </TableCell>
                  <TableCell>
                    <span
                      className={cn(
                        "inline-flex items-center px-2.5 py-0.5 rounded border text-xs font-medium",
                        TYPE_STYLES[bill.type]
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
                          STATUS_STYLES[bill.status]
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
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={6}
                  className="h-24 text-center text-muted-foreground"
                >
                  No results found.
                </TableCell>
              </TableRow>
            )}
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
