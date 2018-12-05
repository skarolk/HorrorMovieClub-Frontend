import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

const UserIcon = (props) => {
  return (
    <div className="navContainer">
      <img src={ props.user ? props.user.image : null } alt="" className="userIcon" />
      <NavLink to="/" onClick={() => logOut()} className="signOutButton" >
      <button className="actualButton">Logout</button>
      </NavLink>
    </div>
  )
}

const logOut = () => {
  localStorage.clear()
  window.location.reload(true)
}

const mapStateToProps = (reduxStoreState) => {
  return {
    user: reduxStoreState.userReducer.user
  }
}

export default withRouter(connect(mapStateToProps)(UserIcon));

// <div className="userLogout">Log out</div>
