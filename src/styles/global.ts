import { createGlobalStyle } from 'styled-components'


const GlobalStyle =  createGlobalStyle`


  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body{
    background: '#ecf1f8';
    color: "#333";
    height: 100%;
    font: 14px 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased !important;
  }

  ul {
    list-style: none;
  }

`

export default GlobalStyle