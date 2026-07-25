# Venture stills — the Work tiles

One image per venture. Unlike the hero folder, these are **named**, not globbed,
because a tile has to get its own venture's photograph and not whichever file
sorted first.

1. Drop the file here, e.g. `smart-social.jpg`.
2. Name it in [`src/data/ventures.js`](../../data/ventures.js):

```js
{ idx: '01', name: 'Smart Social', /* … */ photo: 'smart-social.jpg' }
```

`photo: null` — or a name with no matching file — leaves that tile on its grade
alone. That is a supported state, not a broken one: the tiles are finished
without photography, and half-filling the section would look worse than not
filling it.

Accepted: `.jpg` `.jpeg` `.png` `.webp` `.avif`.

## What happens to it

`astro:assets` emits WebP at 640 / 1080 / 1600 wide, lazily loaded. Supply the
largest sharp version you have; Astro cuts down, never up.

Each tile's box is reserved by CSS before the file loads — `16/9` and `5/4` for
the pair in the top row (paired so they finish level at every width) and `32/9`
for the wide one. The image is `object-fit: cover` inside that box, so nothing
reflows when it arrives.

## Grade, not colour

Each venture has a `grade` in the same data file (`plum`, `pine`, `umber`,
`slate`). It is the tile's ground when there is no photograph and the tint under
one when there is. The photographs have to be graded to it: the tiles read as
one shoot or the whole idea collapses into a four-colour palette. See
`ai/DECISIONS.md`.

The wordmark still sits on top, so leave the frame's centre quiet — a busy
middle and a white wordmark fight each other, and the wordmark loses.

## Not to be confused with

[`public/ventures/`](../../../public/ventures/) holds the **wordmarks** — flat
white artwork, cut and trimmed, served as-is. Different assets, different rules,
different folder.
