"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { SearchItem } from "@/lib/search-index";
import { CommandPalette } from "./command-palette";

type Ctx = { open: boolean; setOpen: (v: boolean) => void };

const CommandPaletteContext = createContext<Ctx | null>(null);

export function useCommandPalette() {
  const ctx = useContext(CommandPaletteContext);
  if (!ctx) throw new Error("useCommandPalette must be used within CommandPaletteProvider");
  return ctx;
}

export function CommandPaletteProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<SearchItem[] | null>(null);
  const [requested, setRequested] = useState(false);

  // The index is ~280 items, so it loads on first open instead of shipping in every page.
  if (open && !requested) setRequested(true);

  useEffect(() => {
    if (!requested) return;
    fetch("/search-index.json")
      .then((res) => (res.ok ? res.json() : []))
      .then(setItems)
      .catch(() => setItems([]));
  }, [requested]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <CommandPaletteContext.Provider value={{ open, setOpen }}>
      {children}
      <CommandPalette items={items} open={open} onOpenChange={setOpen} />
    </CommandPaletteContext.Provider>
  );
}
