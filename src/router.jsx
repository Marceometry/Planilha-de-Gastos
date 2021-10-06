import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from './pages'

export function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
