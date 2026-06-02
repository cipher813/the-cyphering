# the cyphering

landing site for **thecyphering.com** — a faceless, ai-augmented music project.

- `/` — the home page: what the cyphering is, who it's for.
- `/links` — the link hub. **this is the url for the instagram bio link.**

built with [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com), deployed as a static site on Cloudflare Pages.

## develop

```
npm install
npm run dev      # http://localhost:4321
```

## edit the links

All link-hub destinations live in **`src/data/links.ts`** — edit the URLs there
(they currently contain `REPLACE_ME` placeholders). Platform roles:

- **spotify** — main / primary
- **apple music**, **soundcloud** (maintained), **bandcamp** — secondary
- **youtube** — visuals
- **instagram** — the social hub

Pre-saves are handled by **DistroKid HyperFollow** (free, OAuth-backed). When a
release is live, drop its HyperFollow URL into the `PRESAVE` entry to show the
featured button at the top of `/links`; set `PRESAVE = null` to hide it.

Copy/voice is **lowercase by default** throughout — intentional, matches the
project's writing convention.

## build & deploy (Cloudflare Pages)

```
npm run build    # outputs to dist/
```

Cloudflare Pages settings:

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Custom domain:** `thecyphering.com`

Push to `main` and Pages rebuilds automatically once the git integration is
connected.

> TODO: add a real `public/og.png` (1200×630) for social-share cards.
