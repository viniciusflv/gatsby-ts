import { BaseProps } from '../Base/interface';

export interface Y<T> {
  top?: T;
  bottom?: T;
}

export interface X<T> {
  left?: T;
  right?: T;
}

export interface XY<T> extends X<T>, Y<T> {}

export interface BorderRadius extends Y<X<string> | string> {}

export interface Border extends XY<string> {
  radius?: BorderRadius | string;
}

export type ContainerProps<T = {}> = BaseProps<
  T &
    XY<string> & {
      outline?: string;
      position?: string;
      transform?: string;
      objectFit?: string;
      area?: string;
      height?: string;
      minHeight?: string;
      maxHeight?: string;
      width?: string;
      minWidth?: string;
      maxWidth?: string;
      fullWidth?: boolean;
      overflow?: string;
      color?: string;
      backgroundImage?: string;
      backgroundColor?: string;
      boxShadow?: string;
      font?: string;
      borderCollapse?: string;
      contain?: boolean;
      align?: string;
      borderRadius?: BorderRadius | string;
      border?: Border | string;
      margin?: XY<string> | string;
      padding?: XY<string> | string;
    }
>;
