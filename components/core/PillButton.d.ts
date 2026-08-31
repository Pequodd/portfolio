/**
 * Кнопка-пилюля. На весь сборник ровно один призыв к действию.
 */
export interface PillButtonProps {
  children?: React.ReactNode;
  href?: string;
  /** Вариант для чёрного футера. @default false */
  inverse?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
export declare function PillButton(props: PillButtonProps): JSX.Element;
