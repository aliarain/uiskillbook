import { NextResponse } from "next/server";
import { buildSearchIndex } from "@/lib/search-index";

// Built once at deploy time; the command palette fetches it on first open.
export const dynamic = "force-static";

export function GET() {
  return NextResponse.json(buildSearchIndex());
}
