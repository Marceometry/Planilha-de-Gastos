import { useTheme } from '../../../contexts'
import { Button } from '..'

export function ThemeToggler() {
  const { toggleTheme } = useTheme()

  return <Button onClick={() => toggleTheme()}>Alterar tema</Button>
}
