import styled from 'styled-components'

export const Sidebar = styled.aside`
  max-width: 400px;
  height: 100vh;
  border-right: 1px solid ${({ theme }) => theme.borderColor};
  background: ${({ theme }) => theme.secondaryBackground};

  @media (max-width: 1400px) {
    max-width: 320px;

    h1 {
      font-size: 1.75rem;
    }
  }
`

export const Title = styled.div`
  height: 102px;
  padding: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`

export const Nav = styled.nav`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
`

export const Link = styled.a`
  width: 100%;
  padding: 1rem;
  padding-left: 3rem;
  font-size: 1.125rem;
  font-weight: ${({ active }) => active && 'bold'};
  background-color: ${({ theme, active }) => active && theme.primaryBackground};
  transition: background-color 0.2s;
  position: relative;

  &::before {
    ${({ active }) => active && 'content: "";'}
    background-color: ${({ theme }) => theme.borderColor};
    width: 6px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  &:hover {
    background-color: ${({ theme }) => theme.primaryBackground};
  }
`
