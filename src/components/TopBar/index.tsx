import React, { memo, useEffect, useState } from 'react';

import { changeLocale, useIntl } from 'gatsby-plugin-intl';
import { useTheme } from 'styled-components';

import { TopBarModels } from './model';
import { FixedStyle, HeaderStyle, NavStyle } from './style';

export const TopBar = memo(() => {
  const [locale, setLocale] = useState(useIntl().locale);
  const { toggleTheme } = useTheme() as any;
  const { FixedModel, HeaderModel, NavModel } = new TopBarModels();

  useEffect(() => { changeLocale(locale); }, [locale]);

  function toggleLocale() {
    setLocale(locale === 'pt' ? 'en' : 'pt');
  }

  return (
    <HeaderStyle {...HeaderModel}>
      <FixedStyle {...FixedModel}>
        <NavStyle {...NavModel}>
          <button onClick={toggleTheme}>Toggle Theme</button>
          <button onClick={toggleLocale}>Toggle Locale</button>
        </NavStyle>
      </FixedStyle>
    </HeaderStyle>
  );
});
