import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//
export const loadCountries = createAsyncThunk(
  "countries/loadCountries",
  (_, { extra: { client, api } }) => {
    return client.get(api.getAllCountries());
  }
);

const initialState = {
  status: "idle",
  error: null,
  entities: [],
};

// slice
export const countriesSlice = createSlice({
  name: "country",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCountries.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadCountries.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || action.meta.error;
      })
      .addCase(loadCountries.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.error = null;
        state.entities = action.payload.data;
      });
  },
});

// reducer
export const countriesReducer = countriesSlice.reducer;

// selectors
export function selectCountriesInfo(state) {
  return {
    status: state.countries.status,
    error: state.countries.error,
    qty: state.countries.entities.length,
  };
}

export function selectAllCountries(state) {
  return state.countries.entities;
}

export function selectVisibleCountries(state, { search = "", region = "" }) {
  return state.countries.entities.filter(
    (country) =>
      country.name.toLowerCase().includes(search.toLocaleLowerCase()) &&
      country.region.includes(region)
  );
}
