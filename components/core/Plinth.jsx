import React from 'react';

/* Плита: подложка #F4F4F2 с внутренним отступом 40 (мобильный 16).
   Именно она заставляет пёстрые рендеры читаться как одна система. */
export function Plinth({ children, className = '', style, ...rest }) {
  return (
    <div className={['pf-plinth', className].filter(Boolean).join(' ')} style={style} {...rest}>{children}</div>
  );
}
