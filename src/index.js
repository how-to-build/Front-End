import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Thunk from 'redux-thunk';
import Logger from 'redux-logger';

import './index.css';
import App from './App';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(Thunk, Logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));