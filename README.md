# Maya Law Practice

Marketing site for Maya Law Practice (MLP) — a boutique civil law firm in Ottawa, Ontario.

Built with Next.js (App Router), React, Tailwind CSS v4, and GSAP. Content is
managed in Sanity (project `u3s6embk`, dataset `production`) and pulled in at build
time. The site is a static export, deployed to Cloudflare Pages.

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

## Content (Sanity)

The Studio lives in `studio/` and is hosted by Sanity at
https://mayalawpractice.sanity.studio.

- **Home page** holds every section of the page (Hero, About, Expertise,
  Principles, Contact). Lists are ordered by dragging items, and the 01/02/03
  numbers on the site follow that order.
- **Site settings** holds the contact details, address, page title, description
  and the link preview image.
- **Media** (top bar) is the shared image library. Drop many files at once to
  upload them, then tag and reuse them across fields.
- Any field that is a list of images gets an **Upload multiple images** button
  that uploads in batches of 5 and adds them to the end of the list.

### First-time setup

```bash
cd studio
npm install
npx sanity login
npm run seed        # imports the current site content and images into production
npm run deploy      # publishes the Studio to mayalawpractice.sanity.studio
```

`npm run deploy` prints an `appId`. Add it to `deployment.appId` in
`studio/sanity.cli.ts` so later deploys update the same Studio.

Invite the client at https://www.sanity.io/manage/project/u3s6embk/members with
the **Editor** role.

To run the Studio locally: `npm run studio` (http://localhost:3333). If it asks
for CORS access, run `npx sanity cors add http://localhost:3333 --credentials`
inside `studio/`.

### Publishing changes to the live site

The site reads Sanity during `next build`, so a published change goes live on
the next build. To make that automatic:

1. Cloudflare Pages → the project → Settings → Builds → **Deploy hooks** → add a
   hook for the production branch and copy its URL. (Deploy hooks need the
   Git-integrated Pages setup.)
2. https://www.sanity.io/manage/project/u3s6embk/api/webhooks → **Create webhook**
   - URL: the Cloudflare deploy hook URL
   - Dataset: `production`
   - Trigger on: Create, Update, Delete
   - Filter: `_type in ["homePage", "siteSettings"]`
   - HTTP method: `POST`

Changes then show up on the site a minute or two after the client presses
Publish.
