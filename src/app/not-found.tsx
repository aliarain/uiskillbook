import Link from "next/link";
import { Button } from "@/siteplane/components/button";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 py-24">
      <p className="label">404</p>
      <h1 className="display mt-2 text-4xl">Page not found</h1>
      <p className="mt-3 text-ink-2">The page moved or never existed.</p>
      <div className="mt-8 flex gap-3">
        <Button render={<Link href="/skills" />}>Browse skills</Button>
        <Button variant="outline" render={<Link href="/" />}>
          Home
        </Button>
      </div>
    </div>
  );
}
