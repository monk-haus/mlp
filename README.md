# Maya Law Practice

Marketing site for Maya Law Practice (MLP) — a boutique civil law firm in Ottawa, Ontario.

Built with Next.js (App Router), React, Tailwind CSS v4, and GSAP. The site is a
static export, deployed to Cloudflare Pages.

## Develop

```bash
npm install
npm run dev
```

Note: `next dev` does not hydrate reliably on real mobile devices over a LAN.
To test on a phone, use the production preview below.

## Build & preview the static export

```bash
npm run build      # outputs ./out
npm run preview    # serves ./out at http://localhost:3000 (also on your network IP)
```

## Deploy to Cloudflare Pages

**CLI**

```bash
npm run deploy     # next build + wrangler pages deploy out
```

**Git integration (dashboard)**

- Framework preset: Next.js (Static HTML Export)
- Build command: `npx next build`
- Build output directory: `out`

`next.config.ts` sets `output: "export"` and `images.unoptimized: true`, so the
build produces a fully static site in `out/`. Caching and security headers live in
`public/_headers`.
