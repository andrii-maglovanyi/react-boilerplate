import React, {PureComponent} from 'react'
import {connect} from 'react-redux'

import MessagesAPI from 'messages-api'
import {fetchMessages} from 'actions'
import Message from 'message'

@connect(state => state)
class MessagesList extends PureComponent {
  static propTypes = {
    showAnonymous: React.PropTypes.bool.isRequired,
    searchText: React.PropTypes.string.isRequired,
    friends: React.PropTypes.object,
    dispatch: React.PropTypes.func
  }

  componentWillMount() {
    this.props.dispatch(fetchMessages())
  }

  render () {
    const {friends, showAnonymous, searchText} = this.props

    if (friends.messages.length === 0) {
      const message = friends.error || 'No messages yet'
      return <p className="messages-list messages-list__notification">{message}</p>
    }

    const filteredMessages = MessagesAPI.filterMessages(friends.messages, showAnonymous, searchText)

    return (
      <ul className="messages-list">
        {filteredMessages.map(message => {
          return <Message key={message.id} {...message}/>})}
      </ul>
    )
  }
}

export default MessagesList
