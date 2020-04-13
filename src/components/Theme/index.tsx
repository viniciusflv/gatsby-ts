import React, { memo, useState } from 'react';

import { ThemeProvider } from 'styled-components';

import { dark, light } from './models';

export const Theme = memo(({ children }) => {
  const [toggle, setToggle] = useState(true);
  const toggleTheme = () => setToggle(!toggle);
  const applyThemeSwitcher = (theme: any) => ({ ...theme, toggleTheme });

  const hour = new Date().getHours();
  const themes =
    hour > 17 || hour < 9 ? (toggle ? dark : light) : toggle ? light : dark;

  return (
    <ThemeProvider theme={applyThemeSwitcher(themes)}>{children}</ThemeProvider>
  );
});
