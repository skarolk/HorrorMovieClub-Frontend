export const loginUser = (username, password) => {
  return (dispatch) => {
    dispatch({ type: 'AUTHENTICATING_USER' })
    fetch('http://localhost:4000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password
        }
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
      .then(JSONResponse => {
        console.log('%c INSIDE .THEN', 'color: navy', JSONResponse)
        localStorage.setItem('jwt', JSONResponse.jwt)
        dispatch({ type: 'SET_CURRENT_USER', payload: JSONResponse.user })
      })
      .catch(r => r.json().then(e => dispatch({ type: 'FAILED_LOGIN', payload: e.message })))
  }
}

export const createUser = (username, email, password) => {
  return (dispatch) => {
    dispatch({ type: 'CREATE_USER' })
    fetch('http://localhost:4000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: username,
          email: email,
          password: password
        }
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
    .then(JSONResponse => {
      console.log('%c INSIDE .THEN', 'color: navy', JSONResponse)
      localStorage.setItem('jwt', JSONResponse.jwt)
      dispatch({ type: 'SET_CURRENT_USER', payload: JSONResponse.user })
    })
    .catch(r => r.json().then(e => dispatch({ type: 'FAILED_LOGIN', payload: e.message })))
  }
}

export const fetchCurrentUser = () => {
  return (dispatch) => {
    dispatch(authenticatingUser())
    fetch('http://localhost:4000/api/v1/profile', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
      .then(response => response.json())
      .then((JSONResponse) => dispatch(setCurrentUser(JSONResponse.user)))
  }
}

export const setUserAvatar = (userId, imageUrl) => {
  return (dispatch) => {
    fetch(`http://localhost:4000/api/v1/users/${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          image: imageUrl,
        }
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
    .then(userObj => {
      console.log('%c INSIDE .THEN', 'color: navy', userObj)
      dispatch({ type: 'SET_CURRENT_USER', payload: userObj})
    })
  }
}

export const setUserClub = (userId, clubId) => {
  return (dispatch) => {
    fetch(`http://localhost:4000/api/v1/users/${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          club_id: clubId,
          matched: true
        }
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
    .then(userObj => {
      console.log('%c INSIDE .THEN', 'color: navy', userObj)
      dispatch({ type: 'SET_CURRENT_USER', payload: userObj})
    })
  }
}

export const setCurrentUser = (userData) => ({
  type: 'SET_CURRENT_USER',
  payload: userData
})

export const failedLogin = (errorMsg) => ({
  type: 'FAILED_LOGIN',
  payload: errorMsg
})

export const authenticatingUser = () => ({ type: 'AUTHENTICATING_USER' })
