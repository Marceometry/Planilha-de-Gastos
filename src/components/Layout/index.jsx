import { AppWrapper, Content, Main } from '../../styles/Containers'
import { Sidebar, Header } from '../'

export function Layout({ children }) {
  return (
    <AppWrapper>
      <Sidebar />

      <Main>
        <Header />

        <Content>{children}</Content>
      </Main>
    </AppWrapper>
  )
}
