import assets from '../../../assets';

export interface Stop {
  offset: string;
  stopColor: string;
}

export interface Gradient {
  type: string;
  stops: Array<Stop>;
}

export interface Animate {
  fill: string;
  begin: string;
  dur: string;
  repeatCount: string;
  attributeName: string;
  to: string;
}

export interface Path {
  d: string;
  fill?: string;
  gradient?: Gradient;
  animate?: Animate;
}

export interface SvgAsset {
  paths: Array<Path>;
  viewBox: string;
  fill?: string;
}

export type VectorTypes = keyof typeof assets;
export interface SvgProps {
  vector: VectorTypes;
  color?: string;
}
