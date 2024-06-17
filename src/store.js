import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";

import * as api from "./config";
import { themeReducer } from "./feature/theme/theme-slice";
import { controlsReducer } from "./feature/controls/controls-slice";
import { countriesReducer } from "./feature/countries/countries-slice";
import { countryReducer } from "./feature/country/country-slice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    controls: controlsReducer,
    countries: countriesReducer,
    country: countryReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      // Для работы с axios (убрать ошибки в консоли)
      serializableCheck: false,
    }),
});
