import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="homeText">
        <h1>Scary Movie Club is like a book club for Horror Movies!</h1>
      </div>
      <div className="homeButtonContainer">
        <NavLink to="/signup">
          <div className="homeButton">
            <Button primary type="submit">Join a club now!</Button>
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default Home;
