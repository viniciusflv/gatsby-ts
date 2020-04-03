import React, { FC, memo } from 'react';

import { useTheme } from 'styled-components';

import { Flex } from '../Core/Flex';
import { Grid } from '../Core/Grid';
import { SEO } from '../SEO';
import { TopBar } from '../TopBar';

export const Layout: FC<any> = memo(({ children, path }) => {
  const { backgroundColor } = useTheme() as any;

  return (
    <Grid backgroundColor={backgroundColor} width='100%' height='100%' rows='auto 1fr'>
      <SEO path={path} />
      <TopBar />
      <Flex maxWidth='1200px' width='100%' height='100%' direction='column' grow='2' padding='20px' margin='0 auto'>
        {children}
      </Flex>
    </Grid>
  );
});
