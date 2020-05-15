import React, { FC, memo } from 'react';

import { IntlProvider } from 'gatsby-plugin-intl';

import { GlobalStyle } from './style';

import { SEO } from '../SEO';
import { Theme } from '../Theme';

export const App: FC<any> = memo(({ loadPageSync, children }) => {
  const {
    json: {
      pageContext: { intl, language },
    },
  } = loadPageSync(location.pathname);

  console.log(intl);

  return (
    <IntlProvider
      locale={language}
      defaultLocale={intl.defaultLanguage}
      messages={intl.messages}
    >
      <Theme>
        <SEO />
        {children}
        <GlobalStyle />
      </Theme>
    </IntlProvider>
  );
});
