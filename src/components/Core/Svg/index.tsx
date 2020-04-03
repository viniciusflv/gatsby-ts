import React, { FC, memo, useEffect, useState } from 'react';

import { SvgProps } from './interface';
import { GroupStyle, PathStyle, SvgStyle } from './style';

import * as assets from '../../../assets';

export const Svg: FC<SvgProps> = memo(({ vector, color }) => {
  const [svg, setSvg] = useState<any>();

  useEffect(() => {
    setSvg(assets[vector]);
  },        [vector]);

  return (
    <div>
      <SvgStyle viewBox={svg?.viewBox}>
        <GroupStyle fill={color || svg?.fill}>
          {svg?.paths?.map((path: any) => (
            <PathStyle key={JSON.stringify(path)} {...path} />
          ))}
        </GroupStyle>
      </SvgStyle>
    </div>
  );
});
