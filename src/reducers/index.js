import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';

const ratedMovieReducer = (ratedMovie = null, action) => {
  if (action.type === 'MOVIE_RATED') {
    return action.payload;
  }

  return ratedMovie;
};

export default combineReducers({
  movies: moviesReducer,
  ratedMovie: ratedMovieReducer
})
