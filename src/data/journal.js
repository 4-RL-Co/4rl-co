// Native journal for 4/RL. Articles are written natively here.
// Block types rendered by /journal/[slug]:
//   { t:'p', html, drop? }  paragraph (drop=true -> drop cap)
//   { t:'pull', html, lime? }  full-width display pull statement
//   { t:'divider' }  centered lime "/" between movements
//   { t:'signoff', html }  oversized sign-off
// Accents inside html: <span class="hl">…</span> (lime), <span class="slash">/</span>.
export const articles = [
  {
    slug: 'the-tool-answered-back',
    title: 'The tool answered back',
    dek: 'The 4/RL manifesto',
    excerpt: 'The 4/RL manifesto.',
    author: 'Gabriel Olegário',
    date: '2026-07-07',
    dateLabel: 'Jul 2026',
    cover: '/cover-slash.svg', // shown on the /journal list card (16:9)
    flagship: true,
    blocks: [
      { t: 'p', drop: true, html: `For seventy thousand years, our tools waited for us. The axe extended the arm, the wheel the leg, writing the memory. They stayed inert until a hand moved them. The hammer waited to be swung. The book kept its pages exactly as they were written.` },
      { t: 'pull', lime: true, html: `Now the tool answers back.` },
      { t: 'p', html: `This is the ontological leap of our century. Powers that once belonged only to the gods became engineering, and that asks something new of us. Artificial intelligence works like a mirror: it reflects the clarity of whoever holds it. Bring it method and intent and it becomes a lever that moves real work.` },
      { t: 'pull', html: `4<span class="slash">/</span>RL exists to hold that lever well.` },
      { t: 'p', html: `We are an independent AI venture studio. We build and operate companies that put artificial intelligence to work on problems that matter, across whatever domain the problem lives in, and we measure what actually changes. Our whole thesis fits in one line: improve the world with AI, <span class="hl">for real</span>.` },
      { t: 'divider' },
      { t: 'p', html: `<span class="hl">"For real"</span> is our standard. It means we ship things that genuinely function, we prove the result with evidence, and we bring rigor and taste to every build. The distinction that defines this era belongs to whoever masters the process of reaching an answer, the person who orchestrates the intelligence the way a maestro reads an orchestra. So that is how we build: clear questions, documented method, results anyone can check.` },
      { t: 'p', html: `The name says it. "4<span class="slash">/</span>RL" reads <span class="hl">for real</span>, <span class="hl">de verdade</span>. The slash carries the whole idea. It is the line every project has to cross, from promise to proof. What we make has to survive that crossing before it ships.` },
      { t: 'divider' },
      { t: 'p', html: `Toffler wrote that the illiterate of this century would be the one who cannot learn, unlearn and relearn. We take that literally. We learn in public, we build in the open, and we keep the human in the loop where judgment matters most.` },
      { t: 'p', html: `From São Paulo to the world. A work in progress.` },
      { t: 'signoff', html: `4<span class="slash">/</span>RL. Real AI, real impact.` },
    ],
  },
];

export const getArticle = (slug) => articles.find((a) => a.slug === slug);
