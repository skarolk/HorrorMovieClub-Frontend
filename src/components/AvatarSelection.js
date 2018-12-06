import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { setUserAvatar } from '../actions/user';

const SelectAvatar = (props) => {
  return (
    <div>
      <div className="avatarsHeader">
        <h1>Select your avatar{ props.user ? ` ${props.user.username}` : null }!</h1>
      </div>
      <div  className="avatarSelection">
        <NavLink to="/ratings" onClick={() => props.setUserAvatar(props.user.id, "https://i.imgur.com/z9IHE6c.jpg")}>
          <img src="https://i.imgur.com/z9IHE6c.jpg" alt="" className="avatars" />
        </NavLink>
        <NavLink to="/ratings" onClick={() => props.setUserAvatar(props.user.id, "https://i.imgur.com/15J2mom.jpg")}>
          <img src="https://i.imgur.com/15J2mom.jpg" alt="" className="avatars" />
        </NavLink>
        <NavLink to="/ratings" onClick={() => props.setUserAvatar(props.user.id, "https://i.imgur.com/K3OkLie.jpg")}>
          <img src="https://i.imgur.com/K3OkLie.jpg" alt="" className="avatars" />
        </NavLink>
        <NavLink to="/ratings" onClick={() => props.setUserAvatar(props.user.id, "https://i.imgur.com/bOZB0Cr.jpg")}>
          <img src="https://i.imgur.com/bOZB0Cr.jpg" alt="" className="avatars" />
        </NavLink>
        <NavLink to="/ratings" onClick={() => props.setUserAvatar(props.user.id, "https://i.imgur.com/dwIweoZ.jpg")}>
          <img src="https://i.imgur.com/dwIweoZ.jpg" alt="" className="avatars" />
        </NavLink>
        <NavLink to="/ratings" onClick={() => props.setUserAvatar(props.user.id, "https://i.imgur.com/capjYyg.jpg")}>
          <img src="https://i.imgur.com/capjYyg.jpg" alt="" className="avatars" />
        </NavLink>
        <NavLink to="/ratings" onClick={() => props.setUserAvatar(props.user.id, "https://i.imgur.com/gqpYNzZ.jpg")}>
          <img src="https://i.imgur.com/gqpYNzZ.jpg" alt="" className="avatars" />
        </NavLink>
        <NavLink to="/ratings" onClick={() => props.setUserAvatar(props.user.id, "https://i.imgur.com/T8vQiZn.jpg")}>
          <img src="https://i.imgur.com/T8vQiZn.jpg" alt="" className="avatars" />
        </NavLink>
        <NavLink to="/ratings" onClick={() => props.setUserAvatar(props.user.id, "https://i.imgur.com/wr7hnGt.jpg")}>
          <img src="https://i.imgur.com/wr7hnGt.jpg" alt="" className="avatars" />
        </NavLink>
        <NavLink to="/ratings" onClick={() => props.setUserAvatar(props.user.id, "https://i.imgur.com/6CK3rj2.jpg")}>
          <img src="https://i.imgur.com/6CK3rj2.jpg" alt="" className="avatars" />
        </NavLink>
        <NavLink to="/ratings" onClick={() => props.setUserAvatar(props.user.id, "https://i.imgur.com/uKL4VNw.jpg")}>
          <img src="https://i.imgur.com/uKL4VNw.jpg" alt="" className="avatars" />
        </NavLink>
        <NavLink to="/ratings" onClick={() => props.setUserAvatar(props.user.id, "https://i.imgur.com/BvYLhZ7.jpg")}>
          <img src="https://i.imgur.com/BvYLhZ7.jpg" alt="" className="avatars" />
        </NavLink>
        <NavLink to="/ratings" onClick={() => props.setUserAvatar(props.user.id, "https://i.imgur.com/YtgYx95.jpg")}>
          <img src="https://i.imgur.com/YtgYx95.jpg" alt="" className="avatars" />
        </NavLink>
        <NavLink to="/ratings" onClick={() => props.setUserAvatar(props.user.id, "https://i.imgur.com/SXeS1Sy.jpg")}>
          <img src="https://i.imgur.com/SXeS1Sy.jpg" alt="" className="avatars" />
        </NavLink>
        <NavLink to="/ratings" onClick={() => props.setUserAvatar(props.user.id, "https://i.imgur.com/QwLEERZ.jpg")}>
          <img src="https://i.imgur.com/QwLEERZ.jpg" alt="" className="avatars" />
        </NavLink>
      </div>
    </div>
  )
}

// export default SelectAvatar;

const mapStateToProps = (reduxStoreState) => {
  return {
    user: reduxStoreState.userReducer.user
  }
}

export default withRouter(connect(mapStateToProps, { setUserAvatar })(SelectAvatar));
