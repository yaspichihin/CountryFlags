import axios from "axios";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { withExtraArgument } from "redux-thunk";

import { rootReducer } from "./root-reducer";
import * as api from "../config";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const thunkMiddleware = withExtraArgument({ client: axios, api });

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
