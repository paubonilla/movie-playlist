import styled from 'styled-components'

export const AppContainer = styled.div`
  padding: 3rem;
  height: 100vh;
  background: radial-gradient(#30475D, #1C1C2E);
`

export const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`

export const BTN = styled.button`
  padding: 10px 15px;
  background-color: #31475D;
  color: var(--primary);
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 700;
  display: inline-block;
  border: none;
  font-size: 1rem;
  transition: all 0.3s ease;
  line-height: 1.1;

  &:hover {
    background-color: #1aa762;
    opacity: 1;
    cursor: pointer;
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`