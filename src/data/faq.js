// The studio's questions and answers, shared by two consumers:
//   - FAQ.astro emits them as invisible FAQPage JSON-LD on the home page,
//     which is where answer engines already index them;
//   - /studio renders them as visible content, WITHOUT a second FAQPage
//     block, so the schema exists exactly once on the site.
// Answers are written to be quoted whole by an answer engine: each one stands
// alone, names the entity it is about, and stays under a short paragraph.
export const faqs = [
  {
    q: 'What is 4/RL Co.?',
    a: '4/RL Co. is an independent AI venture studio based in São Paulo, Brazil. We build and operate our own companies that put artificial intelligence to work on real problems, across influence, education, applied AI and cinema.',
  },
  {
    q: 'What does "4/RL" mean?',
    a: '"4/RL" reads as "for real." The slash is the line every project has to cross, from promise to proof. Our thesis fits in one sentence: improve the world with AI, for real.',
  },
  {
    q: 'What companies does 4/RL operate?',
    a: 'Three ventures: Smart Social (an influence and media network), LabEpi (teaching epidemiology and the scientific method), and M1m1c Box (cinematic storytelling made with AI).',
  },
  {
    q: 'What does 4/RL actually do inside its ventures?',
    a: 'Three things, across the whole value chain of a company: operations and growth (strategy, growth and commercial, powered by AI), data and applied AI (turning data and AI into decisions that move the numbers), and creative and content (AI-native creative, from concept to production). One studio covers all three, which is why we can start a company rather than advise one.',
  },
  {
    q: 'Is 4/RL an agency or a consultancy?',
    a: 'Neither. We do not sell a service. We own our ventures and operate them for the long haul: we start companies and run them.',
  },
  {
    q: 'Who founded 4/RL?',
    a: '4/RL was founded by Gabriel Olegário, an advertiser and builder in São Paulo who sets the direction and ships the work. He is a member of ForbesBLK, Forbes’ community of Black entrepreneurs and leaders.',
  },
  {
    q: 'Where is 4/RL based and what languages does it work in?',
    a: '4/RL is based in São Paulo, Brazil, and works with partners and audiences worldwide in Portuguese and English.',
  },
  {
    q: 'How can I get in touch with 4/RL?',
    a: 'Email olegas@4real.ventures, or reach out on WhatsApp, LinkedIn, GitHub or Telegram, all linked in the footer.',
  },
];
