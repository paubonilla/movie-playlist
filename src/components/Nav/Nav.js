import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MenuItems } from './MenuItems'
import { NavContainer } from './index'
// import './Nav.scss'

export default function Nav() {
  const [clicked, setClicked] = useState(false)

  function handleClick() {
    setClicked({ clicked: !clicked })
  }

  return (
    <NavContainer>
      <div
        className="menu-icon"
        onClick={() => handleClick()}
      >
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item, i) => {
          return (
            <li key={i}><NavLink activeClassName={item.aCName} to={item.to} className={item.cName}>{item.title}</NavLink></li>
          )
        })}
      </ul>
    </NavContainer>
  )
}
