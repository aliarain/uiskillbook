/** `Overlays & disclosure` → `overlays-disclosure`, the id of a group's section on /siteplane-ui. */
export function groupAnchor(group: string): string {
  return group
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
