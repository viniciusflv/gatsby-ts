import React, { memo, useState } from 'react';

import styled from 'styled-components';

import assets from '../../../assets';

const Div = styled.div`
  ${({ theme }) => `fill: ${theme.color}`}
`;

export default memo(() => {
  const { viewBox, fill, paths } = assets('close');

  return (
    <Div>
      <svg viewBox={viewBox} fill={fill} width="100%" height="100%">
        {paths?.map(path => (
          <path key={path.d} {...path} />
        ))}
      </svg>
    </Div>
  );
});
