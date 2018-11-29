export const rateMovie = (movie, userId, liked) => {
  console.log(movie.id)
  console.log(userId)
  console.log(liked)

  return (dispatch) => {
    fetch('http://localhost:4000/api/v1/ratings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        rating: {
          movie_id: movie.id,
          liked: liked,
          user_id: userId
        }
      })
    })
  }
};
