import React, { memo } from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import { useTheme } from 'styled-components';

import { TopBarModels } from './model';
import { FixedStyle, HeaderStyle, NavStyle } from './style';

import { useLang } from '../Lang/context';
import { Menu } from '../Menu';

export const TopBar = memo(() => {
  const { FixedModel, HeaderModel, NavModel } = new TopBarModels();
  const { toggleTheme } = useTheme() as any;
  const { toggleLocale } = useLang();

  return (
    <HeaderStyle {...HeaderModel}>
      <FixedStyle {...FixedModel}>
        <NavStyle {...NavModel}>
          <button onClick={toggleTheme}>Toggle Theme</button>
          <button onClick={toggleLocale}>Toggle Locale</button>
          <Menu  />
        </NavStyle>
      </FixedStyle>
    </HeaderStyle>
  );
});
