"use client";

import { useEffect, useState } from "react";
import { LogoNav } from "./Logo";
import { nav, site } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-ink/95 backdrop-blur border-b border-cream/10" : "bg-transparent"
      }`}
    >
      <div className="wrap flex h-16 items-center justify-between sm:h-[72px]">
        <a href="#top" className="text-cream" aria-label="Moed home">
          <LogoNav className="h-8 w-auto sm:h-9" />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {nav.map((l) => (
            <a key={l.href} href={l.href} className="text-[14px] text-cream/75 transition-colors hover:text-cream">
              {l.label}
            </a>
          ))}
          <a href={site.signupUrl} className="btn-gold !px-5 !py-2.5 text-[14px]">Get started</a>
        </nav>

        <button
          className="flex h-10 w-10 items-center justify-center text-cream md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            {open ? <path d="M5 5l12 12M17 5L5 17" /> : <path d="M3 7h16M3 15h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="wrap flex flex-col gap-1 pb-6 md:hidden" aria-label="Mobile">
          {nav.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 text-cream/85 border-b border-cream/10">
              {l.label}
            </a>
          ))}
          <a href={site.signupUrl} className="btn-gold mt-4">Get started</a>
        </nav>
      )}
    </header>
  );
}
