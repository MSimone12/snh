import React from 'react'
import { createBrowserHistory } from 'history'
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom'

import withRoot from './withRoot'
import Home from './Home'

const history = createBrowserHistory()

const App = () => (
  <BrowserRouter history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
)
export default withRoot(App)
