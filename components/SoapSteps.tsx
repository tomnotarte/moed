"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, ScreenSoap } from "./Phone";

const steps = [
  {
    letter: "S",
    name: "Scripture",
    body: "Read the day’s passage slowly, then write out the verse that stops you.",
  },
  {
    letter: "O",
    name: "Observation",
    body: "Notice what the text actually says — who is speaking, what is promised, what repeats.",
  },
  {
    letter: "A",
    name: "Application",
    body: "Ask what this means for your life today, and name one thing you’ll do about it.",
  },
  {
    letter: "P",
    name: "Prayer",
    body: "Respond to God in your own words. Your prayer is saved with the verse that prompted it.",
  },
];

export function SoapSteps() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i));
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="grid items-start gap-14 md:grid-cols-[1fr_auto] md:gap-20">
      <ol className="relative">
        {/* progress rule */}
        <span aria-hidden="true" className="absolute left-[27px] top-4 bottom-4 w-px bg-cream/15" />
        <span
          aria-hidden="true"
          className="absolute left-[27px] top-4 w-px bg-gold-light transition-[height] duration-700 ease-out"
          style={{ height: `calc(${(active / (steps.length - 1)) * 100}% - 2rem)` }}
        />
        {steps.map((s, i) => (
          <li
            key={s.name}
            data-i={i}
            ref={(el) => { refs.current[i] = el; }}
            className={`step relative flex gap-7 py-10 first:pt-2 last:pb-2 md:py-14 ${
              i === active ? "is-active" : i < active ? "is-done" : ""
            }`}
          >
            <span className="step-letter relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-cream/25 bg-burgundy font-serif text-[26px] text-cream">
              {s.letter}
            </span>
            <div className="max-w-md pt-1">
              <p className="text-[13px] text-cream/60">Step {i + 1}</p>
              <h3 className="h-display mt-1 text-[26px] text-cream">{s.name}</h3>
              <p className="mt-3 text-[16px] leading-[1.7] text-cream/80">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="hidden md:sticky md:top-28 md:block">
        <Phone label={`The ${steps[active].name} step in the Moed journal`}>
          <ScreenSoap step={active} />
        </Phone>
      </div>
    </div>
  );
}
