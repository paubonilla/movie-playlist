import styled from 'styled-components'

export const AppContainer = styled.div`
  padding: 3rem;
  /* background: radial-gradient(#30475D, #1C1C2E); */
`

export const AppInner = styled.div`
  width: 100%;
`

export const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`

export const AddContainer = styled(Container)`
  padding-right: 0;
  padding-left: 0;
`

export const BTN = styled.button`
  padding: 10px 15px;
  background-color: #31475D;
  color: #fff;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 700;
  display: inline-block;
  border: none;
  font-size: 1rem;
  transition: all 0.3s ease;
  line-height: 1.1;
  @media (max-width: 320px) {
    width: 100%;
  }

  &:hover {
    background-color: #b2ebf2;
    opacity: 1;
    cursor: pointer;
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`

export const ADD_BTN = styled(BTN)`
  font-size: 10px;
  margin: 0;
` 