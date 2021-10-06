import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home, TablePage } from './pages'

export function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/tables/:id' exact>
          <TablePage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
