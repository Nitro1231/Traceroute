import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import store from './reducers/store'

import Main from './pages/Main'

ReactDOM.render(
  <Provider store={createStore(store, applyMiddleware(reduxThunk))}>
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
