import React from 'react';
import { IntlProvider } from 'react-intl';

// @ts-ignore
import browserLang from 'browser-lang';
import { withPrefix } from 'gatsby';

const IntlContext = React.createContext({});

export const IntlContextProvider = IntlContext.Provider;
export const IntlContextConsumer = IntlContext.Consumer;

const polyfillIntl = (language: any) => {
  const locale = language.split('-')[0];
  try {
    if (!Intl.PluralRules) {
      require('@formatjs/intl-pluralrules/polyfill');
      require(`@formatjs/intl-pluralrules/dist/locale-data/${locale}`);
    }

    // @ts-ignore
    if (!Intl.RelativeTimeFormat) {
      require('@formatjs/intl-relativetimeformat/polyfill');
      require(`@formatjs/intl-relativetimeformat/dist/locale-data/${locale}`);
    }
  } catch (e) {
    throw new Error(`Cannot find react-intl/locale-data/${language}`);
  }
};

const withIntlProvider = (intl: any) => (children: any) => {
  polyfillIntl(intl.language);
  console.log('Add provider', intl);
  return (
    <IntlProvider
      locale={intl.language}
      defaultLocale={intl.defaultLanguage}
      messages={intl.messages}
    >
      <IntlContextProvider value={intl}>{children}</IntlContextProvider>
    </IntlProvider>
  );
};

export function wrapLang({ element, props }: any) {
  if (!props) {
    return;
  }

  const { pageContext, location } = props;
  const { intl } = pageContext;
  const { language, languages, redirect, routed, originalPath } = intl;

  // if (typeof window !== 'undefined') {
  //   // @ts-ignore
  //   window.___gatsbyIntl = intl;
  // }
  // /* eslint-disable no-undef */
  // const isRedirect = redirect && !routed;

  // if (isRedirect) {
  //   // Skip build, Browsers only
  //   if (typeof window !== 'undefined') {
  //     let detected =
  //       window.localStorage.getItem('gatsby-intl-language') ||
  //       browserLang({
  //         languages,
  //         fallback: language,
  //       });

  //     if (!languages.includes(detected)) {
  //       detected = language;
  //     }

  //     console.log(detected);

  //     const queryParams = location?.search || '';
  //     const newUrl = withPrefix(`/${detected}${originalPath}${queryParams}`);
  //     window.localStorage.setItem('gatsby-intl-language', detected);
  //     window.location.replace(newUrl);
  //   }
  // }

  polyfillIntl(intl.language);
  console.log('Add provider', intl);
  return (
    <IntlProvider
      locale={intl.language}
      defaultLocale={intl.defaultLanguage}
      messages={intl.messages}
    >
      <IntlContextProvider value={intl}>{element}</IntlContextProvider>
    </IntlProvider>
  );

  return withIntlProvider(intl)(element);
}
