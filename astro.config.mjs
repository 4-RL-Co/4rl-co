import { defineConfig } from 'astro/config';

// Static output, works on Vercel or GitHub Pages.
// If you deploy to a project subpath, set `base`; on a custom domain leave as is.
export default defineConfig({
  site: 'https://gabrielolegario.com',
  compressHTML: true,
  build: { inlineStylesheets: 'auto' },
});
