import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition-property: background-color, border;
    transition-duration: 0.2s;
  }

  *:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
  }

  body {
    font: 400 16px sans-serif;
    color: ${({ theme }) => theme.fontColor};
    background: ${({ theme }) => theme.primaryBackground};
  }

  h1 {
    font-size: 2rem;
  }

  button, a {
    border: none;
    color: inherit;
    background: inherit;
    font-size: inherit;
    cursor: pointer;
  }

  input {
    padding: 1rem 1.5rem;
    width: 100%;
    color: inherit;
    font: inherit;
    border: 1px solid ${({ theme }) => theme.borderColor};
    background: ${({ theme }) => theme.secondaryBackground};
  }
`
