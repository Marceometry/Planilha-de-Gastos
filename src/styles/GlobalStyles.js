import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition-property: background-color, border;
    transition-duration: 0.2s;
  }

  body {
    font: 400 16px sans-serif;
    color: ${({ theme }) => theme.fontColor};
    background: ${({ theme }) => theme.primaryBackground};
  }

  button, a {
    all: unset;
    cursor: pointer;
  }
`

export const AppWrapper = styled.div`
  height: 100vh;
`
