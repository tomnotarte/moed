import { site } from "@/lib/site";

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" fill="currentColor" aria-hidden="true">
      <path d="M16.37 12.6c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.78-3.32-1.8-1.41-.14-2.76.83-3.47.83-.72 0-1.82-.81-2.99-.79-1.54.02-2.96.9-3.75 2.27-1.6 2.78-.41 6.89 1.15 9.14.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.77.74 2.98.72 1.24-.02 2.02-1.12 2.77-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.39-.92-2.41-3.66ZM14.1 5.86c.63-.77 1.06-1.83.94-2.89-.91.04-2.02.61-2.67 1.37-.58.67-1.1 1.76-.96 2.8 1.02.08 2.06-.52 2.69-1.28Z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" aria-hidden="true">
      <path d="M4.2 2.6 13.6 12l-9.4 9.4c-.3-.2-.5-.6-.5-1V3.6c0-.4.2-.8.5-1Z" fill="#34A853" />
      <path d="m16.7 8.9-3.1 3.1-9.4-9.4c.3-.2.8-.3 1.2-.1l11.3 6.4Z" fill="#FBBC04" />
      <path d="M16.7 15.1 5.4 21.5c-.4.2-.9.2-1.2-.1l9.4-9.4 3.1 3.1Z" fill="#EA4335" />
      <path d="M20.2 12c0 .5-.3.9-.7 1.1l-2.8 2-3.1-3.1 3.1-3.1 2.8 2c.4.2.7.6.7 1.1Z" fill="#4285F4" />
    </svg>
  );
}

const badge =
  "inline-flex items-center gap-3 rounded-xl border border-cream/25 bg-black px-4 py-2.5 text-cream transition-colors duration-200 hover:border-cream/60";

/** App Store + Google Play download buttons. */
export function StoreButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a href={site.appStoreUrl} className={badge} aria-label="Download Moed on the App Store">
        <AppleIcon />
        <span className="flex flex-col leading-none">
          <span className="text-[11px] text-cream/75">Download on the</span>
          <span className="mt-1 text-[18px] font-semibold tracking-tight">App Store</span>
        </span>
      </a>
      <a href={site.playStoreUrl} className={badge} aria-label="Get Moed on Google Play">
        <PlayIcon />
        <span className="flex flex-col leading-none">
          <span className="text-[11px] uppercase tracking-wide text-cream/75">Get it on</span>
          <span className="mt-1 text-[18px] font-semibold tracking-tight">Google Play</span>
        </span>
      </a>
    </div>
  );
}
