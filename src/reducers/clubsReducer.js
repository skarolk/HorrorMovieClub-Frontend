export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_CLUBS':
      return action.payload;
    case 'CREATE_CLUB':
      return [ ...state, action.payload ]
    default:
      return state;
  }
};
