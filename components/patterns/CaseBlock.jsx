import React from 'react';
import { Meta } from '../core/Meta';
import { Reveal } from '../core/Reveal';

/* Блок страницы кейса: слева подпись мелким капсом, справа текст до 64 знаков. */
export function CaseBlock({ label, children, index = 0, className = '', style, ...rest }) {
  return (
    <Reveal index={index} as="section" className={['pf-block', className].filter(Boolean).join(' ')} style={style} {...rest}>
      <div className="pf-block__label"><Meta mono tone="ink">{label}</Meta></div>
      <div className="pf-block__body">
        {typeof children === 'string'
          ? children.split('\n').filter(Boolean).map((t, i) => <p key={i} className="pf-text" style={i ? { marginTop: 'var(--space-3)' } : undefined}>{t}</p>)
          : <p className="pf-text">{children}</p>}
      </div>
    </Reveal>
  );
}
