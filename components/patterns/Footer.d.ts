/**
 * Инверсный футер — единственный призыв к действию на весь сборник.
 */
export interface FooterProps {
  /** Крупная строка моно. */
  line?: string;
  /** Контакты: {value, href?}. */
  contacts?: { value: string; href?: string }[];
  /** @default "Написать в телеграм" */
  cta?: string;
  ctaHref?: string;
  className?: string;
  style?: React.CSSProperties;
}
export declare function Footer(props: FooterProps): JSX.Element;
