import styled from 'styled-components'

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;

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
    grid-gap: 10px;
    @media (max-width: 480px) {
      grid-gap: 43px;
    }
    @media (max-width: 375px) {
      grid-gap: 20px;
    }
    @media (max-width: 320px) {
      grid-gap: 10px;
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

  /* @media screen and (max-width: 480px) {
    position: relative;

    .nav-menu {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 500px;
      position: absolute;
      top: 80px;
      left: -300px;
      opacity: 1;
      transition: all 0.5s ease;
    }
    .nav-menu .active {
      background: #333;
      left: 0;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 10;
    }
    .nav-links {
      text-align: center;
      padding: 2rem;
      width: 100%;
      display: table;

      &:hover {
        background-color: #777;
        border-radius: 0;
      }
    }
    .menu-icon {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(100%, -50%);
      font-size: 1.8rem;
    }
  } */
`