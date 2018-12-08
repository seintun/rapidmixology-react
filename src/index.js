import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
// import logger from 'redux-logger'
import thunk from 'redux-thunk';
import rootReducer from './store/reducers/root.reducers'
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import getAuth from '.actions/auth/getAuth'
const store = createStore(
  rootReducer, 
  applyMiddleware(
    thunk,
    // logger
  ) 
)

// store.dispatch(getAuth())

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();