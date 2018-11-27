import React from 'react';
import { NavLink } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="signupForm">
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
          <label htmlFor="username"></label>
        </div>
        <div>
          <input type="text" name="email" placeholder="Email" />
          <label htmlFor="email"></label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password"></label>
        </div>
        <NavLink to="/ratings">
          <div className="signupButton">
            <input type="submit" value="Sign Up Now!" />
          </div>
        </NavLink>
      </form>
    </div>
  );
};

export default Signup;
