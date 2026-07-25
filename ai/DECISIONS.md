# Decisions

Every choice on this site with its reason, newest first, including the ones we
got wrong and reversed. The convention comes from the holding, and the site's
Open Source section points at this file by name, so it exists here as a promise
kept rather than as a document nobody asked for.

A decision belongs here when reversing it would cost something: brand, budget,
architecture, or a rule the next person would otherwise break by accident. A
CSS tweak does not belong here. The commit log covers what changed; this file
covers what we chose and what we gave up to choose it.

---

## 2026-07-25 — The lime is gone: the brand goes monochromatic

**Decision.** The electric lime `#C6FF3A`, the founding "single surgical
accent," is removed from the entire identity on the owner's call. The brand
is now white on near-black, full stop. Emphasis carries by LUMINANCE, not
hue: `--accent` is pure `#FFF` against the softer `#F2F2F3` ink, so the "/"
and highlighted words read as the brightest thing on the page rather than the
greenest.

**Why it was cheap.** The whole point of the token system was this: `--accent`
is the one dial. Retargeting `--lime` from green to white flipped every "/",
every `.hl`, every focus ring, every solid CTA, the selection colour, the
cursor, and the row/plate washes at once — the components never knew. The only
hand-work was the raster/vector assets that baked the lime in.

**The assets, mono.** The mark SVGs and the inline preloader lost their lime
fill. The nav/footer wordmark was re-flattened all-white (the lime slash with
it), via the artwork's own alpha as a mask. The favicon set was regenerated
from the owner's `logomono.png` — a near-black rounded square with a white
slash — so it reads on any tab (a bare white mark would vanish on light
chrome), including a hand-built `favicon.ico`. The OG card had its lime slash
and corner glow neutralized in place (pixel pass to white / neutral grey),
keeping the exact typography. `og-image-lime.png` and `logomono.png` are
archived in design-src.

**What stayed.** The cinematic grades (plum, pine, umber, slate) are NOT the
lime — they are the photography's colour, the "second colour from imagery"
the brand always allowed. They remain. If the owner wants those gone too, that
is a separate call.

**Reversal.** Set `--lime` back to `#C6FF3A` / `--lime-deep` `#AEE62E` and the
whole UI returns to green in one edit; the assets would need re-recolouring
from the archived masters.

---

## 2026-07-24 — Five languages: a language is a URL

**Decision.** The site speaks English, Portuguese, Spanish, Chinese and
Russian. Astro's i18n routing, English at the root as the canonical voice
(the founding AEO decision holds), the other four at /pt/ /es/ /zh/ /ru/ as
fully static homes. hreflang alternates across the five, og:locale and the
html lang per page, x-default pointing at English. The selector in the nav is
a chip of glass with the same dropdown grammar as Work; on the mobile panel
it renders inline. No JS toggle, no cookie: every option is a plain link.

**Scope, extended by the owner to everything.** The first cut localized the
home only and flagged the long-form as a risk; the owner reaffirmed full
coverage, so full coverage shipped: cases, capabilities, studio and
open-source are fully translated in all five languages (src/i18n/pages.js),
every internal link is locale-aware, the selector keeps the reader on the
SAME page across languages, and every one of the 60 routes carries the full
hreflang family. The build went from 12 pages to 60.

**The exception closed the same day.** The two Journal essays now ship with
fully translated bodies in all four languages (src/i18n/posts.js), block by
block, figures and captions included; the origin note survives only as a
fallback for a locale without a body. The product vocabulary crosses
untranslated on purpose: the Gume ratings, "o que falta" and "peguei essa"
are the app's own words in every language. And the essay's "Why this is in
English" section retired from the original and all four translations at
once: a site that answers in five languages no longer needs to explain why
it wrote in one.

**Costs accepted.** Space Grotesk ships latin only, so Cyrillic and CJK
display text renders on system stacks; the wordmark, the slash and the
Michroma word are latin and travel unchanged. The FAQ schema stays on the
English home only, so the FAQPage block exists exactly once. Chinese drops
the serif voice where synthetic italic CJK would cheapen it.

**Same-day trims by the owner.** "For real." left the hero headline (the
signature lives on in the wordmark, the ticker and the contact close); a
rotating /AI → /TECH → /ART → /SOUL → /CARE word shipped and was cut within
the hour — the reader keeps the version they saw first, and a headline that
churns undercuts a thesis that claims permanence. The AGPL chip now names
its project ("Gume: open source, AGPL-3.0") — unattributed, it read as if
the studio itself were open source.

