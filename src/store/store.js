import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
import createRootReducer from "./reducers";

const enhancers = [];
const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__; // eslint-disable-line no-underscore-dangle

  if (typeof devToolsExtension === "function") {
    enhancers.push(
      devToolsExtension({
        // trace: true, //uncomment for dispatch tracing
        // traceLimit: 25,
      })
    );
  }
}

const componsedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

export const store = createStore(createRootReducer(), componsedEnhancers);
