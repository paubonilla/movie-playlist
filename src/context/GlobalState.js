import React, { createContext, useReducer, useEffect } from 'react'
import AppReducer from './AppReducer'

// initial state
const initialState = {
  watchList: localStorage.getItem('watchList') ? JSON.parse(localStorage.getItem('watchList')) : [],
  watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : [],
}

// create context

export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem('watchList', JSON.stringify(state.watchList));
    localStorage.setItem('watched', JSON.stringify(state.watched));
  }, [state])

  // actions
  // action add movies to list
  const addMovieToWatchList = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie })
  }

  // action remove movies from list
  const removeMovieFromWatchList = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
  }

  // action add to watched movies
  const addMovieToWatched = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
  }

  // move to watch list
  const moveToWacthList = (movie) => {
    dispatch({ type: "MOVE_TO_WATCHLIST", payload: movie });
  }

  // remove to watched
  const removeFromWatched = (id) => {
    dispatch({ type: "REMOVE_FROM_WATCHED", payload: id })
  }

  return (
    <GlobalContext.Provider
      value={{
        watchList: state.watchList,
        watched: state.watched,
        addMovieToWatchList,
        removeMovieFromWatchList,
        addMovieToWatched,
        moveToWacthList,
        removeFromWatched,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}