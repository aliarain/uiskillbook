import Link from "next/link";
import { FileQuestion } from "lucide-react";
import { Button } from "@/siteplane/components/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/siteplane/components/empty-state";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 py-24">
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <FileQuestion aria-hidden />
          </EmptyMedia>
          <EmptyTitle>Page not found</EmptyTitle>
          <EmptyDescription>The page moved or never existed.</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div className="flex flex-wrap justify-center gap-2">
            <Button variant="inverse" render={<Link href="/skills" />}>
              Browse skills
            </Button>
            <Button variant="outline" render={<Link href="/" />}>
              Home
            </Button>
          </div>
        </EmptyContent>
      </Empty>
    </div>
  );
}
