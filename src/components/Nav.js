import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
      <ul className="nav-links">
        <li>
          <NavLink activeClassName="active" to="/" className=".name" >Home</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/watchlist">Watchlist</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/watched">Watched</NavLink>
        </li>
        {/* <li>
          <NavLink to="/add"><ADD_BTN>add</ADD_BTN></NavLink>
        </li> */}
      </ul>
    </div>
  )
}
