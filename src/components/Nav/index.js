import styled from 'styled-components'

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;

  .menu-icon {
    /* display: none; */
  }

  .nav-menu {
    padding: 0;
    margin: 0;
    text-align: center;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 10px;
    /* li {
      display: inline-block;
      margin-right: 30px;
      @media (max-width: 320px) {
        margin-right: 10px;
      }
    }
    li:last-child {
      margin-right: 0;
    } */
  }
  
  .nav-links {
    color: #ECECEC;
    font-size: 1.25rem;
    @media (max-width: 320px) {
      font-size: 16px;
    }
    text-decoration: none;
    transition: all 0.3s ease;
    &:hover {
      opacity: 0.7;
    }
  }
`