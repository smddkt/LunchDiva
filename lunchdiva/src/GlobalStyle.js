import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SUITE-Regular';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/SUITE-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
}

  background-color: #ffefbf;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "IBM Plex Sans KR", sans-serif;
  font-weight: 500;
  font-style: normal;

  body{
    min-height: 100vh;
    width: 100vw;
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration:none;
    }

  /*.app{
    width: 100%;
    margin: 0;
  }*/

  @keyframes fadeIn {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
`;

export default GlobalStyle;