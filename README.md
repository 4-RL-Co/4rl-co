<div align="center">

<img src="public/4rl-mark.svg" alt="4/RL" width="64" />

# 4/RL&nbsp;Co.

### We improve the world with AI. **For real.**

An independent **AI venture studio** — building and operating ventures
across influence, education, applied AI, and film.

[**www.4real.ventures**](https://www.4real.ventures)&nbsp;&nbsp;·&nbsp;&nbsp;[Journal](https://www.4real.ventures/journal)&nbsp;&nbsp;·&nbsp;&nbsp;[Contact](https://www.4real.ventures/#contact)

<br />

[![Live](https://img.shields.io/badge/live-4real.ventures-C6FF3A?style=flat-square&labelColor=0A0A0B)](https://www.4real.ventures)
[![Built with Astro](https://img.shields.io/badge/built%20with-Astro-C6FF3A?style=flat-square&labelColor=0A0A0B&logo=astro&logoColor=white)](https://astro.build)
[![Lighthouse](https://img.shields.io/badge/Lighthouse-100%20across%20the%20board-C6FF3A?style=flat-square&labelColor=0A0A0B)](https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fwww.4real.ventures)
![CLS](https://img.shields.io/badge/CLS-0.001-C6FF3A?style=flat-square&labelColor=0A0A0B)

<br />

<img src="public/og-image.png" alt="4/RL Co. — We improve the world with AI. For real." width="840" />

</div>

<br />

## The studio

The 4/RL Co. website — an editorial, dark-mode hub for the studio. It carries the thesis, the ventures we build and operate, the press, and a native Journal.

Design language: near-black `#0A0A0B` with a single surgical accent — **electric lime** `#C6FF3A` — oversized Space Grotesk display type, and the `/` motif throughout. Built with [Astro](https://astro.build) as a static site: no client framework, self-hosted fonts, inlined CSS, hardened headers.

## Ventures

| Venture | What it does |
| --- | --- |
| **[Smart Social](https://smtsocial.com.br)** | Influence and media network. |
| **[LabEpi](https://laboratoriodeepidemiologia.com)** | Teaching epidemiology and the scientific method. |
| **[D.Lab Experts](https://dlabexperts.com)** | AI put to work where it moves the numbers. |
| **[M1m1c Box](https://www.youtube.com/@m1m1cbox)** | Cinematic storytelling, made with AI. |

## Built with

- **[Astro 7](https://astro.build)** — static output, zero client-JS framework, HTML compressed and **all CSS inlined** (no render-blocking requests).
- **[Fontsource](https://fontsource.org)** — self-hosted Space Grotesk (display), Space Mono (labels), Inter (body). No third-party font CDN; metric-matched fallbacks kill font-swap layout shift.
- **Vanilla CSS** design tokens + small progressive-enhancement scripts (scroll reveals, once-per-session preloader, custom cursor) that degrade gracefully and honor `prefers-reduced-motion`.
- **JSON-LD** structured data (Organization + BlogPosting), sitemap, and per-page canonical URLs.

## Performance & quality

Measured, not claimed — [PageSpeed Insights](https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fwww.4real.ventures):

| Performance | Accessibility | Best Practices | SEO | LCP | CLS |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **100** | **100** | **100** | **100** | **0.4s** | **0.001** |

## Structure

```text
.
├── src/
│   ├── layouts/Base.astro   # head, meta/OG, JSON-LD, CSP fallback, preloader, cursor, reveals
│   ├── components/          # Nav, Hero, Manifesto, Work, News, Footer
│   ├── pages/
│   │   ├── index.astro      # home
│   │   ├── 404.astro        # branded not-found
│   │   └── journal/         # list + [slug] article renderer
│   ├── data/                # ventures, news, journal (content as data)
│   └── styles/global.css    # design system / tokens / metric-matched font fallbacks
├── public/                  # favicons, mark, OG image, robots, sitemap*, _headers, security.txt
├── vercel.json              # security headers + apex→www redirect
├── .githooks/pre-commit     # secret guard
└── .env.example             # documents public analytics tokens (values never committed)
```

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static build → dist/
npm run preview    # serve the production build locally
```

Enable the secret-guard git hook once after cloning — it blocks any commit that would leak an `.env` file or a token:

```bash
git config core.hooksPath .githooks
```

## Configuration

Two optional, **public** analytics tags — documented in [`.env.example`](.env.example). The site works fine without either; each script only loads when its variable is set.

```bash
PUBLIC_CF_BEACON_TOKEN=   # Cloudflare Web Analytics site-tag
PUBLIC_CLARITY_ID=        # Microsoft Clarity project id
```

Copy the file to a local `.env` (git-ignored) for development, and set the same variables in the deploy environment (Vercel → **Settings → Environment Variables**). Neither is a secret, but they live in env so they can rotate without touching source.

## Deployment

Deployed on **[Vercel](https://vercel.com)** (Astro preset, auto-detected). Security headers ship via [`vercel.json`](vercel.json); an equivalent [`public/_headers`](public/_headers) covers Netlify / Cloudflare Pages, and a prod-only `<meta>` CSP in the layout is a fallback for header-less hosts. The apex `4real.ventures` `308`-redirects to `www` while carrying the full HSTS header (preload-eligible).

## Security

- **No secrets in the repo or its history** — the repository starts from a clean commit; the only tokens are public analytics tags, kept in env vars, never in source.
- A **pre-commit secret guard** ([`.githooks/pre-commit`](.githooks/pre-commit)) blocks committing `.env` files or anything matching known key formats (private keys, AWS / GitHub / OpenAI / Google / Slack tokens).
- Strict **Content-Security-Policy**, **HSTS** (preload), `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, and a locked-down `Permissions-Policy`.
- A vulnerability contact per [RFC 9116](https://www.rfc-editor.org/rfc/rfc9116) at [`/.well-known/security.txt`](public/.well-known/security.txt).

## Credits

Design and build by **Gabriel Olegário**, with Claude Code — from São Paulo.

## License

The source in this repository is free to read and learn from. Brand marks, copy, images, and likeness are **not** licensed for reuse — please ask first.

<div align="center"><br /><sub>4<span>/</span>RL Co. · © 2026 · <a href="https://www.4real.ventures">www.4real.ventures</a></sub></div>
