import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static output, works on Vercel or GitHub Pages.
// If you deploy to a project subpath, set `base`; on a custom domain leave as is.
export default defineConfig({
  site: 'https://www.4real.ventures',
  compressHTML: true,
  build: { inlineStylesheets: 'auto' },
  integrations: [sitemap()],
});
