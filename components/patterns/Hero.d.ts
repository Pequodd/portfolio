/**
 * Первый экран: вертикальные линии сетки, дисплей в две ступени, подпись и абзац внизу.
 */
export interface HeroProps {
  /** Абзац о студии на 2–3 строки. */
  lead?: string;
  /** Подпись слева внизу. @default "Подборка кейсов" */
  caption?: string;
  /** Правая часть строки под вордмарком, например "8 проектов". */
  strap?: string;
  /** Вторая ступень дисплея, со сдвигом на колонку. */
  second?: string;
  /** URL фонового изображения верхней полосы; без него — подписанная заглушка. */
  media?: string;
  /** Подписанный размер заглушки фона. @default "2880×1040" */
  mediaSize?: string;
  /** @default "ПОРТФОЛИО" */
  wordmark?: string;
  className?: string;
  style?: React.CSSProperties;
}
export declare function Hero(props: HeroProps): JSX.Element;
