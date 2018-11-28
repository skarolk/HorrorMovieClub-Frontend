import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import usersReducer from './usersReducer';

const ratedMovieReducer = (ratedMovie = null, action) => {
  if (action.type === 'MOVIE_RATED') {
    return action.payload;
  }

  return ratedMovie;
};

export default combineReducers({
  movies: moviesReducer,
  usersReducer: usersReducer,
  ratedMovie: ratedMovieReducer
})
