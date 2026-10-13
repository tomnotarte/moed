import {
  primaryMark,
  primaryWordmark,
  secondaryMark,
  secondaryTagline,
  secondaryWordmark,
  submark,
} from "@/lib/logo-paths";

type Props = { className?: string; title?: string };

/** Horizontal logo for the nav. Tagline omitted: it is ~3px tall at nav size. */
export function LogoNav({ className, title = "Moed" }: Props) {
  return (
    <svg viewBox="40 15 860 240" className={className} role="img" aria-label={title} fill="currentColor">
      {[...secondaryMark, ...secondaryWordmark].map((d, i) => <path key={i} d={d} />)}
    </svg>
  );
}

/** Full horizontal logo with "AFC MY HOPE BIBLE APP" tagline. */
export function LogoHorizontal({ className, title = "Moed — AFC My Hope Bible App" }: Props) {
  return (
    <svg viewBox="0 0 937.48 300" className={className} role="img" aria-label={title} fill="currentColor">
      {[...secondaryMark, ...secondaryWordmark, ...secondaryTagline].map((d, i) => <path key={i} d={d} />)}
    </svg>
  );
}

/** Stacked primary logo. */
export function LogoStacked({ className, title = "Moed" }: Props) {
  return (
    <svg viewBox="0 0 300 300" className={className} role="img" aria-label={title} fill="currentColor">
      {[...primaryMark, ...primaryWordmark].map((d, i) => <path key={i} d={d} />)}
    </svg>
  );
}

/** Monogram only. `trace` draws the outline in gold, then fades the fill in. */
export function Submark({ className, trace = false }: Props & { trace?: boolean }) {
  return (
    <svg
      viewBox="0 0 300 300"
      className={`${className ?? ""} ${trace ? "trace" : ""}`}
      aria-hidden="true"
      fill="currentColor"
    >
      {submark.map((d, i) => <path key={i} d={d} pathLength={1} />)}
    </svg>
  );
}
