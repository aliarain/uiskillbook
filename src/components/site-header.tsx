import Link from "next/link";
import { SearchTrigger } from "./search-trigger";
import { ThemeToggle } from "./theme-toggle";
import { NavLinks } from "./nav-links";
import { SimpleIcon } from "./simple-icon";

const GITHUB_URL = "https://github.com/aliarain/uiskillbook";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <Link href="/" className="rounded-button text-[15px] font-semibold tracking-[-0.01em] text-strong">
          UI Skillbook
        </Link>

        <NavLinks />

        <div className="flex items-center gap-1">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="View source on GitHub"
            className="icon-button"
          >
            <SimpleIcon slug="github" className="size-[18px]" />
          </a>
          <ThemeToggle />
          <SearchTrigger />
        </div>
      </div>
      <div className="mx-auto max-w-[1200px] px-6">
        <NavLinks mobile />
      </div>
    </header>
  );
}
