import { ThemeContextProvider } from './themes/ThemeContext'
import { GlobalStyles } from './styles/GlobalStyles'
import { ExpensesProvider } from './contexts/ExpensesContext'

export function Providers({ children }) {
  return (
    <ThemeContextProvider>
      <ExpensesProvider>{children}</ExpensesProvider>
      <GlobalStyles />
    </ThemeContextProvider>
  )
}
