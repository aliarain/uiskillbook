"use client";

import { Command } from "cmdk";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import type { SearchItem } from "@/lib/search-index";
import { Dialog, DialogClose, DialogPopup, DialogTitle } from "@/siteplane/components/dialog";
import { Kbd } from "@/siteplane/components/kbd";
import { Skeleton } from "@/siteplane/components/skeleton";

const GROUPS = ["Skills", "Chapters", "Collections", "Design.md"] as const;
const GROUP_LABELS: Record<(typeof GROUPS)[number], string> = {
  Skills: "Skills",
  Chapters: "Learn",
  Collections: "Collections",
  "Design.md": "Design.md",
};

/** ⌘K search: cmdk inside the kit Dialog, which owns backdrop, focus, Escape and scroll lock. */
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

  function select(href: string) {
    onOpenChange(false);
    router.push(href);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPopup showCloseButton={false} className="top-[10vh] max-h-[min(560px,80vh)] max-w-xl gap-0 overflow-hidden p-0">
        <DialogTitle className="sr-only">Search UI Skillbook</DialogTitle>
        <Command label="Search UI Skillbook" className="flex min-h-0 flex-1 flex-col">
          <div className="flex h-12 shrink-0 items-center gap-2.5 border-b border-line px-4">
            <Search size={16} strokeWidth={1.75} aria-hidden className="shrink-0 text-ink-3" />
            <Command.Input
              autoFocus
              placeholder="Search skills and guides…"
              className="h-full min-w-0 flex-1 bg-transparent text-base text-ink outline-none placeholder:text-ink-3 focus-visible:outline-none sm:text-[15px]"
            />
            <DialogClose aria-label="Close search" className="shrink-0 rounded-input">
              <Kbd>esc</Kbd>
            </DialogClose>
          </div>

          <Command.List className="scroll-thin min-h-0 flex-1 overflow-y-auto p-1.5">
            {items === null ? (
              <Command.Loading>
                <div className="space-y-2 p-2" aria-label="Loading">
                  {Array.from({ length: 6 }, (_, i) => (
                    <Skeleton key={i} className="h-8 w-full" />
                  ))}
                </div>
              </Command.Loading>
            ) : (
              <Command.Empty className="px-3 py-10 text-center">
                <p className="text-sm font-medium text-ink">No results</p>
                <p className="mt-1 text-sm text-ink-3">Try a topic like “motion” or “forms”.</p>
              </Command.Empty>
            )}
            {GROUPS.map((group) => {
              const groupItems = (items ?? []).filter((i) => i.group === group);
              if (groupItems.length === 0) return null;
              return (
                <Command.Group
                  key={group}
                  heading={GROUP_LABELS[group]}
                  className="[&_[cmdk-group-heading]]:px-2.5 [&_[cmdk-group-heading]]:pb-1 [&_[cmdk-group-heading]]:pt-2.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-ink-3"
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
                        <span className="text-ink">{item.title}</span>
                        {item.meta && <span className="ml-2 text-ink-3">{item.meta}</span>}
                      </span>
                      <span className="shrink-0 text-xs text-ink-3">{item.subtitle}</span>
                    </Command.Item>
                  ))}
                </Command.Group>
              );
            })}
          </Command.List>

          <div className="hidden shrink-0 items-center gap-4 border-t border-line px-4 py-2 text-xs text-ink-3 sm:flex">
            <span className="flex items-center gap-1.5">
              <Kbd>↑</Kbd>
              <Kbd>↓</Kbd> to navigate
            </span>
            <span className="flex items-center gap-1.5">
              <Kbd>↵</Kbd> to open
            </span>
            <span className="flex items-center gap-1.5">
              <Kbd>esc</Kbd> to close
            </span>
          </div>
        </Command>
      </DialogPopup>
    </Dialog>
  );
}
