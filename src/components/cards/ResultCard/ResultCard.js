import React, { useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalState'
import { ResultCardContainer, PosterWrapper, Info, Controls } from '../ResultCard/index'
import { BTN } from '../../../styled'

const ResultCard = ({ movie }) => {
  const { addMovieToWatchList, addMovieToWatched, watchList, watched } = useContext(GlobalContext);
  let storedMovie = watchList.find(obj => obj.id === movie.id);
  let storedMovieWatched = watched.find((obj) => obj.id === movie.id);
  const watchListDisabled = storedMovie ? true : storedMovieWatched ? true : false;
  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <ResultCardContainer className="result-card">
      <PosterWrapper>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (<div className="filler-poster"></div>
          )}
      </PosterWrapper>

      <Info>
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">{movie.release_date ? movie.release_date.substring(0, 4) : '--'}</h4>
        </div>
        <Controls>
          <BTN
            className="btn"
            disabled={watchListDisabled}
            onClick={() => addMovieToWatchList(movie)}
          >
            Add to Watchlist
        </BTN>
          <BTN
            className="btn"
            disabled={watchedDisabled}
            onClick={() => addMovieToWatched(movie)}
          >
            Add to Watched
        </BTN>
        </Controls>
      </Info>
    </ResultCardContainer>
  )
}

export default ResultCard
