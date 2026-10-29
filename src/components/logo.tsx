import Link from "next/link";
import { LOGO_PATH } from "@/lib/brand";

/** UI Skillbook mark: a bookmark (the book) with a UI block cut out of it (the interface). */
export function LogoMark({ className = "size-[18px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className={className}>
      <path fillRule="evenodd" d={LOGO_PATH} />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="UI Skillbook home"
      className={`flex items-center gap-1.5 rounded-button text-[15px] font-medium tracking-[-0.01em] text-ink-strong ${className}`}
    >
      <LogoMark />
      UI Skillbook
    </Link>
  );
}
