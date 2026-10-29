import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Local reference clone — not part of this project, never linted or built.
    "opensrc/**",
    // Siteplane UI kit source, installed by the shadcn CLI and kept as upstream ships it.
    "src/siteplane/**",
  ]),
]);

export default eslintConfig;
