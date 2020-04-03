import { ContainerProps } from '../Container/interface';

export type GridProps<T= {}> = ContainerProps<T
& {
    areas?: string;
    columns?: string;
    rows?: string;
    gap?: string;
}>;
