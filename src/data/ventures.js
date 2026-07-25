// The ventures under 4/RL. Links use live sites where available.
//
// `mark` is the wordmark filename under /public/ventures/. Work.astro checks it
// at build time: present means the real wordmark renders, absent means the row
// falls back to the grotesque name, so a broken image can never reach the page.
// `scale` is the optical trim: wordmarks have different proportions, so it nudges
// an individual mark's cap height to sit with the others. Leave at 1 until the
// real asset is in and the row can be judged by eye.
//
// `grade` is the venture's stop in the cinematic grade — the only place the
// brand carries a second colour, and it belongs to imagery, never to UI. Four
// stops of one film (plum, pine, umber, slate) rather than four brand colours,
// so the tiles read as one shoot. It is the plate's ground when there is no
// photograph, and the tint under the photograph once there is one.
//
// `photo` is a filename under `src/assets/ventures/`. One file serves both the
// Work tile and the case page band, through astro:assets at build time —
// responsive widths, WebP, and the aspect ratio already reserved, so nothing
// shifts. Masters live in design-src/photos/ (untracked); each venture's still
// sits on its own stop of the grade, plum, pine and umber, and the hero band
// carries slate, so the four images read as one shoot. Null is still a
// supported state: the tile falls back to its grade alone.
//
// `fact` is the one number that proves the venture is real, stated in mono on
// the tile's meta row and again on the case page. Null hides it in both
// places. It has to be a real, checkable figure ("120+ creators in the
// network", "40K students"), never reach math or a vanity round-up: on this
// site the proof IS the brand, so a soft number here costs more than no number.
//
// `caseStudy` is the venture's page at /work/<slug>. The story is deliberately
// thesis-level: it says what the venture is and how the studio runs it, and it
// makes no claim a reader could not verify by clicking through. Numbers belong
// in `fact`, nowhere else.
export const ventures = [
  {
    idx: '01',
    slug: 'smart-social',
    name: 'Smart Social',
    sector: 'Influence',
    line: 'Influence and media network.',
    href: 'https://smtsocial.com.br/',
    linkLabel: 'smtsocial.com.br',
    mark: 'smart-social.svg',
    scale: 1,
    grade: 'slate',
    photo: 'smart-social.jpg',
    fact: '1,000+ creators across 25+ countries',
    caseStudy: {
      lede: 'A full-service media hub connecting 1,000+ creators, athletes and media assets to brands across 25+ countries, owned and operated by 4/RL.',
      story: [
        'Smart Social is a full-service media hub: influencer strategy, campaign operations, brand ambassadors, sponsorship activation and paid media, run end to end for brands in iGaming, sports, entertainment and finance. The network holds more than 1,000 influencers, athletes and media assets, working across more than 25 countries, and 4/RL’s founder serves inside it as partner and Head of Strategy and Innovation.',
        'The numbers are operational, not aspirational: over 35 iGaming clients served in the last three years, 62 thousand plus first-time deposits generated in 2024, campaigns with 1xBet, EstrelaBet, C6 Bank and TaDa Gaming, and a Best Marketing Agency shortlist at SiGMA Americas 2025. AI sits under the operation, in the briefing, matching and reporting tooling built on the studio’s stack.',
        'Smart Social also owns Portal Arenna, a sports news portal built on serious reporting and sharp analysis across football, UFC, Formula 1, NBA and NFL. Arenna was built end to end on the 4/RL stack, which is the studio thesis in one sentence: the media company owns its media, and the technology under it is ours.',
      ],
      proof: [
        '1,000+ influencers, athletes and media assets in the network',
        'Operating across 25+ countries',
        '4/RL’s founder: partner and Head of Strategy and Innovation',
        '35+ iGaming clients in the last three years',
        '62,000+ first-time deposits generated in 2024',
        'Best Marketing Agency nominee, SiGMA Americas 2025',
        'Owner of Portal Arenna, built on the 4/RL stack',
      ],
      does: [
        { k: 'Operate', line: 'Commercial, campaign operations and creator management, run in-house.' },
        { k: 'Apply', line: 'Matching and reporting powered by tooling built for the network.' },
        { k: 'Create', line: 'Content shaped with creators, AI-native where it earns its place.' },
      ],
    },
  },
  {
    idx: '02',
    slug: 'labepi',
    name: 'LabEpi',
    sector: 'EdTech',
    line: 'Teaching epidemiology and the scientific method.',
    href: 'https://laboratoriodeepidemiologia.com/',
    linkLabel: 'laboratoriodeepidemiologia.com',
    mark: 'labepi.svg',
    scale: 0.92,
    grade: 'plum',
    photo: 'labepi.jpg',
    fact: null,
    caseStudy: {
      lede: 'Epidemiology and the scientific method, taught in Portuguese, in a joint venture with working scientists.',
      story: [
        'LabEpi teaches epidemiology and the scientific method: courses, materials and a community for students and professionals who need evidence that holds up outside the classroom. The teaching is in Portuguese by design, because that is the language its public studies and works in.',
        'It is a joint venture. Alongside 4/RL, LabEpi is built with André Soares and with Lucas H. C. C. Santos, senior collaborator of the Global Burden of Disease study, with more than 1,500 citations and published work in The Lancet. The scientific method is taught here by people who use it for a living, which is the whole argument.',
      ],
      partners: [
        { name: 'André Soares', role: 'Co-founder', href: 'https://www.linkedin.com/in/bobdesigner/' },
        { name: 'Lucas H. C. C. Santos', role: 'Co-founder · GBD senior collaborator · 1,500+ citations, published in The Lancet', href: 'https://scholar.google.com/citations?user=WLxIEwcAAAAJ&hl=pt-BR' },
      ],
      does: [
        { k: 'Operate', line: 'Course operations, community and growth.' },
        { k: 'Apply', line: 'Study tools built around how epidemiology is actually learned.' },
        { k: 'Create', line: 'Teaching materials produced end to end.' },
      ],
    },
  },
  {
    idx: '03',
    slug: 'm1m1c-box',
    name: 'M1m1c Box',
    sector: 'AI Cinema',
    line: 'Cinematic storytelling, made with AI.',
    href: 'https://www.youtube.com/@m1m1cbox',
    linkLabel: 'YouTube',
    mark: 'm1m1c-box.png',
    scale: 1.35,
    grade: 'umber',
    photo: 'm1m1c-box.jpg',
    fact: null,
    caseStudy: {
      lede: 'Short cinematic stories made with AI, in a creative partnership held to the standard of film.',
      story: [
        'M1m1c Box publishes short cinematic stories on YouTube. Every piece is directed: written, art-directed and cut by people, with AI carrying the production weight it is genuinely good at. The name states the method, mimicry with intent, and the channel is where that method is tested in public.',
        'It is a creative venture run with Luiza Santana. In earlier ventures the two shipped campaign work for Grupo Carrefour, AfroBusiness Brasil and Conta Black, among others, and the craft that carried those campaigns is the same craft that directs the AI here.',
        'It is also the studio’s proving ground for AI production: what gets learned making films, in pipelines, in prompting, in taste, flows back into the creative work across the other ventures. Film is the hardest brief in the studio, which is exactly why the studio keeps one.',
      ],
      partners: [
        { name: 'Luiza Santana', role: 'Co-creative', href: 'https://www.linkedin.com/in/luizalns/' },
      ],
      proof: [
        'Campaign work for Grupo Carrefour, AfroBusiness Brasil and Conta Black in earlier ventures',
        'EstrelaBet World Cup 2022 viral, covered by Games Magazine Brasil',
      ],
      does: [
        { k: 'Operate', line: 'Channel and publishing operations.' },
        { k: 'Apply', line: 'Production pipelines that turn models into a working crew.' },
        { k: 'Create', line: 'The films themselves: concept, script, image, sound and cut.' },
      ],
    },
  },
];
