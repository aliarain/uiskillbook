"use client";

import { useSyncExternalStore, type ReactNode } from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { SiteplaneUIProvider } from "@/siteplane/system/provider/siteplane-ui-provider";
import { TooltipProvider } from "@/siteplane/components/tooltip";
import { ToastProvider } from "@/siteplane/components/toast";

const subscribe = () => () => {};

/** True after hydration; next-themes can't know the resolved theme on the server. */
export function useMounted() {
  return useSyncExternalStore(subscribe, () => true, () => false);
}

function KitTheme({ children }: { children: ReactNode }) {
  const { resolvedTheme } = useTheme();
  const mounted = useMounted();
  return (
    <SiteplaneUIProvider
      className="contents"
      data-theme={mounted ? (resolvedTheme === "dark" ? "dark" : "light") : undefined}
    >
      <TooltipProvider>
        <ToastProvider>{children}</ToastProvider>
      </TooltipProvider>
    </SiteplaneUIProvider>
  );
}

/** next-themes writes .dark and data-theme on <html>; SiteplaneUIProvider passes it to kit portals. */
export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider attribute={["class", "data-theme"]} defaultTheme="system" enableSystem>
      <KitTheme>{children}</KitTheme>
    </NextThemesProvider>
  );
}
