/**
 * Кейс в ленте: мета-строка + плита с обложкой + заголовок.
 */
export interface FeedItemProps {
  number?: string;
  name?: string;
  stack?: string;
  /** Заголовок в ленте — гротеск 500, не моно. */
  title?: string;
  href?: string;
  /** Подписанный размер заглушки, например "1360×850". */
  size?: string;
  /** @default "16:10" */
  ratio?: string;
  /** Готовый рендер вместо заглушки. */
  cover?: React.ReactNode;
  /** Позиция для сдвига анимации. @default 0 */
  index?: number;
  className?: string;
  style?: React.CSSProperties;
}
export declare function FeedItem(props: FeedItemProps): JSX.Element;
