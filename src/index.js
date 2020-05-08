import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import Thunk from "redux-thunk";
import Logger from "redux-logger";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import rootReducer from "./reducers";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "font-awesome/css/font-awesome.min.css";

require('dotenv').config();

const store = createStore(rootReducer, applyMiddleware(Thunk, Logger));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
