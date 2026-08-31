/** Мета-подпись: 11px, капс, трекинг 0.1em. */
export interface MetaProps {
  children?: React.ReactNode;
  /** Моноширинный — только для идентификаторов (номера, названия). @default false */
  mono?: boolean;
  /** Цвет подписи. @default "meta" */
  tone?: 'meta' | 'ink' | 'inactive' | 'inverse';
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  style?: React.CSSProperties;
}
export declare function Meta(props: MetaProps): JSX.Element;
