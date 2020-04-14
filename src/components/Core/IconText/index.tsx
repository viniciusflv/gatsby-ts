import React, { FC, memo } from 'react';

import { IconTextProps } from './interface';
import { IconTextModel } from './model';
import {
  FirstIconStyle,
  LastIconStyle,
  TextStyle,
  WrapperStyle,
} from './style';

export const IconText: FC<IconTextProps> = memo((props) => {
  const { first, last } = props;
  const {
    WrapperModel,
    FirstIconModel,
    TextModel,
    LastIconModel,
  } = new IconTextModel(props);

  return (
    <WrapperStyle {...WrapperModel}>
      {first && <FirstIconStyle {...FirstIconModel} />}
      <TextStyle {...TextModel} />
      {last && <LastIconStyle {...LastIconModel} />}
    </WrapperStyle>
  );
});
