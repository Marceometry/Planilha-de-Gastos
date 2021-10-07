import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { useTheme } from '../../../contexts'
import { Button } from '..'

export function ThemeToggler() {
  const { currentTheme, toggleTheme } = useTheme()

  return (
    <Button
      withIcon
      iconSize='2rem'
      title='Alterar Tema'
      onClick={() => toggleTheme()}
    >
      {currentTheme === 'dark' ? <MdDarkMode /> : <MdLightMode />}
    </Button>
  )
}
