import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home, Table } from './pages'

export function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/tables/:id' exact>
          <Table />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
