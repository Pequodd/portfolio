import React from 'react';

/* Единственная кнопка сборника и единственный радиус в системе. */
export function PillButton({ children, href = '#', inverse = false, className = '', style, ...rest }) {
  return (
    <a
      href={href}
      className={['pf-cta', inverse ? 'pf-cta--inverse' : '', className].filter(Boolean).join(' ')}
      style={style}
      {...rest}
    >{children}</a>
  );
}
