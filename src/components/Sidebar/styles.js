import { Link as a } from 'react-router-dom'
import styled from 'styled-components'

export const Sidebar = styled.aside`
  height: 100vh;
  border-right: 1px solid ${({ theme }) => theme.borderColor};
  background: ${({ theme }) => theme.secondaryBackground};
`

export const Title = styled.div`
  padding: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`

export const Nav = styled.nav`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
`

export const Link = styled(a)`
  width: 100%;
  padding: 1rem;
  padding-left: 3rem;
  font-size: 1.25rem;
  font-weight: ${({ active }) => active && 'bold'};
  filter: ${({ active }) => active && 'brightness(1.1)'};
  background-color: ${({ theme, active }) => active && theme.primaryBackground};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.primaryBackground};
  }
`
