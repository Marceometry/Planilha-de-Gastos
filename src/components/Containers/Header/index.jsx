import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useExpenses } from '../../../contexts'
import { ThemeToggler } from '../../Elements/ThemeToggler'
import { StyledHeader } from './styles'

export function Header() {
  const [pageTitle, setPageTitle] = useState('')
  const { expenses, getTableById } = useExpenses()
  const history = useHistory()
  const { id } = useParams()

  useEffect(() => {
    if (history.location.pathname === '/') {
      setPageTitle('Todas')
      return
    }

    const table = getTableById(id)

    if (!table) {
      setPageTitle('Tabela inexistente')
      return
    }

    setPageTitle(table.name)
  }, [expenses, id, history.location.pathname])

  return (
    <StyledHeader>
      <h1>{pageTitle}</h1>

      <ThemeToggler />
    </StyledHeader>
  )
}