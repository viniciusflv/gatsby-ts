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
      <Text text='HeadlineStyle' type={TextTypes.H1} />
      <Text text='SubheadStyle' type={TextTypes.H2} />
      <Text text='TitleStyle' type={TextTypes.H3} />
      <Text text='SubtitleStyle' type={TextTypes.H4} />
      <Text text='ParagraphStyle' type={TextTypes.P} />
      <Text>aaa</Text>
      <button onClick={toggleTheme}>Toggle</button>
    </Flex>
  );
});
