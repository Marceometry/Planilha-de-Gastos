import { ExpensesProvider, ThemeContextProvider } from './contexts'
import { GlobalStyles } from './styles/GlobalStyles'

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
