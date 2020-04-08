import React, { memo } from 'react';

import { useTheme } from 'styled-components';

import assets from '../../assets';
import { Flex } from '../Core/Flex';
import { Text } from '../Core/Text';
import { TextTypes } from '../Core/Text/interface';

export default memo(() => {
  const { viewBox, fill, paths } = assets('person');
  const { toggleTheme } = useTheme() as any;

  return (
    <Flex direction='column'>
      <Text text='Headline Style' type={TextTypes.H1} />
      <Text text='Subhead Style' type={TextTypes.H2} />
      <Text text='Title Style' type={TextTypes.H3} />
      <Text text='Subtitle Style' type={TextTypes.H4} />
      <Text text='Paragraph Style' type={TextTypes.P} />
      <Text>aaa</Text>
      <button onClick={toggleTheme}>Toggle</button>
    </Flex>
  );
});
