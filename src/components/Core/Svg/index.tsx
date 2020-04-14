import React, { FC, Fragment, memo, useEffect, useState } from 'react';

import { v4 as uuid } from 'uuid';

import { Animate, Gradient, SvgAsset, SvgProps } from './interface';
import { SvgStyle, WrapperStyle } from './style';

import assets from '../../../assets';

export const Svg: FC<SvgProps> = memo(({ vector, color, ...flexProps }) => {
  const [svg, setSvg] = useState<SvgAsset>();
  const id = uuid();

  useEffect(() => {
    setSvg(assets[vector] as SvgAsset);
  },        [vector]);

  function renderStops({ stops }: Gradient) {
    return stops?.map(({ stopColor, offset }) => (
      <stop key={offset + stopColor} offset={offset} style={{ stopColor }} />
    ));
  }

  function renderLinearGradient(linearGradient: Gradient) {
    return (
      <linearGradient id={id}>{renderStops(linearGradient)}</linearGradient>
    );
  }

  function renderRadialGradient(radialGradient: Gradient) {
    return (
      <radialGradient id={id}>{renderStops(radialGradient)}</radialGradient>
    );
  }

  function renderAnimation(animates: Array<Animate>) {
    return animates.map((animate) => (
      <animate key={JSON.stringify(animate)} {...animate} />
    ));
  }

  function renderPaths({ paths, linearGradient, radialGradient }: SvgAsset) {
    return (
      <Fragment>
        {linearGradient && renderLinearGradient(linearGradient)}
        {radialGradient && renderRadialGradient(radialGradient)}
        {paths.map(({ animates, fill, ...path }) => (
          <path
            {...path}
            key={JSON.stringify(path)}
            fill={color || (
              Boolean(linearGradient || radialGradient)
                ? `url(#${id})`
                : fill
            )}
          >
            {animates && renderAnimation(animates)}
          </path>
        ))}
      </Fragment>
    );
  }

  return (
    <WrapperStyle {...flexProps}>
      <SvgStyle viewBox={svg?.viewBox} fill={color || svg?.fill}>
        {svg && renderPaths(svg)}
      </SvgStyle>
    </WrapperStyle>
  );
});
