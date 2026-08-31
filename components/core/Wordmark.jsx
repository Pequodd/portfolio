import React from 'react';

/* Слово-знак. Ровно от края до края экрана с учётом боковых полей,
   без искажения букв: моноширинный кегль вычисляется из ширины контейнера. */
export function Wordmark({ text = 'ПОРТФОЛИО', ghost = false, as = 'div', className = '', style, ...rest }) {
  const Tag = as;
  const ratio = (text.length * 0.58).toFixed(3);
  return (
    <Tag
      className={['pf-wordmark', ghost ? 'pf-wordmark--ghost' : '', className].filter(Boolean).join(' ')}
      style={{ '--wordmark-ratio': ratio, ...style }}
      {...rest}
    >{text}</Tag>
  );
}
