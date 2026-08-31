import React from 'react';

/* Волосяная линия. Заменяет карточку, рамку и разделитель — других границ в системе нет. */
export function Rule({ className = '', style, ...rest }) {
  return <hr className={['pf-rule', className].filter(Boolean).join(' ')} style={style} {...rest} />;
}
