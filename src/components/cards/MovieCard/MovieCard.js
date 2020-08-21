import React from 'react'
import MovieControls from '../../layout/MovieControls'
import { MovieCardContainer } from '../MovieCard/index'

const MovieCard = ({ movie, type }) => {
  return (
    <MovieCardContainer>
      <div className="overlay"></div>
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={`${movie.title} Poster`}
        />
      ) : (<div className="filler-poster"></div>
        )}

      <MovieControls movie={movie} type={type} />
    </MovieCardContainer>
  )
}

export default MovieCard
