import { Button } from '../'
import { useTheme } from '../../themes/ThemeContext'
import { StyledHeader } from './styles'

export function Header() {
  const { toggleTheme } = useTheme()

  return (
    <StyledHeader>
      <h1>Planilha de Gastos</h1>

      <Button onClick={toggleTheme}>Toggle Theme</Button>
    </StyledHeader>
  )
}
