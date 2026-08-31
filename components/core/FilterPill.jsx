import React from 'react';

/* Фильтр по тегу. Активный — контурная пилюля, не заливка. */
export function FilterPill({ children, active = false, onClick, className = '', style, ...rest }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={['pf-pill', className].filter(Boolean).join(' ')}
      style={style}
      {...rest}
    >{children}</button>
  );
}
