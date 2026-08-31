import React from 'react';
import { Meta } from '../core/Meta';
import { PillButton } from '../core/PillButton';

/* Инверсный футер: одна крупная строка моно, контакты, одна пилюля. */
export function Footer({ line, contacts = [], cta = 'Написать в телеграм', ctaHref = '#', className = '', style, ...rest }) {
  return (
    <footer className={['pf-footer', className].filter(Boolean).join(' ')} style={style} {...rest}>
      <p className="pf-footer__line">{line}</p>
      <div className="pf-footer__row">
        <div className="pf-footer__contacts">
          {contacts.map((c, i) => (
            c.href
              ? <a key={i} href={c.href}><Meta tone="inverse">{c.value}</Meta></a>
              : <Meta key={i} tone="inverse" as="div">{c.value}</Meta>
          ))}
        </div>
        <PillButton inverse href={ctaHref}>{cta}</PillButton>
      </div>
    </footer>
  );
}
