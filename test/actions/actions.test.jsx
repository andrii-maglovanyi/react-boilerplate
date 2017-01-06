import {expect} from 'chai'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import configureMockStore from 'redux-mock-store'

import * as actions from 'actions'

const middlewares = [promise(), thunk]
let store

describe('actions', () => {
  beforeEach(() => {
    store = configureMockStore(middlewares)({friends: {messages: []}})
  })

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

  it('should generate ADD_MESSAGE action', (done) => {
    const action = actions.addMessage('John Doe', 'Something beautiful')
    let dispatch = store.dispatch(action)

    expect(dispatch).to.be.a('promise')
    dispatch.then(() => {
      const mockActions = store.getActions()
      expect(mockActions[0].type).to.equal(`${actions.ADD_MESSAGE}_PENDING`)

      expect(mockActions[1].type).to.equal(`${actions.ADD_MESSAGE}_FULFILLED`)

      expect(mockActions[1].payload.data.name).to.equal('John Doe')
      expect(mockActions[1].payload.data.text).to.equal('Something beautiful')
      done()
    }).catch(err => { done(err) })
  })

  it('should generate FETCH_MESSAGES action', (done) => {
    const action = actions.fetchMessages()
    let dispatch = store.dispatch(action)

    expect(dispatch).to.be.a('promise')

    dispatch.then(() => {
      const mockActions = store.getActions()
      expect(mockActions[0].type).to.equal(`${actions.FETCH_MESSAGES}_PENDING`)

      expect(mockActions[1].type).to.equal(`${actions.FETCH_MESSAGES}_FULFILLED`)

      const index = mockActions[1].payload.data.length - 1
      expect(mockActions[1].payload.data[index].name).to.equal('John Doe')
      expect(mockActions[1].payload.data[index].text).to.equal('Something beautiful')
      done()
    }).catch(err => { done(err) })
  })
})
