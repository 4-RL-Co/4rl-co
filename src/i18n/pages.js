// Deep-page translations: cases, capabilities, studio, open-source, journal
// metadata, and the shared page chrome. Merged over English at read time, so
// a missing key is never a crash, it is English.
//
// The two Journal essays keep their BODIES in English in every locale for
// now (title, dek and excerpt are translated; the header says so in the
// reader's language). They are ~3.5k words of authored long-form each pass;
// they get translated as reviewed batches, not as a side effect. Recorded in
// ai/DECISIONS.md.
import { dict } from './index.js';

export const pages = {
  /* ============================================================== EN */
  en: {
    chrome: {
      workCrumb: 'Work',
      capsCrumb: 'Capabilities',
      onRecord: 'On the record',
      builtWith: 'Built with',
      whatRuns: 'What the studio runs here',
      model: 'Model',
      modelValue: 'Built and operated by 4/RL Co.',
      sector: 'Sector',
      base: 'Base',
      baseValue: 'São Paulo, BR',
      visit: 'Visit',
      nextVenture: 'Next venture',
      wantThis: 'Want something like this to exist?',
      talk: "Let's talk",
      lead: 'Lead',
      leadValue: 'Gabriel Olegário · ForbesBLK member',
      runsInside: 'Runs inside',
      nextCap: 'Next capability',
      needChain: 'Need this chain inside your problem?',
      read: 'Read',
      journalTitle: 'Journal · 4/RL Co.',
      journalDesc: 'Writing from 4/RL Co.: notes and ideas on building AI ventures.',
      journalH: 'Thinking <span class="slash">/</span> in <span class="serif">public</span>.',
      origNote: 'Original text, written in English.',
      backHome: 'Back home',
    },
    // Long-form page content mirrors the EN sources in data/*; EN entry stays
    // empty and the loaders fall through to the data files themselves.
    caseStudies: {},
    caps: {},
    faqs: null,
    studio: null,
    osp: null,
    journalPosts: {},
  },

  /* ============================================================== PT */
  pt: {
    chrome: {
      workCrumb: 'Ventures', capsCrumb: 'Capacidades', onRecord: 'Nos registros', builtWith: 'Construída com',
      whatRuns: 'O que o estúdio opera aqui', model: 'Modelo', modelValue: 'Criada e operada pela 4/RL Co.',
      sector: 'Setor', base: 'Base', baseValue: 'São Paulo, BR', visit: 'Visitar', nextVenture: 'Próxima venture',
      wantThis: 'Quer que algo assim exista?', talk: 'Vamos conversar', lead: 'Liderança',
      leadValue: 'Gabriel Olegário · membro da ForbesBLK', runsInside: 'Roda dentro de', nextCap: 'Próxima capacidade',
      needChain: 'Precisa dessa cadeia dentro do seu problema?', read: 'Ler',
      journalTitle: 'Journal · 4/RL Co.', journalDesc: 'Textos da 4/RL Co.: notas e ideias sobre construir ventures de IA.',
      journalH: 'Pensando <span class="slash">/</span> em <span class="serif">público</span>.',
      origNote: 'Texto original, escrito em inglês.', backHome: 'Voltar ao início',
    },
    caseStudies: {
      'smart-social': {
        lede: 'Um hub completo de mídia conectando 1.000+ creators, atletas e ativos de mídia a marcas em 25+ países, próprio e operado pela 4/RL.',
        story: [
          'A Smart Social é um hub completo de mídia: estratégia de influência, operação de campanhas, embaixadores de marca, ativação de patrocínios e mídia paga, tudo ponta a ponta para marcas de iGaming, esporte, entretenimento e finanças. A rede reúne mais de 1.000 influenciadores, atletas e ativos de mídia em mais de 25 países, e o fundador da 4/RL atua dentro dela como sócio e Head de Estratégia e Inovação.',
          'Os números são operacionais, não aspiracionais: mais de 35 clientes de iGaming nos últimos três anos, 62 mil+ primeiros depósitos gerados em 2024, campanhas com 1xBet, EstrelaBet, C6 Bank e TaDa Gaming, e indicação a Best Marketing Agency no SiGMA Americas 2025. A IA fica por baixo da operação, no ferramental de briefing, matching e reporting construído na stack do estúdio.',
          'A Smart Social também é dona do Portal Arenna, um portal de notícias esportivas de apuração séria e leitura afiada, cobrindo futebol, UFC, Fórmula 1, NBA e NFL. O Arenna foi construído fim a fim na stack da 4/RL, que é a tese do estúdio em uma frase: a empresa de mídia é dona da sua mídia, e a tecnologia por baixo é nossa.',
        ],
        proof: [
          '1.000+ influenciadores, atletas e ativos de mídia na rede', 'Operação em 25+ países',
          'Fundador da 4/RL: sócio e Head de Estratégia e Inovação', '35+ clientes de iGaming nos últimos três anos',
          '62.000+ primeiros depósitos gerados em 2024', 'Indicada a Best Marketing Agency, SiGMA Americas 2025',
          'Dona do Portal Arenna, construído na stack da 4/RL',
        ],
        does: [
          { k: 'Operar', line: 'Comercial, operação de campanhas e gestão de creators, tudo interno.' },
          { k: 'Aplicar', line: 'Matching e reporting com ferramental construído para a rede.' },
          { k: 'Criar', line: 'Conteúdo moldado com creators, nativo de IA onde faz sentido.' },
        ],
      },
      'labepi': {
        lede: 'Epidemiologia e método científico, ensinados em português, numa joint venture com cientistas em atividade.',
        story: [
          'O LabEpi ensina epidemiologia e método científico: cursos, materiais e uma comunidade para estudantes e profissionais que precisam de evidência que se sustente fora da sala de aula. O ensino é em português por escolha, porque é a língua em que esse público estuda e trabalha.',
          'É uma joint venture. Ao lado da 4/RL, o LabEpi é construído com André Soares e com Lucas H. C. C. Santos, colaborador sênior do estudo Global Burden of Disease, com mais de 1.500 citações e trabalho publicado na The Lancet. O método científico é ensinado aqui por quem o usa profissionalmente, e esse é o argumento inteiro.',
        ],
        partners: [
          { name: 'André Soares', role: 'Cofundador', href: 'https://www.linkedin.com/in/bobdesigner/' },
          { name: 'Lucas H. C. C. Santos', role: 'Cofundador · colaborador sênior do GBD · 1.500+ citações, publicado na The Lancet', href: 'https://scholar.google.com/citations?user=WLxIEwcAAAAJ&hl=pt-BR' },
        ],
        does: [
          { k: 'Operar', line: 'Operação de cursos, comunidade e crescimento.' },
          { k: 'Aplicar', line: 'Ferramentas de estudo desenhadas para como epidemiologia se aprende de verdade.' },
          { k: 'Criar', line: 'Materiais didáticos produzidos ponta a ponta.' },
        ],
      },
      'm1m1c-box': {
        lede: 'Histórias cinematográficas curtas feitas com IA, numa parceria criativa com padrão de cinema.',
        story: [
          'A M1m1c Box publica histórias cinematográficas curtas no YouTube. Cada peça é dirigida: escrita, com direção de arte e montada por pessoas, com a IA carregando o peso de produção em que ela é genuinamente boa. O nome declara o método, mímica com intenção, e o canal é onde esse método é testado em público.',
          'É uma venture criativa tocada com Luiza Santana. Em ventures anteriores, os dois entregaram campanhas para Grupo Carrefour, AfroBusiness Brasil e Conta Black, entre outros, e o ofício que carregou aquelas campanhas é o mesmo que dirige a IA aqui.',
          'É também o campo de prova do estúdio para produção com IA: o que se aprende fazendo filmes, em pipelines, em prompting, em gosto, volta para o trabalho criativo das outras ventures. Cinema é o brief mais difícil do estúdio, e é exatamente por isso que o estúdio mantém um.',
        ],
        partners: [{ name: 'Luiza Santana', role: 'Codireção criativa', href: 'https://www.linkedin.com/in/luizalns/' }],
        proof: [
          'Campanhas para Grupo Carrefour, AfroBusiness Brasil e Conta Black em ventures anteriores',
          'Viral da EstrelaBet na Copa de 2022, coberto pela Games Magazine Brasil',
        ],
      },
    },
    caps: {
      'operations-growth': {
        title: 'Operações & Crescimento', tag: 'Operar',
        lede: 'A metade sem glamour de construir empresas, feita como ofício: estratégia, crescimento e comercial, operados por dentro das ventures e não aconselhados de fora.',
        story: [
          'Toda venture da 4/RL é operada, nunca aconselhada, e o hábito vem da rota do fundador: Gabriel Olegário veio da publicidade e de funções comerciais antes de fundar a Smart Social, e o playbook de crescimento que roda lá hoje, sourcing de creators, operação de campanhas, patrocínios e acordos com plataformas, foi construído dentro de casa e segue rodando dentro de casa, com Gabriel atuando na Smart Social como sócio e Head de Estratégia e Inovação.',
          'A prova é a própria operação da Smart Social: uma rede de mais de 1.000 influenciadores, atletas e ativos de mídia em mais de 25 países, mais de 35 clientes de iGaming atendidos nos últimos três anos, e 62 mil+ primeiros depósitos gerados em 2024. A operação foi indicada a Best Marketing Agency no SiGMA Americas 2025.',
          'A IA fica por baixo de tudo. Briefing, matching e reporting rodam em ferramental construído na stack do estúdio, que é o que permite a um time enxuto operar uma rede nessa escala e cobrar cada campanha pelos seus números.',
        ],
        proof: [
          '1.000+ creators, atletas e ativos de mídia na rede Smart Social', 'Operação em 25+ países',
          'Sócio e Head de Estratégia e Inovação na Smart Social', '35+ clientes de iGaming nos últimos três anos',
          '62.000+ primeiros depósitos gerados em 2024', 'Indicada a Best Marketing Agency, SiGMA Americas 2025',
        ],
      },
      'data-applied-ai': {
        title: 'Dados & IA Aplicada', tag: 'Aplicar',
        lede: 'Dados e IA virando software que funciona: modelos e ferramental por baixo de cada operação, construídos em casa na stack da 4/RL.',
        story: [
          'A stack não é um slide, ela entrega. Este site roda nela, com nota perfeita no Lighthouse e otimização para answer engines por construção. O Gume roda nela: um diário de leituras open source sobre um catálogo de cerca de 300 mil edições em língua portuguesa, AGPL-3.0, construído pelo fundador em par com agentes de IA. O Portal Arenna roda nela: um portal de notícias esportivas da Smart Social, construído fim a fim na stack do estúdio.',
          'Dentro das ventures, a mesma stack faz o trabalho silencioso: o ferramental de briefing, matching e reporting sob a operação da Smart Social, e a medição que mantém cada campanha prestando contas. A regra é a tese do estúdio aplicada a software: construir, ter, operar.',
        ],
        proof: [
          'Este site: Lighthouse 100 em tudo, AEO por construção', 'Gume: diário de leituras aberto, ~300 mil edições, AGPL-3.0',
          'Portal Arenna: portal esportivo construído fim a fim na stack da 4/RL', 'Ferramental de campanha sob a operação da Smart Social',
        ],
      },
      'creative-content': {
        title: 'Criação & Conteúdo', tag: 'Criar',
        lede: 'Criativo nativo de IA do conceito à produção, dirigido por pessoas e cobrado pelo padrão do ofício.',
        story: [
          'A prática criativa é uma parceria. A M1m1c Box, a venture de cinema do estúdio, é tocada com Luiza Santana, e em ventures anteriores os dois entregaram campanhas para Grupo Carrefour, AfroBusiness Brasil e Conta Black, entre outros. O ofício que carregou aquelas campanhas é o mesmo que dirige a IA aqui.',
          'A M1m1c Box é onde a prática roda mais quente: histórias cinematográficas curtas publicadas no YouTube, escritas, com direção de arte e montadas por pessoas, com a IA carregando o peso de produção em que ela é genuinamente boa. O que se aprende lá volta para toda marca que o estúdio toca, e o histórico mostra que viaja: a campanha da EstrelaBet que viralizou na Copa de 2022 saiu dessa prática.',
        ],
        proof: [
          'M1m1c Box: histórias cinematográficas com IA, no YouTube',
          'Campanhas para Grupo Carrefour, AfroBusiness Brasil e Conta Black em ventures anteriores',
          'Viral da EstrelaBet na Copa de 2022, coberto pela Games Magazine Brasil',
        ],
      },
    },
    faqs: [
      { q: 'O que é a 4/RL Co.?', a: 'A 4/RL Co. é um estúdio independente de ventures de IA baseado em São Paulo. Criamos e operamos as nossas próprias empresas, que colocam inteligência artificial para trabalhar em problemas reais, entre influência, educação, IA aplicada e cinema.' },
      { q: 'O que significa "4/RL"?', a: '"4/RL" se lê "for real", de verdade. A barra é a linha que todo projeto precisa cruzar, da promessa à prova. A nossa tese cabe numa frase: melhorar o mundo com IA, de verdade.' },
      { q: 'Quais empresas a 4/RL opera?', a: 'Três ventures: Smart Social (hub de influência e mídia), LabEpi (ensino de epidemiologia e método científico) e M1m1c Box (narrativa cinematográfica feita com IA).' },
      { q: 'O que a 4/RL faz dentro das suas ventures?', a: 'Três coisas, pela cadeia de valor inteira: operações e crescimento (estratégia, crescimento e comercial, com IA), dados e IA aplicada (dados e IA virando decisões que movem números) e criação e conteúdo (criativo nativo de IA, do conceito à produção). Um estúdio cobre as três, e é por isso que conseguimos criar uma empresa em vez de aconselhar uma.' },
      { q: 'A 4/RL é uma agência ou consultoria?', a: 'Nenhuma das duas. Não vendemos serviço. Somos donos das nossas ventures e as operamos para o longo prazo: criamos empresas e as tocamos.' },
      { q: 'Quem fundou a 4/RL?', a: 'A 4/RL foi fundada por Gabriel Olegário, publicitário e builder em São Paulo, que define a direção e entrega o trabalho. Ele é membro da ForbesBLK, a comunidade da Forbes de empreendedores e líderes negros.' },
      { q: 'Onde a 4/RL fica e em que línguas trabalha?', a: 'A 4/RL fica em São Paulo e trabalha com parceiros e públicos no mundo todo, em português e inglês.' },
      { q: 'Como falo com a 4/RL?', a: 'Escreva para olegas@4real.ventures, ou chame no WhatsApp, LinkedIn, GitHub ou Telegram, todos no rodapé.' },
    ],
    studio: {
      title: 'O Estúdio · 4/RL Co.',
      desc: 'O que é a 4/RL Co. e como funciona: um estúdio independente de ventures de IA em São Paulo que cria empresas e as opera, entre influência, educação, IA aplicada e cinema.',
      h1: ['Criamos empresas', 'e nós as <span class="serif">operamos</span><span class="slash">.</span>'],
      kicker: 'O estúdio',
      lede: 'A 4/RL é um estúdio independente de ventures de IA. Toda venture aqui é nossa: somos donos da operação, cobramos pelos números e ficamos para o longo prazo. IA é a ferramenta. A melhoria é o ponto.',
      howLabel: 'Como funciona',
      howTitle: 'Um estúdio, a cadeia de <span class="serif">valor</span> inteira<span class="slash">.</span>',
      chainLine: 'A cadeia roda dentro de três ventures hoje: ',
      whoLabel: 'Quem está por trás',
      whoTitle: 'Direção e entrega, <span class="hl">a mesma pessoa</span><span class="slash">.</span>',
      whoBody: '<span class="st__em">Gabriel Olegário</span>, publicitário e builder, membro da <span class="st__em">ForbesBLK</span>. Define a direção e entrega o trabalho, de São Paulo. O estúdio é pequeno de propósito: as decisões atravessam uma mesa só, e o que é prometido é o que é construído.',
      whoCta: 'Fale com a gente',
      faqLabel: 'Perguntas',
      faqTitle: 'Perguntado e <span class="serif">respondido</span><span class="slash">.</span>',
      closeBig: 'Vamos <span class="serif">construir</span> algo <span class="hl">real</span><span class="slash">.</span>',
    },
    osp: {
      title: 'Código Aberto · 4/RL Co.',
      desc: 'O trabalho que a 4/RL faz em público: Gume, um diário de leituras aberto em português sob AGPL-3.0, e um registro de decisões onde cada escolha carrega o seu porquê.',
      kicker: 'Código Aberto',
      h1: ['O código sai', 'com os seus <span class="serif">porquês</span><span class="slash">.</span>'],
      lede: 'A maior parte do trabalho do estúdio é empresa, e você vê o resultado. O trabalho desta página é diferente: o código, o schema e o registro de decisões são públicos, e qualquer pessoa pode ler, fazer fork ou rodar o seu.',
      gumeTitle: 'Um diário de leituras que qualquer um pode <span class="hl">forkar</span><span class="slash">.</span>',
      gumeP1: 'O Gume é um diário de leituras, brasileiro e em português por escolha. Vai ser pago por apoiadores, e esse apoio é opcional e cosmético: um selo no perfil, nada mais. Pagar não desbloqueia nada, todo mundo lê o mesmo Gume. O código é AGPL-3.0, e qualquer pessoa pode pegá-lo e rodar o seu; essa saída é o ponto.',
      gumeP2: 'Ele é construído com quem usa. Corrija uma capa errada, abra uma issue, mande um pull request: o catálogo tem cerca de 300 mil edições em língua portuguesa, e melhora em público.',
      statNum: '~300 mil', statText: 'edições em língua portuguesa no catálogo',
      live: 'No ar', story: 'A história',
      practiceLabel: 'A prática',
      practiceTitle: 'Toda escolha carrega o seu <span class="serif">porquê</span><span class="slash">.</span>',
      practiceP1: 'Código aberto aqui é mais que licença. Cada projeto público mantém um registro de decisões, <code class="osp__code">ai/DECISIONS.md</code>, onde cada escolha é escrita com a sua razão, inclusive as que erramos e revertemos. O site que você está lendo também mantém um.',
      practiceP2: 'O registro é o que torna um fork trabalho honesto em vez de arqueologia: você pode discordar de uma decisão sabendo exatamente do que discorda. E nos mantém honestos, porque uma razão que precisa ser escrita é uma razão que precisa existir.',
      gh: '4/RL no GitHub',
      closeLine: 'Tem algo aqui sobre o qual você quer construir?',
    },
    journalPosts: {
      'a-reading-log-you-can-fork': {
        title: 'Um diário de leituras que você pode forkar',
        dek: 'O Gume está aberto, no ar, e é construído por quem aparece. Notas de um publicitário que entregou um banco de dados.',
        excerpt: 'A 4/RL abriu o código do Gume, um diário de leituras para leitores. O que a IA barateou foi o código. O que ela nunca barateou foi estar certo.',
      },
      'the-tool-answered-back': {
        title: 'A ferramenta respondeu',
        dek: 'O manifesto da 4/RL',
        excerpt: 'Por setenta mil anos as nossas ferramentas esperaram por nós. Agora a ferramenta responde. O manifesto da 4/RL, sobre o que muda quando poderes que eram dos deuses viram engenharia, e o que pretendemos fazer com eles.',
      },
    },
  },

  /* ============================================================== ES */
  es: {
    chrome: {
      workCrumb: 'Ventures', capsCrumb: 'Capacidades', onRecord: 'En el registro', builtWith: 'Construida con',
      whatRuns: 'Lo que el estudio opera aquí', model: 'Modelo', modelValue: 'Creada y operada por 4/RL Co.',
      sector: 'Sector', base: 'Base', baseValue: 'São Paulo, BR', visit: 'Visitar', nextVenture: 'Siguiente venture',
      wantThis: '¿Quieres que algo así exista?', talk: 'Hablemos', lead: 'Liderazgo',
      leadValue: 'Gabriel Olegário · miembro de ForbesBLK', runsInside: 'Corre dentro de', nextCap: 'Siguiente capacidad',
      needChain: '¿Necesitas esta cadena dentro de tu problema?', read: 'Leer',
      journalTitle: 'Journal · 4/RL Co.', journalDesc: 'Textos de 4/RL Co.: notas e ideas sobre construir ventures de IA.',
      journalH: 'Pensando <span class="slash">/</span> en <span class="serif">público</span>.',
      origNote: 'Texto original, escrito en inglés.', backHome: 'Volver al inicio',
    },
    caseStudies: {
      'smart-social': {
        lede: 'Un hub integral de medios que conecta 1.000+ creators, atletas y activos de medios con marcas en 25+ países, propiedad de 4/RL y operado por 4/RL.',
        story: [
          'Smart Social es un hub integral de medios: estrategia de influencia, operación de campañas, embajadores de marca, activación de patrocinios y medios pagados, de punta a punta para marcas de iGaming, deporte, entretenimiento y finanzas. La red reúne más de 1.000 influencers, atletas y activos de medios en más de 25 países, y el fundador de 4/RL trabaja dentro de ella como socio y Head de Estrategia e Innovación.',
          'Los números son operativos, no aspiracionales: más de 35 clientes de iGaming en los últimos tres años, 62 mil+ primeros depósitos generados en 2024, campañas con 1xBet, EstrelaBet, C6 Bank y TaDa Gaming, y una nominación a Best Marketing Agency en SiGMA Americas 2025. La IA está debajo de la operación, en el tooling de briefing, matching y reporting construido sobre la stack del estudio.',
          'Smart Social también es dueña de Portal Arenna, un portal de noticias deportivas de reportería seria y lectura afilada, que cubre fútbol, UFC, Fórmula 1, NBA y NFL. Arenna fue construido de punta a punta sobre la stack de 4/RL, que es la tesis del estudio en una frase: la empresa de medios es dueña de sus medios, y la tecnología debajo es nuestra.',
        ],
        proof: [
          '1.000+ influencers, atletas y activos de medios en la red', 'Operación en 25+ países',
          'Fundador de 4/RL: socio y Head de Estrategia e Innovación', '35+ clientes de iGaming en los últimos tres años',
          '62.000+ primeros depósitos generados en 2024', 'Nominada a Best Marketing Agency, SiGMA Americas 2025',
          'Dueña de Portal Arenna, construido sobre la stack de 4/RL',
        ],
        does: [
          { k: 'Operar', line: 'Comercial, operación de campañas y gestión de creators, todo interno.' },
          { k: 'Aplicar', line: 'Matching y reporting con tooling construido para la red.' },
          { k: 'Crear', line: 'Contenido moldeado con creators, nativo de IA donde lo merece.' },
        ],
      },
      'labepi': {
        lede: 'Epidemiología y método científico, enseñados en portugués, en una joint venture con científicos en activo.',
        story: [
          'LabEpi enseña epidemiología y método científico: cursos, materiales y una comunidad para estudiantes y profesionales que necesitan evidencia que se sostenga fuera del aula. La enseñanza es en portugués por elección, porque es la lengua en la que ese público estudia y trabaja.',
          'Es una joint venture. Junto a 4/RL, LabEpi se construye con André Soares y con Lucas H. C. C. Santos, colaborador sénior del estudio Global Burden of Disease, con más de 1.500 citas y trabajo publicado en The Lancet. El método científico se enseña aquí por gente que lo usa profesionalmente, y ese es el argumento entero.',
        ],
        partners: [
          { name: 'André Soares', role: 'Cofundador', href: 'https://www.linkedin.com/in/bobdesigner/' },
          { name: 'Lucas H. C. C. Santos', role: 'Cofundador · colaborador sénior del GBD · 1.500+ citas, publicado en The Lancet', href: 'https://scholar.google.com/citations?user=WLxIEwcAAAAJ&hl=pt-BR' },
        ],
        does: [
          { k: 'Operar', line: 'Operación de cursos, comunidad y crecimiento.' },
          { k: 'Aplicar', line: 'Herramientas de estudio diseñadas para cómo se aprende epidemiología de verdad.' },
          { k: 'Crear', line: 'Materiales didácticos producidos de punta a punta.' },
        ],
      },
      'm1m1c-box': {
        lede: 'Historias cinematográficas cortas hechas con IA, en una asociación creativa con estándar de cine.',
        story: [
          'M1m1c Box publica historias cinematográficas cortas en YouTube. Cada pieza está dirigida: escrita, con dirección de arte y montada por personas, con la IA cargando el peso de producción en el que es genuinamente buena. El nombre declara el método, mímica con intención, y el canal es donde ese método se prueba en público.',
          'Es una venture creativa llevada con Luiza Santana. En ventures anteriores, los dos entregaron campañas para Grupo Carrefour, AfroBusiness Brasil y Conta Black, entre otros, y el oficio que sostuvo aquellas campañas es el mismo que dirige la IA aquí.',
          'Es también el campo de pruebas del estudio para producción con IA: lo aprendido haciendo cine, en pipelines, en prompting, en gusto, vuelve al trabajo creativo de las otras ventures. El cine es el brief más difícil del estudio, y exactamente por eso el estudio mantiene uno.',
        ],
        partners: [{ name: 'Luiza Santana', role: 'Codirección creativa', href: 'https://www.linkedin.com/in/luizalns/' }],
        proof: [
          'Campañas para Grupo Carrefour, AfroBusiness Brasil y Conta Black en ventures anteriores',
          'Viral de EstrelaBet en el Mundial 2022, cubierto por Games Magazine Brasil',
        ],
      },
    },
    caps: {
      'operations-growth': {
        title: 'Operaciones & Crecimiento', tag: 'Operar',
        lede: 'La mitad sin glamour de construir empresas, hecha como oficio: estrategia, crecimiento y comercial, operados dentro de las ventures y no aconsejados desde fuera.',
        story: [
          'Cada venture de 4/RL se opera, nunca se asesora, y el hábito viene de la ruta del fundador: Gabriel Olegário llegó desde la publicidad y roles comerciales antes de fundar Smart Social, y el playbook de crecimiento que corre allí hoy, sourcing de creators, operación de campañas, patrocinios y acuerdos con plataformas, se construyó en casa y sigue corriendo en casa, con Gabriel como socio y Head de Estrategia e Innovación en Smart Social.',
          'La prueba es la propia operación de Smart Social: una red de más de 1.000 influencers, atletas y activos de medios en más de 25 países, más de 35 clientes de iGaming atendidos en los últimos tres años, y 62 mil+ primeros depósitos generados en 2024. La operación fue nominada a Best Marketing Agency en SiGMA Americas 2025.',
          'La IA está debajo de todo. Briefing, matching y reporting corren sobre tooling construido en la stack del estudio, que es lo que permite a un equipo pequeño operar una red a esa escala y cobrar cada campaña por sus números.',
        ],
        proof: [
          '1.000+ creators, atletas y activos de medios en la red Smart Social', 'Operación en 25+ países',
          'Socio y Head de Estrategia e Innovación en Smart Social', '35+ clientes de iGaming en los últimos tres años',
          '62.000+ primeros depósitos generados en 2024', 'Nominada a Best Marketing Agency, SiGMA Americas 2025',
        ],
      },
      'data-applied-ai': {
        title: 'Datos & IA Aplicada', tag: 'Aplicar',
        lede: 'Datos e IA convertidos en software que funciona: modelos y tooling debajo de cada operación, construidos en casa sobre la stack de 4/RL.',
        story: [
          'La stack no es una diapositiva, entrega. Este sitio corre sobre ella, con nota perfecta en Lighthouse y optimización para answer engines por construcción. Gume corre sobre ella: un diario de lecturas open source sobre un catálogo de unas 300 mil ediciones en portugués, AGPL-3.0, construido por el fundador en pareja con agentes de IA. Portal Arenna corre sobre ella: un portal deportivo de Smart Social, construido de punta a punta sobre la stack del estudio.',
          'Dentro de las ventures, la misma stack hace el trabajo silencioso: el tooling de briefing, matching y reporting bajo la operación de Smart Social, y la medición que mantiene a cada campaña rindiendo cuentas. La regla es la tesis del estudio aplicada al software: construirlo, poseerlo, operarlo.',
        ],
        proof: [
          'Este sitio: Lighthouse 100 en todo, AEO por construcción', 'Gume: diario de lecturas abierto, ~300 mil ediciones, AGPL-3.0',
          'Portal Arenna: portal deportivo construido de punta a punta sobre la stack de 4/RL', 'Tooling de campañas bajo la operación de Smart Social',
        ],
      },
      'creative-content': {
        title: 'Creatividad & Contenido', tag: 'Crear',
        lede: 'Creatividad nativa de IA del concepto a la producción, dirigida por personas y medida con el estándar del oficio.',
        story: [
          'La práctica creativa es una asociación. M1m1c Box, la venture de cine del estudio, se lleva con Luiza Santana, y en ventures anteriores los dos entregaron campañas para Grupo Carrefour, AfroBusiness Brasil y Conta Black, entre otros. El oficio que sostuvo aquellas campañas es el mismo que dirige la IA aquí.',
          'M1m1c Box es donde la práctica corre más caliente: historias cinematográficas cortas publicadas en YouTube, escritas, con dirección de arte y montadas por personas, con la IA cargando el peso de producción en el que es genuinamente buena. Lo aprendido allí vuelve a cada marca que el estudio toca, y el historial muestra que viaja: la campaña de EstrelaBet que se hizo viral en el Mundial 2022 salió de esta práctica.',
        ],
        proof: [
          'M1m1c Box: historias cinematográficas con IA, en YouTube',
          'Campañas para Grupo Carrefour, AfroBusiness Brasil y Conta Black en ventures anteriores',
          'Viral de EstrelaBet en el Mundial 2022, cubierto por Games Magazine Brasil',
        ],
      },
    },
    faqs: [
      { q: '¿Qué es 4/RL Co.?', a: '4/RL Co. es un estudio independiente de ventures de IA con base en São Paulo. Creamos y operamos nuestras propias empresas, que ponen la inteligencia artificial a trabajar en problemas reales, entre influencia, educación, IA aplicada y cine.' },
      { q: '¿Qué significa "4/RL"?', a: '"4/RL" se lee "for real", de verdad. La barra es la línea que todo proyecto debe cruzar, de la promesa a la prueba. Nuestra tesis cabe en una frase: mejorar el mundo con IA, de verdad.' },
      { q: '¿Qué empresas opera 4/RL?', a: 'Tres ventures: Smart Social (hub de influencia y medios), LabEpi (enseñanza de epidemiología y método científico) y M1m1c Box (narrativa cinematográfica hecha con IA).' },
      { q: '¿Qué hace 4/RL dentro de sus ventures?', a: 'Tres cosas, por toda la cadena de valor: operaciones y crecimiento (estrategia, crecimiento y comercial, con IA), datos e IA aplicada (datos e IA convertidos en decisiones que mueven números) y creatividad y contenido (creatividad nativa de IA, del concepto a la producción). Un estudio cubre las tres, y por eso podemos crear una empresa en lugar de asesorarla.' },
      { q: '¿4/RL es una agencia o consultora?', a: 'Ninguna de las dos. No vendemos servicios. Somos dueños de nuestras ventures y las operamos a largo plazo: creamos empresas y las llevamos.' },
      { q: '¿Quién fundó 4/RL?', a: '4/RL fue fundada por Gabriel Olegário, publicista y builder en São Paulo, que marca la dirección y entrega el trabajo. Es miembro de ForbesBLK, la comunidad de Forbes de emprendedores y líderes negros.' },
      { q: '¿Dónde está 4/RL y en qué lenguas trabaja?', a: '4/RL está en São Paulo y trabaja con socios y públicos de todo el mundo, en portugués e inglés.' },
      { q: '¿Cómo contacto con 4/RL?', a: 'Escribe a olegas@4real.ventures, o por WhatsApp, LinkedIn, GitHub o Telegram, todos en el pie de página.' },
    ],
    studio: {
      title: 'El Estudio · 4/RL Co.',
      desc: 'Qué es 4/RL Co. y cómo funciona: un estudio independiente de ventures de IA en São Paulo que crea empresas y las opera, entre influencia, educación, IA aplicada y cine.',
      h1: ['Creamos empresas', 'y las <span class="serif">operamos</span><span class="slash">.</span>'],
      kicker: 'El estudio',
      lede: '4/RL es un estudio independiente de ventures de IA. Cada venture aquí es nuestra: somos dueños de la operación, la medimos por sus números y nos quedamos a largo plazo. La IA es la herramienta. La mejora es el punto.',
      howLabel: 'Cómo funciona',
      howTitle: 'Un estudio, toda la cadena de <span class="serif">valor</span><span class="slash">.</span>',
      chainLine: 'La cadena corre dentro de tres ventures hoy: ',
      whoLabel: 'Quién está detrás',
      whoTitle: 'Dirección y entrega, <span class="hl">la misma persona</span><span class="slash">.</span>',
      whoBody: '<span class="st__em">Gabriel Olegário</span>, publicista y builder, miembro de <span class="st__em">ForbesBLK</span>. Marca la dirección y entrega el trabajo, desde São Paulo. El estudio es pequeño a propósito: las decisiones cruzan un solo escritorio, y lo prometido es lo construido.',
      whoCta: 'Escríbenos',
      faqLabel: 'Preguntas',
      faqTitle: 'Preguntado y <span class="serif">respondido</span><span class="slash">.</span>',
      closeBig: 'Vamos a <span class="serif">construir</span> algo <span class="hl">real</span><span class="slash">.</span>',
    },
    osp: {
      title: 'Código Abierto · 4/RL Co.',
      desc: 'El trabajo que 4/RL hace en público: Gume, un diario de lecturas abierto en portugués bajo AGPL-3.0, y un registro de decisiones donde cada elección lleva su porqué.',
      kicker: 'Código Abierto',
      h1: ['El código sale', 'con sus <span class="serif">porqués</span><span class="slash">.</span>'],
      lede: 'La mayor parte del trabajo del estudio son empresas, y ves el resultado. El trabajo de esta página es distinto: el código, el schema y el registro de decisiones son públicos, y cualquiera puede leerlos, hacer fork o montar el suyo.',
      gumeTitle: 'Un diario de lecturas que cualquiera puede <span class="hl">forkear</span><span class="slash">.</span>',
      gumeP1: 'Gume es un diario de lecturas, brasileño y en portugués por elección. Lo pagarán sus seguidores, y ese apoyo es opcional y cosmético: una insignia en el perfil, nada más. Pagar no desbloquea nada: todos leen el mismo Gume. El código es AGPL-3.0, y cualquiera puede tomarlo y montar el suyo; esa salida es el punto.',
      gumeP2: 'Se construye con quienes lo usan. Corrige una portada, abre un issue, envía un pull request: el catálogo tiene unas 300 mil ediciones en portugués, y mejora en público.',
      statNum: '~300 mil', statText: 'ediciones en portugués en el catálogo',
      live: 'En vivo', story: 'La historia',
      practiceLabel: 'La práctica',
      practiceTitle: 'Cada elección lleva su <span class="serif">porqué</span><span class="slash">.</span>',
      practiceP1: 'Código abierto aquí es más que una licencia. Cada proyecto público mantiene un registro de decisiones, <code class="osp__code">ai/DECISIONS.md</code>, donde cada elección queda escrita con su razón, incluidas las que erramos y revertimos. El sitio que estás leyendo también mantiene uno.',
      practiceP2: 'El registro es lo que convierte un fork en trabajo honesto en vez de arqueología: puedes discrepar de una decisión sabiendo exactamente de qué discrepas. Y nos mantiene honestos, porque una razón que hay que escribir es una razón que hay que tener.',
      gh: '4/RL en GitHub',
      closeLine: '¿Hay algo aquí sobre lo que quieras construir?',
    },
    journalPosts: {
      'a-reading-log-you-can-fork': {
        title: 'Un diario de lecturas que puedes forkear',
        dek: 'Gume está abierto, en vivo, y lo construye quien aparece. Notas de un publicista que entregó una base de datos.',
        excerpt: '4/RL abrió el código de Gume, un diario de lecturas para lectores. Lo que la IA abarató fue el código. Lo que nunca abarató fue tener razón.',
      },
      'the-tool-answered-back': {
        title: 'La herramienta respondió',
        dek: 'El manifiesto de 4/RL',
        excerpt: 'Durante setenta mil años nuestras herramientas nos esperaron. Ahora la herramienta responde. El manifiesto de 4/RL, sobre lo que cambia cuando poderes que eran de los dioses se vuelven ingeniería, y qué pretendemos hacer con ellos.',
      },
    },
  },

  /* ============================================================== ZH */
  zh: {
    chrome: {
      workCrumb: '作品', capsCrumb: '能力', onRecord: '有据可查', builtWith: '共同打造',
      whatRuns: '工作室在这里负责什么', model: '模式', modelValue: '由 4/RL Co. 创办并运营',
      sector: '领域', base: '总部', baseValue: '巴西圣保罗', visit: '访问', nextVenture: '下一家公司',
      wantThis: '想让这样的东西存在吗？', talk: '联系我们', lead: '负责人',
      leadValue: 'Gabriel Olegário · ForbesBLK 成员', runsInside: '应用于', nextCap: '下一项能力',
      needChain: '你的问题需要这条链吗？', read: '阅读',
      journalTitle: '专栏 · 4/RL Co.', journalDesc: '来自 4/RL Co. 的文字：关于打造 AI 公司的笔记与想法。',
      journalH: '公开地<span class="slash">/</span>思考。',
      origNote: '原文以英文写作。', backHome: '返回首页',
    },
    caseStudies: {
      'smart-social': {
        lede: '一个全服务媒体中枢，连接 1,000+ 创作者、运动员与媒体资产和 25+ 个国家的品牌，由 4/RL 持有并运营。',
        story: [
          'Smart Social 是一个全服务媒体中枢：影响力策略、campaign 运营、品牌大使、赞助激活与付费媒体，为 iGaming、体育、娱乐与金融品牌端到端交付。网络汇聚 1,000 多位影响者、运动员与媒体资产，覆盖 25 个以上国家；4/RL 创始人以合伙人兼战略与创新负责人的身份在其中工作。',
          '数字是运营出来的，不是愿望：过去三年服务 35+ 家 iGaming 客户，2024 年产生 62,000+ 次首充，与 1xBet、EstrelaBet、C6 Bank、TaDa Gaming 合作，并入围 SiGMA Americas 2025 最佳营销机构。AI 在运营之下：briefing、匹配与报表工具都构建在工作室自己的技术栈上。',
          'Smart Social 还拥有 Portal Arenna，一个以严肃报道与锐利解读为标准的体育新闻门户，覆盖足球、UFC、F1、NBA 与 NFL。Arenna 完全构建在 4/RL 的技术栈上，这就是工作室的论点：媒体公司拥有自己的媒体，底层技术是我们自己的。',
        ],
        proof: [
          '网络中有 1,000+ 影响者、运动员与媒体资产', '覆盖 25+ 个国家',
          '4/RL 创始人：合伙人兼战略与创新负责人', '过去三年 35+ 家 iGaming 客户',
          '2024 年产生 62,000+ 次首充', 'SiGMA Americas 2025 最佳营销机构入围',
          '拥有 Portal Arenna，构建于 4/RL 技术栈',
        ],
        does: [
          { k: '运营', line: '商务、campaign 运营与创作者管理，全部内部完成。' },
          { k: '应用', line: '为网络定制的匹配与报表工具。' },
          { k: '创作', line: '与创作者共创内容，在值得的地方 AI 原生。' },
        ],
      },
      'labepi': {
        lede: '用葡萄牙语教授流行病学与科学方法，与在职科学家共同创办的合资公司。',
        story: [
          'LabEpi 教授流行病学与科学方法：课程、教材与社区，服务需要证据在教室之外也站得住的学生与专业人士。用葡萄牙语教学是选择，因为那是这批受众学习与工作的语言。',
          '这是一家合资公司。与 4/RL 一起，LabEpi 由 André Soares 和 Lucas H. C. C. Santos 共同建设。后者是 Global Burden of Disease 研究的高级协作者，拥有 1,500 次以上引用，成果发表于 The Lancet。在这里教科学方法的人，正以科学方法为生，这就是全部论据。',
        ],
        partners: [
          { name: 'André Soares', role: '联合创始人', href: 'https://www.linkedin.com/in/bobdesigner/' },
          { name: 'Lucas H. C. C. Santos', role: '联合创始人 · GBD 高级协作者 · 1,500+ 引用，发表于 The Lancet', href: 'https://scholar.google.com/citations?user=WLxIEwcAAAAJ&hl=pt-BR' },
        ],
        does: [
          { k: '运营', line: '课程运营、社区与增长。' },
          { k: '应用', line: '围绕流行病学真实学习方式设计的学习工具。' },
          { k: '创作', line: '端到端制作教学材料。' },
        ],
      },
      'm1m1c-box': {
        lede: '用 AI 制作的电影短片，一段以电影标准要求自己的创意合作。',
        story: [
          'M1m1c Box 在 YouTube 发布电影短片。每一部都被导演过：由人来编写、艺术指导与剪辑，让 AI 承担它真正擅长的制作重量。名字宣告方法：有意图的模仿，而频道是这个方法公开受检验的地方。',
          '这是与 Luiza Santana 共同运营的创意公司。在此前的项目中，两人为家乐福集团、AfroBusiness Brasil 与 Conta Black 等品牌交付过campaign；支撑那些campaign的手艺，就是在这里指挥 AI 的手艺。',
          '它也是工作室 AI 制片的试验场：在管线、提示词、审美上学到的一切，回流到其他公司的创意工作中。电影是工作室最难的 brief，这正是工作室保留一个的原因。',
        ],
        partners: [{ name: 'Luiza Santana', role: '联合创意', href: 'https://www.linkedin.com/in/luizalns/' }],
        proof: [
          '此前项目中为家乐福集团、AfroBusiness Brasil 与 Conta Black 交付campaign',
          'EstrelaBet 2022 世界杯病毒式传播，Games Magazine Brasil 报道',
        ],
      },
    },
    caps: {
      'operations-growth': {
        title: '运营与增长', tag: '运营',
        lede: '造公司最不光鲜的那一半，被当作手艺来做：战略、增长与商务，在公司内部运营，而不是从外部建议。',
        story: [
          '4/RL 的每家公司都被运营，从不被顾问。习惯来自创始人的路径：Gabriel Olegário 从广告与商务岗位一路走来，随后创办 Smart Social；今天在那里运转的增长打法，创作者发掘、campaign 运营、赞助与平台合作，都在内部建成并持续内部运转，Gabriel 在 Smart Social 担任合伙人兼战略与创新负责人。',
          '证据就是 Smart Social 的运营本身：1,000 多位影响者、运动员与媒体资产的网络，覆盖 25 个以上国家；过去三年服务 35+ 家 iGaming 客户；2024 年产生 62,000+ 次首充。该运营入围 SiGMA Americas 2025 最佳营销机构。',
          'AI 在一切之下。briefing、匹配与报表运行在工作室自己的技术栈上，这正是小团队能以这个规模运营网络、并让每个campaign对数字负责的原因。',
        ],
        proof: [
          'Smart Social 网络：1,000+ 创作者、运动员与媒体资产', '覆盖 25+ 个国家',
          'Smart Social 合伙人兼战略与创新负责人', '过去三年 35+ 家 iGaming 客户',
          '2024 年 62,000+ 次首充', 'SiGMA Americas 2025 最佳营销机构入围',
        ],
      },
      'data-applied-ai': {
        title: '数据与应用 AI', tag: '应用',
        lede: '数据与 AI 变成能跑的软件：每个运营之下的模型与工具，在 4/RL 技术栈上自建。',
        story: [
          '这套技术栈不是幻灯片，它交付。这个网站跑在上面：Lighthouse 满分、天生为 answer engine 优化。Gume 跑在上面：约 30 万册葡语图书目录之上的开源读书记录，AGPL-3.0，由创始人与 AI 智能体结对建成。Portal Arenna 跑在上面：Smart Social 旗下的体育门户，端到端构建于工作室技术栈。',
          '在公司内部，同一套栈做安静的工作：Smart Social 网络运营之下的 briefing、匹配与报表工具，以及让每个campaign对结果负责的度量。规则是工作室论点在软件上的应用：自建、自有、自营。',
        ],
        proof: [
          '本站：Lighthouse 全项 100，AEO 天生内建', 'Gume：开源读书记录，约 30 万册目录，AGPL-3.0',
          'Portal Arenna：端到端构建于 4/RL 技术栈的体育门户', 'Smart Social 运营之下的campaign工具',
        ],
      },
      'creative-content': {
        title: '创意与内容', tag: '创作',
        lede: 'AI 原生创意，从概念到成片，由人导演，以手艺的标准衡量。',
        story: [
          '创意实践是一段合作。工作室的电影公司 M1m1c Box 与 Luiza Santana 共同运营；在此前的项目中，两人为家乐福集团、AfroBusiness Brasil 与 Conta Black 等交付过campaign。支撑那些campaign的手艺，就是在这里指挥 AI 的手艺。',
          'M1m1c Box 是实践烧得最热的地方：发布在 YouTube 的电影短片，由人编写、艺术指导与剪辑，AI 承担它真正擅长的制作重量。那里学到的东西回流到工作室触碰的每个品牌，履历证明它能旅行：EstrelaBet 在 2022 世界杯的病毒式campaign正出自这套实践。',
        ],
        proof: [
          'M1m1c Box：用 AI 制作的电影短片，发布于 YouTube',
          '此前项目中为家乐福集团、AfroBusiness Brasil 与 Conta Black 交付campaign',
          'EstrelaBet 2022 世界杯病毒式传播，Games Magazine Brasil 报道',
        ],
      },
    },
    faqs: [
      { q: '4/RL Co. 是什么？', a: '4/RL Co. 是一家总部位于圣保罗的独立 AI 创业工作室。我们创办并运营自己的公司，让人工智能在真实问题上工作，横跨影响力营销、教育、应用 AI 与电影。' },
      { q: '"4/RL" 是什么意思？', a: '"4/RL" 读作 "for real"，真的。斜杠是每个项目都必须跨过的那条线：从承诺到证明。我们的论点一句话讲完：用 AI 让世界更好，真的。' },
      { q: '4/RL 运营哪些公司？', a: '三家：Smart Social（影响力与媒体中枢）、LabEpi（流行病学与科学方法教学）和 M1m1c Box（用 AI 完成的电影叙事）。' },
      { q: '4/RL 在公司内部具体做什么？', a: '三件事，覆盖完整价值链：运营与增长（AI 驱动的战略、增长与商务）、数据与应用 AI（把数据和 AI 变成推动数字的决策）、创意与内容（AI 原生创意，从概念到成片）。一个工作室覆盖全部三项，这正是我们能创办公司而非仅仅建议公司的原因。' },
      { q: '4/RL 是代理公司或咨询公司吗？', a: '都不是。我们不卖服务。我们持有自己的公司并长期运营：创办它们，然后亲自经营。' },
      { q: '谁创办了 4/RL？', a: '4/RL 由 Gabriel Olegário 创办，一位圣保罗的广告人与创建者，定方向、交作品。他是 ForbesBLK 成员，福布斯的黑人企业家与领袖社区。' },
      { q: '4/RL 在哪里？用什么语言工作？', a: '4/RL 位于圣保罗，以葡萄牙语和英语与全球伙伴及受众合作。' },
      { q: '如何联系 4/RL？', a: '写信到 olegas@4real.ventures，或通过页脚的 WhatsApp、LinkedIn、GitHub、Telegram。' },
    ],
    studio: {
      title: '工作室 · 4/RL Co.',
      desc: '4/RL Co. 是什么、如何运转：一家圣保罗的独立 AI 创业工作室，创办公司并亲自运营，横跨影响力营销、教育、应用 AI 与电影。',
      h1: ['我们创办公司', '并亲自<span class="serif">运营</span><span class="slash">。</span>'],
      kicker: '工作室',
      lede: '4/RL 是一家独立 AI 创业工作室。这里的每家公司都是我们自己的：持有运营、以数字衡量、长期经营。AI 是工具，改善才是目的。',
      howLabel: '如何运转',
      howTitle: '一个工作室，覆盖完整的价值链<span class="slash">。</span>',
      chainLine: '这条链如今在三家公司内部运转：',
      whoLabel: '背后是谁',
      whoTitle: '定方向与交付，<span class="hl">同一个人</span><span class="slash">。</span>',
      whoBody: '<span class="st__em">Gabriel Olegário</span>，广告人与创建者，<span class="st__em">ForbesBLK</span> 成员。在圣保罗定方向、交作品。工作室刻意保持小：决策只经过一张桌子，承诺的就是建成的。',
      whoCta: '联系我们',
      faqLabel: '常见问题',
      faqTitle: '问了，也<span class="serif">答了</span><span class="slash">。</span>',
      closeBig: '一起做点<span class="hl">真的</span><span class="slash">。</span>',
    },
    osp: {
      title: '开源 · 4/RL Co.',
      desc: '4/RL 公开做的工作：Gume，一个 AGPL-3.0 葡语开源读书记录，以及一份每个选择都写明理由的决策日志。',
      kicker: '开源',
      h1: ['代码发布时', '带着它的<span class="serif">理由</span><span class="slash">。</span>'],
      lede: '工作室的大部分工作是公司，你看到的是结果。这一页的工作不同：代码、schema 与决策日志都是公开的，任何人都可以阅读、fork，或者自己部署一份。',
      gumeTitle: '一个任何人都能 <span class="hl">fork</span> 的读书记录<span class="slash">。</span>',
      gumeP1: 'Gume 是一个读书记录，巴西的、葡萄牙语的，这是选择。它将由支持者供养，而支持是可选的、纯装饰性的：个人页上的一枚徽章，仅此而已。付费不解锁任何功能，所有人读到同一个 Gume。代码是 AGPL-3.0，任何人都可以拿走自己部署；这个出口正是意义所在。',
      gumeP2: '它与用户共建。改一张错误的封面，提一个 issue，发一个 pull request：目录收录约 30 万册葡语图书版本，并在公开中变好。',
      statNum: '约 30 万', statText: '册葡萄牙语图书版本收录在目录中',
      live: '已上线', story: '背后的故事',
      practiceLabel: '这套实践',
      practiceTitle: '每个选择都带着它的<span class="serif">理由</span><span class="slash">。</span>',
      practiceP1: '在这里，开源不止是许可证。每个公开项目都维护一份决策日志，<code class="osp__code">ai/DECISIONS.md</code>，每个选择连同理由写下，包括我们做错又撤回的。你正在读的这个网站也维护着一份。',
      practiceP2: '这份日志让 fork 成为诚实的工作而非考古：你可以反对某个决定，并确切知道自己反对的是什么。它也让我们诚实，因为一个必须写下来的理由，是一个必须真实存在的理由。',
      gh: 'GitHub 上的 4/RL',
      closeLine: '这里有你想在其上构建的东西吗？',
    },
    journalPosts: {
      'a-reading-log-you-can-fork': {
        title: '一个你可以 fork 的读书记录',
        dek: 'Gume 已开源、已上线，由出现的人共同建造。一个交付了数据库的广告人的笔记。',
        excerpt: '4/RL 开源了 Gume，一个为读者而生的读书记录。AI 让代码变便宜了；它从未让"正确"变便宜。',
      },
      'the-tool-answered-back': {
        title: '工具回应了',
        dek: '4/RL 宣言',
        excerpt: '七万年来，工具一直等待我们。现在，工具回应了。4/RL 宣言：当曾属于神的力量成为工程，什么改变了，我们又打算拿它们做什么。',
      },
    },
  },

  /* ============================================================== RU */
  ru: {
    chrome: {
      workCrumb: 'Проекты', capsCrumb: 'Компетенции', onRecord: 'Проверяемо', builtWith: 'Создано вместе с',
      whatRuns: 'Что студия ведёт здесь', model: 'Модель', modelValue: 'Создана и управляется 4/RL Co.',
      sector: 'Сектор', base: 'База', baseValue: 'Сан-Паулу, Бразилия', visit: 'Открыть', nextVenture: 'Следующая компания',
      wantThis: 'Хотите, чтобы такое существовало?', talk: 'Связаться', lead: 'Лид',
      leadValue: 'Габриэл Олегарио · член ForbesBLK', runsInside: 'Работает внутри', nextCap: 'Следующая компетенция',
      needChain: 'Нужна эта цепочка внутри вашей задачи?', read: 'Читать',
      journalTitle: 'Журнал · 4/RL Co.', journalDesc: 'Тексты 4/RL Co.: заметки и идеи о создании AI-компаний.',
      journalH: 'Думаем <span class="slash">/</span> <span class="serif">публично</span>.',
      origNote: 'Оригинал написан на английском.', backHome: 'На главную',
    },
    caseStudies: {
      'smart-social': {
        lede: 'Полносервисный медиахаб, соединяющий 1 000+ авторов, атлетов и медиаактивов с брендами в 25+ странах. Принадлежит 4/RL и управляется 4/RL.',
        story: [
          'Smart Social — полносервисный медиахаб: инфлюенс-стратегия, ведение кампаний, амбассадоры брендов, активация спонсорств и платные медиа, от начала до конца, для брендов iGaming, спорта, развлечений и финансов. Сеть объединяет более 1 000 инфлюенсеров, атлетов и медиаактивов в более чем 25 странах; основатель 4/RL работает внутри неё как партнёр и Head of Strategy and Innovation.',
          'Цифры операционные, не декоративные: 35+ клиентов iGaming за последние три года, 62 000+ первых депозитов в 2024 году, кампании с 1xBet, EstrelaBet, C6 Bank и TaDa Gaming, шорт-лист Best Marketing Agency на SiGMA Americas 2025. AI лежит под операцией: инструменты брифинга, подбора и отчётности построены на стеке студии.',
          'Smart Social также владеет Portal Arenna, спортивным новостным порталом с серьёзной проверкой фактов и острой аналитикой: футбол, UFC, Формула-1, NBA, NFL. Arenna целиком построен на стеке 4/RL, и это тезис студии в одном предложении: медиакомпания владеет своими медиа, а технология под ними наша.',
        ],
        proof: [
          '1 000+ инфлюенсеров, атлетов и медиаактивов в сети', 'Работа в 25+ странах',
          'Основатель 4/RL: партнёр и Head of Strategy and Innovation', '35+ клиентов iGaming за три года',
          '62 000+ первых депозитов в 2024', 'Шорт-лист Best Marketing Agency, SiGMA Americas 2025',
          'Владеет Portal Arenna, построенным на стеке 4/RL',
        ],
        does: [
          { k: 'Управлять', line: 'Коммерция, ведение кампаний и работа с авторами, всё внутри.' },
          { k: 'Применять', line: 'Подбор и отчётность на инструментах, построенных для сети.' },
          { k: 'Создавать', line: 'Контент вместе с авторами, AI-нативный там, где это заслужено.' },
        ],
      },
      'labepi': {
        lede: 'Эпидемиология и научный метод, преподаваемые на португальском, в совместном предприятии с действующими учёными.',
        story: [
          'LabEpi преподаёт эпидемиологию и научный метод: курсы, материалы и сообщество для студентов и специалистов, которым нужны доказательства, выдерживающие проверку за пределами аудитории. Обучение на португальском осознанно: это язык, на котором эта аудитория учится и работает.',
          'Это совместное предприятие. Вместе с 4/RL LabEpi строят Андре Соарес и Лукас Э. К. К. Сантос, старший коллаборатор исследования Global Burden of Disease, более 1 500 цитирований и публикации в The Lancet. Научному методу здесь учат люди, которые живут им профессионально, и это весь аргумент.',
        ],
        partners: [
          { name: 'André Soares', role: 'Сооснователь', href: 'https://www.linkedin.com/in/bobdesigner/' },
          { name: 'Lucas H. C. C. Santos', role: 'Сооснователь · старший коллаборатор GBD · 1 500+ цитирований, публикации в The Lancet', href: 'https://scholar.google.com/citations?user=WLxIEwcAAAAJ&hl=pt-BR' },
        ],
        does: [
          { k: 'Управлять', line: 'Операции курсов, сообщество и рост.' },
          { k: 'Применять', line: 'Учебные инструменты, построенные вокруг того, как эпидемиологию учат на самом деле.' },
          { k: 'Создавать', line: 'Учебные материалы, произведённые от и до.' },
        ],
      },
      'm1m1c-box': {
        lede: 'Короткие кинематографичные истории, созданные с AI, в творческом партнёрстве со стандартом кино.',
        story: [
          'M1m1c Box публикует короткие кинематографичные истории на YouTube. Каждая срежиссирована: написана, оформлена и смонтирована людьми, а AI несёт тот производственный вес, в котором действительно хорош. Имя объявляет метод, мимикрия с намерением, а канал — место, где метод проверяется публично.',
          'Это творческая компания, которую ведут вместе с Луизой Сантаной. В прежних проектах вдвоём они выпускали кампании для Grupo Carrefour, AfroBusiness Brasil и Conta Black, среди прочих; ремесло, которое несло те кампании, то же самое, что направляет AI здесь.',
          'Это ещё и полигон студии для AI-продакшена: выученное на фильмах, в пайплайнах, в промптинге, во вкусе, возвращается в креативную работу остальных компаний. Кино — самый трудный бриф студии, и именно поэтому студия его держит.',
        ],
        partners: [{ name: 'Luiza Santana', role: 'Со-креатив', href: 'https://www.linkedin.com/in/luizalns/' }],
        proof: [
          'Кампании для Grupo Carrefour, AfroBusiness Brasil и Conta Black в прежних проектах',
          'Вирусная кампания EstrelaBet на ЧМ-2022, освещена Games Magazine Brasil',
        ],
      },
    },
    caps: {
      'operations-growth': {
        title: 'Операции и рост', tag: 'Управлять',
        lede: 'Негламурная половина строительства компаний, сделанная как ремесло: стратегия, рост и коммерция, изнутри компаний, а не советами снаружи.',
        story: [
          'Каждая компания 4/RL управляется, а не консультируется, и привычка идёт из маршрута основателя: Габриэл Олегарио пришёл из рекламы и коммерческих ролей, затем основал Smart Social; плейбук роста, работающий там сегодня, поиск авторов, ведение кампаний, спонсорства и платформенные сделки, построен внутри и работает внутри, а Габриэл занимает в Smart Social позицию партнёра и Head of Strategy and Innovation.',
          'Доказательство — сама операция Smart Social: сеть из 1 000+ инфлюенсеров, атлетов и медиаактивов в 25+ странах, 35+ клиентов iGaming за последние три года, 62 000+ первых депозитов в 2024. Операция вошла в шорт-лист Best Marketing Agency на SiGMA Americas 2025.',
          'AI лежит под всем. Брифинг, подбор и отчётность работают на инструментах, построенных на стеке студии, и именно это позволяет небольшой команде вести сеть такого масштаба и спрашивать с каждой кампании её цифры.',
        ],
        proof: [
          '1 000+ авторов, атлетов и медиаактивов в сети Smart Social', 'Работа в 25+ странах',
          'Партнёр и Head of Strategy and Innovation в Smart Social', '35+ клиентов iGaming за три года',
          '62 000+ первых депозитов в 2024', 'Шорт-лист Best Marketing Agency, SiGMA Americas 2025',
        ],
      },
      'data-applied-ai': {
        title: 'Данные и прикладной AI', tag: 'Применять',
        lede: 'Данные и AI, превращённые в работающий софт: модели и инструменты под каждой операцией, построенные на стеке 4/RL.',
        story: [
          'Стек не слайд, он поставляет. Этот сайт работает на нём: идеальный балл Lighthouse и оптимизация под answer engines по построению. Gume работает на нём: открытый читательский дневник над каталогом примерно 300 тысяч португалоязычных изданий, AGPL-3.0, построенный основателем в паре с AI-агентами. Portal Arenna работает на нём: спортивный портал Smart Social, целиком построенный на стеке студии.',
          'Внутри компаний тот же стек делает тихую работу: инструменты брифинга, подбора и отчётности под операцией Smart Social и измерения, которые держат каждую кампанию подотчётной. Правило — тезис студии в применении к софту: построй, владей, управляй.',
        ],
        proof: [
          'Этот сайт: Lighthouse 100 по всем пунктам, AEO по построению', 'Gume: открытый дневник чтения, ~300 тыс. изданий, AGPL-3.0',
          'Portal Arenna: спортивный портал, целиком на стеке 4/RL', 'Инструменты кампаний под операцией Smart Social',
        ],
      },
      'creative-content': {
        title: 'Креатив и контент', tag: 'Создавать',
        lede: 'AI-нативный креатив от концепции до продакшена, срежиссированный людьми и измеряемый стандартом ремесла.',
        story: [
          'Творческая практика — это партнёрство. M1m1c Box, кинокомпания студии, ведётся вместе с Луизой Сантаной; в прежних проектах вдвоём они выпускали кампании для Grupo Carrefour, AfroBusiness Brasil и Conta Black, среди прочих. Ремесло, которое несло те кампании, то же самое, что направляет AI здесь.',
          'M1m1c Box — где практика горит жарче всего: короткие кинематографичные истории на YouTube, написанные, оформленные и смонтированные людьми, с AI на том производственном весе, где он действительно хорош. Выученное там возвращается в каждый бренд, которого касается студия, и послужной список показывает, что оно путешествует: вирусная кампания EstrelaBet на ЧМ-2022 вышла из этой практики.',
        ],
        proof: [
          'M1m1c Box: кинематографичные истории с AI, на YouTube',
          'Кампании для Grupo Carrefour, AfroBusiness Brasil и Conta Black в прежних проектах',
          'Вирусная кампания EstrelaBet на ЧМ-2022, освещена Games Magazine Brasil',
        ],
      },
    },
    faqs: [
      { q: 'Что такое 4/RL Co.?', a: '4/RL Co. — независимая AI venture-студия из Сан-Паулу. Мы создаём и сами ведём собственные компании, которые ставят искусственный интеллект на настоящие задачи: инфлюенс, образование, прикладной AI и кино.' },
      { q: 'Что значит "4/RL"?', a: '"4/RL" читается как "for real", по-настоящему. Слэш — это линия, которую каждый проект должен пересечь: от обещания к доказательству. Наш тезис умещается в одно предложение: делать мир лучше с AI, по-настоящему.' },
      { q: 'Какими компаниями управляет 4/RL?', a: 'Тремя: Smart Social (хаб инфлюенса и медиа), LabEpi (обучение эпидемиологии и научному методу) и M1m1c Box (кинематографичные истории, созданные с AI).' },
      { q: 'Что 4/RL делает внутри своих компаний?', a: 'Три вещи по всей цепочке ценности: операции и рост (стратегия, рост и коммерция с AI), данные и прикладной AI (данные и AI, превращённые в решения, которые двигают цифры) и креатив и контент (AI-нативный креатив от концепции до продакшена). Одна студия закрывает все три, поэтому мы можем создать компанию, а не советовать ей.' },
      { q: '4/RL — агентство или консалтинг?', a: 'Ни то ни другое. Мы не продаём услуги. Мы владеем своими компаниями и ведём их вдолгую: создаём и управляем.' },
      { q: 'Кто основал 4/RL?', a: '4/RL основал Габриэл Олегарио, рекламщик и билдер из Сан-Паулу, который задаёт направление и делает работу. Он член ForbesBLK, сообщества Forbes для чернокожих предпринимателей и лидеров.' },
      { q: 'Где находится 4/RL и на каких языках работает?', a: '4/RL базируется в Сан-Паулу и работает с партнёрами и аудиториями по всему миру на португальском и английском.' },
      { q: 'Как связаться с 4/RL?', a: 'Пишите на olegas@4real.ventures или в WhatsApp, LinkedIn, GitHub, Telegram — всё в подвале сайта.' },
    ],
    studio: {
      title: 'Студия · 4/RL Co.',
      desc: 'Что такое 4/RL Co. и как это работает: независимая AI venture-студия в Сан-Паулу, которая создаёт компании и сама ими управляет: инфлюенс, образование, прикладной AI и кино.',
      h1: ['Мы создаём компании', 'и сами ими <span class="serif">управляем</span><span class="slash">.</span>'],
      kicker: 'Студия',
      lede: '4/RL — независимая AI venture-студия. Каждая компания здесь наша: мы владеем операцией, спрашиваем с неё цифры и остаёмся надолго. AI — инструмент. Улучшение — смысл.',
      howLabel: 'Как это работает',
      howTitle: 'Одна студия, вся цепочка <span class="serif">ценности</span><span class="slash">.</span>',
      chainLine: 'Сегодня цепочка работает внутри трёх компаний: ',
      whoLabel: 'Кто за этим стоит',
      whoTitle: 'Направление и поставка, <span class="hl">один человек</span><span class="slash">.</span>',
      whoBody: '<span class="st__em">Габриэл Олегарио</span>, рекламщик и билдер, член <span class="st__em">ForbesBLK</span>. Задаёт направление и делает работу, из Сан-Паулу. Студия намеренно маленькая: решения проходят через один стол, а что обещано, то и построено.',
      whoCta: 'Написать нам',
      faqLabel: 'Вопросы',
      faqTitle: 'Спрошено и <span class="serif">отвечено</span><span class="slash">.</span>',
      closeBig: 'Давайте <span class="serif">построим</span> что-то <span class="hl">настоящее</span><span class="slash">.</span>',
    },
    osp: {
      title: 'Открытый код · 4/RL Co.',
      desc: 'Работа, которую 4/RL делает публично: Gume, открытый читательский дневник на португальском под AGPL-3.0, и журнал решений, где у каждого выбора записана причина.',
      kicker: 'Открытый код',
      h1: ['Код выходит', 'со своими <span class="serif">причинами</span><span class="slash">.</span>'],
      lede: 'Большая часть работы студии — компании, и вы видите результат. Работа на этой странице другая: код, схема и журнал решений публичны, любой может читать, форкать или развернуть своё.',
      gumeTitle: 'Читательский дневник, который любой может <span class="hl">форкнуть</span><span class="slash">.</span>',
      gumeP1: 'Gume — читательский дневник, бразильский и на португальском, осознанно. Его будут оплачивать сторонники, и эта поддержка опциональна и косметична: значок в профиле, не больше. Оплата ничего не открывает: все читают один и тот же Gume. Код под AGPL-3.0, любой может взять его и развернуть свой; этот выход и есть смысл.',
      gumeP2: 'Он строится вместе с читателями. Исправьте неверную обложку, откройте issue, пришлите pull request: в каталоге около 300 тысяч португалоязычных изданий, и он становится лучше публично.',
      statNum: '~300 тыс.', statText: 'изданий на португальском в каталоге',
      live: 'Работает', story: 'История',
      practiceLabel: 'Практика',
      practiceTitle: 'У каждого выбора есть своя <span class="serif">причина</span><span class="slash">.</span>',
      practiceP1: 'Открытый код здесь больше, чем лицензия. Каждый публичный проект ведёт журнал решений, <code class="osp__code">ai/DECISIONS.md</code>, где каждый выбор записан со своей причиной, включая те, что мы отменили. Сайт, который вы читаете, тоже ведёт такой.',
      practiceP2: 'Журнал превращает форк в честную работу вместо археологии: можно не соглашаться с решением, точно зная, с чем не соглашаешься. И он держит честными нас, потому что причина, которую надо записать, это причина, которая должна существовать.',
      gh: '4/RL на GitHub',
      closeLine: 'Есть здесь что-то, на чём вы хотите строить?',
    },
    journalPosts: {
      'a-reading-log-you-can-fork': {
        title: 'Читательский дневник, который можно форкнуть',
        dek: 'Gume открыт, работает и строится теми, кто приходит. Заметки рекламщика, который поставил базу данных.',
        excerpt: '4/RL открыла код Gume, читательского дневника для читателей. AI удешевил код. Он никогда не удешевлял правоту.',
      },
      'the-tool-answered-back': {
        title: 'Инструмент ответил',
        dek: 'Манифест 4/RL',
        excerpt: 'Семьдесят тысяч лет наши инструменты ждали нас. Теперь инструмент отвечает. Манифест 4/RL: что меняется, когда силы богов становятся инженерией, и что мы намерены с ними делать.',
      },
    },
  },
};

// Merge helper: locale content over English structure; missing keys fall
// through to the EN data files at the call site.
export const getPages = (l) => pages[l] ?? pages.en;
export const localePathFor = (l, path) => (l === 'en' ? path : `/${l}${path}`);
