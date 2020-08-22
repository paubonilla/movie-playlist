import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import MovieCard from '../../components/cards/MovieCard/MovieCard'
import { MoviePage, MovieGrid } from '../Watched/index'
import { Container } from '../../styled'

const WatchList = () => {
  const { watchList } = useContext(GlobalContext);
  return (
    <MoviePage>
      <Container>
        <div className="header">
          <h1 className="heading">My Watchlist</h1>
          <span className="count-pill">{watchList.length} {watchList.length === 0 ? 'Movie' : 'Movies'}</span>
        </div>
        {watchList.length > 0 ? (
          <MovieGrid className="movie-grid">
            {watchList.map(movie => (
              <MovieCard
                movie={movie}
                type="watchList"
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

export default WatchList