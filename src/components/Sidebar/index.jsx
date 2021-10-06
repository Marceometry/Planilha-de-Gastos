import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useExpenses } from '../../contexts/ExpensesContext'
import * as S from './styles'

export function Sidebar() {
  const { expenses } = useExpenses()
  const [routes, setRoutes] = useState([])
  const history = useHistory()

  useEffect(() => {
    let array = []
    for (let key in expenses) {
      array.push(expenses[key])
    }
    setRoutes(array)
  }, [expenses])

  return (
    <S.Sidebar>
      <S.Title>
        <h1>Planilha de Gastos</h1>
      </S.Title>

      <S.Nav>
        <S.Link
          onClick={() => history.push('/')}
          active={'/' === history.location.pathname}
        >
          Todas
        </S.Link>

        {routes?.map((item) => (
          <S.Link
            key={item.id}
            onClick={() => history.push(`/tables/${item.id}`)}
            active={`/tables/${item.id}` === history.location.pathname}
          >
            {item.name}
          </S.Link>
        ))}
      </S.Nav>
    </S.Sidebar>
  )
}
