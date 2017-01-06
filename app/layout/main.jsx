import React from 'react'
import LoadingBar from 'react-redux-loading-bar'

import Navigation from 'navigation'
import Footer from 'footer'

const Main = ({children}) => (
  <div>
    <Navigation/>
    <LoadingBar/>
    <div>
      {children}
      <Footer/>
    </div>

  </div>
)

Main.propTypes = { children: React.PropTypes.element }

export default Main
