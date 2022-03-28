import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    outline: 0px;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

    @media (max-width: 1080px) {
      html {
        font-size: 93.75%;
      }
    }
    
    @media (max-width: 720px) {
      html {
        font-size: 87.5%;
      }
    }

  html, body, #__next {
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
    height: 100%;
    background-color: ${({ theme }) => theme.colors["gray-900"]};
    color: ${({ theme }) => theme.colors.white};
  }

   body, button, select, input {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;
