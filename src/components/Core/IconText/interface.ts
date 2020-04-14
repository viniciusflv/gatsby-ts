import { SvgProps, VectorTypes } from '../Svg/interface';
import { TextProps } from '../Text/interface';

export type IconProps = VectorTypes | SvgProps;

export interface IconTextProps extends Omit<TextProps, 'size'> {
  first?: IconProps;
  last?: IconProps;
  size?: number;
  fill?: string;
}
