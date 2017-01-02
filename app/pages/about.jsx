import React, {PureComponent} from 'react'

import MessagesList from 'messages-list'
import MessageForm from 'message-form'
import MessageSearch from 'message-search'

class About extends PureComponent {
  render() {
    return (
      <div className="container">
        <div className="row">
          <h1 className="text-xs-center pt-1 pb-1">About page</h1>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-10 offset-lg-3 offset-md-1">
            <MessageSearch/>
            <MessagesList/>
            <MessageForm/>
          </div>
        </div>
      </div>
    )
  }
}

export default About
