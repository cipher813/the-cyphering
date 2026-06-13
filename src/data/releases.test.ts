// contract tests for the GENERATED release manifest + the platform stack.
//
// releases.json is produced by the-cyphering-ops (releases.yaml is the single
// source of truth) and committed straight to main — these tests are the
// consumer-side guard that a bad generated artifact can't ship a broken queue
// or mis-attributed funnel clicks.
import { describe, expect, it } from 'vitest';

import { LINKS } from './links';
import manifest from './releases.json';

// mirrors the data-release attribution slug in src/pages/index.astro — presave
// clicks attribute to the ops release_id, which IS the hyperfollow URL slug.
const slug = (t: string) =>
  t
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const HYPERFOLLOW =
  /^https:\/\/distrokid\.com\/hyperfollow\/thecyphering\/([a-z0-9-]+)\?ref=release$/;
const ISO_WITH_OFFSET = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}[+-]\d{2}:\d{2}$/;

describe('releases.json — generated manifest contract', () => {
  const releases = manifest.releases;

  it('queue is a non-empty array', () => {
    expect(Array.isArray(releases)).toBe(true);
    expect(releases.length).toBeGreaterThan(0);
  });

  it('no duplicate titles, hrefs, or release moments', () => {
    for (const key of ['title', 'href', 'releaseAt'] as const) {
      const vals = releases.map((r) => r[key]);
      expect(new Set(vals).size, `duplicate ${key}`).toBe(vals.length);
    }
  });

  for (const r of releases) {
    describe(`"${r.title}"`, () => {
      it('title is non-empty lowercase (project voice)', () => {
        expect(r.title.trim().length).toBeGreaterThan(0);
        expect(r.title).toBe(r.title.toLowerCase());
      });

      it('releaseAt is ISO-8601 with an explicit UTC offset and parses', () => {
        expect(r.releaseAt).toMatch(ISO_WITH_OFFSET);
        expect(Number.isNaN(new Date(r.releaseAt).getTime())).toBe(false);
      });

      it('href is a hyperfollow link carrying ?ref=release attribution', () => {
        expect(r.href).toMatch(HYPERFOLLOW);
      });

      it('funnel attribution: slug(title) matches the hyperfollow slug', () => {
        // index.astro stamps data-release={slug(title)}; the ops funnel keys
        // on the hyperfollow slug (release_id). If these diverge, presave
        // clicks attribute to a release that doesn't exist in the warehouse.
        const hfSlug = r.href.match(HYPERFOLLOW)?.[1];
        expect(slug(r.title)).toBe(hfSlug);
      });

      it('cover is site-hosted webp or a remote https URL', () => {
        expect(
          /^\/covers\/[a-z0-9-]+\.webp$/.test(r.cover) || r.cover.startsWith('https://'),
          `unexpected cover URL shape: ${r.cover}`,
        ).toBe(true);
      });
    });
  }
});

describe('links.ts — platform stack', () => {
  it('every link has a non-empty label and an https href', () => {
    for (const l of LINKS) {
      expect(l.label.trim().length).toBeGreaterThan(0);
      expect(l.href).toMatch(/^https:\/\//);
    }
  });

  it('no duplicate labels or hrefs', () => {
    for (const key of ['label', 'href'] as const) {
      const vals = LINKS.map((l) => l[key]);
      expect(new Set(vals).size, `duplicate ${key}`).toBe(vals.length);
    }
  });
});
