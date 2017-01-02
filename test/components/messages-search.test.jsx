import React from 'react'
import {Provider} from 'react-redux'
import configureMockStore from 'redux-mock-store'
import chai, {expect} from 'chai'
import {mount} from 'enzyme'
import spies from 'chai-spies'
chai.use(spies)

import MessageSearch from 'message-search'
import {SET_SEARCH_TEXT, TOGGLE_SHOW_ANONYMOUS} from 'actions'

const store = configureMockStore()({showAnonymous: false, searchText: ''})

describe('MessagesSearch', () => {
  let spy, messagesSearch

  beforeEach(() => {
    spy = chai.spy.on(store, 'dispatch')

    messagesSearch = mount(<Provider store={store}>
      <MessageSearch/>
    </Provider>)
  })

  it('should exist', () => {
    expect(MessageSearch).to.exist
  })

  it('should dispatch SET_SEARCH_TEXT with entered input text', () => {
    const searchText = 'Hi'

    messagesSearch.find('input[type="search"]').simulate('change', {target: {name: 'searchText', value: searchText}})

    expect(spy).to.have.been.called.with({
      type: SET_SEARCH_TEXT,
      searchText: searchText.toLowerCase()
    })
  })

  it('should call onSearch with proper checked value', () => {
    messagesSearch.find('input[type="checkbox"]').simulate('change', {target: {name: 'showAnonymous', checked: false}})

    expect(spy).to.have.been.called.with({
      type: TOGGLE_SHOW_ANONYMOUS
    })
  })
})
