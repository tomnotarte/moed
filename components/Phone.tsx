import type { ReactNode } from "react";

/**
 * Placeholder phone frame. Screens below are hand-built stand-ins
 * until real app screenshots arrive — swap each <Screen*> for an <Image>.
 */
export function Phone({ children, className = "", label }: { children: ReactNode; className?: string; label: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative mx-auto aspect-[9/19] w-[260px] rounded-[44px] bg-[#16110C] p-[10px] shadow-[0_40px_80px_-30px_rgba(20,12,6,.55),inset_0_0_0_1px_rgba(244,236,223,.08)] ${className}`}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[34px] bg-[#1E1812] text-cream">
        <div className="absolute left-1/2 top-2.5 z-10 h-[22px] w-[84px] -translate-x-1/2 rounded-full bg-black" />
        <div className="flex h-9 items-end justify-between px-6 pb-1 text-[10px] font-medium text-cream/80">
          <span>9:41</span>
          <span className="flex gap-1" aria-hidden="true">
            <span className="h-2 w-3 rounded-[2px] border border-cream/60" />
          </span>
        </div>
        <div aria-hidden="true" className="h-[calc(100%-2.25rem)]">{children}</div>
      </div>
    </div>
  );
}

const card = "rounded-2xl bg-[#2A2219] border border-cream/[0.06]";

export function ScreenHome() {
  return (
    <div className="flex h-full flex-col gap-3 px-4 pt-3">
      <div>
        <p className="font-serif text-[17px]">Good morning, Grace</p>
        <p className="text-[10px] text-cream/50">Tuesday, October 13</p>
      </div>
      <div className={`${card} p-3.5`}>
        <p className="text-[9px] font-medium text-gold-light/80">Verse of the Day</p>
        <p className="mt-2 font-serif text-[11.5px] italic leading-[1.55] text-cream/90">
          “Thy word is a lamp unto my feet, and a light unto my path.”
        </p>
        <p className="mt-2 text-[9px] text-gold-light/80">Psalm 119:105</p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {["Sermon Notes", "Bible", "Events", "Find a Church"].map((t) => (
          <div key={t} className={`${card} flex h-[68px] flex-col items-center justify-center gap-1.5`}>
            <span className="h-3.5 w-3.5 rounded-[4px] border border-gold-light/60" />
            <span className="text-[9.5px] text-cream/80">{t}</span>
          </div>
        ))}
      </div>
      <div className="mt-auto mb-4 flex items-center justify-between rounded-2xl bg-gold-light px-4 py-3 text-ink">
        <span className="text-[11px] font-medium">Start today’s SOAP</span>
        <span className="text-[10px]">12-day streak</span>
      </div>
    </div>
  );
}

export function ScreenSoap({ step = 1 }: { step?: number }) {
  const steps = ["Scripture", "Observation", "Application", "Prayer"];
  return (
    <div className="flex h-full flex-col px-4 pt-3">
      <div className="flex gap-1">
        {steps.map((s, i) => (
          <span key={s} className={`h-1 flex-1 rounded-full ${i <= step ? "bg-gold-light" : "bg-cream/15"}`} />
        ))}
      </div>
      <p className="mt-3 text-[9px] text-cream/50">Step {step + 1} of 4</p>
      <p className="font-serif text-[18px]">{steps[step]}</p>
      <div className={`${card} mt-3 p-3`}>
        <p className="text-[9px] text-gold-light/80">Psalm 119:105</p>
        <p className="mt-1 font-serif text-[10.5px] leading-[1.5] text-cream/80">Thy word is a lamp unto my feet…</p>
      </div>
      <div className={`${card} mt-2 flex-1 p-3`}>
        <div className="mb-2 flex gap-2 border-b border-cream/10 pb-2 text-[10px] text-cream/60">
          <span className="font-bold">B</span>
          <span className="rounded-sm bg-gold-light/30 px-1">H</span>
        </div>
        <p className="text-[10.5px] leading-[1.6] text-cream/85">
          God doesn’t show me the whole road at once — just <b>enough light for the next step</b>.{" "}
          <span className="bg-gold-light/25">I can trust Him with today.</span>
        </p>
      </div>
      <div className="mb-4 mt-3 rounded-full bg-gold-light py-2.5 text-center text-[11px] font-medium text-ink">Next</div>
    </div>
  );
}

export function ScreenCalendar() {
  const marked = new Set([1, 2, 3, 5, 6, 7, 8, 9, 12, 13]);
  return (
    <div className="flex h-full flex-col px-4 pt-3">
      <p className="font-serif text-[17px]">Journal</p>
      <div className="mt-3 flex h-8 items-center rounded-xl bg-[#2A2219] px-3 text-[10px] text-cream/40">Search your entries</div>
      <div className={`${card} mt-3 p-3`}>
        <p className="mb-2 text-[10px] font-medium">October 2026</p>
        <div className="grid grid-cols-7 gap-y-1.5 text-center text-[8.5px] text-cream/40">
          {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => <span key={i}>{d}</span>)}
          {Array.from({ length: 4 }).map((_, i) => <span key={`b${i}`} />)}
          {Array.from({ length: 31 }).map((_, i) => {
            const day = i + 1;
            const on = marked.has(day);
            const today = day === 13;
            return (
              <span key={day} className="flex justify-center">
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded-full ${
                    today ? "bg-gold-light text-ink" : on ? "bg-gold-light/20 text-cream" : "text-cream/50"
                  }`}
                >
                  {day}
                </span>
              </span>
            );
          })}
        </div>
      </div>
      <div className={`${card} mt-2 p-3`}>
        <p className="text-[9px] text-cream/50">Oct 12 · James 1:22</p>
        <p className="mt-1 text-[10.5px] leading-[1.5] text-cream/85">Be doers of the word — call Mom this week and actually listen.</p>
      </div>
    </div>
  );
}

export function ScreenBible() {
  return (
    <div className="flex h-full flex-col px-4 pt-3">
      <div className="flex items-center justify-between">
        <p className="font-serif text-[17px]">John 1</p>
        <div className="flex gap-1 text-[9px]">
          {["WEB", "KJV", "ASV"].map((t) => (
            <span key={t} className={`rounded-full px-2 py-1 ${t === "KJV" ? "bg-gold-light text-ink" : "bg-cream/10 text-cream/70"}`}>{t}</span>
          ))}
        </div>
      </div>
      <div className="mt-3 space-y-2 font-serif text-[11px] leading-[1.7] text-cream/85">
        <p><sup className="mr-1 text-[8px] text-gold-light/80">1</sup>In the beginning was the Word, and the Word was with God, and the Word was God.</p>
        <p><sup className="mr-1 text-[8px] text-gold-light/80">2</sup>The same was in the beginning with God.</p>
        <p className="rounded-md bg-gold-light/15 px-1 -mx-1"><sup className="mr-1 text-[8px] text-gold-light/80">3</sup>All things were made by him; and without him was not any thing made that was made.</p>
        <p><sup className="mr-1 text-[8px] text-gold-light/80">4</sup>In him was life; and the life was the light of men.</p>
        <p><sup className="mr-1 text-[8px] text-gold-light/80">5</sup>And the light shineth in darkness; and the darkness comprehended it not.</p>
      </div>
      <div className="mb-4 mt-auto flex items-center justify-between rounded-2xl bg-[#2A2219] px-3 py-2.5 text-[9.5px]">
        <span className="text-cream/70">John 1:3 selected</span>
        <span className="text-gold-light">Copy with reference</span>
      </div>
    </div>
  );
}

export function ScreenChurch() {
  const churches = [
    { n: "My HOPE Church", d: "0.8 km", t: "Sun 9:00 AM · 11:00 AM" },
    { n: "Grace Community Church", d: "2.4 km", t: "Sun 10:00 AM" },
    { n: "Living Hope Fellowship", d: "3.1 km", t: "Sun 8:30 AM" },
  ];
  return (
    <div className="flex h-full flex-col px-4 pt-3">
      <p className="font-serif text-[17px]">Find a Church</p>
      <div className="mt-3 flex h-8 items-center gap-2 rounded-xl bg-[#2A2219] px-3 text-[10px] text-cream/50">
        <span className="h-2 w-2 rounded-full bg-gold-light" /> Using your location
      </div>
      <div className="mt-3 space-y-2">
        {churches.map((c) => (
          <div key={c.n} className={`${card} p-3`}>
            <div className="flex justify-between">
              <p className="text-[11px] font-medium">{c.n}</p>
              <p className="text-[9px] text-cream/50">{c.d}</p>
            </div>
            <p className="mt-0.5 text-[9px] text-cream/50">{c.t}</p>
            <div className="mt-2 flex gap-1.5 text-[8.5px]">
              {["Call", "Directions", "Website"].map((a) => (
                <span key={a} className="rounded-full border border-cream/15 px-2 py-0.5 text-cream/75">{a}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
