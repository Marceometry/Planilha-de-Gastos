// import { Link } from 'react-router-dom'
import * as S from './styles'

const pages = [
  { title: 'Todas', link: '/' },
  { title: 'Mensal', link: '/mensal' },
  { title: 'Unitário', link: '/unitário' },
]

export function Sidebar() {
  return (
    <S.Sidebar>
      <S.Title>
        <h1>Planilha de Gastos</h1>
      </S.Title>

      <S.Nav>
        {pages?.map((item) => (
          <S.Link
            key={item.title}
            to={`/${item.link}`}
            active={item.link === '/mensal'}
          >
            {item.title}
          </S.Link>
        ))}
      </S.Nav>
    </S.Sidebar>
  )
}
