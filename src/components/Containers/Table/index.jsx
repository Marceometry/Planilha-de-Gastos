import { Row, Header } from './components'
import * as S from './styles'

export function Table({ children, headers }) {
  return (
    <S.Table>
      <thead>
        <Row>
          {headers?.map((item) => (
            <Header key={item}>{item}</Header>
          ))}
          <Header />
        </Row>
      </thead>

      <tbody>{children}</tbody>
    </S.Table>
  )
}

export { Row, Header, Cell } from './components'
