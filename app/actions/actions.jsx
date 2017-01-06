import MessagesAPI from 'messages-api'

export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT'
export const TOGGLE_SHOW_ANONYMOUS = 'TOGGLE_SHOW_ANONYMOUS'
export const FETCH_MESSAGES = 'FETCH_MESSAGES'
export const ADD_MESSAGE = 'ADD_MESSAGE'

export const setSearchText = searchText => {
  return {
    type: SET_SEARCH_TEXT,
    searchText: searchText.toLowerCase()
  }
}

export const toggleShowAnonymous = () => {
  return {
    type: TOGGLE_SHOW_ANONYMOUS
  }
}

export const fetchMessages = () => {
  return (dispatch, getState) => {
    const state = getState()

    return dispatch({
      type: FETCH_MESSAGES,
      payload: state.friends.messages.length? state.friends.messages : MessagesAPI.fetchMessages()
    })
  }
}

export const addMessage = (name, text) => {
  return dispatch => {
    const message = {
      name: (name && name.length) ? name : 'anonymous',
      text
    }

    return dispatch({
      type: ADD_MESSAGE,
      payload: MessagesAPI.addMessage(message)
    })
  }
}
