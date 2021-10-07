import { useExpenses } from '../../../../contexts'
import { MdDelete, MdContentCopy } from 'react-icons/md'
import {
  Table as TableWrapper,
  Row,
  Cell,
  ErrorMessage,
} from '../../../../components'

export function Table({ table }) {
  const { editExpense, deleteExpense, getFormattedPrice } = useExpenses()

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
                onClick: () => console.log(table.id, id),
                label: 'Duplicar',
              },
              {
                icon: <MdDelete />,
                onClick: () => deleteExpense(table.id, id),
                label: 'Excluir',
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
