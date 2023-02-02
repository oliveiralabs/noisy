import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  /* Reset CSS */
  * {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
  }

  /* fade image in after load */
  .lazyload,
  .lazyloading {
    opacity: 0;
  }

  .lazyloaded {
    opacity: 1;
    transition: opacity 200ms;
  }

`;
 
export default GlobalStyle;