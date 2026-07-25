# Hero band — the still

Drop **one** image here and the cinematic band under the hero uses it. Nothing
else to edit: `Hero.astro` globs this folder at build time and takes the first
file it finds.

```text
src/assets/hero/hero.jpg      →  the band fills with it
(empty)                       →  the band renders its grade alone
```

Accepted: `.jpg` `.jpeg` `.png` `.webp` `.avif`.

## What happens to it

It goes through `astro:assets`, which emits WebP at 960 / 1600 / 2400 wide and
serves the right one per viewport. It is marked `loading="eager"` and
`fetchpriority="high"` because at the top of the page it is the LCP element.

**Do not pre-resize it.** Give it the largest sharp version you have, at least
2400px wide. Astro cuts down, never up.

The band's height is set in CSS (`clamp(260px, 46svh, 620px)`) and the image is
`object-fit: cover` inside it, so the box exists before the file does and
nothing on the page moves when it lands. That is why CLS stays at zero — do not
replace that height with an aspect ratio derived from the file.

## Video instead

A video wins over a still if both are present. Video does **not** go here —
`astro:assets` does not process it, so it lives in [`public/media/`](../../../public/media/).

## The grading rule

Whatever lands here has to be graded with the venture stills in
[`../ventures/`](../ventures/) as one shoot. Four stops of one film, not four
photographs that happen to be dark. If the band and the tiles do not look like
the same camera on the same day, the second colour of the brand stops being a
grade and becomes a palette, which is the one thing `ai/DECISIONS.md` rules out.
