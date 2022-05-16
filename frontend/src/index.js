// initializing redux

import React from "react";
import ReactDOM from "react-dom";
// to keep track of store in global state
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

import App from "./App";
import "./index.css";

// define reducers
const store = createStore(reducers, compose(applyMiddleware(thunk)));

// wrap application with provider component
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
