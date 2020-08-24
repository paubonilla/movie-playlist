import styled from 'styled-components'

export const ResultCardContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
  }
`

export const PosterWrapper = styled.div`
  img,
  .filler-poster {
    width: 80%;
    @media (max-width: 320px) {
      width: 100%;
    }
    height: 100%;
    background-color: #dbdada;
    border-radius: 10px;
    margin-right: 15px;
    display: block;
    color: transparent;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .title {
    font-size: 1.25rem;
    color: var(--primary);
    font-weight: 600;
    margin: 0;
  }
  .release-date {
    font-size: 1.25rem;
    font-weight: 300;
    color: var(--primary);
    margin: 0;
  }
`

export const Controls = styled.div`
  button {
    margin-right: 10px;
    @media (max-width: 320px) {
      margin-right: 0;
    }
  }
`