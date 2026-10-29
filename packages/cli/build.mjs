// Compiles bin/uiskillbook.ts (the CLI the repo runs directly) into a plain
// Node script for npm: TypeScript's own transpiler strips the types, and the
// shebang switches from `node --experimental-strip-types` to plain `node`.
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const here = import.meta.dirname;
const require = createRequire(path.join(here, "..", "..", "package.json"));
const ts = require("typescript");

const source = fs.readFileSync(path.join(here, "..", "..", "bin", "uiskillbook.ts"), "utf8");
const { outputText } = ts.transpileModule(source.replace(/^#!.*\n/, ""), {
  compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext },
});

fs.mkdirSync(path.join(here, "dist"), { recursive: true });
const out = path.join(here, "dist", "uiskillbook.js");
fs.writeFileSync(out, `#!/usr/bin/env node\n${outputText}`);
fs.chmodSync(out, 0o755);
fs.copyFileSync(path.join(here, "..", "..", "LICENSE"), path.join(here, "LICENSE"));
console.log(`Wrote ${path.relative(process.cwd(), out)}`);
