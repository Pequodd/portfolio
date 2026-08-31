/**
 * Гигантский моноширинный вордмарк, растянутый от поля до поля.
 */
export interface WordmarkProps {
  /** Слово знака. Кегль считается от числа знаков. @default "ПОРТФОЛИО" */
  text?: string;
  /** Тёмный вариант #1F1F1F на чёрном — почти неразличимо. @default false */
  ghost?: boolean;
  /** Тег обёртки. @default "div" */
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  style?: React.CSSProperties;
}
export declare function Wordmark(props: WordmarkProps): JSX.Element;
