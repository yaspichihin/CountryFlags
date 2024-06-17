import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadCountryByName = createAsyncThunk(
  "country/loadCountryByName",
  (name, { extra: { client, api } }) => {
    return client.get(api.searchByCountry(name));
  }
);

export const loadNeighborsByBorder = createAsyncThunk(
  "country/loadNeighborsByBorder",
  (borders, { extra: { client, api } }) => {
    return client.get(api.filterByCode(borders));
  }
);

const initialState = {
  currentCountry: null,
  neighbors: [],
  status: "idle",
  error: null,
};

// slice
export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    clearCountry: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCountryByName.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadCountryByName.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || action.meta.error;
      })
      .addCase(loadCountryByName.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.error = null;
        state.currentCountry = action.payload.data[0];
      })
      .addCase(loadNeighborsByBorder.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadNeighborsByBorder.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || action.meta.error;
      })
      .addCase(loadNeighborsByBorder.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.error = null;
        state.neighbors = action.payload.data.map((country) => country.name);
      });
  },
});

// actions
export const { clearCountry } = countrySlice.actions;

// reducer
export const countryReducer = countrySlice.reducer;

// selectors
export function selectCountry(state) {
  return state.country.currentCountry;
}

export function selectCountryInfo(state) {
  return state.country;
}

export function selectNeighbors(state) {
  return state.country.neighbors;
}
