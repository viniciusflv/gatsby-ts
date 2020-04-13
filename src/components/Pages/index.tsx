import React, { memo } from 'react';

import { useTheme } from 'styled-components';

import { Flex } from '../Core/Flex';
import { Svg } from '../Core/Svg';
import { Text } from '../Core/Text';
import { TextTypes } from '../Core/Text/interface';

export default memo(() => {
  const { toggleTheme } = useTheme() as any;

  return (
    <Flex direction='column'>
      <Text text='Headline Style' type={TextTypes.H1} />
      <Text text='Subhead Style' type={TextTypes.H2} />
      <Text text='Title Style' type={TextTypes.H3} />
      <Text text='Subtitle Style' type={TextTypes.H4} />
      <Text text='Paragraph Style' type={TextTypes.P} />
      <Text>aaa</Text>
      <Svg vector='agibank' width='200px' />
      <button onClick={toggleTheme}>Toggle</button>
    </Flex>
  );
});
