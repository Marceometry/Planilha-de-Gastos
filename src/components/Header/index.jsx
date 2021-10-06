import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useExpenses } from '../../contexts/ExpensesContext'
import { useTheme } from '../../themes/ThemeContext'
import { Button } from '../'
import { StyledHeader } from './styles'

export function Header() {
  const [pageTitle, setPageTitle] = useState('')
  const { expenses } = useExpenses()
  const { toggleTheme } = useTheme()
  const history = useHistory()
  const { id } = useParams()

  useEffect(() => {
    if (history.location.pathname === '/') {
      setPageTitle('Todas')
      return
    }

    if (!expenses[id]) {
      setPageTitle('Tabela inexistente')
      return
    }

    setPageTitle(expenses[id].name)
  }, [expenses, id, history.location.pathname])

  return (
    <StyledHeader>
      <h1>{pageTitle}</h1>

      <Button onClick={toggleTheme}>Toggle Theme</Button>
    </StyledHeader>
  )
}
