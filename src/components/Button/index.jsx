import styled from 'styled-components'

const StyledButton = styled.button`
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

export function Button(props) {
  return <StyledButton {...props}>{props.children}</StyledButton>
}
