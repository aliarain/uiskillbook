import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CommandPaletteProvider } from "@/components/command-palette-provider";
import { buildSearchIndex } from "@/lib/search-index";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "UI Skillbook — The field guide for building better interfaces with AI",
    template: "%s — UI Skillbook",
  },
  description:
    "Curated UI skills, rules, patterns, and instructions for humans and coding agents.",
  metadataBase: new URL("https://uiskillbook.com"),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const searchIndex = buildSearchIndex();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CommandPaletteProvider items={searchIndex}>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </CommandPaletteProvider>
      </body>
    </html>
  );
}
