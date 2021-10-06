import styled from 'styled-components'

export const StyledHeader = styled.header`
  padding: 2rem 3rem;
  background: ${({ theme }) => theme.secondaryBackground};
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
`
