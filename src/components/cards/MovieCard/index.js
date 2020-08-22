import styled from 'styled-components'

export const MovieCardContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  border: 0;
  display: block;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.7);
  img {
    width: 100%;
    display: block;
    border-radius: 10px;
  }
  &:hover .overlay {
    border: 3px solid #4DD3C2;
    border-radius: 10px;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid transparent;
    transition: all 0.3s ease;
  }
  .inner-card-controls {
    display: inline;
    background-color: red;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.8);
    border-radius: 5px;
    padding: 3px;
    opacity: 0;
    transition: all 0.3s ease;
  }
  &:hover .inner-card-controls {
    opacity: 1;
  }
`