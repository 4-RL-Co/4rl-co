# Venture wordmarks

`Work.astro` picks these up at build time; nothing else needs editing.

| File | Venture | Cut from (masters live in `design-src/`, untracked) |
|---|---|---|
| `smart-social.svg` | Smart Social | `smartsocial.svg`, already trimmed, copied as is |
| `labepi.svg` | LabEpi | `labepi-vetores-12.svg`, viewBox retargeted to the ink |
| `m1m1c-box.png` | M1m1c Box | `m1m1cbox.png`, trimmed and capped at 240px tall |

Missing files are not an error: the row falls back to the venture name in the grotesque, and the build prints `[work] wordmark(s) missing` naming them. A broken image never reaches the page.

## How a mark is rendered

Each mark is centred in its own tile, on that venture's stop of the cinematic grade (`grade` in `src/data/ventures.js`). The grade is always a dark ground, whichever surface the section itself is on, so the marks are read against the same value everywhere.

Every mark here is white artwork, which makes `brightness()` a colour dial on it. The mark rests at `brightness(.86)` and goes to `1` on hover, which is the same step the tile's line of copy makes underneath it. Black knockouts, such as the "S" in the Smart Social tile, stay black either way.

Marks rest slightly held back on purpose: at full white they sit in front of the grade rather than in it, and the tiles stop reading as one shoot.

**There is no hover colour**, because none of the supplied files contain a brand colour to reveal.

If coloured artwork ever replaces these, that is when the hover reveal becomes buildable, and the Smart Social tile would need its "S" as a real knockout rather than a black shape sitting on a white square.

## What a replacement file has to be

- **Trimmed to the ink.** No padding inside the `viewBox` or the canvas. Tiles are aligned by capping every mark to the same height, so built-in whitespace makes a mark sit small or off the line. Three of the four originals were square canvases and had to be trimmed before they could be used.
- **Carrying its real dimensions.** The aspect ratio is read at build time from the SVG `viewBox` or the PNG header, which reserves the mark's width before the file loads and stops the tile reflowing.
- **Filled paths, not live text.** Convert type to outlines so nothing depends on a font being present.
- **SVG for anything typographic.** PNG works, but cap it near 240px tall. The originals were 4500² and 3000², which is roughly 70x more pixels than the row ever draws.

## Tuning

`scale` in `src/data/ventures.js` is the optical trim, judged by eye against the neighbouring rows rather than measured. Current values, and why:

| Venture | scale | Reason |
|---|---|---|
| Smart Social | `1` | Lockup with an icon; sets the reference. |
| LabEpi | `0.92` | The circle icon overshoots the cap, so it reads tall at 1. |
| M1m1c Box | `1.15` | A square badge, not a wordmark: its type is small inside the box, so it needs to grow to carry the same weight. |
