"use client";

import { useSyncExternalStore, type ReactNode } from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { SiteplaneUIProvider } from "@/siteplane/system/provider/siteplane-ui-provider";
import { ToastProvider } from "@/siteplane/components/toast";

const subscribe = () => () => {};

/** False during SSR and hydration, true after: the saved theme is only known in the browser. */
export function useMounted() {
  return useSyncExternalStore(subscribe, () => true, () => false);
}

// Kit portals (dialogs, menus, toasts) render outside <html>'s subtree styles,
// so the provider passes them the resolved light/dark value.
function KitTheme({ children }: { children: ReactNode }) {
  const { resolvedTheme } = useTheme();
  const mounted = useMounted();
  return (
    <SiteplaneUIProvider data-theme={mounted ? (resolvedTheme === "dark" ? "dark" : "light") : undefined}>
      <ToastProvider>{children}</ToastProvider>
    </SiteplaneUIProvider>
  );
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider attribute={["class", "data-theme"]} defaultTheme="system" enableSystem>
      <KitTheme>{children}</KitTheme>
    </NextThemesProvider>
  );
}
