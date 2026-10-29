"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { Menu as MenuIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuPopup,
  NavigationMenuTrigger,
} from "@/siteplane/components/navigation-menu";
import { Button } from "@/siteplane/components/button";
import { Sheet, SheetHeader, SheetPanel, SheetPopup, SheetTitle, SheetTrigger } from "@/siteplane/components/sheet";

const PRIMARY = [
  { href: "/skills", label: "Skills" },
  { href: "/siteplane-ui", label: "Siteplane UI" },
  { href: "/design-md", label: "Design.md" },
  { href: "/chapters", label: "Learn" },
];

const MORE = [
  { href: "/collections", label: "Collections", description: "Curated sets of skills for one job." },
  { href: "/agents", label: "Agents", description: "Setup guides for each coding agent." },
  { href: "/authors", label: "Authors", description: "Everyone who wrote a skill here." },
  { href: "/api-docs", label: "API and MCP", description: "Read the catalog from code or an agent." },
];

function useIsActive() {
  const pathname = usePathname();
  return (href: string) => pathname === href || pathname.startsWith(`${href}/`);
}

export function NavLinks() {
  const isActive = useIsActive();
  const anchor = useRef<HTMLUListElement>(null);

  return (
    <NavigationMenu aria-label="Main" className="hidden md:flex">
      <NavigationMenuList ref={anchor}>
        {PRIMARY.map((item) => (
          <NavigationMenuItem key={item.href}>
            <NavigationMenuLink active={isActive(item.href)} render={<Link href={item.href} />}>
              {item.label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem value="more">
          <NavigationMenuTrigger>More</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-80 max-w-full gap-1 p-2">
              {MORE.map((item) => (
                <NavigationMenuLink
                  key={item.href}
                  active={isActive(item.href)}
                  description={item.description}
                  render={<Link href={item.href} />}
                >
                  {item.label}
                </NavigationMenuLink>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuPopup anchor={anchor} />
    </NavigationMenu>
  );
}

/** Below md the header collapses to one button that opens every section in a sheet. */
export function MobileNav() {
  const isActive = useIsActive();
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger render={<Button variant="ghost" size="icon-md" aria-label="Open menu" className="md:hidden" />}>
        <MenuIcon aria-hidden />
      </SheetTrigger>
      <SheetPopup side="right">
        <SheetHeader>
          <SheetTitle>UI Skillbook</SheetTitle>
        </SheetHeader>
        <SheetPanel>
          <nav aria-label="Main (mobile)" className="flex flex-col gap-1">
            {[...PRIMARY, ...MORE].map((item) => (
              <Button
                key={item.href}
                variant={isActive(item.href) ? "default" : "ghost"}
                align="start"
                width="full"
                aria-current={isActive(item.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
                render={<Link href={item.href} />}
              >
                {item.label}
              </Button>
            ))}
          </nav>
        </SheetPanel>
      </SheetPopup>
    </Sheet>
  );
}
