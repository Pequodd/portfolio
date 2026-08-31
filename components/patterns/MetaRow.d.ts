/**
 * Тонкая мета-строка над рендером с волосяной линией снизу.
 */
export interface MetaRowProps {
  /** Номер кейса, например "01". */
  number?: string;
  /** Клиент по отрасли, без имени. */
  name?: string;
  /** Стек и год: "Tilda · многостраничный · с нуля · 2024". */
  stack?: string;
  className?: string;
  style?: React.CSSProperties;
}
export declare function MetaRow(props: MetaRowProps): JSX.Element;
