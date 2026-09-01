"use client";

import { useCommandPalette } from "./command-palette-provider";

export function SearchTrigger({ className = "" }: { className?: string }) {
  const { setOpen } = useCommandPalette();
  return (
    <button
      onClick={() => setOpen(true)}
      className={`flex items-center gap-2 text-secondary hover:text-primary transition-colors ${className}`}
      aria-label="Search the Skillbook"
    >
      <SearchIcon />
      <kbd className="hidden sm:inline-flex items-center gap-0.5 rounded border border-border px-1.5 py-0.5 font-mono text-[11px] text-muted">
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
      className={`card flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left text-sm text-muted ${className}`}
    >
      <span className="flex items-center gap-2">
        <SearchIcon />
        Search skills, topics, authors…
      </span>
      <kbd className="rounded border border-border px-1.5 py-0.5 font-mono text-[11px] text-muted">
        ⌘K
      </kbd>
    </button>
  );
}

function SearchIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <path
        d="M6.5 11a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM13 13l-3.15-3.15"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
