import React from 'react';
import ReactDOM from 'react-dom';

import { ActionCableProvider } from 'react-actioncable-provider';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { API_WS_ROOT } from './constants';
import './index.css';

import App from './components/App';
import reducers from './reducers';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render((
  <React.Fragment>
    <Provider store={store}>
      <ActionCableProvider url={API_WS_ROOT}>
        <Router>
          <App />
        </Router>
      </ActionCableProvider>
    </Provider>
  </React.Fragment>),
  document.getElementById('root')
);

serviceWorker.unregister();
