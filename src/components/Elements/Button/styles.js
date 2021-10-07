import styled from 'styled-components'

export const StyledButton = styled.button`
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

export const IconButton = styled.button`
  font-size: 0;
  transition: transform 0.2s;

  svg {
    width: ${({ size }) => size};
    height: ${({ size }) => size};
  }

  &:hover {
    transform: scale(1.1);
  }
`
