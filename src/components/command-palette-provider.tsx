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

export function CommandPaletteProvider({
  items,
  children,
}: {
  items: SearchItem[];
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

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
