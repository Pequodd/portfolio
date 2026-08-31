import React from 'react';
import { Meta } from '../core/Meta';
import { FilterPill } from '../core/FilterPill';

/* Липкий хедер: знак слева, фильтры тремя колонками мелким капсом,
   справа счёт проектов. Активный фильтр — контурная пилюля, не заливка. */
export function Header({ mark = 'ПОРТФОЛИО', filters = [], active, onFilter, count, href = '#', className = '', style, ...rest }) {
  return (
    <header className={['pf-header', className].filter(Boolean).join(' ')} style={style} {...rest}>
      <a className="pf-header__mark" href={href}>{mark}</a>
      {filters.length > 0 && (
        <nav className="pf-filters">
          {filters.map((t) => (
            <FilterPill key={t} className="pf-pill--plain" active={t === active} onClick={onFilter ? () => onFilter(t) : undefined}>{t}</FilterPill>
          ))}
        </nav>
      )}
      {count && <div className="pf-header__count"><Meta>{count}</Meta></div>}
    </header>
  );
}
