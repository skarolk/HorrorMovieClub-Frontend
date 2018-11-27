import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';

import MovieList from './components/MovieList';
import Home from './components/Home';
import reducers from './reducers';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
  <Provider store={createStore(reducers)}>
    <Router>
      <React.Fragment>
        <Route exact path="/" component={Home} />
        <Route path="/ratings" component={MovieList} />
      </React.Fragment>
    </Router>
  </Provider>),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
