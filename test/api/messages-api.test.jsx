import {expect} from 'chai'

import MessagesAPI from 'messages-api'

describe('MessagesAPI', () => {
  it('should exist', () => {
    expect(MessagesAPI).to.exist
  })

  describe('filterMessages', () => {
    const messages = [{
      id: 1,
      name: 'John Doe',
      text: 'Some text here'
    }, {
      id: 2,
      name: 'anonymous',
      text: 'Other text here'
    }, {
      id: 3,
      name: 'John Doe',
      text: 'Some text here'
    }]

    it('should return all items if showAnonymous is true', () => {
      var filteredMessages = MessagesAPI.filterMessages(messages, true, '')
      expect(filteredMessages.length).to.equal(3)
    })

    it('should only return messages that are not anonymous', () => {
      var filteredMessages = MessagesAPI.filterMessages(messages, false, '')
      expect(filteredMessages.length).to.equal(2)
    })

    it('should sort by non-anonymous first', () => {
      var filteredMessages = MessagesAPI.filterMessages(messages, true, '')
      expect(filteredMessages[2].name).to.equal('anonymous')
    })

    it('should filter messages by searchText', () => {
      var filteredMessages = MessagesAPI.filterMessages(messages, true, 'some')
      expect(filteredMessages.length).to.equal(2)
    })

    it('should return all messages if searchText is empty', () => {
      var filteredMessages = MessagesAPI.filterMessages(messages, true, '')
      expect(filteredMessages.length).to.equal(3)
    })
  })
})
