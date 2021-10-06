import { useParams } from 'react-router'
import { useExpenses } from '../../contexts/ExpensesContext'
import { Layout } from '../../layout'
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
        <h1>Erro</h1>
      )}
    </Layout>
  )
}
