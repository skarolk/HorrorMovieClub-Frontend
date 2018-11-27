import { combineReducers } from 'redux';

const moviesReducer = () => {
  return [
    {name: "The Nun", poster: "https://image.tmdb.org/t/p/w780/sFC1ElvoKGdHJIWRpNB3xWJ9lJA.jpg"}
  ]
};

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
