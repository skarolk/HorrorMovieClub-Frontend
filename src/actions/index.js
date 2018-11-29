import railsBackend from '../apis/railsBackend';
export * from './user'
export * from './rate'

export const fetchMovies = () => async dispatch => {
  const response = await railsBackend.get('/movies');

  dispatch({ type: 'FETCH_MOVIES', payload: response.data })
};
