import React, { memo } from 'react';

import { FirstIconStyle, FlexStyle, LastIconStyle, TextStyle } from './style';

export const IconText = memo(() => {
  return (
    <FlexStyle>
      <FirstIconStyle vector='agibank' />
      <TextStyle text='aaa' />
      {/* <LastIconStyle vector={VectorTypes.} /> */}
    </FlexStyle>
  );
});
