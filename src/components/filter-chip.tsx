import Link from "next/link";
import { Button } from "@/siteplane/components/button";

/** A filter that is a link (state lives in the URL), styled as a kit pill button. */
export function FilterChip({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Button
      size="sm"
      shape="pill"
      variant={active ? "default" : "outline"}
      aria-current={active ? "page" : undefined}
      render={<Link href={href} />}
    >
      {children}
    </Button>
  );
}
