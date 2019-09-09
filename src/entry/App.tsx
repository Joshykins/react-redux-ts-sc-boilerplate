import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { createGlobalStyle } from 'styled-components';
import { Home } from '../pages/home/home';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700');
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }
  body {
    background-color: #FFFFFA;
    h1 {
      text-align: center;
      color: #070707;
      font-size: 36px;
    }
  }
`;

const App = hot(() => (
  <>
    <GlobalStyle />
    <Home></Home>
  </>
));

export default App;
