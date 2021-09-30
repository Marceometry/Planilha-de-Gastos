import { ThemeProvider } from 'styled-components'
import { themes } from './themes'
import { GlobalStyles } from './styles/GlobalStyles'

export function Providers({ children }) {
  return (
    <ThemeProvider theme={themes['light']}>
      {children}
      <GlobalStyles />
    </ThemeProvider>
  )
}
