import React, { FC, memo } from 'react';

import { MarkdownStyle } from './style';

export const Markdown: FC<{ html: string }> = memo(({ html }) => {
  return <MarkdownStyle dangerouslySetInnerHTML={{ __html: html }} />;
});