---

## 2026-07-24 — The content round: real numbers, real partners, real pages

**The capabilities got pages.** /capabilities/[slug], one per stage of the
chain, fed by src/data/capabilities.js and linked from the home cards. The
expertise argument lives there in checkable form: the Smart Social numbers
come from smtsocial.com.br (800+ creators, 15+ countries, 35+ iGaming
clients in three years, 62,000+ first-time deposits in 2024, SiGMA Americas
2025 shortlist), the press items from news.js, the open source claims from
the repos. No plate band on these pages: capabilities have no photography of
their own, and borrowing a venture's frame would say the wrong thing — the
Michroma ghost numeral carries the visual instead.

**The ventures got their facts.** Smart Social's case now runs on the site's
own numbers and names Portal Arenna, the sports portal it owns, built end to
end on the 4/RL stack. LabEpi is stated as what it is: a joint venture with
André Soares and Lucas H. C. C. Santos, GBD senior collaborator published in
The Lancet — the partners render as a "Built with" block with links. M1m1c
Box is stated as a creative partnership with Luiza, with the earlier-venture
campaign record (Grupo Carrefour, AfroBusiness Brasil, Conta Black). Case
pages grew `proof` (on the record) and `partners` blocks. The founder's
ForbesBLK membership landed on /studio, in the FAQ, and in the Person schema.

**The epidemiology placeholder retired.** It was the honest version of a
placeholder — no link, no date, "no repo yet" in so many words — and it still
described a thing that does not exist. Cut from the home section and from
/open-source on the owner's call; it returns the day there is a repo.

**The Gume frame.** The brand image with the Gume icon centered replaced the
product screenshot, at 4px of blur where the plates run 12, grain kept. The
variation is deliberate: one treatment applied everywhere stops being a
treatment and becomes a template.

**Open loose end.** M1m1c's partner is credited as "Luiza" with her LinkedIn
— full name pending from the owner.

---

## 2026-07-24 — Corrections on review: glass off the marks, Work grows a menu

**Glass, final scope.** The pane around the Work wordmarks came off on the
owner's eye: the marks sit directly on their blurred fields again. Liquid
glass survives in exactly one place, the hero thesis — one pane per site,
which is tighter than one per screen and better.

**The Work dropdown.** "Work" in the nav pill now opens a menu of the
ventures (plus "All work"), pure CSS, on hover AND :focus-within so the
keyboard gets the same door. The trigger stays a real link to the section:
the dropdown is a shortcut, never the only path. On the mobile panel the
same links render inline under Work, because a hover menu with no hover is a
trap.

**A lesson worth the ink.** The rebuilt hero shipped broken for one review:
`<Image>` is an Astro component, and scoped styles never reach inside a
child component's markup, so the positioning class on the hero still matched
nothing and the image fell into normal flow. The fix is a `:global` selector
fenced inside the frame's own class. Same trap, second appearance (the Work
plates hit its cousin with inline `<span>`s); writing it down so there is no
third.

---

## 2026-07-24 — The hero becomes one image card; Michroma joins as the third voice

**The hero.** The type-then-band split retired. The opening viewport is now a
single rounded frame holding the cinematic still SHARP (the soft-blur rule is
for plates working as colour fields; here the photograph is the argument),
with everything laid on it: kicker high, headline low-left, the thesis in a
pane of liquid glass low-right, the ventures on the frame's bottom rule as
links to their case pages. The reference structure, this brand's frame.

**Liquid glass returns, precisely.** Heavy backdrop blur, a breath of white,
a bright top hairline. It was cut earlier today as "frost" and it returns
under a different justification: then there was no photography to refract,
now there is, and a pane over a blurred frame is a different object from a
panel over a flat grade. Budget: like the lime, one pane per screen — the
hero thesis, and the chip under the Work marks. Never on a flat surface.

**Michroma, scoped by the owner.** The face went in as the display voice
(it is the Eurostile-DNA drawing the wordmark and the brand cover use) and
was scoped back the same hour: at headline length its width kills
legibility. It stays as the THIRD VOICE, spending like the serif: the word
"AI" in the hero headline, the ghost numerals on the Capabilities cards, the
ticker strip. One weight, never synthesized bold, `.tech` in the system.
Space Grotesk remains the display.

**Journal covers, corrected.** The icon over a cover is white and it is
about the post — a book for the reading log, the slash for the manifesto —
named per-post in journal.js (`coverIcon`), not a hardcoded brand mark. The
lime mark overlay lasted one review: a logo stamped on every cover said
"ours" twice and "about this" never.

