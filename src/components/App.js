import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MovieList from './MovieList';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import SelectAvatar from './AvatarSelection';

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Route exact path="/" component={Home} />
        <Route path="/ratings" component={MovieList} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/avatars" component={SelectAvatar} />
      </React.Fragment>
    </Router>
  )
}

export default App;
