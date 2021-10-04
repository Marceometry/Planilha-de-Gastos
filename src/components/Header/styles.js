import styled from 'styled-components'

export const StyledHeader = styled.header`
  padding: 32px 64px;
  background: ${({ theme }) => theme.secondaryBackground};
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
`
