import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Open Sans", sans-serif;
  }
  #__next, html, body {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
  }

  html {
    font-size: 100%;
  }
`;
