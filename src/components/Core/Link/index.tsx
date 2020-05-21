import React, { FC } from 'react';

import { join } from 'path';

import { LinkStyle, TextStyle } from './style';

import { useLang } from '../../Lang/context';

export const Link: FC<any> = ({ children, to }) => {
  const { locale } = useLang();

  return (
    <LinkStyle to={join(`/${locale}`, to)}>
      <TextStyle color='white'>{children}</TextStyle>
    </LinkStyle>
  );
};
