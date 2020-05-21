import { useEffect, useState } from 'react';

import { changeLocale } from 'gatsby-plugin-intl';

import { LoadPageSync } from '../../../gatsby-api';

export function useHooks(loadPageSync: LoadPageSync) {
  const initialLocale = 'en';
  const [locale, setLocale] = useState<string>();
  const [navigatorLocale, setNavigatorLocale] = useState(initialLocale);
  const [defaultLocale, setDefaultLocale] = useState(initialLocale);
  const [messages, setMessages] = useState({});

  useEffect(() => {
    if (locale) changeLocale(locale);
  },        [locale]);

  useEffect(() => {
    const page = loadPageSync(window?.location?.pathname);
    const { intl } = page?.json?.pageContext;
    const navigatorLanguage = window.navigator.language.split('-')[0];

    if (navigatorLanguage !== initialLocale) changeLocale(navigatorLanguage);
    setNavigatorLocale(navigatorLanguage);
    setDefaultLocale(intl.defaultLanguage);
    setMessages(intl.messages);
  },        []);

  function toggleLocale() {
    setLocale((locale ?? navigatorLocale) === 'pt' ? 'en' : 'pt');
  }

  return {
    locale: locale ?? navigatorLocale,
    toggleLocale,
    navigatorLocale,
    messages,
    defaultLocale,
  };
}
