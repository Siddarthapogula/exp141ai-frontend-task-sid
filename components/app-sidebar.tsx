import * as React from "react";
import {
  LayoutDashboard,
  Layers,
  Receipt,
  LifeBuoy,
  Settings,
  LogOut,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="h-16 border-b border-sidebar-border/10">
        <div className="flex items-center gap-2 px-2 py-2">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-yellow-400 text-sidebar-primary-foreground">
            {/* Simple Logo Placeholder */}
            <Receipt className="size-4 text-black" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-bold text-yellow-400">
              TRANSLATE-A-BILL
            </span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2 py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Dashboard">
              <LayoutDashboard />
              <span>Dashboard</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Suppliers">
              <Layers />
              <span>Suppliers</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* This item is ACTIVE in your design */}
          <SidebarMenuItem>
            <SidebarMenuButton
              isActive
              tooltip="Bills"
              className="data-[active=true]:bg-sidebar-accent data-[active=true]:text-white"
            >
              <Receipt />
              <span>Bills</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>

      {/*footer*/}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <LifeBuoy />
              <span>Support</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton>
              <Settings />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Separator line implicitly handled by spacing or border */}
          <div className="my-2 border-t border-sidebar-border/20" />

          {/* User Profile */}
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src="/placeholder-user.jpg" alt="John Doe" />
                <AvatarFallback className="rounded-lg text-black">
                  JD
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">John Doe</span>
                <span className="truncate text-xs text-sidebar-foreground/70">
                  test@gmail.com
                </span>
              </div>
              <LogOut className="ml-auto size-4" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      {/* this can be added, like in the larger screen i feel annoyed so i am commenting this out. as we have hamburger btn on smaller screens*/}
      {/* <SidebarRail /> */}
    </Sidebar>
  );
}
