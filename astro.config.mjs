// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// thecyphering.com — static site on Cloudflare Pages.
// Build command: `npm run build`  |  Output dir: `dist`
export default defineConfig({
  site: 'https://thecyphering.com',
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
