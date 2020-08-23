import styled from 'styled-components'

export const HeaderContainer = styled.div`
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.7);
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.7);
  a {
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

export const InnerContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  .name {
    @media (max-width: 480px) {
      display: none;
    }
  }

  .name a {
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
      @media (max-width: 320px) {
        margin-right: 10px;
      }
    }
    li:last-child {
      margin-right: 0;
    }
  }
`