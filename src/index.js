import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import configureStore from './store'
import * as types  from './actionTypes';
import App from "./App.js";

const store = configureStore();
// store.dispatch({type: types.APP_INIT })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById("root")
);
