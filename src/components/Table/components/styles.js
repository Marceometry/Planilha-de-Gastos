import styled from 'styled-components'

const cellPadding = '1.5rem 2rem'
const asButtonPadding = '.25rem 2rem'

export const Row = styled.tr`
  &:nth-child(even) {
    background: ${({ theme }) => theme.primaryBackground};
  }
`

export const Header = styled.th`
  padding: ${cellPadding};
  border: 1px solid ${({ theme }) => theme.borderColor};
`

export const Cell = styled.td`
  border: 1px solid ${({ theme }) => theme.borderColor};
  width: ${({ asButton }) => (asButton ? 'fit-content' : '')};
  text-align: ${({ asButton }) => (asButton ? 'center' : '')};
  padding: ${({ isChangeable, asButton }) =>
    isChangeable ? 0 : asButton ? asButtonPadding : cellPadding};
`

export const Input = styled.input`
  padding: ${cellPadding};
  border: none;
  background: transparent;
`
