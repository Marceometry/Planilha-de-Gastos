import { useExpenses } from '../../../../contexts'
import { MdDelete } from 'react-icons/md'
import {
  Table as TableWrapper,
  Row,
  Cell,
  ErrorMessage,
} from '../../../../components'

export function Table() {
  const {
    expenses,
    editTableName,
    deleteTable,
    getFormattedPrice,
    getTotalExpense,
    getTotalItems,
  } = useExpenses()

  if (!expenses.length)
    return <ErrorMessage>Não há nenhuma tabela ainda {':('}</ErrorMessage>

  return (
    <TableWrapper headers={['Tabela', 'Custo', 'Itens']}>
      {expenses.map(({ id, name, items, totalExpense }) => (
        <Row key={id}>
          <Cell isChangeable onChange={(value) => editTableName(id, value)}>
            {name}
          </Cell>

          <Cell>{getFormattedPrice(totalExpense)}</Cell>

          <Cell>{items.length}</Cell>

          <Cell
            withIcons={[
              {
                icon: <MdDelete />,
                onClick: () => deleteTable(id),
                label: 'Excluir',
              },
            ]}
          />
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
