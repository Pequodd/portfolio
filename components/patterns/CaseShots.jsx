import React from 'react';
import { Plinth } from '../core/Plinth';
import { RenderPlaceholder } from '../core/RenderPlaceholder';
import { Reveal } from '../core/Reveal';

/* Рендеры внутри кейса: одна широкая плита 16:10 или пара вертикальных 4:5. */
export function CaseShots({ variant = 'wide', shots, index = 0, className = '', style, ...rest }) {
  const items = shots && shots.length
    ? shots
    : variant === 'pair'
      ? [{ ratio: '4:5', size: '640×800', label: 'кадр' }, { ratio: '4:5', size: '640×800', label: 'кадр' }]
      : [{ ratio: '16:10', size: '1360×850', label: 'кадр' }];
  const frame = (s) => s.src
    ? <img src={s.src} alt="" style={{ width: '100%', display: 'block', aspectRatio: s.ratio ? s.ratio.replace(':', ' / ') : undefined, objectFit: 'cover' }} />
    : <RenderPlaceholder ratio={s.ratio} size={s.size} label={s.label} />;
  if (variant === 'pair') {
    return (
      <Reveal index={index} className={['pf-shots', className].filter(Boolean).join(' ')} style={style} {...rest}>
        {items.map((s, i) => (
          <Plinth key={i}>{frame(s)}</Plinth>
        ))}
      </Reveal>
    );
  }
  return (
    <Reveal index={index} className={['pf-bleed', className].filter(Boolean).join(' ')} style={style} {...rest}>
      <Plinth>{frame(items[0])}</Plinth>
    </Reveal>
  );
}