---

## 2026-07-24 — Reference round: ghost numerals, the ticker, the horizon

**Photos moved by the owner's eye.** The lavender frame went to LabEpi (the
owner's call, delivered as `labepi.png`), the screens-wall hall went to Smart
Social — a figure facing a wall of media is the venture's own metaphor — and
the grades followed their photographs: LabEpi runs plum, Smart Social slate.
The venture:stop mapping loosened from 1:1 to "the film decides"; the horses
returned to the shelf.

**Journal covers went photographic.** Two frames from the film (the goldfish
for the reading log, the arena of machine lights for the manifesto — the tool
answering back, literally), softened like every plate, with the 4/RL mark
centered on top as the graphic element. The drawn-slash covers retire; their
rule ("no screenshot covers") survives in the new one: covers come from the
film, never from a product window.

**Two borrowed moves, spoken in tokens.** From the glass reference: the
Capabilities rows became cards with their index as a ghost numeral filling
the corner, text not artwork, clipped by the card edge. From the portfolio
reference: a display-size ticker between Work and the first sheet — the
sectors drifting past with the slash as separator, on the existing .marquee
primitive with its shared timing and reduced-motion contract. And the closing
sheet gained a horizon: one frame blurred past recognition under a scrim
tuned to keep every token contrast intact.

**Not borrowed.** The ghost letters behind the hero (the page already opens
with its name at wordmark size, twice is a shout) and the glass cards' full
frosted treatment (the blur belongs to photographs here, settled earlier
today).

---

## 2026-07-24 — All dark: elevation replaces the paper

**Decision.** The light layer leaves the page entirely. The whole site runs
dark in two values: the brand near-black `#0A0A0B` is the GROUND, and
graphite `#101014` (elevation `#17171C`) is what floats on it — sheets,
bento tiles, cards. `.surface--deep` stacks on `.surface--dark` to put a
section on the ground while handing graphite down to its elevation token, so
every tile inside a deep section becomes a graphite card on near-black with
no per-component work. Sheets gained a 6% hairline border, because at these
values the border is what keeps card and ground apart. Home, studio,
open-source and the case pages all flipped; theme-color is `#0A0A0B`
everywhere again, which is where this repo started.

**Why.** The mixed arc was the reference's structure; the brand kept voting
against its light half. The lime needed an exception system to survive paper,
the wordmark needed a chip, the photography sat on white like holes in a
sheet, and every review pulled the palette darker. The original thesis
("near-black + single surgical accent") turns out to have been right; what
this redesign added to it survives intact — the photography, the grades, the
sheets-and-bento architecture, the radius scale, the three-piece nav — all of
it just runs on elevation now instead of on paper contrast.

**What the paper leaves behind.** The light token layer stays in global.css,
unused. It is small, it is tested (AA on both grounds), and it is the escape
hatch if a genuinely light artefact ever appears (a printable page, an email
capture). Removing it saves bytes; keeping it saves re-deriving it. Kept.

**Cost.** None structural — the flip was classes and one modifier, which is
the surface system paying out a second time in one day.

---

## 2026-07-24 — The arc flipped: the site opens dark again

**Decision.** The hero moved from paper to the graphite surface, and the home
now runs the reference's arc instead of its inverse: open dark, lighten
through the reading middle (Capabilities, Work, the bento on paper), return
dark as sheets, close dark. `theme-color` on the home follows to `#101014`.
The reading pages (studio, open-source, cases) still open on paper, which is
the right ground for pages whose job is text.

**Why.** Everything that is signature here is dark-native. The lime needs the
exception system to survive paper at all (1.07:1); the wordmark is white
artwork that needed a dark chip to exist in the nav; the four photographs are
graded dark and sat on the paper like holes in a sheet. The paper opening put
the first impression, the one screen where wordmark, lime and photography
should hit together, on the one surface where all three were on crutches. On
graphite the slash pulses lime again, "real" resolves to lime text, and the
slate band merges into the ground instead of floating on white.

**What this closes.** The OG image, the preloader, the journal and now the
home opening all agree: the brand's first face is dark. The light layer keeps
the job it earned in this redesign, reading, and loses the job it was never
right for, opening.

**Cost.** None new — the surface tokens absorbed the flip. That cheapness was
the argument for building them, and this is the receipt.

---

## 2026-07-24 — Review round: graphite, the three-piece nav, and the press at its real size

