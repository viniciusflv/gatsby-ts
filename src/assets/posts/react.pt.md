---
title: 'Blog React'
date: '25-03-2018'
lang: 'pt'
---

## Configurando o React

### Tópicos

1. React

```json
{
  "A": "a"
}
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

## Gatsby

![Gatsby](./images/gatsby.jpg)

## GraphQL

![GraphQL](./images/graphql.png)

## React

![React](./images/react.jpg)

## Typescript

![Typescript](./images/typescript.jpeg)
