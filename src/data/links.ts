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

// ── featured: swap to the live hyperfollow / latest-drop link per release ──
export const PRESAVE: LinkItem | null = {
  label: 'pre-save the latest',
  href: 'https://distrokid.com/hyperfollow/REPLACE_ME', // TODO: hyperfollow url
  icon: 'star',
  featured: true,
  note: 'out soon',
};

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
