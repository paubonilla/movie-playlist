import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import MovieCard from '../../components/cards/MovieCard/MovieCard'
import { MoviePage, MovieGrid } from '../Watched/index'
import { Container } from '../../styled'

const Watched = () => {
  const { watched } = useContext(GlobalContext)
  return (
    <MoviePage>
      <Container>
        <div className="header">
          <h1 className="heading">Watched movies</h1>
          <span className="count-pill">{watched.length} {watched.length === 0 ? 'Movie' : 'Movies'}</span>
        </div>
        {watched.length > 0 ? (
          <MovieGrid>
            {watched.map(movie => (
              <MovieCard
                movie={movie}
                type="watched"
              />
            ))}
          </MovieGrid>
        ) : (
            <h2 className="no-movies">No movies in your list</h2>
          )}

      </Container>
    </MoviePage>
  )
}

export default Watched