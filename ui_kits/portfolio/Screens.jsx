const DS = window.EditorialDesignSystem_8f642b;
const { Header, Hero, Footer, FeedItem, MetaRow, CaseBlock, CaseShots, NextCase, Meta, Reveal } = DS;

/* Ритм ленты: кейс во всю ширину, затем два в ряд 50/50, снова во всю ширину.
   Больше двух в ряд не ставим. */
function rhythm(list) {
  const rows = [];
  let i = 0;
  while (i < list.length) {
    if (rows.length % 2 === 0 || list.length - i === 1) { rows.push([list[i]]); i += 1; }
    else { rows.push(list.slice(i, i + 2)); i += 2; }
  }
  return rows;
}

function HomeScreen({ onOpen }) {
  const [tag, setTag] = React.useState('Все');
  const cases = window.PF.cases.filter((c) => tag === 'Все' || c.tags.indexOf(tag) > -1);
  const open = (c) => (e) => { e.preventDefault(); if (onOpen) onOpen(c.number); };
  const item = (c, i, size) => (
    <FeedItem key={c.number} index={i} number={c.number} name={c.client} stack={c.stack}
      title={c.feedTitle} size={size} href="#" onClick={open(c)}
      cover={c.cover ? <img src={c.cover} alt="" style={{ width: '100%', display: 'block', aspectRatio: '16 / 10', objectFit: 'cover' }} /> : undefined} />
  );
  return (
    <div className="pf">
      <Header active={tag} onFilter={setTag} count={window.PF.heroMeta[1]} />
      <Hero lead={window.PF.lead} caption={window.PF.heroMeta[0]} strap={window.PF.heroMeta[1]} media="hero.avif" />
      <div className="pf-feed" style={{ paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-8)' }}>
        {rhythm(cases).map((row, r) => (
          row.length === 1
            ? item(row[0], 0, '1360×850')
            : <div className="pf-feed__pair" key={'p' + r}>{row.map((c, i) => item(c, i, '668×418'))}</div>
        ))}
        {cases.length === 0 && (
          <div className="pf-bleed"><Meta as="div" tone="inactive">Под этот фильтр кейсов пока нет</Meta></div>
        )}
      </div>
      <Footer line={window.PF.footer.line} contacts={window.PF.footer.contacts} cta={window.PF.footer.cta} />
    </div>
  );
}

function CaseScreen({ number = '01', onOpen, onHome }) {
  const list = window.PF.cases;
  const idx = Math.max(0, list.findIndex((c) => c.number === number));
  const c = list[idx];
  const next = list[(idx + 1) % list.length];
  const shot = ['wide', 'pair', 'wide'];
  return (
    <div className="pf">
      <Header onFilter={undefined} href="#" onClick={onHome ? (e) => { e.preventDefault(); onHome(); } : undefined} />
      <section className="pf-case-head">
        <Reveal index={0} className="pf-bleed">
          <Meta as="a" mono className="pf-case-back" href="#"
            onClick={onHome ? (e) => { e.preventDefault(); onHome(); } : undefined}>← Назад</Meta>
        </Reveal>
        <Reveal index={0}><h1 className="pf-case-h1">{c.h1}</h1></Reveal>
        <Reveal index={1} className="pf-bleed" style={{ marginTop: 'var(--space-6)' }}>
          <MetaRow number={c.number} name={c.client} stack={c.stack} />
        </Reveal>
      </section>
      {c.blocks.map((b, i) => (
        <React.Fragment key={b[0]}>
          <CaseBlock label={b[0]} index={2 + i}>{b[1]}</CaseBlock>
          {i < 3 && (
            <div className="pf-shots-gap">
              {i === 1 && c.shots && c.shots.wide ? (
                c.shots.wide.map((src, wi) => (
                  <CaseShots key={src} variant="full" index={2 + i} shots={[{ src, ratio: '16:10' }]} className={wi ? 'pf-shots-gap' : undefined} />
                ))
              ) : (
                <CaseShots variant={shot[i]} index={2 + i} shots={
                  i === 0 && c.cover ? [{ src: c.cover, ratio: '16:10' }]
                  : i === 1 && c.shots && c.shots.pair ? c.shots.pair.map((src) => ({ src, ratio: '4:5' }))
                  : i === 2 && c.shots && c.shots.wide2 ? [{ src: c.shots.wide2, ratio: c.shots.wide2Tall ? undefined : '16:10' }]
                  : undefined
                } />
              )}
            </div>
          )}
        </React.Fragment>
      ))}
      {c.extraShots && (
        <div className="pf-shots-gap">
          {Array.from({ length: c.extraShots }).map((_, p) => (
            <CaseShots key={p} variant="pair" index={5 + p} className={p ? 'pf-shots-gap' : undefined}
              shots={c.extraImgs && c.extraImgs[p] ? c.extraImgs[p].map((src) => ({ src, ratio: '4:5' })) : undefined} />
          ))}
        </div>
      )}
      <NextCase number={next.number} title={next.h1} href="#"
        onClick={onOpen ? (e) => { e.preventDefault(); onOpen(next.number); } : undefined} />
      <Footer line={window.PF.footer.line} contacts={window.PF.footer.contacts} cta={window.PF.footer.cta} />
    </div>
  );
}

function App({ start = 'home', startCase = '01' }) {
  const [view, setView] = React.useState(start === 'case' ? { name: 'case', id: startCase } : { name: 'home' });
  React.useEffect(() => { window.scrollTo(0, 0); }, [view]);
  return view.name === 'home'
    ? <HomeScreen onOpen={(id) => setView({ name: 'case', id })} />
    : <CaseScreen number={view.id} onOpen={(id) => setView({ name: 'case', id })} onHome={() => setView({ name: 'home' })} />;
}

Object.assign(window, { HomeScreen, CaseScreen, App });
