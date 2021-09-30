import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font: 400 16px sans-serif;
    color: ${({ theme }) => theme.fontColor};
    background: ${({ theme }) => theme.backgroundColor};
  }

  button, a {
    all: unset;
    cursor: pointer;
  }
`
