// Native journal for 4/RL. Articles are written natively here.
// Block types rendered by /journal/[slug]:
//   { t:'p', html, drop? }        paragraph (drop=true -> drop cap)
//   { t:'h2', html, id? }         section heading
//   { t:'pull', html, lime? }     full-width display pull statement
//   { t:'list', items:[html] }    list, "/" instead of a bullet
//   { t:'figure', img, alt, caption? }  wide image; img is a key registered in
//                                 [slug].astro, so an unknown key draws nothing
//   { t:'links', items:[{label,value,href}] }  the ask, as rows
//   { t:'note', html }            small italic footnote, ruled off
//   { t:'divider' }               centered lime "/" between movements
//   { t:'signoff', html }         oversized sign-off
// Accents inside html: <span class="hl">…</span> (lime), <span class="slash">/</span>.
// Article fields: kicker sets the header eyebrow after "Journal /".
export const articles = [
  {
    slug: 'a-reading-log-you-can-fork',
    title: 'A reading log you can fork',
    kicker: 'Open Source',
    // The title has to carry the subject, not the thesis: it is the h1, the tab,
    // the card and the OG title, and "the part the tool can't write" told nobody
    // that a product exists, what it does, or that it is open. It survives as the
    // section heading it always was, which is where an essay's thesis belongs.
    dek: 'Gume is open, live, and built by whoever shows up. Notes from an advertiser who shipped a database.',
    excerpt:
      '4/RL open sourced Gume, a reading log for readers. What AI made cheap was the code. What it never made cheap was being right.',
    author: 'Gabriel Olegário',
    date: '2026-07-16',
    dateLabel: 'Jul 2026',
    // Covers are drawn, not shot. A screenshot as a cover made this post look
    // like it came from a different site than the one next to it, and no overlay
    // fixes that: the fix is that every cover is a graphic built from the "/".
    cover: '/journal/cover-fork.svg',
    coverAlt: 'The 4/RL slash, forking: one bar comes down and splits into two.',
    blocks: [
      { t: 'p', drop: true, html: `The last thing I wrote here ended with a claim: bring the tool method and intent, and it becomes a lever that moves real work.` },
      { t: 'p', html: `That is easy to write in a manifesto. So we went and tested it.` },
      { t: 'p', html: `<strong><a href="https://gume.club" target="_blank" rel="noopener">Gume</a> is live, and the code is open.</strong> It is a reading log: a place to record what you have read, what you are reading, and what is still waiting on the shelf. It runs on a catalogue of nearly 300,000 Portuguese-language editions. It is licensed AGPL-3.0. It was built in the open, in public, by an advertiser who is not a programmer, working in pairs with an AI agent.` },
      { t: 'p', html: `And it is, by a wide margin, the most useful thing I have ever learned from.` },

      { t: 'divider' },

      { t: 'h2', id: 'one-screen', html: `What it is, in one screen` },
      { t: 'p', html: `Brazilian readers have been stuck with a decaying Skoob for fifteen years, and the alternatives are all foreign, English-first, and built around the wrong instinct. So:` },
      {
        t: 'figure',
        img: 'gume-estante',
        alt: 'The Gume shelf: book covers on black, each with a one-word rating instead of a score.',
        caption: `The shelf <span class="slash">/</span> the covers are the only colour on the page`,
      },
      { t: 'p', html: `<strong>A shelf.</strong> Want to read, reading, read, abandoned. Rereads. Physical and digital in the same place. Owning a book and reading a book are different things, and here they are counted separately.` },
      { t: 'p', html: `<strong>A rating that is a word.</strong> Adorei, gostei, achei ok, não gostei, não terminei. Never a number. A star is a scale, a scale becomes an average, an average becomes a scoreboard, and a scoreboard turns reading into a performance.` },
      { t: 'p', html: `<strong>A chronological feed, and a room to wander.</strong> The feed is only people you chose to follow, with nothing injected between them. And there's a separate tab to explore, full of shelves belonging to people you don't follow yet, shuffled rather than ranked. Discovery exists here. It just doesn't come find you.` },
      { t: 'p', html: `<strong>Files you can take with you.</strong> One click, and the file downloads: JSON and CSV, with your shelf, your reading dates, your ratings, your reviews (including the private ones), and every catalogue correction you made. No queue, no email, no "we're preparing your archive," which is friction dressed as care. <strong>And the CSV uses the Goodreads export columns</strong>, the format Skoob, StoryGraph, Oku and Fable already know how to read. An export is only an exit if another app can open it. A proprietary JSON nobody imports is a ransom note in a nice typeface.` },
      { t: 'p', html: `<strong>An open book graph.</strong> The metadata is corrected by readers, and the intent is to publish it back as an open dataset. If this project dies, the data should outlive it.` },

      { t: 'divider' },

      { t: 'h2', id: 'refusals', html: `The manifesto is a list of refusals` },
      { t: 'p', html: `The interesting part of a product is rarely what it has. It is what it will not do, on purpose, when doing it would work.` },
      {
        t: 'list',
        items: [
          `<strong>No likes, no follower count, no streaks.</strong> And no scoreboard. There is an honour on your profile, and there is no list of who read the most. A ranking sorted by books read is a machine for making people lie about reading.`,
          `<strong>The honour never falls, and it never looks at the clock.</strong> No "books this month," no seasons. Stopping for a year costs nothing. An app that drops your number when life gets hard is an app that punishes the grieving, the sick, and the person with a newborn, and it makes people open a thin book they don't like just to keep what was already theirs.`,
          `<strong>Abandoning costs nothing, and the rating doesn't count.</strong> Reading and hating is worth exactly what reading and loving is worth. If "adorei" were worth more, the app would be buying compliments. If quitting cost something, nobody would ever quit a bad book again.`,
          `<strong>No algorithmic feed.</strong> Nothing is ranked and nothing is injected. Your feed is the people you chose, in the order it happened. And when you want strangers, there's a tab for that, shuffled rather than sorted. Discovery you walk into is a different object from discovery that walks into you.`,
          `<strong>No affiliate links. No ads. Your reading history is never for sale.</strong>`,
          `<strong>No engagement notifications.</strong> We'll tell you when a friend posts. We will not tell you that your shelf misses you.`,
        ],
      },
      { t: 'p', html: `Every one of those is a refusal of revenue. That is what makes it a promise instead of a preference.` },
      { t: 'p', html: `And here is the one I won't dress up, because it's the honest seam in the whole thing: <strong>there is a ladder, and it counts books.</strong> Iron, Bronze, Silver, and up, for what you've read in your life. So yes, a thing that goes up when you read more exists in a product that says reading is not a performance.` },
      { t: 'p', html: `What we did was strip the ladder of every part that makes a number cruel. It has no leaderboard, so there is nobody to beat. It never falls, so quitting for a year costs nothing. It never looks at the clock, so there's no month and no season. It can't be sorted, so it can't be a ranking. What's left is a slow shape of your life as a reader, visible only to you and the people who already know you.` },
      { t: 'p', html: `Is that a clean win? No. A ladder that counts books can be farmed with thin books, and I know it. It's a tension we're carrying on purpose rather than pretending we solved. If you think we got the trade wrong, that argument belongs in an issue, and it will get a real answer.` },
      { t: 'p', html: `And the licence is what makes the promise real. If the hosted instance ever stops honouring that list, you take the code, you take your data, and you run your own.` },
      { t: 'pull', lime: true, html: `The exit is the point.` },
      { t: 'p', html: `It is the exit that makes staying mean something.` },

      { t: 'divider' },

      { t: 'h2', id: 'the-part', html: `The part the tool can't write` },
      { t: 'p', html: `Here is the thing I actually came to say.` },
      { t: 'p', html: `AI collapsed the cost of writing code. It did not collapse the cost of being wrong. Those are different economies, and almost everyone talking about this in 2026 is still pricing them the same.` },
      { t: 'p', html: `One example from this build, and it is the one that still bothers me.` },
      { t: 'p', html: `The catalogue importer read two of Open Library's three dump files and never opened the third. The third one is where the authors live. So tens of thousands of books landed in the database with nobody attached to them, and the proposed next step was to delete them as orphans. Flaubert. Tolstoy. <em>Torto Arado</em>. Erased from a library because a file went unread.` },
      { t: 'p', html: `No error. No red build. No crash. Every test passed, and the instruction had been followed exactly. Just a confident, fast, wrong answer delivered in seconds, with a tidy cleanup plan attached to it.` },
      { t: 'p', html: `It was caught because someone asked what was in the pile before agreeing to burn it.` },
      { t: 'pull', html: `The agent wrote thousands of lines I could not have written, and it came one question away from deleting Tolstoy.` },
      { t: 'p', html: `<strong>Both of those are true, and anyone selling you only one of them is selling you something.</strong>` },
      { t: 'p', html: `So the scarce resource is not code. It is the question asked before the write. It is knowing that a shared record is not yours to overwrite. It is noticing that a vendor's key is provenance, not identity, because Open Library has three different keys for Tolstoy and none of them is him.` },
      { t: 'p', html: `That is judgment, and it is the one thing that did not get cheaper.` },

      { t: 'divider' },

      { t: 'h2', id: 'defends-itself', html: `So the repo defends itself` },
      { t: 'p', html: `If the maintainer is not a programmer, then no protection can depend on the maintainer reviewing a diff. I would not catch a bug reading one, and pretending otherwise would be theatre.` },
      { t: 'p', html: `So the defence had to be structural. This is the method, and it transfers to every venture we run:` },
      {
        t: 'list',
        items: [
          `<strong>The decisions are written down before the code.</strong> Every hard call lives in a decisions log, with the reasoning, in plain Portuguese. You don't relitigate one without a new argument. An agent with amnesia and a repo with a memory is a workable pair. Two amnesiacs is not.`,
          `<strong>Authorization lives in exactly one file</strong>, and a script breaks the build if a check appears anywhere else. Not a convention. A gate.`,
          `<strong>There are more than 700 tests, and the important ones don't test functions. They scan the codebase.</strong> One breaks the build if a screen starts speaking like a developer ("schema", "endpoint", "Phase 4"), because Gume talks to readers. One breaks if a route is born public without anyone deciding it. One breaks if a badge could ever be earned by <em>reading</em>, or if one badge glows brighter than another. One bans a timezone-naive date function everywhere except the file allowed to have it, because that bug once filed a book under the wrong year. And a red team attacks the system, swapping UUIDs to try to read and write another person's rows.`,
          `<strong>The CI is the reviewer.</strong> Zero human approvals. Green means it ships. That is not blind trust, it is the opposite: it is refusing to pretend that a human rubber stamp is a control.`,
        ],
      },
      { t: 'p', html: `The lesson generalizes past reading apps. When generation is free, the whole job moves upstream, into deciding what must never be true and encoding that where it cannot be forgotten. The organizations that win this decade will not be the ones with the best prompts. They will be the ones whose <span class="hl">constraints are executable</span>.` },

      { t: 'divider' },

      { t: 'h2', id: 'what-i-want', html: `What I want out of it` },
      { t: 'p', html: `I'll be direct, because pretending this is pure altruism would be its own kind of theatre.` },
      { t: 'p', html: `I run a studio that puts AI to work across influence, science, applied AI and film. I sell judgment about AI. You cannot sell judgment about a thing you have only briefed other people to do.` },
      { t: 'p', html: `So I built the whole vertical myself, badly at first, and in public. Schema design. Authorization. A trigram search over 300,000 rows and why it was slow (I guessed debounce; I was wrong; the agent measured and it was an external call blocking the keystroke). Postgres migrations. CSP headers. CI. A design system. Community governance. Licence choice. Deploy.` },
      { t: 'p', html: `The shape people call T-shaped only works if the vertical is real. Mine is advertising, positioning, taste, the read on a screen. What I was missing was the horizontal that this decade actually requires: enough fluency in the machinery to know when the machine is confidently lying to me, and enough taste in the process to structure the work so that the lie gets caught by something other than luck.` },
      { t: 'pull', html: `You do not learn that from a course about AI. You learn it at 2am when the substring filter is about to delete Jung.` },
      { t: 'p', html: `<strong>And there is a second reason, and it's smaller and more honest: I read.</strong> I got back into reading to bring my anxiety down. It worked. The app I wanted did not exist, so the thing I built to learn on is the thing I actually use every day. That is not a coincidence. It's the only kind of project that survives the boring middle.` },

      { t: 'divider' },

      { t: 'h2', id: 'in-english', html: `Why this is in English` },
      { t: 'p', html: `Fair question, and I'll answer it before someone asks it in the comments.` },
      { t: 'p', html: `Gume is Portuguese-first and it is going to stay that way. The app is in Portuguese, the catalogue is Portuguese, the README is Portuguese, the issues are answered in Portuguese, and translating it to anything else is explicitly <em>not</em> the priority until the Brazilian version is flawless. Brazilian readers spent fifteen years stuck with a decaying Skoob while every alternative was built for someone else, in someone else's language, around someone else's shelf. Fixing that is the entire point.` },
      { t: 'p', html: `This page is in English for a different reason.` },
      { t: 'p', html: `I want the world to see what happens when Brazilians get AI and an open source community in the same room. We are usually cast in this story as the market. The users. The place where the product gets localized last, if it gets localized. The seat at the table nobody assigns.` },
      { t: 'pull', lime: true, html: `We are not asking for the seat. We're building the table, in the open, under a licence that lets anyone take it.` },
      { t: 'p', html: `So: the product speaks Portuguese, because it was made for people who read in Portuguese. The invitation speaks English, because I want it read everywhere. Those are not in conflict. That's just knowing who each sentence is for, which happens to be the same rule the whole repo runs on: <strong>Gume talks to readers, GitHub talks to builders, and you never mix them up.</strong>` },

      { t: 'divider' },

      { t: 'h2', id: 'invitation', html: `The invitation` },
      { t: 'p', html: `Gume exists to be built by the people who use it. That is the whole premise, and right now it is short of hands.` },
      { t: 'p', html: `<strong>You can contribute without writing a line of code, and today this is the most valuable help there is.</strong> The catalogue came from an open archive and it arrived incomplete: <strong>nearly 266,000 editions with no cover</strong>, thousands with no year and no publisher. That does not fix itself, and it does not need a programmer. It needs someone holding the book.` },
      {
        t: 'figure',
        img: 'gume-o-que-falta',
        alt: 'The "o que falta" page: the open work on the catalogue, starting with the books on your own shelf.',
        caption: `<span class="slash">/</span> the open work, starting with the books on your own shelf`,
      },
      { t: 'p', html: `Open <a href="https://gume.club/o-que-falta" target="_blank" rel="noopener"><strong>o que falta</strong></a> and start with the books <strong>on your own shelf</strong>. You are the only person on earth who can fix those right now, because all it takes is turning the book over. Every correction is recorded <strong>with your name</strong>, on the book's page, forever. And your name goes on the contributors page, in the same list, at the same size, as the people who write the code.` },
      {
        t: 'figure',
        img: 'gume-contribuidores',
        alt: 'The contributors page: the people who tend the catalogue and the people who write the code, side by side at the same weight.',
        caption: `Who makes Gume <span class="slash">/</span> catalogue and code, same page, same size`,
      },
      { t: 'pull', html: `A cover fix is worth what a commit is worth.` },
      { t: 'p', html: `<strong>If you write code:</strong> the <code>good first issue</code> labels are real. Each one says what it is, why it matters, <strong>which file to touch</strong>, and how to test it. None of them requires understanding the whole app.` },
      {
        t: 'list',
        items: [
          `<strong>The smallest:</strong> ISBN-10 to ISBN-13. A pure function, a new file, a test. And it closes a real hole: every book published before 2007 currently sails past a 300,000-edition catalogue and becomes a duplicate.`,
          `<strong>The most valuable:</strong> importers. StoryGraph, Skoob, LibraryThing, Kindle, Kobo. The bar is <strong>lossless</strong>: dates, ratings, review text, shelves, ISBN. Half-finished migrations are the single biggest reason people never leave a platform they've already outgrown.`,
          `<strong>The hardest and most needed:</strong> book data. Matching, deduplication, covers, non-English catalogues. No glamour. It's the moat, and it decides whether the first search a stranger runs works.`,
        ],
      },
      { t: 'p', html: `You don't need to ask for an issue. Comment "peguei essa" and go. Work on a branch, open a PR, and the CI decides: zero human approvals, green means it ships. Tell us if you used an AI agent, without shame, because we do too: it just tells the tests where to look hardest.` },
      { t: 'p', html: `And if you think one of the refusals is wrong, open an issue. The schema, the plan and the design system are public precisely because they are expensive to change later and cheap to argue about now.` },
      {
        t: 'links',
        items: [
          { label: 'The app', value: 'gume.club', href: 'https://gume.club' },
          { label: 'Code', value: 'github.com/4-RL-Co/gume-club', href: 'https://github.com/4-RL-Co/gume-club' },
          { label: 'Conversation', value: 'the Discussions', href: 'https://github.com/4-RL-Co/gume-club/discussions' },
        ],
      },

      { t: 'divider' },

      { t: 'h2', id: 'why-4rl', html: `Why this is a 4<span class="slash">/</span>RL venture` },
      { t: 'p', html: `Gume makes no money and is not trying to. One day there will be a way to support it, and it will be optional and <strong>cosmetic</strong>: a mark on your profile, nothing more. Support never unlocks a feature. The person who pays and the person who doesn't use exactly the same Gume.` },
      { t: 'p', html: `So why does a studio ship it?` },
      { t: 'p', html: `Because <span class="hl">"for real"</span> is a standard, and the slash in our name is the line every project has to cross, from promise to proof. <strong>Open source is the harshest version of that crossing there is.</strong> You cannot claim it works when anyone can clone it and find out in two commands. You cannot claim you understand the stack when the stack is on the table. You cannot claim the product has principles when the licence hands a stranger the power to fork you the day you break one.` },
      { t: 'p', html: `Everything else we build passes through a client, a contract, an NDA. This one passes through you.` },
      { t: 'p', html: `Gume is the name for the edge of a blade. The part that cuts.` },
      { t: 'p', html: `A blade nobody sharpens doesn't rust overnight. It loses the edge slowly, and it goes on looking exactly like a blade. You only find out when it fails to cut what it always cut.` },
      { t: 'p', html: `Minds work the same way. So do studios.` },
      { t: 'signoff', html: `The mind never<br />loses its <span class="hl">edge</span>.` },
      { t: 'note', html: `Gume is maintained by <a href="https://www.4real.ventures">4/RL Co.</a> and hosted at <a href="https://gume.club" target="_blank" rel="noopener">gume.club</a>. AGPL-3.0. Fork it.` },
    ],
  },
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
