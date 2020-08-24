import styled from 'styled-components'

export const AddContent = styled.div`
  padding: 50px 0;
  max-width: 600px;
  margin: 0 auto;
`

export const InputWrapper = styled.div`
  input {
    width: 100%;
    @media (max-width: 320px) {
      width: 91%;
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