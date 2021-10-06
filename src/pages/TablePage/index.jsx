import { useParams } from 'react-router'
import { useExpenses } from '../../contexts'
import { ErrorMessage, Layout } from '../../components'
import { Form, Table } from './components'

export function TablePage() {
  const { getTableById } = useExpenses()
  const { id } = useParams()
  const table = getTableById(id)

  return (
    <Layout>
      {table ? (
        <>
          <Form tableId={id} />

          <Table table={table} />
        </>
      ) : (
        <ErrorMessage>Tabela não encontrada {':,('}</ErrorMessage>
      )}
    </Layout>
  )
}
