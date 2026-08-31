import React from 'react';

/* Мета-подпись 11px капсом. mono=true — идентификаторы (номер, название);
   mono=false — подписи и проза-мелочь. Внутри одного блока не смешивать. */
export function Meta({ children, mono = false, tone = 'meta', as = 'span', className = '', style, ...rest }) {
  const Tag = as;
  const tones = { meta: '', ink: 'pf-meta--ink', inactive: 'pf-meta--inactive', inverse: 'pf-meta--inverse' };
  return (
    <Tag
      className={['pf-meta', mono ? 'pf-meta--mono' : '', tones[tone] || '', className].filter(Boolean).join(' ')}
      style={style}
      {...rest}
    >{children}</Tag>
  );
}
