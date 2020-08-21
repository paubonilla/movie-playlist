import styled from 'styled-components'

export const HeaderContainer = styled.div`
  background-color: #C1A57A;
  a {
    color: #ECECEC;
    font-size: 1.25rem;
    text-decoration: none;
    transition: all 0.3s ease;
    &:hover {
      opacity: 0.7;
    }
  }
`

export const InnerContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  .brand a {
    font-weight: 700;
    font-size: 1.5rem;
  }
  .nav-links {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    align-items: center;
    li {
      display: inline-block;
      margin-right: 30px;
    }
    li:last-child {
      margin-right: 0;
    }
  }
`