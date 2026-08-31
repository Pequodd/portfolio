/** Рендеры между блоками кейса: широкий кадр 16:10 либо пара вертикальных 4:5. */
export interface CaseShotsProps {
  /** @default "wide" */
  variant?: 'wide' | 'pair';
  /** Переопределение кадров. */
  shots?: { ratio?: string; size?: string; label?: string; src?: string }[];
  index?: number;
  className?: string;
  style?: React.CSSProperties;
}
export declare function CaseShots(props: CaseShotsProps): JSX.Element;
