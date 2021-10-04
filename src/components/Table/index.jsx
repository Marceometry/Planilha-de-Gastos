import { useState } from 'react'
import { Row, Header, Cell } from './components'
import * as S from './styles'

export function Table() {
  const [list, setList] = useState([
    { name: 'asdjh 1', price: 1 },
    { name: 'asdjh 2', price: 2 },
    { name: 'asdjh 3', price: 3 },
  ])

  return (
    <S.TableWrapper>
      <S.Table>
        <Row>
          <Header>Item</Header>
          <Header>Preço</Header>
        </Row>

        {list.map((item) => (
          <Row>
            <Cell>{item.name}</Cell>
            <Cell>{item.price}</Cell>
          </Row>
        ))}

        <Row>
          <Cell isChangeable={false}>
            <strong>Total:</strong>
          </Cell>
          <Cell>
            {list.reduce((total, item) => {
              return total + item.price
            }, 0)}
          </Cell>
        </Row>
      </S.Table>
    </S.TableWrapper>
  )
}
