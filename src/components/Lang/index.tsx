import React, { FC, memo, useEffect, useState } from 'react';

import { changeLocale, IntlProvider } from 'gatsby-plugin-intl';

import { LangProvider } from './context';

import { RootElementArgs } from '../../../gatsby-api';

export const Lang: FC<RootElementArgs> = memo(({ children, loadPageSync }) => {
  const [locale, setLocale] = useState<string>();
  const [navigatorLocale, setNavigatorLocale] = useState('pt');
  const [defaultLocale, setDefaultLocale] = useState('pt');
  const [messages, setMessages] = useState({});

  useEffect(() => {
    if (locale) changeLocale(locale);
  },        [locale]);

  useEffect(() => {
    const page = loadPageSync(window?.location?.pathname);
    const { intl } = page?.json?.pageContext;

    setNavigatorLocale(window.navigator.language.split('-')[0]);
    setDefaultLocale(intl.defaultLanguage);
    setMessages(intl.messages);
  },        []);

  function toggleLocale() {
    setLocale((locale ?? navigatorLocale) === 'pt' ? 'en' : 'pt');
  }

  return (
    <IntlProvider
      locale={navigatorLocale}
      messages={messages}
      defaultLocale={defaultLocale}
    >
      <LangProvider value={{ toggleLocale }}>{children}</LangProvider>
    </IntlProvider>
  );
});