**The press left the bento.** As a tile it read as a stranger at the table:
headlines are rows, not cards, and a card of rows next to two cover cards
looked like a widget. It stepped down to one hairline strip under the grid,
flagship citation plus the "as seen in" roll. The tile lasted one review,
which is what reviews are for.

**The dark went graphite.** `.surface--dark` moved from the brand near-black
to `#101014` with `#17171C` elevation and a slightly cooler hairline. A card
catches light, a void doesn't; the elevation between sheet and tile is what
makes the dark half read premium. The brand constant `#0A0A0B` stays where it
is chrome: the nav glass, the preloader, the journal's deep ground. AA
re-checked (muted ink 6.8:1 on the sheet, 6.4:1 on elevation).

**The nav split into three objects.** Logo chip left, link pill dead-centre,
CTA right — each its own piece of dark glass, instruments on the page rather
than a bar across it. The CTA is the one white object on the site: solid
white, ink type, bright on the dark half, held by its hairline on paper. The
links gained per-item hover pills.

**The hero got its second voice and its proof.** "better" takes the serif
italic (a word is .serif or the accent, never both), and a chip row of three
checkable facts sits under the headline: 3 ventures owned and operated, open
source under AGPL-3.0, São Paulo · worldwide. Chips are labels, not links,
and each one is verifiable on this same page.

---

## 2026-07-24 — Sheets, bento, and the soft plates: the page becomes cards on paper

**Decision.** Four moves in one pass, the HA/Apple/OpenAI register spoken in
this site's tokens. The dark sections (Open Source, Manifesto, Contact) stop
being full-bleed bands and become rounded sheets floating on the paper, inset
by `--pad-sheet` with `--radius-xl`. The hero band gets the same inset and
radius. The Journal scroller and the News row-list leave the home page and
return as one bento (05 / Journal · Press): featured post, press tile on its
own dark surface, second post, and a CTA card carrying /journal and /studio.
Contact renumbers to 06. The radius scale grows two stops, `--radius-lg` 20
for tiles and `--radius-xl` 28 for sheets, with the original 8 for chrome.

**The photograph blur, settled.** The plates run soft as their resting state:
12px on tiles, 7px on the hero (one dial, `--plate-blur`), grain doubled on
plates so the soft field reads as film rather than as a focus mistake. The
hover-to-sharp reveal shipped and was cut the same day: the soft field is the
image, on every device, not a resting state waiting for a mouse. A frosted
glass panel behind the wordmarks shipped and was cut the same afternoon for
the same reason — the blur belongs to the photograph, not to a pane over it.

**Why sheets.** Full-bleed alternation reads as stripes; cards on one sheet
read as objects with an owner. The paper seam around each dark section is
what makes the near-black feel placed rather than poured. Home only for now:
the case pages keep their inset band, the journal stays dark-first.

**Cost accepted.** Journal.astro and News.astro (the home components) are
deleted; /journal and news.js are untouched and the bento consumes both data
files. The nav anchor #news now lands on the bento.

---

## 2026-07-24 — The photography landed, and the mapping wrote itself

**Decision.** Four images went live from a batch of fifteen, one per grade
stop: the concrete hall with the slit of light is the hero band (slate), the
lavender field with the swirl is Smart Social (plum), the horses in the teal
grass are LabEpi (pine), and the oval window onto the storm is M1m1c Box
(umber). Each venture's one file serves its Work tile and its case band.

**Why these four.** The grades were defined before any photograph existed,
as four stops of one film. This batch happened to contain exactly one strong
image in each stop's register, so the mapping cost nothing: no image had to be
regraded and no stop had to move. Beyond colour, each choice carries the right
figure: the studio at the threshold of light for the hero, the crowd-swirl for
influence, the horses for a discipline that studies living populations, the
window onto a storm for cinema.

**What stayed on the shelf.** Eleven masters live in `design-src/photos/`
(untracked, like all masters): variants of the chosen four, three moodboard
references, and four strong spares (arena of lights, dancer, goldfish, teal
disc) that fit the film and can take a slot later, the /studio band being the
obvious first candidate. Spares are named `spare-*`, references `ref-*`.

**Weight.** Site cuts are q85 mozjpeg (60 to 123 KB each); Astro emits the
WebP the pages actually serve, 4 to 45 KB per size. The hero band ships eager
with `fetchpriority=high` as the LCP; the tiles ship lazy with their boxes
reserved by CSS, so CLS stays where it was.

---

## 2026-07-24 — The site grows subpages: /work/[slug], /studio, /open-source

