import assets from '../../../assets';
import { FlexProps } from '../Flex/interface';

export interface Stop {
  offset: string;
  stopColor: string;
}

export interface Gradient {
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
  animates?: Array<Animate>;
}

export interface SvgAsset {
  paths: Array<Path>;
  viewBox: string;
  fill?: string;
  linearGradient?: Gradient;
  radialGradient?: Gradient;
}

export type VectorTypes = keyof typeof assets;
export interface SvgProps extends FlexProps {
  vector: VectorTypes;
  color?: string;
}
