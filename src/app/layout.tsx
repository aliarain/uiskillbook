import type { Metadata } from "next";
import Script from "next/script";
import "@fontsource-variable/inter";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CommandPaletteProvider } from "@/components/command-palette-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: "UI Skillbook — The field guide for building better interfaces with AI",
    template: "%s — UI Skillbook",
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": [{ url: "/feed.xml", title: "UI Skillbook" }] },
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: "/",
    title: "UI Skillbook — The field guide for building better interfaces with AI",
    description: SITE_DESCRIPTION,
  },
  twitter: { card: "summary_large_image", creator: "@realaliarain" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const umamiScriptUrl = process.env.UMAMI_SCRIPT_URL;
  const umamiWebsiteId = process.env.UMAMI_WEBSITE_ID;

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="h-full"
    >
      <head>
        {umamiScriptUrl && umamiWebsiteId && (
          <Script
            defer
            src={umamiScriptUrl}
            data-website-id={umamiWebsiteId}
            strategy="afterInteractive"
          />
        )}
      </head>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <ThemeProvider>
          <CommandPaletteProvider>
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </CommandPaletteProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
