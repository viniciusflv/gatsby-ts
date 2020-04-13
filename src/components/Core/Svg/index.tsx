import React, { FC, Fragment, memo, useEffect, useState } from 'react';

import { Gradient, Path, SvgAsset, SvgProps } from './interface';
import { GroupStyle, PathStyle, SvgStyle } from './style';

import assets from '../../../assets';

export const Svg: FC<SvgProps> = memo(({ vector, color, width }) => {
  const [svg, setSvg] = useState<SvgAsset>();

  useEffect(() => {
    setSvg(assets[vector] as SvgAsset);
  },        [vector]);

  function renderGradient({ stops, type }: Gradient) {
    return (
      <linearGradient>
        {stops?.map(({ stopColor, offset }) => (
          <stop
            key={offset + stopColor}
            offset={offset}
            style={{ stopColor }}
          />
        ))}
      </linearGradient>
    );
  }

  function renderPaths(paths: Array<Path>) {
    return paths.map(({ animate, gradient, ...path }) => (
      <Fragment key={JSON.stringify(path)}>
        {gradient && renderGradient(gradient)}
        <PathStyle {...path}>{animate && <animate {...animate} />}</PathStyle>
      </Fragment>
    ));
  }

  return (
    <div style={{ width }}>
      <SvgStyle viewBox={svg?.viewBox}>
        <GroupStyle fill={color || svg?.fill}>
          {svg?.paths && renderPaths(svg.paths)}
        </GroupStyle>
      </SvgStyle>
    </div>
  );
});

{
  /* <WrapperStyle {...WrapperModel}>
  <SvgStyle {...SvgModel}>
    <GroupStyle {...GroupModel}>
      {paths &&
        paths.map(() =>
          paths.map((path, i) => (
            <Fragment key={path.d}>
              {path.gradient && (
                <GradientStyle {...GradientModel(path.gradient)}>
                  {path.gradient.stops &&
                    path.gradient.stops.map((stop) => (
                      <StopStyle
                        key={stop.stopColor}
                        {...StopModel(stop)}
                      />
                    ))}
                </GradientStyle>
              )}
              <PathStyle {...PathModel(path, i)} />
            </Fragment>
          ))
        )}
    </GroupStyle>
  </SvgStyle>
</WrapperStyle> */
}
