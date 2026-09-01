import type { Metadata } from "next";
import { SubmitForm } from "./submit-form";

export const metadata: Metadata = {
  title: "Submit a skill",
  description: "Submit a UI skill to the Skillbook for review.",
};

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
      <h1 className="text-2xl font-semibold tracking-tight text-primary">Submit a skill</h1>
      <p className="mt-2 text-secondary">
        Point us at a skill in your repository. We&apos;ll review it before it&apos;s published.
      </p>

      <div className="mt-8 rounded-md border border-border bg-surface p-5">
        <p className="font-mono text-xs uppercase tracking-wider text-muted">
          What gets curated
        </p>
        <ul className="mt-3 space-y-1.5">
          {CRITERIA.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-secondary">
              <span className="mt-0.5 text-accent">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <SubmitForm />
    </div>
  );
}
