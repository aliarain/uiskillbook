import Link from "next/link";
import { Button } from "@/siteplane/components/button";
import { SearchTrigger } from "./search-trigger";
import { ThemeToggle } from "./theme-toggle";
import { MobileNav, NavLinks } from "./nav-links";
import { SimpleIcon } from "./simple-icon";
import { LogoMark } from "./logo-mark";

const GITHUB_URL = "https://github.com/aliarain/uiskillbook";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 hairline-b bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-4 px-6">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-control text-[15px] font-semibold tracking-[-0.01em] text-foreground"
        >
          <LogoMark />
          UI Skillbook
        </Link>

        <NavLinks />

        <div className="flex items-center gap-1">
          <SearchTrigger />
          <Button
            variant="ghost"
            size="icon-md"
            aria-label="View source on GitHub"
            render={<a href={GITHUB_URL} target="_blank" rel="noreferrer" />}
          >
            <SimpleIcon slug="github" className="size-[18px]" />
          </Button>
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
