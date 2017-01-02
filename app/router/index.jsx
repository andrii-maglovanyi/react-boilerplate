import React from 'react'
import {Route, Router, browserHistory, IndexRoute} from 'react-router'

import Main from 'main'
import Home from 'home'
import About from 'about'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <IndexRoute component={Home}/>
    </Route>
  </Router>
)
