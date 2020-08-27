import styled from 'styled-components'

export const HeaderContainer = styled.div`
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.7);
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.7);
`

export const InnerContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`

export const InputWrapper = styled.div`
  input {
    margin: 0;
    width: 93%;
    @media (max-width: 768px) {
      width: 97%;
    }
    @media (max-width: 320px) {
      width: 90%;
    }
    background-color: #31475D;
    padding: 10px;
    border-radius: 5px;
    border: none;
    color: var(--white);
    font-size: 1.25rem;
    &:focus {
      outline: none;
    }
  }
`

export const InputResults = styled.div`
  padding: 0;
  margin: 0;
  margin-top: 20px;
  li {
    list-style: none;
  }
`