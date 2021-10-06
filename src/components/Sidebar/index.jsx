import * as S from './styles'

const pages = [
  { title: 'Total', path: '/' },
  { title: 'Mensal', path: '/mensal' },
  { title: 'Unitário', path: '/unitário' },
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
            to={`${item.path}`}
            active={item.path === '/mensal'}
          >
            {item.title}
          </S.Link>
        ))}
      </S.Nav>
    </S.Sidebar>
  )
}
