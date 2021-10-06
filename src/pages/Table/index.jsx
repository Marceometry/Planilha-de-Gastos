import { useParams } from 'react-router'
import { Layout } from '../../layout'
import { Table } from '../../components'
import { Form } from './components'

export function TablePage() {
  const { id } = useParams()

  return (
    <Layout>
      <Form tableId={id} />

      <Table tableId={id} />
    </Layout>
  )
}
