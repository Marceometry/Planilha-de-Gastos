import styled from 'styled-components'

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background: ${({ theme }) => theme.secondaryBackground};
`
