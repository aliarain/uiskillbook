"use client";

import { Command } from "cmdk";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { SearchItem } from "@/lib/search-index";

const GROUPS = ["Skills", "Chapters", "Collections", "Design.md"] as const;
const GROUP_LABELS: Record<(typeof GROUPS)[number], string> = {
  Skills: "Skills",
  Chapters: "Learn",
  Collections: "Collections",
  "Design.md": "Design.md",
};
const EXIT_MS = 150;

export function CommandPalette({
  items,
  open,
  onOpenChange,
}: {
  items: SearchItem[] | null;
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const router = useRouter();
  // Stays true for EXIT_MS after closing so the exit transition can play.
  const [rendered, setRendered] = useState(open);
  const [shown, setShown] = useState(false);

  if (open && !rendered) setRendered(true);

  useEffect(() => {
    if (open) {
      const frame = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(frame);
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect -- start the exit transition
    setShown(false);
    const timer = setTimeout(() => setRendered(false), EXIT_MS);
    return () => clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onOpenChange(false);
    }
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = original;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onOpenChange]);

  if (!rendered) return null;

  function select(href: string) {
    onOpenChange(false);
    router.push(href);
  }

  return (
    <div
      data-shown={shown}
      className="palette-backdrop fixed inset-0 z-50 flex items-start justify-center bg-black/30 px-4 pt-[10vh] dark:bg-black/60"
      onClick={() => onOpenChange(false)}
    >
      <Command
        label="Search UI Skillbook"
        data-shown={shown}
        className="palette-panel flex max-h-[min(560px,80vh)] w-full max-w-xl flex-col overflow-hidden rounded-feature border border-border bg-background shadow-hero"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex h-12 shrink-0 items-center gap-2.5 border-b border-border px-4">
          <Search size={16} strokeWidth={1.75} aria-hidden className="shrink-0 text-muted" />
          <Command.Input
            autoFocus
            placeholder="Search skills and guides…"
            className="h-full min-w-0 flex-1 bg-transparent text-base text-primary outline-none placeholder:text-muted focus-visible:outline-none sm:text-[15px]"
          />
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            aria-label="Close search"
            className="shrink-0 rounded-input border border-border px-1.5 text-xs leading-5 text-muted transition-colors hover:text-primary"
          >
            esc
          </button>
        </div>

        <Command.List className="scroll-thin min-h-0 flex-1 overflow-y-auto p-1.5">
          {items === null ? (
            <Command.Loading>
              <p className="px-3 py-8 text-center text-sm text-muted">Loading…</p>
            </Command.Loading>
          ) : (
            <Command.Empty className="px-3 py-10 text-center">
              <p className="text-sm font-medium text-primary">No results</p>
              <p className="mt-1 text-sm text-muted">Try a topic like “motion” or “forms”.</p>
            </Command.Empty>
          )}
          {GROUPS.map((group) => {
            const groupItems = (items ?? []).filter((i) => i.group === group);
            if (groupItems.length === 0) return null;
            return (
              <Command.Group
                key={group}
                heading={GROUP_LABELS[group]}
                className="[&_[cmdk-group-heading]]:px-2.5 [&_[cmdk-group-heading]]:pb-1 [&_[cmdk-group-heading]]:pt-2.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted"
              >
                {groupItems.map((item) => (
                  <Command.Item
                    key={`${item.type}-${item.slug}`}
                    value={`${item.type}-${item.slug}`}
                    keywords={[item.title, item.subtitle, item.meta ?? "", item.slug]}
                    onSelect={() => select(item.href)}
                    className="flex cursor-pointer items-center gap-3 rounded-button px-2.5 py-2 text-sm data-[selected=true]:bg-hover"
                  >
                    <span className="min-w-0 flex-1 truncate">
                      <span className="text-primary">{item.title}</span>
                      {item.meta && <span className="ml-2 text-muted">{item.meta}</span>}
                    </span>
                    <span className="shrink-0 text-xs text-muted">{item.subtitle}</span>
                  </Command.Item>
                ))}
              </Command.Group>
            );
          })}
        </Command.List>

        <div className="hidden shrink-0 items-center gap-4 border-t border-border px-4 py-2 text-xs text-muted sm:flex">
          <span>
            <kbd className="font-sans">↑↓</kbd> to navigate
          </span>
          <span>
            <kbd className="font-sans">↵</kbd> to open
          </span>
          <span>
            <kbd className="font-sans">esc</kbd> to close
          </span>
        </div>
      </Command>
    </div>
  );
}
