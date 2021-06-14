import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*::before, *::after, * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

}

html {
    scroll-behavior: smooth;
    background-color: #f0f4f5;
}

body {
 font-family: 'Noto Sans', sans-serif;
 font-weight: 300;
}

`;

// secondary NHS font color: #003d78

export default GlobalStyle;
