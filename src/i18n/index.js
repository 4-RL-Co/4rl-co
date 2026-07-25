// The site's languages. English stays the canonical voice (the AEO decision
// that founded this site) and lives at the root; the other four live under
// /pt/ /es/ /zh/ /ru/ as fully static routes with hreflang alternates, which
// is the only i18n answer engines and crawlers actually respect. No client
// toggle, no cookies: a language is a URL.
//
// SCOPE: everything is localized — home, chrome, cases, capabilities,
// studio, open-source, and the journal's titles, deks and excerpts (this
// file holds the home + chrome; src/i18n/pages.js holds the deep pages).
// The single exception is the two Journal essay BODIES, which stay in
// English with a localized origin note until they are translated as
// reviewed batches; see pages.js and ai/DECISIONS.md.
//
// Voices inside translated headlines: the serif word, the lime slash and the
// tech "AI" travel with each language as HTML. Chinese drops the serif where
// italic CJK would be synthetic. Cyrillic and CJK render on system stacks
// (Space Grotesk ships latin only) — recorded in ai/DECISIONS.md.

export const LOCALES = ['en', 'pt', 'es', 'zh', 'ru'];

export const LOCALE_META = {
  en: { code: 'EN', name: 'English', og: 'en_US', dir: 'ltr' },
  pt: { code: 'PT', name: 'Português', og: 'pt_BR', dir: 'ltr' },
  es: { code: 'ES', name: 'Español', og: 'es_ES', dir: 'ltr' },
  zh: { code: '中文', name: '中文', og: 'zh_CN', dir: 'ltr' },
  ru: { code: 'RU', name: 'Русский', og: 'ru_RU', dir: 'ltr' },
};

export const homePath = (l) => (l === 'en' ? '/' : `/${l}/`);

// Every component self-localizes from the route: Astro.currentLocale is set
// by the i18n router on /pt/ etc. and undefined on non-localized pages,
// where English is the answer.
export const getLocale = (Astro) => Astro.currentLocale ?? 'en';
export const getDict = (l) => dict[l] ?? dict.en;

