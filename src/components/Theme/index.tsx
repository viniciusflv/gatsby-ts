import React, { memo, useState } from 'react';

import { ThemeProvider } from 'styled-components';

import { dark, light } from './models';

export const Theme = memo(({ children }) => {
  const [toggle, setToggle] = useState(true);
  const toggleTheme = () => setToggle(!toggle);
  const applyThemeSwitcher = (theme: any) => ({ ...theme, toggleTheme });

  return (
    <ThemeProvider theme={applyThemeSwitcher(toggle ? light : dark)}>
      {children}
    </ThemeProvider>
  );
});
