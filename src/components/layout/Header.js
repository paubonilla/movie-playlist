import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderContainer, InnerContent } from '../layout/index'
import { BTN, Container } from '../../styled'

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <InnerContent>
          <div className="brand">
            <Link to="/">WatchList</Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">Watch List</Link>
            </li>
            <li>
              <Link to="/watched">Watched</Link>
            </li>
            <li>
              <Link to="/add"><BTN>+ Add</BTN></Link>
            </li>
          </ul>
        </InnerContent>
      </Container>
    </HeaderContainer>
  )
}

export default Header