import Link from "next/link";
import { SearchTrigger } from "./search-trigger";

const NAV = [
  { href: "/skills", label: "Skills" },
  { href: "/chapters", label: "Chapters" },
  { href: "/collections", label: "Collections" },
  { href: "/agents", label: "Agents" },
  { href: "/submit", label: "Submit" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex h-16 max-w-[1140px] items-center justify-between px-6">
        <Link href="/" className="font-mono text-sm font-semibold tracking-wide text-primary">
          UI SKILLBOOK
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-secondary transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-secondary transition-colors hover:text-primary"
          >
            GitHub
          </a>
        </nav>

        <SearchTrigger />
      </div>
    </header>
  );
}
