import React, { FC, memo, useEffect, useState } from 'react';

import { IntlProvider } from 'gatsby-plugin-intl';

import { GlobalStyle } from './style';

import { SEO } from '../SEO';
import { Theme } from '../Theme';

export const App: FC<any> = memo(({ loadPageSync, children }) => {
  const [locale, setLocale] = useState('');
  const [defaultLocale, setDefaultLocale] = useState('');
  const [messages, setMessages] = useState({});

  useEffect(() => {
    const {
      json: {
        pageContext: { intl, language },
      },
    } = loadPageSync(window?.location?.pathname);

    setLocale(language);
    setDefaultLocale(intl.defaultLanguage);
    setDefaultLocale(intl.messages);
  },        []);

  return (
    <IntlProvider
      locale={locale}
      defaultLocale={defaultLocale}
      messages={messages}
    >
      <Theme>
        <SEO />
        {children}
        <GlobalStyle />
      </Theme>
    </IntlProvider>
  );
});
