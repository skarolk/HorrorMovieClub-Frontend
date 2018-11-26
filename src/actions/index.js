//Action creator
export const rateMovie = (movie) => {
  //Returns action
  return {
    type: 'MOVIE_RATED',
    payload: movie
  };
};
