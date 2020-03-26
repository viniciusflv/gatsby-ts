import React, { memo } from 'react';

import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './style';

import { theme } from '../../themes';
import { SEO } from '../SEO';

export const App = memo(({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <SEO />
      {children}
      <GlobalStyle />
    </ThemeProvider>
  );
});
