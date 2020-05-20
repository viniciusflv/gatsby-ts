import { createContext, useContext } from 'react';

import { useIntl } from 'gatsby-plugin-intl';

export const LangContext = createContext<{ toggleLocale?: () => void }>({});
export const LangProvider = LangContext.Provider;

export function useLang() {
  return Object.assign(useContext(LangContext), useIntl());
}
