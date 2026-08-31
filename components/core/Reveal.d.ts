/** Обёртка единственной анимации: fade-up 16px / 600ms / stagger 80ms. */
export interface RevealProps {
  children?: React.ReactNode;
  /** Позиция в цепочке — умножается на 80ms. @default 0 */
  index?: number;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  style?: React.CSSProperties;
}
export declare function Reveal(props: RevealProps): JSX.Element;
