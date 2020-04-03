import styled from 'styled-components';

import { TextProps } from './interface';

import { Container } from '../Container';

export const TextStyle = styled(Container).attrs({ as: 'span' })<TextProps>`
  font-stretch: inherit;
  font-family: inherit;
  word-spacing: inherit;
  text-align: inherit;
  text-indent: inherit;
  text-shadow: inherit;
  text-transform: inherit;
  text-decoration: none;
  font-size: 12px;
  font-weight: inherit;
  font-style: inherit;
  color: inherit;
  word-break: inherit;
  white-space: inherit;
  direction: inherit;
  letter-spacing: inherit;
  line-height: unset;
  ${({ wordBreak }) => wordBreak && 'word-break: break-all;'}
  ${({ whiteSpace }) => whiteSpace && `white-space: ${whiteSpace};`}
  ${({ family }) => family && `font-family: ${family};`}
  ${({ size }) => size && `font-size: ${size};`}
  ${({ weight }) => weight && `font-weight: ${weight};`}
  ${({ color }) => color && `color: ${color};`}
  ${({ align }) => align && `text-align: ${align};`}
  ${({ decoration }) => decoration && `text-decoration: ${decoration};`}
  ${({ transform }) => transform && `text-transform: ${transform};`}
  ${({ indent }) => indent && `text-indent: ${indent};`}
  ${({ shadow }) => shadow && `text-shadow: ${shadow};`}
  ${({ spacing }) => spacing && `letter-spacing: ${spacing};`}
  ${({ direction }) => direction && `direction: ${direction};`}
  ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight};`}
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ padding }) => padding && `padding: ${padding};`}
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
  ${({ minWidth }) => minWidth && `min-width: ${minWidth};`}
  ${({ stroke }) =>
    stroke &&
    `
    text-shadow:
      -1px 0 ${stroke},
      0 1px ${stroke},
      1px 0 ${stroke},
      0 -1px ${stroke};
  `}
`;

export const SpanStyle = styled(TextStyle).attrs(({ theme }) => theme.span)``;

export const H1Style = styled(SpanStyle).attrs(({ theme }) => ({
  ...theme.headline,
  as: 'h1',
}))``;

export const H2Style = styled(SpanStyle).attrs(({ theme }) => ({
  ...theme.subhead,
  as: 'h2',
}))``;

export const H3Style = styled(SpanStyle).attrs(({ theme }) => ({
  ...theme.title,
  as: 'h3',
}))``;

export const H4Style = styled(SpanStyle).attrs(({ theme }) => ({
  ...theme.subtitle,
  as: 'h4',
}))``;

export const ParagraphStyle = styled(SpanStyle).attrs(({ theme }) => ({
  ...theme.paragraph,
  as: 'p',
}))``;
