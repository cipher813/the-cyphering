// site-wide metadata. lowercase voice is intentional and load-bearing.
export const SITE = {
  name: 'the cyphering',
  domain: 'thecyphering.com',
  url: 'https://thecyphering.com',
  // shown in <title> / og — keep it lowercase and quiet.
  tagline: 'this is the soundtrack for the parts in between',
  description:
    'everything you are made of was forged in a dying star, and will be scattered into infinite others. this is the soundtrack for the parts in between. created with AI — psytrance, hardstyle, drum and bass, progressive trance, melodic techno.',
} as const;

// spotify embed for the /listen page.
// - leave `playlistId` empty to embed the artist profile (auto-updates,
//   shows popular tracks).
// - to show EVERY track in your own order, make a public playlist and set
//   `playlistId` to its id — the page embeds the playlist instead.
export const SPOTIFY = {
  artistId: '26NXjTgaOj9Qp2qQh6FIEj',
  artistUrl: 'https://open.spotify.com/artist/26NXjTgaOj9Qp2qQh6FIEj',
  playlistId: '7ESUudEoqbiKBWswgHG0bI',
} as const;

// own-funnel click logger (Cloudflare Worker → D1, repo the-cyphering-ops).
// Fill `beaconUrl` with the deployed Worker base URL — `npx wrangler deploy`
// prints it (e.g. https://cyphering-clicks.<subdomain>.workers.dev). The beacon
// POSTs to `${beaconUrl}/c`. Leave empty to DISABLE (the script no-ops, no errors).
// Anonymous: no cookies, no PII; only which outbound link was clicked.
export const ANALYTICS = {
  beaconUrl: 'https://cyphering-clicks.cipher813.workers.dev',
} as const;
