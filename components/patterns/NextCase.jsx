import React from 'react';
import { Meta } from '../core/Meta';
import { Reveal } from '../core/Reveal';

/* Переход к следующему кейсу с его названием. */
export function NextCase({ label = 'Следующий кейс', number, title, href = '#', className = '', style, ...rest }) {
  return (
    <Reveal as="section" className={['pf-next', className].filter(Boolean).join(' ')} style={style} {...rest}>
      <Meta mono>{[label, number].filter(Boolean).join(' · ')}</Meta>
      <a href={href}><span className="pf-next__title">{title}</span></a>
    </Reveal>
  );
}
