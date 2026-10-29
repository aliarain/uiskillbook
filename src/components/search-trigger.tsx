"use client";

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
      <SearchIcon />
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
        <SearchIcon />
        Search skills, topics, authors…
      </span>
      <kbd className="rounded-input border border-border px-1.5 text-xs leading-5 text-muted">⌘K</kbd>
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
