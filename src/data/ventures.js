// The ventures under 4/RL. Links use live sites where available.
//
// `mark` is the wordmark filename under /public/ventures/. Work.astro checks it
// at build time: present means the real wordmark renders, absent means the row
// falls back to the grotesque name, so a broken image can never reach the page.
// `scale` is the optical trim: wordmarks have different proportions, so it nudges
// an individual mark's cap height to sit with the others. Leave at 1 until the
// real asset is in and the row can be judged by eye.
export const ventures = [
  {
    idx: '01',
    name: 'Smart Social',
    sector: 'Influence',
    line: 'Influence and media network.',
    href: 'https://smtsocial.com.br/',
    mark: 'smart-social.svg',
    scale: 1,
  },
  {
    idx: '02',
    name: 'LabEpi',
    sector: 'EdTech',
    line: 'Teaching epidemiology and the scientific method.',
    href: 'https://laboratoriodeepidemiologia.com/',
    mark: 'labepi.svg',
    scale: 0.92,
  },
  {
    idx: '03',
    name: 'M1m1c Box',
    sector: 'AI Cinema',
    line: 'Cinematic storytelling, made with AI.',
    href: 'https://www.youtube.com/@m1m1cbox',
    mark: 'm1m1c-box.png',
    scale: 1.15,
  },
];
