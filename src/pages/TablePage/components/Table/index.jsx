import { useExpenses } from '../../../../contexts'
import { Table as TableWrapper, Row, Cell } from '../../../../components'

export function Table({ table }) {
  const { editExpense, deleteExpense, getFormattedPrice } = useExpenses()

  const items = table.items

  if (!items.length) return <h1>Não há nada aqui {':('}</h1>

  return (
    <TableWrapper headers={['Item', 'Preço']}>
      {items.map(({ name, price, id }) => (
        <Row key={id}>
          <Cell
            isChangeable
            onChange={(value) =>
              editExpense(table.id, { name: value, price, id })
            }
          >
            {name}
          </Cell>

          <Cell
            asNumber
            isChangeable
            onChange={(value) =>
              editExpense(table.id, { name, price: Number(value), id })
            }
          >
            {price}
          </Cell>

          <Cell asButton onClick={() => deleteExpense(table.id, id)}>
            Excluir
          </Cell>
        </Row>
      ))}

      <Row>
        <Cell strong>Total:</Cell>
        <Cell>{getFormattedPrice(table.totalExpense)}</Cell>
      </Row>
    </TableWrapper>
  )
}
