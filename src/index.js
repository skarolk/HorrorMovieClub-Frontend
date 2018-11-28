import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';

import App from './components/App';
import usersReducer from './reducers/usersReducer';
import reducers from './reducers';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

console.log('%c INITIAL REDUX STORE', 'color: purple', store.getState())

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>),
  document.getElementById('root')
);

serviceWorker.unregister();
