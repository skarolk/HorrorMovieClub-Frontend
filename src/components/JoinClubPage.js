import React, { Component } from 'react';
import { connect } from 'react-redux';
import withAuth from '../hocs/withAuth';
import { NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { fetchMovies, fetchUsers, fetchClubs, createClub } from '../actions';
import { setUserClub } from '../actions/user';
import UserIcon from './UserIcon';
// import { API_ROOT, HEADERS } from '../constants';

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
    console.log("Is condition one true?", (this.numberOfUsersInLastClub(this.props.clubs.length) === 6 && this.props.user.matched === null))
    if ( this.numberOfUsersInLastClub(this.props.clubs.length) === 6 && this.props.user.matched === null ) {
      let randomMovie = this.props.movies[Math.floor(Math.random() * this.props.movies.length)]
      console.log(randomMovie)
      console.log(this.props.createClub)
      this.props.createClub(randomMovie, this.props.user)
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
              {this.props.clubs.length > 0 && this.props.movies.length > 0 && this.props.users.length > 0 ?
                <Button primary onClick={() => this.clubController()} type="clubButton">Join Club</Button> : <div className="loadingClubDiv">Loading Your Club ...</div> }
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

export default withAuth(connect(mapStateToProps, { fetchMovies, fetchUsers, fetchClubs, setUserClub, createClub })(JoinClubPage));
