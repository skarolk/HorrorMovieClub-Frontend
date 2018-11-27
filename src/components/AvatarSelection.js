import React from 'react';
import { NavLink } from 'react-router-dom';

const SelectAvatar = () => {
  return (
    <div>
      <div className="avatarsHeader">
        <h1>Select your Avatar!</h1>
      </div>
      <div>
        <NavLink to="/ratings">
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

export default SelectAvatar;
