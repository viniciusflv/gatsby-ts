import { ComponentType } from 'react';

import * as TextStyles from './style';

import { ContainerProps } from '../Container/interface';

export enum TextTypes {
  Span = 'SpanStyle',
  H1 = 'H1Style',
  H2 = 'H2Style',
  H3 = 'H3Style',
  H4 = 'H4Style',
  // Hr = 'HrStyle',
  // Caption = 'CaptionStyle',
  // Th = 'ThStyle',
  // Td = 'TdStyle',
  // Li = 'ListItemStyle',
  P = 'ParagraphStyle',
  // A = 'AnchorStyle',
  // Label = 'LabelStyle',
  // Option = 'OptionStyle',
  // I = 'ItalicStyle',
}

export interface TextProps extends ContainerProps {
  type?: TextTypes;
  text?: ComponentType<any> | string;
  align?: string;
  indent?: string;
  shadow?: string;
  transform?: string;
  decoration?: string;
  size?: string;
  weight?: string;
  family?: string;
  fontStyle?: string;
  color?: string;
  wordBreak?: string;
  whiteSpace?: string;
  direction?: string;
  spacing?: string;
  lineHeight?: string;
  stroke?: string;
}
