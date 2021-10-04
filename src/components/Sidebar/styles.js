import styled from 'styled-components'

export const Sidebar = styled.aside`
  /* width: 330px; */
  height: 100vh;
  padding: 2rem;
  /* z-index: 0; */
  border-right: 1px solid ${({ theme }) => theme.borderColor};
  background: ${({ theme }) => theme.secondaryBackground};
`
