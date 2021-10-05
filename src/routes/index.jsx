import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Monthly } from '../pages'

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path='/Unique'>
          <Unique />
        </Route> */}
        <Route path='/' exact>
          <Monthly />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
