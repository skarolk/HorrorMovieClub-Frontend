import React, { Component } from 'react';
import { connect } from 'react-redux';
import withAuth from '../hocs/withAuth';
import { NavLink, Redirect } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { fetchMovies, fetchUsers } from '../actions';
import UserIcon from './UserIcon';

class JoinClubPage extends Component {
  componentDidMount() {
    this.props.fetchUsers()
    this.props.fetchMovies()
  }

  render() {
    console.log(this.props)
    return (
      <div className="clubContainer">
        <UserIcon />
        <div className="clubText">
          <h1>Ready to join your club for the week? Watch and discuss a movie with five other horror fans!</h1>
        </div>
        <div className="homeButtonContainer">
          <NavLink to="/">
            <div className="homeButton">
              <Button primary type="submit">Join Club</Button>
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
    users: reduxStoreState.users
  };
}

export default withAuth(connect(mapStateToProps, { fetchMovies, fetchUsers })(JoinClubPage));
