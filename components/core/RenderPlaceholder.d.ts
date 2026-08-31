/** Серая заглушка вместо рендера с подписанными пропорциями и размером. */
export interface RenderPlaceholderProps {
  /** Пропорции вида "16:10" или "4:5". @default "16:10" */
  ratio?: string;
  /** Подписанный размер, например "1280×800". */
  size?: string;
  /** Левая подпись. @default "рендер" */
  label?: string;
  className?: string;
  style?: React.CSSProperties;
}
export declare function RenderPlaceholder(props: RenderPlaceholderProps): JSX.Element;
