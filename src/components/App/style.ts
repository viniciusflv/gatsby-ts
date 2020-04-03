import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  html, body {
    margin: 0;
    padding: 0;
    min-width: max-content;
    width: 100%;
  }
  #___gatsby, #gatsby-focus-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;