export const dict = {
  /* ================================================================ EN */
  en: {
    meta: {
      title: '4/RL Co. · Independent AI Venture Studio',
      desc: 'We improve the world with AI. For real. An independent AI venture studio building and operating ventures across influence, science, applied AI and cinema.',
      twitter: 'We improve the world with AI. For real.',
    },
    nav: { capabilities: 'Capabilities', work: 'Work', news: 'News', journal: 'Journal', studio: 'Studio', talk: "Let's talk", allWork: 'All work' },
    hero: {
      kicker: 'Independent AI Venture Studio',
      city: 'São Paulo',
      lines: [
        'We make the',
        'world <span class="serif">better</span> with <span class="hero__slash">/</span><span class="tech">AI</span>.',
      ],
      facts: ['3 ventures, owned and operated', 'Gume: open source, AGPL-3.0', 'São Paulo · worldwide'],
      thesis: 'We start companies and run them, across influence, education, applied AI and film.',
      portfolio: 'See the portfolio',
      rule: 'Ventures we start, own and run',
    },
    cap: {
      label: 'Capabilities',
      title: 'One studio, the full <span class="serif">value</span> chain<span class="slash">.</span>',
      sub: 'From the back office to the brand.',
      more: 'More',
      cards: {
        'operations-growth': { tag: 'Operate', title: 'Operations & Growth', line: 'Strategy, growth and commercial, powered by AI.' },
        'data-applied-ai': { tag: 'Apply', title: 'Data & Applied AI', line: 'Turning data and AI into decisions that move the numbers.' },
        'creative-content': { tag: 'Create', title: 'Creative & Content', line: 'AI-native creative, from concept to production.' },
      },
    },
    work: {
      label: 'Work · Companies',
      ventures: {
        'smart-social': { sector: 'Influence', line: 'Influence and media network.', fact: '1,000+ creators across 25+ countries' },
        'labepi': { sector: 'EdTech', line: 'Teaching epidemiology and the scientific method.', fact: null },
        'm1m1c-box': { sector: 'AI Cinema', line: 'Cinematic storytelling, made with AI.', fact: null },
      },
    },
    ticker: ['Influence', 'Education', 'Applied AI', 'Film', 'Open Source', 'For real'],
    os: {
      label: 'Open Source',
      title: 'Some of it we build in <span class="hl">public</span>.',
      sub: "In the other three you see the result. Here, the work itself: the code, the schema, and a decision log where every choice carries its reason, including the ones we got wrong and reversed. It's in <code class=\"os__code\">ai/DECISIONS.md</code>, and anyone can read it.",
      live: 'Live',
      langWord: 'Portuguese',
      line: "A reading log, and <span class=\"os__em\">not a company</span>. It will be paid for by supporters, and that support stays optional and cosmetic: a badge on the profile, nothing more. <span class=\"os__em\">Paying unlocks nothing</span>, so everyone reads the same Gume. Anyone can take the code and run their own; that exit is the point. It's Brazilian and it's in Portuguese, by choice, so that's the app you'll land on. Built with the people who use it: fix a wrong cover, open an issue, send a pull request.",
      statNum: '~300K',
      statText: 'Portuguese-language editions in the catalog',
      story: 'The story',
      more: 'The full story',
    },
    mf: {
      label: 'Manifesto',
      lede: "Everything we build passes one filter: it's <span class=\"hl\">real</span> and it <span class=\"serif\">improves</span> something.",
      punch: 'AI is the tool <span class="slash">/</span> not the hype.',
      p1l: 'Principle',
      p1: "<span class=\"hl\">We don't sell a service</span>. We own our ventures and stay for the long haul.",
      p2l: "Who's behind it",
      p2: '<span class="mf__em">Gabriel Olegário</span>, advertiser and builder. He sets the direction and ships the work, from São Paulo.',
      cta: 'Get in touch',
    },
    bt: {
      label: 'Journal · Press',
      read: 'Read',
      ctaTitle: 'Thinking <span class="slash">/</span> in <span class="serif">public</span>.',
      ctaLine: 'Notes on building AI ventures, written natively here. The decisions come with their reasons.',
      all: 'All writing',
      studio: 'The studio',
      press: 'Press',
      seen: 'As seen in',
    },
    contact: {
      label: 'Contact',
      big: "Let's <span class=\"serif\">build</span><br />something <span class=\"hl\">real</span><span class=\"slash\">.</span>",
      place: 'São Paulo, BR',
    },
  },

  /* ================================================================ PT */
  pt: {
    meta: {
      title: '4/RL Co. · Estúdio independente de ventures de IA',
      desc: 'Melhoramos o mundo com IA. De verdade. Um estúdio independente que cria e opera ventures entre influência, ciência, IA aplicada e cinema.',
      twitter: 'Melhoramos o mundo com IA. De verdade.',
    },
    nav: { capabilities: 'Capacidades', work: 'Ventures', news: 'Na mídia', journal: 'Journal', studio: 'O estúdio', talk: 'Vamos conversar', allWork: 'Ver tudo' },
    hero: {
      kicker: 'Estúdio independente de ventures de IA',
      city: 'São Paulo',
      lines: [
        'Fazemos o mundo',
        '<span class="serif">melhor</span> com <span class="hero__slash">/</span><span class="tech">IA</span>.',
      ],
      facts: ['3 ventures, próprias e operadas', 'Gume: código aberto, AGPL-3.0', 'São Paulo · o mundo'],
      thesis: 'Criamos empresas e as operamos, entre influência, educação, IA aplicada e cinema.',
      portfolio: 'Ver o portfólio',
      rule: 'Ventures que criamos, temos e operamos',
    },
    cap: {
      label: 'Capacidades',
      title: 'Um estúdio, a cadeia de <span class="serif">valor</span> inteira<span class="slash">.</span>',
      sub: 'Do back office à marca.',
      more: 'Mais',
      cards: {
        'operations-growth': { tag: 'Operar', title: 'Operações & Crescimento', line: 'Estratégia, crescimento e comercial, com IA por baixo.' },
        'data-applied-ai': { tag: 'Aplicar', title: 'Dados & IA Aplicada', line: 'Dados e IA virando decisões que movem os números.' },
        'creative-content': { tag: 'Criar', title: 'Criação & Conteúdo', line: 'Criativo nativo de IA, do conceito à produção.' },
      },
    },
    work: {
      label: 'Ventures · Empresas',
      ventures: {
        'smart-social': { sector: 'Influência', line: 'Rede de influência e mídia.', fact: '1.000+ creators em 25+ países' },
        'labepi': { sector: 'EdTech', line: 'Ensino de epidemiologia e método científico.', fact: null },
        'm1m1c-box': { sector: 'Cinema com IA', line: 'Narrativa cinematográfica, feita com IA.', fact: null },
      },
    },
    ticker: ['Influência', 'Educação', 'IA Aplicada', 'Cinema', 'Código Aberto', 'De verdade'],
    os: {
      label: 'Código Aberto',
      title: 'Parte do que fazemos é <span class="hl">público</span>.',
      sub: 'Nas outras três você vê o resultado. Aqui, o trabalho em si: o código, o schema e um registro de decisões onde cada escolha carrega o seu porquê, inclusive as que erramos e revertemos. Está em <code class="os__code">ai/DECISIONS.md</code>, e qualquer pessoa pode ler.',
      live: 'No ar',
      langWord: 'Português',
      line: 'Um diário de leituras, e <span class="os__em">não uma empresa</span>. Vai ser pago por apoiadores, e o apoio é opcional e cosmético: um selo no perfil, nada mais. <span class="os__em">Pagar não desbloqueia nada</span>, todo mundo lê o mesmo Gume. Qualquer pessoa pode pegar o código e rodar o seu; essa saída é o ponto. É brasileiro e em português, por escolha. Feito com quem usa: corrija uma capa, abra uma issue, mande um pull request.',
      statNum: '~300 mil',
      statText: 'edições em língua portuguesa no catálogo',
      story: 'A história',
      more: 'A história completa',
    },
    mf: {
      label: 'Manifesto',
      lede: 'Tudo que construímos passa por um filtro: é <span class="hl">real</span> e <span class="serif">melhora</span> alguma coisa.',
      punch: 'IA é a ferramenta <span class="slash">/</span> não o hype.',
      p1l: 'Princípio',
      p1: '<span class="hl">Não vendemos serviço</span>. Somos donos das nossas ventures e ficamos pro longo prazo.',
      p2l: 'Quem está por trás',
      p2: '<span class="mf__em">Gabriel Olegário</span>, publicitário e builder. Define a direção e entrega o trabalho, de São Paulo.',
      cta: 'Fale com a gente',
    },
    bt: {
      label: 'Journal · Imprensa',
      read: 'Ler',
      ctaTitle: 'Pensando <span class="slash">/</span> em <span class="serif">público</span>.',
      ctaLine: 'Notas sobre construir ventures de IA, escritas nativamente aqui. As decisões vêm com os seus porquês.',
      all: 'Todos os textos',
      studio: 'O estúdio',
      press: 'Imprensa',
      seen: 'Visto em',
    },
    contact: {
      label: 'Contato',
      big: 'Vamos <span class="serif">construir</span><br />algo <span class="hl">real</span><span class="slash">.</span>',
      place: 'São Paulo, BR',
    },
  },

  /* ================================================================ ES */
  es: {
    meta: {
      title: '4/RL Co. · Estudio independiente de ventures de IA',
      desc: 'Mejoramos el mundo con IA. De verdad. Un estudio independiente que crea y opera ventures entre influencia, ciencia, IA aplicada y cine.',
      twitter: 'Mejoramos el mundo con IA. De verdad.',
    },
    nav: { capabilities: 'Capacidades', work: 'Ventures', news: 'Prensa', journal: 'Journal', studio: 'El estudio', talk: 'Hablemos', allWork: 'Ver todo' },
    hero: {
      kicker: 'Estudio independiente de ventures de IA',
      city: 'São Paulo',
      lines: [
        'Hacemos el mundo',
        '<span class="serif">mejor</span> con <span class="hero__slash">/</span><span class="tech">IA</span>.',
      ],
      facts: ['3 ventures, propias y operadas', 'Gume: código abierto, AGPL-3.0', 'São Paulo · el mundo'],
      thesis: 'Creamos empresas y las operamos, entre influencia, educación, IA aplicada y cine.',
      portfolio: 'Ver el portafolio',
      rule: 'Ventures que creamos, poseemos y operamos',
    },
    cap: {
      label: 'Capacidades',
      title: 'Un estudio, toda la cadena de <span class="serif">valor</span><span class="slash">.</span>',
      sub: 'Del back office a la marca.',
      more: 'Más',
      cards: {
        'operations-growth': { tag: 'Operar', title: 'Operaciones & Crecimiento', line: 'Estrategia, crecimiento y comercial, con IA debajo.' },
        'data-applied-ai': { tag: 'Aplicar', title: 'Datos & IA Aplicada', line: 'Datos e IA convertidos en decisiones que mueven los números.' },
        'creative-content': { tag: 'Crear', title: 'Creatividad & Contenido', line: 'Creatividad nativa de IA, del concepto a la producción.' },
      },
    },
    work: {
      label: 'Ventures · Empresas',
      ventures: {
        'smart-social': { sector: 'Influencia', line: 'Red de influencia y medios.', fact: '1.000+ creators en 25+ países' },
        'labepi': { sector: 'EdTech', line: 'Enseñanza de epidemiología y método científico.', fact: null },
        'm1m1c-box': { sector: 'Cine con IA', line: 'Narrativa cinematográfica, hecha con IA.', fact: null },
      },
    },
    ticker: ['Influencia', 'Educación', 'IA Aplicada', 'Cine', 'Código Abierto', 'De verdad'],
    os: {
      label: 'Código Abierto',
      title: 'Parte de lo que hacemos es <span class="hl">público</span>.',
      sub: 'En las otras tres ves el resultado. Aquí, el trabajo en sí: el código, el schema y un registro de decisiones donde cada elección lleva su porqué, incluidas las que erramos y revertimos. Está en <code class="os__code">ai/DECISIONS.md</code> y cualquiera puede leerlo.',
      live: 'En vivo',
      langWord: 'Portugués',
      line: 'Un diario de lecturas, y <span class="os__em">no una empresa</span>. Lo pagarán sus seguidores, y ese apoyo es opcional y cosmético: una insignia en el perfil, nada más. <span class="os__em">Pagar no desbloquea nada</span>: todos leen el mismo Gume. Cualquiera puede tomar el código y montar el suyo; esa salida es el punto. Es brasileño y está en portugués, por elección. Hecho con quienes lo usan: corrige una portada, abre un issue, envía un pull request.',
      statNum: '~300 mil',
      statText: 'ediciones en portugués en el catálogo',
      story: 'La historia',
      more: 'La historia completa',
    },
    mf: {
      label: 'Manifiesto',
      lede: 'Todo lo que construimos pasa un filtro: es <span class="hl">real</span> y <span class="serif">mejora</span> algo.',
      punch: 'La IA es la herramienta <span class="slash">/</span> no el hype.',
      p1l: 'Principio',
      p1: '<span class="hl">No vendemos servicios</span>. Somos dueños de nuestras ventures y nos quedamos a largo plazo.',
      p2l: 'Quién está detrás',
      p2: '<span class="mf__em">Gabriel Olegário</span>, publicista y builder. Marca la dirección y entrega el trabajo, desde São Paulo.',
      cta: 'Escríbenos',
    },
    bt: {
      label: 'Journal · Prensa',
      read: 'Leer',
      ctaTitle: 'Pensando <span class="slash">/</span> en <span class="serif">público</span>.',
      ctaLine: 'Notas sobre construir ventures de IA, escritas aquí de forma nativa. Las decisiones vienen con sus porqués.',
      all: 'Todos los textos',
      studio: 'El estudio',
      press: 'Prensa',
      seen: 'Visto en',
    },
    contact: {
      label: 'Contacto',
      big: 'Vamos a <span class="serif">construir</span><br />algo <span class="hl">real</span><span class="slash">.</span>',
      place: 'São Paulo, BR',
    },
  },

  /* ================================================================ ZH */
  zh: {
    meta: {
      title: '4/RL Co. · 独立 AI 创业工作室',
      desc: '我们用 AI 让世界更好。真的。一家独立创业工作室，在影响力营销、科学、应用 AI 与电影领域创办并运营自己的公司。',
      twitter: '我们用 AI 让世界更好。真的。',
    },
    nav: { capabilities: '能力', work: '作品', news: '媒体', journal: '专栏', studio: '工作室', talk: '联系我们', allWork: '全部作品' },
    hero: {
      kicker: '独立 AI 创业工作室',
      city: '圣保罗',
      lines: [
        '我们用 <span class="hero__slash">/</span><span class="tech">AI</span>',
        '让世界变得更好。',
      ],
      facts: ['3 家自有并自营的公司', 'Gume：AGPL-3.0 开源', '圣保罗 · 面向全球'],
      thesis: '我们创办公司并亲自运营，横跨影响力营销、教育、应用 AI 与电影。',
      portfolio: '查看作品',
      rule: '我们创办、持有并运营的公司',
    },
    cap: {
      label: '能力',
      title: '一个工作室，覆盖完整的价值链<span class="slash">。</span>',
      sub: '从后台到品牌。',
      more: '更多',
      cards: {
        'operations-growth': { tag: '运营', title: '运营与增长', line: '战略、增长与商务，由 AI 驱动。' },
        'data-applied-ai': { tag: '应用', title: '数据与应用 AI', line: '把数据和 AI 变成推动数字的决策。' },
        'creative-content': { tag: '创作', title: '创意与内容', line: 'AI 原生创意，从概念到成片。' },
      },
    },
    work: {
      label: '作品 · 公司',
      ventures: {
        'smart-social': { sector: '影响力营销', line: '影响力与媒体网络。', fact: '1,000+ 创作者，覆盖 25+ 个国家' },
        'labepi': { sector: '教育科技', line: '教授流行病学与科学方法。', fact: null },
        'm1m1c-box': { sector: 'AI 电影', line: '用 AI 完成的电影叙事。', fact: null },
      },
    },
    ticker: ['影响力', '教育', '应用 AI', '电影', '开源', '真的'],
    os: {
      label: '开源',
      title: '有些东西，我们<span class="hl">公开</span>做。',
      sub: '在另外三家公司你看到的是结果。这里是工作本身：代码、schema，以及一份决策日志，每个选择都写明理由，包括我们做错又撤回的。它在 <code class="os__code">ai/DECISIONS.md</code>，任何人都能读。',
      live: '已上线',
      langWord: '葡萄牙语',
      line: '一个读书记录应用，<span class="os__em">不是一家公司</span>。它将由支持者供养，而支持是可选的、纯装饰性的：个人页上的一枚徽章，仅此而已。<span class="os__em">付费不解锁任何功能</span>，所有人读到同一个 Gume。任何人都可以拿走代码自己部署；这个出口正是意义所在。它是巴西的、葡萄牙语的，这是选择。与用户共建：改一张封面，提一个 issue，发一个 pull request。',
      statNum: '约 30 万',
      statText: '册葡萄牙语图书版本收录在目录中',
      story: '背后的故事',
      more: '完整故事',
    },
    mf: {
      label: '宣言',
      lede: '我们构建的一切都要过一道筛：它是<span class="hl">真的</span>，并且让某些东西变好。',
      punch: 'AI 是工具 <span class="slash">/</span> 不是噱头。',
      p1l: '原则',
      p1: '<span class="hl">我们不卖服务</span>。我们持有自己的公司，并长期经营。',
      p2l: '背后是谁',
      p2: '<span class="mf__em">Gabriel Olegário</span>，广告人与创建者。在圣保罗定方向、交作品。',
      cta: '联系我们',
    },
    bt: {
      label: '专栏 · 媒体',
      read: '阅读',
      ctaTitle: '公开地<span class="slash">/</span>思考。',
      ctaLine: '关于打造 AI 公司的笔记，原生写在这里。每个决定都附带理由。',
      all: '全部文章',
      studio: '工作室',
      press: '媒体',
      seen: '媒体报道',
    },
    contact: {
      label: '联系',
      big: '一起做点<br /><span class="hl">真的</span><span class="slash">。</span>',
      place: '巴西 · 圣保罗',
    },
  },

  /* ================================================================ RU */
  ru: {
    meta: {
      title: '4/RL Co. · Независимая AI venture-студия',
      desc: 'Мы делаем мир лучше с AI. По-настоящему. Независимая студия, которая создаёт и ведёт компании в инфлюенсе, науке, прикладном AI и кино.',
      twitter: 'Мы делаем мир лучше с AI. По-настоящему.',
    },
    nav: { capabilities: 'Компетенции', work: 'Проекты', news: 'Пресса', journal: 'Журнал', studio: 'Студия', talk: 'Связаться', allWork: 'Все проекты' },
    hero: {
      kicker: 'Независимая AI venture-студия',
      city: 'Сан-Паулу',
      lines: [
        'Мы делаем мир',
        '<span class="serif">лучше</span> с <span class="hero__slash">/</span><span class="tech">AI</span>.',
      ],
      facts: ['3 компании, наши и под нашим управлением', 'Gume: открытый код, AGPL-3.0', 'Сан-Паулу · весь мир'],
      thesis: 'Мы создаём компании и сами ими управляем: инфлюенс, образование, прикладной AI и кино.',
      portfolio: 'Смотреть портфолио',
      rule: 'Компании, которые мы создаём и ведём',
    },
    cap: {
      label: 'Компетенции',
      title: 'Одна студия, вся цепочка <span class="serif">ценности</span><span class="slash">.</span>',
      sub: 'От бэк-офиса до бренда.',
      more: 'Подробнее',
      cards: {
        'operations-growth': { tag: 'Управлять', title: 'Операции и рост', line: 'Стратегия, рост и коммерция, с AI в основе.' },
        'data-applied-ai': { tag: 'Применять', title: 'Данные и прикладной AI', line: 'Данные и AI превращаются в решения, которые двигают цифры.' },
        'creative-content': { tag: 'Создавать', title: 'Креатив и контент', line: 'AI-нативный креатив, от концепции до продакшена.' },
      },
    },
    work: {
      label: 'Проекты · Компании',
      ventures: {
        'smart-social': { sector: 'Инфлюенс', line: 'Сеть инфлюенса и медиа.', fact: '1 000+ авторов в 25+ странах' },
        'labepi': { sector: 'EdTech', line: 'Обучение эпидемиологии и научному методу.', fact: null },
        'm1m1c-box': { sector: 'AI-кино', line: 'Кинематографичные истории, созданные с AI.', fact: null },
      },
    },
    ticker: ['Инфлюенс', 'Образование', 'Прикладной AI', 'Кино', 'Открытый код', 'По-настоящему'],
    os: {
      label: 'Открытый код',
      title: 'Часть работы мы делаем <span class="hl">публично</span>.',
      sub: 'В трёх компаниях виден результат. Здесь сама работа: код, схема и журнал решений, где у каждого выбора записана причина, включая те, что мы отменили. Всё в <code class="os__code">ai/DECISIONS.md</code>, читать может любой.',
      live: 'Работает',
      langWord: 'Португальский',
      line: 'Читательский дневник, <span class="os__em">не компания</span>. Его будут оплачивать сторонники, и эта поддержка опциональна и косметична: значок в профиле, не больше. <span class="os__em">Оплата ничего не открывает</span>: все читают один и тот же Gume. Любой может взять код и развернуть свой; этот выход и есть смысл. Он бразильский и на португальском, осознанно. Строится вместе с читателями: исправьте обложку, откройте issue, пришлите pull request.',
      statNum: '~300 тыс.',
      statText: 'изданий на португальском в каталоге',
      story: 'История',
      more: 'Вся история',
    },
    mf: {
      label: 'Манифест',
      lede: 'Всё, что мы строим, проходит один фильтр: это <span class="hl">по-настоящему</span> и это что-то <span class="serif">улучшает</span>.',
      punch: 'AI это инструмент <span class="slash">/</span> не хайп.',
      p1l: 'Принцип',
      p1: '<span class="hl">Мы не продаём услуги</span>. Мы владеем своими компаниями и остаёмся надолго.',
      p2l: 'Кто за этим стоит',
      p2: '<span class="mf__em">Габриэл Олегарио</span>, рекламщик и билдер. Задаёт направление и делает работу, из Сан-Паулу.',
      cta: 'Написать нам',
    },
    bt: {
      label: 'Журнал · Пресса',
      read: 'Читать',
      ctaTitle: 'Думаем <span class="slash">/</span> <span class="serif">публично</span>.',
      ctaLine: 'Заметки о создании AI-компаний, написанные прямо здесь. Решения приходят со своими причинами.',
      all: 'Все тексты',
      studio: 'Студия',
      press: 'Пресса',
      seen: 'О нас писали',
    },
    contact: {
      label: 'Контакт',
      big: 'Давайте <span class="serif">построим</span><br />что-то <span class="hl">настоящее</span><span class="slash">.</span>',
      place: 'Сан-Паулу, Бразилия',
    },
  },
};
