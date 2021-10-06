import { AddItem, Table } from '../../components'
import { Layout } from '../../layout'

export function Home() {
  return (
    <Layout>
      <AddItem />
      <Table tableId='1' />
    </Layout>
  )
}
