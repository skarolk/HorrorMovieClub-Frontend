import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const UserIcon = (props) => {
  return (
    <div>
      <img src={ props.user ? props.user.image : null } alt="" className="userIcon" />

    </div>
  )
}

const mapStateToProps = (reduxStoreState) => {
  return {
    user: reduxStoreState.userReducer.user
  }
}

export default withRouter(connect(mapStateToProps)(UserIcon));

// <div className="userLogout">Log out</div>
