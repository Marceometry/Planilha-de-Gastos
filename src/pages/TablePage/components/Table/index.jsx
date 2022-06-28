import { useExpenses } from '../../../../contexts'
import { MdDeleteOutline, MdContentCopy } from 'react-icons/md'
import {
  Table as TableWrapper,
  Row,
  Cell,
  ErrorMessage,
} from '../../../../components'

export function Table({ table }) {
  const { editExpense, duplicateExpense, deleteExpense, getFormattedPrice } =
    useExpenses()

  const items = table.items

  if (!items.length)
    return <ErrorMessage>Não há nada aqui por enquanto {':('}</ErrorMessage>

  const data = items.sort((a, b) => Number(b.date) - Number(a.date))

  return (
    <TableWrapper headers={['Item', 'Preço', 'Data']}>
      {data.map((expense) => (
        <Row key={expense.id}>
          <Cell
            isChangeable
            onChange={(value) =>
              editExpense(table.id, { ...expense, name: value })
            }
          >
            {expense.name}
          </Cell>

          <Cell
            asNumber
            isChangeable
            onChange={(value) =>
              editExpense(table.id, { ...expense, price: Number(value) })
            }
          >
            {expense.price}
          </Cell>

          <Cell
            isChangeable
            onChange={(value) =>
              editExpense(table.id, { ...expense, date: value })
            }
          >
            {expense.date}
          </Cell>

          <Cell
            withIcons={[
              {
                icon: <MdContentCopy />,
                onClick: () => duplicateExpense(table.id, expense.id),
                title: 'Duplicar',
              },
              {
                icon: <MdDeleteOutline />,
                onClick: () => deleteExpense(table.id, expense.id),
                title: 'Excluir',
              },
            ]}
          ></Cell>
        </Row>
      ))}

      <Row>
        <Cell strong>Total:</Cell>
        <Cell>{getFormattedPrice(table.totalExpense)}</Cell>
      </Row>
    </TableWrapper>
  )
}
