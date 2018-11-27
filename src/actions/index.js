import railsBackend from '../apis/railsBackend';
//Action creator
export const rateMovie = (movie) => {
  //Returns action
  return {
    type: 'MOVIE_RATED',
    payload: movie
  };
};

export const fetchMovies = () => async dispatch => {
  const response = await railsBackend.get('/movies');

  dispatch({ type: 'FETCH_MOVIES', payload: response.data })
};
