import React from 'react';

/* Единственный эффект системы: появление снизу на 16px с прозрачностью,
   600ms, плавное замедление, сдвиг 80ms между соседями. Без привязки к скроллу. */
export function Reveal({ children, index = 0, as = 'div', className = '', style, ...rest }) {
  const Tag = as;
  return (
    <Tag
      className={['pf-reveal', className].filter(Boolean).join(' ')}
      style={{ '--pf-i': index, ...style }}
      {...rest}
    >{children}</Tag>
  );
}
