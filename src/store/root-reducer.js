import { combineReducers } from "redux";

import { themesReducer } from "./themes/themes-reducers";
import { countriesReducers } from "./countries/countries-reducers";
import { controlsReducer } from "./controls/controls-reducers";

export const rootReducer = combineReducers({
  themes: themesReducer,
  countries: countriesReducers,
  controls: controlsReducer,
});
