import React from 'react'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import {expect} from 'chai'
import {mount} from 'enzyme'

import MessagesList from 'messages-list'

const middlewares = [thunk]

describe('MessagesList', () => {
  let state

  beforeEach(() => {
    state = {showAnonymous: false, searchText: '', friends: {messages:[]}}
  })

  it('should exist', () => {
    expect(MessagesList).to.exist
  })

  it ('should render one Message component for each message item', () => {
    state.friends.messages = [{
      id: '1',
      name: 'anonymous',
      text: 'Fist one'
    }, {
      id: '2',
      name: 'John Doe',
      text: 'Good day'
    },
    {
      id: '3',
      name: 'Cassandra Ross',
      text: 'Some message'
    }]

    const store = configureMockStore(middlewares)(state)

    const messagesList = mount(<Provider store={store}>
      <MessagesList />
    </Provider>)

    expect(messagesList.find('li.message')).to.have.lengthOf(2)
  })

  it ('should render empty message if no messages', () => {
    const store = configureMockStore(middlewares)(state)

    const messagesList = mount(<Provider store={store}>
      <MessagesList/>
    </Provider>)

    expect(messagesList.find('p.messages-list__notification')).to.have.lengthOf(1)
  })
})
