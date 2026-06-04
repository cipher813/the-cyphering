# the cyphering

> everything you are made of was forged in a dying star, and will be scattered
> into infinite others. the cyphering is the soundtrack for the parts in between.

not background music. the cyphering turns the deepest questions — reality, the
cosmos, the self — into something you can lose yourself to at full volume.

created with AI · **psytrance · hardstyle · drum and bass · progressive trance · melodic techno**

**[thecyphering.com](https://thecyphering.com)**

## listen / follow

[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/thecyphering/)
[![Spotify](https://img.shields.io/badge/Spotify-1DB954?style=for-the-badge&logo=spotify&logoColor=white)](https://open.spotify.com/artist/26NXjTgaOj9Qp2qQh6FIEj)
[![Apple Music](https://img.shields.io/badge/Apple%20Music-FA243C?style=for-the-badge&logo=applemusic&logoColor=white)](https://music.apple.com/us/artist/the-cyphering/6774716662)
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@thecyphering)
[![SoundCloud](https://img.shields.io/badge/SoundCloud-FF5500?style=for-the-badge&logo=soundcloud&logoColor=white)](https://soundcloud.com/thecyphering)
[![Suno](https://img.shields.io/badge/Suno-000000?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0NSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjciLz48dGV4dCB4PSI1MCIgeT0iNTQiIGZvbnQtZmFtaWx5PSJBcmlhbCxIZWx2ZXRpY2Esc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNSIgZm9udC13ZWlnaHQ9IjcwMCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+U1VOTzwvdGV4dD48L3N2Zz4=)](https://suno.com/@thecyphering)

spotify is the main / primary platform; instagram is the social hub.

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
