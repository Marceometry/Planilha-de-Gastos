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

          <Cell
            withIcons={[
              {
                icon: <MdContentCopy />,
                onClick: () => duplicateExpense(table.id, id),
                title: 'Duplicar',
              },
              {
                icon: <MdDeleteOutline />,
                onClick: () => deleteExpense(table.id, id),
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