**Decision.** Three new destinations. Each venture gets a case page at
`/work/<slug>` and the Work tiles now point there, internally, with the
external site link moved to the end of the case story. `/studio` explains the
studio at page length and renders the FAQ visibly. `/open-source` carries the
full public-work argument, with the home section as its teaser.

**Why the tiles turned inward.** Two reasons, one structural and one honest.
Structural: the tile is a single anchor, so it could carry the external link or
an internal story link but never both without nesting anchors. Sending it
inward dissolves that, and the case page carries both. Honest: a tile that
launches you off-site says the site has nothing to add about its own ventures;
a case page is where the photography, the numbers (`fact`) and the story get
room. Arrows follow the existing grammar: → inside the site, ↗ off it.

**Schema.** Each case page emits its venture as an Organization tied to the
studio via `parentOrganization`, plus WebPage and BreadcrumbList. `/studio`
emits AboutPage and the founder as Person. `/open-source` emits Gume as
SoftwareApplication (AGPL-3.0, pt-BR, price 0). The FAQPage block stays on the
home page only; `/studio` shows the same questions as visible content from the
same data file (`src/data/faq.js`), deliberately without a second FAQPage.

**Copy rule.** Case stories are thesis-level and verifiable by clicking
through. Numbers live in `fact` and nowhere else, and `fact` stays null until
a real, checkable figure exists. No page promises anything that does not exist:
the epidemiology page section says "no public repo yet" in so many words.

**Cost accepted.** Nav "About" became "Studio" and points at the page instead
of the home manifesto anchor. Subpages ship without the full Footer (same as
the Journal): each closes with its own dark CTA section instead, so the
numbered "07 / Contact" label stays a home-page fact.

---

## 2026-07-24 — The paper is neutral, and the grades own the warmth

**Decision.** The paper tokens moved from a warm cream set (`#F3F1EA` /
`#EAE7DD` / `#54544F` / `#D9D6CB`) to a neutral grey-white set (`#F4F4F4` /
`#EAEAEB` / `#54555A` / `#DBDBDD`), the same day the cream shipped.

**Why.** On screen next to the near-black, the cream read yellowed rather than
warm — the review caught it within hours. The correction also sharpened a rule
worth keeping: the UI surfaces are colourless on both halves, so **all** of the
page's warmth belongs to the cinematic grades. A warm paper was quietly
competing with the film for that job.

**Checked.** Ink 17.2:1, muted body 6.8:1 on paper, 6.2:1 on the elevated
paper — AA holds everywhere it held before. Lime on the new paper is 1.07:1,
so the fill-only rule stands unchanged.

---

## 2026-07-24 — Visual direction: paper and near-black, with the colour in the film

**Decision.** The site alternates two surfaces instead of running one. Sections
01-02 and 05-06 sit on paper `#F4F4F4`; 03-04 and Contact sit on near-black
`#0A0A0B`. Cinematic imagery arrives as a full-bleed band under the hero and as
graded tiles in Work. The nav becomes a floating pill. Capabilities ships as a
numbered list and finally appears on the page.

**Why.** Half the target language was already native here: Space Grotesk at
display size, Space Mono on the section indices, pills, an editorial grid, the
`/` drawn geometrically, Instrument Serif as a second voice. The two real gaps
were photography, which the site had none of and which is where a studio's
colour is supposed to come from, and a lighter ground to give the type air. The
distance was smaller than it looked.

**The lime, precisely.** `#C6FF3A` on `#F4F4F4` is **1.07:1**. That is not low
contrast, it is invisible, so the rule "single surgical accent" cannot survive
unchanged on paper. What we did instead: `--accent` is a token that resolves to
the lime on near-black and to ink on paper, so every component that already read
`--accent` is correct on both without being rewritten. On paper the lime is
allowed only as a **fill** — the mark inside the nav pill, a hairline under one
word — never as text, and never more than once per screen. The word that earns
it is `real`. `--lime` keeps the literal for those fills.

**Where the second colour comes from.** Imagery, and nowhere else. Four grades
(`plum`, `pine`, `umber`, `slate`) are stops of one film, not four brand
colours, and they are only ever a plate's ground or a photograph's tint. They
never touch a button, a link, a label, a badge or a focus ring. This is what
keeps "single accent" true even though the page now has colour in it.

**Inviolable.** The `/` as the signature. The lime as the only UI accent. English.
Self-hosted fonts via Fontsource — no font CDN, and the CSP blocks one anyway.
CSS inlined, no client framework. The AEO output. The quality bar below.

