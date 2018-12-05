import railsBackend from '../apis/railsBackend';
export * from './user'
export * from './rate'
export * from './club'

export const fetchMovies = () => async dispatch => {
  const response = await railsBackend.get('/movies');

  dispatch({ type: 'FETCH_MOVIES', payload: response.data })
};

export const fetchUsers = () => async dispatch => {
  const response = await railsBackend.get('/users');

  dispatch({ type: 'FETCH_USERS', payload: response.data })
};

export const fetchClubs = () => async dispatch => {
  const response = await railsBackend.get('/clubs');

  dispatch({ type: 'FETCH_CLUBS', payload: response.data })
};
