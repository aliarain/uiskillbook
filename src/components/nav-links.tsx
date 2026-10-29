"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/skills", label: "Skills" },
  { href: "/design-md", label: "Design.md" },
  { href: "/chapters", label: "Learn" },
  { href: "/collections", label: "Collections" },
  { href: "/agents", label: "Agents" },
];

export function NavLinks({ mobile = false }: { mobile?: boolean }) {
  const pathname = usePathname();
  return (
    <nav
      aria-label={mobile ? "Main (mobile)" : "Main"}
      className={
        mobile
          ? "scroll-thin -mx-6 flex gap-0.5 overflow-x-auto px-5 pb-2 md:hidden"
          : "hidden items-center gap-0.5 md:flex"
      }
    >
      {NAV.map((item) => {
        const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className="pill border-transparent px-4"
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
