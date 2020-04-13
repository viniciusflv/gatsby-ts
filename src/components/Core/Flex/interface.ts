import { ContainerProps } from '../Container/interface';

export type FlexProps<T = {}> = ContainerProps<
  T & {
    direction?: string;
    justifyContent?: string;
    alignItems?: string;
    wrap?: string;
    gap?: string;
  }
>;
