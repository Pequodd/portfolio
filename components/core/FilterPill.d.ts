/** Фильтр по тегу в хедере: активное состояние — контур, никогда не заливка. */
export interface FilterPillProps {
  children?: React.ReactNode;
  /** @default false */
  active?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  style?: React.CSSProperties;
}
export declare function FilterPill(props: FilterPillProps): JSX.Element;
