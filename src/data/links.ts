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
    href: 'https://open.spotify.com/artist/REPLACE_ME', // TODO
    icon: 'spotify',
    note: 'main',
  },
  {
    label: 'apple music',
    href: 'https://music.apple.com/artist/REPLACE_ME', // TODO
    icon: 'applemusic',
  },
  {
    label: 'soundcloud',
    href: 'https://soundcloud.com/REPLACE_ME', // TODO
    icon: 'soundcloud',
  },
  {
    label: 'youtube',
    href: 'https://youtube.com/@REPLACE_ME', // TODO
    icon: 'youtube',
  },
  {
    label: 'instagram',
    href: 'https://instagram.com/REPLACE_ME', // TODO
    icon: 'instagram',
  },
];
