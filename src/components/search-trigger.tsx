"use client";

import { Search } from "lucide-react";
import { useCommandPalette } from "./command-palette-provider";

export function SearchTrigger({ className = "" }: { className?: string }) {
  const { setOpen } = useCommandPalette();
  return (
    <button
      onClick={() => setOpen(true)}
      className={`icon-button w-auto gap-2 px-2.5 ${className}`}
      aria-label="Search the Skillbook"
      aria-keyshortcuts="Meta+K"
    >
      <Search size={15} strokeWidth={1.75} aria-hidden />
      <kbd className="hidden rounded-input border border-border px-1.5 text-xs leading-5 text-muted sm:inline">
        ⌘K
      </kbd>
    </button>
  );
}

export function SearchBar({ className = "" }: { className?: string }) {
  const { setOpen } = useCommandPalette();
  return (
    <button
      onClick={() => setOpen(true)}
      aria-keyshortcuts="Meta+K"
      className={`btn btn-secondary h-11 justify-between px-3.5 font-normal text-muted ${className}`}
    >
      <span className="flex items-center gap-2">
        <Search size={15} strokeWidth={1.75} aria-hidden />
        Search skills, topics, authors…
      </span>
      <kbd className="rounded-input border border-border px-1.5 text-xs leading-5 text-muted">⌘K</kbd>
    </button>
  );
}
