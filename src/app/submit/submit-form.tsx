"use client";

import { useState } from "react";

export function SubmitForm() {
  const [repo, setRepo] = useState("");
  const [path, setPath] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  const subject = encodeURIComponent(`Skill submission: ${repo || "untitled"}`);
  const body = encodeURIComponent(
    `Repository: ${repo}\nSkill path: ${path}\nAuthor: ${author}\n\nDescription:\n${description}`
  );
  const mailtoHref = `mailto:submit@uiskillbook.com?subject=${subject}&body=${body}`;

  return (
    <form
      className="mt-8 space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = mailtoHref;
      }}
    >
      <Field label="GitHub repository URL">
        <input
          required
          type="url"
          value={repo}
          onChange={(e) => setRepo(e.target.value)}
          placeholder="https://github.com/user/repo"
          className="w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-primary outline-none focus-visible:border-accent"
        />
      </Field>

      <Field label="Skill path" hint="e.g. skills/optical-alignment/SKILL.md">
        <input
          required
          type="text"
          value={path}
          onChange={(e) => setPath(e.target.value)}
          placeholder="skills/optical-alignment/SKILL.md"
          className="w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-primary outline-none focus-visible:border-accent"
        />
      </Field>

      <Field label="Author">
        <input
          required
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Your name or handle"
          className="w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-primary outline-none focus-visible:border-accent"
        />
      </Field>

      <Field label="Description">
        <textarea
          required
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="What does this skill teach an agent to do?"
          className="w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-primary outline-none focus-visible:border-accent"
        />
      </Field>

      <button
        type="submit"
        className="rounded-md border border-accent bg-accent-subtle px-4 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent/10"
      >
        Submit for review
      </button>
      <p className="text-xs text-muted">
        Opens your email client with the submission pre-filled. We review every skill before
        it&apos;s published — see our curation criteria in the About page.
      </p>
    </form>
  );
}

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="font-mono text-xs uppercase tracking-wider text-muted">{label}</span>
      {hint && <span className="ml-2 text-xs text-muted">{hint}</span>}
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
