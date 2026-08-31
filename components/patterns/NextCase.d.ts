/** Переход к следующему кейсу внизу страницы кейса. */
export interface NextCaseProps {
  /** @default "Следующий кейс" */
  label?: string;
  number?: string;
  title?: string;
  href?: string;
  className?: string;
  style?: React.CSSProperties;
}
export declare function NextCase(props: NextCaseProps): JSX.Element;
