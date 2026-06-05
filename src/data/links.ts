// ─────────────────────────────────────────────────────────────────
//  EDIT YOUR LINKS HERE — this is the single config for the /links page.
// ─────────────────────────────────────────────────────────────────
import type { ImageMetadata } from 'astro';
import welcomeToTheGrid from '../assets/covers/welcome-to-the-grid.png';
import singleFire from '../assets/covers/single-fire.png';
import theShaping from '../assets/covers/the-shaping.png';
import theVisitor from '../assets/covers/the-visitor.png';

export type IconName =
  | 'spotify'
  | 'soundcloud'
  | 'suno'
  | 'youtube'
  | 'instagram'
  | 'applemusic';

export interface LinkItem {
  label: string;
  href: string;
  icon: IconName;
}

// ── release queue ─────────────────────────────────────────────────
// a self-advancing pre-save queue. each entry is a distrokid hyperfollow
// link (which auto-redirects to the streaming page after release, so the
// SAME url is both the pre-save and the "listen now" link) + its cover.
//
// lifecycle of a card, computed CLIENT-SIDE (see index.astro <script>) so
// it advances at the real release moment with NO redeploy:
//   before releaseAt           → "pre-save" card (shows the drop date)
//   releaseAt .. +OUT_NOW_DAYS  → "out now" card (brief spotlight)
//   after that window          → drops off the site
// only the nearest 3 non-expired releases render; add as many as you like
// and they queue behind, surfacing automatically as earlier ones expire.
//
// To add a release: download its cover into src/assets/covers/, import it
// above, and add a { title, releaseAt, href, cover } entry below. That's
// the whole "drop a pre-save link into the queue" step — push to main and
// Cloudflare Pages rebuilds; the queue self-manages thereafter.
export interface Release {
  title: string;
  /**
   * exact release moment, ISO-8601 WITH offset, e.g.
   * '2026-06-05T13:00:00-07:00' (1pm PT). pacific offset is -07:00 in
   * summer (PDT) and -08:00 in winter (PST) — set the right one per drop.
   */
  releaseAt: string;
  /** distrokid hyperfollow url (auto-redirects to streaming post-release) */
  href: string;
  /** cover art (imported from src/assets/covers/) */
  cover: ImageMetadata;
}

export const RELEASES: Release[] = [
  {
    title: 'welcome to the grid',
    releaseAt: '2026-06-05T13:00:00-07:00',
    href: 'https://distrokid.com/hyperfollow/thecyphering/welcome-to-the-grid?ref=release',
    cover: welcomeToTheGrid,
  },
  {
    title: 'single fire',
    releaseAt: '2026-06-12T13:00:00-07:00',
    href: 'https://distrokid.com/hyperfollow/thecyphering/single-fire?ref=release',
    cover: singleFire,
  },
  {
    title: 'the shaping',
    releaseAt: '2026-06-19T13:00:00-07:00',
    href: 'https://distrokid.com/hyperfollow/thecyphering/the-shaping?ref=release',
    cover: theShaping,
  },
  {
    title: 'the visitor',
    releaseAt: '2026-06-26T13:00:00-07:00',
    href: 'https://distrokid.com/hyperfollow/thecyphering/the-visitor?ref=release',
    cover: theVisitor,
  },
];

// ── the platform stack (rendered as a logo-only row) ──
// order matches the README listen/follow row:
// instagram · spotify · apple music · youtube · soundcloud · suno
export const LINKS: LinkItem[] = [
  {
    label: 'instagram',
    href: 'https://www.instagram.com/thecyphering/',
    icon: 'instagram',
  },
  {
    label: 'spotify',
    href: 'https://open.spotify.com/artist/26NXjTgaOj9Qp2qQh6FIEj',
    icon: 'spotify',
  },
  {
    label: 'apple music',
    href: 'https://music.apple.com/us/artist/the-cyphering/6774716662',
    icon: 'applemusic',
  },
  {
    label: 'youtube',
    href: 'https://www.youtube.com/@thecyphering',
    icon: 'youtube',
  },
  {
    label: 'soundcloud',
    href: 'https://soundcloud.com/thecyphering',
    icon: 'soundcloud',
  },
  {
    label: 'suno',
    href: 'https://suno.com/@thecyphering',
    icon: 'suno',
  },
];
