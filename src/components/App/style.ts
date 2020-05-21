import { createGlobalStyle } from 'styled-components';

import { ThemeType } from '../Theme/interfaces';

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  * {
    box-sizing: border-box;
    outline-color: ${({ theme }) => theme.secondaryColor};
  }

  html, body {
    margin: 0;
    padding: 0;
    min-width: max-content;
    min-width: 100%;
    min-height: 100%;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.backgroundColor};
  }

  #___gatsby, #gatsby-focus-wrapper {
    min-width: 100%;
    min-height: 100%;
    width: 100%;
    height: 100%;
    display: grid;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(0,0,0,.2);
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.secondaryColor};
  }
`;
