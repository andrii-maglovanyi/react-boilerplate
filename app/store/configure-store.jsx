import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { loadingBarReducer, loadingBarMiddleware } from 'react-redux-loading-bar'

import {searchTextReducer, showAnonymousReducer, friendsReducer} from 'reducers'

const configureStore = (initialState = {}) => {
  const reducers = combineReducers({
    showAnonymous: showAnonymousReducer,
    searchText: searchTextReducer,
    friends: friendsReducer,
    loadingBar: loadingBarReducer
  })

  const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

  const middlewares = [promise(), loadingBarMiddleware(), thunk]

  if (process.env.NODE_ENV === 'development') {
    const logger = require('redux-logger')
    middlewares.push(logger())
  }

  const enhancers = composeEnhancers(applyMiddleware(...middlewares))

  return createStore(reducers, initialState, enhancers)
}

export default configureStore
