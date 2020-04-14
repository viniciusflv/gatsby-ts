import { IconProps, IconTextProps } from './interface';

import { FlexProps } from '../Flex/interface';
import { SvgProps } from '../Svg/interface';
import { TextProps } from '../Text/interface';

export class IconTextModel {
  public WrapperModel: FlexProps;
  public TextModel: TextProps;
  public FirstIconModel: SvgProps | any;
  public LastIconModel: SvgProps | any;

  constructor({
    direction,
    first,
    last,
    fill,
    size = 1,
    ...props
  }: IconTextProps) {
    function vectorHandler(vector?: IconProps) {
      const vectorProps = {
        color: fill,
        width: `${size + 0.5}em`,
        height: `${size + 0.5}em`,
      };
      return typeof vector === 'string'
        ? { ...vectorProps, vector }
        : { ...vector, ...vectorProps };
    }

    this.WrapperModel = {
      justifyContent: 'center',
      alignItems: 'center',
      direction,
    };
    this.TextModel = {
      grow: '2',
      margin: '.1em',
      position: 'relative',
      ...props,
      size: `${size}em`,
    };
    this.FirstIconModel = vectorHandler(first);
    this.LastIconModel = vectorHandler(last);
  }
}
