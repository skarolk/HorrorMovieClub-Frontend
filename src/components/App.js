import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';

import MovieList from './MovieList';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import SelectAvatar from './AvatarSelection';
import NotFound from './NotFound';

const App = (props) => {
  console.log('%c APP Props: ', 'color: firebrick', props)
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/ratings" component={MovieList} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/avatars" component={SelectAvatar} />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  )
}

export default withRouter(App);
