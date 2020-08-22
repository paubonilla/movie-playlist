import styled from 'styled-components'

export const MoviePage = styled.div`
  padding: 30px 0;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
  }
  .heading {
    margin: 0;
  }
  .no-movies {
    color: #c4c4c4;
    font-size: 3rem;
    text-align: center;
  }
`

export const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  @media (min-width: 992px) {
    grid-template-columns: repeat(5, 1fr);
  }
`
