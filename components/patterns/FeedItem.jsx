import React from 'react';
import { MetaRow } from './MetaRow';
import { Plinth } from '../core/Plinth';
import { RenderPlaceholder } from '../core/RenderPlaceholder';
import { Reveal } from '../core/Reveal';

/* Элемент ленты: мета-строка, плита с обложкой 16:10, заголовок. */
export function FeedItem({ number, name, stack, title, href = '#', size, ratio = '16:10', cover, index = 0, className = '', style, ...rest }) {
  return (
    <Reveal index={index} as="article" className={['pf-item', className].filter(Boolean).join(' ')} style={style} {...rest}>
      <a className="pf-item__link" href={href}>
        <MetaRow number={number} name={name} stack={stack} />
        <Plinth>{cover || <RenderPlaceholder ratio={ratio} size={size} label="обложка" />}</Plinth>
        <h2 className="pf-item__title">{title}</h2>
      </a>
    </Reveal>
  );
}
