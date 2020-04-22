import React, { memo, useEffect, useState } from 'react';

import { changeLocale, defineMessages, FormattedMessage, useIntl } from 'gatsby-plugin-intl';

import assets from '../../assets';
import { Flex } from '../Core/Flex';
import { IconText } from '../Core/IconText';
import { Svg } from '../Core/Svg';
import { Text } from '../Core/Text';
import { TextTypes } from '../Core/Text/interface';

export default memo(() => {
  // if (['pt', 'pt-BR'].includes(navigator.language)) changeLocale('pt');

  return (
    <Flex direction='column'>
      <FormattedMessage id='title' />
      <Text text='Headline Style' type={TextTypes.H1} />
      <Text text='Subhead Style' type={TextTypes.H2} />
      <Text text='Title Style' type={TextTypes.H3} />
      <Text text='Subtitle Style' type={TextTypes.H4} />
      <Text text='Paragraph Style' type={TextTypes.P} />
      <Text>aaa</Text>
      <Flex gap='20px' wrap='wrap'>
        {Object.keys(assets).map<any>((key: any) => (
          <Svg key={key} vector={key} height='50px' width='50px' />
        ))}
      </Flex>
      <Flex>
        <IconText
          direction='column'
          color='blue'
          fill='red'
          text='IconText'
          size={1}
          first={'person'}
          last={'person'}
        />
      </Flex>
    </Flex>
  );
});
