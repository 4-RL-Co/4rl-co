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
    // Answer Engine Optimization: generates machine-readable files for AI
    // crawlers (ChatGPT, Claude, Perplexity, Google AI Overviews) at build time.
    // The generators below are the whole point of this integration and they are
    // all on; only the optional on-page widget is off. See the widget note.
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
      // Human/AI toggle: OFF, and the AEO output above is untouched by it. The
      // widget only ever offered an on-page toggle to the AI view; every file
      // that AI crawlers actually read is generated either way, byte for byte.
      // It cost more than it carried: it pulls JetBrains Mono from Google Fonts,
      // which this site refuses on principle (every other face is self-hosted
      // via Fontsource) and which the CSP blocks anyway, and it pins itself at
      // z-index 2147483647, which put it over the open nav and forced a
      // display:none hack to keep it off mobile at all. Half the audience never
      // saw it, and the half that did saw it in a fallback font.
      widget: { enabled: false },
      schema: {
        enabled: true,
        organization: {
          name: '4/RL Co.',
          url: SITE_URL,
          logo: `${SITE_URL}/favicon-512.png`,
          sameAs: [
            'https://www.linkedin.com/company/4rl-co/',
            'https://github.com/4-RL-Co',
            'https://t.me/olegas4real',
          ],
        },
      },
    }),
  ],
});
