import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderContainer, InnerContent } from '../layout/index'
import { ADD_BTN, Container } from '../../styled'

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <InnerContent>
          <div className="name">
            <Link to="/">List</Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">Watchlist</Link>
            </li>
            <li>
              <Link to="/watched">Watched</Link>
            </li>
            <li>
              <Link to="/add"><ADD_BTN>add</ADD_BTN></Link>
            </li>
          </ul>
        </InnerContent>
      </Container>
    </HeaderContainer>
  )
}

export default Header