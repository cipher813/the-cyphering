// ─────────────────────────────────────────────────────────────────
//  EDIT YOUR LINKS HERE — this is the single config for the /links page.
// ─────────────────────────────────────────────────────────────────
import type { ImageMetadata } from 'astro';
import welcomeToTheGrid from '../assets/covers/welcome-to-the-grid.png';
import singleFire from '../assets/covers/single-fire.png';
import theShaping from '../assets/covers/the-shaping.png';

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

// ── release schedule ──────────────────────────────────────────────
// each entry is a distrokid hyperfollow link with its cover art. before
// its `date` the page shows it as an upcoming "pre-save" card; on/after
// the date it drops off the list (it lives on the platforms by then).
// NOTE: upcoming/past state is computed at BUILD time — redeploy (push
// to main) to refresh after a drop date passes.
//
// To add a release: download its cover into src/assets/covers/, import
// it above, and add a { title, date, href, cover } entry below.
export interface Release {
  title: string;
  /** release date, 'YYYY-MM-DD' (local) */
  date: string;
  /** distrokid hyperfollow url */
  href: string;
  /** cover art (imported from src/assets/covers/) */
  cover: ImageMetadata;
}

export const RELEASES: Release[] = [
  {
    title: 'welcome to the grid',
    date: '2026-06-05',
    href: 'https://distrokid.com/hyperfollow/thecyphering/welcome-to-the-grid?ref=release',
    cover: welcomeToTheGrid,
  },
  {
    title: 'single fire',
    date: '2026-06-12',
    href: 'https://distrokid.com/hyperfollow/thecyphering/single-fire?ref=release',
    cover: singleFire,
  },
  {
    title: 'the shaping',
    date: '2026-06-19',
    href: 'https://distrokid.com/hyperfollow/thecyphering/the-shaping?ref=release',
    cover: theShaping,
  },
];

// ── the platform stack (rendered as a logo-only row) ──
export const LINKS: LinkItem[] = [
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
    label: 'soundcloud',
    href: 'https://soundcloud.com/thecyphering',
    icon: 'soundcloud',
  },
  {
    label: 'suno',
    href: 'https://suno.com/@thecyphering',
    icon: 'suno',
  },
  {
    label: 'youtube',
    href: 'https://www.youtube.com/@thecyphering',
    icon: 'youtube',
  },
  {
    label: 'instagram',
    href: 'https://www.instagram.com/thecyphering/',
    icon: 'instagram',
  },
];
