import { useExpenses } from '../../../../contexts'
import { Table as TableWrapper, Row, Cell } from '../../../../components'

export function Table() {
  const {
    expenses,
    deleteTable,
    getFormattedPrice,
    getTotalExpense,
    getTotalItems,
  } = useExpenses()

  if (!expenses.length) return <h1>Não há nenhuma tabela ainda {':('}</h1>

  return (
    <TableWrapper headers={['Tabela', 'Custo', 'Itens']}>
      {expenses.map(({ id, name, items, totalExpense }) => (
        <Row key={id}>
          <Cell>{name}</Cell>

          <Cell>{getFormattedPrice(totalExpense)}</Cell>

          <Cell>{items.length}</Cell>

          <Cell asButton onClick={() => deleteTable(id)}>
            Excluir
          </Cell>
        </Row>
      ))}

      <Row>
        <Cell strong>Total:</Cell>
        <Cell>{getFormattedPrice(getTotalExpense())}</Cell>
        <Cell>{getTotalItems()}</Cell>
      </Row>
    </TableWrapper>
  )
}
