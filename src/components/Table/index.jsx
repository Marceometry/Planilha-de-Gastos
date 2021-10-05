import { useExpenses } from '../../contexts/ExpensesContext'
import { Row, Header, Cell } from './components'
import * as S from './styles'

export function Table() {
  const {
    expenses,
    editExpense,
    deleteExpense,
    totalPrice,
    getFormattedPrice,
  } = useExpenses()

  if (!expenses.length) return <h1>Não há nada aqui {':('}</h1>

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
        {expenses.map((item) => (
          <Row key={item.id}>
            <Cell
              isChangeable
              onChange={(value) => editExpense({ name: value, id: item.id })}
            >
              {item.name}
            </Cell>

            <Cell
              asNumber
              isChangeable
              onChange={(value) =>
                editExpense({ price: Number(value), id: item.id })
              }
            >
              {item.price}
            </Cell>

            <Cell asButton onClick={() => deleteExpense(item.id)}>
              Excluir
            </Cell>
          </Row>
        ))}

        <Row>
          <Cell strong>Total:</Cell>
          <Cell>{getFormattedPrice(totalPrice)}</Cell>
        </Row>
      </tbody>
    </S.Table>
  )
}
