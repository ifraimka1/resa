// index.js
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import gameReducer from "./reducers";
import rootSaga from "./sagas";
import App from "./App";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(gameReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
