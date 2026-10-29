"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Button } from "@/raptrx-ui/components/button";
import { InstallPrompt, type InstallTarget } from "../install-prompt";

export type SkillSlide = {
  slug: string;
  title: string;
  author: string;
  topic: string;
  targets: InstallTarget[];
};

const INTERVAL_MS = 6000;

/**
 * Rotating install cards for a few real skills, one per topic. Auto-advance
 * pauses on hover, on focus inside, with the pause button, and is off under
 * prefers-reduced-motion. Every slide stays in one grid cell so the card
 * never changes height between slides.
 */
export function SkillSlider({ slides }: { slides: SkillSlide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const rotating = !paused && !hovered && !focused && !reducedMotion;

  useEffect(() => {
    if (!rotating) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % slides.length), INTERVAL_MS);
    return () => clearInterval(timer);
  }, [rotating, slides.length]);

  const go = (i: number) => setIndex((i + slides.length) % slides.length);
  const current = slides[index];

  return (
    <section
      ref={root}
      aria-roledescription="carousel"
      aria-label="Featured skills"
      className="min-w-0"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(e) => {
        if (!root.current?.contains(e.relatedTarget as Node | null)) setFocused(false);
      }}
    >
      <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
        <div role="group" aria-label="Choose a skill" className="flex flex-wrap gap-1">
          {slides.map((s, i) => (
            <Button
              key={s.slug}
              size="xs"
              shape="pill"
              variant={i === index ? "default" : "ghost"}
              aria-pressed={i === index}
              aria-label={`${s.topic}: ${s.title}`}
              onClick={() => go(i)}
            >
              {s.topic}
            </Button>
          ))}
        </div>
        <div className="flex items-center gap-0.5">
          <Button size="icon-sm" variant="ghost" aria-label="Previous skill" onClick={() => go(index - 1)}>
            <ChevronLeft aria-hidden />
          </Button>
          <Button
            size="icon-sm"
            variant="ghost"
            aria-label={paused ? "Resume rotation" : "Pause rotation"}
            onClick={() => setPaused((p) => !p)}
          >
            {paused ? <Play aria-hidden /> : <Pause aria-hidden />}
          </Button>
          <Button size="icon-sm" variant="ghost" aria-label="Next skill" onClick={() => go(index + 1)}>
            <ChevronRight aria-hidden />
          </Button>
        </div>
      </div>

      <p className="mb-2 text-sm text-ink-3" aria-live={rotating ? "off" : "polite"}>
        <Link href={`/skills/${current.slug}`} className="link rounded-input py-1">
          {current.title}
        </Link>{" "}
        by {current.author}
      </p>

      <div className="grid">
        {slides.map((s, i) => (
          <div
            key={s.slug}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${slides.length}: ${s.title}`}
            aria-hidden={i !== index}
            inert={i !== index}
            className={`col-start-1 row-start-1 transition-opacity duration-300 motion-reduce:transition-none ${
              i === index ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <InstallPrompt targets={s.targets} />
          </div>
        ))}
      </div>
    </section>
  );
}
