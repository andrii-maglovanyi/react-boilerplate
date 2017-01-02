import React, {Component} from 'react'
import {connect} from 'react-redux'

import {addMessage} from 'actions'

@connect()
class MessageForm extends Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()

    if (this.text.value.length > 0) {
      this.props.dispatch(addMessage(this.name.value, this.text.value))
      this.name.value = ''
      this.text.value = ''
    } else {
      this.text.focus()
    }
  }

  render () {
    return (
      <form className="message-form" ref={form => this.form = form} onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input type="text" name="name" className="form-control" placeholder="Your name" ref={name => this.name = name}></input>
        </div>
        <div className="form-group">
            <textarea name="text" className="form-control" placeholder="Your message" ref={text => this.text = text}/>
        </div>
        <div className="form-group">
          <button className="btn btn-outline-primary form-control">Add message</button>
        </div>
      </form>
    )
  }
}

export default MessageForm
