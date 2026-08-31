import React from 'react';
import { Meta } from '../core/Meta';
import { Wordmark } from '../core/Wordmark';
import { Reveal } from '../core/Reveal';

/* Первый экран: вертикальные волосяные линии сетки, дисплей в две ступени
   (вторая строка со сдвигом на колонку), внизу слева подпись, справа абзац о студии. */
export function Hero({ lead, caption = 'Подборка кейсов', wordmark = 'ПОРТФОЛИО', second, strap, media, mediaSize = '2880×1040', className = '', style, ...rest }) {
  const ratio2 = second ? (second.length * 0.58).toFixed(3) : null;
  return (
    <section className={['pf-hero2', className].filter(Boolean).join(' ')} style={style} {...rest}>
      <div className="pf-hero2__media" style={media ? { backgroundImage: 'url(' + media + ')' } : undefined}>
        {!media && (<><span>фон</span><span>{mediaSize}</span></>)}
      </div>
      <Reveal index={0} className="pf-hero2__display"><Wordmark text={wordmark} /></Reveal>
      {second && (
        <Reveal index={1}>
          <span className="pf-hero2__line2" style={{ '--wordmark-ratio': ratio2 }}>{second}</span>
        </Reveal>
      )}
      <Reveal index={1} className="pf-hero2__strap">
        <Meta tone="ink">{caption}</Meta>
        {strap && <Meta>{strap}</Meta>}
      </Reveal>
      <div className="pf-hero2__foot">
        <Reveal className="pf-hero2__lead" index={3}><p className="pf-text">{lead}</p></Reveal>
      </div>
    </section>
  );
}
