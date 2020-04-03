import styled from 'styled-components';

import { FlexProps } from './interface';

import { Container } from '../Container';

export const FlexStyle = styled(Container).attrs(({ display }: FlexProps) => ({
  display: display || 'flex'
}))<FlexProps>`
    ${({ theme }) => { console.log(theme); return ''; }}
    ${({ direction }) => direction && `flex-direction:${direction};`}
    ${({ justifyContent }) => justifyContent && `justify-content:${justifyContent};`}
    ${({ alignItems }) => alignItems && `align-items:${alignItems};`}
    ${({ wrap }) => wrap && `flex-wrap:${wrap};`}
    ${({ gap }) => gap && `> * { margin:${gap} !important; }`}
`;
