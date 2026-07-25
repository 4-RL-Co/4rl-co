# Video

Video lives in `public/` and not in `src/assets/` because `astro:assets` does
not process video. It would be copied through untouched either way, and routing
it through the asset pipeline would only hide the fact that **nothing here is
optimised for you**. Encode it before it lands in this folder.

## The hero band

Exact filenames — `Hero.astro` checks for them at build time:

```text
public/media/hero-band.webm          preferred source
public/media/hero-band.mp4           fallback source (H.264 + AAC-free, it is muted)
public/media/hero-band-poster.jpg    first frame; also the reduced-motion still
```

Either source alone is enough. If both are absent the band falls back to the
still in [`src/assets/hero/`](../../src/assets/hero/), and if that is absent too
it renders its grade alone. Video wins over a still when both exist.

## What the markup already does

`autoplay muted loop playsinline preload="metadata"` — muted and `playsinline`
are what make autoplay legal on iOS and in Chrome at all. A small script pauses
it under `prefers-reduced-motion: reduce`, which leaves the poster on screen,
so **ship the poster**: without it, reduced-motion users get a black rectangle.

## Encode it properly

Nothing downstream will fix a heavy file. Targets for a ~10s silent loop across
a full-width band:

- **Under 2 MB.** It is decoration; it must never compete with the page.
- **1920px wide is plenty.** The band is at most 620px tall and `cover`-cropped.
- **No audio track at all.** It is muted, so the track is pure weight.
- **WebM/VP9 plus MP4/H.264.** VP9 lands roughly 30% smaller on the browsers
  that take it; the MP4 is there for Safari.

```bash
ffmpeg -i master.mov -an -vf scale=1920:-2 -c:v libvpx-vp9 -crf 34 -b:v 0 hero-band.webm
ffmpeg -i master.mov -an -vf scale=1920:-2 -c:v libx264 -crf 24 -pix_fmt yuv420p -movflags +faststart hero-band.mp4
ffmpeg -i master.mov -vf scale=1920:-2 -frames:v 1 -q:v 4 hero-band-poster.jpg
```

## CSP

`media-src 'self'` is set in `vercel.json`, `public/_headers` and the `<meta>`
fallback in `Base.astro`. Self-hosted video works out of the box; a CDN or an
embed does not, and would need that host added in all three places. Don't.

## Grading

Same rule as the stills: the band, the video and the venture tiles have to look
like one shoot. See [`src/assets/hero/README.md`](../../src/assets/hero/README.md)
and `ai/DECISIONS.md`.
