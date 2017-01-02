import React from 'react'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import chai, {expect} from 'chai'
import {mount} from 'enzyme'
import spies from 'chai-spies'
chai.use(spies)

import MessageForm from 'message-form'

const middlewares = [thunk]
const store = configureMockStore(middlewares)()

describe('MessageForm', () => {
  let spy, messageForm

  beforeEach(() => {
    spy = chai.spy.on(store, 'dispatch')

    messageForm = mount(
      <Provider store={store}>
        <MessageForm/>
      </Provider>)
  })

  it('should exist', () => {
    expect(MessageForm).to.exist
  })

  it('should dispatch ADD_MESSAGE if valid data submitted', () => {
    messageForm.find('input').first().node.value = 'Cassandra Ross'
    messageForm.find('textarea').first().node.value = 'Hello'
    messageForm.simulate('submit')

    expect(spy).to.have.been.called
  })

  it('should not call onMessageSubmit if invalid data submitted', () => {
    messageForm.find('textarea').first().node.value = ''
    messageForm.simulate('submit')

    expect(spy).to.not.have.been.called
  })
})
