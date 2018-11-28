import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import MovieList from './MovieList';
import Home from './Home';
import Signup from './Signup';
import LoginForm from './Login';
import SelectAvatar from './AvatarSelection';
import NotFound from './NotFound';

const App = (props) => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/ratings" component={MovieList} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={LoginForm} />
        <Route path="/avatars" component={SelectAvatar} />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  )
}

export default withRouter(App);
