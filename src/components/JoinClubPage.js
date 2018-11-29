import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const JoinClubPage = () => {
  return (
    <div className="clubContainer">
      <div className="clubText">
        <h1>Ready to join your club for the week? Watch and discuss a movie with five other horror fans!</h1>
      </div>
      <div className="homeButtonContainer">
        <NavLink to="/signup">
          <div className="homeButton">
            <Button primary type="submit">Join Club</Button>
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default JoinClubPage;
