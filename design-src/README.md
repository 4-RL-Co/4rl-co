# Source artwork

Full-size masters that the site's assets were cut from. **Nothing here is tracked**, and nothing builds on it, so this folder is normally empty on a fresh clone. That is expected: what the site actually serves lives in `public/ventures/` and `src/assets/`, and those are committed.

Keep the originals here so an asset can be re-cut at a different size later, instead of re-exporting from scratch.

| Master (local only) | Became | How |
|---|---|---|
| `4rltypo.png` | `public/4rl-wordmark.png` | Trimmed to the ink (2508×627 → 1670×253), capped at 132px tall, re-encoded as a 128-colour palette PNG: 7 KB instead of 38 KB, and the artwork is only white, lime and antialiasing. Drawn at 22px in the nav and 19px in the footer, so 132px covers 3x and then some. |
| `gumehome.png` | `src/assets/gume-home.png` | Capped at 1680px wide. Astro then emits the WebP the page uses. |
| `d.lablogo.png` | *(nothing — no longer on the site)* | Was `public/ventures/dlab-experts.png`. D.Lab Experts came off the site on 2026-07-22 and the cut asset went with it. The master stays here in case that reverses; see `ai/DECISIONS.md`. |
| `m1m1cbox.png` | `public/ventures/m1m1c-box.png` | Trimmed to the ink, capped at 240px tall. |
| `labepi-vetores-12.svg` | `public/ventures/labepi.svg` | viewBox retargeted from the 1080² canvas to the ink. |

`public/ventures/smart-social.svg` needed no work: its master was already trimmed and was copied across unchanged.

## Why the assets are cut, not used as-is

Three of the four masters were square canvases with the artwork floating in the middle, and two were 4500px and 3000px squares for marks the page never draws above 67px. The Work row aligns its marks by capping them all to one height, so any padding baked into the file makes that mark sit small or off the line. Trimming to the ink is what makes the row read as one system.

See [`public/ventures/README.md`](../public/ventures/README.md) for what a replacement mark has to be, and for the optical `scale` values.

## Photos (design-src/photos/)

The cinematic batch of 2026-07-24, all untracked masters. Four are live on the
site (hero + one per venture, cut to q85 mozjpeg in `src/assets/`); the rest
are named by role: `spare-*` fits the film and can take a slot later, `ref-*`
is moodboard reference and never ships. The grade mapping and the reasoning
live in `ai/DECISIONS.md`.
