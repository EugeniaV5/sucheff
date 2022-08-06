import { createGlobalStyle } from 'styled-components';

import Franklin from '../assets/fonts/LibreFranklin-Regular.ttf';
import FranklinBold from '../assets/fonts/LibreFranklin-Bold.ttf';
import FranklinLight from '../assets/fonts/LibreFranklin-Light.ttf';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  }
 @font-face {
    font-family: 'Franklin';
    src: url(${Franklin}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: auto;
    font-display: swap;
  }
  @font-face {
    font-family: 'FranklinBold';
    src: url(${FranklinBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: auto;
    font-display: swap;
  }

 @font-face {
    font-family: 'FranklinLight';
    src: url(${FranklinLight}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
    font-display: swap;
  }

  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: 'Franklin';
    background-color: #fff;
    color: #010101;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
  a {
  text-decoration: none;
  color: inherit;
}

address {
  font-style: normal;
}
`;
