import { CodeBlock } from "@/raptrx-ui/components/code";

export function CopyCodeBlock({ code, language, title }: { code: string; language?: string; title?: string }) {
  return <CodeBlock copyable value={code} language={language} title={title} />;
}
