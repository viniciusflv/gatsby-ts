import React, { FC, memo, useEffect, useState } from 'react';

import { WrapRootElementBrowserArgs, WrapRootElementNodeArgs } from 'gatsby';

import { GlobalStyle } from './style';

import { RootElementArgs } from '../../../gatsby-api';
import { Lang } from '../Lang';
import { SEO } from '../SEO';
import { Theme } from '../Theme';

export const App: FC<RootElementArgs> = memo(({ children, ...props }) => {
  return (
    <Lang {...props}>
      <Theme>
        <SEO />
        {children}
        <GlobalStyle />
      </Theme>
    </Lang>
  );
});
