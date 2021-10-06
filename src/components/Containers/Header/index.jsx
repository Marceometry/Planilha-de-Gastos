import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useExpenses } from '../../../contexts'
import { ThemeToggler } from '../../Elements/ThemeToggler'
import { StyledHeader, Input } from './styles'

export function Header() {
  const [headerTitle, setHeaderTitle] = useState('')
  const [hasPage, setHasPage] = useState(false)
  const { expenses, getTableById, editTableName } = useExpenses()
  const history = useHistory()
  const { id } = useParams()

  useEffect(() => {
    if (history.location.pathname === '/') {
      setHeaderTitle('Todas as tabelas')
      return
    }

    const table = getTableById(id)

    if (!table) {
      setHeaderTitle('Tabela não encontrada')
      return
    }

    setHasPage(true)
    setHeaderTitle(table.name)
  }, [expenses, id, history.location.pathname])

  return (
    <StyledHeader>
      {hasPage ? (
        <Input
          type='text'
          value={headerTitle}
          onChange={(e) => editTableName(id, e.target.value)}
        />
      ) : (
        <h1>{headerTitle}</h1>
      )}

      <ThemeToggler />
    </StyledHeader>
  )
}
