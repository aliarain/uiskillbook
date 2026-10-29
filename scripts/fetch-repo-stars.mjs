#!/usr/bin/env node
// Refreshes content/repo-stars.json with GitHub star counts for every external
// skill's source repository. Run: GITHUB_TOKEN=... node scripts/fetch-repo-stars.mjs
import { readFileSync, writeFileSync } from "node:fs";

const skills = JSON.parse(readFileSync("content/external-skills.json", "utf8"));
const repos = [
  ...new Set(
    skills
      .map((s) => s.source?.repository?.match(/^https:\/\/github\.com\/([^/]+\/[^/]+)/)?.[1])
      .filter(Boolean)
  ),
].sort();

const headers = { Accept: "application/vnd.github+json", "User-Agent": "uiskillbook" };
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

const stars = {};
for (const repo of repos) {
  const res = await fetch(`https://api.github.com/repos/${repo}`, { headers });
  if (!res.ok) {
    console.warn(`skip ${repo}: ${res.status}`);
    continue;
  }
  stars[repo.toLowerCase()] = (await res.json()).stargazers_count;
}

writeFileSync(
  "content/repo-stars.json",
  `${JSON.stringify({ fetchedAt: new Date().toISOString().slice(0, 10), stars }, null, 2)}\n`
);
console.log(`wrote ${Object.keys(stars).length}/${repos.length} repos`);
