// ─────────────────────────────────────────────────────────────────
//  EDIT YOUR LINKS HERE — this is the single config for the /links page.
// ─────────────────────────────────────────────────────────────────
// Replace the `REPLACE_ME` URLs below with real profile/release links.
// pre-saves are handled by distrokid hyperfollow (free, OAuth-backed) —
// drop the per-release hyperfollow URL into `PRESAVE.href` when a drop
// is live, or set `PRESAVE = null` to hide the featured button.

export type IconName =
  | 'spotify'
  | 'soundcloud'
  | 'suno'
  | 'youtube'
  | 'instagram'
  | 'applemusic'
  | 'bandcamp'
  | 'star';

export interface LinkItem {
  label: string;
  href: string;
  icon: IconName;
  /** featured = the highlighted button at the top (e.g. latest pre-save / drop). */
  featured?: boolean;
  /** optional sub-label, e.g. "latest single" */
  note?: string;
}

// ── release schedule ──────────────────────────────────────────────
// each entry is a distrokid hyperfollow link. before its `date` the
// page shows it as "pre-save"; on/after the date hyperfollow auto-
// redirects to the live streaming smart-link and the page labels it
// "out now". the soonest upcoming drop is highlighted.
// NOTE: pre-save/out-now state is computed at BUILD time — redeploy
// (push to main) to refresh after a drop date passes.
export interface Release {
  title: string;
  /** release date, 'YYYY-MM-DD' (local) */
  date: string;
  /** distrokid hyperfollow url */
  href: string;
}

export const RELEASES: Release[] = [
  {
    title: 'welcome to the grid',
    date: '2026-06-05',
    href: 'https://distrokid.com/hyperfollow/thecyphering/welcome-to-the-grid?ref=release',
  },
  {
    title: 'single fire',
    date: '2026-06-12',
    href: 'https://distrokid.com/hyperfollow/thecyphering/single-fire?ref=release',
  },
  {
    title: 'the shaping',
    date: '2026-06-19',
    href: 'https://distrokid.com/hyperfollow/thecyphering/the-shaping?ref=release',
  },
];

// ── the standing platform stack ──
export const LINKS: LinkItem[] = [
  {
    label: 'spotify',
    href: 'https://open.spotify.com/artist/26NXjTgaOj9Qp2qQh6FIEj',
    icon: 'spotify',
    note: 'main',
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
