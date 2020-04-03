import * as assets from '../../../assets';

export type VectorTypes = keyof typeof assets;
export interface SvgProps {
  vector: VectorTypes;
  color?: string;
}
