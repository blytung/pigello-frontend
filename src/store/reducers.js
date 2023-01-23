import { combineReducers } from "redux";

import {
  constants as exampleStoreConstants,
  reducer as exampleStoreReducer,
} from "./storeExample";

const createRootReducer = () =>
  combineReducers({
    [exampleStoreConstants.STORE_NAME]: exampleStoreReducer,
  });

export default createRootReducer;
