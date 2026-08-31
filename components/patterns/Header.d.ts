/** Липкий хедер с волосяной линией снизу: знак слева, фильтры тремя колонками, счёт справа. */
export interface HeaderProps {
  /** Текст знака. @default "ПОРТФОЛИО" */
  mark?: string;
  /** Теги фильтров. */
  filters?: string[];
  /** Активный тег. */
  active?: string;
  onFilter?: (tag: string) => void;
  /** Счёт справа, например "8 проектов". */
  count?: string;
  href?: string;
  className?: string;
  style?: React.CSSProperties;
}
export declare function Header(props: HeaderProps): JSX.Element;
