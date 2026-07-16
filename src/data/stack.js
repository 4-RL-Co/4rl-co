// The tools behind the work, for the marquee under the Manifesto headline
// ("AI is the tool / not the hype"). Slugs resolve against simple-icons at build
// time; a slug that stops resolving is dropped with a warning rather than
// rendering an empty box, so this list can never break the strip.
//
// Ordered as the work actually flows (think, build, run, measure, reach) rather
// than alphabetically. The strip scrolls, so nobody reads it as a list, but the
// grouping keeps neighbours making sense.
//
// Logo-only, so the roster is limited to tools that have an icon in the set.
// Deliberately absent, because no icon exists (OpenAI and Microsoft had theirs
// pulled from simple-icons over trademark policy):
//   ChatGPT, VS Code, Microsoft Clarity, Tactiq, Google Antigravity, Gamma,
//   Lovable, Hermes (Nous Research).
// Careful with that last one: simple-icons *does* ship a "Hermes", but it is the
// German parcel courier myhermes.de, not the model. Matching on name alone would
// have put a delivery company in the stack.
// WhatsApp Business has no icon of its own; the WhatsApp mark is the same brand.
export const stack = [
  // think
  { slug: 'claude', name: 'Claude' },
  { slug: 'claudecode', name: 'Claude Code' },
  { slug: 'obsidian', name: 'Obsidian' },
  { slug: 'notion', name: 'Notion' },
  // build
  { slug: 'github', name: 'GitHub' },
  { slug: 'typescript', name: 'TypeScript' },
  { slug: 'astro', name: 'Astro' },
  // run
  { slug: 'vercel', name: 'Vercel' },
  { slug: 'cloudflare', name: 'Cloudflare' },
  { slug: 'railway', name: 'Railway' },
  { slug: 'hostinger', name: 'Hostinger' },
  // measure
  { slug: 'googlesearchconsole', name: 'Google Search Console' },
  { slug: 'plausibleanalytics', name: 'Plausible Analytics' },
  // reach
  { slug: 'resend', name: 'Resend' },
  { slug: 'telegram', name: 'Telegram' },
  { slug: 'whatsapp', name: 'WhatsApp Business' },
  { slug: 'discord', name: 'Discord' },
];
