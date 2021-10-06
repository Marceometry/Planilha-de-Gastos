import { useHistory } from 'react-router-dom'
import { routes } from '../../pages'
import * as S from './styles'

export function Sidebar() {
  const history = useHistory()

  return (
    <S.Sidebar>
      <S.Title>
        <h1>Planilha de Gastos</h1>
      </S.Title>

      <S.Nav>
        {routes?.map((item) => (
          <S.Link
            key={item.title}
            onClick={() => history.push(`${item.path}`)}
            active={item.path === history.location.pathname}
          >
            {item.title}
          </S.Link>
        ))}
      </S.Nav>
    </S.Sidebar>
  )
}
