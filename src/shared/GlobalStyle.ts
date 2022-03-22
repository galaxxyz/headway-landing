import { createGlobalStyle } from 'styled-components';
import 'typeface-inter';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 auto;
    padding: 0 0 96px 0;
    max-width: 1128px;
    font-family: "Inter", sans-serif;
    background-color: #FFF8F4;
  }

  p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
  }

  h2 {
    font-weight: 700;
    font-size: 28px;
    line-height: 130%;
  }

  h3 {
    font-weight: 700;
    font-size: 20px;
    line-height: 138%;
  }
`;

export default GlobalStyle;
