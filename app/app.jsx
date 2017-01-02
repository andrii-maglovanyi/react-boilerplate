import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import configureStore from 'configure-store'
import 'applicationStyles'
import router from './router'

ReactDOM.render(
  <Provider store={configureStore()}>
    {router}
  </Provider>,
  document.getElementById('root')
)
