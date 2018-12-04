import React, { Component } from 'react';
import { connect } from 'react-redux';
import withAuth from '../hocs/withAuth';
import { NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { fetchMovies, fetchUsers, fetchClubs } from '../actions';
import { setUserClub } from '../actions/user';
import UserIcon from './UserIcon';
import { API_ROOT, HEADERS } from '../constants';

class JoinClubPage extends Component {

  componentDidMount() {
    this.props.fetchUsers()
    this.props.fetchMovies()
    this.props.fetchClubs()
  }

  numberOfUsersInLastClub = (clubId) => {
    let users = this.props.users.filter( user => user.club_id === clubId)
    return users.length
  }

  clubController = () => {
    let randomMovie = this.props.movies[Math.floor(Math.random() * this.props.movies.length)]
    console.log(randomMovie)
    if ( this.numberOfUsersInLastClub(this.props.clubs.length) === 6 && this.props.user.matched === null ) {
      let randomMovie = this.props.movies[Math.floor(Math.random() * this.props.movies.length)]
      console.log(randomMovie)
      fetch(`${API_ROOT}/clubs`, {
        method: 'POST',
        headers: HEADERS,
        body: JSON.stringify({
          movie_id: randomMovie.id,
          active: true
        })
      });
      this.props.setUserClub(this.props.user.id, this.props.clubs.length + 1)
    } else if ( this.numberOfUsersInLastClub(this.props.clubs.length) < 6 && this.props.user.matched === null ) {
      this.props.setUserClub(this.props.user.id, this.props.clubs.length)
    }
  }

  render() {
    return (
      <div className="clubContainer">
        <UserIcon />
        <div className="clubText">
          <h1>Ready to join your club for the week? Watch and discuss a movie with five other horror fans!</h1>
        </div>
        <div className="homeButtonContainer">
          <NavLink to="/my-weekly-club">
            <div className="homeButton">
              <Button primary onClick={() => this.clubController()} type="submit">Join Club</Button>
            </div>
          </NavLink>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (reduxStoreState) => {
  return {
    movies: reduxStoreState.movies,
    user: reduxStoreState.userReducer.user,
    users: reduxStoreState.users,
    clubs: reduxStoreState.clubs
  };
}

export default withAuth(connect(mapStateToProps, { fetchMovies, fetchUsers, fetchClubs, setUserClub })(JoinClubPage));
