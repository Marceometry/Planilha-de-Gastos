import { AppWrapper, Content, Main } from './styles/Containers'
import { Sidebar, Header, Table } from './components'

export default function App() {
  return (
    <AppWrapper>
      <Sidebar />

      <Main>
        <Header />

        <Content>
          <Table />
        </Content>
      </Main>
    </AppWrapper>
  )
}
