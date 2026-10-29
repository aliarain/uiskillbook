import type { Metadata } from "next";
import { IBM_Plex_Sans, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CommandPaletteProvider } from "@/components/command-palette-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

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
      className={`${inter.variable} ${plexSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
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
      <body className="min-h-full flex flex-col">
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
