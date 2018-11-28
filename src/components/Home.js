import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="homeText">
        <h1>Scary Movie Club is a like a book club but for Horror Movies</h1>
      </div>
      <div className="homeButtonContainer">
        <NavLink to="/signup">
          <button className="homeButton">
            Join my club now!
          </button>
        </NavLink>
      </div>
    </div>
  )
}

export default Home;
