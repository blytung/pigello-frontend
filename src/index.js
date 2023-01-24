import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store/store";

console.log(store.getState());

ReactDOM.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  document.getElementById("root")
);
