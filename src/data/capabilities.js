// The three stages of the chain, shared by the home section (cards), the
// studio page, and the capability pages at /capabilities/<slug>.
//
// Same copy discipline as the case studies: thesis-level prose, and every
// number or name checkable — the Smart Social figures come from
// smtsocial.com.br, the press items from news.js, the open source claims
// from the repos. `proof` is the checkable list rendered on the page;
// nothing goes in it that a reader could not verify by clicking through.
export const capabilities = [
  {
    slug: 'operations-growth',
    idx: '01',
    tag: 'Operate',
    title: 'Operations & Growth',
    line: 'Strategy, growth and commercial, powered by AI.',
    lede: 'The unglamorous half of company-building, done as craft: strategy, growth and commercial, run inside the ventures rather than advised from outside.',
    story: [
      'Every 4/RL venture is operated, never advised, and the habit comes from the founder’s route: Gabriel Olegário came up through advertising and commercial roles before founding Smart Social, and the growth playbook running there today, creator sourcing, campaign operations, sponsorship and platform deals, was built in-house and is still run in-house, with Gabriel serving at Smart Social as partner and Head of Strategy and Innovation.',
      'The proof is Smart Social’s operation itself: a network of more than 1,000 influencers, athletes and media assets working across more than 25 countries, over 35 iGaming clients served in the last three years, and 62 thousand plus first-time deposits generated for them in 2024 alone. The operation was shortlisted for Best Marketing Agency at SiGMA Americas 2025.',
      'AI sits under all of it. Briefing, matching and reporting run through tooling built on the studio’s own stack, which is what lets a lean team run a network at that scale and hold every campaign to its numbers.',
    ],
    proof: [
      '1,000+ creators, athletes and media assets in the Smart Social network',
      'Operating across 25+ countries',
      'Partner and Head of Strategy and Innovation at Smart Social',
      '35+ iGaming clients served in the last three years',
      '62,000+ first-time deposits generated in 2024',
      'Best Marketing Agency nominee, SiGMA Americas 2025',
    ],
  },
  {
    slug: 'data-applied-ai',
    idx: '02',
    tag: 'Apply',
    title: 'Data & Applied AI',
    line: 'Turning data and AI into decisions that move the numbers.',
    lede: 'Data and AI turned into working software: models and tooling under each operation, built in-house on the 4/RL stack.',
    story: [
      'The stack is not a slide, it ships. This site runs on it, with a perfect Lighthouse score and answer-engine optimization by construction. Gume runs on it: an open source reading log over a catalogue of roughly 300 thousand Portuguese-language editions, AGPL-3.0, built by the founder pairing with AI agents. Portal Arenna runs on it: a sports news portal owned by Smart Social, built end to end on the studio’s stack.',
      'Inside the ventures the same stack does the quieter work: the briefing, matching and reporting tooling under Smart Social’s network operation, and the measurement that keeps every campaign accountable. The rule is the studio thesis applied to software: build it, own it, run it.',
    ],
    proof: [
      'This site: Lighthouse 100 across the board, AEO by construction',
      'Gume: open reading log, ~300K editions in the catalog, AGPL-3.0',
      'Portal Arenna: sports portal built end to end on the 4/RL stack',
      'Campaign tooling under Smart Social’s operation',
    ],
  },
  {
    slug: 'creative-content',
    idx: '03',
    tag: 'Create',
    title: 'Creative & Content',
    line: 'AI-native creative, from concept to production.',
    lede: 'AI-native creative from concept to production, directed by people and held to the standard of the craft.',
    story: [
      'The creative practice is a partnership. M1m1c Box, the studio’s cinema venture, is run with Luiza Santana, and in earlier ventures the two shipped campaign work for Grupo Carrefour, AfroBusiness Brasil and Conta Black, among others. The craft that carried those campaigns is the same craft that directs the AI here.',
      'M1m1c Box is where the practice runs hottest: short cinematic stories published on YouTube, written, art-directed and cut by people, with AI carrying the production weight it is genuinely good at. What gets learned there flows back into every brand the studio touches, and the record shows it travels: the EstrelaBet campaign that went viral at the 2022 World Cup came from this practice.',
    ],
    proof: [
      'M1m1c Box: cinematic stories made with AI, published on YouTube',
      'Campaign work for Grupo Carrefour, AfroBusiness Brasil and Conta Black in earlier ventures',
      'EstrelaBet World Cup 2022 viral, covered by Games Magazine Brasil',
    ],
  },
];
