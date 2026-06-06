// ─────────────────────────────────────────────────────────────────
//  EDIT YOUR LINKS HERE — the platform stack row.
//
//  The pre-save RELEASE QUEUE no longer lives here. Single source of truth
//  is the-cyphering-ops/releases.yaml; the site reads the generated
//  src/data/releases.json (regenerated + committed by the signal "add
//  release" form). index.astro renders that manifest. Add a release by
//  dropping its hyperfollow URL into the form on signal — not by editing code.
// ─────────────────────────────────────────────────────────────────
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
