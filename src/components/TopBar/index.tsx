import React, { memo, useState } from 'react';

import { useTheme } from 'styled-components';

import { TopBarModels } from './model';
import { FixedStyle, HeaderStyle, NavStyle } from './style';

export const TopBar = memo(() => {
  const { toggleTheme } = useTheme() as any;
  const { FixedModel, HeaderModel, NavModel } = new TopBarModels();

  return (
    <HeaderStyle {...HeaderModel}>
      <FixedStyle {...FixedModel}>
        <NavStyle {...NavModel}>
          <button onClick={toggleTheme}>Toggle</button>
        </NavStyle>
      </FixedStyle>
    </HeaderStyle>
  );
});
