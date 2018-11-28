import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router';
import { setUserAvatar } from '../actions/user';

const SelectAvatar = (props) => {
  return (
    <div>
      <div className="avatarsHeader">
        <h1>Select your avatar{ props.user ? ` ${props.user.username}` : null }!</h1>
      </div>
      <div>
        <NavLink to="/ratings" onClick={() => setUserAvatar(props.user.id, "https://i.imgur.com/BKjrLyu.jpg")}>
          <img src="https://i.imgur.com/BKjrLyu.jpg" alt="" className="avatars" />
        </NavLink>
        <NavLink to="/ratings">
          <img src="https://i.imgur.com/6nSnrHi.jpg" alt="" className="avatars" />
        </NavLink>
        <NavLink to="/ratings">
          <img src="https://i.imgur.com/RTdi6B1.png" alt="" className="avatars" />
        </NavLink>
        <NavLink to="/ratings">
          <img src="https://i.imgur.com/lVjf1Yx.jpg" alt="" className="avatars" />
        </NavLink>
      </div>
    </div>
  )
}

// export default SelectAvatar;

const mapStateToProps = (reduxStoreState) => {
  return {
    user: reduxStoreState.usersReducer.user
  }
}

export default withRouter(connect(mapStateToProps, { setUserAvatar })(SelectAvatar));
