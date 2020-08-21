import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const MovieControls = ({ movie, type }) => {
  const { removeMovieFromWatchList } = useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {type === 'watchList' && (
        <>
          <button className="ctrl-btn">
            <i className="fa-fw fa fa-eye"></i>
          </button>
          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchList(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
    </div>
  )
}

export default MovieControls
