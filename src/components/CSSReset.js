import { createGlobalStyle } from 'styled-components';

export const CSSReset = createGlobalStyle`
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
    background-color: ${({ theme }) => theme.backgroundBase};
    color: ${({ theme }) => theme.textColorBase};
  }
  body::-webkit-scrollbar {
    height: 8px;
  }
  body::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.backgroundLevel1};
  }
  body::-webkit-scrollbar-thumb {
    background-color: red;
    border-radius: 20px;
    border: 3px solid ${({ theme }) => theme.backgroundLevel1};
  }
  /* NextJS */
  html {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  body {
    display: flex;
    flex: 1;
  }
  #__next {
    display: flex;
    flex: 1;
  }
  /* Globals */
  button,
  a {
    text-decoration: none;
    opacity: 1;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
  }
`;
