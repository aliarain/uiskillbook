"use client";

import { useState } from "react";

const REPO = "aliarain/uiskillbook";

export function SubmitForm() {
  const [repo, setRepo] = useState("");
  const [path, setPath] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  const issueUrl = `https://github.com/${REPO}/issues/new?${new URLSearchParams({
    template: "skill-submission.yml",
    title: `Skill: ${path || repo || "untitled"}`,
    repo,
    path,
    author,
    description,
  }).toString()}`;

  return (
    <form
      className="mt-8 space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        window.open(issueUrl, "_blank", "noreferrer");
      }}
    >
      <Field label="GitHub repository URL">
        <input
          required
          type="url"
          value={repo}
          onChange={(e) => setRepo(e.target.value)}
          placeholder="https://github.com/user/repo"
          className="w-full rounded-input border border-border bg-background px-3 py-2 text-base text-primary transition-colors placeholder:text-muted hover:border-border-strong sm:text-sm"
        />
      </Field>

      <Field label="Skill path" hint="e.g. skills/optical-alignment/SKILL.md">
        <input
          required
          type="text"
          value={path}
          onChange={(e) => setPath(e.target.value)}
          placeholder="skills/optical-alignment/SKILL.md"
          className="w-full rounded-input border border-border bg-background px-3 py-2 text-base text-primary transition-colors placeholder:text-muted hover:border-border-strong sm:text-sm"
        />
      </Field>

      <Field label="Author">
        <input
          required
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Your name or handle"
          className="w-full rounded-input border border-border bg-background px-3 py-2 text-base text-primary transition-colors placeholder:text-muted hover:border-border-strong sm:text-sm"
        />
      </Field>

      <Field label="Description">
        <textarea
          required
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="What does this skill teach an agent to do?"
          className="w-full rounded-input border border-border bg-background px-3 py-2 text-base text-primary transition-colors placeholder:text-muted hover:border-border-strong sm:text-sm"
        />
      </Field>

      <button type="submit" className="btn btn-primary">
        Open a GitHub issue
      </button>
      <p className="text-xs text-muted">
        Opens a pre-filled issue in{" "}
        <a href={`https://github.com/${REPO}`} target="_blank" rel="noreferrer" className="underline">
          {REPO}
        </a>
        . We review every submission against the curation criteria above before it&apos;s added.
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
      <span className="label">{label}</span>
      {hint && <span className="ml-2 text-xs text-muted">{hint}</span>}
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
