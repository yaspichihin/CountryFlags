import { combineReducers } from "redux";

import { themesReducer } from "./themes/themes-reducers";

export const rootReducer = combineReducers({
  themes: themesReducer,
});
