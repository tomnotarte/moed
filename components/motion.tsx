"use client";

import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";

function useInView<T extends Element>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) { setInView(true); return; }
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); io.disconnect(); } },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/** Fades content up once when it scrolls into view. */
export function Reveal({
  children, className = "", delay = 0, as: Tag = "div",
}: { children: ReactNode; className?: string; delay?: number; as?: ElementType }) {
  const { ref, inView } = useInView<HTMLElement>(0.15);
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "is-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/** Counts from 0 to `to` once visible. Shows the final value if motion is reduced. */
export function CountUp({ to, duration = 1400, className }: { to: number; duration?: number; className?: string }) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.5);
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setN(to); return; }
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  return <span ref={ref} className={className}>{n}</span>;
}
