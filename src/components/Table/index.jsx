import { useExpenses } from '../../contexts/ExpensesContext'
import { Row, Header, Cell } from './components'
import * as S from './styles'

export function Table({ tableId }) {
  const { expenses, editExpense, deleteExpense, getFormattedPrice } =
    useExpenses()

  const items = expenses[tableId].items

  if (!items.length) return <h1>Não há nada aqui {':('}</h1>

  return (
    <S.Table>
      <thead>
        <Row>
          <Header>Item</Header>
          <Header>Preço</Header>
          <Header></Header>
        </Row>
      </thead>

      <tbody>
        {items.map(({ name, price, id }) => (
          <Row key={id}>
            <Cell
              isChangeable
              onChange={(value) =>
                editExpense(tableId, { name: value, price, id })
              }
            >
              {name}
            </Cell>

            <Cell
              asNumber
              isChangeable
              onChange={(value) =>
                editExpense(tableId, { name, price: Number(value), id })
              }
            >
              {price}
            </Cell>

            <Cell asButton onClick={() => deleteExpense(tableId, id)}>
              Excluir
            </Cell>
          </Row>
        ))}

        <Row>
          <Cell strong>Total:</Cell>
          <Cell>{getFormattedPrice(expenses[tableId].totalExpense)}</Cell>
        </Row>
      </tbody>
    </S.Table>
  )
}
