import React from 'react';

const Login = () => {
  return (
    <div className="signupForm">
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
          <label htmlFor="username"></label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password"></label>
        </div>
        <div className="loginButton">
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
};

export default Login;
