# Moed marketing site

Next.js 15 + Tailwind CSS 3. Deploys to Vercel with no extra configuration.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Before launch
- `lib/site.ts` — replace `signupUrl` and `churchContactUrl` placeholders.
- `components/Phone.tsx` — hand-built placeholder screens; swap for real app screenshots.
- Hero background in `app/page.tsx` uses a gradient in place of brand photography.
- `app/about`, `app/privacy`, `app/terms` — placeholder copy.

## Brand
- Colors and fonts: `tailwind.config.ts`, `app/globals.css` (Libre Baskerville + Inter, self-hosted via Fontsource).
- Logo path data: `lib/logo-paths.ts`, generated from the supplied SVGs (unchanged). The nav uses the
  secondary logo without its tagline; footer and CTA use the full versions.
- Gold `#BF8E4A` is decoration only on cream — it fails text contrast there.
