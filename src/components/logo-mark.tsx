/**
 * Placeholder for the UI Skillbook logo. The SVG mark is still to be designed;
 * swap the contents of this component (or point it at /logo.svg) when it lands.
 * Every place that shows the logo renders this component, so there is one spot to change.
 */
export function LogoMark({ className = "size-5" }: { className?: string }) {
  return (
    <span
      aria-hidden
      data-logo-placeholder
      className={`inline-block shrink-0 rounded-[6px] bg-foreground ${className}`}
    />
  );
}
