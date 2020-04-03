import styled from 'styled-components';

import { GridProps } from './interface';

import { Container } from '../Container';

export const GridStyle = styled(Container).attrs(({ display }: GridProps) => ({
  display: display || 'grid',
}))<GridProps>`
    ${({ columns }) => columns && `grid-template-columns:${columns};`}
    ${({ rows }) => rows && `grid-template-rows:${rows};`}
    ${({ areas }) => areas && `grid-template-areas:${areas};`}
    ${({ gap }) => gap && `grid-gap:${gap};`}
`;
