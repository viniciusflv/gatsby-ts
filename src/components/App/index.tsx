import React, { memo } from 'react';

import { GlobalStyle } from './style';

import { SEO } from '../SEO';
import { Theme } from '../Theme';

export const App = memo(({ children }) => {
  return (
    <Theme>
      <SEO />
      {children}
      <GlobalStyle />
    </Theme>
  );
});
