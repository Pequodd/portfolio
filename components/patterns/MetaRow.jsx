import React from 'react';
import { Meta } from '../core/Meta';

/* Мета-строка — главный повторяющийся элемент: тонкая строка над каждым рендером,
   слева идентификатор моно, справа стек, под ней линия.
   На мобильном переносится в два уровня, а не сжимается. */
export function MetaRow({ number, name, stack, className = '', style, ...rest }) {
  const left = [number, name].filter(Boolean).join(' — ');
  return (
    <div className={['pf-metarow', className].filter(Boolean).join(' ')} style={style} {...rest}>
      <Meta mono tone="ink">{left}</Meta>
      {stack && <Meta>{stack}</Meta>}
    </div>
  );
}
