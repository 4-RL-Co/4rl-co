# Source artwork

Full-size masters that the site's assets were cut from. **Nothing here is tracked**, and nothing builds on it, so this folder is normally empty on a fresh clone. That is expected: what the site actually serves lives in `public/ventures/` and `src/assets/`, and those are committed.

Keep the originals here so an asset can be re-cut at a different size later, instead of re-exporting from scratch.

| Master (local only) | Became | How |
|---|---|---|
| `gumehome.png` | `src/assets/gume-home.png` | Capped at 1680px wide. Astro then emits the WebP the page uses. |
| `d.lablogo.png` | `public/ventures/dlab-experts.png` | Trimmed to the ink, capped at 240px tall. |
| `m1m1cbox.png` | `public/ventures/m1m1c-box.png` | Trimmed to the ink, capped at 240px tall. |
| `labepi-vetores-12.svg` | `public/ventures/labepi.svg` | viewBox retargeted from the 1080² canvas to the ink. |

`public/ventures/smart-social.svg` needed no work: its master was already trimmed and was copied across unchanged.

## Why the assets are cut, not used as-is

Three of the four masters were square canvases with the artwork floating in the middle, and two were 4500px and 3000px squares for marks the page never draws above 67px. The Work row aligns its marks by capping them all to one height, so any padding baked into the file makes that mark sit small or off the line. Trimming to the ink is what makes the row read as one system.

See [`public/ventures/README.md`](../public/ventures/README.md) for what a replacement mark has to be, and for the optical `scale` values.
