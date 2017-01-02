import React, {PureComponent} from 'react'

class Message extends PureComponent {
  static propTypes = {
    id: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired
  }

  render() {
    const {name, text} = this.props
    const messageClassName = name === 'anonymous' ? 'message message--anonymous' : 'message'

    return (
      <li className={messageClassName}>
        <p className="message__name">&bull; {name}</p>
        <p>{text}</p>
      </li>
    )
  }
}

export default Message
