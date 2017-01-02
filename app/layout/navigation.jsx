import React from 'react'
import {IndexLink, Link} from 'react-router'

const Navigation = () => {
  return (
    <nav className="navbar navbar-light bg-faded">
      <a className="navbar-brand" href="/">React Boilerplate</a>
      <ul className="nav navbar-nav">
        <li className="nav-item">
          <IndexLink className="nav-link" to="/">Home</IndexLink>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      </ul>
      <div className="float-xs-right navbar-text">
        Created by <a href="http://andrii-maglovanyi.github.io" target="_blank">Andrii Maglovanyi</a>
      </div>
    </nav>
  )
}

export default Navigation
