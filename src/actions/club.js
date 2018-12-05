export const createClub = (movie, user) => {
  console.log(movie.id)
  return (dispatch) => {
    console.log("About to POST to club")
    fetch(`http://localhost:4000/api/v1/clubs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        movie_id: movie.id,
        active: true
      })
    })
    .then(response => {
      console.log(response)
      if (response.ok) {
        return response.json()
      } else {
        throw response
      }
    })
    .then(response => {
      console.log(response.club.id)
      dispatch({ type: 'CREATE_CLUB', payload: response.club })
      dispatch({ type: 'SET_CURRENT_USER', payload: {...user, club_id: response.club.id, matched: true}})
    })
  }

};
