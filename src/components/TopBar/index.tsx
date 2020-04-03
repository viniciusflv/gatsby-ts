import React, { memo } from 'react';

import { useTheme } from 'styled-components';

export const TopBar = memo(() => {
  const { toggleTheme } = useTheme() as any;
  return (
    <div>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
});
