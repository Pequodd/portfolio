/**
 * Подложка под рендер: #F4F4F2, внутренний отступ 40px (16px на мобильном).
 * Рендер никогда не кладётся прямо на белое.
 */
export interface PlinthProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
export declare function Plinth(props: PlinthProps): JSX.Element;
