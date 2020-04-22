import React, { memo } from 'react';

import { IntlProvider } from 'gatsby-plugin-intl';

import { GlobalStyle } from './style';

import { SEO } from '../SEO';
import { Theme } from '../Theme';

export const App = memo(({ children }) => {
  return (
    <IntlProvider locale='pt'>
      <Theme>
        <SEO />
        {children}
        <GlobalStyle />
      </Theme>
    </IntlProvider>
  );
});
