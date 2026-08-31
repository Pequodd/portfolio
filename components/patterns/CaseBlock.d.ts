/**
 * Двухколоночный блок кейса с линией сверху.
 * Подписи в системе ровно четыре: Задача / Исходные данные / Что сделали / Результат.
 * Строка с переводами строк разбивается на абзацы с шагом 16px.
 */
export interface CaseBlockProps {
  label?: 'Задача' | 'Исходные данные' | 'Что сделали' | 'Результат' | string;
  children?: React.ReactNode;
  index?: number;
  className?: string;
  style?: React.CSSProperties;
}
export declare function CaseBlock(props: CaseBlockProps): JSX.Element;
