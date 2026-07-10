import { defineConfig } from 'astro/config';
import { aeoAstroIntegration } from 'aeo.js/astro';

// Static output, works on Vercel or GitHub Pages.
// If you deploy to a project subpath, set `base`; on a custom domain leave as is.
const SITE_URL = 'https://www.4real.ventures';
const SITE_DESC =
  'We improve the world with AI. For real. An independent AI venture studio building and operating ventures across influence, science, applied AI and cinema.';

export default defineConfig({
  site: SITE_URL,
  compressHTML: true,
  build: { inlineStylesheets: 'always' },
  integrations: [
    // Answer Engine Optimization — generates machine-readable files for AI
    // crawlers (ChatGPT, Claude, Perplexity, Google AI Overviews) at build time.
    // A small Human/AI toggle widget is enabled (bundled by Astro, served from
    // 'self' — works under the site CSP; builds the AI view from the page).
    aeoAstroIntegration({
      title: '4/RL Co. · Independent AI Venture Studio',
      description: SITE_DESC,
      url: SITE_URL,
      generators: {
        robotsTxt: true, // robots.txt with explicit AI-crawler allow rules
        llmsTxt: true, // concise site summary for LLMs
        llmsFullTxt: true, // full concatenated content
        sitemap: true, // /sitemap.xml (sole sitemap; referenced by robots.txt)
        schema: true, // JSON-LD (only injected where a page has none)
        aiIndex: true, // ai-index.json for RAG pipelines
        manifest: true, // docs.json — keeps the auto-injected discovery link valid
        rawMarkdown: false, // no src/content collection here; avoids a scan warning
      },
      // Human/AI toggle — lets visitors view the AI-readable version of the page.
      widget: { enabled: true, size: 'small' },
      schema: {
        enabled: true,
        organization: {
          name: '4/RL Co.',
          url: SITE_URL,
          logo: `${SITE_URL}/favicon-512.png`,
          sameAs: [
            'https://www.linkedin.com/company/4rl-co/',
            'https://github.com/olegas4real',
            'https://t.me/olegas4real',
          ],
        },
      },
    }),
  ],
});
