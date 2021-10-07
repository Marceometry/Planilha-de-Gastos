import styled from 'styled-components'

const cellPadding = '1.5rem 2rem'

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
  width: ${({ withIcons }) => (withIcons ? 'fit-content' : '')};
  text-align: ${({ withIcons }) => (withIcons ? 'center' : '')};
  padding: ${({ isChangeable }) => (isChangeable ? 0 : cellPadding)};
`

export const IconsWrapper = styled.div`
  gap: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Input = styled.input`
  padding: ${cellPadding};
  line-height: 1.5rem;
  border: none;
  background: transparent;
`
