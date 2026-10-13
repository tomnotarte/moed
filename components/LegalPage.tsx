import type { ReactNode } from "react";
import { LogoNav } from "./Logo";

/** Simple shell for About / Privacy / Terms. Content is placeholder until supplied. */
export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <header className="bg-ink">
        <div className="wrap flex h-16 items-center sm:h-[72px]">
          <a href="/" className="text-cream" aria-label="Moed home">
            <LogoNav className="h-8 w-auto sm:h-9" />
          </a>
        </div>
      </header>
      <main className="wrap max-w-3xl py-20">
        <h1 className="h-display text-[36px] sm:text-[44px]">{title}</h1>
        <div className="mt-8 space-y-5 text-[16.5px] leading-[1.75] text-ink/80">{children}</div>
        <a href="/" className="btn-ghost-dark mt-12">Back to home</a>
      </main>
    </>
  );
}
