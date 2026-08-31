import React from 'react';

/* Серая заглушка под будущий рендер с подписанным размером. */
export function RenderPlaceholder({ ratio = '16:10', size, label, className = '', style, ...rest }) {
  const [w, h] = ratio.split(':').map(Number);
  return (
    <div
      className={['pf-ph', className].filter(Boolean).join(' ')}
      style={{ aspectRatio: (w || 16) + ' / ' + (h || 10), ...style }}
      {...rest}
    >
      <span>{label || 'рендер'}</span>
      <span>{size ? size : ratio}</span>
    </div>
  );
}
