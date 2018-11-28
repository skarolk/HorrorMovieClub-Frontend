import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Form, Segment, Message } from 'semantic-ui-react';

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="homeText">
        <h1>Scary Movie Club is a like a book club but for Horror Movies</h1>
      </div>
      <div className="homeButtonContainer">
        <NavLink to="/signup">
          <div className="homeButton">
            <Button type="submit">Join a club now!</Button>
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default Home;
