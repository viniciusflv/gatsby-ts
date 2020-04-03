import React, { ComponentType, FC, memo } from 'react';

import { TextProps, TextTypes } from './interface';
import * as TextStyles from './style';

export const Text: FC<TextProps> = memo(
  ({ children, text, type = TextTypes.Span, ...props }) => {
    const Tag = TextStyles[type];
    const content = children ?? text;

    return typeof content === 'string'
      ? <Tag dangerouslySetInnerHTML={{ __html: content }} {...props} />
      : <Tag {...props}>{content}</Tag>;
  }
);
