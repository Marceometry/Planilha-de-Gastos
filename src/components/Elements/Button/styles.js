import styled, { css } from 'styled-components'

const defaultButtonCSS = css`
  transition: all 0.2s;
  padding: 8px 24px;
  border-radius: 8px;

  border: 1px solid ${({ theme }) => theme.borderColor};
  color: ${({ theme, outlined }) =>
    outlined ? theme.fontColor : theme.primaryBackground};
  background-color: ${({ theme, outlined }) =>
    outlined ? 'none' : theme.fontColor};

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primary};
  }
`

const iconButtonCSS = css`
  font-size: 0;

  svg {
    width: ${({ size }) => size};
    height: ${({ size }) => size};
  }
`

export const StyledButton = styled.button`
  ${defaultButtonCSS}
`

export const IconButton = styled.button`
  ${iconButtonCSS}
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`

export const IconButtonWithBackground = styled.button`
  ${defaultButtonCSS}
  ${iconButtonCSS}
`
