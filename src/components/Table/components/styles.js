import styled from 'styled-components'

const cellPadding = '24px 32px'

export const Row = styled.tr``

export const Header = styled.th`
  padding: ${cellPadding};
  border: 1px solid ${({ theme }) => theme.borderColor};
`

export const Cell = styled.td`
  padding: ${({ isChangeable }) => (isChangeable ? 0 : cellPadding)};
  border: 1px solid ${({ theme }) => theme.borderColor};
`

export const Input = styled.input`
  padding: ${cellPadding};
  width: 100%;
  color: inherit;
  font: inherit;
  border: none;
  background: transparent;
`
