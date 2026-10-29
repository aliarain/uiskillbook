"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { ChevronDown, Menu as MenuIcon } from "lucide-react";
import { Button } from "@/siteplane/components/button";
import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "@/siteplane/components/collapsible";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuPopup,
  NavigationMenuTrigger,
} from "@/siteplane/components/navigation-menu";
import {
  Sheet,
  SheetHeader,
  SheetPanel,
  SheetPopup,
  SheetTitle,
  SheetTrigger,
} from "@/siteplane/components/sheet";

export type NavLink = { href: string; label: string; description?: string };
export type NavSection = { label: string; href: string; links?: NavLink[]; all?: NavLink };

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

/** Desktop: Siteplane NavigationMenu with dropdowns. Mobile: a Sheet with collapsible sections. */
export function SiteNav({ sections }: { sections: NavSection[] }) {
  const pathname = usePathname();
  const anchor = useRef<HTMLUListElement>(null);

  return (
    <NavigationMenu aria-label="Main" className="hidden md:flex">
      <NavigationMenuList ref={anchor}>
        {sections.map((section) =>
          section.links ? (
            <NavigationMenuItem key={section.href} value={section.href}>
              <NavigationMenuTrigger data-active={isActive(pathname, section.href) || undefined}>
                {section.label}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[30rem] max-w-full grid-cols-2 gap-1 p-3">
                  {section.links.map((link) => (
                    <NavigationMenuLink
                      key={link.href}
                      description={link.description}
                      render={<Link href={link.href} />}
                    >
                      {link.label}
                    </NavigationMenuLink>
                  ))}
                  {section.all && (
                    <NavigationMenuLink className="col-span-2" render={<Link href={section.all.href} />}>
                      {section.all.label}
                    </NavigationMenuLink>
                  )}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={section.href}>
              <NavigationMenuLink
                aria-current={isActive(pathname, section.href) ? "page" : undefined}
                render={<Link href={section.href} />}
              >
                {section.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          )
        )}
      </NavigationMenuList>
      <NavigationMenuPopup anchor={anchor} />
    </NavigationMenu>
  );
}

export function MobileNav({ sections }: { sections: NavSection[] }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger render={<Button aria-label="Open menu" size="icon-md" variant="ghost" className="md:hidden" />}>
        <MenuIcon aria-hidden />
      </SheetTrigger>
      <SheetPopup side="left">
        <SheetHeader>
          <SheetTitle>UI Skillbook</SheetTitle>
        </SheetHeader>
        <SheetPanel>
          <nav aria-label="Main (mobile)" className="flex flex-col gap-1">
            {sections.map((section) =>
              section.links ? (
                <Collapsible key={section.href}>
                  <CollapsibleTrigger
                    render={<Button variant="ghost" className="w-full justify-between" />}
                  >
                    {section.label}
                    <ChevronDown aria-hidden className="transition-transform in-data-[panel-open]:rotate-180" />
                  </CollapsibleTrigger>
                  <CollapsiblePanel>
                    <div className="flex flex-col gap-0.5 py-1 pl-3">
                      {[...section.links, ...(section.all ? [section.all] : [])].map((link) => (
                        <Button
                          key={link.href}
                          variant="ghost"
                          size="sm"
                          className="justify-start"
                          render={<Link href={link.href} onClick={close} />}
                        >
                          {link.label}
                        </Button>
                      ))}
                    </div>
                  </CollapsiblePanel>
                </Collapsible>
              ) : (
                <Button
                  key={section.href}
                  variant="ghost"
                  className="justify-start"
                  render={<Link href={section.href} onClick={close} />}
                >
                  {section.label}
                </Button>
              )
            )}
          </nav>
        </SheetPanel>
      </SheetPopup>
    </Sheet>
  );
}
