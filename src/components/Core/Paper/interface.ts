import { FlexProps } from '../Flex/interface';

export type PaperProps<T = {}> = FlexProps<
  T & {
    elevation?: number;
  }
>;
