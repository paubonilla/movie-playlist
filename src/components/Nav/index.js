import styled from 'styled-components'

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  padding: 0.5rem;

  .menu-icon {
    display: none;
  }

  .nav-menu {
    padding: 0;
    margin: 0;
    text-align: center;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 15px;
    @media (max-width: 768px) {
      grid-gap: 35px;
    }
    @media (max-width: 375px) {
      grid-gap: 10px;
    }
    @media (max-width: 320px) {
      grid-gap: 17px;
    }
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