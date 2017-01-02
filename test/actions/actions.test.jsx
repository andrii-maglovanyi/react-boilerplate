import {expect} from 'chai'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

import * as actions from 'actions'

const middlewares = [thunk]
const store = configureMockStore(middlewares)()

describe('actions', () => {
  it('should generate SET_SEARCH_TEXT action', () => {
    const action = {
      type: actions.SET_SEARCH_TEXT,
      searchText: 'Something'
    }

    const res = actions.setSearchText(action.searchText)

    expect(res).to.deep.equal({...action, searchText: action.searchText.toLowerCase()})
  })

  it('should generate TOGGLE_SHOW_ANONYMOUS action', () => {
    const action = {
      type: actions.TOGGLE_SHOW_ANONYMOUS
    }

    const res = actions.toggleShowAnonymous()

    expect(res).to.deep.equal(action)
  })

  it('should generate ADD_MESSAGE action', () => {
    const action = actions.addMessage('John Doe', 'Something beautiful')
    let dispatch = store.dispatch(action)

    expect(dispatch.type).to.equal(actions.ADD_MESSAGE)
    expect(dispatch.payload).to.be.a('promise')
  })
})
