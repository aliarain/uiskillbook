"use client";

import type { Root } from "hast";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Typeset, typesetComponents } from "@/siteplane/components/typeset";

/** Rendered markdown in the kit's document type: fences become copyable CodeBlocks, tables NativeTables. */
export function Markdown({ tree, className }: { tree: Root; className?: string }) {
  return (
    <Typeset density="document" className={className}>
      {toJsxRuntime(tree, { Fragment, jsx, jsxs, components: typesetComponents })}
    </Typeset>
  );
}
