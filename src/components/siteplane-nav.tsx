"use client";

import { ChevronDown } from "lucide-react";
import { Button } from "@/raptrx-ui/components/button";
import { Collapsible, CollapsiblePanel, CollapsibleTrigger } from "@/raptrx-ui/components/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/raptrx-ui/components/sidebar";

export type NavGroup = { group: string; anchor: string; count: number };

/** Side navigation over the catalog's groups: a static Sidebar from lg up, a Collapsible list below. */
export function SiteplaneNav({ groups }: { groups: NavGroup[] }) {
  return (
    <>
      <SidebarProvider stateCookie={false} className="hidden min-h-0 w-auto bg-transparent lg:flex">
        <Sidebar collapsible="none" aria-label="Component groups" className="h-auto bg-transparent">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Groups</SidebarGroupLabel>
              <SidebarMenu>
                {groups.map((g) => (
                  <SidebarMenuItem key={g.anchor}>
                    <SidebarMenuButton render={<a href={`#${g.anchor}`} />}>{g.group}</SidebarMenuButton>
                    <SidebarMenuBadge>{g.count}</SidebarMenuBadge>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </SidebarProvider>

      <Collapsible className="lg:hidden">
        <CollapsibleTrigger render={<Button variant="outline" width="full" align="between" />}>
          Jump to a group
          <ChevronDown aria-hidden />
        </CollapsibleTrigger>
        <CollapsiblePanel>
          <nav aria-label="Component groups" className="mt-2 flex flex-wrap gap-1.5">
            {groups.map((g) => (
              <Button key={g.anchor} variant="ghost" size="sm" shape="pill" render={<a href={`#${g.anchor}`} />}>
                {g.group}
              </Button>
            ))}
          </nav>
        </CollapsiblePanel>
      </Collapsible>
    </>
  );
}
