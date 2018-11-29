import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const UserIcon = (props) => {
  return (
    <img src={ props.user ? props.user.image : null } alt="" className="userIcon" />
  )
}

const mapStateToProps = (reduxStoreState) => {
  return {
    user: reduxStoreState.usersReducer.user
  }
}

export default withRouter(connect(mapStateToProps)(UserIcon));
