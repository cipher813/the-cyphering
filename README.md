# the cyphering

> everything you are made of was forged in a dying star, and will be scattered
> into infinite others. the cyphering is the soundtrack for the parts in between.

not background music. the cyphering turns the deepest questions — reality, the
cosmos, the self — into something you can lose yourself to at full volume.

created with AI · **psytrance · hardstyle · drum and bass · progressive trance · melodic techno**

**[thecyphering.com](https://thecyphering.com)**

## listen / follow

- **spotify** (main) — https://open.spotify.com/artist/26NXjTgaOj9Qp2qQh6FIEj
- **instagram** (hub) — https://www.instagram.com/thecyphering/
- **soundcloud** — https://soundcloud.com/thecyphering
- **youtube** — https://www.youtube.com/@thecyphering
- **suno** — https://suno.com/@thecyphering
- **apple music** — https://music.apple.com/us/artist/the-cyphering/6774716662

decode@thecyphering.com

---

## about this repo

The artist site for **thecyphering.com** — a single page that doubles as the
link hub for the instagram bio link. it shows upcoming pre-saves, a two-line
intro, and a continuously-playing spotify embed.

Built with [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com),
deployed as a static site on Cloudflare Pages.

### develop

```
npm install
npm run dev      # http://localhost:4321
```

### edit the links

All platform destinations live in **`src/data/links.ts`** (`LINKS`). Platform
roles:

- **spotify** — main / primary
- **instagram** — the social hub
- **soundcloud**, **apple music** — secondary
- **youtube** — visuals
- **suno** — generation source

The spotify embed (the always-on player) is configured in **`src/consts.ts`**.

### releases / pre-saves

Pre-saves are handled by **DistroKid HyperFollow** (free, OAuth-backed). Each
release is an entry in the `RELEASES` array in `src/data/links.ts` with its
cover art. Before its `date` it shows as an upcoming pre-save card; on/after the
date it drops off the list (it lives on the streaming platforms by then).
Upcoming/past state is computed at **build time** — push to `main` to refresh
after a drop date passes.

Copy/voice is **lowercase by default** throughout — intentional, matches the
project's writing convention.

### build & deploy (Cloudflare Pages)

```
npm run build    # outputs to dist/
```

Cloudflare Pages settings:

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Custom domain:** `thecyphering.com`

Push to `main` and Pages rebuilds automatically.

> TODO: add a real `public/og.png` (1200×630) for social-share cards.
