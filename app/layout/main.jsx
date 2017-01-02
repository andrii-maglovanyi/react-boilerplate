import React from 'react'
import LoadingBar from 'react-redux-loading-bar'

import Navigation from 'navigation'

const Main = ({children}) => (
  <div>
    <Navigation/>
    <LoadingBar/>
    <div>
      {children}
    </div>
  </div>
)

Main.propTypes = { children: React.PropTypes.element }

export default Main
