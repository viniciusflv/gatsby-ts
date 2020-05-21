import React, { FC, memo } from 'react';

import { IntlProvider } from 'gatsby-plugin-intl';

import { LangProvider } from './context';
import { useHooks } from './hooks';

import { RootElementArgs } from '../../../gatsby-api';

export const Lang: FC<RootElementArgs> = memo(({ children, loadPageSync }) => {
  const {
    locale,
    toggleLocale,
    navigatorLocale,
    messages,
    defaultLocale
  } = useHooks(loadPageSync);

  return (
    <IntlProvider
      locale={navigatorLocale}
      messages={messages}
      defaultLocale={defaultLocale}
    >
      <LangProvider value={{ toggleLocale, locale }}>{children}</LangProvider>
    </IntlProvider>
  );
});
