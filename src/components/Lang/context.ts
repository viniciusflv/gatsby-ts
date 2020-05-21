import { createContext, useContext } from 'react';

import { useIntl } from 'gatsby-plugin-intl';

export const LangContext = createContext({});
export const LangProvider = LangContext.Provider;

export function useLang() {
  return Object.assign(useIntl(), useContext(LangContext));
}
