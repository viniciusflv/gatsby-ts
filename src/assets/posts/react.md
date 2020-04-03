---
title: "Blog React"
date: "25-03-2018"
---

## Setup for React

## Setup for React

### Topics

1. React

```
a
```

```tsx
import React, { memo, FC } from 'react';

import { GlobalStyle } from './style';

import { SEO } from '../SEO';
import { Theme } from '../Theme';

export const App: FC<{ a?: string }> = memo(({ children, a }) => {
  return (
    <Theme>
      <SEO />
      {children}
      <GlobalStyle />
    </Theme>
  );
});
```
![Gatsby](./images/gatsby.jpg)
![GraphQL](./images/graphql.png)
![React](./images/react.jpg)
![Typescript](./images/typescript.jpeg)
