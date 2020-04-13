import styled from 'styled-components';

import { Border, BorderRadius, ContainerProps, X, XY, Y } from './interface';

import { Base } from '../Base';

const getXYRadius = (
  yKey: keyof Y<string>,
  xKey: keyof X<string>,
  xy: string
) => {
  return `
        border-${yKey}-${xKey}-radius: ${xy};
        border-${yKey}-${xKey}-radius: ${xy};
    `;
};

const getYRadius = (key: keyof Y<string>, x: X<string> | string) => {
  if (x === 'string') {
    return `
            border-${key}-left-radius: ${x};
            border-${key}-right-radius: ${x};
        `;
  }
  const { left, right } = x as X<string>;
  let xy = '';

  if (left) xy += getXYRadius(key, 'left', left);
  if (right) xy += getXYRadius(key, 'right', right);

  return xy;
};

const getTopRadius = (top: X<string> | string) => {
  return getYRadius('top', top);
};

const getBottomRadius = (bottom: X<string> | string) => {
  return getYRadius('bottom', bottom);
};

const getRadius = (radius: BorderRadius | string) => {
  if (typeof radius === 'string') return `border-radius: ${radius};`;

  const { top, bottom } = radius;
  let xyRadius = '';

  if (top) xyRadius += getTopRadius(top);
  if (bottom) xyRadius += getBottomRadius(bottom);

  return xyRadius;
};

const getXY = (key: string, props: XY<string> | string) => {
  if (typeof props === 'string') return `${[key]}: ${props};`;

  const { top, bottom, left, right } = props;
  let xy = '';

  if (top) xy += `${[key]}-top: ${top};`;
  if (bottom) xy += `${[key]}-bottom: ${bottom};`;
  if (left) xy += `${[key]}-left: ${left};`;
  if (right) xy += `${[key]}-right: ${right};`;

  return xy;
};

const getBorder = (border: Border | string) => {
  let borderAcc = getXY('border', border);

  if (typeof border !== 'string' && border.radius) {
    borderAcc += getRadius(border.radius as Border);
  }

  return borderAcc;
};

const getMargin = (margin: XY<string> | string) => {
  return getXY('margin', margin);
};

const getPadding = (padding: XY<string> | string) => {
  return getXY('padding', padding);
};

export const ContainerStyle = styled(Base)<ContainerProps>`
    margin: 0;
    padding: 0;
    border: none;
    background-color: transparent;
    ${({ outline }) => outline && `outline: ${outline};`}
    ${({ top }) => top && `top: ${top};`}
    ${({ bottom }) => bottom && `bottom: ${bottom};`}
    ${({ right }) => right && `right: ${right};`}
    ${({ left }) => left && `left: ${left};`}
    ${({ position }) => position && `position: ${position};`}
    ${({ transform }) => transform && `transform: ${transform};`}
    ${({ objectFit }) => objectFit && `object-fit: ${objectFit};`}
    ${({ area }) => area && `grid-area: ${area};`}
    ${({ height }) => height && `height: ${height};`}
    ${({ minHeight }) => minHeight && `min-height: ${minHeight};`}
    ${({ maxHeight }) => maxHeight && `max-height: ${maxHeight};`}
    ${({ width }) => width && `width: ${width};`}
    ${({ minWidth }) => minWidth && `min-width: ${minWidth};`}
    ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
    ${({ fullWidth }) => fullWidth && `width: 100%;`}
    ${({ overflow }) => overflow && `overflow: ${overflow};`}
    ${({ color }) => color && `color: ${color};`}
    ${({ font }) => font && `font: ${font};`}
    ${({ backgroundImage }) =>
      backgroundImage && `background-image: ${backgroundImage};`}
    ${({ backgroundColor }) =>
      backgroundColor && `background-color: ${backgroundColor};`}
    ${({ boxShadow }) => boxShadow && `box-shadow: ${boxShadow};`}
    ${({ borderCollapse }) =>
      borderCollapse && `border-collapse: ${borderCollapse};`}
    ${({ border }) => border && getBorder(border)}
    ${({ borderRadius }) => borderRadius && getRadius(borderRadius)}
    ${({ align }) => align && `text-align: ${align};`}
    ${({ contain }) =>
      contain &&
      `
        width: 100%;
        max-width: 1024px;
        margin: 0 auto;
        padding: 0 20px;
    `}
    ${({ margin }) => margin && getMargin(margin)}
    ${({ padding }) => padding && getPadding(padding)}
`;
