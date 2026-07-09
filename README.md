# 4/RL Co.

**Independent AI venture studio.** We start companies and run them — across influence, education, applied AI, and film. The tool is AI; the bar is: it's real and it improves something.

**Live:** [www.4real.ventures](https://www.4real.ventures/)

![4/RL Co.](public/og-image.png)

---

## About

The 4/RL Co. site — an editorial, dark-mode venture-studio hub. It presents the thesis, the ventures we build and operate, press, and a native Journal. Built with [Astro](https://astro.build/) as a static site: fast, no client framework, self-hosted fonts, hardened headers.

Design language: near-black `#0A0A0B` with a single surgical accent — electric lime `#C6FF3A` — oversized Space Grotesk display type, and the `/` motif throughout.

## Ventures

| Venture | What it does |
| --- | --- |
| **Smart Social** | Influence and media network. |
| **LabEpi** | Teaching epidemiology and the scientific method. |
| **D.Lab Experts** | AI put to work where it moves the numbers. |
| **M1m1c Box** | Cinematic storytelling, made with AI. |

## Tech stack

- **[Astro](https://astro.build/)** — static output, zero client JS framework, HTML compressed and CSS inlined at build.
- **[Fontsource](https://fontsource.org/)** — self-hosted Space Grotesk (display), Space Mono (labels), Inter (body). No third-party font CDN.
- Vanilla CSS design tokens; small progressive-enhancement scripts (scroll reveals, once-per-session preloader, custom cursor) that degrade gracefully and honor `prefers-reduced-motion`.

## Structure

```text
.
├── src/
│   ├── layouts/Base.astro       # head, meta/OG, CSP fallback, preloader, cursor, reveals
│   ├── components/              # Nav, Hero, Manifesto, Work, News, Footer
│   ├── pages/
│   │   ├── index.astro          # home
│   │   ├── 404.astro            # branded not-found
│   │   └── journal/             # list + [slug] article renderer
│   ├── data/                    # ventures, news, journal (content as data)
│   └── styles/global.css        # design system / tokens
├── public/                      # favicons, mark, OG image, cover, _headers, security.txt
├── vercel.json                  # security headers (CSP, HSTS, X-Frame-Options, …)
├── astro.config.mjs
└── .env.example                 # documents PUBLIC_CF_BEACON_TOKEN (value never committed)
```

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static build → dist/
npm run preview    # serve the production build locally
```

## Configuration

One optional environment variable, documented in [`.env.example`](.env.example):

```bash
# Cloudflare Web Analytics beacon site-tag (public, not a secret).
# The beacon only loads if this is set — the site works fine without it.
PUBLIC_CF_BEACON_TOKEN=
```

Copy it to a local `.env` (git-ignored) for development, and set the same variable in the deploy environment (Vercel → Settings → Environment Variables).

Enable the secret-guard git hook once after cloning — it blocks any commit that would leak an `.env` file or a token:

```bash
git config core.hooksPath .githooks
```

## Deployment

Deployed on **Vercel** (Astro preset, auto-detected). Security headers ship via [`vercel.json`](vercel.json); an equivalent [`public/_headers`](public/_headers) covers Netlify / Cloudflare Pages, and a prod-only `<meta>` CSP in the layout is a fallback for header-less hosts.

After connecting the repo: set the production branch, add `PUBLIC_CF_BEACON_TOKEN`, and point the domain in **Settings → Domains**. Update `SITE_URL` in [`src/layouts/Base.astro`](src/layouts/Base.astro) and the `Canonical` line in [`public/.well-known/security.txt`](public/.well-known/security.txt) to match the final domain.

## Security

- **No secrets in the repo or its history** — the repository starts from a clean commit; the only token used (a Cloudflare analytics site-tag) is public by design and lives in an env var, never in source.
- A **pre-commit secret guard** ([`.githooks/pre-commit`](.githooks/pre-commit)) blocks committing `.env` files or anything matching known key formats (private keys, AWS/GitHub/OpenAI/Google/Slack tokens).
- Strict Content-Security-Policy, `HSTS` (preload), `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, and a locked-down `Permissions-Policy`.
- A vulnerability contact per [RFC 9116](https://www.rfc-editor.org/rfc/rfc9116) at [`/.well-known/security.txt`](public/.well-known/security.txt).

## Credits

Design and build by Gabriel Olegário, with Claude Code.

## License

The source in this repository is free to read and learn from. Brand marks, copy, images, and likeness are not licensed for reuse — please ask first.
