import type { Metadata } from "next";
import { Card } from "@/siteplane/components/card";
import { SubmitForm } from "./submit-form";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Submit a skill",
  description: "Submit a UI skill to the Skillbook for review.",
  path: "/submit",
});

const CRITERIA = [
  "Has a concrete purpose",
  "Gives a usable instruction, not generic AI filler",
  "Doesn't duplicate an existing skill",
  "Preserves attribution and links its source repository",
  "States its license",
  "Is readable by humans and usable by agents",
];

export default function SubmitPage() {
  return (
    <div className="mx-auto max-w-[640px] px-6 py-12">
      <h1 className="display text-4xl">Submit a skill</h1>
      <p className="mt-2 text-muted-foreground">
        Point us at a skill in your repository. We&apos;ll review it before it&apos;s published.
      </p>

      <Card className="mt-8 p-5">
        <p className="label">
          What gets curated
        </p>
        <ul className="mt-3 space-y-1.5">
          {CRITERIA.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-0.5 text-info-foreground">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </Card>

      <SubmitForm />
    </div>
  );
}
