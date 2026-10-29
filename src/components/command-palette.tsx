"use client";

import { ArrowDownIcon, ArrowUpIcon, CornerDownLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Fragment } from "react";
import type { SearchItem } from "@/lib/search-index";
import {
  Command,
  CommandCollection,
  CommandDialog,
  CommandDialogPopup,
  CommandEmpty,
  CommandFooter,
  CommandGroup,
  CommandGroupLabel,
  CommandInput,
  CommandItem,
  CommandList,
  CommandPanel,
  CommandSeparator,
} from "@/siteplane/components/command";
import { Kbd, KbdGroup } from "@/siteplane/components/kbd";
import { Skeleton } from "@/siteplane/components/skeleton";

const GROUPS: { key: string; label: string }[] = [
  { key: "Skills", label: "Skills" },
  { key: "Siteplane UI", label: "Siteplane UI" },
  { key: "Chapters", label: "Learn" },
  { key: "Collections", label: "Collections" },
  { key: "Design.md", label: "Design.md" },
];

type Group = { key: string; label: string; items: SearchItem[] };

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
  const groups: Group[] = GROUPS.map((g) => ({ ...g, items: (items ?? []).filter((i) => i.group === g.key) })).filter(
    (g) => g.items.length > 0
  );

  function select(href: string) {
    onOpenChange(false);
    router.push(href);
  }

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandDialogPopup aria-label="Search UI Skillbook">
        <Command
          items={groups}
          itemToStringValue={(item: SearchItem) => [item.title, item.subtitle, item.meta, item.slug].join(" ")}
        >
          <CommandInput placeholder="Search skills, components and guides…" />
          <CommandPanel>
            {items === null ? (
              <div className="space-y-2 p-2" aria-label="Loading">
                {Array.from({ length: 6 }, (_, i) => (
                  <Skeleton key={i} className="h-8 w-full" />
                ))}
              </div>
            ) : (
              <CommandEmpty>No results. Try a topic like “motion” or “forms”.</CommandEmpty>
            )}
            <CommandList>
              {(group: Group, index: number) => (
                <Fragment key={group.key}>
                  <CommandGroup items={group.items}>
                    <CommandGroupLabel>{group.label}</CommandGroupLabel>
                    <CommandCollection>
                      {(item: SearchItem) => (
                        <CommandItem key={`${item.type}-${item.slug}`} value={item} onClick={() => select(item.href)}>
                          <span className="min-w-0 flex-1 truncate">
                            {item.title}
                            {item.meta && <span className="ml-2 text-ink-3">{item.meta}</span>}
                          </span>
                          <span className="shrink-0 text-xs text-ink-3">{item.subtitle}</span>
                        </CommandItem>
                      )}
                    </CommandCollection>
                  </CommandGroup>
                  {index < groups.length - 1 && <CommandSeparator />}
                </Fragment>
              )}
            </CommandList>
          </CommandPanel>
          <CommandFooter>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <KbdGroup>
                  <Kbd>
                    <ArrowUpIcon />
                  </Kbd>
                  <Kbd>
                    <ArrowDownIcon />
                  </Kbd>
                </KbdGroup>
                <span>Navigate</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Kbd>
                  <CornerDownLeftIcon />
                </Kbd>
                <span>Open</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <Kbd>Esc</Kbd>
              <span>Close</span>
            </div>
          </CommandFooter>
        </Command>
      </CommandDialogPopup>
    </CommandDialog>
  );
}
