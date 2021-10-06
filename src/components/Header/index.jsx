import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useTheme } from '../../themes/ThemeContext'
import { routes } from '../../pages'
import { Button } from '../'
import { StyledHeader } from './styles'

export function Header() {
  const [pageTitle, setPageTitle] = useState('')
  const { toggleTheme } = useTheme()
  const history = useHistory()

  useEffect(() => {
    const currentRoute = routes.find(
      (item) => item.path === history.location.pathname
    )

    setPageTitle(currentRoute.title)
  }, [routes])

  return (
    <StyledHeader>
      <h1>{pageTitle}</h1>

      <Button onClick={toggleTheme}>Toggle Theme</Button>
    </StyledHeader>
  )
}
