import { combineReducers } from "redux";

import { themesReducer } from "./themes/themes-reducers";
import { countriesReducers } from "./countries/countries-reducers";

export const rootReducer = combineReducers({
  themes: themesReducer,
  countries: countriesReducers,
});
