import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *:before,
  *:after {
    box-sizing: border-box;
  }
  a,
  a:visited {
    text-decoration: none;
    font-family: 'StratosSkyeng', sans-serif;
    cursor: pointer;
  }
  html,
  body {
    width: 100%;
    height: 100%;
    font-family: 'StratosSkyeng', sans-serif;
    color: #FFFFFF;
  }
  ul li {
    list-style: none;
  }
  @font-face {
    font-family: 'StratosSkyeng';
    src: local('StratosSkyeng'), local('StratosSkyeng'),
    url('../../public/fonts/stratos/Stratos-Regular.woff2') format('woff2'),
    url('../../public/fonts/stratos/Stratos-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
`;
