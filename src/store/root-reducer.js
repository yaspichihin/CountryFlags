import { combineReducers } from "redux";

import { themesReducer } from "./themes/themes-reducers";
import { countriesReducers } from "./countries/countries-reducers";
import { controlsReducer } from "./controls/controls-reducers";
import { countryReducer } from "./country/country-reducers";

export const rootReducer = combineReducers({
  themes: themesReducer,
  country: countryReducer,
  countries: countriesReducers,
  controls: controlsReducer,
});
