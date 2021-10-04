import styled from 'styled-components'

export const TableWrapper = styled.div`
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.borderColor};
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background: ${({ theme }) => theme.secondaryBackground};
  overflow: hidden;
`
