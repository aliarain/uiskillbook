/** The UI Skillbook mark: a bookmark with a UI block cut out of it. 20×20 viewBox, fill-rule evenodd. */
export const LOGO_PATH =
  "M5.5 2h9A1.5 1.5 0 0 1 16 3.5V18l-6-3.6L4 18V3.5A1.5 1.5 0 0 1 5.5 2Zm2.5 4.5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z";

export const GITHUB_REPO = "aliarain/uiskillbook";
export const GITHUB_URL = `https://github.com/${GITHUB_REPO}`;

/** Live star count for the repo, cached for an hour. Undefined when GitHub can't be reached. */
export async function getRepoStars(): Promise<number | undefined> {
  try {
    const res = await fetch(`https://api.github.com/repos/${GITHUB_REPO}`, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return undefined;
    const data = (await res.json()) as { stargazers_count?: number };
    return data.stargazers_count;
  } catch {
    return undefined;
  }
}
