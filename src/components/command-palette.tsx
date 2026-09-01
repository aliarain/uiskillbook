"use client";

import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import type { SearchItem } from "@/lib/search-index";

export function CommandPalette({
  items,
  open,
  onOpenChange,
}: {
  items: SearchItem[];
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const router = useRouter();

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

  if (!open) return null;

  const groups = ["Skills", "Chapters", "Collections"] as const;

  function select(href: string) {
    onOpenChange(false);
    router.push(href);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-[#181817]/30 px-4 pt-[12vh]"
      onClick={() => onOpenChange(false)}
    >
      <Command
        label="Search the Skillbook"
        className="w-full max-w-xl overflow-hidden rounded-lg border border-border bg-surface shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        shouldFilter={true}
      >
        <div className="flex items-center border-b border-border px-4">
          <Command.Input
            autoFocus
            placeholder="Search skills, chapters, collections…"
            className="h-12 w-full bg-transparent font-mono text-sm text-primary placeholder:text-muted outline-none"
          />
          <kbd className="ml-2 rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-muted">
            esc
          </kbd>
        </div>
        <Command.List className="max-h-[60vh] overflow-y-auto p-2">
          <Command.Empty className="px-3 py-6 text-center text-sm text-muted">
            No results found.
          </Command.Empty>
          {groups.map((group) => {
            const groupItems = items.filter((i) => i.group === group);
            if (groupItems.length === 0) return null;
            return (
              <Command.Group
                key={group}
                heading={group}
                className="mb-1 [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider [&_[cmdk-group-heading]]:text-muted"
              >
                {groupItems.map((item) => (
                  <Command.Item
                    key={`${item.type}-${item.slug}`}
                    value={`${item.title} ${item.subtitle}`}
                    onSelect={() => select(item.href)}
                    className="flex cursor-pointer items-center justify-between rounded-md px-3 py-2.5 text-sm data-[selected=true]:bg-accent-subtle data-[selected=true]:text-accent"
                  >
                    <span className="text-primary">{item.title}</span>
                    <span className="font-mono text-xs text-muted">{item.subtitle}</span>
                  </Command.Item>
                ))}
              </Command.Group>
            );
          })}
        </Command.List>
        <div className="flex items-center gap-4 border-t border-border px-4 py-2 font-mono text-[11px] text-muted">
          <span>↑↓ navigate</span>
          <span>↵ open</span>
          <span>esc close</span>
        </div>
      </Command>
    </div>
  );
}
