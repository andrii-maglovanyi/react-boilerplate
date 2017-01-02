import React, {PureComponent} from 'react'
import {connect} from 'react-redux'

import {setSearchText, toggleShowAnonymous} from 'actions'

@connect((state) => ({
  showAnonymous: state.showAnonymous,
  searchText: state.searchText
}))
class MessageSearch extends PureComponent {
  static propTypes = {
    showAnonymous: React.PropTypes.bool.isRequired,
    searchText: React.PropTypes.string.isRequired,
    dispatch: React.PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)

    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(e) {
    switch (e.target.name) {
    case 'searchText':
      this.props.dispatch(setSearchText(e.target.value))
      break
    case 'showAnonymous':
      this.props.dispatch(toggleShowAnonymous(e.target.checked))
      break
    }
  }

  render() {
    let {showAnonymous, searchText} = this.props

    return (
      <div className="message-search">
        <div className="form-group">
          <input name="searchText" type="search" className="form-control" value={searchText} placeholder="Search messages" onChange={this.handleSearch}/>
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <input name="showAnonymous" type="checkbox" className="form-check-input" checked={showAnonymous} onChange={this.handleSearch}/>{' '}
            Show anonymous messages
          </label>
        </div>
      </div>
    )
  }
}

export default MessageSearch
