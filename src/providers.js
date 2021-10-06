import { ThemeContextProvider } from './themes/ThemeContext'
import { GlobalStyles } from './styles/GlobalStyles'
import { ExpensesProvider } from './contexts/ExpensesContext'

export function Providers({ children }) {
  return (
    <ExpensesProvider>
      <ThemeContextProvider>
        {children}
        <GlobalStyles />
      </ThemeContextProvider>
    </ExpensesProvider>
  )
}