**Cost accepted.** A second token layer, contrast rechecked on both grounds,
and three things that were tuned for dark and had to be re-solved for paper:
the custom cursor's `mix-blend-mode: difference` (over paper it turns the lime
border violet `#3900C5`, so it hit-tests the surface under the pointer and goes
ink), `::selection` (was `--accent` on `#0A0A0B`, which on paper would have
painted selected text black on black), and `theme-color` (per page now, because
the home page opens on paper and every other page still opens on near-black).
The OG image is still the dark one and is still correct: it represents the
brand, not the top of the home page.

**Fallback.** Dark-first plus photography, keeping the original thesis, is the
safe return. It is one class per section away: drop `surface--light` and the
tokens resolve back to the dark set with no other edit.

---

## 2026-07-24 — The drawn wordmark replaces the typeset lockup

**Decision.** The nav and the footer now show `public/4rl-wordmark.png`, the real
drawn "4/RL Co.", instead of the lockup that was set in Space Grotesk with the
`/` drawn in CSS. The square mark stays where it belongs — favicon, OG, the
preloader, the stamp on a Journal article — and comes out of those two slots.
The CSS that clip-pathed the lockup's `/` to cap height is gone with it.

**Why the nav pill is dark, restated.** The artwork is white with a lime `/`,
so it only exists on a dark ground. The nav pill being a dark object on both
halves of the page is what lets one asset serve the whole site.

**How it was cut.** Trimmed to the ink (2508x627 down to 1670x253 — the master
was mostly transparent padding), capped at 132px tall, re-encoded as a
128-colour palette PNG. 7 KB, against 38 KB for the straight RGBA cut, and
nothing is lost because the artwork is two flat colours and antialiasing. It is
drawn at 22px in the nav and 19px in the footer, so 132px covers 3x and more.
Same rule the venture wordmarks follow, and for the same reason.

**Open.** It is a PNG, and the repo's own standard says anything typographic
should be SVG. Worth redrawing as one when the vector source surfaces: it would
be about a tenth of the weight and sharp at any size.

---

## 2026-07-24 — The photography does not exist yet, and the page ships anyway

**Decision.** `src/assets/hero/` and `src/assets/ventures/` are empty. The hero
band and the Work tiles render their grade alone, with crop marks, a mono
caption and the wordmark, and no photograph. Naming a file in `ventures.js`
(`photo`) or dropping one into `src/assets/hero/` switches them over: resolved
at build time through `astro:assets`, responsive widths, WebP, into a box whose
aspect ratio is already reserved, so nothing shifts when it lands.

**Why.** The alternative was stock photography standing in for work we have not
shot, which would have made the strongest claim on the page the least true one.
This follows the rule the Open Source section already set for the epidemiology
row: no mockup of something that does not exist. A graded plate is an honest
empty state; a borrowed photograph of someone else's studio is not.

**Where each thing goes.** Three folders, each with the contract written into a
README beside it, because "drop the photos in" is exactly the instruction that
gets guessed wrong six months later:

| Folder | Holds | Resolved by |
|---|---|---|
| `src/assets/hero/` | one still for the band | globbed, first file wins |
| `src/assets/ventures/` | one still per venture | named in `photo` in `ventures.js` |
| `public/media/` | the band's video + poster | fixed filenames, checked at build |

Video sits in `public/` rather than `src/assets/` because `astro:assets` does
not process video. It would be copied through untouched either way, and routing
it through the asset pipeline would only disguise the fact that the encode is
entirely the author's problem. Precedence in the band is video, then still,
then the grade alone.

**Open.** Whether the real stills are licensed or generated in-house (M1m1c Box).
Whichever it is, they have to be graded as one shoot, or the tiles stop reading
as one film and the second colour becomes a palette again.

---

## 2026-07-24 — D.Lab Experts stays off the site

**Decision.** Unchanged from 2026-07-22. D.Lab Experts is not in `ventures.js`,
not in the Organization `subOrganization` JSON-LD, not in the FAQ answer, and
has no wordmark in `public/ventures/`. The redesign did not add it back.

**Why it is written down.** The redesign brief listed "D.Lab missing from
`ventures.js`" as a bug to fix. It is not a bug, it is the 2026-07-22 decision,
and the brief reached the wrong conclusion because `design-src/README.md` still
described a `dlab-experts.png` that had been deleted with it. The stale line is
now corrected. A removal that leaves documentation behind reads as an accident
to the next person who looks, which is how it nearly got reverted.
