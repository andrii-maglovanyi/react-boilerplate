import axios from 'axios'

const URL = 'http://rest.learncode.academy/api/maglovanyi/' + process.env.CATEGORY

class MessagesAPI {
  fetchMessages() {
    return axios.get(URL)
  }

  addMessage(message) {
    return axios.post(URL, message)
  }

  filterMessages(messages, showAnonymous, searchText = '') {
    let filteredMessages = messages

    if (!showAnonymous) {
      filteredMessages = filteredMessages.filter((message) => {
        return message.name !== 'anonymous'
      })
    }

    if (searchText.length !== 0) {
      filteredMessages = filteredMessages.filter((message) => {
        return message.text.toLowerCase().indexOf(searchText) > -1
      })
    }

    filteredMessages.sort((a, b) => {
      if (a.name === 'anonymous' && b.name !== 'anonymous') {
        return 1
      } else if (a.name !== 'anonymous' && b.name === 'anonymous') {
        return -1
      } else {
        return 0
      }
    })

    return filteredMessages
  }
}

export default new MessagesAPI
