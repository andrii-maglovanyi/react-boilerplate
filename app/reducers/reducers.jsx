import {SET_SEARCH_TEXT, TOGGLE_SHOW_ANONYMOUS, FETCH_MESSAGES, ADD_MESSAGE} from 'actions'

export const searchTextReducer = (state = '', action) => {
  switch (action.type) {
  case SET_SEARCH_TEXT:
    return action.searchText
  default:
    return state
  }
}

export const showAnonymousReducer = (state = true, action) => {
  switch (action.type) {
  case TOGGLE_SHOW_ANONYMOUS:
    return !state
  default:
    return state
  }
}

const initialMessagesState = {
  fetching: false,
  messages: []
}

export const friendsReducer = (state = initialMessagesState, action) => {
  switch(action.type) {
  case `${FETCH_MESSAGES}_PENDING`:
    return {...state, fetching: true}
  case `${FETCH_MESSAGES}_REJECTED`:
    return {...state, fetching: false, error: action.payload.message}
  case `${FETCH_MESSAGES}_FULFILLED`:
    return {...state, fetching: false, messages: action.payload.data}

  case `${ADD_MESSAGE}_PENDING`:
    return state
  case `${ADD_MESSAGE}_REJECTED`:
    return {...state, fetching: false, error: action.payload.message}
  case `${ADD_MESSAGE}_FULFILLED`:
    return {...state, fetching: false, messages: state.messages.concat(action.payload.data)}

  default:
    return state
  }
}
